# Firecrawl Integration Guide

This guide details the integration of Firecrawl's `/agent` API into the Risk Management System. The integration enables autonomous public data research to assess reputational, compliance, and financial risks for clients.

## Overview

The Firecrawl integration automates the gathering of public intelligence from the web. Instead of manual searching, the system uses an AI agent to navigate, search, and analyze web content to answer specific risk-related questions.

### Key Capabilities

1.  **Negative Media Scanning**: Detects fraud allegations, legal issues, and negative sentiment.
2.  **PEP Screening**: Identifies Politically Exposed Persons (focused on SA, but includes global).
3.  **Financial Health Monitoring**: Checks for liquidation, business rescue, and distress signals.
4.  **Statutory Enquiries**: Scans Government Gazettes, court judgments, and regulatory notices (FSCA, SARB).
5.  **M&A Intelligence**: Detects merger and acquisition activities and assesses their strategic impact.

---

## Prerequisites

To use this feature, the following environment variable must be set in your `.env` file:

```env
FIRECRAWL_API_KEY="fc-your-api-key-here"
```

You can obtain an API key from the [Firecrawl Dashboard](https://firecrawl.dev).

---

## User Guide

### How it Works

The research engine operates within **Monitoring Jobs** or via the **Watch List**.

1.  **Trigger**: Research is triggered automatically via scheduled monitoring jobs or manually for high-priority clients in the Watch List.
2.  **Process**:
    *   The system initiates 5 parallel research tasks (Media, PEP, Financial, Statutory, M&A).
    *   Each task uses Firecrawl's AI agent to search the web and specific South African data sources.
    *   Results are structured into a standardized format.
3.  **Result**:
    *   An **Overall Risk Level** (LOW, MEDIUM, HIGH, CRITICAL) is calculated.
    *   Specific **Risk Flags** (e.g., `LIQUIDATION_RISK`, `PEP_EXPOSURE`) are raised.
    *   If the risk is HIGH or CRITICAL, a **Risk Alert** is automatically generated in the system.

### Interpreting Results

*   **Risk Flags**: Concise tags indicating specific findings (e.g., `CRIMINALITY_FLAG`).
*   **Sources**: Each finding includes citations/URLs to the source material.
*   **Status**:
    *   `PENDING`: Research is queued.
    *   `RUNNING`: Agents are actively browsing the web.
    *   `COMPLETED`: Research finished successfully.
    *   `FAILED`: An error occurred (usually connectivity or credit limits).

---

## Developer Guide

### Architecture

The integration is built around a centralized client and a set of Temporal activities.

#### 1. Core Client (`lib/firecrawl.ts`)
This file initializes the Firecrawl client and defines shared configurations, such as the South African data sources.

```typescript
// Key Data Sources
export const SA_DATA_SOURCES = {
  CIPC: 'https://www.cipc.co.za/',
  SARB: 'https://www.resbank.co.za/',
  FSCA: 'https://www.fsca.co.za/',
  GAZETTE: 'https://www.gpwonline.co.za/',
};
```

#### 2. Activities (`services/temporal/firecrawl-activities.ts`)
Each research type is an exported async function (Temporal Activity). These functions:
*   Accept a `clientName`.
*   Define a specific prompt for the AI agent.
*   Enforce a return schema (using Zod schemas from `lib/research-schemas.ts`).
*   Return structured data or `null`.

#### 3. Data Model (`prisma/schema.prisma`)
Results are stored in the `PublicDataAnalysis` model.

```prisma
model PublicDataAnalysis {
  id                String   @id @default(cuid())
  clientName        String
  // ... standardized JSON fields for each category
  negativeMedia     Json?
  pepScreening      Json?
  financialHealth   Json?
  // ...
  overallRiskLevel  String   @default("PENDING")
}
```

### Adding a New Research Type

To add a new category of research (e.g., "ESG Compliance"):

1.  **Define Schema**: Add a Zod schema for the result in `lib/research-schemas.ts`.
2.  **Create Activity**: Add a new function in `services/temporal/firecrawl-activities.ts`.
    *   Use `firecrawlClient.agent({ prompt: "...", schema: YourNewSchema })`.
3.  **Update Database**: Add a new field to the `PublicDataAnalysis` model in `prisma/schema.prisma` (e.g., `esgCompliance Json?`).
4.  **Integrate**: Update `savePublicDataAnalysis` to persist the new field.

### Testing

You can use the provided test script to verify the integration without running a full Temporal workflow.

```bash
# Run a test for a specific company
bunx tsx scripts/test-firecrawl.ts "Steinhoff International"
```

---

## Troubleshooting

| Issue | Cause | Resolution |
| :--- | :--- | :--- |
| **Status Stuck on RUNNING** | Temporal workflow timeout or agent hang. | Check Temporal UI for activity timeouts. Ensure Firecrawl credits are available. |
| **"Rate Limit Exceeded"** | Too many concurrent requests. | Firecrawl has rate limits. Usage is naturally throttled by Temporal queues, but check dashboard if issues persist. |
| **Empty Results** | Agent couldn't find info or browsed wrong sites. | Refine the prompt in `firecrawl-activities.ts`. Add specific `urls` to the config if valid sources are known. |
| **Prisma Validation Error** | Schema mismatch. | Ensure the Zod schema in code matches what Firecrawl returns (the agent tries to conform, but can fail). |

---

## Best Practices

*   **Prompt Engineering**: Be specific in the prompts. Use keywords like "South Africa", "CIPC", or specific legal terms to guide the agent.
*   **Cost Control**: The agent is configured with `maxCredits`. Monitor this value in `lib/firecrawl.ts` to balance depth of research with cost.
*   **Strict Constraints**: For some checks (like Gazette lookups), it is better to constrain the agent to specific domains (`strictConstrainToURLs: true` - *currently false by default to allow broader discovery*).
