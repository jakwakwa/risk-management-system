"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createTemporalClient } from "@/services/temporal/client";
import { generateBlindIndex, encrypt, decrypt } from "@/lib/security";
import type { JobType } from "../../generated/client";

export async function createMonitoringJob({
	clientName,
	cronExpression,
	userId,
}: {
	clientName: string;
	cronExpression: string;
	userId: string;
}) {
	// 1. Encrypt and Blind Index
	const encryptedName = encrypt(clientName);
	const blindHashes = generateBlindIndex(clientName);

	// 2. DB Transaction
	const job = await db.$transaction(async tx => {
		const j = await tx.monitoringJob.create({
			data: {
				type: "CLIENT_MONITORING",
				clientName: encryptedName,
				cronExpression,
				nextRunAt: new Date(),
				userId,
			},
		});

		await tx.blindIndex.createMany({
			data: blindHashes.map(hash => ({
				hash,
				recordId: j.id,
				model: "MonitoringJob",
				field: "clientName",
			})),
		});

		return j;
	});

	// 3. Temporal Schedule
	try {
		const client = await createTemporalClient();
		await client.schedule.create({
			scheduleId: `schedule-${job.id}`,
			spec: {
				cronExpressions: [cronExpression],
				jitter: "1m",
			},
			action: {
				type: "startWorkflow",
				workflowType: "RiskScreeningWorkflow",
				args: [job.id],
				taskQueue: process.env.CLOUD_TASKS_QUEUE || "screening-queue",
			},
		});
	} catch (e) {
		console.error("Failed to create Temporal Schedule:", e);
		throw e;
	}

	revalidatePath("/schedules");
	return job;
}

export async function createSystemJob({
	type,
	cronExpression,
}: {
	type: "SYSTEM_ETL" | "SYSTEM_INFERENCE";
	cronExpression: string;
}) {
	const jobName =
		type === "SYSTEM_ETL" ? "Daily Data Pipeline (ETL)" : "Daily Risk Inference";
	const workflowType =
		type === "SYSTEM_ETL" ? "runAnomalyAnalysisWorkflow" : "DailyInferenceWorkflow";

	// 1. DB Record
	const job = await db.monitoringJob.create({
		data: {
			type: type as JobType,
			clientName: jobName, // Plain text for system jobs
			cronExpression,
			nextRunAt: new Date(),
			userId: null, // System job
		},
	});

	// 2. Temporal Schedule
	try {
		const client = await createTemporalClient();
		await client.schedule.create({
			scheduleId: `schedule-${job.id}`,
			spec: {
				cronExpressions: [cronExpression],
				timezone: "UTC",
			},
			action: {
				type: "startWorkflow",
				workflowType: workflowType,
				args: [],
				taskQueue: process.env.CLOUD_TASKS_QUEUE || "screening-queue",
			},
		});
	} catch (e) {
		console.error("Failed to create System Schedule:", e);
		// Best effort cleanup
		await db.monitoringJob.delete({ where: { id: job.id } });
		throw e;
	}

	revalidatePath("/schedules");
	return job;
}

export async function triggerEtlPipeline() {
	console.log("🚀 Manually triggering ETL Pipeline...");

	try {
		const client = await createTemporalClient();
		const handle = await client.workflow.start("runAnomalyAnalysisWorkflow", {
			taskQueue: process.env.CLOUD_TASKS_QUEUE || "screening-queue",
			workflowId: `manual-etl-${Date.now()}`,
			args: [],
		});

		console.log(`✅ Started Workflow: ${handle.workflowId}`);
		return { success: true, workflowId: handle.workflowId };
	} catch (e) {
		console.error("❌ Failed to trigger ETL:", e);
		return { success: false, error: "Failed to trigger pipeline" };
	}
}

export async function getJobs(userId?: string) {
	// If userId provided, fetch user jobs. If not, fetch system jobs?
	// Or fetch all for admin?
	// For now, we'll fetch User Jobs + System Jobs separatedly or mapped.

	const where = userId
		? {
				OR: [
					{ userId },
					{ type: { in: ["SYSTEM_ETL", "SYSTEM_INFERENCE"] as JobType[] } },
				],
			}
		: {};

	const jobs = await db.monitoringJob.findMany({
		where,
		orderBy: { createdAt: "desc" },
	});

	return jobs.map(j => {
		if (j.type === "CLIENT_MONITORING") {
			try {
				return { ...j, clientName: decrypt(j.clientName) };
			} catch {
				return j;
			}
		}
		return j; // System jobs are plaintext
	});
}

// Alias for backward compatibility if page.tsx uses it specifically (it does)
export const getMonitoringJobs = async (userId: string) => getJobs(userId);

export async function deleteMonitoringJob(jobId: string) {
	const client = await createTemporalClient();
	try {
		await client.schedule.getHandle(`schedule-${jobId}`).delete();
	} catch (e) {
		console.warn("Schedule might not exist in Temporal", e);
	}

	await db.monitoringJob.delete({ where: { id: jobId } });
	revalidatePath("/schedules");
}

export async function getPipelineStatus() {
	const client = await createTemporalClient();
	try {
		const response = await client.workflow.list({
			query: 'WorkflowType="runAnomalyAnalysisWorkflow" AND ExecutionStatus="Running"',
		});

		const runningWorkflows = [];
		for await (const workflow of response) {
			runningWorkflows.push({
				workflowId: workflow.workflowId,
				runId: workflow.runId,
				startTime: workflow.startTime,
				status: "RUNNING",
			});
		}

		return runningWorkflows;
	} catch (e) {
		console.error("Failed to get pipeline status:", e);
		return [];
	}
}
