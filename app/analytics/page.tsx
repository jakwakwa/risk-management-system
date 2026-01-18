import { TransactionVolumeChart } from "@/components/charts/transaction-volume-chart";
import { DisputeBounceChart } from "@/components/charts/dispute-bounce-chart";
import { RiskDistributionChart } from "@/components/charts/risk-distribution-chart";
import { MonthlyComparisonTable } from "@/components/charts/monthly-comparison-table";
import {
	getDisputeBounceData,
	getMonthlyTransactionVolume,
	getRiskDistribution,
} from "@/app/actions/dashboard-charts";
import { SectionHeader } from "@/components/shared/section-header";

export default async function AnalyticsPage() {
	const disputeBounceData = await getDisputeBounceData();
	const monthlyVolumeData = await getMonthlyTransactionVolume();
	const riskDistributionData = await getRiskDistribution();

	return (
		<div className="min-h-screen bg-background font-sans font-light">
			<main className="container mx-auto p-6 space-y-6 px-3.5">
				<SectionHeader
					title="Operational Data Analytics"
					description="Monitor transaction patterns, disputes, and operational trends"
				/>

				<div className="grid gap-6 lg:grid-cols-2">
					<div className="lg:col-span-1">
						<MonthlyComparisonTable />
						<DisputeBounceChart data={disputeBounceData} />
					</div>
				</div>
				<div className="">
					<TransactionVolumeChart data={monthlyVolumeData} />
					<RiskDistributionChart data={riskDistributionData} />
				</div>
			</main>
		</div>
	);
}
