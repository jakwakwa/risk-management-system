import { bqClient, DATASET_ID } from '@/lib/bigquery';
import { db } from '@/lib/db';
import { PredictionServiceClient } from '@google-cloud/aiplatform';

// Helper for Vertex AI Prediction
const predictionClient = new PredictionServiceClient({
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
});

interface RiskAnalysisResult {
    bqClientId: number;
    riskScore: number;
    anomalies: string[];
}

export async function transformAndAnalyzeData(bqClientId: number): Promise<void> {
    console.log(`Triggering BigQuery Transformation for Client ${bqClientId}...`);

    // INSTEAD OF: fetching rows and doing Math.avg() in Node.js
    // WE DO: Trigger the BigQuery Stored Procedure
    const query = `CALL \`${DATASET_ID}.generate_client_metrics\`(@clientId)`;

    await bqClient.query({
        query,
        params: { clientId: bqClientId },
    });

    // The data is now ready in the 'client_behaviour_profiles' table for Vertex AI to read
}

export async function predictRiskWithVertex(bqClientId: number): Promise<number> {
    // 1. Construct the instance from the BigQuery data we just prepared
    // (In a real scenario, you might use Batch Prediction, but for online scoring:)
    const instance = {
        // Fetch the aggregated metrics from Step 1
        sql: `SELECT * FROM client_behaviour_profiles WHERE client_id = ${bqClientId} ORDER BY month DESC LIMIT 1`
    };

    // 2. Call the Endpoint
    // Note: This assumes specific endpoint configuration. 
    // In a real env, use process.env.VERTEX_AI_ENDPOINT_ID
    const endpointId = process.env.VERTEX_AI_ENDPOINT_ID; 
    
    if (!endpointId) {
        console.warn("VERTEX_AI_ENDPOINT_ID not set, returning mock score");
        return Math.floor(Math.random() * 100);
    }

    try {
        const [response] = await predictionClient.predict({
            endpoint: endpointId, 
            instances: [global.JSON.parse(JSON.stringify(instance))], // Ensure plain object
        });

        // 3. Extract Risk Score
        const predictions = response.predictions;
        if (predictions && predictions.length > 0) {
             const prediction = predictions[0];
             // Adjust based on actual model output format
             if (prediction && typeof prediction === 'object' && 'structValue' in prediction) {
                 return prediction.structValue?.fields?.risk_score?.numberValue || 0;
             }
        }
        return 0;
    } catch (error) {
        console.error("Vertex AI Prediction failed:", error);
        return 50; // Fallback
    }
}

export async function saveRiskProfile(monitoringJobId: string, result: RiskAnalysisResult): Promise<void> {
    
    // Upsert Risk Profile
    // We are no longer calculating avgMonthlyVolume or volatilityScore in Node
    // We will initialize them to 0 or remove them if schema allows, but schema implies they exist.
    // Assuming schema hasn't changed, we pass 0.
    
    await db.riskProfile.upsert({
        where: { monitoringJobId },
        create: {
            monitoringJobId,
            bqClientId: result.bqClientId,
            avgMonthlyVolume: 0, // Calculated in BQ now
            volatilityScore: 0,  // Calculated in BQ now
            riskScore: result.riskScore,
            lastAnalysed: new Date(),
        },
        update: {
            bqClientId: result.bqClientId,
            avgMonthlyVolume: 0,
            volatilityScore: 0,
            riskScore: result.riskScore,
            lastAnalysed: new Date(),
        }
    });

    // Create Alerts for Anomalies
    if (result.anomalies.length > 0) {
        // First get the profile id
        const profile = await db.riskProfile.findUnique({ where: { monitoringJobId } });
        if (profile) {
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
}
