import { bqClient } from "../lib/bigquery";
import { prisma } from "../lib/prisma";
import { uploadReportToGCS } from "../lib/storage";

// Mock Context for logging
const MockContext = {
	current: () => ({
		log: {
			info: (msg: string, ...args: any[]) => console.log(`[INFO] ${msg}`, ...args),
			error: (msg: string, ...args: any[]) => console.error(`[ERROR] ${msg}`, ...args),
		},
	}),
};

// --- Activity Logic (Adapted from services/temporal/data-pipeline-activities.ts) ---

async function fetchDetectedAnomalies() {
	console.log("Fetching anomalies...");
	const query = `
    SELECT identifier, raw_amount, normalized_distance, created_at
    FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.ANOMALIES_DAILY\`
    ORDER BY normalized_distance DESC
    LIMIT 50
  `;
	const [rows] = await bqClient.query(query);
	console.log(`Fetched ${rows.length} rows.`);
	return rows;
}

async function createRiskCases(anomalies: any[]) {
	if (anomalies.length === 0) {
		console.log("No anomalies to process.");
		return;
	}

	MockContext.current().log.info(`📝 Creating ${anomalies.length} Risk Cases...`);

	for (const anomaly of anomalies) {
		// Handle BQ timestamp value access safely
		const timestamp = anomaly.created_at?.value || new Date().toISOString();
		const caseId = `CASE-VERIFY-${anomaly.identifier}-${new Date().getTime()}`; // Modified ID for verification to avoid collision with real runs if preferred, or keep same. Using VERIFY prefix.

		console.log(`Processing case: ${caseId}`);

		// Clean up test data if exists
		// await prisma.sandbox.deleteMany({ where: { alert_id: caseId } });

		const existing = await prisma.sandbox.findUnique({ where: { alert_id: caseId } });

		if (!existing) {
			await prisma.sandbox.create({
				data: {
					alert_id: caseId,
					payload: {
						type: "ML_ANOMALY",
						confidence: anomaly.normalized_distance,
						raw_amount: anomaly.raw_amount,
						status: "OPEN",
						detected_by: "VertexAI/BQML",
						timestamp: timestamp,
					},
				},
			});
			console.log(`Created case ${caseId}`);
		} else {
			console.log(`Case ${caseId} already exists.`);
		}
	}
}

async function saveDailyReport(jobId: string, anomalies: any[]) {
	const date = new Date().toISOString().split("T")[0];
	const filename = `reports/${date}/VERIFY-${jobId}.json`;

	MockContext.current().log.info(`💾 Saving report to GCS: ${filename}`);

	await uploadReportToGCS(filename, anomalies);

	await prisma.anomalyReport.create({
		data: {
			jobId: `VERIFY-${jobId}`,
			gcsPath: filename,
			anomalyCount: anomalies.length,
			status: "GENERATED",
		},
	});
	console.log(`Saved report reference to DB.`);
}

// --- Main Execution ---

async function run() {
	try {
		console.log("--- Starting Pipeline Verification ---");

		// 1. Fetch
		const anomalies = await fetchDetectedAnomalies();

		// 2. Create Cases
		await createRiskCases(anomalies);

		// 3. Save Report
		if (anomalies.length > 0) {
			await saveDailyReport(`job-${Date.now()}`, anomalies);
		}

		console.log("--- Verification Complete: SUCCESS ---");
		process.exit(0);
	} catch (error) {
		console.error("--- Verification Failed ---", error);
		process.exit(1);
	}
}

run();
