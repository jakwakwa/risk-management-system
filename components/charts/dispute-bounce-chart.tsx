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

interface DisputeBounceChartProps {
	data: {
		month: string;
		disputeRate: number;
		bounceRate: number;
	}[];
}

export function DisputeBounceChart({ data }: DisputeBounceChartProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-foreground">Dispute & Bounce Rate Analysis</CardTitle>
				<CardDescription>Monthly dispute and bounce rate percentages</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						disputeRate: {
							label: "Dispute Rate (%)",
							color: "var(--chart-1)",
						},
						bounceRate: {
							label: "Bounce Rate (%)",
							color: "var(--chart-2)",
						},
					}}
					className="h-[350px] w-full border rounded-3xl px-1.5 py-3.5 border-input shadow-lg">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={data} margin={{ top: 5, right: 1, left: 1, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" className="stroke-black" />
							<XAxis dataKey="month" className="text-xs" />
							<YAxis className="text-xs" />
							<ChartTooltip content={<ChartTooltipContent labelKey="month" />} />
							<Legend />
							<Bar
								dataKey="disputeRate"
								// fill="var(--color-chart-3)"
								fill="var(--color-zinc-900)"
								radius={[4, 4, 0, 0]}
								name="Dispute Rate (%)"
							/>
							<Bar
								dataKey="bounceRate"
								fill="var(--color-zinc-800)"
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
