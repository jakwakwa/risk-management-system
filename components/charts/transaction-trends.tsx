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

const CustomYAxisTick = (props: any) => {
	const { x, y, payload, textAnchor } = props;
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={0}
				textAnchor={textAnchor}
				fill="text-stone-300"
				fontSize={12}
				className="recharts-text text-[11px] tracking-widest recharts-cartesian-axis-tick-value stroke-(--chart-2)/90 font-light stroke-1">
				<tspan>{payload.value}</tspan>
			</text>
		</g>
	);
};

export function TransactionTrends({ data }: TransactionTrendsProps) {
	return (
		<Card className="col-span-1 w-full">
			<CardHeader>
				<CardTitle className="text-foreground">Transaction Trends</CardTitle>
				<CardDescription>Aggregated monthly transaction indicators.</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						volume: {
							label: "Total Value",
							color: "var(--chart-1)",
						},
						transactions: {
							label: "Transaction Count",
							color: "var(--chart-5)",
						},
					}}
					className="border-0 border-background h-72 px-[11px] py-[7px] text-xs font-mono opacity-100 text-foreground w-full bg-sidebar/40 rounded-lg shadow-black/20 shadow-xl">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data} margin={{ top: 20, right: 1, left: 1, bottom: 15 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="var(--chart-4)" />
							<XAxis dataKey="day" className="text-xs" />
							<YAxis yAxisId="left" tick={<CustomYAxisTick />} />
							<YAxis yAxisId="right" orientation="right" tick={<CustomYAxisTick />} />
							<ChartTooltip content={<ChartTooltipContent labelKey="day" />} />
							<Legend wrapperStyle={{ color: "var(--chart-5)" }} />
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="volume"
								stroke="var(--chart-1)"
								strokeWidth={4}
								dot={{ r: 4 }}
								name="Total Value"
							/>
							<Line
								yAxisId="right"
								type="monotone"
								dataKey="transactions"
								stroke="var(--chart-5)"
								strokeWidth={4}
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
