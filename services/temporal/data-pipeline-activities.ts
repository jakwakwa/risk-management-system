import { bqClient } from "@/lib/bigquery";
import { prisma } from "@/lib/prisma";
import { uploadReportToGCS } from "@/lib/storage";
import { Context } from "@temporalio/activity";
import { VertexAI } from "@google-cloud/vertexai";
import { getGcpAuthOptions } from "@/lib/gcp-auth";
import type { Anomaly } from "@/types/anomaly";

const { projectId, authClient } = getGcpAuthOptions();
import { createNotification } from "@/lib/notifications";

const resolvedProjectId =
	projectId || process.env.GCP_PROJECT_ID || "stratcol-risk-analysis-engine";
const resolvedLocation = process.env.VERTEX_AI_LOCATION || "us-central1";

const vertexAI = new VertexAI({
	project: resolvedProjectId,
	location: resolvedLocation,
	googleAuthOptions: authClient ? { authClient } : undefined,
});

// =================================================================================================
// 🧠 ORCHESTRATION ACTIVITIES (Triggering Cloud AI)
// =================================================================================================

/**
 * 1. Triggers the BigQuery ML job.
 */
export async function runBigQueryMLAnalysis(
	timeWindowHours: number = 24
): Promise<string> {
	const jobId = `analysis-${Date.now()}`;
	Context.current().log.info(`🚀 Triggering BigQuery ML Job: ${jobId}`);

	// Uses lowercase 'transactions' table
	const query = `
    CREATE OR REPLACE TABLE \`stratcol-risk-analysis-engine.risk_analysis_engine.ANOMALIES_DAILY\` AS
    SELECT *
    FROM ML.DETECT_ANOMALIES(
      MODEL \`stratcol-risk-analysis-engine.risk_analysis_engine.payment_anomaly_model\` -- Updated to K-Means model
      ,
      STRUCT(0.05 AS contamination), -- Contamination passed clearly in struct
      (
        SELECT identifier, raw_amount, created_at
        FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.transactions\`
        WHERE created_at >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL ${timeWindowHours} HOUR)
      )
    )
    WHERE is_anomaly = TRUE;
  `;

	try {
		await createNotification(
			"Analysis Started",
			`BigQuery ML analysis Job ${jobId} has started.`,
			"INFO"
		);
		const [job] = await bqClient.createQueryJob({ query, location: "US" });
		Context.current().log.info(`Job ${job.id} started. Waiting for BQML completion...`);
		await job.getQueryResults();
		Context.current().log.info(`✅ BQML Analysis Complete.`);
		return job.id || "unknown";
	} catch (error) {
		Context.current().log.error("❌ BQML Job Failed", { error });
		await createNotification(
			"Analysis Failed",
			`BigQuery ML analysis failed for job ${jobId}.`,
			"ERROR"
		);
		throw error;
	}
}

/**
 * 2. Fetches ONLY the detected anomalies.
 */
export async function fetchDetectedAnomalies(): Promise<Anomaly[]> {
	const query = `
    SELECT identifier, raw_amount, normalized_distance, created_at
    FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.ANOMALIES_DAILY\`
    ORDER BY normalized_distance DESC
    LIMIT 100
  `;

	const [rows] = await bqClient.query(query);
	return rows;
}

/**
 * 3. Creates Risk Cases in Postgres.
 */
export async function createRiskCases(anomalies: Anomaly[]): Promise<void> {
	if (anomalies.length === 0) return;
	Context.current().log.info(`📝 Creating ${anomalies.length} Risk Cases...`);

	for (const anomaly of anomalies) {
		// Handle BQ timestamp value access safely
		const timestamp = anomaly.created_at?.value || new Date().toISOString();
		const caseId = `CASE-${anomaly.identifier}-${new Date(timestamp).getTime()}`;

		const existing = await prisma.sandbox.findUnique({ where: { alert_id: caseId } });

		if (!existing) {
			await prisma.sandbox.create({
				data: {
					alert_id: caseId,
					payload: {
						type: "ML_ANOMALY",
						confidence: anomaly.normalized_distance, // Mapped from distance
						raw_amount: anomaly.raw_amount,
						status: "OPEN",
						detected_by: "VertexAI/BQML",
						timestamp: timestamp,
					},
				},
			});
		}
	}
}

/**
 * 4. Saves the daily report to GCS and records it in the database.
 */
export async function saveDailyReport(
	jobId: string,
	anomalies: Anomaly[]
): Promise<void> {
	const date = new Date().toISOString().split("T")[0];
	const filename = `reports/${date}/${jobId}.json`;

	Context.current().log.info(`💾 Saving report to GCS: ${filename}`);

	await uploadReportToGCS(filename, anomalies);

	await prisma.anomalyReport.create({
		data: {
			jobId,
			gcsPath: filename,
			anomalyCount: anomalies.length,
			status: "GENERATED",
		},
	});

	await createNotification(
		"Report Generated",
		`Anomaly report ${jobId} generated with ${anomalies.length} anomalies.`,
		"SUCCESS",
		undefined,
		`/reports/${jobId}`
	);
}

/**
 * 5. Generates a summary of the anomalies using Gemini 2.0 Flash.
 * Returns HTML-formatted text for emails.
 */
export async function generateReportSummary(anomalies: Anomaly[]): Promise<string> {
	if (anomalies.length === 0) {
		return "No anomalies detected.";
	}

	if (!(process.env.GCP_PROJECT_ID && process.env.VERTEX_AI_LOCATION)) {
		Context.current().log.warn("Missing Vertex AI configuration, skipping summary.");
		return "Summary generation skipped: Missing GCP configuration.";
	}

	try {
		const modelId = "gemini-2.0-flash-001";
		// Using preview for the latest model support
		const model = vertexAI.preview.getGenerativeModel({
			model: modelId,
			generationConfig: {
				maxOutputTokens: 2048,
				temperature: 0.4,
				topP: 0.8,
				topK: 40,
			},
		});

		const prompt = `
      You are a Senior Risk Analysis AI. Analyze the following payment anomalies detected by the engine.
      
      Provide a comprehensive, professional executive summary (3-4 paragraphs/sections) suitable for a risk manager.
      
      Structure the summary as follows:
      1. Overall Risk State: High-level overview of the detected activities.
      2. Critical Findings: Highlight the most significant anomalies (highest normalized_distance), explaining WHY they are flagged (e.g., amount vs. historical pattern).
      3. Actionable Recommendations: Specific steps for the investigation team.

      Formatting for HTML Email:
      - Use <b>text</b> for bolding.
      - Use <ul> and <li> for bullet points.
      - Use <p> for paragraphs.
      - DO NOT use Markdown syntax (no **, no #, no \`\`\`).
      - The response should be raw HTML that can be inserted directly into a div.

      Anomalies Data (Top 15):
      ${JSON.stringify(anomalies.slice(0, 15), null, 2)}
      
      (Showing top 15 of ${anomalies.length} anomalies)
    `;

		const result = await model.generateContent(prompt);
		const response = await result.response;

		if (!response.candidates || response.candidates.length === 0) {
			throw new Error("No candidates returned from Gemini");
		}

		const text = response.candidates[0].content.parts[0].text;

		if (!text) {
			throw new Error("Empty response text from Gemini");
		}

		Context.current().log.info("🤖 Gemini Summary Generated");
		return text;
	} catch (error) {
		Context.current().log.error("❌ Gemini Summary Failed", {
			error,
			projectId: resolvedProjectId,
			location: resolvedLocation,
			model: "gemini-2.0-flash-001",
		});
		return "Summary generation failed. Please review the full report.";
	}
}

/**
 * 6. Sends email alert after pipeline report is complete.
 */
export async function sendPipelineEmailAlert(
	jobId: string,
	anomalyCount: number,
	summary?: string
): Promise<void> {
	// Dynamic import to avoid bundling issues with Temporal
	const { sendPipelineAlertEmail } = await import("@/lib/email");

	Context.current().log.info(`📧 Sending pipeline alert email for job ${jobId}...`);

	const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
	const result = await sendPipelineAlertEmail({
		jobId,
		anomalyCount,
		timestamp: new Date(),
		reportUrl: `${appUrl}/reports/${jobId}`,
		summary,
	});

	if (result.success) {
		Context.current().log.info(`✅ Email sent successfully. ID: ${result.messageId}`);
		await createNotification(
			"Email Sent",
			`Pipeline alert email sent for job ${jobId}.`,
			"SUCCESS"
		);
	} else {
		Context.current().log.warn(`⚠️ Email failed: ${result.error}`);
		await createNotification(
			"Email Failed",
			`Failed to send pipeline alert email for job ${jobId}.`,
			"WARNING"
		);
	}
}
