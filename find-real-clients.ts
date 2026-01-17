import { bqClient } from './lib/bigquery';

async function findRealClients() {
  try {
    const query = `
      SELECT *
      FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.payment_transactions\`
      LIMIT 20
    `;
    const [rows] = await bqClient.query({ query });
    console.log("Potential Clients from Transactions:");
    console.log(JSON.stringify(rows, null, 2));
  } catch (e) {
    console.error(e);
  }
}

findRealClients();
