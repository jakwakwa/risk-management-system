import { getVercelOidcToken } from "@vercel/oidc";
import { ExternalAccountClient, type AuthClient } from "google-auth-library";

export function getGcpAuthClient(): AuthClient | undefined {
	const {
		GCP_PROJECT_NUMBER,
		GCP_SERVICE_ACCOUNT_EMAIL,
		GCP_WORKLOAD_IDENTITY_POOL_ID,
		GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID,
		VERCEL,
	} = process.env;

	// We only want to use Vercel OIDC if we are actually in the Vercel environment
	// and have the necessary configuration.
	const isVercel = !!VERCEL;

	if (
		isVercel &&
		GCP_PROJECT_NUMBER &&
		GCP_SERVICE_ACCOUNT_EMAIL &&
		GCP_WORKLOAD_IDENTITY_POOL_ID &&
		GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID
	) {
		try {
			const authClient = ExternalAccountClient.fromJSON({
				type: "external_account",
				audience: `//iam.googleapis.com/projects/${GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/${GCP_WORKLOAD_IDENTITY_POOL_ID}/providers/${GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID}`,
				subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
				token_url: "https://sts.googleapis.com/v1/token",
				service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${GCP_SERVICE_ACCOUNT_EMAIL}:generateAccessToken`,
				subject_token_supplier: {
					// Use the Vercel OIDC token as the subject token
					// biome-ignore lint/suspicious/noExplicitAny: compatibility fallback
					getSubjectToken: getVercelOidcToken as any,
				},
			}) as unknown as AuthClient;

			return authClient;
		} catch (error) {
			console.warn("Failed to create ExternalAccountClient for Vercel OIDC:", error);
			// Fallback to undefined (ADC)
			return undefined;
		}
	}

	// Fallback for local development or other environments (uses Application Default Credentials)
	return undefined;
}

export function getGcpAuthOptions() {
	const authClient = getGcpAuthClient();
	const projectId = process.env.GCP_PROJECT_ID;

	if (authClient) {
		return {
			projectId,
			// biome-ignore lint/suspicious/noExplicitAny: dependency mismatch workaround
			authClient: authClient as any,
		};
	}

	return { projectId };
}
