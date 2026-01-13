# 🛡️ StratCol Risk Engine: Meeting Pack

## A. Technical Fact Sheet
- **Orchestration:** Temporal.io vir fault-tolerant workflows.
- **Compute:** Node.js op Cloud Run (serverless & scalable).
- **Intelligence:** Vertex AI vir NLP en Adverse Media screening.
- **Security:** Internal-only VPC, OIDC Auth, en POPIA-compliant data masking.

## B. Core Architecture


## C. Data Mapping Contract
- **Alert ID:** Die primary key vir tracking.
- **Subject Name:** Die entiteit wat ons screen.
- **Entity Type:** Individual vs Corporate logic.
- **Identifiers:** ID of Reg-nommers vir disambiguation.

## D. Discovery Vrae vir Lucas
1. Wat is die native output van Watchdog (SQL, JSON, CSV)?
2. Is julle gemaklik met 'n hourly "file drop" na 'n GCS bucket?
3. Moet ons data masking doen voor dit GCP tref, of is die private VPC perimeter voldoende?
4. Hoe wil julle hê moet die "enriched results" terugkom? (Dashboard link vs. API write-back).