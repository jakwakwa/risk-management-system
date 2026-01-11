
import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities'; // Imports all, including risk-activities

const { analyzeClientRisks, saveRiskProfile } = proxyActivities<typeof activities>({
  startToCloseTimeout: '5 minutes', // BQ queries can take time
  retry: {
      initialInterval: '5s',
      backoffCoefficient: 2,
      maximumAttempts: 5,
  }
});

export async function RiskAnalysisWorkflow(monitoringJobId: string, bqClientId: number): Promise<string> {
    // 1. Analyze Risks (BigQuery)
    const riskResult = await analyzeClientRisks(bqClientId);

    // 2. Save Results (Prisma)
    await saveRiskProfile(monitoringJobId, riskResult);

    return `Analysis completed for Client ${bqClientId}. Score: ${riskResult.riskScore}`;
}
