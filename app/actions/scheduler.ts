"use server";

import { PrismaClient } from "@prisma/client";
// @ts-ignore
import parser from "cron-parser";

const db = new PrismaClient();

export async function createMonitoringJob(
	clientName: string,
	cronExpression: string,
	userId: string
) {
	const interval = parser.parseExpression(cronExpression);
	const nextRunAt = interval.next().toDate();

	return await db.monitoringJob.create({
		data: { clientName, cronExpression, nextRunAt, userId },
	});
}

export async function getMonitoringJobs(userId: string) {
	return await db.monitoringJob.findMany({
		where: { userId },
		orderBy: { nextRunAt: "asc" },
	});
}
