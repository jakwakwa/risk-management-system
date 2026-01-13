# 🔌 API Specification: Risk Screening Ingress

**Endpoint:** `POST /api/v1/alerts/ingest`  
**Base URL:** `https://risk-analysis-service-xyz.a.run.app` (Cloud Run)  
**Auth:** Bearer Token (OIDC) or `X-API-Key`

---

## 1. Request Header

| Header | Value |
| :--- | :--- |
| **Content-Type** | `application/json` |
| **Authorization** | `Bearer <GCP_OIDC_TOKEN>` |
| **X-Correlation-ID** | `<WATCHDOG_UNIQUE_ID>` |

---

## 2. Request Body (JSON)

This schema is designed to be "skinny"—matching your Data Mapping Table.

```json
{
  "alert_metadata": {
    "source_system": "Watchdog",
    "alert_id": "WD-99821",
    "timestamp": "2026-01-13T14:30:00Z"
  },
  "subject": {
    "name": "Acme Corp Ltd",
    "type": "CORPORATE",
    "country": "ZA",
    "identifiers": [
      {
        "type": "REG_NUMBER",
        "value": "2023/123456/07"
      }
    ]
  },
  "context": {
    "reason": "High-volume cross-border transaction",
    "amount": 150000.00,
    "currency": "ZAR"
  }
}
```

---

## 3. Response Codes

| Status | Meaning | Action for Lucas's Team |
| :--- | :--- | :--- |
| **202 Accepted** | Alert received. Temporal Workflow has started. | Success. No further action needed. |
| **400 Bad Request** | Missing mandatory fields (e.g., `subject.name`). | Check logs; payload schema is incorrect. |
| **401 Unauthorized** | Invalid or expired token. | Refresh OIDC/Service Account token. |
| **500 Error** | Ingress service is down. | Retry with exponential backoff. |
