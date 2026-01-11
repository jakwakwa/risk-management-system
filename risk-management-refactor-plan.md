To deploy your solution to Cloud Run while enabling full integration with BigQuery and Vertex AI, the focus shifts from just "uploading code" to **Identity and Access Management (IAM)**.

In GCP, Cloud Run services do not use your personal credentials; they use a **Service Account**. To enable the "Deep Insights" pipeline you've built, this service account must have the explicit "keys" to talk to BigQuery (for your SQL transformations) and Vertex AI (for your risk scoring).

---

### 1. Provision a Dedicated Service Account

Avoid using the "Default Compute Service Account," as it often has broader permissions than necessary. Create a granular identity for your risk engine.

```bash
# Create the service account
gcloud iam service-accounts create risk-engine-sa \
    --display-name="Risk Analysis Service Account"

# Define your Project ID
PROJECT_ID=$(gcloud config get-value project)

```

### 2. Grant "Full Integration" Permissions

For your specific workflow (Transform -> Predict), the service account needs three primary roles:

| Role | Why? |
| --- | --- |
| **`roles/bigquery.jobUser`** | To run the `CALL` command for your stored procedure. |
| **`roles/bigquery.dataEditor`** | To read/write to the `client_behaviour_profiles` table. |
| **`roles/aiplatform.user`** | To call the Vertex AI endpoint for predictions. |

**Run these commands to bind the roles:**

```bash
# BigQuery Permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:risk-engine-sa@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/bigquery.jobUser"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:risk-engine-sa@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/bigquery.dataEditor"

# Vertex AI Permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:risk-engine-sa@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/aiplatform.user"

```

### 3. Containerise and Deploy

Since you are using Next.js and Node.js, ensure your `Dockerfile` uses the "Standalone" output mode for a slim image.

**Deployment Command:**

```bash
gcloud run deploy risk-analysis-service \
    --source . \
    --service-account="risk-engine-sa@$PROJECT_ID.iam.gserviceaccount.com" \
    --region=europe-west1 \
    --set-env-vars="VERTEX_AI_ENDPOINT_ID=your-endpoint-id,PROJECT_ID=$PROJECT_ID" \
    --allow-unauthenticated

```

> **Note:** Use `--allow-unauthenticated` only if your dashboard is public or handled by an Auth provider like Firebase/Clerk. For internal-only APIs, omit this flag.

---

### 4. Continuous Deployment (The Engineering Standard)

As a Full-Stack Engineer, you'll likely want to automate this. The most "GCP-native" way is using **Cloud Build** via a `cloudbuild.yaml` file in your root:

```yaml
steps:
  # Build the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/risk-engine:$COMMIT_SHA', '.']

  # Push to Artifact Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/risk-engine:$COMMIT_SHA']

  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'risk-analysis-service'
      - '--image'
      - 'gcr.io/$PROJECT_ID/risk-engine:$COMMIT_SHA'
      - '--service-account'
      - 'risk-engine-sa@$PROJECT_ID.iam.gserviceaccount.com'
      - '--region'
      - 'europe-west1'

```

### Next Steps

Once deployed, the Cloud Run service must automatically use its attached Service Account to authenticate with the Google Cloud SDKs (BigQuery and Vertex AI) without needing any JSON key files in your source code.

To ensure your Next.js application runs efficiently on Cloud Run with minimal cold starts, we need to leverage the **standalone** output feature. This significantly reduces the container size by only including the necessary files for production, rather than the entire `node_modules` folder.

### 1. Update `next.config.ts`

First, configure Next.js to automatically bundle only the required files.

```typescript
// next.config.ts or next.config.js
const nextConfig = {
  output: 'standalone',
  // Ensure your GCP environment variables are available
  env: {
    VERTEX_AI_ENDPOINT_ID: process.env.VERTEX_AI_ENDPOINT_ID,
  }
};

export default nextConfig;

```

---

### 2. The Optimized Dockerfile

This multi-stage build ensures your final image is lightweight, which is crucial for Cloud Run's performance and cost-efficiency.

```dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone build and static files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080
ENV PORT 8080
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]

```

---

### 3. High-Level Architecture Overview

Deploying this container to Cloud Run places it at the centre of your GCP ecosystem. The service account acts as the secure bridge to BigQuery and Vertex AI without managing secret keys.

### 4. Deployment Strategy with Optimisations

When you run the final deploy command, add these specific flags to optimise the **Full-Stack AI journey**:

```bash
gcloud run deploy risk-analysis-service \
    --source . \
    --service-account="risk-engine-sa@$PROJECT_ID.iam.gserviceaccount.com" \
    --region=europe-west1 \
    --cpu=1 \
    --memory=512Mi \
    --min-instances=0 \
    --max-instances=10 \
    --set-env-vars="NODE_ENV=production" \
    --labels="managed-by=temporal-risk-engine"

```

###  5. Temporal Compatibility
Since you are building a production-grade AI journey, using **Terraform** is the best way to ensure your VPC networking and Cloud Run service are tightly coupled and reproducible.

The following configuration sets up the **VPC Access Connector** (for outbound traffic from Cloud Run to your VPC, like a PostgreSQL instance) and handles the **Private Ingress** settings.

### 1. Terraform: Network & VPC Connector

This block creates the "bridge" between the serverless environment and your private network.

```hcl
# The VPC Access Connector
resource "google_vpc_access_connector" "connector" {
  name          = "risk-engine-vpc-conn"
  region        = "europe-west1"
  ip_cidr_range = "10.8.0.0/28" # A small /28 range for the connector instances
  network       = "default"      # Or your custom VPC name
}

# Enable Private Google Access on the subnet where your Temporal Worker lives
resource "google_compute_subnetwork" "worker_subnet" {
  name          = "temporal-worker-subnet"
  ip_cidr_range = "10.128.0.0/20"
  region        = "europe-west1"
  network       = "default"
  private_ip_google_access = true
}

```

---

### 2. Terraform: Cloud Run with Private Ingress

This defines the Cloud Run service, attaches your high-performance Docker image, and locks down ingress so only internal VPC traffic (like your Temporal Worker) can reach it.

```hcl
resource "google_cloud_run_v2_service" "risk_service" {
  name     = "risk-analysis-service"
  location = "europe-west1"
  ingress  = "INGRESS_TRAFFIC_INTERNAL_ONLY" # Only internal/VPC traffic allowed

  template {
    service_account = "risk-engine-sa@${var.project_id}.iam.gserviceaccount.com"
    
    containers {
      image = "gcr.io/${var.project_id}/risk-engine:latest"
      
      env {
        name  = "VERTEX_AI_ENDPOINT_ID"
        value = var.vertex_endpoint
      }

      ports {
        container_port = 8080
      }
    }

    vpc_access {
      connector = google_vpc_access_connector.connector.id
      egress    = "ALL_TRAFFIC" # Force all outbound traffic through the VPC
    }
  }
}

```

---

### 3. Granting the Worker Permission

Even with the networks connected, GCP follows "Zero Trust." Your Temporal Worker's Service Account must have the **Cloud Run Invoker** role to actually call the service.

```hcl
resource "google_cloud_run_v2_service_iam_member" "worker_invoker" {
  location = google_cloud_run_v2_service.risk_service.location
  name     = google_cloud_run_v2_service.risk_service.name
  role     = "roles/run.invoker"
  member   = "serviceAccount:temporal-worker-sa@${var.project_id}.iam.gserviceaccount.com"
}

```

### The Full-Stack Flow

With this setup:

1. **Ingress:** Your Temporal Worker (on GKE/VM) sends a request. Because `private_ip_google_access` is true, the request stays inside the Google network and hits the "Internal Only" Cloud Run endpoint.
2. **Authentication:** The Worker provides an OIDC token in the header. Cloud Run verifies this against the `roles/run.invoker` IAM policy we just set.
3. **Egress:** If your Cloud Run service needs to talk back to a private database in your VPC, it uses the `vpc_access_connector` we defined in Step 1.

**Would you like me to provide the TypeScript logic for the Temporal Worker to generate the required OIDC token for authenticating these internal Cloud Run calls?**
### Why this works

* **Next.js Standalone:** By copying the `.next/standalone` folder, our image size will likely drop from ~800MB to under 150MB, drastically reducing **cold start** times.
* **Internal Networking:** Since Cloud Run, BigQuery, and Vertex AI are all within the GCP backbone, data transfer is highly secure and follows the lowest latency paths.
.

