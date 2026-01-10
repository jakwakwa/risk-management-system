-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateTable
CREATE TABLE "MonitoringJob" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "cronExpression" TEXT NOT NULL,
    "nextRunAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MonitoringJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "gcsUrl" TEXT NOT NULL,
    "pdfHash" TEXT NOT NULL,
    "screened_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SanctionEntity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "embedding" vector(768),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SanctionEntity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MonitoringJob_nextRunAt_idx" ON "MonitoringJob"("nextRunAt");

-- CreateIndex
CREATE INDEX "AuditLog_jobId_idx" ON "AuditLog"("jobId");

-- CreateIndex
CREATE INDEX "SanctionEntity_name_idx" ON "SanctionEntity" USING GIN ("name" gin_trgm_ops);
