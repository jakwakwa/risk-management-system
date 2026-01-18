"use server";

import { VertexAI } from "@google-cloud/vertexai";
import type { Anomaly } from "@/types/anomaly";
import { getGcpAuthOptions } from "@/lib/gcp-auth";

export async function generateReportSummary(anomalies: Anomaly[]) {
	if (!(process.env.GCP_PROJECT_ID && process.env.VERTEX_AI_LOCATION)) {
		throw new Error("Missing Vertex AI configuration");
	}

	// Initialize Vertex with your Cloud project and location
	const { projectId, authClient } = getGcpAuthOptions();
	const vertex_ai = new VertexAI({
		project: projectId || process.env.GCP_PROJECT_ID,
		location: process.env.VERTEX_AI_LOCATION,
		googleAuthOptions: authClient ? { authClient } : undefined,
	});

	const model = "gemini-2.0-flash-001";

	// Instantiate the model
	const generativeModel = vertex_ai.preview.getGenerativeModel({
		model: model,
		generationConfig: {
			maxOutputTokens: 2048,
			temperature: 0.4,
			topP: 0.8,
			topK: 40,
		},
	});

	const prompt = `
    You are a Risk Analysis AI. Analyze the following financial anomaly report.
    Summarize the key findings, focusing on the most significant anomalies (highest normalized_distance).
    Explain WHY these transactions might be flagged (e.g., unusually high amount, irregular time).
    Provide a professional, concise executive summary suitable for a risk manager.

    Anomalies Data:
    ${JSON.stringify(anomalies.slice(0, 15), null, 2)}
  `;

	try {
		const result = await generativeModel.generateContent(prompt);
		const response = result.response;
		const summary = response.candidates?.[0]?.content?.parts?.[0]?.text;

		return summary || "No summary could be generated.";
	} catch (error) {
		console.error("Error generating summary:", error);
		return "Failed to generate AI summary at this time.";
	}
}
