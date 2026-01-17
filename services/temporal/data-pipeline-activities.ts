import { bqClient } from '@/lib/bigquery';
import { prisma } from '@/lib/prisma';
import { Context } from '@temporalio/activity';

// =================================================================================================
// 🧠 ORCHESTRATION ACTIVITIES (Triggering Cloud AI)
// =================================================================================================

/**
 * 1. Triggers the BigQuery ML job.
 * We do NOT pull raw data here. We tell BigQuery to run the model on the data we just ingested.
 */
export async function runBigQueryMLAnalysis(timeWindowHours: number = 24): Promise<string> {
  const jobId = `analysis-${Date.now()}`;
  Context.current().log.info(`🚀 Triggering BigQuery ML Job: ${jobId}`);

  // This SQL runs entirely inside Google Cloud.
  // It uses your ML model to detect anomalies on the 'TRANSACTIONS' table.
  // We write the results to a temporary 'ANOMALIES_DAILY' table.
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
    // We start the job and wait for BQ to finish the heavy lifting
    const [job] = await bqClient.createQueryJob({ query, location: 'US' });
    Context.current().log.info(`Job ${job.id} started. Waiting for BQML completion...`);

    await job.getQueryResults(); // Waits for completion

    Context.current().log.info(`✅ BQML Analysis Complete.`);
    return job.id || 'unknown';
  } catch (error) {
    Context.current().log.error('❌ BQML Job Failed', { error });
    throw error;
  }
}

/**
 * 2. Fetches ONLY the anomalies found by the ML model.
 * This ensures we only move "interesting" data over the network, not the bulk data.
 */
export async function fetchDetectedAnomalies(): Promise<any[]> {
  const query = `
    SELECT identifier, raw_amount, anomaly_probability, created_at
    FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.ANOMALIES_DAILY\`
    ORDER BY anomaly_probability DESC
    LIMIT 100
  `;

  const [rows] = await bqClient.query(query);
  Context.current().log.info(`🔎 Found ${rows.length} confirmed anomalies from ML Engine.`);
  return rows;
}

/**
 * 3. Operationalize: Create cases in Postgres for the human team.
 */
export async function createRiskCases(anomalies: any[]): Promise<void> {
  if (anomalies.length === 0) return;

  Context.current().log.info(`📝 Creating ${anomalies.length} Risk Cases in Dashboard...`);

  for (const anomaly of anomalies) {
    // Idempotency: Ensure we don't create duplicate cases for the same anomaly event
    // Using a composite key of identifier + timestamp
    const caseId = `CASE-${anomaly.identifier}-${new Date(anomaly.created_at.value).getTime()}`;

    // Check local Postgres via Prisma
    const existing = await prisma.sandbox.findUnique({ where: { alert_id: caseId } });

    if (!existing) {
        await prisma.sandbox.create({
        data: {
            alert_id: caseId,
            // Storing the anomaly details in the JSON payload
            payload: {
              type: 'ML_ANOMALY',
              confidence: anomaly.anomaly_probability,
              raw_amount: anomaly.raw_amount,
              status: 'OPEN',
              detected_by: 'VertexAI/BQML',
              timestamp: anomaly.created_at.value
            }
        }
        });
    }
  }
}
