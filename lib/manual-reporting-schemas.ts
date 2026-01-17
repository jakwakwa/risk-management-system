import { z } from "zod";

export const ManualReportSchema = z.object({
	clientName: z.string().min(2, "Client name is required"),
	findings: z.string().min(10, "Findings must be at least 10 characters"),
	riskLevel: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]),
	status: z.enum(["DRAFT", "FINAL"]).default("DRAFT"),
});

export type ManualReportInput = z.infer<typeof ManualReportSchema>;
