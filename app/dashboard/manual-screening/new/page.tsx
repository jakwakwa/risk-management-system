"use client";

import { createManualReport } from "@/app/actions/manual-reporting";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ManualReportInput, ManualReportSchema } from "@/lib/manual-reporting-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";

export default function NewManualReportPage() {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<ManualReportInput>({
		resolver: zodResolver(ManualReportSchema),
		defaultValues: {
			clientName: "",
			findings: "",
			riskLevel: "LOW",
			status: "DRAFT",
		},
	});

	async function onSubmit(data: ManualReportInput) {
		setIsSubmitting(true);
		try {
			const result = await createManualReport(data);
			if (result.success) {
				toast.success("Report created successfully");
				router.push("/dashboard/manual-screening");
			} else {
				toast.error(result.error || "Failed to create report");
			}
		} catch (error) {
			toast.error("An unexpected error occurred");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<PageContainer className="max-w-2xl">
			<SectionHeader
				title="Ai Public Client Auditor"
				description="Search & Analyse,with AI, a client's public behaviours, legal and ethical standing."
			/>

			<Card>
				<CardHeader>
					<CardTitle>Report Details</CardTitle>
					<CardDescription>
						Document your findings and assign a risk level.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="clientName">Client Name</Label>
							<Input
								id="clientName"
								placeholder="e.g. Acme Corp"
								{...form.register("clientName")}
							/>
							{form.formState.errors.clientName && (
								<p className="text-sm text-red-500">
									{form.formState.errors.clientName.message}
								</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="findings">Findings</Label>
							<textarea
								id="findings"
								className="flex min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
								placeholder="Enter detailed findings here..."
								{...form.register("findings")}
							/>
							{form.formState.errors.findings && (
								<p className="text-sm text-red-500">
									{form.formState.errors.findings.message}
								</p>
							)}
						</div>

						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="riskLevel">Risk Level</Label>
								<Select
									onValueChange={(val: any) => form.setValue("riskLevel", val)}
									defaultValue={form.getValues("riskLevel")}>
									<SelectTrigger>
										<SelectValue placeholder="Select risk level" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="LOW">Low</SelectItem>
										<SelectItem value="MEDIUM">Medium</SelectItem>
										<SelectItem value="HIGH">High</SelectItem>
										<SelectItem value="CRITICAL">Critical</SelectItem>
									</SelectContent>
								</Select>
								{form.formState.errors.riskLevel && (
									<p className="text-sm text-red-500">
										{form.formState.errors.riskLevel.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="status">Status</Label>
								<Select
									onValueChange={(val: any) => form.setValue("status", val)}
									defaultValue={form.getValues("status")}>
									<SelectTrigger>
										<SelectValue placeholder="Select status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="DRAFT">Draft</SelectItem>
										<SelectItem value="FINAL">Final</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="flex justify-end gap-2 pt-4">
							<Button
								type="button"
								variant="ghost"
								onClick={() => router.back()}
								disabled={isSubmitting}>
								Cancel
							</Button>
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
								Create Report
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</PageContainer>
	);
}
