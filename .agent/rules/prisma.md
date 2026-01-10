---
trigger: always_on
---

## 2) Prisma Schema Changes

- In `schema.prisma`:

  - `generator client`:

    ```diff
    - provider = "prisma-client-js"
    + provider = "prisma-client"
      output   = "./generated"
    ```

  - Remove any `previewFeatures = ["driverAdapters"]` and any `engineType` attributes.

  - Update the `datasource db` block:

    - **Goal:** keep the existing `provider` value, but **remove any `url = …` entry**.

    - Example (for illustration only — do not insert comments into the user's schema):

      - Before:

        ```prisma
        datasource db {
          provider = "postgresql"
          url      = env("DATABASE_URL")
        }
        ```

      - After:

        ```prisma
        datasource db {
          provider = "postgresql"
        }
        ```

    - Rules:

      - Preserve the existing `provider` value exactly as-is (e.g. `"postgresql"`, `"mysql"`, `"sqlite"`, etc.).
      - Remove only the `url = ...` line from the `datasource db` block.
      - Preserve any other properties on the datasource (for example: `shadowDatabaseUrl`, `relationMode`, `schemas`, `extensions`, `directUrl`, etc.).
      - Do **not** add explanatory comments into the schema; comments in this prompt are hints for you, not code to emit.