import { prisma } from "@/lib/prisma";
import Link from "next/link";
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
import { ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { PageContainer } from "@/components/shared/page-container";
import { SectionHeader } from "@/components/shared/section-header";
import { reportsIndexContent } from "./content";

// Force dynamic rendering to ensure fresh data
export const dynamic = "force-dynamic";

export default async function ReportsIndexPage() {
	const reports = await prisma.anomalyReport.findMany({
		orderBy: { createdAt: "desc" },
		take: 50,
	});

	const { title, description, recentRuns, table } = reportsIndexContent;

	return (
		<PageContainer>
			<SectionHeader title={title} description={description} />

			<Card className="border-border bg-card">
				<CardHeader>
					<CardTitle>{recentRuns.title}</CardTitle>
					<CardDescription>{recentRuns.description}</CardDescription>
				</CardHeader>
				<CardContent>
					{reports.length === 0 ? (
						<div className="text-center py-10 text-muted-foreground">
							{recentRuns.emptyState}
						</div>
					) : (
						<Table>
							<TableHeader>
								<TableRow className="border-border hover:bg-muted/50">
									<TableHead className="text-muted-foreground">
										{table.headers.jobId}
									</TableHead>
									<TableHead className="text-muted-foreground">
										{table.headers.date}
									</TableHead>
									<TableHead className="text-muted-foreground">
										{table.headers.anomalies}
									</TableHead>
									<TableHead className="text-muted-foreground">
										{table.headers.status}
									</TableHead>
									<TableHead className="text-right text-muted-foreground">
										{table.headers.action}
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{reports.map(report => (
									<TableRow
										key={report.id}
										className="border-border transition-colors hover:bg-muted/50 group cursor-pointer relative">
										<TableCell className="font-medium text-card-foreground">
											<Link
												href={`/reports/${report.jobId}`}
												className="absolute inset-0 z-10"
											/>
											{report.jobId}
										</TableCell>
										<TableCell className="text-muted-foreground">
											{format(new Date(report.createdAt), "MMM dd, yyyy HH:mm")}
										</TableCell>
										<TableCell>
											<Badge
												variant="outline"
												className="border-border text-muted-foreground">
												{report.anomalyCount} detected
											</Badge>
										</TableCell>
										<TableCell>
											<Badge
												className={
													report.status === "GENERATED"
														? "bg-success/10 text-success hover:bg-success/20"
														: "bg-muted text-muted-foreground"
												}>
												{report.status}
											</Badge>
										</TableCell>
										<TableCell className="text-right">
											<ChevronRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
				</CardContent>
			</Card>
		</PageContainer>
	);
}
