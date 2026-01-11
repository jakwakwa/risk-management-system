"use client";

import {
	Line,
	LineChart,
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

interface TransactionTrendsProps {
    data: {
        month: string;
        volume: number;
        transactions: number;
    }[];
}

export function TransactionTrends({ data }: TransactionTrendsProps) {
	return (
		<Card className="col-span-4">
			<CardHeader>
				<CardTitle className="text-foreground">Transaction Trends</CardTitle>
				<CardDescription>
					Aggregated monthly transaction indicators.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						volume: {
							label: "Total Value (R)",
							color: "hsl(var(--chart-1))",
						},
						transactions: {
							label: "Transaction Count",
							color: "hsl(var(--chart-2))",
						},
					}}
					className="border-0 border-background h-72 px-[11px] py-[7px] text-xs font-mono opacity-100 text-foreground w-full bg-sidebar-border rounded-3xl shadow-lg">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis dataKey="month" className="text-xs" />
							<YAxis yAxisId="left" className="text-xs" />
							<YAxis yAxisId="right" orientation="right" className="text-xs" />
							<ChartTooltip content={<ChartTooltipContent labelKey="month" />} />
							<Legend />
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="volume"
								stroke="var(--color-volume)"
								strokeWidth={2}
								dot={{ r: 4 }}
								name="Total Value"
							/>
							<Line
								yAxisId="right"
								type="monotone"
								dataKey="transactions"
								stroke="var(--color-transactions)"
								strokeWidth={2}
								dot={{ r: 4 }}
								name="Count"
							/>
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
