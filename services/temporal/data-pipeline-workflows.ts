import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './data-pipeline-activities';

const {
  runBigQueryMLAnalysis,
  fetchDetectedAnomalies,
  createRiskCases,
  saveDailyReport
} = proxyActivities<typeof activities>({
  startToCloseTimeout: '10 minutes', // Extended for BQML training/inference time
});

export async function runAnomalyAnalysisWorkflow(): Promise<string> {
  const jobId = await runBigQueryMLAnalysis(24);
  const anomalies = await fetchDetectedAnomalies();

  await saveDailyReport(jobId, anomalies);

  if (anomalies.length > 0) {
    await createRiskCases(anomalies);
    return `Analysis Complete. Job ${jobId}. Anomalies detected: ${anomalies.length}`;
  }

  return `Analysis Complete. Job ${jobId}. No anomalies found.`;
}
