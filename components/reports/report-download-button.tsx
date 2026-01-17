"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Loader2, FileDown } from "lucide-react";
import { ReportPDF } from "./report-pdf";
import type { Anomaly } from "@/types/anomaly";

const PDFDownloadLink = dynamic(
	() => import("@react-pdf/renderer").then(mod => mod.PDFDownloadLink),
	{
		ssr: false,
		loading: () => (
			<Button variant="outline" disabled className="gap-2 opacity-50 cursor-not-allowed">
				<Loader2 className="h-4 w-4 animate-spin" />
				Preparing PDF...
			</Button>
		),
	}
);

interface ReportDownloadButtonProps {
	data: Anomaly[];
	summary?: string;
	jobId: string;
}

export function ReportDownloadButton({
	data,
	summary,
	jobId,
}: ReportDownloadButtonProps) {
	return (
		<PDFDownloadLink
			document={<ReportPDF data={data} summary={summary} jobId={jobId} />}
			fileName={`anomaly-report-${jobId}.pdf`}>
			{/* 
        // @ts-ignore - React-PDF types mismatch with children callback often 
      */}
			{({ loading }: { loading: boolean }) => (
				<Button variant="outline" disabled={loading} className="gap-2">
					{loading ? (
						<Loader2 className="h-4 w-4 animate-spin" />
					) : (
						<FileDown className="h-4 w-4" />
					)}
					Export PDF
				</Button>
			)}
		</PDFDownloadLink>
	);
}
