import { getDashboardData } from "@/app/actions/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/db";
import {
	TrendingUp,
	TrendingDown,
	AlertTriangle,
	Users,
	ShieldCheck,
	AlertCircle,
	FileWarningIcon,
	CheckIcon,
	FileWarning,
	TrophyIcon,
	MessageCircleWarningIcon,
} from "lucide-react";

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

export async function StatsOverview() {
	// 0. Fetch Dashboard Core Data (Clients, etc)

	// 1. Fetch Real Counts
	const totalJobs = await db.monitoringJob.count();
	// We count 'Sandbox' records that look like 'CASE-%' as our Risk Flags
	const totalMatches = await db.sandbox.count({
		where: { alert_id: { startsWith: "CASE-" } },
	});

	// 3. Fetch Recent Valid Transactions
	const recentTransactions = await db.sandbox.findMany({
		where: { alert_id: { startsWith: "CASE-" } },
		orderBy: { createdAt: "desc" },
		take: 5,
	});

	// 4. Fetch Total Screens
	const totalScreens = await db.sandbox.count();

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
			<Card className="rounded-4xl">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
					<CardTitle className="text-sm font-medium">Model Garden Status</CardTitle>
					{totalJobs > 0 ? (
						<ShieldCheck className="h-4 w-4 text-success" />
					) : (
						<ShieldCheck className="h-4 w-4 text-destructive" />
					)}
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold text-success my-2">Operational</div>
					{totalJobs > 0 ? (
						<p className="text-xs text-muted-foreground">Active</p>
					) : (
						<p className="text-xs text-muted-foreground">Inactive</p>
					)}
				</CardContent>
			</Card>
			<Card className="rounded-4xl">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
					{recentTransactions.map(transaction => transaction.alert_id).length > 0 &&
					recentTransactions.map(transaction => transaction.alert_id).length < 10 ? (
						<AlertTriangle className="h-4 w-4 text-warning" />
					) : recentTransactions.map(transaction => transaction.alert_id).length === 0 ? (
						<TrophyIcon className="h-4 w-4 text-success" />
					) : (
						<AlertCircle className="h-4 w-4 text-destructive" />
					)}
				</CardHeader>
				<CardContent>
					{recentTransactions.map(transaction => transaction.alert_id).length > 0 ? (
						<div className="text-2xl font-bold text-warning">
							{recentTransactions.map(transaction => transaction.alert_id).length}
						</div>
					) : recentTransactions.map(transaction => transaction.alert_id).length === 0 ? (
						<div className="text-2xl font-bold text-success">
							{recentTransactions.map(transaction => transaction.alert_id).length}
						</div>
					) : (
						<div className="text-2xl font-bold text-destructive">
							{recentTransactions.map(transaction => transaction.alert_id).length}
						</div>
					)}
					<p className="text-xs text-muted-foreground">Recent Transactions</p>
				</CardContent>
			</Card>
			<Card className="rounded-4xl">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">AI Risk Flags</CardTitle>
					{totalMatches > 20 ? (
						<AlertCircle className="h-4 w-4 text-destructive" />
					) : (
						<AlertCircle className="h-4 w-4 text-success" />
					)}
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold text-destructive">{totalMatches}</div>
					<p className="text-xs text-muted-foreground">Recent Cases</p>
				</CardContent>
			</Card>
			<Card className="rounded-4xl">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Total Transactions Screened
					</CardTitle>
					<AlertCircle className="h-4 w-4 text-success" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold text-foreground-muted">{totalScreens}</div>
					<p className="text-xs text-muted-foreground">Total Transactions Screened</p>
				</CardContent>
			</Card>
		</div>
	);
}
