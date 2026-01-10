# Risk Screening Engine - CORRECTIVE ACTION REQUIRED

## 🚨 IMMEDIATE ACTION: DELETE EXISTING CODE

**You have implemented an incorrect architecture. You MUST delete the following files/folders:**

```bash
# DELETE these files completely:
rm -rf lib/adapters/
rm -rf lib/ports/
rm -f lib/adapters/factory.ts
rm -f lib/adapters/gcp/task-adapter.ts
rm -f lib/adapters/gcp/storage-adapter.ts
rm -f lib/adapters/gcp/vertex-ai-adapter.ts
rm -f lib/adapters/mock/mock-task-adapter.ts
rm -f lib/adapters/mock/mock-storage-adapter.ts
rm -f lib/adapters/mock/mock-ai-adapter.ts
rm -f scripts/verify-adapters.ts
rm -f scripts/verify-gcp-only.ts
```

**Any file containing the following patterns MUST be deleted:**
- `interface TaskAdapter`
- `interface StorageAdapter`
- `interface AIModelAdapter`
- `class AdapterFactory`
- `class MockTaskAdapter`
- `class MockStorageAdapter`
- `class MockAIModelAdapter`
- `class GCPTaskAdapter`
- `class GCPStorageAdapter`
- `implements TaskAdapter`
- `implements StorageAdapter`
- `USE_MOCK_ADAPTERS`

**After deletion, verify:**
```bash
# These searches should return ZERO results:
grep -r "Adapter" --include="*.ts" --include="*.tsx" .
grep -r "Factory" --include="*.ts" --include="*.tsx" .
grep -r "Mock" --include="*.ts" --include="*.tsx" .
```

---

## ✅ CORRECT ARCHITECTURE: Direct SDK Usage

**RULE**: Import GCP SDKs directly in your route handlers. No abstractions.

### Package Installation

```bash
npm install @google-cloud/tasks @google-cloud/storage @google-cloud/vertexai @react-pdf/renderer cron-parser
```

---

## CORRECTED IMPLEMENTATION

### File 1: `app/api/cron/tick/route.ts`

**DELETE any existing version. CREATE this file from scratch:**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { CloudTasksClient } from '@google-cloud/tasks'
import parser from 'cron-parser'

// DIRECT instantiation - NO factory, NO adapter
const db = new PrismaClient()
const tasksClient = new CloudTasksClient()

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  
  if (process.env.NODE_ENV === 'production' && !authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const now = new Date()
  const dueJobs = await db.monitoringJob.findMany({
    where: { nextRunAt: { lte: now } },
  })

  console.log(`[Tick] Found ${dueJobs.length} jobs due`)

  const queuePath = tasksClient.queuePath(
    process.env.GCP_PROJECT_ID!,
    process.env.CLOUD_TASKS_LOCATION!,
    process.env.CLOUD_TASKS_QUEUE!
  )

  for (const job of dueJobs) {
    const interval = parser.parseExpression(job.cronExpression, {
      currentDate: job.nextRunAt,
    })
    const nextRunAt = interval.next().toDate()

    await db.monitoringJob.update({
      where: { id: job.id },
      data: { nextRunAt },
    })

    // DIRECT SDK call - NO adapter.scheduleTask()
    await tasksClient.createTask({
      parent: queuePath,
      task: {
        httpRequest: {
          httpMethod: 'POST',
          url: `${process.env.NEXT_PUBLIC_APP_URL}/api/engine/screen`,
          headers: { 'Content-Type': 'application/json' },
          body: Buffer.from(JSON.stringify({
            clientName: job.clientName,
            jobId: job.id,
          })).toString('base64'),
          oidcToken: {
            serviceAccountEmail: process.env.GCP_SERVICE_ACCOUNT_EMAIL || '',
          },
        },
      },
    })
  }

  return NextResponse.json({ processed: dueJobs.length })
}
```

---

### File 2: `app/api/engine/screen/route.ts`

**DELETE any existing version. CREATE this file from scratch:**

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Storage } from '@google-cloud/storage'
import { VertexAI } from '@google-cloud/vertexai'
import { generatePDF } from '@/lib/report-generator'
import crypto from 'crypto'

// DIRECT instantiation - NO factory, NO adapter
const db = new PrismaClient()
const storage = new Storage()
const vertexAI = new VertexAI({
  project: process.env.GCP_PROJECT_ID!,
  location: process.env.VERTEX_AI_LOCATION || 'us-central1',
})

export async function POST(req: NextRequest) {
  const { clientName, jobId } = await req.json()

  // STEP 1: Fuzzy match with pg_trgm - DIRECT SQL query
  const fuzzyMatches = await db.$queryRaw<
    Array<{ name: string; source: string; score: number }>
  >`
    SELECT 
      name,
      source,
      similarity(name, ${clientName}::text) AS score
    FROM "SanctionEntity"
    WHERE similarity(name, ${clientName}::text) > 0.3
    ORDER BY score DESC
    LIMIT 10
  `

  // STEP 2: Generate embedding - DIRECT SDK call
  const model = vertexAI.getGenerativeModel({ model: 'text-embedding-004' })
  const embeddingResult = await model.embedContent(clientName)
  const clientEmbedding = embeddingResult.embedding.values

  // STEP 3: Vector search with pgvector - DIRECT SQL query
  const vectorMatches = await db.$queryRaw<
    Array<{ name: string; source: string; distance: number }>
  >`
    SELECT 
      name,
      source,
      (embedding <-> ${JSON.stringify(clientEmbedding)}::vector) AS distance
    FROM "SanctionEntity"
    WHERE embedding IS NOT NULL
    ORDER BY distance ASC
    LIMIT 10
  `

  const allMatches = [
    ...fuzzyMatches.map(m => ({ ...m, matchType: 'fuzzy' })),
    ...vectorMatches.map(m => ({ ...m, matchType: 'vector', score: 1 - m.distance })),
  ]

  allMatches.sort((a, b) => b.score - a.score)

  const result = allMatches.length > 0 && allMatches[0].score >= 0.7 ? 'MATCH' : 'CLEAR'

  // STEP 4: Generate PDF
  const timestamp = new Date()
  const pdfBuffer = await generatePDF({
    clientName,
    timestamp,
    result,
    matches: allMatches.slice(0, 5),
    lists: ['OFAC', 'UN', 'EU'],
  })

  // STEP 5: Upload to GCS - DIRECT SDK call, NO storage.uploadFile()
  const bucketName = process.env.GCS_BUCKET_NAME!
  const bucket = storage.bucket(bucketName)
  const filename = `reports/${jobId}/${timestamp.getTime()}.pdf`
  const file = bucket.file(filename)

  await file.save(pdfBuffer, {
    metadata: {
      contentType: 'application/pdf',
      metadata: { clientName, result, timestamp: timestamp.toISOString() },
    },
  })

  // STEP 6: Get signed URL - DIRECT SDK call
  const [signedUrl] = await file.getSignedUrl({
    version: 'v4',
    action: 'read',
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
  })

  // STEP 7: Audit log
  const pdfHash = crypto.createHash('sha256').update(pdfBuffer).digest('hex')
  await db.auditLog.create({
    data: {
      jobId,
      clientName,
      result,
      gcsUrl: `gs://${bucketName}/${filename}`,
      pdfHash,
    },
  })

  return NextResponse.json({
    success: true,
    result,
    reportUrl: signedUrl,
    matchCount: allMatches.length,
  })
}
```

---

### File 3: `lib/report-generator.tsx`

```typescript
import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12 },
  header: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
  section: { marginBottom: 15 },
  label: { fontWeight: 'bold', marginBottom: 5 },
  value: { marginLeft: 10 },
  resultClear: { color: '#2e7d32', fontSize: 16, fontWeight: 'bold' },
  resultMatch: { color: '#c62828', fontSize: 16, fontWeight: 'bold' },
})

interface Match {
  name: string
  source: string
  score: number
  matchType?: string
}

interface ReportData {
  clientName: string
  timestamp: Date
  result: string
  matches: Match[]
  lists: string[]
}

const PDFReport = ({ data }: { data: ReportData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Sanctions Screening Report</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Client Name:</Text>
        <Text style={styles.value}>{data.clientName}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Screening Date:</Text>
        <Text style={styles.value}>{data.timestamp.toISOString()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Result:</Text>
        <Text style={[styles.value, data.result === 'CLEAR' ? styles.resultClear : styles.resultMatch]}>
          {data.result}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Lists Checked:</Text>
        <Text style={styles.value}>{data.lists.join(', ')}</Text>
      </View>

      {data.matches.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.label}>Matches Found:</Text>
          {data.matches.map((m, i) => (
            <Text key={i} style={styles.value}>
              {m.name} ({m.source}) - Score: {(m.score * 100).toFixed(1)}%
            </Text>
          ))}
        </View>
      )}
    </Page>
  </Document>
)

export async function generatePDF(data: ReportData): Promise<Buffer> {
  return await renderToBuffer(<PDFReport data={data} />)
}
```

---

### File 4: `app/actions/scheduler.ts`

```typescript
'use server'

import { PrismaClient } from '@prisma/client'
import parser from 'cron-parser'

const db = new PrismaClient()

export async function createMonitoringJob(
  clientName: string,
  cronExpression: string,
  userId: string
) {
  const interval = parser.parseExpression(cronExpression)
  const nextRunAt = interval.next().toDate()

  return await db.monitoringJob.create({
    data: { clientName, cronExpression, nextRunAt, userId },
  })
}

export async function getMonitoringJobs(userId: string) {
  return await db.monitoringJob.findMany({
    where: { userId },
    orderBy: { nextRunAt: 'asc' },
  })
}
```

---

### File 5: `scripts/scrape-sanctions.ts`

```typescript
import { PrismaClient } from '@prisma/client'
import { VertexAI } from '@google-cloud/vertexai'

const db = new PrismaClient()
const vertexAI = new VertexAI({
  project: process.env.GCP_PROJECT_ID!,
  location: process.env.VERTEX_AI_LOCATION || 'us-central1',
})

async function main() {
  // Fetch OFAC data (placeholder)
  const entities = [
    { name: 'John Doe', source: 'OFAC' },
    { name: 'Jane Smith', source: 'OFAC' },
  ]

  const model = vertexAI.getGenerativeModel({ model: 'text-embedding-004' })

  for (const entity of entities) {
    const embeddingResult = await model.embedContent(entity.name)
    const embedding = embeddingResult.embedding.values

    await db.$executeRaw`
      INSERT INTO "SanctionEntity" (id, name, source, embedding)
      VALUES (gen_random_uuid(), ${entity.name}, ${entity.source}, ${JSON.stringify(embedding)}::vector)
      ON CONFLICT DO NOTHING
    `

    console.log(`Imported: ${entity.name}`)
  }

  await db.$disconnect()
}

main()
```

---

## Database Schema

**File**: `prisma/schema.prisma`

```prisma
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["postgresqlExtensions"]
}

datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  extensions = [pg_trgm, vector]
}

model MonitoringJob {
  id             String   @id @default(cuid())
  clientName     String
  cronExpression String
  nextRunAt      DateTime
  userId         String
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  @@index([nextRunAt])
}

model AuditLog {
  id          String   @id @default(cuid())
  jobId       String
  clientName  String
  result      String
  gcsUrl      String
  pdfHash     String
  screened_at DateTime @default(now())

  @@index([jobId])
}

model SanctionEntity {
  id        String                     @id @default(cuid())
  name      String
  source    String
  embedding Unsupported("vector(768)")?
  createdAt DateTime                   @default(now())

  @@index([name(ops: raw("gin_trgm_ops"))], type: Gin)
}
```

---

## Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/screening
GCP_PROJECT_ID=your-project-id
GCS_BUCKET_NAME=compliance-reports-locked
CLOUD_TASKS_QUEUE=screening-queue
CLOUD_TASKS_LOCATION=us-central1
VERTEX_AI_LOCATION=us-central1
NEXT_PUBLIC_APP_URL=https://your-app.run.app
GCP_SERVICE_ACCOUNT_EMAIL=screening-engine@project.iam.gserviceaccount.com
```

---

## Verification Checklist

After rewriting, verify:

1. ✅ NO files in `lib/adapters/` directory
2. ✅ NO files in `lib/ports/` directory
3. ✅ NO `interface TaskAdapter`, `StorageAdapter`, or `AIModelAdapter`
4. ✅ NO `class AdapterFactory`
5. ✅ NO `Mock*` classes
6. ✅ DIRECT imports: `import { CloudTasksClient } from '@google-cloud/tasks'`
7. ✅ DIRECT imports: `import { Storage } from '@google-cloud/storage'`
8. ✅ DIRECT imports: `import { VertexAI } from '@google-cloud/vertexai'`
9. ✅ SDK methods called directly: `tasksClient.createTask(...)`, `bucket.file(...).save(...)`
10. ✅ NO wrapper functions around GCP SDKs

---

## What Changed

| Before (WRONG) | After (CORRECT) |
|----------------|-----------------|
| `AdapterFactory.getTaskAdapter().scheduleTask(...)` | `tasksClient.createTask(...)` |
| `AdapterFactory.getStorageAdapter().uploadFile(...)` | `bucket.file(...).save(...)` |
| `AdapterFactory.getAIAdapter().generateEmbedding(...)` | `model.embedContent(...)` |
| Mock implementations for local dev | GCP SDK calls (fail gracefully without credentials) |
| Abstraction layers | Direct SDK usage |

---

## Summary

**The key principle**: Import GCP SDKs at the top of your route handlers and call them directly. No factories, no adapters, no mocks, no abstractions.