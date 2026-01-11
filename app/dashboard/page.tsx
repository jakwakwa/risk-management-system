import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { db } from '@/lib/db';
import { bqClient, BQ_TABLES } from '@/lib/bigquery';
import { ShieldCheck, Activity, Users, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { RiskHeatmap } from '@/components/risk-heatmap';
import { TransactionTrends } from '@/components/charts/transaction-trends';

export default async function DashboardPage() {
    const totalJobs = await db.monitoringJob.count();
    const totalScreens = await db.auditLog.count();
    const totalMatches = await db.auditLog.count({ where: { result: 'MATCH' } });
    
    // Fetch Aggregated Insights from BigQuery
    interface TrendMetric {
        month: string;
        transactions: number;
        volume: number;
    }
    let trendsData: TrendMetric[] = [];
    try {
        const query = `
            SELECT month, SUM(total_count) as transactions, SUM(total_value) as volume
            FROM \`${BQ_TABLES.CLIENT_BEHAVIOUR_PROFILES}\`
            GROUP BY month
            ORDER BY month ASC
            LIMIT 12
        `;
        const [rows] = await bqClient.query({ query });
        trendsData = rows.map(row => ({
            month: row.month,
            transactions: Number(row.transactions),
            volume: Number(row.volume),
        }));
    } catch (e) {
        console.error("Failed to fetch BigQuery trends:", e);
        // Fallback or empty
    }

    return (
        <div className="container mx-auto p-8 space-y-8">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">Risk Analysis Engine</h1>
                <p className="text-muted-foreground mt-2 text-lg">Operational Overview & Risk Signals</p>
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
                        <CardTitle className="text-sm font-medium">Total Screens Run</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalScreens}</div>
                        <p className="text-xs text-muted-foreground">Lifetime checks performed</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Risk Flags</CardTitle>
                        <AlertCircle className="h-4 w-4 text-destructive" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-destructive">{totalMatches}</div>
                        <p className="text-xs text-muted-foreground">Potential matches found</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Status</CardTitle>
                        <ShieldCheck className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-500">Operational</div>
                        <p className="text-xs text-muted-foreground">Temporal Workers Active</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4">
                <TransactionTrends data={trendsData} />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RiskHeatmap />
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            Latest assurance reports generated.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <Link href="/reports" className="block text-sm text-blue-500 hover:underline">
                                View all reports &rarr;
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
