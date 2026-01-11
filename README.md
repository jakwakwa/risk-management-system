# 🛡️ StratCol Risk Management System

> **A High-Assurance Automated Risk Screening Engine** for compliance professionals and financial institutions requiring demonstrable, continuous assurance.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![Cloud Run](https://img.shields.io/badge/Cloud%20Run-GCP-4285F4?logo=google-cloud)](https://cloud.google.com/run)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Technology Stack](#%EF%B8%8F-technology-stack)
- [Local Development](#-local-development)
- [Production Deployment](#-production-deployment)
- [Commands Reference](#-commands-reference)
- [Core Components](#-core-components)
- [Security & Networking](#-security--networking)

---

## 🎯 Overview

The StratCol Risk Management System is an enterprise-grade risk analysis platform designed to provide **Negative Assurance**—the generation of affirmative, auditable evidence that a screening process occurred and yielded results, transforming the absence of an alert from a non-event into a tangible, auditable artifact.

### Key Capabilities

- **Automated Client Screening** against sanctions lists with configurable schedules
- **Advanced Name Matching** using phonetic algorithms, fuzzy scoring, and semantic vector matching
- **Real-time Risk Analytics** with interactive dashboards and heatmaps
- **Immutable Audit Trails** with cryptographic chaining for tamper-evident compliance records
- **AI-Powered Predictions** via Vertex AI for behavioural pattern recognition

---

## 🏗 Architecture

The system follows a **"Data-Warehouse-First"** transformation pattern with a decoupled, event-driven microservices architecture organized into four distinct planes:

```mermaid
flowchart TB
    subgraph Client["🖥️ Client Layer"]
        UI[Next.js Dashboard<br/>React + TypeScript]
    end

    subgraph Orchestration["⏱️ Orchestration Plane"]
        Temporal[Temporal.io<br/>Workflow Engine]
        Scheduler[Schedule Manager<br/>Cron Jobs]
    end

    subgraph Screening["🔍 Screening Plane"]
        Worker[Temporal Worker]
        Matcher[Multi-Stage<br/>Matching Pipeline]
        subgraph ML["AI/ML Services"]
            Vertex[Vertex AI<br/>Risk Predictions]
        end
    end

    subgraph Data["💾 Data Plane"]
        PostgreSQL[(PostgreSQL<br/>pgvector + pg_trgm)]
        BigQuery[(BigQuery<br/>Data Warehouse)]
        Prisma[Prisma ORM]
    end

    subgraph Assurance["📋 Assurance Plane"]
        Audit[Audit Logger<br/>Cryptographic Chain]
        Reports[Report Generator<br/>PDF/Compliance]
        GCS[Cloud Storage<br/>WORM]
    end

    subgraph Infrastructure["☁️ Google Cloud Platform"]
        CloudRun[Cloud Run<br/>Containerized App]
        VPC[VPC Connector<br/>Private Network]
        IAM[Cloud IAM<br/>OIDC Auth]
    end

    UI --> CloudRun
    CloudRun --> Prisma
    Prisma --> PostgreSQL
    
    Scheduler --> Temporal
    Temporal --> Worker
    Worker --> Matcher
    Worker --> Vertex
    Worker --> BigQuery
    
    Matcher --> PostgreSQL
    Vertex --> BigQuery
    
    Worker --> Audit
    Audit --> GCS
    Audit --> Reports
    
    CloudRun --> VPC
    VPC --> BigQuery
    IAM --> CloudRun

    classDef primary fill:#4285F4,stroke:#1a73e8,color:#fff
    classDef secondary fill:#34A853,stroke:#1e8e3e,color:#fff
    classDef accent fill:#EA4335,stroke:#c5221f,color:#fff
    classDef neutral fill:#5F6368,stroke:#3c4043,color:#fff
    
    class UI,CloudRun primary
    class Temporal,Worker,Scheduler secondary
    class Vertex,BigQuery accent
    class PostgreSQL,Prisma,GCS neutral
```

### Data Flow

```mermaid
sequenceDiagram
    participant User as 👤 Risk Officer
    participant Dashboard as 🖥️ Next.js Dashboard
    participant API as 🔌 API Routes
    participant Temporal as ⏱️ Temporal
    participant BigQuery as 📊 BigQuery
    participant Vertex as 🤖 Vertex AI
    participant Prisma as 🗄️ PostgreSQL

    User->>Dashboard: View Client Risk Profile
    Dashboard->>API: GET /api/clients
    API->>Prisma: Query client data
    Prisma-->>API: Client records
    API-->>Dashboard: Render dashboard
    
    Note over Temporal: Scheduled Screening Job
    Temporal->>BigQuery: Transform client metrics
    BigQuery-->>Temporal: Aggregated data
    Temporal->>Vertex: Predict risk score
    Vertex-->>Temporal: ML predictions
    Temporal->>Prisma: Save risk profile
    Temporal->>Prisma: Log audit record
```

### Architecture Principles

| Plane | Responsibility | Key Technology |
|-------|---------------|----------------|
| **Orchestration** | Temporal management, job scheduling | Temporal.io |
| **Screening** | Stateless compute, fuzzy matching, ML inference | Vertex AI |
| **Data** | Source of truth, versioned sanctions data | BigQuery, PostgreSQL |
| **Assurance** | Immutable audit logs, report generation | Cloud Storage (WORM) |

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Database** | PostgreSQL with `pgvector` & `pg_trgm` |
| **ORM** | Prisma |
| **Orchestration** | Temporal.io |
| **Cloud Platform** | Google Cloud (Cloud Run, BigQuery, Vertex AI) |
| **Infrastructure** | Terraform |
| **Package Manager** | Bun |
| **Styling** | Tailwind CSS + shadcn/ui |

---

## 🚀 Local Development

### Prerequisites

- **Bun** (v1.0+)
- **Docker Desktop** (for local PostgreSQL and Temporal)
- **Google Cloud SDK** (optional, for deployment)

### 1. Clone & Install

```bash
git clone <repository-url>
cd risk-management-system
bun install
```

### 2. Start Local Services

```bash
docker compose up -d
```

This starts:
| Service | Port | Description |
|---------|------|-------------|
| PostgreSQL | `5432` | Database (User: `risk`, DB: `risk_db`) |
| Temporal Server | `7233` | Workflow engine |
| Temporal UI | `8233` | Web interface at `http://localhost:8233` |

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://risk:risk@localhost:5432/risk_db?schema=public"

# GCP Configuration
GCP_PROJECT_ID="stratcol-risk-analysis-engine"
GCS_BUCKET_NAME="compliance-reports-locked"
CLOUD_TASKS_QUEUE="screening-queue"
CLOUD_TASKS_LOCATION="us-central1"
VERTEX_AI_LOCATION="us-central1"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# AI/LLM Keys
GOOGLE_GENERATIVE_AI_API_KEY="your-api-key"
```

### 4. Initialize Database

```bash
bun run prisma:push
```

### 5. Start Development Server

```bash
bun run dev
```

The application will be available at **http://localhost:3000**.

---

## ☁️ Production Deployment

This project is configured for deployment to **Google Cloud Run** with full IAM integration and private networking.

### Prerequisites

- **Terraform** (v1.5+)
- **Google Cloud SDK** (authenticated)

### Step 1: Enable GCP APIs

```bash
gcloud services enable \
  vpcaccess.googleapis.com \
  compute.googleapis.com \
  run.googleapis.com \
  aiplatform.googleapis.com \
  --project=stratcol-risk-analysis-engine
```

### Step 2: IAM Setup

```bash
chmod +x scripts/gcp-iam-setup.sh
./scripts/gcp-iam-setup.sh
```

### Step 3: Provision Infrastructure

1. Create `terraform/terraform.tfvars`:

```hcl
project_id      = "stratcol-risk-analysis-engine"
region          = "europe-west1"
vertex_endpoint = "your-endpoint-id"
```

2. Apply Terraform:

```bash
cd terraform
terraform init
terraform apply
```

### Step 4: Deploy Application

```bash
gcloud builds submit --config cloudbuild.yaml --project=stratcol-risk-analysis-engine .
```

---

## 📖 Commands Reference

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run lint` | Run Biome linter |
| `bun run format` | Format code with Biome |
| `bun run prisma:push` | Push schema changes to database |
| `bun run prisma:generate` | Generate Prisma client |

---

## 🔧 Core Components

### BigQuery Transformation

Located in `services/bigquery/sql/transform_client_metrics.sql`

- **Logic**: Offloads aggregation (SUM/MAX/COUNT) from Node.js to BigQuery's compute layer
- **Procedure**: `generate_client_metrics(clientId)`

### Temporal Workflows

Located in `services/temporal/`

The `RiskAnalysisWorkflow` orchestrates the following DAG:

1. `transformAndAnalyzeData` → Triggers BigQuery SQL transformation
2. `predictRiskWithVertex` → Fetches prediction from Vertex AI endpoint
3. `saveRiskProfile` → Updates the system of record

### Dashboard Components

| Component | Purpose |
|-----------|---------|
| `clients-table.tsx` | Paginated client listing with risk indicators |
| `risk-heatmap.tsx` | Visual risk distribution across segments |
| `risk-alerts.tsx` | Real-time alert notifications |
| `stats-overview.tsx` | KPI cards and metrics summary |

---

## 🔒 Security & Networking

| Layer | Configuration |
|-------|---------------|
| **Ingress** | `INTERNAL_ONLY` — Only VPC traffic can reach the engine |
| **Authentication** | Google-signed OIDC tokens |
| **Egress** | All outbound traffic routes through `risk-engine-vpc-conn` |
| **Data Security** | Blind indexing for encrypted PII with fuzzy search capability |

### Operational Commands

```bash
# View Cloud Run logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=risk-analysis-service"

# Update BigQuery SQL
bq query --use_legacy_sql=false < services/bigquery/sql/transform_client_metrics.sql
```

---

## 📁 Project Structure

```
risk-management-system/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── clients/           # Client management pages
│   ├── dashboard/         # Analytics dashboard
│   ├── reports/           # Report generation
│   ├── schedules/         # Screening schedules
│   └── settings/          # Configuration
├── components/            # React components
│   ├── charts/           # Data visualization
│   ├── scheduler/        # Scheduling UI
│   └── ui/               # shadcn/ui components
├── lib/                   # Utilities & clients
│   ├── bigquery.ts       # BigQuery client
│   ├── prisma.ts         # Prisma client
│   └── security.ts       # Security utilities
├── prisma/               # Database schema & migrations
├── services/             # Backend services
│   ├── bigquery/         # SQL transformations
│   └── temporal/         # Workflow definitions
├── scripts/              # Deployment scripts
└── terraform/            # Infrastructure as Code
```

---

## 📄 License

Proprietary — StratCol Risk Solutions

---

<p align="center">
  <strong>Built with ❤️ for compliance professionals who demand excellence.</strong>
</p>
