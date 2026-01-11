
import { db } from '@/lib/db';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { decrypt } from '@/lib/security';
import { AlertTriangle } from 'lucide-react';

export async function RiskHeatmap() {
    // Fetch top 5 riskiest clients
    const highRisks = await db.riskProfile.findMany({
        where: { riskScore: { gt: 0 } },
        orderBy: { riskScore: 'desc' },
        take: 5,
        include: {
            monitoringJob: {
                select: { clientName: true }
            },
            alerts: {
                where: { severity: 'HIGH' }
            }
        }
    });

    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    High Risk Anomalies
                </CardTitle>
                <CardDescription>
                    Clients exhibiting unusual behavioral patterns or high risk scores.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Client</TableHead>
                            <TableHead>Risk Score</TableHead>
                            <TableHead>Volatility</TableHead>
                            <TableHead>Flags</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {highRisks.map((profile) => {
                            let clientName = 'Unknown';
                            try {
                                clientName = decrypt(profile.monitoringJob.clientName);
                            } catch {
                                clientName = profile.monitoringJob.clientName; // Fallback
                            }

                            return (
                                <TableRow key={profile.id}>
                                    <TableCell className="font-medium">{clientName}</TableCell>
                                    <TableCell>
                                        <Badge variant={Number(profile.riskScore) > 80 ? 'destructive' : 'secondary'}>
                                            {profile.riskScore?.toFixed(0)}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{Number(profile.volatilityScore).toFixed(2)}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-1 flex-wrap">
                                            {profile.alerts.map(alert => (
                                                <span key={alert.id} className="text-xs text-muted-foreground bg-muted px-1 rounded">
                                                    {alert.description}
                                                </span>
                                            ))}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {highRisks.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-muted-foreground">
                                    No high-risk anomalies detected.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
