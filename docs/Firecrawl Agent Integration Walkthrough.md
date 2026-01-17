# Firecrawl Agent Integration Walkthrough

## Summary
Successfully integrated Firecrawl's autonomous `/agent` API for public data analysis in the risk analysis engine. This enables deep web research for:

*   **Financial Health Monitoring** - Liquidation and distress signals
*   **PEP Screening** - Politically Exposed Persons identification
*   **Negative Media Scanning** - Reputational risk detection
*   **M&A Intelligence** - Merger and acquisition activity
*   **Statutory Inquiries** - Government investigation tracking

## Changes Made

### New Files
| File | Description |
| :--- | :--- |
| `lib/firecrawl/client.ts` | Firecrawl SDK client wrapper |
| `lib/firecrawl/agent.ts` | Research functions with typed Zod schemas |
| `app/actions/public-data-research.ts` | Server actions for research orchestration |
| `app/api/research/route.ts` | SSE-enabled batch research API |
| `app/api/research/[clientId]/route.ts` | Single client research API |
| `components/research-progress-modal.tsx` | Research progress UI component |
| `scripts/test-firecrawl.ts` | Test script for API verification |
| `constants/risk-constants.ts` | Shared constants including watch list |

### Modified Files
| File | Changes |
| :--- | :--- |
| `prisma/schema.prisma` | Added `PublicDataResearch` model and `watchPriority` field |
| `app/dashboard/page.tsx` | Added M&A, PEP, Negative Media, Statutory cards; Watch List panel |
| `.env` | Added `FIRECRAWL_API_KEY` placeholder |

## New Risk Categories
The system now tracks these additional risk flags:

| Flag | Category | Source |
| :--- | :--- | :--- |
| `PEP_EXPOSURE` | Regulatory | PEP Screening |
| `STATUTORY_INQUIRY` | Regulatory | Statutory Check |
| `LIQUIDATION_RISK` | Financial | Financial Health |
| `FINANCIAL_DISTRESS` | Financial | Financial Health |
| `CRIMINALITY_FLAG` | Reputational | Negative Media |
| `SUSPICIOUS_ASSOCIATIONS` | Reputational | Negative Media |
| `MERGER_ACTIVITY` | Strategic | M&A Research |
| `ACQUISITION_TARGET` | Strategic | M&A Research |
| `ACQUIRER` | Strategic | M&A Research |

## Usage

### 1. Set API Key
Add your Firecrawl API key to `.env`:

```env
FIRECRAWL_API_KEY="fc-your-api-key-here"
```

### 2. Run Web Research
From the dashboard, click **"Run Web Research"** button to trigger SSE-streamed research on watch list clients.

### 3. Test API Connection
```bash
bunx tsx scripts/test-firecrawl.ts "Company Name"
```

### 4. API Endpoints
| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/research` | `POST` | Run batch research (SSE stream) |
| `/api/research` | `GET` | Get research statistics |
| `/api/research/[clientId]` | `POST` | Run research on single client |
| `/api/research/[clientId]` | `GET` | Get client research history |

## Verification Results
```text
✓ Compiled successfully in 7.2s
✓ Finished TypeScript in 4.3s
✓ Collecting page data using 7 workers in 1069.7ms
✓ Generating static pages (9/9) in 9.1s

Route (app)
├ ƒ /api/research
├ ƒ /api/research/[clientId]
└ ○ /dashboard

Build: PASSED ✅
```