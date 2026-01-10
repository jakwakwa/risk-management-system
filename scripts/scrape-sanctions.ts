import { PrismaClient } from "@prisma/client";
import { VertexAI } from "@google-cloud/vertexai";

const db = new PrismaClient();
const vertexAI = new VertexAI({
	project: process.env.GCP_PROJECT_ID!,
	location: process.env.VERTEX_AI_LOCATION || "us-central1",
});

async function main() {
	// Fetch OFAC data (placeholder)
	const entities = [
		{ name: "John Doe", source: "OFAC" },
		{ name: "Jane Smith", source: "OFAC" },
	];

	const model = vertexAI.getGenerativeModel({ model: "text-embedding-004" });

	for (const entity of entities) {
		const embeddingResult = await model.embedContent(entity.name);
		const embedding = embeddingResult.embedding.values || [];

		await db.$executeRaw`
      INSERT INTO "SanctionEntity" (id, name, source, embedding)
      VALUES (gen_random_uuid(), ${entity.name}, ${entity.source}, ${JSON.stringify(embedding)}::vector)
      ON CONFLICT DO NOTHING
    `;

		console.log(`Imported: ${entity.name}`);
	}

	await db.$disconnect();
}

main();
