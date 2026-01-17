# Scheduling & Automation: Business Guide

## Executive Summary
The Risk Management System now employs an advanced, enterprise-grade scheduling engine (**Temporal**) to automate critical business processes. This ensures that data ingestion, risk analysis, and client monitoring happen reliably, transparently, and without manual intervention.

Unlike traditional "cron jobs" that fire blindly, our system tracks every step of a distinct process. If a step fails (e.g., a network blip), the system automatically retries just that step, ensuring 99.9% reliability for mission-critical risk assessments.

---

## Key Automated Workflows

### 1. The Daily Data Pipeline (ETL)
*   **Purpose**: To synchronize yesterday's operational transaction data into our Intelligence Warehouse (BigQuery).
*   **Schedule**: Runs automatically every day at **02:00 UTC**.
*   **Business Value**: 
    *   Ensures our Risk Engine always acts on the freshest data.
    *   Eliminates manual CSV uploads or database syncs.
    *   Provides a clean audit trail of data lineage.

**How it works**:
1.  **Extract**: Connects to the Operational Database (Turso) and securely retrieves all transactions from the previous day.
2.  **Transform**: Anonymizes sensitive PII and formats data for high-performance analysis.
3.  **Load**: Streams the clean data into Google BigQuery for the AI models to consume.

### 2. Daily Risk Inference (AI Analysis)
*   **Purpose**: To proactively scan the entire client base for hidden risks using Artificial Intelligence.
*   **Schedule**: Runs automatically every day at **06:00 UTC** (after the data pipeline completes).
*   **Business Value**:
    *   **Proactive Protection**: Detects "Volume Spikes" or "Volatility Anamolies" before they result in a loss.
    *   **Scale**: Capable of scoring thousands of clients in minutes, a task that would take analysts weeks.

**How it works**:
1.  **Feature Engineering**: The AI looks at 3-month trends (moving averages, volatility) stored in BigQuery.
2.  **Prediction**: Vertex AI scores every active client on a scale of 0-100.
3.  **Alerting**: Anything scoring above **80 (High Risk)** automatically triggers a Slack alert to the Risk Team.

### 3. Continuous Client Monitoring
*   **Purpose**: Targeted surveillance of specific entities (e.g., Watchlist Clients, New Onboardings).
*   **Schedule**: Configurable per client (e.g., "Every Hour", "Every Monday").
*   **Business Value**:
    *   Allows granular control over high-value or high-risk accounts.
    *   Can trigger external checks (e.g., Negative Media Search, Sanctions Screening) on a recurring basis.

---

## Reliability & Security
*   **Resiliency**: If the Google Cloud AI service is temporarily down, the scheduler will pause and retry for up to 1 hour before raising an alarm. No assessments are "skipped" due to temporary outages.
*   **Security**: All client names in the scheduler are encrypted at rest. The system uses "Blind Indexing" to ensure we can look up schedules without exposing raw client names to database administrators.
