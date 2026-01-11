-- CreateTable
CREATE TABLE "RiskProfile" (
    "id" TEXT NOT NULL,
    "monitoringJobId" TEXT NOT NULL,
    "bqClientId" INTEGER,
    "avgMonthlyVolume" DECIMAL(12,2),
    "volatilityScore" DECIMAL(5,2),
    "riskScore" DOUBLE PRECISION,
    "lastAnalysed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RiskProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiskAlert" (
    "id" TEXT NOT NULL,
    "riskProfileId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RiskAlert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RiskProfile_monitoringJobId_key" ON "RiskProfile"("monitoringJobId");

-- AddForeignKey
ALTER TABLE "RiskProfile" ADD CONSTRAINT "RiskProfile_monitoringJobId_fkey" FOREIGN KEY ("monitoringJobId") REFERENCES "MonitoringJob"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiskAlert" ADD CONSTRAINT "RiskAlert_riskProfileId_fkey" FOREIGN KEY ("riskProfileId") REFERENCES "RiskProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
