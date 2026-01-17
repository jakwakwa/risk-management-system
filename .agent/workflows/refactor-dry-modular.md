---
description: Refactoring standards and playbook
---

Refactoring standards and playbook


Refactoring Standards
Thin Pages: Keep page.tsx declarative. Move static copy to content.ts.

Reuse: Use components/shared (e.g., SectionHeaders, Layouts, buttons etc ).

CRITICAL: Avoid duplicating markup.

### Rules:

Prefer Server Components.

Use explicit prop types (no any).

Keep data fetching server-side.

### Workflow:

Separate content from layout.

Compose page using shared components.

Ensure accessibility (semantic HTML, <Image />).

Run bun lint and bun build.