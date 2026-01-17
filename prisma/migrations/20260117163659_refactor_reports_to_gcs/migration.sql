-- CreateTable
CREATE TABLE "AnomalyReport" (
    "id" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "gcsPath" TEXT NOT NULL,
    "anomalyCount" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'GENERATED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnomalyReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AnomalyReport_jobId_idx" ON "AnomalyReport"("jobId");
