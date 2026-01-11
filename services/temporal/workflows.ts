
import { proxyActivities } from '@temporalio/workflow';
import type * as activities from './activities';

const { screenCandidate, generateAssuranceReport, auditLog } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  retry: {
      initialInterval: '1s',
      backoffCoefficient: 2,
      maximumAttempts: 3,
  }
});

export async function RiskScreeningWorkflow(jobId: string): Promise<string> {
  // 1. Screen
  const matchResult = await screenCandidate(jobId);

  // 2. Report
  const reportData = await generateAssuranceReport(jobId, matchResult);

  // 3. Audit
  await auditLog(jobId, matchResult, reportData);

  return matchResult.result;
}

export * from './risk-workflows';
