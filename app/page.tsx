import { Suspense } from "react";
import { StatsOverview } from "@/components/stats-overview";
import { RiskAlerts } from "@/components/risk-alerts";
import { ClientsTable } from "@/components/clients-table";
import { getDashboardData } from "@/app/actions/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionTrends } from "@/components/charts/transaction-trends";
import { RiskHeatmap } from "@/components/risk-heatmap";

async function DashboardContent() {
	const { clients, alerts, error } = await getDashboardData();

	if (error) {
		return (
			<div className="container mx-auto p-6">
				<Card className="border-destructive">
					<CardHeader>
						<CardTitle className="text-destructive">Error Loading Dashboard</CardTitle>
					</CardHeader>
					<CardContent>
						<p>{error}</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<main className="container mx-auto p-6 space-y-12">
			<StatsOverview />
			<div className="grid gap-6 lg:grid-cols-3">
				<div className="flex flex-col gap-4 lg:col-span-2">
					<TransactionTrends data={[]} />
					<ClientsTable clients={clients} />
				</div>
				<div className="flex flex-col gap-4">
					<RiskHeatmap />
					<RiskAlerts alerts={alerts} />
				</div>
			</div>
		</main>
	);
}

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-background font-sans font-light border-none">
			<Suspense
				fallback={
					<div className="container mx-auto p-6 space-y-6">
						<div className="h-32 w-full bg-muted animate-pulse rounded-3xl" />
						<div className="grid gap-6 lg:grid-cols-3">
							<div className="lg:col-span-2 h-96 bg-muted animate-pulse rounded-3xl" />
							<div className="h-96 bg-muted animate-pulse rounded-3xl" />
						</div>
					</div>
				}>
				<DashboardContent />
			</Suspense>
		</div>
	);
}
