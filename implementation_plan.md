# Fixing Workflow Order and Gemini Summary

## Problem Analysis

### 1. Workflow Order Issue
The current workflow runs activities in this order:
1. `runBigQueryMLAnalysis` 
2. `fetchDetectedAnomalies`
3. `generateReportSummary`
4. `saveDailyReport`
5. `sendPipelineEmailAlert`
6. `createRiskCases` ← **Runs AFTER reports/emails**

**Risk Cases should be created BEFORE saving reports**, so the report can include case data for the summary.

### 2. Gemini Summary Failure

| Aspect | Server Action (Works ✅) | Temporal Activity (Fails ❌) |
|--------|--------------------------|------------------------------|
| Model | `gemini-2.0-flash-001` | `gemini-1.5-flash` |
| API | `vertex_ai.preview.getGenerativeModel` | `vertexAI.getGenerativeModel` |
| Env Check | Validates `GCP_PROJECT_ID` + `VERTEX_AI_LOCATION` | No validation |
| Config | Has `generationConfig` with params | No generation config |

---

## Proposed Changes

### [MODIFY] [data-pipeline-workflows.ts](file:///Users/jacobkotzee/Projects/REPOS/ai-webapps/risk-management-system/services/temporal/data-pipeline-workflows.ts)

Reorder activities:
1. `runBigQueryMLAnalysis`
2. `fetchDetectedAnomalies`
3. `createRiskCases` ← **Move earlier**
4. `generateReportSummary`
5. `saveDailyReport`
6. `sendPipelineEmailAlert`

---

### [MODIFY] [data-pipeline-activities.ts](file:///Users/jacobkotzee/Projects/REPOS/ai-webapps/risk-management-system/services/temporal/data-pipeline-activities.ts)

Align `generateReportSummary` with the working server action:
- Use `gemini-2.0-flash-001` model
- Use `vertex_ai.preview.getGenerativeModel()` 
- Add `generationConfig`
- Add env var validation

---

## Verification Plan

1. Restart Temporal worker
2. Trigger workflow manually
3. Confirm summary generates successfully
4. Verify `createRiskCases` logs appear before `saveDailyReport`
