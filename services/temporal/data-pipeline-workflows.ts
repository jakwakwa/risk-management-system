
import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './data-pipeline-activities';

const { 
  fetchPreviousDayTransactions, 
  transformToBigQuerySchema, 
  loadToBigQuery,
  runBatchInference,
  sendSlackAlert
} = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 hour',
});

export async function DailyEtlWorkflow(): Promise<string> {
  const transactions = await fetchPreviousDayTransactions();
  
  if (transactions.length === 0) {
      return 'No transactions to process.';
  }

  const bqRows = await transformToBigQuerySchema(transactions);
  await loadToBigQuery(bqRows);

  return `Successfully processed ${bqRows.length} transactions.`;
}

export async function DailyInferenceWorkflow(): Promise<string> {
    const result = await runBatchInference();
    
    // Example Alert Logic
    if (result.alerts > 0) {
        await sendSlackAlert(`⚠️ High Risk Alert: ${result.alerts} clients flagged in daily batch.`);
    }

    return `Inference complete. Processed: ${result.processed}, Alerts: ${result.alerts}`;
}
