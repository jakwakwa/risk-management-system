import { Resend } from "resend";

/**
 * Resend client singleton for sending transactional emails.
 * Configured via RESEND_API_KEY environment variable.
 */
export const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Default sender email - uses Resend's test domain.
 * Override with RESEND_FROM_EMAIL env var for production.
 */
export const DEFAULT_FROM_EMAIL =
	process.env.RESEND_FROM_EMAIL || "Pipeline Alerts <onboarding@resend.dev>";

/**
 * Alert recipients - comma-separated list from env var.
 * Falls back to default recipient if not configured.
 */
export const ALERT_RECIPIENTS = (
	process.env.ALERT_EMAIL_RECIPIENTS || "trails-avowal.2d@icloud.com"
)
	.split(",")
	.filter(Boolean);
