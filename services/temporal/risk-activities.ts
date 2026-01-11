
import { bqClient, BQ_TABLES, DATASET_ID } from '@/lib/bigquery';
import { db } from '@/lib/db';

interface RiskAnalysisResult {
    bqClientId: number;
    avgMonthlyVolume: number;
    volatilityScore: number;
    riskScore: number;
    anomalies: string[]; // Descriptions of anomalies
}

export async function analyzeClientRisks(bqClientId: number): Promise<RiskAnalysisResult> {
    console.log(`Analyzing risks for BQ Client ${bqClientId}...`);

    // 1. Calculate Transaction Metrics (Last 6 Months)
    // Using BigQuery SQL to aggregate
    const query = `
      WITH MonthlyStats AS (
        SELECT
          FORMAT_DATE('%Y-%m', transactionDate) as month,
          SUM(amount) as total_volume,
          COUNTIF(status = 'FAILED') as failed_count,
          COUNT(*) as total_count
        FROM \`${BQ_TABLES.TRANSACTIONS}\`
        WHERE clientId = @clientId
          AND transactionDate >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 6 MONTH)
        GROUP BY 1
      )
      SELECT
        AVG(total_volume) as avg_volume,
        STDDEV(total_volume) as vol_stddev,
        SUM(failed_count) / NULLIF(SUM(total_count), 0) as failure_rate
      FROM MonthlyStats
    `;

    const options = {
        query,
        params: { clientId: bqClientId },
        location: 'US', // Adjust as needed
    };

    const [rows] = await bqClient.query(options);
    const stats = rows[0] || {};
    
    // 2. Fetch External Intelligence (Recent Negative News)
    const intelQuery = `
        SELECT content, source
        FROM \`${BQ_TABLES.EXTERNAL_INTELLIGENCE}\`
        WHERE clientId = @clientId
        AND publishedDate >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
        LIMIT 5
    `;
    
    const [intelRows] = await bqClient.query({
        query: intelQuery,
        params: { clientId: bqClientId }
    });

    // 3. Detect Anomalies (Simple Logic for V1)
    const anomalies: string[] = [];
    const avgVolume = parseFloat(stats.avg_volume || '0');
    const stdDev = parseFloat(stats.vol_stddev || '0');
    const failureRate = parseFloat(stats.failure_rate || '0');

    // Rule: High Failure Rate (> 10%)
    if (failureRate > 0.10) {
        anomalies.push(`High Transaction Failure Rate: ${(failureRate * 100).toFixed(1)}%`);
    }

    // Rule: Volatile Volume (StdDev > 50% of Avg)
    if (avgVolume > 0 && stdDev > (0.5 * avgVolume)) {
        anomalies.push(`High Volume Volatility detected.`);
    }

    // Rule: Negative News
    if (intelRows.length > 0) {
        anomalies.push(`Detected ${intelRows.length} negative news articles.`);
    }
    
    // Calculate Risk Score (0-100)
    let riskScore = 0;
    riskScore += (failureRate * 100) * 2; // Failure rate adds heavily
    if (intelRows.length > 0) riskScore += 30;
    if (anomalies.includes('High Volume Volatility detected.')) riskScore += 20;

    return {
        bqClientId,
        avgMonthlyVolume: avgVolume,
        volatilityScore: stdDev,
        riskScore: Math.min(riskScore, 100),
        anomalies
    };
}

export async function saveRiskProfile(monitoringJobId: string, result: RiskAnalysisResult): Promise<void> {
    
    // Upsert Risk Profile
    const profile = await db.riskProfile.upsert({
        where: { monitoringJobId },
        create: {
            monitoringJobId,
            bqClientId: result.bqClientId,
            avgMonthlyVolume: result.avgMonthlyVolume,
            volatilityScore: result.volatilityScore,
            riskScore: result.riskScore,
            lastAnalysed: new Date(),
        },
        update: {
            bqClientId: result.bqClientId,
            avgMonthlyVolume: result.avgMonthlyVolume,
            volatilityScore: result.volatilityScore,
            riskScore: result.riskScore,
            lastAnalysed: new Date(),
        }
    });

    // Create Alerts for Anomalies
    if (result.anomalies.length > 0) {
        await db.riskAlert.createMany({
            data: result.anomalies.map(anomaly => ({
                riskProfileId: profile.id,
                type: 'ANOMALY',
                severity: 'HIGH',
                description: anomaly,
            }))
        });
    }
}
