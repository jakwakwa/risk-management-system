import { type NextRequest, NextResponse } from "next/server";
import { sendTestEmail } from "@/lib/email";

/**
 * POST /api/test-email
 * Test endpoint to verify Resend email configuration.
 *
 * Body: { to: "recipient@example.com" }
 */
export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { to } = body;

		if (!to || typeof to !== "string") {
			return NextResponse.json(
				{ error: "Missing or invalid 'to' email address" },
				{ status: 400 }
			);
		}

		const result = await sendTestEmail(to);

		if (result.success) {
			return NextResponse.json({
				success: true,
				message: `Test email sent to ${to}`,
				messageId: result.messageId,
			});
		}

		return NextResponse.json({ success: false, error: result.error }, { status: 500 });
	} catch (error) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}
