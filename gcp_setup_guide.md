# GCP Infrastructure Setup Guide

## Overview

This guide will help you provision and configure all Google Cloud Platform services required for the Risk Screening Engine in production.

**Estimated Time**: 45-60 minutes  
**Cost Estimate**: ~$50-150/month (depending on usage)

---

## Prerequisites

- **GCP Account** with billing enabled ([Sign up](https://cloud.google.com/))
- **gcloud CLI** installed ([Installation guide](https://cloud.google.com/sdk/docs/install))
- **Project Owner or Editor** role in your GCP project
- **Billing Account** linked to your project

---

## Architecture Overview

```
┌─────────────────┐
│ Cloud Scheduler │──┐
└─────────────────┘  │
                     ▼
┌─────────────────────────┐     ┌──────────────┐
│   Next.js on Cloud Run  │────▶│  Cloud Tasks │
│  (Brain A - Internal)   │     │    Queue     │
└─────────────────────────┘     └──────────────┘
         │         │                     │
         │         │                     ▼
         │         │            ┌──────────────────┐
         │         │            │  Screening Jobs  │
         │         │            │   (Fan-out)      │
         │         │            └──────────────────┘
         │         │
         ▼         ▼
┌──────────────┐  ┌─────────────────────┐
│  Cloud SQL   │  │  Cloud Storage      │
│ (PostgreSQL) │  │  (Locked Bucket)    │
│ + pgvector   │  │  7-Year Retention   │
└──────────────┘  └─────────────────────┘
         │
         ▼
┌─────────────────┐
│   Vertex AI     │
│  (Embeddings)   │
└─────────────────┘
```

---

## Step 1: Initial Setup

### 1.1 Authenticate with gcloud

```bash
gcloud auth login
```

### 1.2 Set Your Project

```bash
# List your projects
gcloud projects list

# Set the active project
gcloud config set project YOUR_PROJECT_ID

# Verify
gcloud config get-value project
```

### 1.3 Set Default Region/Zone

```bash
gcloud config set compute/region us-central1
gcloud config set compute/zone us-central1-a
```

### 1.4 Enable Required APIs

```bash
gcloud services enable \
  sqladmin.googleapis.com \
  cloudtasks.googleapis.com \
  storage.googleapis.com \
  aiplatform.googleapis.com \
  run.googleapis.com \
  cloudscheduler.googleapis.com \
  compute.googleapis.com \
  vpcaccess.googleapis.com \
  servicenetworking.googleapis.com
```

**Wait 2-3 minutes** for APIs to be fully enabled.

---

## Step 2: Create Service Account

### 2.1 Create the Service Account

```bash
gcloud iam service-accounts create screening-engine \
  --display-name="Risk Screening Engine" \
  --description="Service account for the risk screening application"
```

### 2.2 Grant Required Roles

```bash
PROJECT_ID=$(gcloud config get-value project)
SA_EMAIL="screening-engine@${PROJECT_ID}.iam.gserviceaccount.com"

# Cloud Tasks - Create and manage tasks
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/cloudtasks.enqueuer"

# Cloud Storage - Upload reports to GCS
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/storage.objectCreator"

# Vertex AI - Generate embeddings
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/aiplatform.user"

# Cloud SQL - Connect to database
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/cloudsql.client"

# Cloud Run - Allow scheduler to invoke
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/run.invoker"
```

### 2.3 Generate Service Account Key (Optional - for local testing)

```bash
gcloud iam service-accounts keys create ~/screening-engine-key.json \
  --iam-account=${SA_EMAIL}

echo "Service account key saved to: ~/screening-engine-key.json"
```

**⚠️ Security Warning**: Never commit this file to Git. Add to `.gitignore`.

---

## Step 3: Set Up Cloud SQL (PostgreSQL)

### 3.1 Create Cloud SQL Instance

```bash
gcloud sql instances create screening-db \
  --database-version=POSTGRES_15 \
  --tier=db-f1-micro \
  --region=us-central1 \
  --root-password=CHOOSE_A_STRONG_PASSWORD \
  --database-flags=cloudsql.iam_authentication=on
```

**Note**: For production, use `db-custom-2-8192` or higher. `db-f1-micro` is for testing only.

**This takes 5-10 minutes**. Check progress:

```bash
gcloud sql instances describe screening-db --format="value(state)"
```

Wait until output is `RUNNABLE`.

### 3.2 Create Database

```bash
gcloud sql databases create screening \
  --instance=screening-db
```

### 3.3 Create Database User

```bash
gcloud sql users create screening-user \
  --instance=screening-db \
  --password=CHOOSE_A_STRONG_PASSWORD
```

### 3.4 Enable Required Extensions

Connect to the database:

```bash
gcloud sql connect screening-db --user=postgres --database=screening
```

Enter the root password when prompted, then run:

```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS vector;

-- Verify extensions
SELECT * FROM pg_extension WHERE extname IN ('pg_trgm', 'vector');

-- Exit
\q
```

### 3.5 Get Connection Details

```bash
# Get the instance connection name
gcloud sql instances describe screening-db \
  --format="value(connectionName)"
```

Save this value - you'll need it for Cloud Run deployment.

Example output: `your-project-id:us-central1:screening-db`

### 3.6 Configure for Cloud Run Access

```bash
# Allow Cloud Run to connect via private IP (optional, more secure)
gcloud compute addresses create google-managed-services-default \
  --global \
  --purpose=VPC_PEERING \
  --prefix-length=16 \
  --network=default

gcloud services vpc-peerings connect \
  --service=servicenetworking.googleapis.com \
  --ranges=google-managed-services-default \
  --network=default
```

---

## Step 4: Create Cloud Storage Bucket with Retention Lock

### 4.1 Create the Bucket

```bash
BUCKET_NAME="compliance-reports-locked-$(gcloud config get-value project)"

gsutil mb -l us-central1 \
  -b on \
  gs://${BUCKET_NAME}
```

**Note**: Bucket names must be globally unique. The command above appends your project ID.

### 4.2 Set Retention Policy (7 Years)

```bash
gsutil retention set 7y gs://${BUCKET_NAME}
```

### 4.3 **CRITICAL: Lock the Bucket (Irreversible)**

⚠️ **WARNING**: This action is **PERMANENT and IRREVERSIBLE**. Once locked, the retention policy cannot be reduced or removed.

```bash
# Confirm you understand the implications
echo "This will PERMANENTLY lock the bucket. Files cannot be deleted for 7 years."
read -p "Type 'I UNDERSTAND' to continue: " confirm

if [ "$confirm" = "I UNDERSTAND" ]; then
  gsutil retention lock gs://${BUCKET_NAME}
  echo "✅ Bucket locked successfully"
else
  echo "❌ Bucket lock cancelled"
fi
```

### 4.4 Grant Service Account Access

```bash
gsutil iam ch \
  serviceAccount:${SA_EMAIL}:roles/storage.objectCreator \
  gs://${BUCKET_NAME}
```

### 4.5 Verify Bucket Configuration

```bash
gsutil retention get gs://${BUCKET_NAME}
```

Expected output:
```
Retention Policy (LOCKED):
  Duration: 7 Year(s)
  Effective Time: 2025-01-10T...
```

---

## Step 5: Create Cloud Tasks Queue

### 5.1 Create the Queue

```bash
gcloud tasks queues create screening-queue \
  --location=us-central1 \
  --max-concurrent-dispatches=500 \
  --max-dispatches-per-second=100 \
  --max-attempts=3 \
  --min-backoff=10s \
  --max-backoff=300s
```

### 5.2 Verify Queue

```bash
gcloud tasks queues describe screening-queue \
  --location=us-central1
```

---

## Step 6: Deploy Application to Cloud Run

### 6.1 Build and Push Container

First, ensure you have a `Dockerfile` in your project:

**File**: `Dockerfile`

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 8080

# Start application
CMD ["npm", "start"]
```

Build and push:

```bash
gcloud builds submit --tag gcr.io/${PROJECT_ID}/screening-engine
```

### 6.2 Deploy to Cloud Run

```bash
# Get Cloud SQL connection name
SQL_CONNECTION=$(gcloud sql instances describe screening-db \
  --format="value(connectionName)")

# Get bucket name
BUCKET_NAME="compliance-reports-locked-${PROJECT_ID}"

# Deploy
gcloud run deploy screening-engine \
  --image gcr.io/${PROJECT_ID}/screening-engine \
  --platform managed \
  --region us-central1 \
  --service-account ${SA_EMAIL} \
  --add-cloudsql-instances ${SQL_CONNECTION} \
  --set-env-vars "GCP_PROJECT_ID=${PROJECT_ID}" \
  --set-env-vars "GCS_BUCKET_NAME=${BUCKET_NAME}" \
  --set-env-vars "CLOUD_TASKS_QUEUE=screening-queue" \
  --set-env-vars "CLOUD_TASKS_LOCATION=us-central1" \
  --set-env-vars "VERTEX_AI_LOCATION=us-central1" \
  --set-env-vars "GCP_SERVICE_ACCOUNT_EMAIL=${SA_EMAIL}" \
  --set-env-vars "DATABASE_URL=postgresql://screening-user:YOUR_PASSWORD@localhost/screening?host=/cloudsql/${SQL_CONNECTION}" \
  --allow-unauthenticated \
  --max-instances=10 \
  --memory=1Gi \
  --cpu=1 \
  --timeout=300
```

**Important**: Replace `YOUR_PASSWORD` with the database password you set earlier.

### 6.3 Get Service URL

```bash
SERVICE_URL=$(gcloud run services describe screening-engine \
  --region us-central1 \
  --format="value(status.url)")

echo "Service deployed at: ${SERVICE_URL}"
```

Save this URL for the next step.

---

## Step 7: Configure Cloud Scheduler

### 7.1 Create Scheduler Job

```bash
gcloud scheduler jobs create http tick-scheduler \
  --location us-central1 \
  --schedule "* * * * *" \
  --uri "${SERVICE_URL}/api/cron/tick" \
  --http-method POST \
  --oidc-service-account-email ${SA_EMAIL} \
  --oidc-token-audience ${SERVICE_URL}
```

**Schedule explanation**: `* * * * *` = every minute. Adjust as needed:
- `*/5 * * * *` = every 5 minutes
- `0 * * * *` = every hour
- `0 0 * * *` = daily at midnight

### 7.2 Test Scheduler Job Manually

```bash
gcloud scheduler jobs run tick-scheduler \
  --location us-central1
```

### 7.3 View Scheduler Logs

```bash
gcloud scheduler jobs describe tick-scheduler \
  --location us-central1
```

---

## Step 8: Configure VPC for Brain A/B Architecture

This step isolates Brain A (internal screener) from public internet access.

### 8.1 Create VPC Connector

```bash
gcloud compute networks vpc-access connectors create screening-connector \
  --region us-central1 \
  --network default \
  --range 10.8.0.0/28 \
  --min-instances 2 \
  --max-instances 10
```

**This takes 5-10 minutes**.

### 8.2 Update Cloud Run with VPC Egress

```bash
gcloud run services update screening-engine \
  --region us-central1 \
  --vpc-connector screening-connector \
  --vpc-egress private-ranges-only
```

**Effect**: Brain A (Cloud Run) can now only access:
- Cloud SQL (via private IP)
- GCS (via Google internal network)
- Vertex AI (via Google internal network)
- **Cannot** access public internet

---

## Step 9: Set Up Brain B (External Data Scraper)

Brain B runs as a Cloud Run Job with public internet access.

### 9.1 Create Dockerfile for Scraper

**File**: `scraper.Dockerfile`

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY scripts/scrape-sanctions.ts ./scripts/
COPY prisma ./prisma

RUN npx prisma generate

CMD ["npx", "tsx", "scripts/scrape-sanctions.ts"]
```

### 9.2 Build Scraper Image

```bash
gcloud builds submit \
  --tag gcr.io/${PROJECT_ID}/sanctions-scraper \
  -f scraper.Dockerfile .
```

### 9.3 Create Cloud Run Job

```bash
gcloud run jobs create sanctions-scraper \
  --image gcr.io/${PROJECT_ID}/sanctions-scraper \
  --region us-central1 \
  --service-account ${SA_EMAIL} \
  --add-cloudsql-instances ${SQL_CONNECTION} \
  --set-env-vars "GCP_PROJECT_ID=${PROJECT_ID}" \
  --set-env-vars "VERTEX_AI_LOCATION=us-central1" \
  --set-env-vars "DATABASE_URL=postgresql://screening-user:YOUR_PASSWORD@localhost/screening?host=/cloudsql/${SQL_CONNECTION}" \
  --max-retries 2 \
  --task-timeout 1800
```

### 9.4 Run Scraper Manually

```bash
gcloud run jobs execute sanctions-scraper \
  --region us-central1
```

### 9.5 Schedule Scraper (Optional)

To run the scraper daily:

```bash
gcloud scheduler jobs create http scraper-daily \
  --location us-central1 \
  --schedule "0 2 * * *" \
  --uri "https://us-central1-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/${PROJECT_ID}/jobs/sanctions-scraper:run" \
  --http-method POST \
  --oauth-service-account-email ${SA_EMAIL} \
  --oauth-token-scope https://www.googleapis.com/auth/cloud-platform
```

---

## Step 10: Initialize Database Schema

### 10.1 Run Prisma Migration from Local

With service account credentials:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=~/screening-engine-key.json

# Update DATABASE_URL in .env.local to use Cloud SQL proxy
cloud_sql_proxy -instances=${SQL_CONNECTION}=tcp:5432 &

# In another terminal
DATABASE_URL="postgresql://screening-user:YOUR_PASSWORD@127.0.0.1:5432/screening" \
  npx prisma db push
```

### 10.2 Verify Tables

```bash
gcloud sql connect screening-db --user=screening-user --database=screening
```

```sql
\dt
```

Expected tables:
- `MonitoringJob`
- `AuditLog`
- `SanctionEntity`

---

## Step 11: Verify Complete System

### 11.1 Test End-to-End Flow

1. **Create a monitoring job** via the deployed UI
2. **Wait for Cloud Scheduler** to trigger (max 60 seconds)
3. **Check Cloud Tasks** queue:

```bash
gcloud tasks queues describe screening-queue \
  --location us-central1
```

4. **Verify PDF in GCS**:

```bash
gsutil ls gs://${BUCKET_NAME}/reports/
```

5. **Check audit logs**:

```bash
gcloud sql connect screening-db --user=screening-user --database=screening
```

```sql
SELECT * FROM "AuditLog" ORDER BY screened_at DESC LIMIT 5;
```

### 11.2 View Cloud Run Logs

```bash
gcloud run services logs read screening-engine \
  --region us-central1 \
  --limit 50
```

### 11.3 Monitor Cloud Tasks

```bash
gcloud tasks list --queue=screening-queue --location=us-central1
```

---

## Step 12: Security Hardening (Optional but Recommended)

### 12.1 Restrict Cloud Run to Internal Traffic Only

```bash
gcloud run services update screening-engine \
  --region us-central1 \
  --no-allow-unauthenticated
```

Then configure Cloud Load Balancer with Cloud Armor for public access.

### 12.2 Enable Cloud SQL IAM Authentication

```bash
gcloud sql users create ${SA_EMAIL} \
  --instance=screening-db \
  --type=CLOUD_IAM_SERVICE_ACCOUNT
```

Update `DATABASE_URL` to use IAM auth instead of passwords.

### 12.3 Enable Audit Logging

```bash
gcloud logging sinks create screening-audit-logs \
  storage.googleapis.com/${BUCKET_NAME}-audit \
  --log-filter='resource.type="cloud_run_revision"'
```

### 12.4 Set Up Monitoring Alerts

```bash
# Alert when screening jobs fail
gcloud alpha monitoring policies create \
  --notification-channels=CHANNEL_ID \
  --display-name="Screening Job Failures" \
  --condition-display-name="High error rate" \
  --condition-threshold-value=10 \
  --condition-threshold-duration=300s
```

---

## Cost Breakdown (Estimated Monthly)

| Service | Usage | Cost |
|---------|-------|------|
| Cloud SQL (db-f1-micro) | 730 hours | ~$15 |
| Cloud Storage (Locked) | 100 GB | ~$2 |
| Cloud Run | 1M requests, 100k GB-sec | ~$10 |
| Cloud Tasks | 100k operations | ~$0.40 |
| Vertex AI (Embeddings) | 10k requests | ~$5 |
| Cloud Scheduler | 2 jobs | ~$0.20 |
| **Total** | | **~$32.60/month** |

**Note**: Costs scale with usage. Production workloads may be higher.

---

## Cleanup (Delete Everything)

⚠️ **Warning**: This will permanently delete all data.

```bash
# Delete Cloud Run service
gcloud run services delete screening-engine --region us-central1 --quiet

# Delete Cloud Run job
gcloud run jobs delete sanctions-scraper --region us-central1 --quiet

# Delete Cloud Scheduler jobs
gcloud scheduler jobs delete tick-scheduler --location us-central1 --quiet
gcloud scheduler jobs delete scraper-daily --location us-central1 --quiet

# Delete Cloud Tasks queue
gcloud tasks queues delete screening-queue --location us-central1 --quiet

# Delete Cloud SQL instance (DELETES ALL DATA)
gcloud sql instances delete screening-db --quiet

# Delete GCS bucket (will fail if locked - this is intentional)
gsutil rm -r gs://${BUCKET_NAME}

# Delete VPC connector
gcloud compute networks vpc-access connectors delete screening-connector \
  --region us-central1 --quiet

# Delete service account
gcloud iam service-accounts delete ${SA_EMAIL} --quiet
```

**Note**: The locked GCS bucket **cannot be deleted** until the 7-year retention expires. This is by design.

---

## Troubleshooting

### Issue: "Permission denied" errors

**Solution**: Verify service account has all required roles:

```bash
gcloud projects get-iam-policy $PROJECT_ID \
  --flatten="bindings[].members" \
  --filter="bindings.members:serviceAccount:${SA_EMAIL}"
```

### Issue: Cloud SQL connection fails

**Solution**: Check Cloud SQL proxy is running and instance is `RUNNABLE`:

```bash
gcloud sql instances describe screening-db --format="value(state)"
```

### Issue: Cloud Tasks not executing

**Solution**: Verify queue configuration and service account permissions:

```bash
gcloud tasks queues describe screening-queue --location us-central1
```

### Issue: GCS upload fails with "Access Denied"

**Solution**: Verify bucket IAM permissions:

```bash
gsutil iam get gs://${BUCKET_NAME}
```

### Issue: Vertex AI errors

**Solution**: Ensure API is enabled and service account has `aiplatform.user` role:

```bash
gcloud services list --enabled | grep aiplatform
```

---

## Next Steps

1. ✅ Set up monitoring and alerting
2. ✅ Configure CI/CD pipeline for automatic deployments
3. ✅ Implement additional sanctions data sources in Brain B
4. ✅ Set up backup and disaster recovery
5. ✅ Review security and compliance requirements

---

## Support Resources

- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Cloud SQL Documentation](https://cloud.google.com/sql/docs)
- [Cloud Tasks Documentation](https://cloud.google.com/tasks/docs)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
- [GCS Retention Policies](https://cloud.google.com/storage/docs/bucket-lock)