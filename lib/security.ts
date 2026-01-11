import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
function getKey(): Buffer {
	const SCOPED_KEY = process.env.PII_ENCRYPTION_KEY;

	if (!SCOPED_KEY) {
		throw new Error("PII_ENCRYPTION_KEY environment variable is not set");
	}

	// Ensure key is 32 bytes
	const key = Buffer.from(SCOPED_KEY, "hex");
	if (key.length !== 32) {
		throw new Error("PII_ENCRYPTION_KEY must be a 32-byte hex string");
	}

	return key;
}

export function encrypt(text: string): string {
	const iv = crypto.randomBytes(12); // 96-bit IV for GCM
	const cipher = crypto.createCipheriv(ALGORITHM, getKey(), iv);

	let encrypted = cipher.update(text, "utf8", "hex");
	encrypted += cipher.final("hex");

	const authTag = cipher.getAuthTag();

	// Format: iv:authTag:encrypted
	return `${iv.toString("hex")}:${authTag.toString("hex")}:${encrypted}`;
}

export function decrypt(ciphertext: string): string {
	const parts = ciphertext.split(":");
	if (parts.length !== 3) {
		throw new Error("Invalid ciphertext format");
	}

	const widthIv = Buffer.from(parts[0], "hex");
	const authTag = Buffer.from(parts[1], "hex");
	const encryptedText = parts[2];

	const decipher = crypto.createDecipheriv(ALGORITHM, getKey(), widthIv);
	decipher.setAuthTag(authTag);

	let decrypted = decipher.update(encryptedText, "hex", "utf8");
	decrypted += decipher.final("utf8");

	return decrypted;
}

export function generateBlindIndex(text: string): string[] {
	// Normalize: lowercase, remove special chars
	const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");

	// Create n-grams (e.g. bigrams)
	const n = 2;
	const ngrams = new Set<string>();

	// Create bigrams
	for (let i = 0; i < normalized.length - n + 1; i++) {
		ngrams.add(normalized.substring(i, i + n));
	}

	// Ensure we capture start/end or full word if short
	if (normalized.length < n && normalized.length > 0) {
		ngrams.add(normalized);
	}

	// HMAC each n-gram
	const hashes: string[] = [];
	for (const gram of ngrams) {
		const hmac = crypto.createHmac("sha256", getKey());
		hmac.update(gram);
		hashes.push(hmac.digest("hex"));
	}

	return hashes;
}
