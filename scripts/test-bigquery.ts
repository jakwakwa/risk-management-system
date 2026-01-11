
import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  projectId: process.env.GCP_PROJECT_ID,
});

const DATASET_ID = 'stratcol-risk-analysis-engine.risk_analysis_engine';

async function main() {
  console.log('Testing BigQuery Connection...');
  
  // Parse IDs
  // Assuming format: Project.Dataset
  const parts = DATASET_ID.split('.');
  if (parts.length !== 2) {
      console.warn('Warning: DATASET_ID format might not be Project.Dataset. Parts:', parts);
  }
  
  const datasetId = parts.length === 2 ? parts[1] : DATASET_ID;
  const projectId = parts.length === 2 ? parts[0] : undefined;

  console.log(`Project: ${projectId}, Dataset: ${datasetId}`);

  try {
    // Try to list tables
    const [tables] = await bigquery.dataset(datasetId, { projectId }).getTables();
    console.log('Tables found:');
    tables.forEach(table => console.log(` - ${table.id}`));

    // Try to query Client table
    const query = `SELECT * FROM \`${DATASET_ID}.clients\` LIMIT 1`;
    console.log(`Running query: ${query}`);
    
    const [rows] = await bigquery.query({ query, location: 'US' }); // Adjust location if needed
    console.log('Query result:', rows);
    
  } catch (err) {
    console.error('BigQuery Error:', err);
  }
}

main();
