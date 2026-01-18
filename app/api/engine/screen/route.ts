import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Storage } from "@google-cloud/storage";
import { VertexAI } from "@google-cloud/vertexai";
import { generatePDF } from "@/lib/report-generator";
import crypto from "node:crypto";

import { getGcpAuthOptions } from "@/lib/gcp-auth";

const authOptions = getGcpAuthOptions();

// biome-ignore lint/suspicious/noExplicitAny: Google Cloud library type mismatch
const storage = new Storage(authOptions as any);

const { projectId, authClient } = authOptions;
const vertexAI = new VertexAI({
	project: projectId || process.env.GCP_PROJECT_ID!,
	location: process.env.VERTEX_AI_LOCATION || "us-central1",
	// biome-ignore lint/suspicious/noExplicitAny: Google Cloud library type mismatch
	googleAuthOptions: authClient ? { authClient: authClient as any } : undefined,
});

export async function POST(req: NextRequest) {
	const { clientName, jobId } = await req.json();

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
  `;

	// STEP 2: Generate embedding - DIRECT SDK call
	const model = vertexAI.getGenerativeModel({ model: "text-embedding-004" });
	// biome-ignore lint/suspicious/noExplicitAny: method exists in runtime but missing in type
	const embeddingResult = await (model as any).embedContent(clientName);
	const clientEmbedding = embeddingResult.embedding.values;

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
  `;

	const allMatches = [
		...fuzzyMatches.map(m => ({ ...m, matchType: "fuzzy" })),
		...vectorMatches.map(m => ({ ...m, matchType: "vector", score: 1 - m.distance })),
	];

	allMatches.sort((a, b) => b.score - a.score);

	const result = allMatches.length > 0 && allMatches[0].score >= 0.7 ? "MATCH" : "CLEAR";

	// STEP 4: Generate PDF
	const timestamp = new Date();
	const pdfBuffer = await generatePDF({
		clientName,
		timestamp,
		result,
		matches: allMatches.slice(0, 5),
		lists: ["OFAC", "UN", "EU"],
	});

	// STEP 5: Upload to GCS - DIRECT SDK call, NO storage.uploadFile()
	const bucketName = process.env.GCS_BUCKET_NAME!;
	const bucket = storage.bucket(bucketName);
	const filename = `reports/${jobId}/${timestamp.getTime()}.pdf`;
	const file = bucket.file(filename);

	await file.save(pdfBuffer, {
		metadata: {
			contentType: "application/pdf",
			metadata: { clientName, result, timestamp: timestamp.toISOString() },
		},
	});

	// STEP 6: Get signed URL - DIRECT SDK call
	const [signedUrl] = await file.getSignedUrl({
		version: "v4",
		action: "read",
		expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
	});

	// STEP 7: Audit log
	const pdfHash = crypto.createHash("sha256").update(pdfBuffer).digest("hex");
	await db.auditLog.create({
		data: {
			jobId,
			clientName,
			result,
			gcsUrl: `gs://${bucketName}/${filename}`,
			pdfHash,
		},
	});

	return NextResponse.json({
		success: true,
		result,
		reportUrl: signedUrl,
		matchCount: allMatches.length,
	});
}
