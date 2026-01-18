import { getMonitoringJobs, getPipelineStatus } from "../actions/scheduler";
import { EnableEtlButton, TriggerEtlButton } from "./etl-control-buttons";
import { CreateJobForm } from "./create-job-form";
import { DeleteJobButton } from "./delete-job-button";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { utcToSat, cronToHumanReadable } from "@/lib/cron-utils";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { schedulesContent } from "./content";
import { Loader2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function SchedulesPage() {
	const userId = "user_123";
	// Fetch jobs and status
	const [jobs, runningWorkflows] = await Promise.all([
		getMonitoringJobs(userId),
		getPipelineStatus(),
	]);

	const systemJobs = jobs.filter(j => j.type !== "CLIENT_MONITORING");
	const clientJobs = jobs.filter(j => j.type === "CLIENT_MONITORING");

	const { header, tabs, clients, system } = schedulesContent;

	return (
		<PageContainer>
			<SectionHeader title={header.title} description={header.description} />

			<Tabs defaultValue="clients" className="space-y-4">
				<TabsList>
					<TabsTrigger value="clients">{tabs.clients}</TabsTrigger>
					<TabsTrigger value="system">{tabs.system}</TabsTrigger>
				</TabsList>

				<TabsContent value="clients" className="space-y-4">
					<div className="grid gap-8 md:grid-cols-3">
						<Card className="md:col-span-1 h-fit">
							<CardHeader>
								<CardTitle>{clients.createCard.title}</CardTitle>
								<CardDescription>{clients.createCard.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<CreateJobForm content={clients.createCard} />
							</CardContent>
						</Card>

						<Card className="md:col-span-2">
							<CardHeader>
								<CardTitle>{clients.tableCard.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											{clients.tableCard.headers.map(header => (
												<TableHead key={header}>{header}</TableHead>
											))}
										</TableRow>
									</TableHeader>
									<TableBody>
										{clientJobs.map(job => (
											<TableRow key={job.id}>
												<TableCell className="font-medium">{job.clientName}</TableCell>
												<TableCell>
													<div className="flex flex-col">
														<Badge variant="secondary" className="w-fit">
															{cronToHumanReadable(utcToSat(job.cronExpression))}
														</Badge>
													</div>
												</TableCell>
												<TableCell className="text-muted-foreground text-sm">
													{job.nextRunAt?.toLocaleDateString()}
												</TableCell>
												<TableCell>
													<DeleteJobButton
														jobId={job.id}
														label={clients.tableCard.deleteButton}
													/>
												</TableCell>
											</TableRow>
										))}
										{clientJobs.length === 0 && (
											<TableRow>
												<TableCell
													colSpan={4}
													className="text-center py-6 text-muted-foreground">
													{clients.tableCard.emptyState}
												</TableCell>
											</TableRow>
										)}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</div>
				</TabsContent>

				<TabsContent value="system" className="space-y-4 ">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
						<Card className="bg-card/80 border-dashed border-2 col-span-1">
							<CardHeader className="pb-3">
								<CardTitle className="text-sm font-medium text-muted-foreground">
									{system.quickActions.etl.label}
								</CardTitle>
								<CardDescription className="text-lg font-semibold text-card-foreground">
									{system.quickActions.etl.title}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-3">
								<EnableEtlButton label={system.quickActions.etl.button} />
								<TriggerEtlButton />
								{runningWorkflows.length > 0 && (
									<div className="flex items-center gap-2 p-2 bg-cyan-400/5 text-cyan-200 animate-[pulse_2s_cubic-bezier(0.4,0,0.9,1)_infinite] w-full text-center rounded-md border-cyan-500 border-[1.5px]">
										<Loader2 className="w-4 h-4 animate-spin" />
										{runningWorkflows.length} Pipeline(s) Running
									</div>
								)}
							</CardContent>
						</Card>
						<Card className="bg-card border-dashed border-2 col-span-2">
							<CardHeader>
								<CardTitle>{system.tableCard.title}</CardTitle>
								<CardDescription>{system.tableCard.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											{system.tableCard.headers.map(header => (
												<TableHead key={header}>{header}</TableHead>
											))}
										</TableRow>
									</TableHeader>
									<TableBody>
										{systemJobs.map(job => (
											<TableRow key={job.id}>
												<TableCell className="font-medium">{job.clientName}</TableCell>
												<TableCell>
													<Badge>{job.type}</Badge>
												</TableCell>
												<TableCell>
													<div className="flex flex-col">
														<Badge variant="secondary" className="w-fit">
															{cronToHumanReadable(utcToSat(job.cronExpression))}
														</Badge>
													</div>
												</TableCell>
												<TableCell>
													<DeleteJobButton
														jobId={job.id}
														label={system.tableCard.deleteButton}
													/>
												</TableCell>
											</TableRow>
										))}
										{systemJobs.length === 0 && (
											<TableRow>
												<TableCell
													colSpan={4}
													className="text-center py-6 text-muted-foreground">
													{system.tableCard.emptyState}
												</TableCell>
											</TableRow>
										)}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</PageContainer>
	);
}
