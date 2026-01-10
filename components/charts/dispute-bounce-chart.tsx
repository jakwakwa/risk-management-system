"use client";

import {
	Bar,
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Legend,
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
	{ month: "Jan", disputeRate: 1.2, bounceRate: 0.8 },
	{ month: "Feb", disputeRate: 1.4, bounceRate: 0.9 },
	{ month: "Mar", disputeRate: 1.1, bounceRate: 0.7 },
	{ month: "Apr", disputeRate: 1.8, bounceRate: 1.2 },
	{ month: "May", disputeRate: 2.1, bounceRate: 1.4 },
	{ month: "Jun", disputeRate: 1.9, bounceRate: 1.1 },
	{ month: "Jul", disputeRate: 1.6, bounceRate: 0.9 },
	{ month: "Aug", disputeRate: 1.7, bounceRate: 1.0 },
	{ month: "Sep", disputeRate: 2.3, bounceRate: 1.5 },
	{ month: "Oct", disputeRate: 2.0, bounceRate: 1.3 },
	{ month: "Nov", disputeRate: 1.8, bounceRate: 1.1 },
	{ month: "Dec", disputeRate: 1.5, bounceRate: 0.8 },
];

export function DisputeBounceChart() {
	return (
		<Card className="px-px">
			<CardHeader>
				<CardTitle className="text-foreground">Dispute & Bounce Rate Analysis</CardTitle>
				<CardDescription>Monthly dispute and bounce rate percentages</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						disputeRate: {
							label: "Dispute Rate (%)",
							color: "hsl(var(--chart-3))",
						},
						bounceRate: {
							label: "Bounce Rate (%)",
							color: "hsl(var(--chart-4))",
						},
					}}
					className="h-[350px] w-full border rounded-3xl px-1.5 py-3.5 border-input shadow-lg">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis dataKey="month" className="text-xs" />
							<YAxis className="text-xs" />
							<ChartTooltip content={<ChartTooltipContent labelKey="month" />} />
							<Legend />
							<Bar
								dataKey="disputeRate"
								fill="var(--color-disputeRate)"
								radius={[4, 4, 0, 0]}
								name="Dispute Rate (%)"
							/>
							<Bar
								dataKey="bounceRate"
								fill="var(--color-bounceRate)"
								radius={[4, 4, 0, 0]}
								name="Bounce Rate (%)"
							/>
						</BarChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
