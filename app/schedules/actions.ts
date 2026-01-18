"use server";

import { createMonitoringJob, deleteMonitoringJob } from "@/app/actions/scheduler";
import { revalidatePath } from "next/cache";

export async function createClientJobAction(_prevState: unknown, formData: FormData) {
	try {
		const clientName = formData.get("clientName") as string;
		const cronExpression = formData.get("cron") as string;
		const userId = "user_123"; // TODO: Get from auth context

		await createMonitoringJob({ clientName, cronExpression, userId });
		revalidatePath("/schedules");
		return { success: true, message: "Monitoring job created successfully" };
	} catch (error) {
		return { success: false, message: `Failed to create monitoring job: ${error}` };
	}
}

export async function deleteJobAction(_prevState: unknown, formData: FormData) {
	try {
		const jobId = formData.get("jobId") as string;
		await deleteMonitoringJob(jobId);
		revalidatePath("/schedules");
		return { success: true, message: "Job deleted successfully" };
	} catch (error) {
		return { success: false, message: `Failed to delete job: ${error}` };
	}
}
