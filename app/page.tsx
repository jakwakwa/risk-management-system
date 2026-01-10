import { DashboardHeader } from "@/components/dashboard-header";
import { StatsOverview } from "@/components/stats-overview";
import { RiskAlerts } from "@/components/risk-alerts";
import { ClientsTable } from "@/components/clients-table";

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-background font-sans font-light border-none">
			<DashboardHeader />
			<main className="container mx-auto p-6 space-y-6">
				<StatsOverview />
				<div className="grid gap-6 lg:grid-cols-3">
					<div className="lg:col-span-2">
						<ClientsTable />
					</div>
					<div>
						<RiskAlerts />
					</div>
				</div>
			</main>
		</div>
	);
}
