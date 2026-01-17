# BigQuery ML Anomaly Detection & Vertex AI Integration
**Date:** January 15, 2026
**Project:** Risk Management System (Risk Analysis Engine)

---

## 1. Executive Summary

### **Objective**
The goal was to transition from static rule-based risk checks to an autonomous, AI-driven anomaly detection system that not only identifies suspicious financial transactions but also provides human-readable explanations for *why* they are suspicious.

### **Achievements**
We have successfully deployed a **GenAI-powered Risk Engine** on Google Cloud Platform. This system leverages Google's latest AI models to:
1.  **Detect Fraud automatically**: Using unsupervised machine learning to find outliers in transaction patterns without needing pre-labeled examples.
2.  **Explain Findings**: Integrating **Gemini 2.5** (Google's cutting-edge Generative AI) to analyze the data and explain the risk to human analysts in plain English.

### **Business Value**
*   **Reduced False Positives**: The system learns "normal" behavior (e.g., small purchases at gas stations) and only flags genuine statistical outliers.
*   **Faster Investigations**: Analysts no longer need to decipher raw logs. The system provides a narrative (e.g., *"Anomalous because $5,000 is 50x higher than the average for Gas Station merchants"*).
*   **Future-Proof**: Built on the latest 2026-era models (`gemini-2.5-flash`), ensuring long-term support and high performance.

---

## 2. Technical Completion Report

### **Architecture Overview**
The solution is built entirely within **BigQuery**, utilizing **BigQuery ML (BQML)** for seamless integration of machine learning into the data warehouse.

*   **Platform**: Google BigQuery + Vertex AI
*   **Region**: `US` Multi-region (Data) / `us-central1` (Model Endpoint)
*   **Models Deployed**:
    1.  **`risk_analysis_engine.payment_anomaly_model`**: A **K-Means Clustering** model (k=4) that segments transactions to identify outliers based on `amount` and `merchant_category`.
    2.  **`risk_analysis_engine.gemini_flash`**: A **Remote Model** connected to Vertex AI's **`gemini-2.5-flash`** endpoint.

### **Implementation Details**
1.  **Infrastructure & Security**:
    *   Enabled `bigqueryconnection.googleapis.com` and `aiplatform.googleapis.com`.
    *   Created a Cloud Resource Connection (`us.vertex_ai_conn`).
    *   Granted `roles/aiplatform.user` to the BigQuery Service Account to allow secure, private access to Vertex AI.

2.  **Data Pipeline**:
    *   Created `risk_analysis_engine.payment_transactions` with synthetic data modeling realistic payment behaviors (Grocery, Gas, Online) and random high-value anomalies.

3.  **Integration Logic**:
    *   The system executes a single SQL query that pipelines `ML.DETECT_ANOMALIES` results directly into `ML.GENERATE_TEXT`.
    *   **Prompt Engineering**: *“Explain why a transaction of amount [X] at [Y] might be anomalous.”*

### **Challenges & Resolutions**
*   **Issue**: `Publisher Model not found` error during Remote Model creation.
    *   **Root Cause**: Latency in IAM permission propagation and regional alignment nuances between BigQuery multi-region and Vertex AI endpoints.
    *   **Resolution**: Updated model to specific `gemini-2.5-flash` version and allowed IAM permissions to propagate.

### **Next Steps**
*   **Productionize**: Replace the synthetic `payment_transactions` table with the live transaction stream.
*   **dbt Integration**: Move the `bq_ml_init.sql` logic into dbt models for version-controlled deployment.
