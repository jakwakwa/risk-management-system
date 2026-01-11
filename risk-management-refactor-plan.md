# **Risk Management System \- Refactoring Implementation Plan**

**Objective:** Modernize the codebase architecture to improve scalability, performance, and developer experience. The focus is on standardizing data access, decoupling background services (Temporal), and enforcing strict component boundaries.

## **Phase 1: Core Architecture & Configuration Cleanup**

### **1.1 Consolidate Database Clients**

Problem: The existence of both lib/db.ts and lib/prisma.ts creates ambiguity and risks multiple Prisma Client instances (connection pool exhaustion).  
Action Plan:

1. **Select Master Client:** designate lib/prisma.ts as the single source of truth.  
2. **Singleton Pattern:** Ensure lib/prisma.ts correctly implements the global singleton pattern to prevent hot-reloading connection leaks in development.  
3. **Update References:** Search the entire project for imports from @/lib/db and update them to import from @/lib/prisma.  
4. **Delete File:** Remove lib/db.ts once all references are updated.

### **1.2 Strict Environment Validation**

Problem: Missing environment variables often cause runtime crashes deep in the application execution.  
Action Plan:

1. **Create Validator:** Create a new file lib/env.ts.  
2. **Implement Zod:** Use zod to define a schema for all required ENV variables (e.g., DATABASE\_URL, TEMPORAL\_ADDRESS, BIGQUERY\_CREDENTIALS).  
3. **Early Exit:** Parse the process environment against this schema at build time (or app initialization). Fail fast with clear error messages if variables are missing.

## **Phase 2: Temporal.io Decoupling & Worker Strategy**

### **2.1 Separate the Worker Process**

Problem: Defining and running Temporal Workers inside Next.js API routes or app directories is an anti-pattern. Workers are long-running processes, while Next.js functions are ephemeral.  
Action Plan:

1. **Relocate Worker Code:** Move services/temporal/worker.ts to a standalone entry point, e.g., scripts/worker.ts or a dedicated worker/ directory at the root.  
2. **Create Start Script:** Add a script to package.json (e.g., "start:worker": "tsx scripts/worker.ts") to run the worker independently of the Next.js dev server.  
3. **Shared Types:** Ensure services/temporal/workflows.ts and activities.ts remain shared code that both the Next.js app (Client) and the independent Worker process can import.

### **2.2 Standardize the Temporal Client**

Problem: Ad-hoc instantiation of the Temporal Client in UI components or API routes.  
Action Plan:

1. **Singleton Client:** Ensure services/temporal/client.ts exports a singleton instance or a cached connection function for the Temporal Client.  
2. **Server-Only Guard:** Mark this file with 'server-only' to prevent it from being accidentally bundled into Client Components.

## **Phase 3: Data Layer & API Standardization**

### **3.1 Unify Data Access Patterns**

Problem: The app currently uses a mix of Server Actions (app/actions/\*.ts) and API Routes (app/api/\*) for similar tasks.  
Action Plan:

1. **Strategy Definition:**  
   * **Use Server Actions (app/actions)** for: Form submissions, mutations (create/update/delete), and triggering workflows from the UI.  
   * **Use API Routes (app/api)** for: External webhooks (e.g., 3rd party callbacks), Cron jobs (e.g., Vercel Cron), or publicly exposed REST endpoints.  
   * **Use Server Components** for: Direct data fetching (GET) in page.tsx.  
2. **Refactor:** Migrate any internal data-fetching API routes (e.g., app/api/engine/screen) to Server Actions if they are only consumed by your own UI.

### **3.2 Implement "DTO" Pattern for UI Data**

Problem: Passing raw Prisma objects (with Dates, BigInts, or decimals) directly to Client Components causes serialization warnings.  
Action Plan:

1. **Transformer Utility:** Create a utility in lib/utils.ts to safely serialize Prisma results (e.g., converting Date to ISO string, Decimal to number/string) before passing them to Client Components.

## **Phase 4: Component Architecture & UI Performance**

### **4.1 "Fat Page" Decomposition**

Problem: app/dashboard/page.tsx and app/analytics/page.tsx likely contain mixed logic: data fetching, state management, and UI rendering.  
Action Plan:

1. **Container/Presenter Pattern:**  
   * Keep page.tsx as the **Server Component**. It should *only* fetch data (using Prisma or Temporal Client) and pass it to a child component.  
   * Create view.tsx (or \_components/DashboardView.tsx) as the **Client Component** (if interactivity is needed) or a pure UI component to render the data.  
2. **Example Structure:**  
   app/dashboard/  
   ├── page.tsx (Fetches data, renders \<DashboardView data={...} /\>)  
   └── \_components/  
       └── dashboard-view.tsx (Receives data, arranges charts/tables)

### **4.2 Dynamic Chart Loading**

Problem: Heavy charting libraries (likely in components/charts/) can block the main thread or increase First Contentful Paint (FCP).  
Action Plan:

1. **Lazy Loading:** Use next/dynamic to lazy load all chart components in app/analytics/page.tsx and app/dashboard/page.tsx.  
   * Example: const TransactionVolumeChart \= dynamic(() \=\> import('@/components/charts/transaction-volume-chart'), { ssr: false, loading: () \=\> \<Skeleton /\> })  
2. **SSR False:** Explicitly disable SSR for charts that depend on window or browser-only APIs.

### **4.3 Standardize Loading & Error States**

Problem: Inconsistent user feedback during data loading or crashes.  
Action Plan:

1. **Global Loading:** Ensure app/loading.tsx exists for the root layout.  
2. **Route-Specific Loading:** Create loading.tsx in heavy data routes like app/analytics/ and app/reports/ to show skeletons immediately while Server Components fetch data.  
3. **Error Boundaries:** Create error.tsx in app/dashboard/ and app/reports/ to gracefully handle data fetching failures without crashing the entire app.

## **Phase 5: Code Quality & Safety**

### **5.1 Enforce Server Actions Validation**

Problem: Check if app/actions/config.ts blindly accepts input.  
Action Plan:

1. **Zod Schemas:** Define Zod schemas for all arguments passed to Server Actions.  
2. **Input Parsing:** In every Server Action, run schema.parse(input) before interacting with the database or Temporal. Throw user-friendly errors if validation fails.

### **5.2 Strict Type Checking**

**Action Plan:**

1. **No any:** Search the codebase for explicit : any and refactor to use proper interfaces or unknown with narrowing.  
2. **Generated Types:** Heavily rely on Prisma.TransactionGetPayload\<{...}\> or inferred types from Zod schemas rather than manually writing interfaces that might drift from the schema.

### **6. Update the README.md file**

## **Summary of Work for AI Coder**

1. **Consolidate DB:** Merge lib/db.ts into lib/prisma.ts.  
2. **Worker Extraction:** Move services/temporal/worker.ts to scripts/worker.ts and update package.json.  
3. **Component Split:** Refactor app/dashboard/page.tsx into a data-fetching wrapper and a pure UI view.  
4. **Lazy Charts:** Wrap chart imports in app/analytics with next/dynamic.  
5. **Env Validation:** Create lib/env.ts with Zod.  
6. **Action Security:** Add Zod validation to app/actions/config.ts.