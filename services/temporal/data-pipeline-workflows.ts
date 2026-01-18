import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./data-pipeline-activities";

const {
	runBigQueryMLAnalysis,
	fetchDetectedAnomalies,
	createRiskCases,
	saveDailyReport,
	generateReportSummary,
	sendPipelineEmailAlert,
} = proxyActivities<typeof activities>({
	startToCloseTimeout: "10 minutes", // Extended for BQML training/inference time
});

export async function runAnomalyAnalysisWorkflow(): Promise<string> {
	const jobId = await runBigQueryMLAnalysis(24);
	const anomalies = await fetchDetectedAnomalies();

	// Create cases before generating summary and saving report
	if (anomalies.length > 0) {
		await createRiskCases(anomalies);
	}

	// Generate summary (can now theoretically include case IDs if activities were changed to return them,
	// but keeping same signatures for now)
	const summary = await generateReportSummary(anomalies);

	// Save report
	await saveDailyReport(jobId, anomalies);

	// Send email alert AFTER report is complete
	await sendPipelineEmailAlert(jobId, anomalies.length, summary);

	return `Analysis Complete. Job ${jobId}. Anomalies detected: ${anomalies.length}`;
}
