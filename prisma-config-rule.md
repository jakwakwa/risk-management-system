---
description: Enforce Prisma Client generation path and imports
globs: ["prisma/schema.prisma", "lib/prisma.ts", "**/*.ts", "**/*.tsx"]
---
# Prisma Configuration Rules

1. **Output Path**: The `generator client` in `prisma/schema.prisma` MUST have `output = "../generated/client"`.
2. **Import Path**: All imports of `PrismaClient` MUST use the generated path: `import { PrismaClient } from "../generated/client"` (or appropriate relative path).
   - DO NOT import from `@prisma/client`.
   - DO NOT import from `../prisma/generated/client.js`.
3. **Provider**: Use `provider = "prisma-client-js"`.

## Violation Examples
### Incorrect
```prisma
generator client {
  provider = "prisma-client-js"
}
```
```typescript
import { PrismaClient } from "@prisma/client";
```

### Correct
```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/client"
}
```
```typescript
import { PrismaClient } from "../generated/client";
```
