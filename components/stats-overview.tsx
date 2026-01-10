import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, Users } from "lucide-react";

const stats = [
	{
		title: "Total Clients",
		value: "248",
		change: "+12",
		trend: "up" as const,
		icon: Users,
	},
	{
		title: "High Risk Clients",
		value: "23",
		change: "+5",
		trend: "up" as const,
		icon: AlertTriangle,
		alert: true,
	},
	{
		title: "Avg Risk Score",
		value: "42.8",
		change: "-2.4",
		trend: "down" as const,
		icon: TrendingDown,
	},
	{
		title: "Active Alerts",
		value: "18",
		change: "+3",
		trend: "up" as const,
		icon: AlertTriangle,
	},
];

export function StatsOverview() {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mx-0">
			{stats.map(stat => {
				const Icon = stat.icon;
				return (
					<Card key={stat.title} className="p-6 rounded-4xl shadow-lg border-none my-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div
									className={`flex h-10 w-10 items-center justify-center rounded-lg ${
										stat.alert
											? "bg-destructive/10 text-destructive"
											: "bg-primary/10 text-primary"
									}`}>
									<Icon className="h-5 w-5 text-destructive bg-[rgba(252,177,164,0)]" />
								</div>
								<div>
									<p className="text-sm text-muted-foreground">{stat.title}</p>
									<p className="text-2xl font-semibold text-foreground mx-[3px]">
										{stat.value}
									</p>
								</div>
							</div>
						</div>
						<div className="mt-4 flex items-center gap-1 text-sm">
							{stat.trend === "up" ? (
								<TrendingUp
									className={`h-4 w-4 ${stat.alert ? "text-destructive" : "text-success"}`}
								/>
							) : (
								<TrendingDown className="h-4 w-4 text-success" />
							)}
							<span
								className={
									stat.trend === "up" && stat.alert ? "text-destructive" : "text-success"
								}>
								{stat.change}
							</span>
							<span className="text-muted-foreground">from last month</span>
						</div>
					</Card>
				);
			})}
		</div>
	);
}
