import { resend, DEFAULT_FROM_EMAIL, ALERT_RECIPIENTS } from "./resend";

// =================================================================================================
// 📧 Email Types
// =================================================================================================

export interface PipelineAlertPayload {
	jobId: string;
	anomalyCount: number;
	timestamp: Date;
	reportUrl?: string;
	summary?: string;
}

export interface EmailResult {
	success: boolean;
	messageId?: string;
	error?: string;
}

// =================================================================================================
// 📧 Email Templates
// =================================================================================================

/**
 * Generates HTML email for pipeline alerts.
 */
function generatePipelineAlertHtml(payload: PipelineAlertPayload): string {
	const { jobId, anomalyCount, timestamp, reportUrl, summary } = payload;
	const formattedDate = timestamp.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #856b38 0%, #734f08 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
    .alert-badge { display: inline-block; background: #ef4444; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; }
    .stat { margin: 20px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #db1f2e; }
    .stat-label { color: #6b7280; font-size: 12px; text-transform: uppercase; }
    .stat-value { color: #111827; font-size: 34px; font-weight: 800; }
    .summary-box { background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #734f08; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .summary-title { font-weight: 600; color: #4b5563; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; }
    .summary-text { color: #374151; line-height: 1.6; font-size: 15px; }
    .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-top: 20px; }
    .footer { text-align: center; color: #9ca3af; font-size: 12px; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="alert-badge">⚠️ ALERT</span>
      <h1 style="margin: 15px 0 0 0;">Pipeline Analysis Complete</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">${formattedDate}</p>
    </div>
    <div class="content">
      <p>The anomaly detection pipeline has completed analysis and identified potential risks requiring attention.</p>
      
      ${
				summary
					? `
      <div class="summary-box">
        <div class="summary-title">AI Assessment</div>
        <div class="summary-text">${summary}</div>
      </div>
      `
					: ""
			}

      <div class="stat">
        <div class="stat-label">Anomalies Detected</div>
        <div class="stat-value">${anomalyCount}</div>
      </div>
      
      <div class="stat">
        <div class="stat-label">Job ID</div>
        <div class="stat-value" style="font-size: 14px; font-family: monospace;">${jobId}</div>
      </div>
      
      ${reportUrl ? `<a href="${reportUrl}" class="button">View Full Report →</a>` : ""}
      
      <div class="footer">
        <p>This is an automated alert from the Risk Analysis Engine.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Simple utility to strip HTML for text-only emails.
 */
function stripHtml(html?: string): string {
	if (!html) return "";
	return html
		.replace(/<br\s*\/?>/gi, "\n")
		.replace(/<li>/gi, "• ")
		.replace(/<\/li>/gi, "\n")
		.replace(/<p>/gi, "")
		.replace(/<\/p>/gi, "\n\n")
		.replace(/<[^>]+>/g, "");
}

/**
 * Generates plain text version for pipeline alerts.
 */
function generatePipelineAlertText(payload: PipelineAlertPayload): string {
	const { jobId, anomalyCount, timestamp, reportUrl, summary } = payload;
	const cleanSummary = stripHtml(summary);

	return `
PIPELINE ANALYSIS ALERT
=======================

The anomaly detection pipeline has completed and detected ${anomalyCount} anomalies.

${
	cleanSummary
		? `
AI ASSESSMENT:
${cleanSummary}
`
		: ""
}

Job ID: ${jobId}
Timestamp: ${timestamp.toISOString()}
${reportUrl ? `\nView Report: ${reportUrl}` : ""}

This is an automated alert from the Risk Analysis Engine.
  `.trim();
}

// =================================================================================================
// 📧 Email Sending Functions
// =================================================================================================

/**
 * Sends pipeline alert email when anomalies are detected.
 */
export async function sendPipelineAlertEmail(
	payload: PipelineAlertPayload,
	recipients?: string[]
): Promise<EmailResult> {
	const to = recipients?.length ? recipients : ALERT_RECIPIENTS;

	if (to.length === 0) {
		console.warn("[Email] No recipients configured for pipeline alerts");
		return { success: false, error: "No recipients configured" };
	}

	try {
		const { data, error } = await resend.emails.send({
			from: DEFAULT_FROM_EMAIL,
			to,
			subject: `🚨 Pipeline Alert: ${payload.anomalyCount} Anomalies Detected`,
			html: generatePipelineAlertHtml(payload),
			text: generatePipelineAlertText(payload),
		});

		if (error) {
			console.error("[Email] Failed to send pipeline alert:", error);
			return { success: false, error: error.message };
		}

		console.log(`[Email] Pipeline alert sent successfully. ID: ${data?.id}`);
		return { success: true, messageId: data?.id };
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		console.error("[Email] Exception sending pipeline alert:", message);
		return { success: false, error: message };
	}
}

/**
 * Sends a test email to verify Resend configuration.
 */
export async function sendTestEmail(to: string): Promise<EmailResult> {
	try {
		const { data, error } = await resend.emails.send({
			from: DEFAULT_FROM_EMAIL,
			to: [to],
			subject: "✅ Test Email - Risk Analysis Engine",
			html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Test Email Successful</h2>
          <p>Your Resend integration is working correctly.</p>
          <p style="color: #666; font-size: 12px;">Sent at: ${new Date().toISOString()}</p>
        </div>
      `,
			text: "Test email successful. Your Resend integration is working correctly.",
		});

		if (error) {
			return { success: false, error: error.message };
		}

		return { success: true, messageId: data?.id };
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		return { success: false, error: message };
	}
}
