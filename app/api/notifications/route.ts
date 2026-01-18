import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const limit = parseInt(searchParams.get("limit") || "20");
		const unreadOnly = searchParams.get("unreadOnly") === "true";

		const where = unreadOnly ? { read: false } : {};

		const notifications = await prisma.notification.findMany({
			where,
			orderBy: { createdAt: "desc" },
			take: limit,
		});
		return NextResponse.json(notifications);
	} catch (error) {
		console.error("Failed to fetch notifications:", error);
		return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 });
	}
}

export async function PATCH(request: NextRequest) {
	try {
		// Determine if we're marking one or all as read
		const body = await request.json();
		const { id, markAll } = body;

		if (markAll) {
			await prisma.notification.updateMany({
				where: { read: false },
				data: { read: true },
			});
			return NextResponse.json({ success: true, message: "Marked all as read" });
		}

		if (id) {
			await prisma.notification.update({
				where: { id },
				data: { read: true },
			});
			return NextResponse.json({ success: true, message: "Marked as read" });
		}

		return NextResponse.json({ error: "Invalid request" }, { status: 400 });
	} catch (error) {
		console.error("Failed to update notification:", error);
		return NextResponse.json({ error: "Failed to update notification" }, { status: 500 });
	}
}
