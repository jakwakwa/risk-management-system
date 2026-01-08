import { DashboardHeader } from "@/components/dashboard-header"
import { TransactionVolumeChart } from "@/components/charts/transaction-volume-chart"
import { DisputeBounceChart } from "@/components/charts/dispute-bounce-chart"
import { IndustryCategoryChart } from "@/components/charts/industry-category-chart"
import { MonthlyComparisonTable } from "@/components/charts/monthly-comparison-table"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background font-sans font-light">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6 px-3.5">
        <div>
          <h1 className="text-3xl font-semibold text-chart-2">Operational Analytics</h1>
          <p className="mt-1 text-accent-foreground">Monitor transaction patterns, disputes, and operational trends</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TransactionVolumeChart />
          <DisputeBounceChart />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MonthlyComparisonTable />
          </div>
          <IndustryCategoryChart />
        </div>
      </main>
    </div>
  )
}
