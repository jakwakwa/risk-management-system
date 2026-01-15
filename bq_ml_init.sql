-- 1. Create the Connection (User must run this in terminal)
-- bq mk --connection --location=US --project_id=stratcol-risk-analysis-engine --connection_type=CLOUD_RESOURCE vertex_ai_conn
-- gcloud projects add-iam-policy-binding stratcol-risk-analysis-engine --member="serviceAccount:..." --role="roles/aiplatform.user"

-- 2. Create the Synthetic Data Table
CREATE OR REPLACE TABLE `risk_analysis_engine.payment_transactions` AS
SELECT
  CAST(1000 + x AS STRING) as transaction_id,
  CASE 
    WHEN RAND() < 0.05 THEN 5000 + (RAND() * 1000) -- Anomaly
    ELSE 50 + (RAND() * 100) -- Normal
  END as amount,
  CASE 
    WHEN RAND() < 0.3 THEN 'Grocery Store'
    WHEN RAND() < 0.6 THEN 'Gas Station'
    ELSE 'Online Retailer'
  END as merchant_category,
  TIMESTAMP_ADD(CURRENT_TIMESTAMP(), INTERVAL CAST(-1 * x AS INT64) MINUTE) as transaction_time
FROM
  UNNEST(GENERATE_ARRAY(1, 1000)) as x;

-- 3. Create the Anomaly Detection Model (K-Means)
CREATE OR REPLACE MODEL `risk_analysis_engine.payment_anomaly_model`
OPTIONS(model_type='KMEANS', num_clusters=4, standardize_features = TRUE) AS
SELECT amount, merchant_category FROM `risk_analysis_engine.payment_transactions`;

-- 4. Create the Remote Model for Generative AI (Gemini)
-- Note: Ensure "vertex_ai_conn" service account has "Vertex AI User" role.
-- Note: Using 'gemini-2.5-flash' (Released ~Aug 2025). 
-- 'gemini-3-flash' is also available in some regions (Preview Dec 2025).
CREATE OR REPLACE MODEL `risk_analysis_engine.gemini_flash`
REMOTE WITH CONNECTION `us.vertex_ai_conn`
OPTIONS(endpoint = 'gemini-2.5-flash');

-- 5. Detect Anomalies and Explain (Integration)
SELECT
  anomalies.transaction_id,
  anomalies.amount,
  anomalies.merchant_category,
  anomalies.is_anomaly,
  explanations.ml_generate_text_result['candidates'][0]['content']['parts'][0]['text'] as explanation
FROM
  ML.DETECT_ANOMALIES(
    MODEL `risk_analysis_engine.payment_anomaly_model`,
    STRUCT(0.04 AS contamination),
    (SELECT * FROM `risk_analysis_engine.payment_transactions`)
  ) AS anomalies
  LEFT JOIN ML.GENERATE_TEXT(
    MODEL `risk_analysis_engine.gemini_flash`,
    (
      SELECT 
        transaction_id, 
        CONCAT('Explain why a transaction of amount ', amount, ' at ', merchant_category, ' might be anomalous.') as prompt
      FROM `risk_analysis_engine.payment_transactions`
    ),
    STRUCT(0.2 AS temperature, 100 AS max_output_tokens)
  ) AS explanations
  ON anomalies.transaction_id = explanations.transaction_id
WHERE is_anomaly = TRUE
ORDER BY normalized_distance DESC;
