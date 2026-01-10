# Local Development Setup Guide

## Overview

This guide will help you set up the Risk Screening Engine for local development. During local development:

- ✅ **PostgreSQL runs locally** via Docker (with `pg_trgm` and `pgvector` extensions)
- ✅ **Database queries and application logic** can be tested
- ⚠️ **GCP SDK calls will fail** (Cloud Tasks, Storage, Vertex AI) - this is expected without credentials
- 🚀 **Production deployment** to Cloud Run will enable all GCP services

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop))
- **Git** ([Download](https://git-scm.com/))
- **bun** or **bun** (comes with Node.js)

---

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd risk-screening-engine
```

---

## Step 2: Install Dependencies

```bash
bun install
```

This installs:
- Next.js 15 and React
- GCP SDKs (`@google-cloud/tasks`, `@google-cloud/storage`, `@google-cloud/vertexai`)
- Prisma ORM
- PDF generation libraries
- Other required packages

---

## Step 3: Start PostgreSQL Database

The project includes a `docker-compose.yml` file that runs PostgreSQL with the required extensions.

### Create the Docker Compose file

**File**: `docker-compose.yml`

```yaml
version: '3.8'

services:
  postgres:
    image: pgvector/pgvector:pg16
    container_name: screening-db
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: screening
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

volumes:
  postgres_data:
```

### Create the initialization script

**File**: `init.sql`

```sql
-- Enable required PostgreSQL extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS vector;
```

### Start the database

```bash
docker compose up -d
```

### Verify the database is running

```bash
docker ps
```

You should see `screening-db` in the list of running containers.

### Verify extensions are installed

```bash
docker exec -it screening-db psql -U user -d screening -c "SELECT * FROM pg_extension WHERE extname IN ('pg_trgm', 'vector');"
```

Expected output:
```
  oid  | extname  | extowner | extnamespace | ...
-------+----------+----------+--------------+-----
 16389 | pg_trgm  |       10 |         2200 | ...
 16390 | vector   |       10 |         2200 | ...
```

---

## Step 4: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Database (local PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/screening

# GCP Configuration (these will fail locally without credentials - this is expected)
GCP_PROJECT_ID=your-project-id
GCS_BUCKET_NAME=compliance-reports-locked
CLOUD_TASKS_QUEUE=screening-queue
CLOUD_TASKS_LOCATION=us-central1
VERTEX_AI_LOCATION=us-central1
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Service Account Email (not needed for local dev)
# GCP_SERVICE_ACCOUNT_EMAIL=screening-engine@project.iam.gserviceaccount.com
```

**Note**: GCP service calls will fail locally because you don't have credentials. This is **expected behavior** during local development.

---

## Step 5: Set Up Prisma

### Generate Prisma Client

```bash
bunx prisma generate
```

### Push the schema to your local database

```bash
bunx prisma db push
```

Expected output:
```
Environment variables loaded from .env.local
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "screening", schema "public" at "localhost:5432"

🚀  Your database is now in sync with your Prisma schema. Done in 234ms
```

### Verify tables were created

```bash
bunx prisma studio
```

This opens Prisma Studio in your browser at `http://localhost:5555`. You should see:
- `MonitoringJob`
- `AuditLog`
- `SanctionEntity`

---

## Step 6: Seed Sample Data (Optional)

To test the screening logic, you can manually add sample sanctions data:

```bash
bunx prisma db seed
```

Or create a seed script:

**File**: `prisma/seed.ts`

```typescript
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function main() {
  // Add sample sanctions entities
  await db.sanctionEntity.createMany({
    data: [
      { id: '1', name: 'John Doe', source: 'OFAC' },
      { id: '2', name: 'Jane Smith', source: 'UN' },
      { id: '3', name: 'Acme Corp', source: 'EU' },
    ],
    skipDuplicates: true,
  })

  console.log('Sample data seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
```

Add to `package.json`:

```json
{
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

---

## Step 7: Start the Development Server

```bash
bun run dev
```

The application will start at `http://localhost:3000`.

---

## Step 8: Test the Application

### Create a Monitoring Job

You can test creating a monitoring job through the UI or Server Actions.

### Expected Behavior During Local Development

| Component | Local Behavior | Notes |
|-----------|----------------|-------|
| Database (PostgreSQL) | ✅ **Works** | Runs in Docker |
| Fuzzy matching (`pg_trgm`) | ✅ **Works** | Extension enabled |
| Vector search (`pgvector`) | ⚠️ **Partial** | Works if you manually add embeddings |
| Cloud Scheduler | ❌ **Fails** | No Cloud Scheduler in local environment |
| Cloud Tasks | ❌ **Fails** | `createTask()` will throw error - no credentials |
| GCS Upload | ❌ **Fails** | `file.save()` will throw error - no credentials |
| Vertex AI Embeddings | ❌ **Fails** | `embedContent()` will throw error - no credentials |
| PDF Generation | ✅ **Works** | Pure JavaScript, no GCP dependency |

### Testing GCP SDK Calls Locally (Advanced)

If you want to test GCP services locally, you need to:

1. **Create a Service Account** in your GCP project
2. **Download the JSON key file**
3. **Set the credential path**:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"
```

4. **Ensure your GCP resources exist**:
   - Cloud Tasks queue created
   - GCS bucket created
   - Vertex AI API enabled

**Warning**: This will make real API calls and incur costs.

---

## Step 9: View Logs

### Application logs

The Next.js development server shows logs in your terminal:

```
[Tick] Found 3 jobs due
[Screening] Starting for client: John Doe
[Screening] Fuzzy matches found: 1
```

### Database logs

View database queries with Prisma:

```bash
# Add to .env.local
DEBUG=prisma:query
```

### Docker logs

View PostgreSQL logs:

```bash
docker logs screening-db
```

---

## Common Issues

### Issue: "Port 5432 already in use"

**Solution**: You have another PostgreSQL instance running.

```bash
# Stop other PostgreSQL instances
brew services stop postgresql  # macOS
sudo systemctl stop postgresql  # Linux

# Or change the port in docker-compose.yml
ports:
  - '5433:5432'  # Use port 5433 on host

# Update DATABASE_URL
DATABASE_URL=postgresql://user:password@localhost:5433/screening
```

### Issue: "Extension 'vector' does not exist"

**Solution**: Ensure you're using the `pgvector/pgvector` Docker image, not standard PostgreSQL.

```bash
# Rebuild the container
docker compose down -v
docker compose up -d
```

### Issue: "Cannot connect to database"

**Solution**: Wait for PostgreSQL to fully start.

```bash
# Check if container is healthy
docker ps

# View logs
docker logs screening-db

# Test connection
docker exec -it screening-db psql -U user -d screening -c "SELECT 1;"
```

### Issue: GCP SDK errors during development

**Solution**: This is **expected**. GCP SDKs will fail without credentials. You can:

1. **Ignore the errors** - they won't affect database/UI development
2. **Add service account credentials** (see Step 8)
3. **Comment out GCP SDK calls** temporarily during pure UI development

---

## Cleaning Up

### Stop the database

```bash
docker compose down
```

### Remove database data (reset everything)

```bash
docker compose down -v
```

### Remove all Docker containers

```bash
docker system prune -a
```

---

## Next Steps

Once local development is working:

1. **Implement UI components** for job creation
2. **Test database queries** with sample data
3. **Deploy to Cloud Run** for full GCP integration (see deployment guide)

---

## Development Workflow

```mermaid
graph LR
    A[Edit Code] --> B[bun run dev]
    B --> C[Test in Browser]
    C --> D{Works?}
    D -->|No| A
    D -->|Yes| E[Commit Changes]
    E --> F[Push to Git]
    F --> G[Deploy to Cloud Run]
```

---

## Summary

- ✅ PostgreSQL runs locally in Docker with required extensions
- ✅ You can develop and test database logic, UI, and Server Actions
- ⚠️ GCP SDK calls will fail without credentials (expected)
- 🚀 Deploy to Cloud Run to enable full GCP integration