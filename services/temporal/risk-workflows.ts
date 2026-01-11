
import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { 
    transformAndAnalyzeData,
    predictRiskWithVertex,
    saveRiskProfile 
} = proxyActivities<typeof activities>({
    startToCloseTimeout: '10 minutes',
    retry: {
        initialInterval: '5s',
        backoffCoefficient: 2,
        maximumAttempts: 5,
    }
});

export async function RiskAnalysisWorkflow(monitoringJobId: string, bqClientId: number): Promise<string> {
    // Step 1: Transform & Prepare (BigQuery)
    await transformAndAnalyzeData(bqClientId);

    // Step 2: AI Prediction (Vertex AI)
    const riskScore = await predictRiskWithVertex(bqClientId);

    // Step 3: Result Ingestion
    await saveRiskProfile(monitoringJobId, {
        bqClientId,
        riskScore,
        anomalies: riskScore > 80 ? ['Vertex AI Flagged High Risk'] : []
    });

    return `Deep Analysis completed for Client ${bqClientId}. Risk Score: ${riskScore}`;
}
