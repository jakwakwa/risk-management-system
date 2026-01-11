#!/bin/bash
set -e

# Configuration
SERVICE_ACCOUNT_NAME="risk-engine-sa"
DISPLAY_NAME="Risk Analysis Service Account"
PROJECT_ID=$(gcloud config get-value project)
REGION="europe-west1"

echo "Using Project ID: $PROJECT_ID"

# 1. Create the Service Account
if gcloud iam service-accounts describe "${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" > /dev/null 2>&1; then
    echo "Service Account ${SERVICE_ACCOUNT_NAME} already exists."
else
    echo "Creating Service Account: ${SERVICE_ACCOUNT_NAME}..."
    gcloud iam service-accounts create "${SERVICE_ACCOUNT_NAME}" \
        --display-name="${DISPLAY_NAME}"
fi

SA_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

# 2. Grant IAM Roles
echo "Granting IAM roles to ${SA_EMAIL}..."

# BigQuery Job User (to run queries)
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/bigquery.jobUser"

# BigQuery Data Editor (to read/write tables)
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/bigquery.dataEditor"

# Vertex AI User (to call predictions)
gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/aiplatform.user"

echo "IAM setup complete for ${SA_EMAIL}"
