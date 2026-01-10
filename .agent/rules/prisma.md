---
trigger: always_on
---

description: Enforcement of Prisma schema field naming, relation casing, and type safety protocols.
alwaysApply: true
---

## Prisma Schema & Casing Standards

This project follows a strict differentiation between database column casing and Prisma Client relation casing.

### 1. Field Casing & Mapping
- **Database Fields**: Use **snake_case** for all model fields (e.g., `created_at`, `user_id`). These typically use the `@map` attribute to link to underlying database columns.
- **Relations**: Use **camelCase** for relation fields (e.g., `authorProfile`, `linkedAccount`). 
- **Verification**: Before writing a query, always verify field names in [schema.prisma](mdc:prisma/schema.prisma).

### 2. Implementation Rules
- **No Assumptions**: Do not guess field names. If a field exists in the DB as `userId`, check if Prisma expects `user_id` based on the schema mapping.
- **Type Safety**: Prefer importing generated types from `@prisma/client` or project-specific types from `@/lib/types`. Avoid using `any`.
- **Query Structure**: Ensure `where`, `orderBy`, and `select`/`include` blocks respect the snake_case/camelCase split.

### 3. Examples

- **Correct Query Pattern**:
```ts
// snake_case for data fields, camelCase for relations
await prisma.modelName.findUnique({
  where: { account_id: id },
  include: { userProfile: true } 
});