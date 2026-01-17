
import { bqClient, BQ_TABLES } from '@/lib/bigquery';
import { db } from '@/lib/db';
import { Context } from '@temporalio/activity';

// Types
interface Transaction {
  id: string;
  amount: number;
  status: string;
  transactionDate: string; // ISO
  clientId: string;
  metadata?: any;
}

export interface EtlResult {
  count: number;
  status: 'SUCCESS' | 'FAILURE' | 'PARTIAL';
  error?: string;
}

// =================================================================================================
// ETL Activities
// =================================================================================================

export async function fetchPreviousDayTransactions(): Promise<Transaction[]> {
  // TODO: Connect to actual "Turso" or Operational DB.
  // For now, we simulate fetching from an external source or a local raw table.
  // If Turso is used, we'd need @libsql/client. 
  
  Context.current().log.info('Fetching transactions from Operational DB (Mock/Turso)...');
  
  // Mock data for demonstration
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  return [
    {
      id: 'tx_mock_1',
      amount: 100.50,
      status: 'PAID',
      transactionDate: yesterday.toISOString(),
      clientId: 'client_123',
    },
    {
      id: 'tx_mock_2',
      amount: 2500.00,
      status: 'PAID',
      transactionDate: yesterday.toISOString(),
      clientId: 'client_456',
    }
  ];
}

export async function transformToBigQuerySchema(rawTransactions: Transaction[]): Promise<any[]> {
  return rawTransactions.map(t => ({
    amount: t.amount,
    status: t.status,
    transactionDate: t.transactionDate, // BQ expects ISO string or specialized format
    client_id: t.clientId, // Logic to map string clientId to BQ integer ID might be needed
    ingested_at: new Date().toISOString(),
    metadata: JSON.stringify(t.metadata || {}),
  }));
}

export async function loadToBigQuery(rows: any[]): Promise<void> {
  if (rows.length === 0) return;
  
  const [datasetId, tableId] = BQ_TABLES.TRANSACTIONS.split('.').slice(1); // Assuming dataset.table format
  // Adjust based on how BQ_TABLES is defined (project.dataset.table or dataset.table)
  // safe parse
  const tableRef = bqClient.dataset(datasetId || 'risk_analysis_engine').table(tableId || 'transactions');
  
  try {
    await tableRef.insert(rows);
    Context.current().log.info(`Inserted ${rows.length} rows into BigQuery.`);
  } catch (e) {
    Context.current().log.error('BigQuery Insert Failed', { error: e });
    throw e;
  }
}

// =================================================================================================
// Inference Activities
// =================================================================================================

export async function runBatchInference(): Promise<any> {
    Context.current().log.info('Running Daily Batch Inference on BigQuery...');

    // 1. Run BQ Query to get features for all active clients
    // 2. Send to Vertex AI (or use BQ ML PREDICT)
    // 3. Store results in Postgres `RiskProfile`
    
    // Simulating the process:
    const query = `
        SELECT * FROM \`${BQ_TABLES.CLIENT_BEHAVIOUR_PROFILES}\`
        WHERE month = DATE_SUB(CURRENT_DATE(), INTERVAL 1 MONTH)
    `;
    Context.current().log.info(`Simulated Query: ${query}`);
    
    // In a real implementation:
    const [rows] = await bqClient.query(query);
    Context.current().log.info(`Batch Inference: Fetched ${rows.length} client profiles.`);
    
    // For each row -> predict -> save
    // TODO: Implement actual Vertex AI prediction loop here.
    
    return { processed: rows.length, alerts: 0 };
}

export async function sendSlackAlert(message: string): Promise<void> {
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (!webhookUrl) {
        Context.current().log.warn('No SLACK_WEBHOOK_URL configured.');
        return;
    }
    
    await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({ text: message }),
        headers: { 'Content-Type': 'application/json' }
    });
}
