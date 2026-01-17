-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('CLIENT_MONITORING', 'SYSTEM_ETL', 'SYSTEM_INFERENCE');

-- AlterTable
ALTER TABLE "MonitoringJob" ADD COLUMN     "type" "JobType" NOT NULL DEFAULT 'CLIENT_MONITORING',
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "WatchListClient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'HIGH',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WatchListClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PublicDataAnalysis" (
    "id" TEXT NOT NULL,
    "monitoringJobId" TEXT,
    "watchListClientId" TEXT,
    "clientName" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "firecrawlJobId" TEXT,
    "negativeMedia" JSONB,
    "pepScreening" JSONB,
    "financialHealth" JSONB,
    "statutoryEnquiries" JSONB,
    "mergersActivity" JSONB,
    "overallRiskLevel" TEXT NOT NULL DEFAULT 'PENDING',
    "riskFlags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "PublicDataAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManualInvestigativeReport" (
    "id" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "analystId" TEXT NOT NULL,
    "findings" TEXT NOT NULL,
    "riskLevel" TEXT NOT NULL DEFAULT 'PENDING',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ManualInvestigativeReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sandbox" (
    "id" TEXT NOT NULL,
    "alert_id" TEXT NOT NULL,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sandbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WatchListClient_priority_idx" ON "WatchListClient"("priority");

-- CreateIndex
CREATE INDEX "PublicDataAnalysis_monitoringJobId_idx" ON "PublicDataAnalysis"("monitoringJobId");

-- CreateIndex
CREATE INDEX "PublicDataAnalysis_watchListClientId_idx" ON "PublicDataAnalysis"("watchListClientId");

-- CreateIndex
CREATE INDEX "PublicDataAnalysis_status_idx" ON "PublicDataAnalysis"("status");

-- CreateIndex
CREATE INDEX "PublicDataAnalysis_overallRiskLevel_idx" ON "PublicDataAnalysis"("overallRiskLevel");

-- CreateIndex
CREATE INDEX "ManualInvestigativeReport_clientName_idx" ON "ManualInvestigativeReport"("clientName");

-- CreateIndex
CREATE INDEX "ManualInvestigativeReport_analystId_idx" ON "ManualInvestigativeReport"("analystId");

-- CreateIndex
CREATE UNIQUE INDEX "Sandbox_alert_id_key" ON "Sandbox"("alert_id");

-- CreateIndex
CREATE INDEX "Sandbox_alert_id_idx" ON "Sandbox"("alert_id");

-- AddForeignKey
ALTER TABLE "PublicDataAnalysis" ADD CONSTRAINT "PublicDataAnalysis_monitoringJobId_fkey" FOREIGN KEY ("monitoringJobId") REFERENCES "MonitoringJob"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicDataAnalysis" ADD CONSTRAINT "PublicDataAnalysis_watchListClientId_fkey" FOREIGN KEY ("watchListClientId") REFERENCES "WatchListClient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
