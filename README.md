
# Risk Management System: Deep Insights Engine**

This repository contains the core risk analysis pipeline for the StratCol Risk platform. The architecture is designed to offload heavy data transformations to **BigQuery SQL** and leverage **Vertex AI** for behavioural pattern recognition, orchestrated via **Temporal.io**.

## **🏗 Architecture Overview**

The system follows a "Data-Warehouse-First" transformation pattern:

1. **Ingest**: Raw transaction data is stored in BigQuery.  
2. **Transform (SQL)**: A BigQuery Stored Procedure aggregates monthly behaviour (counts, totals, significant values).  
3. **Predict (AI)**: A Temporal activity triggers a Vertex AI model using the pre-aggregated BigQuery metrics.  
4. **Visualise**: A Next.js dashboard consumes the high-level client\_behaviour\_profiles for sub-second rendering.

## **🚀 Deployment & Infrastructure**

The infrastructure is managed via **Terraform** and deployed to **Google Cloud Run** using a private networking model.

### **Prerequisites**

* Google Cloud Project: stratcol-risk-analysis-engine  
* Terraform installed locally.  
* GCP APIs enabled:  
  * vpcaccess.googleapis.com (Serverless VPC Access)  
  * run.googleapis.com (Cloud Run)  
  * aiplatform.googleapis.com (Vertex AI)

### **1\. Infrastructure Provisioning**

The Terraform configuration in /terraform handles the VPC Access Connector, Cloud Run private ingress, and IAM role bindings.

Bash

cd terraform  
terraform init  
terraform apply

### **2\. Optimized Docker Build**

We utilize a multi-stage Dockerfile with Next.js **standalone** output to minimize cold starts on Cloud Run.

Bash

\# Build and push to Artifact Registry  
gcloud builds submit \--config cloudbuild.yaml .

## **🛠 Core Components**

### **BigQuery Transformation**

Located in services/bigquery/sql/transform\_client\_metrics.sql.

* **Logic**: Moves aggregation (SUM/MAX/COUNT) from Node.js memory to BigQuery's compute layer.  
* **Procedure**: generate\_client\_metrics(clientId)

### **Temporal Workflow**

Located in services/temporal/risk-workflows.ts.  
The RiskAnalysisWorkflow orchestrates the following DAG:

* transformAndAnalyzeData: Triggers BQ SQL.  
* predictRiskWithVertex: Fetches prediction from the AI endpoint.  
* saveRiskProfile: Updates the system of record.

### **Security & Networking**

* **Ingress**: Set to INTERNAL\_ONLY. Only traffic from within the VPC (e.g., GKE-based Temporal Workers) can reach the engine.  
* **Authentication**: Uses Google-signed **OIDC tokens**.  
* **Egress**: All outbound traffic routes through the risk-engine-vpc-conn to ensure private database access.

## **📈 Dashboard Integration**

The Next.js dashboard is optimized to query the client\_behaviour\_profiles table directly. This prevents the UI from performing expensive "on-the-fly" calculations, ensuring a snappy user experience for risk officers.

### ---

**Maintenance Commands**

* **Check Logs**: gcloud logging read "resource.type=cloud\_run\_revision AND resource.labels.service\_name=risk-analysis-service"  
* **Update SQL**: bq query \--use\_legacy\_sql=false \< services/bigquery/sql/transform\_client\_metrics.sql


## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (with `pgvector` & `pg_trgm`)
- **ORM**: Prisma
- **Orchestration**: Temporal.io
- **Infrastructure**: Google Cloud Run, BigQuery, Vertex AI
- **Package Manager**: Bun

---

## Local Development Setup

### 1. Prerequisites

- **Bun** (v1.0+)
- **Docker Desktop** (Required for local DB and Temporal server)
- **Google Cloud SDK** (Optional, for deploying)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd risk-management-system
bun install
```

### 3. Start Local Services

Start PostgreSQL and the Temporal Dev Server using Docker Compose:

```bash
docker compose up -d
```

This starts:
- **PostgreSQL** on port `5432` (User: `risk`, DB: `risk_db`)
- **Temporal Server** on port `7233`
- **Temporal UI** at `http://localhost:8233`

### 4. Configure Environment

Create a `.env` file in the root directory (copy from `.env.example` if available, or use the reference below):

```env
# Database
DATABASE_URL="postgresql://risk:risk@localhost:5432/risk_db?schema=public"

# GCP Configuration (Required for Production, Optional for Local UI dev)
GCP_PROJECT_ID="stratcol-risk-analysis-engine"
GCS_BUCKET_NAME="compliance-reports-locked"
CLOUD_TASKS_QUEUE="screening-queue"
CLOUD_TASKS_LOCATION="us-central1"
VERTEX_AI_LOCATION="us-central1"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# AI/LLM Keys
GOOGLE_GENERATIVE_AI_API_KEY="your-api-key"
```

### 5. Initialize Database

Push the Prisma schema to your local PostgreSQL instance:

```bash
bun run prisma:push
```

### 6. Start the Development Server

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

---

## Production Deployment Guide

This project is configured for deployment to **Google Cloud Run** with full IAM integration.

### 1. Prerequisites
- **Terraform** (v1.5+): For provisioning infrastructure.
- **Google Cloud SDK**: For authentication and script execution.

### 2. Infrastructure Setup
The infrastructure is managed via Terraform and shell scripts.

#### Step 2.1: Enable APIs
Enable the required Google Cloud APIs:
```bash
gcloud services enable vpcaccess.googleapis.com compute.googleapis.com run.googleapis.com --project=stratcol-risk-analysis-engine
```

#### Step 2.2: IAM Setup
Provision the Service Account and required IAM roles:
```bash
chmod +x scripts/gcp-iam-setup.sh
./scripts/gcp-iam-setup.sh
```

#### Step 2.3: Provision Resources
1. Create a `terraform.tfvars` file in the `terraform/` directory:
   ```hcl
   project_id      = "stratcol-risk-analysis-engine"
   region          = "europe-west1"
   vertex_endpoint = "your-endpoint-id"
   ```

2. Init and Apply:
   ```bash
   cd terraform
   terraform init
   terraform apply
   ```

### 3. Deploy Application
Push the application to Cloud Run using Cloud Build:

```bash
gcloud builds submit --config cloudbuild.yaml --project=stratcol-risk-analysis-engine .
```

---

## Commands Reference

| Command | Description |
| copy | --- |
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run lint` | Run Biome linter |
| `bun run prisma:push` | Push schema changes to DB |
| `bun run prisma:generate` | Generate Prisma client |
| `bun run format` | Format code with Biome |
