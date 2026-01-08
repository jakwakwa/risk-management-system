import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const alerts = [
  {
    id: 1,
    client: "Apex Trading Ltd",
    type: "Transaction Spike",
    severity: "high" as const,
    description: "Transaction volume increased 340% in last 7 days",
    time: "2 hours ago",
  },
  {
    id: 2,
    client: "Global Imports Co",
    type: "Dispute Rate",
    severity: "critical" as const,
    description: "Dispute rate reached 8.2%, above 5% threshold",
    time: "5 hours ago",
  },
  {
    id: 3,
    client: "Tech Solutions Inc",
    type: "Unusual Pattern",
    severity: "medium" as const,
    description: "Multiple large transactions outside business hours",
    time: "1 day ago",
  },
  {
    id: 4,
    client: "Metro Services",
    type: "External Signal",
    severity: "high" as const,
    description: "Negative news mentions detected in financial press",
    time: "1 day ago",
  },
  {
    id: 5,
    client: "Retail Partners LLC",
    type: "Bounce Rate",
    severity: "medium" as const,
    description: "Bounce rate increased to 3.8% from 1.2% baseline",
    time: "2 days ago",
  },
]

export function RiskAlerts() {
  return (
    <Card className="p-6 rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-xl text-primary">Risk Alerts</h2>
        <Badge variant="destructive" className="rounded-full">
          {alerts.length} Active
        </Badge>
      </div>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-4 hover:bg-accent/50 transition-colors cursor-pointer rounded-2xl shadow-lg border-border border bg-[rgba(250,250,250,1)]"
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg ${
                  alert.severity === "critical"
                    ? "bg-destructive/20 text-destructive"
                    : alert.severity === "high"
                      ? "bg-warning/20 text-warning"
                      : "bg-primary/20 text-primary"
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-sm font-medium text-foreground truncate">{alert.client}</p>
                  <Badge
                    variant={alert.severity === "critical" ? "destructive" : "secondary"}
                    className="text-xs shrink-0 bg-sidebar-primary text-card"
                  >
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{alert.type}</p>
                <p className="text-xs text-foreground leading-relaxed">{alert.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full mt-4 text-primary-foreground rounded-xl border-input shadow border-none py-[19px] bg-sidebar-accent-foreground">
        View All Alerts
      </Button>
    </Card>
  )
}
