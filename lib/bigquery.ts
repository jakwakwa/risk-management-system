import { BigQuery } from '@google-cloud/bigquery';

const bigquery = new BigQuery({
  projectId: process.env.GCP_PROJECT_ID,
  // keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS 
  // In Cloud Run/Production, auth is automatic. Locally, rely on ADC or key file.
});

export const DATASET_ID = 'stratcol-risk-analysis-engine.risk_analysis_engine';

export const bqClient = bigquery;

export const BQ_TABLES = {
  TRANSACTIONS: `${DATASET_ID}.transactions`,
  CLIENTS: `${DATASET_ID}.clients`,
  EXTERNAL_INTELLIGENCE: `${DATASET_ID}.external_intelligence`, // Assuming standard convention
  RISK_PROFILE: `${DATASET_ID}.client_risk_profiles`,
  CLIENT_BEHAVIOUR_PROFILES: `${DATASET_ID}.client_behaviour_profiles`,
};
