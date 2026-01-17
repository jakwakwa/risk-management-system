# Backend Upgrade Plan: Operational Data & Anomaly Detection

## Goal Description
To transform the current "Sanction Screening" tool into a comprehensive "Risk Analysis Engine" by implementing the missing critical components: **Operational Data Ingestion**, **BigQuery Data Warehousing**, and **AI-Driven Anomaly Detection**.

This plan addresses the gaps identified in the gap analysis and aligns the codebase with the "Risk Engine Objective and Planning.md".

## User Review Required
> [!IMPORTANT]
> **BigQuery & GCP Prerequisities**: This implementation requires active Google Cloud Platform credentials with BigQuery and Vertex AI APIs enabled.
>
> **Architecture Decision**: We will keep the application database (PostgreSQL) for *application state* (users, UI reports, active alerts) but use BigQuery as the *source of truth* for high-volume *operational data* (transactions).

## Proposed Architecture Logic

1.  **Ingestion Layer**: A new API route/service to accept transaction data from the core Debit Order System. This data is streamed directly to BigQuery.
2.  **Data Warehouse (BigQuery)**: Stores raw transaction logs. Scheduled queries (views) calculate aggregates (e.g., "Monthly Volume", "Bounced Rate").
3.  **Analysis Engine (Temporal + Vertex AI)**:
    -   A new Temporal Workflow (`RiskAnalysisWorkflow`) runs periodically.
    -   It queries BigQuery for client behavioral metrics.
    -   It uses Vertex AI (or BigQuery ML) to detect anomalies (e.g., "Volume spike > 50%").
    -   It writes "Risk Factors" back to the local PostgreSQL database for the UI to display.

## Proposed Changes

### 1. Infrastructure Configuration
#### [NEW] `lib/bigquery.ts`
-   Initialize Google BigQuery client.
-   Define dataset and table schemas (`transactions`, `client_stats`).

### 2. Operational Data Ingestion
#### [NEW] `app/api/ingest/transactions/route.ts`
-   API Endpoint to receive JSON payloads of transaction batches.
-   Validates data using Zod.
-   Streams data into BigQuery `raw_transactions` table.

### 3. Database Schema Updates (PostgreSQL)
#### [MODIFY] [prisma/schema.prisma](file:///Users/jacobkotzee/Projects/REPOS/ai-webapps/risk-management-system/prisma/schema.prisma)
-   Add `RiskProfile` model to store the *results* of the analysis (not the raw data).
-   Add `RiskAlert` model for specific flagged anomalies.
-   Add `TransactionStats` model (optional caching for UI performance).

### 4. Anomaly Detection Engine (Temporal)
#### [NEW] `services/temporal/workflows/risk-analysis.ts`
-   Workflow that coordinates the analysis process.
#### [NEW] `services/temporal/activities/analyze.ts`
-   `calculateMetrics`: Runs SQL query against BigQuery to get client stats.
-   `detectAnomalies`: Uses statistical thresholds (or calls Vertex AI) to identify potential risks.
-   `updateRiskProfile`: Writes results to Prisma/PostgreSQL.

### 5. UI Integration
#### [MODIFY] `components/risk-profile.tsx`
-   Fetch and display the risk profile and anomalies from PostgreSQL.
#### [MODIFY] [app/dashboard/page.tsx](file:///Users/jacobkotzee/Projects/REPOS/ai-webapps/risk-management-system/app/dashboard/page.tsx)
-   Update dashboard to show "High Risk Clients" based on behavioral anomalies, not just sanction matches.

## Verification Plan

### Automated Tests
-   **Ingestion**: Test API route with mock transaction data.
-   **Workflow**: Unit test the anomaly logic (e.g., mock BigQuery response with high bounce rate -> expect 'High Risk' result).

### Manual Verification
-   Post sample transactions to the ingestion API.
-   Run the `RiskAnalysisWorkflow` manually via Temporal CLI.
-   Verify BigQuery has data.
-   Verify Database `RiskAlert` table is populated.
-   Verify Dashboard shows the new alerts.
