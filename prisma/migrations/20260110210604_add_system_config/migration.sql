-- CreateTable
CREATE TABLE "SystemConfig" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "fuzzyThreshold" DOUBLE PRECISION NOT NULL DEFAULT 0.7,
    "phoneticAlgorithm" TEXT NOT NULL DEFAULT 'BMPM',
    "semanticContext" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SystemConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SystemConfig_key_key" ON "SystemConfig"("key");
