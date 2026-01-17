import { bqClient } from "@/lib/bigquery";
import { prisma } from "@/lib/prisma";
import { uploadReportToGCS } from "@/lib/storage";
import { Context } from "@temporalio/activity";

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
		const [job] = await bqClient.createQueryJob({ query, location: "US" });
		Context.current().log.info(`Job ${job.id} started. Waiting for BQML completion...`);
		await job.getQueryResults();
		Context.current().log.info(`✅ BQML Analysis Complete.`);
		return job.id || "unknown";
	} catch (error) {
		Context.current().log.error("❌ BQML Job Failed", { error });
		throw error;
	}
}

/**
 * 2. Fetches ONLY the detected anomalies.
 */
export async function fetchDetectedAnomalies(): Promise<any[]> {
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
export async function createRiskCases(anomalies: any[]): Promise<void> {
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
export async function saveDailyReport(jobId: string, anomalies: any[]): Promise<void> {
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
}

/**
 * 5. Sends email alert after pipeline report is complete.
 */
export async function sendPipelineEmailAlert(
	jobId: string,
	anomalyCount: number
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
	});

	if (result.success) {
		Context.current().log.info(`✅ Email sent successfully. ID: ${result.messageId}`);
	} else {
		Context.current().log.warn(`⚠️ Email failed: ${result.error}`);
	}
}

/**
 * 5. Sends email alert after pipeline report is complete.
 */
export async function sendPipelineEmailAlert(
	jobId: string,
	anomalyCount: number
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
	});

	if (result.success) {
		Context.current().log.info(`✅ Email sent successfully. ID: ${result.messageId}`);
	} else {
		Context.current().log.warn(`⚠️ Email failed: ${result.error}`);
	}
}
