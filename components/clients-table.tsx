"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpDown, Filter, ChevronRight } from "lucide-react"

const clients = [
  {
    id: 1,
    name: "Apex Trading Ltd",
    industry: "Financial Services",
    riskScore: 78,
    riskTier: "High",
    monthlyVolume: "R2.4M",
    disputeRate: 2.1,
    bounceRate: 1.8,
    lastReview: "2025-01-05",
  },
  {
    id: 2,
    name: "Global Imports Co",
    industry: "Wholesale",
    riskScore: 92,
    riskTier: "Critical",
    monthlyVolume: "R1.8M",
    disputeRate: 8.2,
    bounceRate: 3.4,
    lastReview: "2025-01-03",
  },
  {
    id: 3,
    name: "Tech Solutions Inc",
    industry: "Technology",
    riskScore: 45,
    riskTier: "Medium",
    monthlyVolume: "R3.2M",
    disputeRate: 1.2,
    bounceRate: 0.8,
    lastReview: "2025-01-07",
  },
  {
    id: 4,
    name: "Metro Services",
    industry: "Professional Services",
    riskScore: 68,
    riskTier: "High",
    monthlyVolume: "R980K",
    disputeRate: 3.5,
    bounceRate: 2.1,
    lastReview: "2025-01-04",
  },
  {
    id: 5,
    name: "Retail Partners LLC",
    industry: "Retail",
    riskScore: 38,
    riskTier: "Medium",
    monthlyVolume: "R1.5M",
    disputeRate: 1.8,
    bounceRate: 1.2,
    lastReview: "2025-01-06",
  },
  {
    id: 6,
    name: "Digital Marketing Group",
    industry: "Marketing",
    riskScore: 22,
    riskTier: "Low",
    monthlyVolume: "R650K",
    disputeRate: 0.5,
    bounceRate: 0.3,
    lastReview: "2025-01-08",
  },
]

function getRiskColor(tier: string) {
  switch (tier) {
    case "Critical":
      return "destructive"
    case "High":
      return "secondary"
    case "Medium":
      return "outline"
    case "Low":
      return "outline"
    default:
      return "outline"
  }
}

function getRiskScoreColor(score: number) {
  if (score >= 75) return "text-destructive"
  if (score >= 50) return "text-warning"
  return "text-success"
}

export function ClientsTable() {
  return (
    <Card className="p-6 px-[26px] mx-0 rounded-3xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-xl leading-[1.15rem] text-left text-primary">Client Overview</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-chart-2" />
            <Input placeholder="Search clients..." className="w-64 pl-10 rounded-xl shadow-md bg-sidebar-accent text-accent-foreground" />
          </div>
          <Button className="bg-muted-foreground rounded-lg border-none shadow-sm" variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left">
                <Button variant="ghost" size="sm" className="-ml-3 font-medium text-muted-foreground w-auto border rounded-none px-1 py-0 my-px mx-0 border-none font-sans text-xs h-[19px] text-left">
                  Client Name
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </th>
              <th className="pb-3 text-left">
                <Button variant="ghost" size="sm" className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
                  Industry
                </Button>
              </th>
              <th className="pb-3 text-left">
                <Button variant="ghost" size="sm" className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
                  Risk Score
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </th>
              <th className="pb-3 text-left">
                <Button variant="ghost" size="sm" className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
                  Monthly Volume
                </Button>
              </th>
              <th className="pb-3 text-left">
                <Button variant="ghost" size="sm" className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
                  Dispute Rate
                </Button>
              </th>
              <th className="pb-3 text-left">
                <Button variant="ghost" size="sm" className="h-8 -ml-3 text-xs font-medium text-muted-foreground">
                  Last Review
                </Button>
              </th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className="border-b border-border hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <td className="py-4">
                  <div>
                    <p className="font-medium text-foreground text-xs">{client.name}</p>
                    <Badge variant={getRiskColor(client.riskTier)} className="bg-card text-sidebar-ring border-input rounded-3xl py-0 mt-1.5 text-xs text-center leading-4">
                      {client.riskTier}
                    </Badge>
                  </div>
                </td>
                <td className="py-4 text-xs">
                  <p className="text-muted-foreground text-xs">{client.industry}</p>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold text-[rgba(50,155,130,1)] text-xs ${getRiskScoreColor(client.riskScore)}`}>
                      {client.riskScore}
                    </span>
                    <div className="h-1.5 w-16 rounded-full overflow-hidden bg-[rgba(235,233,231,1)]">
                      <div
                        className={`h-full text-[rgba(247,134,63,1)] ${
                          client.riskScore >= 75
                            ? "bg-destructive"
                            : client.riskScore >= 50
                              ? "bg-warning"
                              : "bg-success"
                        }`}
                        style={{ width: `${client.riskScore}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm text-foreground font-medium text-center">{client.monthlyVolume}</p>
                </td>
                <td className="py-4">
                  <p
                    className={`text-sm ${
                      client.disputeRate > 5
                        ? "text-destructive font-semibold"
                        : client.disputeRate > 2
                          ? "text-warning"
                          : "text-muted-foreground"
                    }`}
                  >
                    {client.disputeRate}%
                  </p>
                </td>
                <td className="py-4">
                  <p className="text-muted-foreground text-xs">{client.lastReview}</p>
                </td>
                <td className="py-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <p className="text-sm text-muted">Showing 6 of 248 clients</p>
        <div className="flex items-center gap-2">
          <Button className="bg-card" variant="outline" size="sm">
            Previous
          </Button>
          <Button className="bg-muted-foreground rounded-lg" variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </Card>
  )
}
