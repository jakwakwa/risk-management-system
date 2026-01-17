-- 1. Setup the Dataset (Idempotent)
CREATE SCHEMA IF NOT EXISTS `stratcol-risk-analysis-engine.risk_analysis_engine`;

-- 2. Create the Model for Volume Anomaly Detection
-- This uses ARIMA_PLUS, which automatically handles:
--   - Trends (increasing volume over time)
--   - Seasonality (higher volume on weekends/paydays)
--   - Holiday effects
CREATE OR REPLACE MODEL `stratcol-risk-analysis-engine.risk_analysis_engine.transaction_volume_model`
OPTIONS(
  model_type = 'ARIMA_PLUS',
  time_series_timestamp_col = 'time_bin',
  time_series_data_col = 'total_amount',
  auto_arima = TRUE,
  data_frequency = 'AUTO_FREQUENCY',
  decompose_time_series = TRUE
) AS
SELECT
    -- We aggregate data into hourly bins for the model training
    TIMESTAMP_TRUNC(created_at, HOUR) as time_bin,
    SUM(raw_amount) as total_amount
FROM `stratcol-risk-analysis-engine.risk_analysis_engine.TRANSACTIONS`
GROUP BY 1
ORDER BY 1 ASC;

-- 3. (Optional) Create a View for the Dashboard
-- This prevents the "404 Not Found" error you saw in the logs earlier
CREATE OR REPLACE VIEW `stratcol-risk-analysis-engine.risk_analysis_engine.client_behaviour_profiles` AS
SELECT 
  identifier as clientId,
  AVG(raw_amount) as avg_transaction_value,
  COUNT(*) as total_transactions,
  MAX(created_at) as last_activity
FROM `stratcol-risk-analysis-engine.risk_analysis_engine.TRANSACTIONS`
GROUP BY 1;