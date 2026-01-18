"use client";

import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

interface ChartData {
	name: string;
	value: number;
	color: string;
}

export function RiskDistributionChart({ data }: { data: ChartData[] }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-foreground">Risk Distribution</CardTitle>
				<CardDescription>Client distribution by risk tier</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={{
						value: {
							label: "Clients",
						},
					}}
					className="text-background px-4 w-full h-[372px] rounded-3xl border-sidebar-primary bg-sidebar-border shadow-lg">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie
								data={data}
								cx="50%"
								cy="50%"
								labelLine={false}
								label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
								outerRadius={80}
								fill="#8884d8"
								dataKey="value">
								{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={entry.color} />
								))}
							</Pie>
							<Legend verticalAlign="bottom" height={36} />
						</PieChart>
					</ResponsiveContainer>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
