
import { PrismaClient } from '@/generated/client';
import { decrypt } from '@/lib/security';
import { db } from '@/lib/db';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, AlertTriangle } from "lucide-react";
import { PageContainer } from '@/components/shared/page-container';
import { SectionHeader } from '@/components/shared/section-header';

export default async function ReportsPage() {
  const logs = await db.auditLog.findMany({
      orderBy: { screened_at: 'desc' },
      take: 50
  });

  const decryptedLogs = logs.map(log => {
      try {
          return { ...log, clientName: decrypt(log.clientName) };
      } catch {
          return log;
      }
  });

  return (
    <PageContainer>
      <SectionHeader
        title="Assurance Reports"
        description="Immutable audit trail of all screening activities."
      />

      <Card>
        <CardHeader>
            <CardTitle>Recent Screening Logs</CardTitle>
            <CardDescription>Showing last 50 entries. Includes both "MATCH" and "CLEAR" (Negative Assurance).</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Result</TableHead>
                        <TableHead>Report</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {decryptedLogs.map((log) => (
                        <TableRow key={log.id}>
                            <TableCell>{log.screened_at.toLocaleString()}</TableCell>
                            <TableCell className="font-medium">{log.clientName}</TableCell>
                            <TableCell>
                                {log.result === 'CLEAR' ? (
                                    <Badge variant="outline" className="bg-green-500/10 text-success hover:bg-green-500/20 border-green-500/50">
                                        <ShieldCheck className="w-3 h-3 mr-1" /> CLEAR
                                    </Badge>
                                ) : (
                                    <Badge variant="destructive">
                                        <AlertTriangle className="w-3 h-3 mr-1" /> MATCH
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell>
                                <a href={log.gcsUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="ghost" size="sm">
                                        <FileText className="w-4 h-4 mr-2" />
                                        View PDF
                                    </Button>
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
