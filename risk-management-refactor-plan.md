
The core shift is moving the "Transformation" logic out of your TypeScript code (Node.js) and into BigQuery SQL, as specified in your requirements: *"Utilise BigQuery's capabilities to transform... calculating total transaction counts."*

### **1\. Add: BigQuery Transformation Scripts (SQL)**

Location: Create a new folder services/bigquery/sql/ or scripts/sql/.  
Why: Your requirements state that data preparation (calculating monthly totals, significant values) must happen in BigQuery, not in the application memory.  
**Create file:** services/bigquery/sql/transform\_client\_metrics.sql

SQL

\-- This query performs the "Transform and Prepare" step defined in your requirements  
CREATE OR REPLACE PROCEDURE \`stratcol\_risk.generate\_client\_metrics\`(clientId INT64)  
BEGIN  
  \-- 1\. Aggregating Monthly Behaviour (Moving logic from TS to SQL)  
  CREATE OR REPLACE TEMP TABLE MonthlyStats AS  
  SELECT  
    FORMAT\_DATE('%Y-%m', transaction\_date) as month\_period,  
    COUNT(\*) as total\_transaction\_count,  
    SUM(amount) as total\_value,  
    MAX(amount) as max\_significant\_transaction  
  FROM \`stratcol\_risk.transactions\`  
  WHERE client\_id \= clientId  
  GROUP BY 1;

  \-- 2\. Write these "Deep Insights" to a serving table for Next.js  
  MERGE \`stratcol\_risk.client\_behaviour\_profiles\` T  
  USING MonthlyStats S  
  ON T.client\_id \= clientId AND T.month \= S.month\_period  
  WHEN MATCHED THEN  
    UPDATE SET   
      total\_count \= S.total\_transaction\_count,  
      total\_value \= S.total\_value,  
      significant\_transaction \= S.max\_significant\_transaction  
  WHEN NOT MATCHED THEN  
    INSERT (client\_id, month, total\_count, total\_value, significant\_transaction)  
    VALUES (clientId, S.month\_period, S.total\_transaction\_count, S.total\_value, S.max\_significant\_transaction);  
END;

### **2\. Change: risk-activities.ts (The Transformation Layer)**

Location: services/temporal/risk-activities.ts  
Why: Currently, your analyzeClientRisks function manually fetches rows and calculates averages in TypeScript (lines 16-32). This violates the requirement to "Utilise BigQuery's capabilities." We must delete the math logic and replace it with a call to the SQL procedure above.  
**Update code:**

TypeScript

import { bqClient } from '@/lib/bigquery';

export async function transformAndAnalyzeData(bqClientId: number): Promise\<void\> {  
    console.log(\`Triggering BigQuery Transformation for Client ${bqClientId}...\`);

    // INSTEAD OF: fetching rows and doing Math.avg() in Node.js  
    // WE DO: Trigger the BigQuery Stored Procedure  
    const query \= \`CALL \\\`stratcol\_risk.generate\_client\_metrics\\\`(@clientId)\`;

    await bqClient.query({  
        query,  
        params: { clientId: bqClientId },  
    });

    // The data is now ready in the 'client\_behaviour\_profiles' table for Vertex AI to read  
}

### **3\. Add: Vertex AI Prediction Activity**

Location: services/temporal/risk-activities.ts  
Why: The requirements state: "Use Vertex AI platform to build and train... models that analyse client behaviour patterns." You need a dedicated activity to trigger this prediction using the data we just transformed.  
**Add code:**

TypeScript

import { PredictionServiceClient } from '@google-cloud/aiplatform';

// Helper for Vertex AI Prediction  
const predictionClient \= new PredictionServiceClient({  
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',  
});

export async function predictRiskWithVertex(bqClientId: number): Promise\<number\> {  
    // 1\. Construct the instance from the BigQuery data we just prepared  
    // (In a real scenario, you might use Batch Prediction, but for online scoring:)  
    const instance \= {  
        // Fetch the aggregated metrics from Step 1  
        sql: \`SELECT \* FROM client\_behaviour\_profiles WHERE client\_id \= ${bqClientId} ORDER BY month DESC LIMIT 1\`  
    };

    // 2\. Call the Endpoint  
    const \[response\] \= await predictionClient.predict({  
        endpoint: process.env.VERTEX\_AI\_ENDPOINT\_ID, // e.g., projects/.../endpoints/...  
        instances: \[instance\], // formatting depends on your specific model  
    });

    // 3\. Extract Risk Score  
    const riskScore \= response.predictions?.\[0\]?.structValue?.fields?.risk\_score?.numberValue || 0;  
    return riskScore;  
}

### **4\. Update: risk-workflows.ts (The Orchestration)**

Location: services/temporal/risk-workflows.ts  
Why: The workflow must now orchestrate the new "Deep Insights" pipeline: Ingest \-\> Transform (SQL) \-\> Predict (Vertex) \-\> Visualize.  
**Update code:**

TypeScript

import { proxyActivities } from '@temporalio/workflow';  
import type \* as activities from './risk-activities';

const {   
    transformAndAnalyzeData, // The BigQuery SQL Job  
    predictRiskWithVertex,   // The Vertex AI Job  
    saveRiskProfile          // The DB Update  
} \= proxyActivities\<typeof activities\>({  
    startToCloseTimeout: '10 minutes',  
});

export async function RiskAnalysisWorkflow(monitoringJobId: string, bqClientId: number): Promise\<string\> {  
    // Step 1: Transform & Prepare (BigQuery)  
    // "Utilise BigQuery's capabilities to transform... calculating total transaction counts"  
    await transformAndAnalyzeData(bqClientId);

    // Step 2: AI Prediction (Vertex AI)  
    // "Use Vertex AI platform to build and train machine learning models"  
    const riskScore \= await predictRiskWithVertex(bqClientId);

    // Step 3: Result Ingestion (Looker/Next.js Ready)  
    await saveRiskProfile(monitoringJobId, {   
        bqClientId,   
        riskScore,   
        // We no longer calculate anomalies here; they come from Vertex/BQ now  
        anomalies: riskScore \> 80 ? \['Vertex AI Flagged High Risk'\] : \[\]   
    });

    return \`Deep Analysis completed for Client ${bqClientId}\`;  
}

### **5\. Change: Next.js Dashboard (The Looker Replacement)**

Location: app/dashboard/page.tsx  
Why: To act as Looker, the UI must visualize the results of the BigQuery aggregation, not just raw rows.

* **Remove:** Any simple db.transaction.findMany calls that try to graph raw data.  
* **Add:** A query that fetches from the RiskProfile (which now contains the Vertex AI score) and the ClientBehaviourProfile (the BigQuery aggregated table) to render the "Transaction Trends" chart.

### **Summary of Changes**

| Component | Current State | Required Change |
| :---- | :---- | :---- |
| **Logic** | Calculating avg\_volume in Node.js (TypeScript) | **Move to BigQuery SQL** (CREATE PROCEDURE) to handle scale. |
| **Activities** | analyzeClientRisks does everything | **Split into** transformAndAnalyzeData (SQL) and predictRiskWithVertex (AI). |
| **Workflow** | Linear 2-step process | **Multi-step DAG:** Transform (BQ) \-\> Predict (Vertex) \-\> Save. |
| **UI** | Displays raw data | Displays **Aggregated Insights** (Pre-calculated in Step 1). |
