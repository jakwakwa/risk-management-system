"use server";

import { db } from "@/lib/db";
import { decrypt } from "@/lib/security";
import { bqClient, BQ_TABLES } from "@/lib/bigquery";

export type DashboardClient = {
  id: string;
  name: string;
  industry: string;
  riskScore: number;
  riskTier: string;
  monthlyVolume: string;
  disputeRate: number;
  bounceRate: number;
  lastReview: string;
};

export type DashboardAlert = {
  id: string;
  client: string;
  description: string;
  severity: string;
  time: string;
};

export async function getDashboardData() {
  try {
    // 1. Fetch Aggregated Clients from BigQuery Transactions
    // We source subject_name and aggregate volume/count
    const [bqClients] = await bqClient.query({
      query: `
        SELECT 
          subject_name as name, 
          COUNT(*) as transaction_count, 
          SUM(raw_amount) as total_volume,
          MAX(created_at) as last_seen
        FROM \`${BQ_TABLES.TRANSACTIONS}\`
        GROUP BY 1
        ORDER BY total_volume DESC
      `,
    });

    // 2. Fetch All Monitoring Jobs/Profiles for matching
    // We'll need to decrypt names to match with BQ
    const monitoringJobs = await db.monitoringJob.findMany({
      where: { type: "CLIENT_MONITORING" },
      include: {
        riskProfile: {
          include: {
            alerts: {
              orderBy: { createdAt: "desc" },
              take: 5,
            },
          },
        },
      },
    });

    // 3. Fetch Recent Alerts for the feed
    const recentAlerts = await db.riskAlert.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      include: {
        riskProfile: {
          include: {
            monitoringJob: true,
          },
        },
      },
    });

    // 4. Map BQ Transactions to Dashboard Format
    const clients = bqClients.map((bqData: any) => {
      // Find matching job by name
      const job = monitoringJobs.find((j) => {
        try {
          return decrypt(j.clientName) === bqData.name;
        } catch {
          return false;
        }
      });

      const profile = job?.riskProfile;
      const score = profile?.riskScore ?? 0;

      return {
        id: bqData.name, // Use name as ID for now since it's unique in this set
        name: bqData.name,
        industry: "Finance", // Default or derived if possible
        riskScore: score,
        riskTier: getRiskTier(score),
        monthlyVolume: `R${(Number(bqData.total_volume || 0) / 1000).toFixed(1)}K`,
        disputeRate: Number(bqData.transaction_count || 0), // Using count as a filler for now
        bounceRate: 0,
        lastReview: bqData.last_seen ? new Date(bqData.last_seen.value).toISOString().split("T")[0] : "N/A",
      };
    });

    return {
      clients,
      alerts: recentAlerts.map((alert) => ({
        id: alert.id,
        client:
          alert.riskProfile?.monitoringJob?.clientName && alert.riskProfile?.monitoringJob?.type === "CLIENT_MONITORING"
            ? (function () {
                try {
                  return decrypt(alert.riskProfile.monitoringJob.clientName);
                } catch (e) {
                  return "Unknown Client";
                }
              })()
            : alert.riskProfile?.monitoringJob?.clientName ?? "System",
        description: alert.description,
        severity: alert.severity.toLowerCase(),
        time: alert.createdAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    return { clients: [], alerts: [], error: "Failed to load dashboard data" };
  }
}

function getRiskTier(score: number): string {
  if (score >= 90) return "Critical";
  if (score >= 75) return "High";
  if (score >= 50) return "Medium";
  return "Low";
}
