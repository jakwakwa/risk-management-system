import { Storage } from "@google-cloud/storage";

import { getGcpAuthOptions } from "./gcp-auth";

// Initialize storage client
const storage = new Storage(getGcpAuthOptions());
const bucketName = process.env.GCS_BUCKET_NAME;

if (!bucketName) {
	console.warn(
		"⚠️ GCS_BUCKET_NAME environment variable is not set. GCS anomalies will fail."
	);
}

export async function uploadReportToGCS(filename: string, data: unknown): Promise<void> {
	if (!bucketName) throw new Error("GCS_BUCKET_NAME not configured");

	const bucket = storage.bucket(bucketName);
	const file = bucket.file(filename);

	await file.save(JSON.stringify(data), {
		contentType: "application/json",
		metadata: {
			cacheControl: "no-cache",
		},
	});
}

/**
 * Read report data directly from GCS (for server-side use).
 * This avoids signed URL issues with Application Default Credentials.
 */
export async function readReportFromGCS(filename: string): Promise<unknown> {
	if (!bucketName) throw new Error("GCS_BUCKET_NAME not configured");

	const bucket = storage.bucket(bucketName);
	const file = bucket.file(filename);

	const [contents] = await file.download();
	return JSON.parse(contents.toString("utf-8"));
}

/**
 * @deprecated Use readReportFromGCS for server-side. Signed URLs require service account key.
 */
export async function getReportSignedUrl(filename: string): Promise<string> {
	if (!bucketName) throw new Error("GCS_BUCKET_NAME not configured");

	const bucket = storage.bucket(bucketName);
	const file = bucket.file(filename);

	const [url] = await file.getSignedUrl({
		version: "v4",
		action: "read",
		expires: Date.now() + 60 * 60 * 1000, // 1 hour
	});

	return url;
}
