# Scheduling Manager: User Guide

## Overview
The **Schedule Manager** is your control center for all automated tasks in the system. It allows you to manage individual client monitoring as well as global system maintenance tasks (like Data ETL and AI Batch runs).

### Accessing the Manager
Navigate to **Settings > Schedules** (or `/schedules`) in the main application sidebar.

---

## 1. Monitoring Clients
The default tab, **"Client Monitoring"**, is for managing recurring checks on specific companies or individuals.

### Creating a New Schedule
1.  **Client Name**: Enter the name of the entity you wish to monitor (e.g., "Acme Corp").
    *   *Note: This data is securely encrypted in the database.*
2.  **Schedule (Cron)**: Use the dropdown to select a frequency.
    *   `Every Minute` (Testing only)
    *   `Hourly` (High Risk)
    *   `Daily @ Midnight` (Standard)
    *   `Weekly` (Low Risk)
3.  Click **Create Schedule**.

### Managing Active Schedules
*   **Next Run**: Shows the exact date and time the system will next trigger a screening workflow for this client.
*   **Delete**: Immediately removes the client from rotation and cancels any pending runs.

---

## 2. System Pipelines
The **"System Pipelines"** tab controls the global engines that power the entire platform. 

> **⚠️ Warning**: Pausing or deleting these jobs will stop data from flowing into the Risk Engine. Only do this for maintenance.

### Available Pipelines

#### A. Daily Data Pipeline (ETL)
*   **Default Schedule**: 02:00 UTC Daily.
*   **Function**: Pulls yesterday's transaction data from the Operational DB and saves it to BigQuery.
*   **Status**: If missing, click **"Enable Daily ETL"** in the Quick Actions card.

#### B. Daily Risk Inference
*   **Default Schedule**: 06:00 UTC Daily.
*   **Function**: Runs the AI Model across *all* active clients to detect volume anomalies.
*   **Status**: If missing, click **"Enable Daily Inference"** in the Quick Actions card.

### Quick Actions
If a system job was accidentally deleted, you can restore it instantly using the **Quick Action** cards at the top of the tab.
*   **"Add Data Pipeline"**: Restores the 2am ETL job.
*   **"Add Inference Batch"**: Restores the 6am AI job.

---

## 3. Troubleshooting
**Q: I created a schedule, but I don't see a new report yet.**
A: The schedule determines *when* the job starts. If you set it to "Daily," it will run at midnight. To see results immediately, use the "Run Now" button (if available) or create a temporary "Every Minute" schedule for testing.

**Q: What do the "Badges" mean?**
*   `CLIENT_MONITORING`: A standard job focused on one entity.
*   `SYSTEM_ETL`: A global data movement job.
*   `SYSTEM_INFERENCE`: A global AI analysis job.
