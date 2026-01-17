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

interface TransactionVolumeChartProps {
	data?: {
		month: string;
		volume: number;
		transactions: number;
	}[];
}

export function TransactionVolumeChart({ data: propData }: TransactionVolumeChartProps) {
	const chartData = propData || [
		{ month: "Jan", volume: 2850000, transactions: 1245 },
		{ month: "Feb", volume: 3100000, transactions: 1389 },
		{ month: "Mar", volume: 2950000, transactions: 1298 },
		{ month: "Apr", volume: 3450000, transactions: 1523 },
		{ month: "May", volume: 3850000, transactions: 1687 },
		{ month: "Jun", volume: 4200000, transactions: 1834 },
		{ month: "Jul", volume: 3950000, transactions: 1721 },
		{ month: "Aug", volume: 4150000, transactions: 1802 },
		{ month: "Sep", volume: 4450000, transactions: 1945 },
		{ month: "Oct", volume: 4800000, transactions: 2089 },
		{ month: "Nov", volume: 5100000, transactions: 2234 },
		{ month: "Dec", volume: 4900000, transactions: 2156 },
	];

	return (
		<Card className="lg:col-span-2">
			<CardHeader>
				<CardTitle className="text-foreground">Transaction Volume Trends</CardTitle>
				<CardDescription>
					Monthly transaction volumes and counts across all clients
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						volume: {
							label: "Volume (R)",
							color: "var(--chart-1)",
						},
						transactions: {
							label: "Transaction Count",
							color: "var(--chart-3)",
						},
					}}
					className="border-0 border-background h-72 px-[11px] py-[7px] text-xs font-mono opacity-100 text-foreground w-full bg-sidebar rounded-lg shadow-black/50 shadow-xl">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart
							data={chartData}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="#000" />
							<XAxis dataKey="month" className="text-xs" />
							<YAxis yAxisId="left" className="text-xs" />
							<YAxis yAxisId="right" orientation="right" className="text-xs" />
							<ChartTooltip content={<ChartTooltipContent labelKey="month" />} />
							<Legend />
							<Line
								yAxisId="left"
								type="monotone"
								dataKey="volume"
								stroke="var(--chart-1)"
								strokeWidth={4}
								dot={{ r: 4 }}
								name="Volume (R)"
							/>
							<Line
								yAxisId="right"
								type="monotone"
								dataKey="transactions"
								stroke="var(--chart-3)"
								strokeWidth={4}
								dot={{ r: 4 }}
								name="Transaction Count"
							/>
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
