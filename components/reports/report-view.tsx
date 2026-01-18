"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { AnomalyChart } from "./anomaly-chart";
import { generateReportSummary } from "@/app/actions/generate-summary";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportPDF } from "./report-pdf";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Loader2, FileDown, Sparkles, AlertTriangle } from "lucide-react";

import type { Anomaly } from "@/types/anomaly";
import { SectionHeader } from "../shared/section-header";

interface ReportViewProps {
	data: Anomaly[];
	jobId: string;
}

export function ReportView({ data, jobId }: ReportViewProps) {
	const [summary, setSummary] = useState<string | null>(null);
	const [loadingSummary, setLoadingSummary] = useState(false);

	const handleGenerateSummary = async () => {
		setLoadingSummary(true);
		try {
			const result = await generateReportSummary(data);
			setSummary(result);
		} catch (e) {
			console.error(e);
			setSummary("Failed to generate summary.");
		} finally {
			setLoadingSummary(false);
		}
	};

	return (
		<div className="space-y-6">
			<div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
				<div>
					<SectionHeader
						title="Anomaly Analysis Report"
						description={`Job ID: ${jobId.slice(0, 6)}...`}
					/>
				</div>
				<div className="flex gap-2">
					<PDFDownloadLink
						document={
							<ReportPDF data={data} summary={summary || undefined} jobId={jobId} />
						}
						fileName={`anomaly-report-${jobId}.pdf`}>
						{({ loading }) => (
							<Button disabled={loading} className="gap-2">
								{loading ? (
									<Loader2 className="h-4 w-4 animate-spin" />
								) : (
									<FileDown className="h-4 w-4" />
								)}
								Export PDF
							</Button>
						)}
					</PDFDownloadLink>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Main Chart Section */}
				<Card className="lg:col-span-2 border-border bg-card/50">
					<CardHeader>
						<CardTitle>Transaction Anomalies</CardTitle>
						<CardDescription>
							Visualizing K-Means clustering outliers over time
						</CardDescription>
					</CardHeader>
					<CardContent>
						<AnomalyChart data={data} />
					</CardContent>
				</Card>

				{/* AI Summary Section */}
				<Card className="border-border bg-primary flex flex-col max-h-300 h-full overflow-y-scroll">
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Sparkles className="h-5 w-5 text-ring" />
							AI Insight
						</CardTitle>
						<CardDescription>Powered by Gemini 2.5 Flash</CardDescription>
					</CardHeader>
					<CardContent className="flex-1">
						{!summary ? (
							<div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4 ">
								<p className="text-muted-foreground text-sm">
									Generate an executive summary of these anomalies using Vertex AI.
								</p>
								<Button
									onClick={handleGenerateSummary}
									disabled={loadingSummary}
									className="bg-primary hover:bg-primary/90 text-primary-foreground">
									{loadingSummary ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
										</>
									) : (
										"Generate Summary"
									)}
								</Button>
							</div>
						) : (
							<div className="bg-card p-4 rounded-lg border border-border text-card-foreground leading-relaxed">
								<div
									className="prose prose-sm prose-invert max-w-none 
									prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2
									prose-p:text-muted-foreground prose-p:my-2
									prose-strong:text-foreground
									prose-ul:my-2 prose-li:text-muted-foreground prose-li:my-0.5
									prose-ol:my-2">
									<ReactMarkdown>{summary}</ReactMarkdown>
								</div>
								<div className="mt-4 flex justify-end">
									<Button
										variant="ghost"
										size="sm"
										onClick={() => setSummary(null)}
										className="text-muted-foreground hover:text-foreground">
										Regenerate
									</Button>
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</div>

			{/* Data Table Preview */}
			<Card className="border-border">
				<CardHeader>
					<CardTitle>Top Anomalies List</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="relative w-full overflow-auto">
						<table className="w-full caption-bottom text-sm text-left">
							<thead className="[&_tr]:border-b [&_tr]:border-border">
								<tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
									<th className="h-12 px-4 align-middle font-medium text-muted-foreground">
										Identifier
									</th>
									<th className="h-12 px-4 align-middle font-medium text-muted-foreground">
										Amount
									</th>
									<th className="h-12 px-4 align-middle font-medium text-muted-foreground">
										Score (Dist)
									</th>
									<th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">
										Time
									</th>
								</tr>
							</thead>
							<tbody className="[&_tr:last-child]:border-0">
								{data.slice(0, 10).map((item, i) => (
									<tr
										key={i}
										className="border-b border-border transition-colors hover:bg-muted/50">
										<td className="p-4 align-middle font-medium text-card-foreground">
											{item.identifier}
										</td>
										<td className="p-4 align-middle text-success font-mono">
											${item.raw_amount}
										</td>
										<td className="p-4 align-middle text-warning font-mono">
											{item.normalized_distance.toFixed(4)}
										</td>
										<td className="p-4 align-middle text-right text-muted-foreground">
											{new Date(item.created_at.value).toLocaleString()}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
