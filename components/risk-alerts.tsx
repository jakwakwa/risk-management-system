import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, AlertTriangle } from 'lucide-react';

interface AlertProps {
  alerts: {
    id: string;
    client: string;
    description: string;
    severity: string;
    time: string;
  }[]
}

export function RiskAlerts({ alerts }: AlertProps) {
  if (!alerts || alerts.length === 0) {
      return (
        <Card>
            <CardHeader><CardTitle>Recent Alerts</CardTitle></CardHeader>
            <CardContent>No recent anomalies detected.</CardContent>
        </Card>
      )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0">
              {alert.severity === 'critical' ? (
                 <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
              ) : (
                 <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{alert.client}</p>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
