import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { readReportFromGCS } from "@/lib/storage";
import { ReportView } from "@/components/reports/report-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageContainer } from "@/components/shared/page-container";

interface PageProps {
	params: Promise<{
		jobId: string;
	}>;
}

export default async function ReportDetailPage({ params }: PageProps) {
	const { jobId } = await params;

	const report = await prisma.anomalyReport.findFirst({
		where: { jobId: jobId },
	});

	if (!report) {
		notFound();
	}

	let anomalies = [];
	try {
		anomalies = (await readReportFromGCS(report.gcsPath)) as any[];
	} catch (error) {
		console.error("Error reading report from GCS:", {
			gcsPath: report.gcsPath,
			error,
		});
		anomalies = [];
	}

	return (
		<PageContainer>
			<div>
				<Link href="/reports">
					<Button
						variant="ghost"
						className="pl-0 gap-2 text-muted-foreground hover:text-foreground">
						<ArrowLeft className="h-4 w-4" />
						Back to Reports
					</Button>
				</Link>
			</div>

			<ReportView data={anomalies} jobId={jobId} />
		</PageContainer>
	);
}
