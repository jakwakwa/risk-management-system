"use server";

import { db } from "@/lib/db";
import { decrypt } from "@/lib/security";

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
    const clients = await db.monitoringJob.findMany({
      include: {
        riskProfile: {
          include: {
            alerts: {
              orderBy: {
                createdAt: "desc",
              },
              take: 5,
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const recentAlerts = await db.riskAlert.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
      include: {
        riskProfile: {
          include: {
            monitoringJob: true,
          },
        },
      },
    });

    return {
      clients: clients.map((job) => {
        let name = job.clientName;
        if (job.type === "CLIENT_MONITORING") {
          try {
            name = decrypt(job.clientName);
          } catch (e) {
            console.error(`Failed to decrypt client name for job ${job.id}`);
          }
        }

        const score = job.riskProfile?.riskScore ?? 0;

        return {
          id: job.id,
          name,
          industry: "Financial Services", // Placeholder
          riskScore: score,
          riskTier: getRiskTier(score),
          monthlyVolume: `R${(Number(job.riskProfile?.avgMonthlyVolume || 0) / 1000).toFixed(0)}K`,
          disputeRate: 0, // Placeholder
          bounceRate: 0, // Placeholder
          lastReview:
            job.riskProfile?.lastAnalysed.toISOString().split("T")[0] ??
            job.updatedAt.toISOString().split("T")[0],
        };
      }),
      alerts: recentAlerts.map((alert) => ({
        id: alert.id,
        client:
          alert.riskProfile?.monitoringJob?.clientName && alert.riskProfile?.monitoringJob?.type === "CLIENT_MONITORING"
            ? (function() {
                try { return decrypt(alert.riskProfile.monitoringJob.clientName); }
                catch(e) { return "Unknown Client"; }
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
