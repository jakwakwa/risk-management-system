-- This query performs the "Transform and Prepare" step defined in your requirements
CREATE OR REPLACE PROCEDURE `stratcol-risk-analysis-engine.risk_analysis_engine.generate_client_metrics`(clientId INT64)
BEGIN
  -- 1. Aggregating Monthly Behaviour (Moving logic from TS to SQL)
  CREATE OR REPLACE TEMP TABLE MonthlyStats AS
  SELECT
    FORMAT_DATE('%Y-%m', transaction_date) as month_period,
    COUNT(*) as total_transaction_count,
    SUM(amount) as total_value,
    MAX(amount) as max_significant_transaction
  FROM `stratcol-risk-analysis-engine.risk_analysis_engine.transactions`
  WHERE client_id = clientId
  GROUP BY 1;

  -- 2. Write these "Deep Insights" to a serving table for Next.js
  MERGE `stratcol-risk-analysis-engine.risk_analysis_engine.client_behaviour_profiles` T
  USING MonthlyStats S
  ON T.client_id = clientId AND T.month = S.month_period
  WHEN MATCHED THEN
    UPDATE SET 
      total_count = S.total_transaction_count,
      total_value = S.total_value,
      significant_transaction = S.max_significant_transaction
  WHEN NOT MATCHED THEN
    INSERT (client_id, month, total_count, total_value, significant_transaction)
    VALUES (clientId, S.month_period, S.total_transaction_count, S.total_value, S.max_significant_transaction);
END;
