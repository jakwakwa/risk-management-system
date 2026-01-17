import { proxyActivities } from '@temporalio/workflow';
// Import the TYPE of your new activities
import type * as activities from './data-pipeline-activities';

const {
  runBigQueryMLAnalysis,
  fetchDetectedAnomalies,
  createRiskCases
} = proxyActivities<typeof activities>({
  startToCloseTimeout: '5 minutes', // Give BQ time to run the model
});

export async function runAnomalyAnalysisWorkflow(): Promise<string> {
  // 1. Orchestrate: Tell BigQuery to run the ML job
  // We scan the last 24 hours by default
  const jobId = await runBigQueryMLAnalysis(24);

  // 2. Retrieve: Get only the flagged anomalies
  const anomalies = await fetchDetectedAnomalies();

  // 3. Operationalize: Create cases if anomalies exist
  if (anomalies.length > 0) {
    await createRiskCases(anomalies);
    return `Analysis Complete. Job ${jobId}. Anomalies detected: ${anomalies.length}`;
  }

  return `Analysis Complete. Job ${jobId}. No anomalies found.`;
}
