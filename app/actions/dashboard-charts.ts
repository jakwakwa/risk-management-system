"use server";

import { bqClient, BQ_TABLES } from "@/lib/bigquery";

export type TransactionTrendData = {
	day: string;
	volume: number;
	transactions: number;
};

export type DisputeBounceData = {
	month: string;
	disputeRate: number;
	bounceRate: number;
};

/**
 * Fetches daily transaction trends from BigQuery.
 * Returns the last 30 days of aggregated transaction data.
 */
export async function getTransactionTrends(): Promise<TransactionTrendData[]> {
	try {
		const [rows] = await bqClient.query({
			query: `
				SELECT 
					FORMAT_DATE('%Y-%m-%d', DATE(created_at)) as day,
					SUM(raw_amount) as volume,
					COUNT(*) as transactions
				FROM \`${BQ_TABLES.TRANSACTIONS}\`
				GROUP BY 1
				ORDER BY 1 DESC
				LIMIT 30
			`,
		});

		return rows
			.map((r: Record<string, unknown>) => ({
				day: String(r.day),
				volume: Number(r.volume || 0),
				transactions: Number(r.transactions || 0),
			}))
			.reverse(); // Chronological order for chart display
	} catch (error) {
		console.error("Failed to fetch transaction trends:", error);
		return [];
	}
}

/**
 * Fetches monthly dispute and bounce rate data from BigQuery.
 * Calculates rates as percentages of total transactions per month.
 */
export async function getDisputeBounceData(): Promise<DisputeBounceData[]> {
	try {
		const [rows] = await bqClient.query({
			query: `
				SELECT 
					FORMAT_DATE('%b', DATE(created_at)) as month,
					FORMAT_DATE('%Y-%m', DATE(created_at)) as sort_key,
					ROUND(COUNTIF(status = 'DISPUTE') / COUNT(*) * 100, 1) as disputeRate,
					ROUND(COUNTIF(status = 'UNPAID') / COUNT(*) * 100, 1) as bounceRate
				FROM \`${BQ_TABLES.TRANSACTIONS}\`
				GROUP BY 1, 2
				ORDER BY sort_key
				LIMIT 12
			`,
		});

		return rows.map((r: Record<string, unknown>) => ({
			month: String(r.month),
			disputeRate: Number(r.disputeRate || 0),
			bounceRate: Number(r.bounceRate || 0),
		}));
	} catch (error) {
		console.error("Failed to fetch dispute/bounce data:", error);
		return [];
	}
}
