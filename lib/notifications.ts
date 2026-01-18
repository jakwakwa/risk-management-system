import { prisma } from "@/lib/prisma";

export type NotificationType = "INFO" | "SUCCESS" | "WARNING" | "ERROR";

export async function createNotification(
	title: string,
	message: string,
	type: NotificationType = "INFO",
	userId?: string, // Optional specific user target
	link?: string
) {
	try {
		await prisma.notification.create({
			data: {
				title,
				message,
				type,
				userId,
				link,
			},
		});
	} catch (error) {
		console.error("Failed to create notification:", error);
		// Don't throw, just log. Notifications shouldn't break the main flow.
	}
}
