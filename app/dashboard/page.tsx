import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { bqClient } from "@/lib/bigquery";
import { ShieldCheck, Activity, Users, AlertCircle } from "lucide-react";
import { RiskHeatmap } from "@/components/risk-heatmap";
import { TransactionTrends } from "@/components/charts/transaction-trends";
import { RiskAlerts } from "@/components/risk-alerts";
import { MonthlyComparisonTable } from "@/components/charts/monthly-comparison-table";
import { ClientsTable } from "@/components/clients-table";
import { getDashboardData } from "@/app/actions/dashboard";

export default async function DashboardPage() {
	// 0. Fetch Dashboard Core Data (Clients, etc)
	const { clients } = await getDashboardData();

	// 1. Fetch Real Counts
	const totalJobs = await db.monitoringJob.count();
	// We count 'Sandbox' records that look like 'CASE-%' as our Risk Flags
	const totalMatches = await db.sandbox.count({
		where: { alert_id: { startsWith: "CASE-" } },
	});
	// Total screens can be valid transactions + cases
	const totalScreens = (await db.sandbox.count()) + totalMatches;

	// 2. Fetch Recent Anomalies for the Feed
	const recentCases = await db.sandbox.findMany({
		where: { alert_id: { startsWith: "CASE-" } },
		orderBy: { createdAt: "desc" },
		take: 5,
	});

	// Map Prisma objects to the UI format expected by RiskAlerts
	const formattedAlerts = recentCases.map(c => {
		const payload = c.payload as any; // Cast JSON payload
		return {
			id: c.alert_id,
			client: payload.account || "Unknown Account",
			description: `Anomaly detected with ${(payload.confidence * 100).toFixed(1)}% confidence`,
			severity: payload.confidence > 0.95 ? "critical" : "high",
			time: new Date(c.createdAt).toLocaleTimeString(),
			type: "AI_FLAG",
		};
	});

	// 3. Fetch Aggregated Trends from BigQuery (Using Raw Data)
	interface TrendMetric {
		month: string;
		transactions: number;
		volume: number;
	}
	let trendsData: TrendMetric[] = [];

	try {
		// We aggregate directly from the raw transactions table because
		// the 'client_behaviour_profiles' view does not have time-series data.
		const query = `
            SELECT 
                FORMAT_TIMESTAMP('%Y-%m', created_at) as month,
                COUNT(*) as transactions,
                SUM(raw_amount) as volume
            FROM \`stratcol-risk-analysis-engine.risk_analysis_engine.transactions\`
            GROUP BY 1
            ORDER BY 1 ASC
            LIMIT 12
        `;

		const [rows] = await bqClient.query({ query });

		trendsData = rows.map((row: any) => ({
			month: row.month,
			transactions: Number(row.transactions),
			volume: Number(row.volume),
		}));
	} catch (e) {
		console.error("Failed to fetch BigQuery trends:", e);
	}

	return (
		<div className="container mx-auto p-8 space-y-8">
			<div>
				<h1 className="text-4xl font-bold tracking-tight">Risk Analysis Engine</h1>
				<p className="text-muted-foreground mt-2 text-lg">
					Operational Overview & Risk Signals
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Active Schedules</CardTitle>
						<Users className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalJobs}</div>
						<p className="text-xs text-muted-foreground">Clients being monitored</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Data Points Analyzed</CardTitle>
						<Activity className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{totalScreens}</div>
						<p className="text-xs text-muted-foreground">Ingested & Screened</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">AI Risk Flags</CardTitle>
						<AlertCircle className="h-4 w-4 text-destructive" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-destructive">{totalMatches}</div>
						<p className="text-xs text-muted-foreground">Anomalies detected</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">System Status</CardTitle>
						<ShieldCheck className="h-4 w-4 text-green-500" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-500">Operational</div>
						<p className="text-xs text-muted-foreground">BigQuery ML Active</p>
					</CardContent>
				</Card>
			</div>

			{/* Trends Section */}
			<div className="grid gap-4">
				<TransactionTrends data={trendsData} />
			</div>

			{/* Comparison Section */}
			<div className="grid gap-4">
				<MonthlyComparisonTable />
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				{/* Heatmap (Keep existing) */}
				<RiskHeatmap />

				{/* Alert Feed (Now Dynamic) */}
				<div className="col-span-3">
					<RiskAlerts alerts={formattedAlerts} />
				</div>
			</div>

			{/* Client Overview Section */}
			<div className="grid gap-4">
				<ClientsTable clients={clients} />
			</div>
		</div>
	);
}
