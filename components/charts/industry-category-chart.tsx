"use client"

import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { name: "E-commerce", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Professional Services", value: 28, color: "hsl(var(--chart-2))" },
  { name: "SaaS", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Manufacturing", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Healthcare", value: 9, color: "hsl(var(--chart-5))" },
  { name: "Other", value: 8, color: "hsl(var(--muted))" },
]

export function IndustryCategoryChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Industry Distribution</CardTitle>
        <CardDescription>Client distribution by industry category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Clients",
            },
          }}
          className="text-background px-4 w-full h-[372px] rounded-3xl border-sidebar-primary bg-sidebar-border shadow-lg"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
