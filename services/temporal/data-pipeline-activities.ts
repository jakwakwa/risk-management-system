import { bqClient } from '@/lib/bigquery';
import { prisma } from '@/lib/prisma';
import { Context } from '@temporalio/activity';

// =================================================================================================
// 🧠 ORCHESTRATION ACTIVITIES (Triggering Cloud AI)
// =================================================================================================

/**
 * 1. Triggers the BigQuery ML job.
 */
export async function runBigQueryMLAnalysis(timeWindowHours: number = 24): Promise<string> {
  const jobId = `analysis-${Date.now()}`;
  Context.current().log.info(`🚀 Triggering BigQuery ML Job: ${jobId}`);

  // Uses lowercase 'transactions' table
  const query = `
    CREATE OR REPLACE TABLE \`stratcol-risk-analysis-engine.risk_analysis_engine.ANOMALIES_DAILY\` AS
    SELECT *
    FROM ML.DETECT_ANOMALIES(
      MODEL \`stratcol-risk-analysis-engine.risk_analysis_engine.transaction_volume_model\`,
      STRUCT(${1 - 0.05} AS contamination),
      (
        SELECT identifier, raw_amount, created_at
        FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.transactions\`
        WHERE created_at >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL ${timeWindowHours} HOUR)
      )
    )
    WHERE is_anomaly = TRUE;
  `;

  try {
    const [job] = await bqClient.createQueryJob({ query, location: 'US' });
    Context.current().log.info(`Job ${job.id} started. Waiting for BQML completion...`);
    await job.getQueryResults();
    Context.current().log.info(`✅ BQML Analysis Complete.`);
    return job.id || 'unknown';
  } catch (error) {
    Context.current().log.error('❌ BQML Job Failed', { error });
    throw error;
  }
}

/**
 * 2. Fetches ONLY the detected anomalies.
 */
export async function fetchDetectedAnomalies(): Promise<any[]> {
  const query = `
    SELECT identifier, raw_amount, anomaly_probability, created_at
    FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.ANOMALIES_DAILY\`
    ORDER BY anomaly_probability DESC
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
              type: 'ML_ANOMALY',
              confidence: anomaly.anomaly_probability,
              raw_amount: anomaly.raw_amount,
              status: 'OPEN',
              detected_by: 'VertexAI/BQML',
              timestamp: timestamp
            }
        }
        });
    }
  }
}
