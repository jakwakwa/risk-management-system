CREATE OR REPLACE MODEL `stratcol-risk-analysis-engine.risk_analysis_engine.transaction_volume_model`
OPTIONS(model_type='ARIMA_PLUS', time_series_timestamp_col='created_at', time_series_data_col='total_amount') AS
SELECT
    created_at,
    SUM(raw_amount) as total_amount
FROM `stratcol-risk-analysis-engine.risk_analysis_engine.transactions`
GROUP BY created_at
ORDER BY created_at ASC;
