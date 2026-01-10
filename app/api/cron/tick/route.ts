import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { CloudTasksClient } from "@google-cloud/tasks";
// @ts-ignore
import parser from "cron-parser";

// DIRECT instantiation - NO factory, NO adapter
const db = new PrismaClient();
const tasksClient = new CloudTasksClient();

export async function POST(req: NextRequest) {
	const authHeader = req.headers.get("authorization");

	if (process.env.NODE_ENV === "production" && !authHeader?.startsWith("Bearer ")) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const now = new Date();
	const dueJobs = await db.monitoringJob.findMany({
		where: { nextRunAt: { lte: now } },
	});

	console.log(`[Tick] Found ${dueJobs.length} jobs due`);

	const queuePath = tasksClient.queuePath(
		process.env.GCP_PROJECT_ID!,
		process.env.CLOUD_TASKS_LOCATION!,
		process.env.CLOUD_TASKS_QUEUE!
	);

	for (const job of dueJobs) {
		const interval = parser.parseExpression(job.cronExpression, {
			currentDate: job.nextRunAt,
		});
		const nextRunAt = interval.next().toDate();

		await db.monitoringJob.update({
			where: { id: job.id },
			data: { nextRunAt },
		});

		// DIRECT SDK call - NO adapter.scheduleTask()
		await tasksClient.createTask({
			parent: queuePath,
			task: {
				httpRequest: {
					httpMethod: "POST",
					url: `${process.env.NEXT_PUBLIC_APP_URL}/api/engine/screen`,
					headers: { "Content-Type": "application/json" },
					body: Buffer.from(
						JSON.stringify({
							clientName: job.clientName,
							jobId: job.id,
						})
					).toString("base64"),
					oidcToken: {
						serviceAccountEmail: process.env.GCP_SERVICE_ACCOUNT_EMAIL || "",
					},
				},
			},
		});
	}

	return NextResponse.json({ processed: dueJobs.length });
}
