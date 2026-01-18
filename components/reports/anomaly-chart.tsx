"use client";

import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
	ZAxis,
	type TooltipProps,
} from "recharts";
import { format } from "date-fns";
import type { Anomaly } from "@/types/anomaly";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

interface AnomalyChartProps {
	data: Anomaly[];
}

export function AnomalyChart({ data }: AnomalyChartProps) {
	// Transform data for chart
	const chartData = data.map(item => ({
		...item,
		time: new Date(item.created_at.value).getTime(),
		amount: item.raw_amount,
		score: item.normalized_distance,
		displayTime: format(new Date(item.created_at.value), "HH:mm dd/MM"),
	}));

	const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
		if (active && payload && payload.length) {
			const data = payload[0].payload;
			return (
				<div className="bg-popover border border-border p-3 rounded shadow-xl text-xs text-popover-foreground">
					<p className="font-bold mb-1">{data.identifier}</p>
					<p className="opacity-90">
						Amount:{" "}
						<span className="font-mono text-success dark:text-success">
							${data.amount}
						</span>
					</p>
					<p className="opacity-90">
						Score:{" "}
						<span className="font-mono text-warning dark:text-warning">
							{Number(data.score).toFixed(2)}
						</span>
					</p>
					<p className="text-muted-foreground mt-1">{data.displayTime}</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="w-full h-[400px] bg-card/50 rounded-xl border border-border p-4">
			<h3 className="text-sm font-medium text-muted-foreground mb-4">
				Anomaly Distribution
			</h3>
			<div className="text-xs text-muted-foreground leading-6">
				<p>{`Score > 1.8 Critical`}</p>
				<p>{`Score > 1.75 High`}</p>
				<p>{`Otherwise: Normal/Low`}</p>
			</div>
			<ResponsiveContainer width="100%" height="100%">
				<ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
					<CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
					<XAxis
						type="number"
						dataKey="time"
						name="Time"
						domain={["auto", "auto"]}
						tickFormatter={unixTime => format(new Date(unixTime), "dd/MM")}
						stroke="var(--muted-foreground)"
						fontSize={12}
						tickLine={false}
						axisLine={false}
					/>
					<YAxis
						type="number"
						dataKey="amount"
						name="Amount"
						unit="$"
						stroke="var(--muted-foreground)"
						fontSize={12}
						tickLine={false}
						axisLine={false}
						tickFormatter={value => `$${value}`}
					/>
					<ZAxis type="number" dataKey="score" range={[50, 400]} name="Score" />
					<Tooltip
						content={<CustomTooltip />}
						cursor={{ strokeDasharray: "3 3", stroke: "var(--muted-foreground)" }}
						contentStyle={{
							backgroundColor: "var(--popover)",
							borderColor: "var(--border)",
							color: "var(--popover-foreground)",
						}}
					/>
					<Scatter name="Anomalies" data={chartData}>
						{chartData.map((entry, index) => {
							// Logic:
							// Score > 1.8 -> Critical (Chart 4 - often reddish)
							// Score > 1.75 -> High (Chart 3 - orange/yellowish)
							// Else -> Normal/Low (Chart 1 - primary theme color)
							let fill = "var(--chart-5)";
							if (entry.score > 1.8) fill = "var(--chart-1)";
							else if (entry.score > 1.75) fill = "var(--chart-2)";

							return (
								<Cell
									key={`cell-${index}`}
									fill={fill}
									stroke="var(--background)"
									strokeWidth={1}
								/>
							);
						})}
					</Scatter>
				</ScatterChart>
			</ResponsiveContainer>
		</div>
	);
}
