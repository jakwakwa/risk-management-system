use where applicable
@mcp:prisma-mcp-server  
@mcp:bigquery 
gcloud cli

----
These prompts are designed for a Cursor-like environment, ensuring strict adherence to Next.js 15, Prisma v7, and TypeScript best practices.

Phase 1: Environment & Schema Migration
Context: We are moving AnomalyReport data from a JSON database column to Google Cloud Storage (GCS) to improve scalability. Agent Instructions:

Install Dependency: Run npm install @google-cloud/storage.

Update Schema: Modify prisma/schema.prisma:

Locate the AnomalyReport model.

Remove the data field (Json).

Add gcsPath String (Stores the GCS object path).

Ensure status, jobId, and anomalyCount fields exist as per standard conventions.

Migrate: Run npx prisma migrate dev --name refactor_reports_to_gcs.

Environment: Add GCS_BUCKET_NAME to your .env file (placeholder) and ensure GOOGLE_APPLICATION_CREDENTIALS is handled by the environment.

Phase 2: GCS Utility Implementation
Context: Create a centralized helper for GCS operations. Agent Instructions:

Create File: lib/storage.ts.

Implement Logic:

Import { Storage } from @google-cloud/storage.

Initialize storage client. Use process.env.GCS_BUCKET_NAME.

Export async function uploadReportToGCS(filename: string, data: unknown): Uploads JSON data with contentType: 'application/json'.

Export async function getReportSignedUrl(filename: string): Generates a V4 signed URL (Read action) valid for 1 hour (expires: Date.now() + 3600 * 1000).

Type Safety: Ensure strict typing for all arguments.

Phase 3: Temporal Activity & Workflow Update
Context: Update the data pipeline to offload storage to GCS. Agent Instructions:

Update Activity: In services/temporal/data-pipeline-activities.ts:

Import uploadReportToGCS from @/lib/storage.

Refactor saveDailyReport(jobId: string, data: any[]).

Logic: Generate filename (reports/${date}/${jobId}.json). Await uploadReportToGCS. Then, create AnomalyReport in Prisma with gcsPath (do not store data).

Update Workflow: In services/temporal/data-pipeline-workflows.ts:

Locate DailyEtlWorkflow.

Ensure runBigQueryMLAnalysis returns a jobId.

Pass this jobId into saveDailyReport.

Validation: Ensure strict TypeScript interfaces for activity arguments.

Phase 4: UI/UX Implementation (Server Component)
Context: Display reports with secure download links. Agent Instructions:

Update Page: app/reports/page.tsx.

Data Fetching:

Fetch reports via db.anomalyReport.findMany({ orderBy: { createdAt: 'desc' }, take: 20 }).

Critical: Use Promise.all to map reports to an array of objects containing the signedUrl via getReportSignedUrl. Do not await inside the JSX map.

Render:

Use Tailwind CSS v4. Create a clean list view.

Display: Date, Anomaly Count, Status.

Action: "Download JSON" button linking to signedUrl (target="_blank").

Use Shadcn UI Card or Button components if available, otherwise standard accessible HTML.



