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
		day: string;
		volume: number;
		transactions: number;
	}[];
}

interface CustomYAxisTickProps {
	x?: number;
	y?: number;
	payload?: { value: string | number };
	textAnchor?: "start" | "middle" | "end" | "inherit";
}

const CustomYAxisTick = (props: CustomYAxisTickProps) => {
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
				className="recharts-text text-[11px] tracking-widest recharts-cartesian-axis-tick-value stroke-(--chart-2) font-light stroke-0">
				<tspan>{payload?.value}</tspan>
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
							color: "var(--chart-6)",
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
							<Legend wrapperStyle={{ color: "var(--chart-7)" }} />
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="volume"
								strokeOpacity={0.8}
								stroke="var(--chart-1)"
								strokeWidth={3}
								dot={{ r: 8 }}
								name="Volume"
							/>
							<Line
								yAxisId="right"
								type="monotone"
								dataKey="transactions"
								strokeOpacity={0.8}
								stroke="var(--chart-5)"
								strokeWidth={2}
								dot={{ r: 8 }}
								name="Total Transactions"
							/>
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
