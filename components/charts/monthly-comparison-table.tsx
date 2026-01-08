import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUp, ArrowDown, Minus } from "lucide-react"

const comparisonData = [
  {
    metric: "Total Transaction Volume",
    current: "£4,900,000",
    previous: "£5,100,000",
    change: -3.9,
  },
  {
    metric: "Average Transaction Value",
    current: "£2,273",
    previous: "£2,283",
    change: -0.4,
  },
  {
    metric: "Dispute Rate",
    current: "1.5%",
    previous: "1.8%",
    change: -16.7,
  },
  {
    metric: "Bounce Rate",
    current: "0.8%",
    previous: "1.1%",
    change: -27.3,
  },
  {
    metric: "Active Clients",
    current: "248",
    previous: "236",
    change: 5.1,
  },
  {
    metric: "New Client Onboarding",
    current: "12",
    previous: "8",
    change: 50.0,
  },
]

export function MonthlyComparisonTable() {
  return (
    <Card className="text-muted-foreground">
      <CardHeader>
        <CardTitle className="text-foreground">Month-over-Month Comparison</CardTitle>
        <CardDescription>Key metrics comparison between current and previous month</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead className="text-right">Current Month</TableHead>
              <TableHead className="text-right">Previous Month</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row) => (
              <TableRow key={row.metric}>
                <TableCell className="font-medium">{row.metric}</TableCell>
                <TableCell className="text-right">{row.current}</TableCell>
                <TableCell className="text-right text-muted-foreground">{row.previous}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {row.change > 0 ? (
                      <ArrowUp className="h-4 w-4 text-success" />
                    ) : row.change < 0 ? (
                      <ArrowDown className="h-4 w-4 text-destructive" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span
                      className={
                        row.change > 0 ? "text-success" : row.change < 0 ? "text-destructive" : "text-muted-foreground"
                      }
                    >
                      {row.change > 0 ? "+" : ""}
                      {row.change.toFixed(1)}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
