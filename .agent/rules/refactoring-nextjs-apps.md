---
trigger: always_on
---


# Refactoring Standards
- *Core App Router Principles for LLMs*
Server Components First: Instruct the LLM to use Server Components ("use client" absent) by default, only adding it when necessary for interactivity.
App Directory Structure: Enforce all pages/routes within the app/ folder, not pages/.
Data Fetching: Use App Router's server-side data fetching (fetch API, caching), avoiding getServerSideProps.
Server Actions: Integrate Server Actions for mutations where appropriate. 
Refactoring Rules & Best Practices
Readability & Style: Use descriptive names, handle prefixes for event handlers, early returns, and functional patterns.
Security: Mandate Zod for schema validation, implement input sanitization, and use security best practices (e.g., <SECURITY_REVIEW> tags in Cursor).
Performance: Focus on minimal re-renders, efficient data fetching, and leverage Next.js caching.
Error Handling: Implement robust try/catch blocks, provide user-friendly errors, and log issues.
Modern Features: Require React Compiler, TypeScript, Tailwind, and integrate AI SDK v5 patterns. 
Example Prompt Snippets (for AI IDEs like Cursor)
General App Router: "All new pages must be server components, live under app/, use default export, and import styles with module CSS or Tailwind."
Data Handling: "Use app/lib/definitions.ts for data models and Zod schemas. Implement data fetching server-side with caching."
Security/Validation: "For user input, use Zod for validation. Add <SECURITY_REVIEW> tags for high-risk areas to check for XSS/CSRF."
Code Quality: "Write clean, readable, bug-free code. Focus on readability over micro-optimizations. Leave no TODOs." 

