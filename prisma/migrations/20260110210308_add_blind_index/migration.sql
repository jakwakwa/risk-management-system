-- CreateTable
CREATE TABLE "BlindIndex" (
    "id" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "field" TEXT NOT NULL,

    CONSTRAINT "BlindIndex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BlindIndex_hash_idx" ON "BlindIndex"("hash");

-- CreateIndex
CREATE INDEX "BlindIndex_recordId_model_field_idx" ON "BlindIndex"("recordId", "model", "field");
