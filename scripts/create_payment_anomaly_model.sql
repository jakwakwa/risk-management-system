-- Create a K-Means model to detect anomalies in individual transactions based on amount.
-- This model is better suited for finding outliers in 'raw_amount' than the ARIMA time-series model.

CREATE OR REPLACE MODEL \`stratcol-risk-analysis-engine.risk_analysis_engine.payment_anomaly_model\`
OPTIONS(
  model_type='KMEANS',
  num_clusters=4,
  standardize_features = TRUE
) AS
SELECT
    raw_amount
FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.transactions\`
WHERE created_at >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY);
