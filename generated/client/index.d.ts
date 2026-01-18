
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MonitoringJob
 * 
 */
export type MonitoringJob = $Result.DefaultSelection<Prisma.$MonitoringJobPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model SanctionEntity
 * 
 */
export type SanctionEntity = $Result.DefaultSelection<Prisma.$SanctionEntityPayload>
/**
 * Model BlindIndex
 * 
 */
export type BlindIndex = $Result.DefaultSelection<Prisma.$BlindIndexPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>
/**
 * Model RiskProfile
 * 
 */
export type RiskProfile = $Result.DefaultSelection<Prisma.$RiskProfilePayload>
/**
 * Model RiskAlert
 * 
 */
export type RiskAlert = $Result.DefaultSelection<Prisma.$RiskAlertPayload>
/**
 * Model WatchListClient
 * 
 */
export type WatchListClient = $Result.DefaultSelection<Prisma.$WatchListClientPayload>
/**
 * Model PublicDataAnalysis
 * 
 */
export type PublicDataAnalysis = $Result.DefaultSelection<Prisma.$PublicDataAnalysisPayload>
/**
 * Model ManualInvestigativeReport
 * 
 */
export type ManualInvestigativeReport = $Result.DefaultSelection<Prisma.$ManualInvestigativeReportPayload>
/**
 * Model Sandbox
 * 
 */
export type Sandbox = $Result.DefaultSelection<Prisma.$SandboxPayload>
/**
 * Model AnomalyReport
 * 
 */
export type AnomalyReport = $Result.DefaultSelection<Prisma.$AnomalyReportPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JobType: {
  CLIENT_MONITORING: 'CLIENT_MONITORING',
  SYSTEM_ETL: 'SYSTEM_ETL',
  SYSTEM_INFERENCE: 'SYSTEM_INFERENCE'
};

export type JobType = (typeof JobType)[keyof typeof JobType]

}

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MonitoringJobs
 * const monitoringJobs = await prisma.monitoringJob.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MonitoringJobs
   * const monitoringJobs = await prisma.monitoringJob.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.monitoringJob`: Exposes CRUD operations for the **MonitoringJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonitoringJobs
    * const monitoringJobs = await prisma.monitoringJob.findMany()
    * ```
    */
  get monitoringJob(): Prisma.MonitoringJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanctionEntity`: Exposes CRUD operations for the **SanctionEntity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SanctionEntities
    * const sanctionEntities = await prisma.sanctionEntity.findMany()
    * ```
    */
  get sanctionEntity(): Prisma.SanctionEntityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blindIndex`: Exposes CRUD operations for the **BlindIndex** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlindIndices
    * const blindIndices = await prisma.blindIndex.findMany()
    * ```
    */
  get blindIndex(): Prisma.BlindIndexDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskProfile`: Exposes CRUD operations for the **RiskProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskProfiles
    * const riskProfiles = await prisma.riskProfile.findMany()
    * ```
    */
  get riskProfile(): Prisma.RiskProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskAlert`: Exposes CRUD operations for the **RiskAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskAlerts
    * const riskAlerts = await prisma.riskAlert.findMany()
    * ```
    */
  get riskAlert(): Prisma.RiskAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchListClient`: Exposes CRUD operations for the **WatchListClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchListClients
    * const watchListClients = await prisma.watchListClient.findMany()
    * ```
    */
  get watchListClient(): Prisma.WatchListClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicDataAnalysis`: Exposes CRUD operations for the **PublicDataAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicDataAnalyses
    * const publicDataAnalyses = await prisma.publicDataAnalysis.findMany()
    * ```
    */
  get publicDataAnalysis(): Prisma.PublicDataAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manualInvestigativeReport`: Exposes CRUD operations for the **ManualInvestigativeReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManualInvestigativeReports
    * const manualInvestigativeReports = await prisma.manualInvestigativeReport.findMany()
    * ```
    */
  get manualInvestigativeReport(): Prisma.ManualInvestigativeReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sandbox`: Exposes CRUD operations for the **Sandbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sandboxes
    * const sandboxes = await prisma.sandbox.findMany()
    * ```
    */
  get sandbox(): Prisma.SandboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anomalyReport`: Exposes CRUD operations for the **AnomalyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnomalyReports
    * const anomalyReports = await prisma.anomalyReport.findMany()
    * ```
    */
  get anomalyReport(): Prisma.AnomalyReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MonitoringJob: 'MonitoringJob',
    AuditLog: 'AuditLog',
    SanctionEntity: 'SanctionEntity',
    BlindIndex: 'BlindIndex',
    SystemConfig: 'SystemConfig',
    RiskProfile: 'RiskProfile',
    RiskAlert: 'RiskAlert',
    WatchListClient: 'WatchListClient',
    PublicDataAnalysis: 'PublicDataAnalysis',
    ManualInvestigativeReport: 'ManualInvestigativeReport',
    Sandbox: 'Sandbox',
    AnomalyReport: 'AnomalyReport',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "monitoringJob" | "auditLog" | "sanctionEntity" | "blindIndex" | "systemConfig" | "riskProfile" | "riskAlert" | "watchListClient" | "publicDataAnalysis" | "manualInvestigativeReport" | "sandbox" | "anomalyReport" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MonitoringJob: {
        payload: Prisma.$MonitoringJobPayload<ExtArgs>
        fields: Prisma.MonitoringJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitoringJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitoringJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>
          }
          findFirst: {
            args: Prisma.MonitoringJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitoringJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>
          }
          findMany: {
            args: Prisma.MonitoringJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>[]
          }
          create: {
            args: Prisma.MonitoringJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>
          }
          createMany: {
            args: Prisma.MonitoringJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitoringJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>[]
          }
          delete: {
            args: Prisma.MonitoringJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>
          }
          update: {
            args: Prisma.MonitoringJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>
          }
          deleteMany: {
            args: Prisma.MonitoringJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitoringJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitoringJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>[]
          }
          upsert: {
            args: Prisma.MonitoringJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitoringJobPayload>
          }
          aggregate: {
            args: Prisma.MonitoringJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoringJob>
          }
          groupBy: {
            args: Prisma.MonitoringJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitoringJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitoringJobCountArgs<ExtArgs>
            result: $Utils.Optional<MonitoringJobCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      SanctionEntity: {
        payload: Prisma.$SanctionEntityPayload<ExtArgs>
        fields: Prisma.SanctionEntityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanctionEntityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanctionEntityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>
          }
          findFirst: {
            args: Prisma.SanctionEntityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanctionEntityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>
          }
          findMany: {
            args: Prisma.SanctionEntityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>[]
          }
          create: {
            args: Prisma.SanctionEntityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>
          }
          createMany: {
            args: Prisma.SanctionEntityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SanctionEntityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>[]
          }
          delete: {
            args: Prisma.SanctionEntityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>
          }
          update: {
            args: Prisma.SanctionEntityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>
          }
          deleteMany: {
            args: Prisma.SanctionEntityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanctionEntityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SanctionEntityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>[]
          }
          upsert: {
            args: Prisma.SanctionEntityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionEntityPayload>
          }
          aggregate: {
            args: Prisma.SanctionEntityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanctionEntity>
          }
          groupBy: {
            args: Prisma.SanctionEntityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanctionEntityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanctionEntityCountArgs<ExtArgs>
            result: $Utils.Optional<SanctionEntityCountAggregateOutputType> | number
          }
        }
      }
      BlindIndex: {
        payload: Prisma.$BlindIndexPayload<ExtArgs>
        fields: Prisma.BlindIndexFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlindIndexFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlindIndexFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>
          }
          findFirst: {
            args: Prisma.BlindIndexFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlindIndexFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>
          }
          findMany: {
            args: Prisma.BlindIndexFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>[]
          }
          create: {
            args: Prisma.BlindIndexCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>
          }
          createMany: {
            args: Prisma.BlindIndexCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlindIndexCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>[]
          }
          delete: {
            args: Prisma.BlindIndexDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>
          }
          update: {
            args: Prisma.BlindIndexUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>
          }
          deleteMany: {
            args: Prisma.BlindIndexDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlindIndexUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlindIndexUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>[]
          }
          upsert: {
            args: Prisma.BlindIndexUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlindIndexPayload>
          }
          aggregate: {
            args: Prisma.BlindIndexAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlindIndex>
          }
          groupBy: {
            args: Prisma.BlindIndexGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlindIndexGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlindIndexCountArgs<ExtArgs>
            result: $Utils.Optional<BlindIndexCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
      RiskProfile: {
        payload: Prisma.$RiskProfilePayload<ExtArgs>
        fields: Prisma.RiskProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>
          }
          findFirst: {
            args: Prisma.RiskProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>
          }
          findMany: {
            args: Prisma.RiskProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>[]
          }
          create: {
            args: Prisma.RiskProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>
          }
          createMany: {
            args: Prisma.RiskProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>[]
          }
          delete: {
            args: Prisma.RiskProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>
          }
          update: {
            args: Prisma.RiskProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>
          }
          deleteMany: {
            args: Prisma.RiskProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>[]
          }
          upsert: {
            args: Prisma.RiskProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskProfilePayload>
          }
          aggregate: {
            args: Prisma.RiskProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskProfile>
          }
          groupBy: {
            args: Prisma.RiskProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskProfileCountArgs<ExtArgs>
            result: $Utils.Optional<RiskProfileCountAggregateOutputType> | number
          }
        }
      }
      RiskAlert: {
        payload: Prisma.$RiskAlertPayload<ExtArgs>
        fields: Prisma.RiskAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>
          }
          findFirst: {
            args: Prisma.RiskAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>
          }
          findMany: {
            args: Prisma.RiskAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>[]
          }
          create: {
            args: Prisma.RiskAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>
          }
          createMany: {
            args: Prisma.RiskAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>[]
          }
          delete: {
            args: Prisma.RiskAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>
          }
          update: {
            args: Prisma.RiskAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>
          }
          deleteMany: {
            args: Prisma.RiskAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>[]
          }
          upsert: {
            args: Prisma.RiskAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAlertPayload>
          }
          aggregate: {
            args: Prisma.RiskAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskAlert>
          }
          groupBy: {
            args: Prisma.RiskAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskAlertCountArgs<ExtArgs>
            result: $Utils.Optional<RiskAlertCountAggregateOutputType> | number
          }
        }
      }
      WatchListClient: {
        payload: Prisma.$WatchListClientPayload<ExtArgs>
        fields: Prisma.WatchListClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchListClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchListClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>
          }
          findFirst: {
            args: Prisma.WatchListClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchListClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>
          }
          findMany: {
            args: Prisma.WatchListClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>[]
          }
          create: {
            args: Prisma.WatchListClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>
          }
          createMany: {
            args: Prisma.WatchListClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchListClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>[]
          }
          delete: {
            args: Prisma.WatchListClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>
          }
          update: {
            args: Prisma.WatchListClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>
          }
          deleteMany: {
            args: Prisma.WatchListClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchListClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchListClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>[]
          }
          upsert: {
            args: Prisma.WatchListClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchListClientPayload>
          }
          aggregate: {
            args: Prisma.WatchListClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchListClient>
          }
          groupBy: {
            args: Prisma.WatchListClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchListClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchListClientCountArgs<ExtArgs>
            result: $Utils.Optional<WatchListClientCountAggregateOutputType> | number
          }
        }
      }
      PublicDataAnalysis: {
        payload: Prisma.$PublicDataAnalysisPayload<ExtArgs>
        fields: Prisma.PublicDataAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicDataAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicDataAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>
          }
          findFirst: {
            args: Prisma.PublicDataAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicDataAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>
          }
          findMany: {
            args: Prisma.PublicDataAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>[]
          }
          create: {
            args: Prisma.PublicDataAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>
          }
          createMany: {
            args: Prisma.PublicDataAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicDataAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>[]
          }
          delete: {
            args: Prisma.PublicDataAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>
          }
          update: {
            args: Prisma.PublicDataAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.PublicDataAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicDataAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicDataAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.PublicDataAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicDataAnalysisPayload>
          }
          aggregate: {
            args: Prisma.PublicDataAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicDataAnalysis>
          }
          groupBy: {
            args: Prisma.PublicDataAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicDataAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicDataAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<PublicDataAnalysisCountAggregateOutputType> | number
          }
        }
      }
      ManualInvestigativeReport: {
        payload: Prisma.$ManualInvestigativeReportPayload<ExtArgs>
        fields: Prisma.ManualInvestigativeReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManualInvestigativeReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManualInvestigativeReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>
          }
          findFirst: {
            args: Prisma.ManualInvestigativeReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManualInvestigativeReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>
          }
          findMany: {
            args: Prisma.ManualInvestigativeReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>[]
          }
          create: {
            args: Prisma.ManualInvestigativeReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>
          }
          createMany: {
            args: Prisma.ManualInvestigativeReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManualInvestigativeReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>[]
          }
          delete: {
            args: Prisma.ManualInvestigativeReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>
          }
          update: {
            args: Prisma.ManualInvestigativeReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>
          }
          deleteMany: {
            args: Prisma.ManualInvestigativeReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManualInvestigativeReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManualInvestigativeReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>[]
          }
          upsert: {
            args: Prisma.ManualInvestigativeReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManualInvestigativeReportPayload>
          }
          aggregate: {
            args: Prisma.ManualInvestigativeReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManualInvestigativeReport>
          }
          groupBy: {
            args: Prisma.ManualInvestigativeReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManualInvestigativeReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManualInvestigativeReportCountArgs<ExtArgs>
            result: $Utils.Optional<ManualInvestigativeReportCountAggregateOutputType> | number
          }
        }
      }
      Sandbox: {
        payload: Prisma.$SandboxPayload<ExtArgs>
        fields: Prisma.SandboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SandboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SandboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>
          }
          findFirst: {
            args: Prisma.SandboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SandboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>
          }
          findMany: {
            args: Prisma.SandboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>[]
          }
          create: {
            args: Prisma.SandboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>
          }
          createMany: {
            args: Prisma.SandboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SandboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>[]
          }
          delete: {
            args: Prisma.SandboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>
          }
          update: {
            args: Prisma.SandboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>
          }
          deleteMany: {
            args: Prisma.SandboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SandboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SandboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>[]
          }
          upsert: {
            args: Prisma.SandboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SandboxPayload>
          }
          aggregate: {
            args: Prisma.SandboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSandbox>
          }
          groupBy: {
            args: Prisma.SandboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<SandboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.SandboxCountArgs<ExtArgs>
            result: $Utils.Optional<SandboxCountAggregateOutputType> | number
          }
        }
      }
      AnomalyReport: {
        payload: Prisma.$AnomalyReportPayload<ExtArgs>
        fields: Prisma.AnomalyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnomalyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnomalyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          findFirst: {
            args: Prisma.AnomalyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnomalyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          findMany: {
            args: Prisma.AnomalyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>[]
          }
          create: {
            args: Prisma.AnomalyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          createMany: {
            args: Prisma.AnomalyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnomalyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>[]
          }
          delete: {
            args: Prisma.AnomalyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          update: {
            args: Prisma.AnomalyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          deleteMany: {
            args: Prisma.AnomalyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnomalyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnomalyReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>[]
          }
          upsert: {
            args: Prisma.AnomalyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnomalyReportPayload>
          }
          aggregate: {
            args: Prisma.AnomalyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnomalyReport>
          }
          groupBy: {
            args: Prisma.AnomalyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnomalyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnomalyReportCountArgs<ExtArgs>
            result: $Utils.Optional<AnomalyReportCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    monitoringJob?: MonitoringJobOmit
    auditLog?: AuditLogOmit
    sanctionEntity?: SanctionEntityOmit
    blindIndex?: BlindIndexOmit
    systemConfig?: SystemConfigOmit
    riskProfile?: RiskProfileOmit
    riskAlert?: RiskAlertOmit
    watchListClient?: WatchListClientOmit
    publicDataAnalysis?: PublicDataAnalysisOmit
    manualInvestigativeReport?: ManualInvestigativeReportOmit
    sandbox?: SandboxOmit
    anomalyReport?: AnomalyReportOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MonitoringJobCountOutputType
   */

  export type MonitoringJobCountOutputType = {
    publicDataAnalyses: number
  }

  export type MonitoringJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicDataAnalyses?: boolean | MonitoringJobCountOutputTypeCountPublicDataAnalysesArgs
  }

  // Custom InputTypes
  /**
   * MonitoringJobCountOutputType without action
   */
  export type MonitoringJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJobCountOutputType
     */
    select?: MonitoringJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonitoringJobCountOutputType without action
   */
  export type MonitoringJobCountOutputTypeCountPublicDataAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicDataAnalysisWhereInput
  }


  /**
   * Count Type RiskProfileCountOutputType
   */

  export type RiskProfileCountOutputType = {
    alerts: number
  }

  export type RiskProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | RiskProfileCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * RiskProfileCountOutputType without action
   */
  export type RiskProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfileCountOutputType
     */
    select?: RiskProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiskProfileCountOutputType without action
   */
  export type RiskProfileCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskAlertWhereInput
  }


  /**
   * Count Type WatchListClientCountOutputType
   */

  export type WatchListClientCountOutputType = {
    analyses: number
  }

  export type WatchListClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | WatchListClientCountOutputTypeCountAnalysesArgs
  }

  // Custom InputTypes
  /**
   * WatchListClientCountOutputType without action
   */
  export type WatchListClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClientCountOutputType
     */
    select?: WatchListClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WatchListClientCountOutputType without action
   */
  export type WatchListClientCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicDataAnalysisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MonitoringJob
   */

  export type AggregateMonitoringJob = {
    _count: MonitoringJobCountAggregateOutputType | null
    _min: MonitoringJobMinAggregateOutputType | null
    _max: MonitoringJobMaxAggregateOutputType | null
  }

  export type MonitoringJobMinAggregateOutputType = {
    id: string | null
    clientName: string | null
    cronExpression: string | null
    nextRunAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.JobType | null
  }

  export type MonitoringJobMaxAggregateOutputType = {
    id: string | null
    clientName: string | null
    cronExpression: string | null
    nextRunAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.JobType | null
  }

  export type MonitoringJobCountAggregateOutputType = {
    id: number
    clientName: number
    cronExpression: number
    nextRunAt: number
    userId: number
    createdAt: number
    updatedAt: number
    type: number
    _all: number
  }


  export type MonitoringJobMinAggregateInputType = {
    id?: true
    clientName?: true
    cronExpression?: true
    nextRunAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type MonitoringJobMaxAggregateInputType = {
    id?: true
    clientName?: true
    cronExpression?: true
    nextRunAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type MonitoringJobCountAggregateInputType = {
    id?: true
    clientName?: true
    cronExpression?: true
    nextRunAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    _all?: true
  }

  export type MonitoringJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringJob to aggregate.
     */
    where?: MonitoringJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringJobs to fetch.
     */
    orderBy?: MonitoringJobOrderByWithRelationInput | MonitoringJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitoringJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonitoringJobs
    **/
    _count?: true | MonitoringJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitoringJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitoringJobMaxAggregateInputType
  }

  export type GetMonitoringJobAggregateType<T extends MonitoringJobAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoringJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoringJob[P]>
      : GetScalarType<T[P], AggregateMonitoringJob[P]>
  }




  export type MonitoringJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitoringJobWhereInput
    orderBy?: MonitoringJobOrderByWithAggregationInput | MonitoringJobOrderByWithAggregationInput[]
    by: MonitoringJobScalarFieldEnum[] | MonitoringJobScalarFieldEnum
    having?: MonitoringJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitoringJobCountAggregateInputType | true
    _min?: MonitoringJobMinAggregateInputType
    _max?: MonitoringJobMaxAggregateInputType
  }

  export type MonitoringJobGroupByOutputType = {
    id: string
    clientName: string
    cronExpression: string
    nextRunAt: Date
    userId: string | null
    createdAt: Date
    updatedAt: Date
    type: $Enums.JobType
    _count: MonitoringJobCountAggregateOutputType | null
    _min: MonitoringJobMinAggregateOutputType | null
    _max: MonitoringJobMaxAggregateOutputType | null
  }

  type GetMonitoringJobGroupByPayload<T extends MonitoringJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitoringJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitoringJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitoringJobGroupByOutputType[P]>
            : GetScalarType<T[P], MonitoringJobGroupByOutputType[P]>
        }
      >
    >


  export type MonitoringJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    cronExpression?: boolean
    nextRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
    publicDataAnalyses?: boolean | MonitoringJob$publicDataAnalysesArgs<ExtArgs>
    riskProfile?: boolean | MonitoringJob$riskProfileArgs<ExtArgs>
    _count?: boolean | MonitoringJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitoringJob"]>

  export type MonitoringJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    cronExpression?: boolean
    nextRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["monitoringJob"]>

  export type MonitoringJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    cronExpression?: boolean
    nextRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["monitoringJob"]>

  export type MonitoringJobSelectScalar = {
    id?: boolean
    clientName?: boolean
    cronExpression?: boolean
    nextRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }

  export type MonitoringJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientName" | "cronExpression" | "nextRunAt" | "userId" | "createdAt" | "updatedAt" | "type", ExtArgs["result"]["monitoringJob"]>
  export type MonitoringJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicDataAnalyses?: boolean | MonitoringJob$publicDataAnalysesArgs<ExtArgs>
    riskProfile?: boolean | MonitoringJob$riskProfileArgs<ExtArgs>
    _count?: boolean | MonitoringJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonitoringJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MonitoringJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MonitoringJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonitoringJob"
    objects: {
      publicDataAnalyses: Prisma.$PublicDataAnalysisPayload<ExtArgs>[]
      riskProfile: Prisma.$RiskProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientName: string
      cronExpression: string
      nextRunAt: Date
      userId: string | null
      createdAt: Date
      updatedAt: Date
      type: $Enums.JobType
    }, ExtArgs["result"]["monitoringJob"]>
    composites: {}
  }

  type MonitoringJobGetPayload<S extends boolean | null | undefined | MonitoringJobDefaultArgs> = $Result.GetResult<Prisma.$MonitoringJobPayload, S>

  type MonitoringJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitoringJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitoringJobCountAggregateInputType | true
    }

  export interface MonitoringJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonitoringJob'], meta: { name: 'MonitoringJob' } }
    /**
     * Find zero or one MonitoringJob that matches the filter.
     * @param {MonitoringJobFindUniqueArgs} args - Arguments to find a MonitoringJob
     * @example
     * // Get one MonitoringJob
     * const monitoringJob = await prisma.monitoringJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitoringJobFindUniqueArgs>(args: SelectSubset<T, MonitoringJobFindUniqueArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonitoringJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitoringJobFindUniqueOrThrowArgs} args - Arguments to find a MonitoringJob
     * @example
     * // Get one MonitoringJob
     * const monitoringJob = await prisma.monitoringJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitoringJobFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitoringJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonitoringJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobFindFirstArgs} args - Arguments to find a MonitoringJob
     * @example
     * // Get one MonitoringJob
     * const monitoringJob = await prisma.monitoringJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitoringJobFindFirstArgs>(args?: SelectSubset<T, MonitoringJobFindFirstArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonitoringJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobFindFirstOrThrowArgs} args - Arguments to find a MonitoringJob
     * @example
     * // Get one MonitoringJob
     * const monitoringJob = await prisma.monitoringJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitoringJobFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitoringJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonitoringJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonitoringJobs
     * const monitoringJobs = await prisma.monitoringJob.findMany()
     * 
     * // Get first 10 MonitoringJobs
     * const monitoringJobs = await prisma.monitoringJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoringJobWithIdOnly = await prisma.monitoringJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitoringJobFindManyArgs>(args?: SelectSubset<T, MonitoringJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonitoringJob.
     * @param {MonitoringJobCreateArgs} args - Arguments to create a MonitoringJob.
     * @example
     * // Create one MonitoringJob
     * const MonitoringJob = await prisma.monitoringJob.create({
     *   data: {
     *     // ... data to create a MonitoringJob
     *   }
     * })
     * 
     */
    create<T extends MonitoringJobCreateArgs>(args: SelectSubset<T, MonitoringJobCreateArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonitoringJobs.
     * @param {MonitoringJobCreateManyArgs} args - Arguments to create many MonitoringJobs.
     * @example
     * // Create many MonitoringJobs
     * const monitoringJob = await prisma.monitoringJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitoringJobCreateManyArgs>(args?: SelectSubset<T, MonitoringJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonitoringJobs and returns the data saved in the database.
     * @param {MonitoringJobCreateManyAndReturnArgs} args - Arguments to create many MonitoringJobs.
     * @example
     * // Create many MonitoringJobs
     * const monitoringJob = await prisma.monitoringJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonitoringJobs and only return the `id`
     * const monitoringJobWithIdOnly = await prisma.monitoringJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitoringJobCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitoringJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonitoringJob.
     * @param {MonitoringJobDeleteArgs} args - Arguments to delete one MonitoringJob.
     * @example
     * // Delete one MonitoringJob
     * const MonitoringJob = await prisma.monitoringJob.delete({
     *   where: {
     *     // ... filter to delete one MonitoringJob
     *   }
     * })
     * 
     */
    delete<T extends MonitoringJobDeleteArgs>(args: SelectSubset<T, MonitoringJobDeleteArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonitoringJob.
     * @param {MonitoringJobUpdateArgs} args - Arguments to update one MonitoringJob.
     * @example
     * // Update one MonitoringJob
     * const monitoringJob = await prisma.monitoringJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitoringJobUpdateArgs>(args: SelectSubset<T, MonitoringJobUpdateArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonitoringJobs.
     * @param {MonitoringJobDeleteManyArgs} args - Arguments to filter MonitoringJobs to delete.
     * @example
     * // Delete a few MonitoringJobs
     * const { count } = await prisma.monitoringJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitoringJobDeleteManyArgs>(args?: SelectSubset<T, MonitoringJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonitoringJobs
     * const monitoringJob = await prisma.monitoringJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitoringJobUpdateManyArgs>(args: SelectSubset<T, MonitoringJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonitoringJobs and returns the data updated in the database.
     * @param {MonitoringJobUpdateManyAndReturnArgs} args - Arguments to update many MonitoringJobs.
     * @example
     * // Update many MonitoringJobs
     * const monitoringJob = await prisma.monitoringJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonitoringJobs and only return the `id`
     * const monitoringJobWithIdOnly = await prisma.monitoringJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitoringJobUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitoringJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonitoringJob.
     * @param {MonitoringJobUpsertArgs} args - Arguments to update or create a MonitoringJob.
     * @example
     * // Update or create a MonitoringJob
     * const monitoringJob = await prisma.monitoringJob.upsert({
     *   create: {
     *     // ... data to create a MonitoringJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonitoringJob we want to update
     *   }
     * })
     */
    upsert<T extends MonitoringJobUpsertArgs>(args: SelectSubset<T, MonitoringJobUpsertArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonitoringJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobCountArgs} args - Arguments to filter MonitoringJobs to count.
     * @example
     * // Count the number of MonitoringJobs
     * const count = await prisma.monitoringJob.count({
     *   where: {
     *     // ... the filter for the MonitoringJobs we want to count
     *   }
     * })
    **/
    count<T extends MonitoringJobCountArgs>(
      args?: Subset<T, MonitoringJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitoringJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonitoringJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitoringJobAggregateArgs>(args: Subset<T, MonitoringJobAggregateArgs>): Prisma.PrismaPromise<GetMonitoringJobAggregateType<T>>

    /**
     * Group by MonitoringJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitoringJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitoringJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitoringJobGroupByArgs['orderBy'] }
        : { orderBy?: MonitoringJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitoringJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoringJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonitoringJob model
   */
  readonly fields: MonitoringJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonitoringJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitoringJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicDataAnalyses<T extends MonitoringJob$publicDataAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, MonitoringJob$publicDataAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    riskProfile<T extends MonitoringJob$riskProfileArgs<ExtArgs> = {}>(args?: Subset<T, MonitoringJob$riskProfileArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonitoringJob model
   */
  interface MonitoringJobFieldRefs {
    readonly id: FieldRef<"MonitoringJob", 'String'>
    readonly clientName: FieldRef<"MonitoringJob", 'String'>
    readonly cronExpression: FieldRef<"MonitoringJob", 'String'>
    readonly nextRunAt: FieldRef<"MonitoringJob", 'DateTime'>
    readonly userId: FieldRef<"MonitoringJob", 'String'>
    readonly createdAt: FieldRef<"MonitoringJob", 'DateTime'>
    readonly updatedAt: FieldRef<"MonitoringJob", 'DateTime'>
    readonly type: FieldRef<"MonitoringJob", 'JobType'>
  }
    

  // Custom InputTypes
  /**
   * MonitoringJob findUnique
   */
  export type MonitoringJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringJob to fetch.
     */
    where: MonitoringJobWhereUniqueInput
  }

  /**
   * MonitoringJob findUniqueOrThrow
   */
  export type MonitoringJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringJob to fetch.
     */
    where: MonitoringJobWhereUniqueInput
  }

  /**
   * MonitoringJob findFirst
   */
  export type MonitoringJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringJob to fetch.
     */
    where?: MonitoringJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringJobs to fetch.
     */
    orderBy?: MonitoringJobOrderByWithRelationInput | MonitoringJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringJobs.
     */
    cursor?: MonitoringJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringJobs.
     */
    distinct?: MonitoringJobScalarFieldEnum | MonitoringJobScalarFieldEnum[]
  }

  /**
   * MonitoringJob findFirstOrThrow
   */
  export type MonitoringJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringJob to fetch.
     */
    where?: MonitoringJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringJobs to fetch.
     */
    orderBy?: MonitoringJobOrderByWithRelationInput | MonitoringJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonitoringJobs.
     */
    cursor?: MonitoringJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonitoringJobs.
     */
    distinct?: MonitoringJobScalarFieldEnum | MonitoringJobScalarFieldEnum[]
  }

  /**
   * MonitoringJob findMany
   */
  export type MonitoringJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * Filter, which MonitoringJobs to fetch.
     */
    where?: MonitoringJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonitoringJobs to fetch.
     */
    orderBy?: MonitoringJobOrderByWithRelationInput | MonitoringJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonitoringJobs.
     */
    cursor?: MonitoringJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonitoringJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonitoringJobs.
     */
    skip?: number
    distinct?: MonitoringJobScalarFieldEnum | MonitoringJobScalarFieldEnum[]
  }

  /**
   * MonitoringJob create
   */
  export type MonitoringJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * The data needed to create a MonitoringJob.
     */
    data: XOR<MonitoringJobCreateInput, MonitoringJobUncheckedCreateInput>
  }

  /**
   * MonitoringJob createMany
   */
  export type MonitoringJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonitoringJobs.
     */
    data: MonitoringJobCreateManyInput | MonitoringJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonitoringJob createManyAndReturn
   */
  export type MonitoringJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * The data used to create many MonitoringJobs.
     */
    data: MonitoringJobCreateManyInput | MonitoringJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonitoringJob update
   */
  export type MonitoringJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * The data needed to update a MonitoringJob.
     */
    data: XOR<MonitoringJobUpdateInput, MonitoringJobUncheckedUpdateInput>
    /**
     * Choose, which MonitoringJob to update.
     */
    where: MonitoringJobWhereUniqueInput
  }

  /**
   * MonitoringJob updateMany
   */
  export type MonitoringJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonitoringJobs.
     */
    data: XOR<MonitoringJobUpdateManyMutationInput, MonitoringJobUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringJobs to update
     */
    where?: MonitoringJobWhereInput
    /**
     * Limit how many MonitoringJobs to update.
     */
    limit?: number
  }

  /**
   * MonitoringJob updateManyAndReturn
   */
  export type MonitoringJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * The data used to update MonitoringJobs.
     */
    data: XOR<MonitoringJobUpdateManyMutationInput, MonitoringJobUncheckedUpdateManyInput>
    /**
     * Filter which MonitoringJobs to update
     */
    where?: MonitoringJobWhereInput
    /**
     * Limit how many MonitoringJobs to update.
     */
    limit?: number
  }

  /**
   * MonitoringJob upsert
   */
  export type MonitoringJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * The filter to search for the MonitoringJob to update in case it exists.
     */
    where: MonitoringJobWhereUniqueInput
    /**
     * In case the MonitoringJob found by the `where` argument doesn't exist, create a new MonitoringJob with this data.
     */
    create: XOR<MonitoringJobCreateInput, MonitoringJobUncheckedCreateInput>
    /**
     * In case the MonitoringJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitoringJobUpdateInput, MonitoringJobUncheckedUpdateInput>
  }

  /**
   * MonitoringJob delete
   */
  export type MonitoringJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    /**
     * Filter which MonitoringJob to delete.
     */
    where: MonitoringJobWhereUniqueInput
  }

  /**
   * MonitoringJob deleteMany
   */
  export type MonitoringJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonitoringJobs to delete
     */
    where?: MonitoringJobWhereInput
    /**
     * Limit how many MonitoringJobs to delete.
     */
    limit?: number
  }

  /**
   * MonitoringJob.publicDataAnalyses
   */
  export type MonitoringJob$publicDataAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    where?: PublicDataAnalysisWhereInput
    orderBy?: PublicDataAnalysisOrderByWithRelationInput | PublicDataAnalysisOrderByWithRelationInput[]
    cursor?: PublicDataAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicDataAnalysisScalarFieldEnum | PublicDataAnalysisScalarFieldEnum[]
  }

  /**
   * MonitoringJob.riskProfile
   */
  export type MonitoringJob$riskProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    where?: RiskProfileWhereInput
  }

  /**
   * MonitoringJob without action
   */
  export type MonitoringJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    clientName: string | null
    result: string | null
    gcsUrl: string | null
    pdfHash: string | null
    screened_at: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    clientName: string | null
    result: string | null
    gcsUrl: string | null
    pdfHash: string | null
    screened_at: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    jobId: number
    clientName: number
    result: number
    gcsUrl: number
    pdfHash: number
    screened_at: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    jobId?: true
    clientName?: true
    result?: true
    gcsUrl?: true
    pdfHash?: true
    screened_at?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    jobId?: true
    clientName?: true
    result?: true
    gcsUrl?: true
    pdfHash?: true
    screened_at?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    jobId?: true
    clientName?: true
    result?: true
    gcsUrl?: true
    pdfHash?: true
    screened_at?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    jobId: string
    clientName: string
    result: string
    gcsUrl: string
    pdfHash: string
    screened_at: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    clientName?: boolean
    result?: boolean
    gcsUrl?: boolean
    pdfHash?: boolean
    screened_at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    clientName?: boolean
    result?: boolean
    gcsUrl?: boolean
    pdfHash?: boolean
    screened_at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    clientName?: boolean
    result?: boolean
    gcsUrl?: boolean
    pdfHash?: boolean
    screened_at?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    jobId?: boolean
    clientName?: boolean
    result?: boolean
    gcsUrl?: boolean
    pdfHash?: boolean
    screened_at?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "clientName" | "result" | "gcsUrl" | "pdfHash" | "screened_at", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      clientName: string
      result: string
      gcsUrl: string
      pdfHash: string
      screened_at: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly jobId: FieldRef<"AuditLog", 'String'>
    readonly clientName: FieldRef<"AuditLog", 'String'>
    readonly result: FieldRef<"AuditLog", 'String'>
    readonly gcsUrl: FieldRef<"AuditLog", 'String'>
    readonly pdfHash: FieldRef<"AuditLog", 'String'>
    readonly screened_at: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model SanctionEntity
   */

  export type AggregateSanctionEntity = {
    _count: SanctionEntityCountAggregateOutputType | null
    _min: SanctionEntityMinAggregateOutputType | null
    _max: SanctionEntityMaxAggregateOutputType | null
  }

  export type SanctionEntityMinAggregateOutputType = {
    id: string | null
    name: string | null
    source: string | null
    createdAt: Date | null
  }

  export type SanctionEntityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    source: string | null
    createdAt: Date | null
  }

  export type SanctionEntityCountAggregateOutputType = {
    id: number
    name: number
    source: number
    createdAt: number
    _all: number
  }


  export type SanctionEntityMinAggregateInputType = {
    id?: true
    name?: true
    source?: true
    createdAt?: true
  }

  export type SanctionEntityMaxAggregateInputType = {
    id?: true
    name?: true
    source?: true
    createdAt?: true
  }

  export type SanctionEntityCountAggregateInputType = {
    id?: true
    name?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type SanctionEntityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanctionEntity to aggregate.
     */
    where?: SanctionEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionEntities to fetch.
     */
    orderBy?: SanctionEntityOrderByWithRelationInput | SanctionEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanctionEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SanctionEntities
    **/
    _count?: true | SanctionEntityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanctionEntityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanctionEntityMaxAggregateInputType
  }

  export type GetSanctionEntityAggregateType<T extends SanctionEntityAggregateArgs> = {
        [P in keyof T & keyof AggregateSanctionEntity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanctionEntity[P]>
      : GetScalarType<T[P], AggregateSanctionEntity[P]>
  }




  export type SanctionEntityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanctionEntityWhereInput
    orderBy?: SanctionEntityOrderByWithAggregationInput | SanctionEntityOrderByWithAggregationInput[]
    by: SanctionEntityScalarFieldEnum[] | SanctionEntityScalarFieldEnum
    having?: SanctionEntityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanctionEntityCountAggregateInputType | true
    _min?: SanctionEntityMinAggregateInputType
    _max?: SanctionEntityMaxAggregateInputType
  }

  export type SanctionEntityGroupByOutputType = {
    id: string
    name: string
    source: string
    createdAt: Date
    _count: SanctionEntityCountAggregateOutputType | null
    _min: SanctionEntityMinAggregateOutputType | null
    _max: SanctionEntityMaxAggregateOutputType | null
  }

  type GetSanctionEntityGroupByPayload<T extends SanctionEntityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanctionEntityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanctionEntityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanctionEntityGroupByOutputType[P]>
            : GetScalarType<T[P], SanctionEntityGroupByOutputType[P]>
        }
      >
    >


  export type SanctionEntitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sanctionEntity"]>

  export type SanctionEntitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sanctionEntity"]>

  export type SanctionEntitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sanctionEntity"]>

  export type SanctionEntitySelectScalar = {
    id?: boolean
    name?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type SanctionEntityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "source" | "createdAt", ExtArgs["result"]["sanctionEntity"]>

  export type $SanctionEntityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SanctionEntity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      source: string
      createdAt: Date
    }, ExtArgs["result"]["sanctionEntity"]>
    composites: {}
  }

  type SanctionEntityGetPayload<S extends boolean | null | undefined | SanctionEntityDefaultArgs> = $Result.GetResult<Prisma.$SanctionEntityPayload, S>

  type SanctionEntityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanctionEntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanctionEntityCountAggregateInputType | true
    }

  export interface SanctionEntityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SanctionEntity'], meta: { name: 'SanctionEntity' } }
    /**
     * Find zero or one SanctionEntity that matches the filter.
     * @param {SanctionEntityFindUniqueArgs} args - Arguments to find a SanctionEntity
     * @example
     * // Get one SanctionEntity
     * const sanctionEntity = await prisma.sanctionEntity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanctionEntityFindUniqueArgs>(args: SelectSubset<T, SanctionEntityFindUniqueArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SanctionEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanctionEntityFindUniqueOrThrowArgs} args - Arguments to find a SanctionEntity
     * @example
     * // Get one SanctionEntity
     * const sanctionEntity = await prisma.sanctionEntity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanctionEntityFindUniqueOrThrowArgs>(args: SelectSubset<T, SanctionEntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanctionEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityFindFirstArgs} args - Arguments to find a SanctionEntity
     * @example
     * // Get one SanctionEntity
     * const sanctionEntity = await prisma.sanctionEntity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanctionEntityFindFirstArgs>(args?: SelectSubset<T, SanctionEntityFindFirstArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanctionEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityFindFirstOrThrowArgs} args - Arguments to find a SanctionEntity
     * @example
     * // Get one SanctionEntity
     * const sanctionEntity = await prisma.sanctionEntity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanctionEntityFindFirstOrThrowArgs>(args?: SelectSubset<T, SanctionEntityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SanctionEntities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SanctionEntities
     * const sanctionEntities = await prisma.sanctionEntity.findMany()
     * 
     * // Get first 10 SanctionEntities
     * const sanctionEntities = await prisma.sanctionEntity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sanctionEntityWithIdOnly = await prisma.sanctionEntity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SanctionEntityFindManyArgs>(args?: SelectSubset<T, SanctionEntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SanctionEntity.
     * @param {SanctionEntityCreateArgs} args - Arguments to create a SanctionEntity.
     * @example
     * // Create one SanctionEntity
     * const SanctionEntity = await prisma.sanctionEntity.create({
     *   data: {
     *     // ... data to create a SanctionEntity
     *   }
     * })
     * 
     */
    create<T extends SanctionEntityCreateArgs>(args: SelectSubset<T, SanctionEntityCreateArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SanctionEntities.
     * @param {SanctionEntityCreateManyArgs} args - Arguments to create many SanctionEntities.
     * @example
     * // Create many SanctionEntities
     * const sanctionEntity = await prisma.sanctionEntity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanctionEntityCreateManyArgs>(args?: SelectSubset<T, SanctionEntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SanctionEntities and returns the data saved in the database.
     * @param {SanctionEntityCreateManyAndReturnArgs} args - Arguments to create many SanctionEntities.
     * @example
     * // Create many SanctionEntities
     * const sanctionEntity = await prisma.sanctionEntity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SanctionEntities and only return the `id`
     * const sanctionEntityWithIdOnly = await prisma.sanctionEntity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SanctionEntityCreateManyAndReturnArgs>(args?: SelectSubset<T, SanctionEntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SanctionEntity.
     * @param {SanctionEntityDeleteArgs} args - Arguments to delete one SanctionEntity.
     * @example
     * // Delete one SanctionEntity
     * const SanctionEntity = await prisma.sanctionEntity.delete({
     *   where: {
     *     // ... filter to delete one SanctionEntity
     *   }
     * })
     * 
     */
    delete<T extends SanctionEntityDeleteArgs>(args: SelectSubset<T, SanctionEntityDeleteArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SanctionEntity.
     * @param {SanctionEntityUpdateArgs} args - Arguments to update one SanctionEntity.
     * @example
     * // Update one SanctionEntity
     * const sanctionEntity = await prisma.sanctionEntity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanctionEntityUpdateArgs>(args: SelectSubset<T, SanctionEntityUpdateArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SanctionEntities.
     * @param {SanctionEntityDeleteManyArgs} args - Arguments to filter SanctionEntities to delete.
     * @example
     * // Delete a few SanctionEntities
     * const { count } = await prisma.sanctionEntity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanctionEntityDeleteManyArgs>(args?: SelectSubset<T, SanctionEntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanctionEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SanctionEntities
     * const sanctionEntity = await prisma.sanctionEntity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanctionEntityUpdateManyArgs>(args: SelectSubset<T, SanctionEntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanctionEntities and returns the data updated in the database.
     * @param {SanctionEntityUpdateManyAndReturnArgs} args - Arguments to update many SanctionEntities.
     * @example
     * // Update many SanctionEntities
     * const sanctionEntity = await prisma.sanctionEntity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SanctionEntities and only return the `id`
     * const sanctionEntityWithIdOnly = await prisma.sanctionEntity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SanctionEntityUpdateManyAndReturnArgs>(args: SelectSubset<T, SanctionEntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SanctionEntity.
     * @param {SanctionEntityUpsertArgs} args - Arguments to update or create a SanctionEntity.
     * @example
     * // Update or create a SanctionEntity
     * const sanctionEntity = await prisma.sanctionEntity.upsert({
     *   create: {
     *     // ... data to create a SanctionEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SanctionEntity we want to update
     *   }
     * })
     */
    upsert<T extends SanctionEntityUpsertArgs>(args: SelectSubset<T, SanctionEntityUpsertArgs<ExtArgs>>): Prisma__SanctionEntityClient<$Result.GetResult<Prisma.$SanctionEntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SanctionEntities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityCountArgs} args - Arguments to filter SanctionEntities to count.
     * @example
     * // Count the number of SanctionEntities
     * const count = await prisma.sanctionEntity.count({
     *   where: {
     *     // ... the filter for the SanctionEntities we want to count
     *   }
     * })
    **/
    count<T extends SanctionEntityCountArgs>(
      args?: Subset<T, SanctionEntityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanctionEntityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SanctionEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SanctionEntityAggregateArgs>(args: Subset<T, SanctionEntityAggregateArgs>): Prisma.PrismaPromise<GetSanctionEntityAggregateType<T>>

    /**
     * Group by SanctionEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionEntityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SanctionEntityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanctionEntityGroupByArgs['orderBy'] }
        : { orderBy?: SanctionEntityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SanctionEntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanctionEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SanctionEntity model
   */
  readonly fields: SanctionEntityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SanctionEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanctionEntityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SanctionEntity model
   */
  interface SanctionEntityFieldRefs {
    readonly id: FieldRef<"SanctionEntity", 'String'>
    readonly name: FieldRef<"SanctionEntity", 'String'>
    readonly source: FieldRef<"SanctionEntity", 'String'>
    readonly createdAt: FieldRef<"SanctionEntity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SanctionEntity findUnique
   */
  export type SanctionEntityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * Filter, which SanctionEntity to fetch.
     */
    where: SanctionEntityWhereUniqueInput
  }

  /**
   * SanctionEntity findUniqueOrThrow
   */
  export type SanctionEntityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * Filter, which SanctionEntity to fetch.
     */
    where: SanctionEntityWhereUniqueInput
  }

  /**
   * SanctionEntity findFirst
   */
  export type SanctionEntityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * Filter, which SanctionEntity to fetch.
     */
    where?: SanctionEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionEntities to fetch.
     */
    orderBy?: SanctionEntityOrderByWithRelationInput | SanctionEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanctionEntities.
     */
    cursor?: SanctionEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanctionEntities.
     */
    distinct?: SanctionEntityScalarFieldEnum | SanctionEntityScalarFieldEnum[]
  }

  /**
   * SanctionEntity findFirstOrThrow
   */
  export type SanctionEntityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * Filter, which SanctionEntity to fetch.
     */
    where?: SanctionEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionEntities to fetch.
     */
    orderBy?: SanctionEntityOrderByWithRelationInput | SanctionEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanctionEntities.
     */
    cursor?: SanctionEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionEntities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanctionEntities.
     */
    distinct?: SanctionEntityScalarFieldEnum | SanctionEntityScalarFieldEnum[]
  }

  /**
   * SanctionEntity findMany
   */
  export type SanctionEntityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * Filter, which SanctionEntities to fetch.
     */
    where?: SanctionEntityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionEntities to fetch.
     */
    orderBy?: SanctionEntityOrderByWithRelationInput | SanctionEntityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SanctionEntities.
     */
    cursor?: SanctionEntityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionEntities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionEntities.
     */
    skip?: number
    distinct?: SanctionEntityScalarFieldEnum | SanctionEntityScalarFieldEnum[]
  }

  /**
   * SanctionEntity create
   */
  export type SanctionEntityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * The data needed to create a SanctionEntity.
     */
    data: XOR<SanctionEntityCreateInput, SanctionEntityUncheckedCreateInput>
  }

  /**
   * SanctionEntity createMany
   */
  export type SanctionEntityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SanctionEntities.
     */
    data: SanctionEntityCreateManyInput | SanctionEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanctionEntity createManyAndReturn
   */
  export type SanctionEntityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * The data used to create many SanctionEntities.
     */
    data: SanctionEntityCreateManyInput | SanctionEntityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanctionEntity update
   */
  export type SanctionEntityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * The data needed to update a SanctionEntity.
     */
    data: XOR<SanctionEntityUpdateInput, SanctionEntityUncheckedUpdateInput>
    /**
     * Choose, which SanctionEntity to update.
     */
    where: SanctionEntityWhereUniqueInput
  }

  /**
   * SanctionEntity updateMany
   */
  export type SanctionEntityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SanctionEntities.
     */
    data: XOR<SanctionEntityUpdateManyMutationInput, SanctionEntityUncheckedUpdateManyInput>
    /**
     * Filter which SanctionEntities to update
     */
    where?: SanctionEntityWhereInput
    /**
     * Limit how many SanctionEntities to update.
     */
    limit?: number
  }

  /**
   * SanctionEntity updateManyAndReturn
   */
  export type SanctionEntityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * The data used to update SanctionEntities.
     */
    data: XOR<SanctionEntityUpdateManyMutationInput, SanctionEntityUncheckedUpdateManyInput>
    /**
     * Filter which SanctionEntities to update
     */
    where?: SanctionEntityWhereInput
    /**
     * Limit how many SanctionEntities to update.
     */
    limit?: number
  }

  /**
   * SanctionEntity upsert
   */
  export type SanctionEntityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * The filter to search for the SanctionEntity to update in case it exists.
     */
    where: SanctionEntityWhereUniqueInput
    /**
     * In case the SanctionEntity found by the `where` argument doesn't exist, create a new SanctionEntity with this data.
     */
    create: XOR<SanctionEntityCreateInput, SanctionEntityUncheckedCreateInput>
    /**
     * In case the SanctionEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanctionEntityUpdateInput, SanctionEntityUncheckedUpdateInput>
  }

  /**
   * SanctionEntity delete
   */
  export type SanctionEntityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
    /**
     * Filter which SanctionEntity to delete.
     */
    where: SanctionEntityWhereUniqueInput
  }

  /**
   * SanctionEntity deleteMany
   */
  export type SanctionEntityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanctionEntities to delete
     */
    where?: SanctionEntityWhereInput
    /**
     * Limit how many SanctionEntities to delete.
     */
    limit?: number
  }

  /**
   * SanctionEntity without action
   */
  export type SanctionEntityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionEntity
     */
    select?: SanctionEntitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionEntity
     */
    omit?: SanctionEntityOmit<ExtArgs> | null
  }


  /**
   * Model BlindIndex
   */

  export type AggregateBlindIndex = {
    _count: BlindIndexCountAggregateOutputType | null
    _min: BlindIndexMinAggregateOutputType | null
    _max: BlindIndexMaxAggregateOutputType | null
  }

  export type BlindIndexMinAggregateOutputType = {
    id: string | null
    hash: string | null
    recordId: string | null
    model: string | null
    field: string | null
  }

  export type BlindIndexMaxAggregateOutputType = {
    id: string | null
    hash: string | null
    recordId: string | null
    model: string | null
    field: string | null
  }

  export type BlindIndexCountAggregateOutputType = {
    id: number
    hash: number
    recordId: number
    model: number
    field: number
    _all: number
  }


  export type BlindIndexMinAggregateInputType = {
    id?: true
    hash?: true
    recordId?: true
    model?: true
    field?: true
  }

  export type BlindIndexMaxAggregateInputType = {
    id?: true
    hash?: true
    recordId?: true
    model?: true
    field?: true
  }

  export type BlindIndexCountAggregateInputType = {
    id?: true
    hash?: true
    recordId?: true
    model?: true
    field?: true
    _all?: true
  }

  export type BlindIndexAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlindIndex to aggregate.
     */
    where?: BlindIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlindIndices to fetch.
     */
    orderBy?: BlindIndexOrderByWithRelationInput | BlindIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlindIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlindIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlindIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlindIndices
    **/
    _count?: true | BlindIndexCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlindIndexMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlindIndexMaxAggregateInputType
  }

  export type GetBlindIndexAggregateType<T extends BlindIndexAggregateArgs> = {
        [P in keyof T & keyof AggregateBlindIndex]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlindIndex[P]>
      : GetScalarType<T[P], AggregateBlindIndex[P]>
  }




  export type BlindIndexGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlindIndexWhereInput
    orderBy?: BlindIndexOrderByWithAggregationInput | BlindIndexOrderByWithAggregationInput[]
    by: BlindIndexScalarFieldEnum[] | BlindIndexScalarFieldEnum
    having?: BlindIndexScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlindIndexCountAggregateInputType | true
    _min?: BlindIndexMinAggregateInputType
    _max?: BlindIndexMaxAggregateInputType
  }

  export type BlindIndexGroupByOutputType = {
    id: string
    hash: string
    recordId: string
    model: string
    field: string
    _count: BlindIndexCountAggregateOutputType | null
    _min: BlindIndexMinAggregateOutputType | null
    _max: BlindIndexMaxAggregateOutputType | null
  }

  type GetBlindIndexGroupByPayload<T extends BlindIndexGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlindIndexGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlindIndexGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlindIndexGroupByOutputType[P]>
            : GetScalarType<T[P], BlindIndexGroupByOutputType[P]>
        }
      >
    >


  export type BlindIndexSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    recordId?: boolean
    model?: boolean
    field?: boolean
  }, ExtArgs["result"]["blindIndex"]>

  export type BlindIndexSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    recordId?: boolean
    model?: boolean
    field?: boolean
  }, ExtArgs["result"]["blindIndex"]>

  export type BlindIndexSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hash?: boolean
    recordId?: boolean
    model?: boolean
    field?: boolean
  }, ExtArgs["result"]["blindIndex"]>

  export type BlindIndexSelectScalar = {
    id?: boolean
    hash?: boolean
    recordId?: boolean
    model?: boolean
    field?: boolean
  }

  export type BlindIndexOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hash" | "recordId" | "model" | "field", ExtArgs["result"]["blindIndex"]>

  export type $BlindIndexPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlindIndex"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hash: string
      recordId: string
      model: string
      field: string
    }, ExtArgs["result"]["blindIndex"]>
    composites: {}
  }

  type BlindIndexGetPayload<S extends boolean | null | undefined | BlindIndexDefaultArgs> = $Result.GetResult<Prisma.$BlindIndexPayload, S>

  type BlindIndexCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlindIndexFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlindIndexCountAggregateInputType | true
    }

  export interface BlindIndexDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlindIndex'], meta: { name: 'BlindIndex' } }
    /**
     * Find zero or one BlindIndex that matches the filter.
     * @param {BlindIndexFindUniqueArgs} args - Arguments to find a BlindIndex
     * @example
     * // Get one BlindIndex
     * const blindIndex = await prisma.blindIndex.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlindIndexFindUniqueArgs>(args: SelectSubset<T, BlindIndexFindUniqueArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlindIndex that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlindIndexFindUniqueOrThrowArgs} args - Arguments to find a BlindIndex
     * @example
     * // Get one BlindIndex
     * const blindIndex = await prisma.blindIndex.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlindIndexFindUniqueOrThrowArgs>(args: SelectSubset<T, BlindIndexFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlindIndex that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexFindFirstArgs} args - Arguments to find a BlindIndex
     * @example
     * // Get one BlindIndex
     * const blindIndex = await prisma.blindIndex.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlindIndexFindFirstArgs>(args?: SelectSubset<T, BlindIndexFindFirstArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlindIndex that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexFindFirstOrThrowArgs} args - Arguments to find a BlindIndex
     * @example
     * // Get one BlindIndex
     * const blindIndex = await prisma.blindIndex.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlindIndexFindFirstOrThrowArgs>(args?: SelectSubset<T, BlindIndexFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlindIndices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlindIndices
     * const blindIndices = await prisma.blindIndex.findMany()
     * 
     * // Get first 10 BlindIndices
     * const blindIndices = await prisma.blindIndex.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blindIndexWithIdOnly = await prisma.blindIndex.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlindIndexFindManyArgs>(args?: SelectSubset<T, BlindIndexFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlindIndex.
     * @param {BlindIndexCreateArgs} args - Arguments to create a BlindIndex.
     * @example
     * // Create one BlindIndex
     * const BlindIndex = await prisma.blindIndex.create({
     *   data: {
     *     // ... data to create a BlindIndex
     *   }
     * })
     * 
     */
    create<T extends BlindIndexCreateArgs>(args: SelectSubset<T, BlindIndexCreateArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlindIndices.
     * @param {BlindIndexCreateManyArgs} args - Arguments to create many BlindIndices.
     * @example
     * // Create many BlindIndices
     * const blindIndex = await prisma.blindIndex.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlindIndexCreateManyArgs>(args?: SelectSubset<T, BlindIndexCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlindIndices and returns the data saved in the database.
     * @param {BlindIndexCreateManyAndReturnArgs} args - Arguments to create many BlindIndices.
     * @example
     * // Create many BlindIndices
     * const blindIndex = await prisma.blindIndex.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlindIndices and only return the `id`
     * const blindIndexWithIdOnly = await prisma.blindIndex.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlindIndexCreateManyAndReturnArgs>(args?: SelectSubset<T, BlindIndexCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlindIndex.
     * @param {BlindIndexDeleteArgs} args - Arguments to delete one BlindIndex.
     * @example
     * // Delete one BlindIndex
     * const BlindIndex = await prisma.blindIndex.delete({
     *   where: {
     *     // ... filter to delete one BlindIndex
     *   }
     * })
     * 
     */
    delete<T extends BlindIndexDeleteArgs>(args: SelectSubset<T, BlindIndexDeleteArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlindIndex.
     * @param {BlindIndexUpdateArgs} args - Arguments to update one BlindIndex.
     * @example
     * // Update one BlindIndex
     * const blindIndex = await prisma.blindIndex.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlindIndexUpdateArgs>(args: SelectSubset<T, BlindIndexUpdateArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlindIndices.
     * @param {BlindIndexDeleteManyArgs} args - Arguments to filter BlindIndices to delete.
     * @example
     * // Delete a few BlindIndices
     * const { count } = await prisma.blindIndex.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlindIndexDeleteManyArgs>(args?: SelectSubset<T, BlindIndexDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlindIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlindIndices
     * const blindIndex = await prisma.blindIndex.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlindIndexUpdateManyArgs>(args: SelectSubset<T, BlindIndexUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlindIndices and returns the data updated in the database.
     * @param {BlindIndexUpdateManyAndReturnArgs} args - Arguments to update many BlindIndices.
     * @example
     * // Update many BlindIndices
     * const blindIndex = await prisma.blindIndex.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlindIndices and only return the `id`
     * const blindIndexWithIdOnly = await prisma.blindIndex.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlindIndexUpdateManyAndReturnArgs>(args: SelectSubset<T, BlindIndexUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlindIndex.
     * @param {BlindIndexUpsertArgs} args - Arguments to update or create a BlindIndex.
     * @example
     * // Update or create a BlindIndex
     * const blindIndex = await prisma.blindIndex.upsert({
     *   create: {
     *     // ... data to create a BlindIndex
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlindIndex we want to update
     *   }
     * })
     */
    upsert<T extends BlindIndexUpsertArgs>(args: SelectSubset<T, BlindIndexUpsertArgs<ExtArgs>>): Prisma__BlindIndexClient<$Result.GetResult<Prisma.$BlindIndexPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlindIndices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexCountArgs} args - Arguments to filter BlindIndices to count.
     * @example
     * // Count the number of BlindIndices
     * const count = await prisma.blindIndex.count({
     *   where: {
     *     // ... the filter for the BlindIndices we want to count
     *   }
     * })
    **/
    count<T extends BlindIndexCountArgs>(
      args?: Subset<T, BlindIndexCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlindIndexCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlindIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlindIndexAggregateArgs>(args: Subset<T, BlindIndexAggregateArgs>): Prisma.PrismaPromise<GetBlindIndexAggregateType<T>>

    /**
     * Group by BlindIndex.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlindIndexGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlindIndexGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlindIndexGroupByArgs['orderBy'] }
        : { orderBy?: BlindIndexGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlindIndexGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlindIndexGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlindIndex model
   */
  readonly fields: BlindIndexFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlindIndex.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlindIndexClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlindIndex model
   */
  interface BlindIndexFieldRefs {
    readonly id: FieldRef<"BlindIndex", 'String'>
    readonly hash: FieldRef<"BlindIndex", 'String'>
    readonly recordId: FieldRef<"BlindIndex", 'String'>
    readonly model: FieldRef<"BlindIndex", 'String'>
    readonly field: FieldRef<"BlindIndex", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlindIndex findUnique
   */
  export type BlindIndexFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * Filter, which BlindIndex to fetch.
     */
    where: BlindIndexWhereUniqueInput
  }

  /**
   * BlindIndex findUniqueOrThrow
   */
  export type BlindIndexFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * Filter, which BlindIndex to fetch.
     */
    where: BlindIndexWhereUniqueInput
  }

  /**
   * BlindIndex findFirst
   */
  export type BlindIndexFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * Filter, which BlindIndex to fetch.
     */
    where?: BlindIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlindIndices to fetch.
     */
    orderBy?: BlindIndexOrderByWithRelationInput | BlindIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlindIndices.
     */
    cursor?: BlindIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlindIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlindIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlindIndices.
     */
    distinct?: BlindIndexScalarFieldEnum | BlindIndexScalarFieldEnum[]
  }

  /**
   * BlindIndex findFirstOrThrow
   */
  export type BlindIndexFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * Filter, which BlindIndex to fetch.
     */
    where?: BlindIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlindIndices to fetch.
     */
    orderBy?: BlindIndexOrderByWithRelationInput | BlindIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlindIndices.
     */
    cursor?: BlindIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlindIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlindIndices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlindIndices.
     */
    distinct?: BlindIndexScalarFieldEnum | BlindIndexScalarFieldEnum[]
  }

  /**
   * BlindIndex findMany
   */
  export type BlindIndexFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * Filter, which BlindIndices to fetch.
     */
    where?: BlindIndexWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlindIndices to fetch.
     */
    orderBy?: BlindIndexOrderByWithRelationInput | BlindIndexOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlindIndices.
     */
    cursor?: BlindIndexWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlindIndices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlindIndices.
     */
    skip?: number
    distinct?: BlindIndexScalarFieldEnum | BlindIndexScalarFieldEnum[]
  }

  /**
   * BlindIndex create
   */
  export type BlindIndexCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * The data needed to create a BlindIndex.
     */
    data: XOR<BlindIndexCreateInput, BlindIndexUncheckedCreateInput>
  }

  /**
   * BlindIndex createMany
   */
  export type BlindIndexCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlindIndices.
     */
    data: BlindIndexCreateManyInput | BlindIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlindIndex createManyAndReturn
   */
  export type BlindIndexCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * The data used to create many BlindIndices.
     */
    data: BlindIndexCreateManyInput | BlindIndexCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlindIndex update
   */
  export type BlindIndexUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * The data needed to update a BlindIndex.
     */
    data: XOR<BlindIndexUpdateInput, BlindIndexUncheckedUpdateInput>
    /**
     * Choose, which BlindIndex to update.
     */
    where: BlindIndexWhereUniqueInput
  }

  /**
   * BlindIndex updateMany
   */
  export type BlindIndexUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlindIndices.
     */
    data: XOR<BlindIndexUpdateManyMutationInput, BlindIndexUncheckedUpdateManyInput>
    /**
     * Filter which BlindIndices to update
     */
    where?: BlindIndexWhereInput
    /**
     * Limit how many BlindIndices to update.
     */
    limit?: number
  }

  /**
   * BlindIndex updateManyAndReturn
   */
  export type BlindIndexUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * The data used to update BlindIndices.
     */
    data: XOR<BlindIndexUpdateManyMutationInput, BlindIndexUncheckedUpdateManyInput>
    /**
     * Filter which BlindIndices to update
     */
    where?: BlindIndexWhereInput
    /**
     * Limit how many BlindIndices to update.
     */
    limit?: number
  }

  /**
   * BlindIndex upsert
   */
  export type BlindIndexUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * The filter to search for the BlindIndex to update in case it exists.
     */
    where: BlindIndexWhereUniqueInput
    /**
     * In case the BlindIndex found by the `where` argument doesn't exist, create a new BlindIndex with this data.
     */
    create: XOR<BlindIndexCreateInput, BlindIndexUncheckedCreateInput>
    /**
     * In case the BlindIndex was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlindIndexUpdateInput, BlindIndexUncheckedUpdateInput>
  }

  /**
   * BlindIndex delete
   */
  export type BlindIndexDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
    /**
     * Filter which BlindIndex to delete.
     */
    where: BlindIndexWhereUniqueInput
  }

  /**
   * BlindIndex deleteMany
   */
  export type BlindIndexDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlindIndices to delete
     */
    where?: BlindIndexWhereInput
    /**
     * Limit how many BlindIndices to delete.
     */
    limit?: number
  }

  /**
   * BlindIndex without action
   */
  export type BlindIndexDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlindIndex
     */
    select?: BlindIndexSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlindIndex
     */
    omit?: BlindIndexOmit<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigAvgAggregateOutputType = {
    fuzzyThreshold: number | null
  }

  export type SystemConfigSumAggregateOutputType = {
    fuzzyThreshold: number | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    fuzzyThreshold: number | null
    phoneticAlgorithm: string | null
    semanticContext: string | null
    updatedAt: Date | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    fuzzyThreshold: number | null
    phoneticAlgorithm: string | null
    semanticContext: string | null
    updatedAt: Date | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    key: number
    fuzzyThreshold: number
    phoneticAlgorithm: number
    semanticContext: number
    updatedAt: number
    _all: number
  }


  export type SystemConfigAvgAggregateInputType = {
    fuzzyThreshold?: true
  }

  export type SystemConfigSumAggregateInputType = {
    fuzzyThreshold?: true
  }

  export type SystemConfigMinAggregateInputType = {
    id?: true
    key?: true
    fuzzyThreshold?: true
    phoneticAlgorithm?: true
    semanticContext?: true
    updatedAt?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    key?: true
    fuzzyThreshold?: true
    phoneticAlgorithm?: true
    semanticContext?: true
    updatedAt?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    key?: true
    fuzzyThreshold?: true
    phoneticAlgorithm?: true
    semanticContext?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _avg?: SystemConfigAvgAggregateInputType
    _sum?: SystemConfigSumAggregateInputType
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    key: string
    fuzzyThreshold: number
    phoneticAlgorithm: string
    semanticContext: string | null
    updatedAt: Date
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    fuzzyThreshold?: boolean
    phoneticAlgorithm?: boolean
    semanticContext?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    fuzzyThreshold?: boolean
    phoneticAlgorithm?: boolean
    semanticContext?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    fuzzyThreshold?: boolean
    phoneticAlgorithm?: boolean
    semanticContext?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    key?: boolean
    fuzzyThreshold?: boolean
    phoneticAlgorithm?: boolean
    semanticContext?: boolean
    updatedAt?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "fuzzyThreshold" | "phoneticAlgorithm" | "semanticContext" | "updatedAt", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      fuzzyThreshold: number
      phoneticAlgorithm: string
      semanticContext: string | null
      updatedAt: Date
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly key: FieldRef<"SystemConfig", 'String'>
    readonly fuzzyThreshold: FieldRef<"SystemConfig", 'Float'>
    readonly phoneticAlgorithm: FieldRef<"SystemConfig", 'String'>
    readonly semanticContext: FieldRef<"SystemConfig", 'String'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Model RiskProfile
   */

  export type AggregateRiskProfile = {
    _count: RiskProfileCountAggregateOutputType | null
    _avg: RiskProfileAvgAggregateOutputType | null
    _sum: RiskProfileSumAggregateOutputType | null
    _min: RiskProfileMinAggregateOutputType | null
    _max: RiskProfileMaxAggregateOutputType | null
  }

  export type RiskProfileAvgAggregateOutputType = {
    bqClientId: number | null
    avgMonthlyVolume: Decimal | null
    volatilityScore: Decimal | null
    riskScore: number | null
  }

  export type RiskProfileSumAggregateOutputType = {
    bqClientId: number | null
    avgMonthlyVolume: Decimal | null
    volatilityScore: Decimal | null
    riskScore: number | null
  }

  export type RiskProfileMinAggregateOutputType = {
    id: string | null
    monitoringJobId: string | null
    bqClientId: number | null
    avgMonthlyVolume: Decimal | null
    volatilityScore: Decimal | null
    riskScore: number | null
    lastAnalysed: Date | null
  }

  export type RiskProfileMaxAggregateOutputType = {
    id: string | null
    monitoringJobId: string | null
    bqClientId: number | null
    avgMonthlyVolume: Decimal | null
    volatilityScore: Decimal | null
    riskScore: number | null
    lastAnalysed: Date | null
  }

  export type RiskProfileCountAggregateOutputType = {
    id: number
    monitoringJobId: number
    bqClientId: number
    avgMonthlyVolume: number
    volatilityScore: number
    riskScore: number
    lastAnalysed: number
    _all: number
  }


  export type RiskProfileAvgAggregateInputType = {
    bqClientId?: true
    avgMonthlyVolume?: true
    volatilityScore?: true
    riskScore?: true
  }

  export type RiskProfileSumAggregateInputType = {
    bqClientId?: true
    avgMonthlyVolume?: true
    volatilityScore?: true
    riskScore?: true
  }

  export type RiskProfileMinAggregateInputType = {
    id?: true
    monitoringJobId?: true
    bqClientId?: true
    avgMonthlyVolume?: true
    volatilityScore?: true
    riskScore?: true
    lastAnalysed?: true
  }

  export type RiskProfileMaxAggregateInputType = {
    id?: true
    monitoringJobId?: true
    bqClientId?: true
    avgMonthlyVolume?: true
    volatilityScore?: true
    riskScore?: true
    lastAnalysed?: true
  }

  export type RiskProfileCountAggregateInputType = {
    id?: true
    monitoringJobId?: true
    bqClientId?: true
    avgMonthlyVolume?: true
    volatilityScore?: true
    riskScore?: true
    lastAnalysed?: true
    _all?: true
  }

  export type RiskProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskProfile to aggregate.
     */
    where?: RiskProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskProfiles to fetch.
     */
    orderBy?: RiskProfileOrderByWithRelationInput | RiskProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskProfiles
    **/
    _count?: true | RiskProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskProfileMaxAggregateInputType
  }

  export type GetRiskProfileAggregateType<T extends RiskProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskProfile[P]>
      : GetScalarType<T[P], AggregateRiskProfile[P]>
  }




  export type RiskProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskProfileWhereInput
    orderBy?: RiskProfileOrderByWithAggregationInput | RiskProfileOrderByWithAggregationInput[]
    by: RiskProfileScalarFieldEnum[] | RiskProfileScalarFieldEnum
    having?: RiskProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskProfileCountAggregateInputType | true
    _avg?: RiskProfileAvgAggregateInputType
    _sum?: RiskProfileSumAggregateInputType
    _min?: RiskProfileMinAggregateInputType
    _max?: RiskProfileMaxAggregateInputType
  }

  export type RiskProfileGroupByOutputType = {
    id: string
    monitoringJobId: string
    bqClientId: number | null
    avgMonthlyVolume: Decimal | null
    volatilityScore: Decimal | null
    riskScore: number | null
    lastAnalysed: Date
    _count: RiskProfileCountAggregateOutputType | null
    _avg: RiskProfileAvgAggregateOutputType | null
    _sum: RiskProfileSumAggregateOutputType | null
    _min: RiskProfileMinAggregateOutputType | null
    _max: RiskProfileMaxAggregateOutputType | null
  }

  type GetRiskProfileGroupByPayload<T extends RiskProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskProfileGroupByOutputType[P]>
            : GetScalarType<T[P], RiskProfileGroupByOutputType[P]>
        }
      >
    >


  export type RiskProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitoringJobId?: boolean
    bqClientId?: boolean
    avgMonthlyVolume?: boolean
    volatilityScore?: boolean
    riskScore?: boolean
    lastAnalysed?: boolean
    alerts?: boolean | RiskProfile$alertsArgs<ExtArgs>
    monitoringJob?: boolean | MonitoringJobDefaultArgs<ExtArgs>
    _count?: boolean | RiskProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskProfile"]>

  export type RiskProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitoringJobId?: boolean
    bqClientId?: boolean
    avgMonthlyVolume?: boolean
    volatilityScore?: boolean
    riskScore?: boolean
    lastAnalysed?: boolean
    monitoringJob?: boolean | MonitoringJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskProfile"]>

  export type RiskProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitoringJobId?: boolean
    bqClientId?: boolean
    avgMonthlyVolume?: boolean
    volatilityScore?: boolean
    riskScore?: boolean
    lastAnalysed?: boolean
    monitoringJob?: boolean | MonitoringJobDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskProfile"]>

  export type RiskProfileSelectScalar = {
    id?: boolean
    monitoringJobId?: boolean
    bqClientId?: boolean
    avgMonthlyVolume?: boolean
    volatilityScore?: boolean
    riskScore?: boolean
    lastAnalysed?: boolean
  }

  export type RiskProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monitoringJobId" | "bqClientId" | "avgMonthlyVolume" | "volatilityScore" | "riskScore" | "lastAnalysed", ExtArgs["result"]["riskProfile"]>
  export type RiskProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | RiskProfile$alertsArgs<ExtArgs>
    monitoringJob?: boolean | MonitoringJobDefaultArgs<ExtArgs>
    _count?: boolean | RiskProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RiskProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringJob?: boolean | MonitoringJobDefaultArgs<ExtArgs>
  }
  export type RiskProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringJob?: boolean | MonitoringJobDefaultArgs<ExtArgs>
  }

  export type $RiskProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskProfile"
    objects: {
      alerts: Prisma.$RiskAlertPayload<ExtArgs>[]
      monitoringJob: Prisma.$MonitoringJobPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monitoringJobId: string
      bqClientId: number | null
      avgMonthlyVolume: Prisma.Decimal | null
      volatilityScore: Prisma.Decimal | null
      riskScore: number | null
      lastAnalysed: Date
    }, ExtArgs["result"]["riskProfile"]>
    composites: {}
  }

  type RiskProfileGetPayload<S extends boolean | null | undefined | RiskProfileDefaultArgs> = $Result.GetResult<Prisma.$RiskProfilePayload, S>

  type RiskProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskProfileCountAggregateInputType | true
    }

  export interface RiskProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskProfile'], meta: { name: 'RiskProfile' } }
    /**
     * Find zero or one RiskProfile that matches the filter.
     * @param {RiskProfileFindUniqueArgs} args - Arguments to find a RiskProfile
     * @example
     * // Get one RiskProfile
     * const riskProfile = await prisma.riskProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskProfileFindUniqueArgs>(args: SelectSubset<T, RiskProfileFindUniqueArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskProfileFindUniqueOrThrowArgs} args - Arguments to find a RiskProfile
     * @example
     * // Get one RiskProfile
     * const riskProfile = await prisma.riskProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileFindFirstArgs} args - Arguments to find a RiskProfile
     * @example
     * // Get one RiskProfile
     * const riskProfile = await prisma.riskProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskProfileFindFirstArgs>(args?: SelectSubset<T, RiskProfileFindFirstArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileFindFirstOrThrowArgs} args - Arguments to find a RiskProfile
     * @example
     * // Get one RiskProfile
     * const riskProfile = await prisma.riskProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskProfiles
     * const riskProfiles = await prisma.riskProfile.findMany()
     * 
     * // Get first 10 RiskProfiles
     * const riskProfiles = await prisma.riskProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskProfileWithIdOnly = await prisma.riskProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskProfileFindManyArgs>(args?: SelectSubset<T, RiskProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskProfile.
     * @param {RiskProfileCreateArgs} args - Arguments to create a RiskProfile.
     * @example
     * // Create one RiskProfile
     * const RiskProfile = await prisma.riskProfile.create({
     *   data: {
     *     // ... data to create a RiskProfile
     *   }
     * })
     * 
     */
    create<T extends RiskProfileCreateArgs>(args: SelectSubset<T, RiskProfileCreateArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskProfiles.
     * @param {RiskProfileCreateManyArgs} args - Arguments to create many RiskProfiles.
     * @example
     * // Create many RiskProfiles
     * const riskProfile = await prisma.riskProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskProfileCreateManyArgs>(args?: SelectSubset<T, RiskProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskProfiles and returns the data saved in the database.
     * @param {RiskProfileCreateManyAndReturnArgs} args - Arguments to create many RiskProfiles.
     * @example
     * // Create many RiskProfiles
     * const riskProfile = await prisma.riskProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskProfiles and only return the `id`
     * const riskProfileWithIdOnly = await prisma.riskProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskProfile.
     * @param {RiskProfileDeleteArgs} args - Arguments to delete one RiskProfile.
     * @example
     * // Delete one RiskProfile
     * const RiskProfile = await prisma.riskProfile.delete({
     *   where: {
     *     // ... filter to delete one RiskProfile
     *   }
     * })
     * 
     */
    delete<T extends RiskProfileDeleteArgs>(args: SelectSubset<T, RiskProfileDeleteArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskProfile.
     * @param {RiskProfileUpdateArgs} args - Arguments to update one RiskProfile.
     * @example
     * // Update one RiskProfile
     * const riskProfile = await prisma.riskProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskProfileUpdateArgs>(args: SelectSubset<T, RiskProfileUpdateArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskProfiles.
     * @param {RiskProfileDeleteManyArgs} args - Arguments to filter RiskProfiles to delete.
     * @example
     * // Delete a few RiskProfiles
     * const { count } = await prisma.riskProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskProfileDeleteManyArgs>(args?: SelectSubset<T, RiskProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskProfiles
     * const riskProfile = await prisma.riskProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskProfileUpdateManyArgs>(args: SelectSubset<T, RiskProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskProfiles and returns the data updated in the database.
     * @param {RiskProfileUpdateManyAndReturnArgs} args - Arguments to update many RiskProfiles.
     * @example
     * // Update many RiskProfiles
     * const riskProfile = await prisma.riskProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskProfiles and only return the `id`
     * const riskProfileWithIdOnly = await prisma.riskProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskProfile.
     * @param {RiskProfileUpsertArgs} args - Arguments to update or create a RiskProfile.
     * @example
     * // Update or create a RiskProfile
     * const riskProfile = await prisma.riskProfile.upsert({
     *   create: {
     *     // ... data to create a RiskProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskProfile we want to update
     *   }
     * })
     */
    upsert<T extends RiskProfileUpsertArgs>(args: SelectSubset<T, RiskProfileUpsertArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileCountArgs} args - Arguments to filter RiskProfiles to count.
     * @example
     * // Count the number of RiskProfiles
     * const count = await prisma.riskProfile.count({
     *   where: {
     *     // ... the filter for the RiskProfiles we want to count
     *   }
     * })
    **/
    count<T extends RiskProfileCountArgs>(
      args?: Subset<T, RiskProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskProfileAggregateArgs>(args: Subset<T, RiskProfileAggregateArgs>): Prisma.PrismaPromise<GetRiskProfileAggregateType<T>>

    /**
     * Group by RiskProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskProfileGroupByArgs['orderBy'] }
        : { orderBy?: RiskProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskProfile model
   */
  readonly fields: RiskProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alerts<T extends RiskProfile$alertsArgs<ExtArgs> = {}>(args?: Subset<T, RiskProfile$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monitoringJob<T extends MonitoringJobDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonitoringJobDefaultArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskProfile model
   */
  interface RiskProfileFieldRefs {
    readonly id: FieldRef<"RiskProfile", 'String'>
    readonly monitoringJobId: FieldRef<"RiskProfile", 'String'>
    readonly bqClientId: FieldRef<"RiskProfile", 'Int'>
    readonly avgMonthlyVolume: FieldRef<"RiskProfile", 'Decimal'>
    readonly volatilityScore: FieldRef<"RiskProfile", 'Decimal'>
    readonly riskScore: FieldRef<"RiskProfile", 'Float'>
    readonly lastAnalysed: FieldRef<"RiskProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskProfile findUnique
   */
  export type RiskProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * Filter, which RiskProfile to fetch.
     */
    where: RiskProfileWhereUniqueInput
  }

  /**
   * RiskProfile findUniqueOrThrow
   */
  export type RiskProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * Filter, which RiskProfile to fetch.
     */
    where: RiskProfileWhereUniqueInput
  }

  /**
   * RiskProfile findFirst
   */
  export type RiskProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * Filter, which RiskProfile to fetch.
     */
    where?: RiskProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskProfiles to fetch.
     */
    orderBy?: RiskProfileOrderByWithRelationInput | RiskProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskProfiles.
     */
    cursor?: RiskProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskProfiles.
     */
    distinct?: RiskProfileScalarFieldEnum | RiskProfileScalarFieldEnum[]
  }

  /**
   * RiskProfile findFirstOrThrow
   */
  export type RiskProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * Filter, which RiskProfile to fetch.
     */
    where?: RiskProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskProfiles to fetch.
     */
    orderBy?: RiskProfileOrderByWithRelationInput | RiskProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskProfiles.
     */
    cursor?: RiskProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskProfiles.
     */
    distinct?: RiskProfileScalarFieldEnum | RiskProfileScalarFieldEnum[]
  }

  /**
   * RiskProfile findMany
   */
  export type RiskProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * Filter, which RiskProfiles to fetch.
     */
    where?: RiskProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskProfiles to fetch.
     */
    orderBy?: RiskProfileOrderByWithRelationInput | RiskProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskProfiles.
     */
    cursor?: RiskProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskProfiles.
     */
    skip?: number
    distinct?: RiskProfileScalarFieldEnum | RiskProfileScalarFieldEnum[]
  }

  /**
   * RiskProfile create
   */
  export type RiskProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskProfile.
     */
    data: XOR<RiskProfileCreateInput, RiskProfileUncheckedCreateInput>
  }

  /**
   * RiskProfile createMany
   */
  export type RiskProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskProfiles.
     */
    data: RiskProfileCreateManyInput | RiskProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskProfile createManyAndReturn
   */
  export type RiskProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * The data used to create many RiskProfiles.
     */
    data: RiskProfileCreateManyInput | RiskProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskProfile update
   */
  export type RiskProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskProfile.
     */
    data: XOR<RiskProfileUpdateInput, RiskProfileUncheckedUpdateInput>
    /**
     * Choose, which RiskProfile to update.
     */
    where: RiskProfileWhereUniqueInput
  }

  /**
   * RiskProfile updateMany
   */
  export type RiskProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskProfiles.
     */
    data: XOR<RiskProfileUpdateManyMutationInput, RiskProfileUncheckedUpdateManyInput>
    /**
     * Filter which RiskProfiles to update
     */
    where?: RiskProfileWhereInput
    /**
     * Limit how many RiskProfiles to update.
     */
    limit?: number
  }

  /**
   * RiskProfile updateManyAndReturn
   */
  export type RiskProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * The data used to update RiskProfiles.
     */
    data: XOR<RiskProfileUpdateManyMutationInput, RiskProfileUncheckedUpdateManyInput>
    /**
     * Filter which RiskProfiles to update
     */
    where?: RiskProfileWhereInput
    /**
     * Limit how many RiskProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskProfile upsert
   */
  export type RiskProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskProfile to update in case it exists.
     */
    where: RiskProfileWhereUniqueInput
    /**
     * In case the RiskProfile found by the `where` argument doesn't exist, create a new RiskProfile with this data.
     */
    create: XOR<RiskProfileCreateInput, RiskProfileUncheckedCreateInput>
    /**
     * In case the RiskProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskProfileUpdateInput, RiskProfileUncheckedUpdateInput>
  }

  /**
   * RiskProfile delete
   */
  export type RiskProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
    /**
     * Filter which RiskProfile to delete.
     */
    where: RiskProfileWhereUniqueInput
  }

  /**
   * RiskProfile deleteMany
   */
  export type RiskProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskProfiles to delete
     */
    where?: RiskProfileWhereInput
    /**
     * Limit how many RiskProfiles to delete.
     */
    limit?: number
  }

  /**
   * RiskProfile.alerts
   */
  export type RiskProfile$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    where?: RiskAlertWhereInput
    orderBy?: RiskAlertOrderByWithRelationInput | RiskAlertOrderByWithRelationInput[]
    cursor?: RiskAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskAlertScalarFieldEnum | RiskAlertScalarFieldEnum[]
  }

  /**
   * RiskProfile without action
   */
  export type RiskProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskProfile
     */
    select?: RiskProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskProfile
     */
    omit?: RiskProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskProfileInclude<ExtArgs> | null
  }


  /**
   * Model RiskAlert
   */

  export type AggregateRiskAlert = {
    _count: RiskAlertCountAggregateOutputType | null
    _min: RiskAlertMinAggregateOutputType | null
    _max: RiskAlertMaxAggregateOutputType | null
  }

  export type RiskAlertMinAggregateOutputType = {
    id: string | null
    riskProfileId: string | null
    type: string | null
    severity: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RiskAlertMaxAggregateOutputType = {
    id: string | null
    riskProfileId: string | null
    type: string | null
    severity: string | null
    description: string | null
    createdAt: Date | null
  }

  export type RiskAlertCountAggregateOutputType = {
    id: number
    riskProfileId: number
    type: number
    severity: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type RiskAlertMinAggregateInputType = {
    id?: true
    riskProfileId?: true
    type?: true
    severity?: true
    description?: true
    createdAt?: true
  }

  export type RiskAlertMaxAggregateInputType = {
    id?: true
    riskProfileId?: true
    type?: true
    severity?: true
    description?: true
    createdAt?: true
  }

  export type RiskAlertCountAggregateInputType = {
    id?: true
    riskProfileId?: true
    type?: true
    severity?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type RiskAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAlert to aggregate.
     */
    where?: RiskAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAlerts to fetch.
     */
    orderBy?: RiskAlertOrderByWithRelationInput | RiskAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskAlerts
    **/
    _count?: true | RiskAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskAlertMaxAggregateInputType
  }

  export type GetRiskAlertAggregateType<T extends RiskAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskAlert[P]>
      : GetScalarType<T[P], AggregateRiskAlert[P]>
  }




  export type RiskAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskAlertWhereInput
    orderBy?: RiskAlertOrderByWithAggregationInput | RiskAlertOrderByWithAggregationInput[]
    by: RiskAlertScalarFieldEnum[] | RiskAlertScalarFieldEnum
    having?: RiskAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskAlertCountAggregateInputType | true
    _min?: RiskAlertMinAggregateInputType
    _max?: RiskAlertMaxAggregateInputType
  }

  export type RiskAlertGroupByOutputType = {
    id: string
    riskProfileId: string
    type: string
    severity: string
    description: string
    metadata: JsonValue | null
    createdAt: Date
    _count: RiskAlertCountAggregateOutputType | null
    _min: RiskAlertMinAggregateOutputType | null
    _max: RiskAlertMaxAggregateOutputType | null
  }

  type GetRiskAlertGroupByPayload<T extends RiskAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskAlertGroupByOutputType[P]>
            : GetScalarType<T[P], RiskAlertGroupByOutputType[P]>
        }
      >
    >


  export type RiskAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riskProfileId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    riskProfile?: boolean | RiskProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAlert"]>

  export type RiskAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riskProfileId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    riskProfile?: boolean | RiskProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAlert"]>

  export type RiskAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riskProfileId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    riskProfile?: boolean | RiskProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskAlert"]>

  export type RiskAlertSelectScalar = {
    id?: boolean
    riskProfileId?: boolean
    type?: boolean
    severity?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type RiskAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "riskProfileId" | "type" | "severity" | "description" | "metadata" | "createdAt", ExtArgs["result"]["riskAlert"]>
  export type RiskAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskProfile?: boolean | RiskProfileDefaultArgs<ExtArgs>
  }
  export type RiskAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskProfile?: boolean | RiskProfileDefaultArgs<ExtArgs>
  }
  export type RiskAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    riskProfile?: boolean | RiskProfileDefaultArgs<ExtArgs>
  }

  export type $RiskAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskAlert"
    objects: {
      riskProfile: Prisma.$RiskProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      riskProfileId: string
      type: string
      severity: string
      description: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["riskAlert"]>
    composites: {}
  }

  type RiskAlertGetPayload<S extends boolean | null | undefined | RiskAlertDefaultArgs> = $Result.GetResult<Prisma.$RiskAlertPayload, S>

  type RiskAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskAlertCountAggregateInputType | true
    }

  export interface RiskAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskAlert'], meta: { name: 'RiskAlert' } }
    /**
     * Find zero or one RiskAlert that matches the filter.
     * @param {RiskAlertFindUniqueArgs} args - Arguments to find a RiskAlert
     * @example
     * // Get one RiskAlert
     * const riskAlert = await prisma.riskAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskAlertFindUniqueArgs>(args: SelectSubset<T, RiskAlertFindUniqueArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskAlertFindUniqueOrThrowArgs} args - Arguments to find a RiskAlert
     * @example
     * // Get one RiskAlert
     * const riskAlert = await prisma.riskAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertFindFirstArgs} args - Arguments to find a RiskAlert
     * @example
     * // Get one RiskAlert
     * const riskAlert = await prisma.riskAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskAlertFindFirstArgs>(args?: SelectSubset<T, RiskAlertFindFirstArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertFindFirstOrThrowArgs} args - Arguments to find a RiskAlert
     * @example
     * // Get one RiskAlert
     * const riskAlert = await prisma.riskAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskAlerts
     * const riskAlerts = await prisma.riskAlert.findMany()
     * 
     * // Get first 10 RiskAlerts
     * const riskAlerts = await prisma.riskAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskAlertWithIdOnly = await prisma.riskAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskAlertFindManyArgs>(args?: SelectSubset<T, RiskAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskAlert.
     * @param {RiskAlertCreateArgs} args - Arguments to create a RiskAlert.
     * @example
     * // Create one RiskAlert
     * const RiskAlert = await prisma.riskAlert.create({
     *   data: {
     *     // ... data to create a RiskAlert
     *   }
     * })
     * 
     */
    create<T extends RiskAlertCreateArgs>(args: SelectSubset<T, RiskAlertCreateArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskAlerts.
     * @param {RiskAlertCreateManyArgs} args - Arguments to create many RiskAlerts.
     * @example
     * // Create many RiskAlerts
     * const riskAlert = await prisma.riskAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskAlertCreateManyArgs>(args?: SelectSubset<T, RiskAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskAlerts and returns the data saved in the database.
     * @param {RiskAlertCreateManyAndReturnArgs} args - Arguments to create many RiskAlerts.
     * @example
     * // Create many RiskAlerts
     * const riskAlert = await prisma.riskAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskAlerts and only return the `id`
     * const riskAlertWithIdOnly = await prisma.riskAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskAlert.
     * @param {RiskAlertDeleteArgs} args - Arguments to delete one RiskAlert.
     * @example
     * // Delete one RiskAlert
     * const RiskAlert = await prisma.riskAlert.delete({
     *   where: {
     *     // ... filter to delete one RiskAlert
     *   }
     * })
     * 
     */
    delete<T extends RiskAlertDeleteArgs>(args: SelectSubset<T, RiskAlertDeleteArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskAlert.
     * @param {RiskAlertUpdateArgs} args - Arguments to update one RiskAlert.
     * @example
     * // Update one RiskAlert
     * const riskAlert = await prisma.riskAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskAlertUpdateArgs>(args: SelectSubset<T, RiskAlertUpdateArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskAlerts.
     * @param {RiskAlertDeleteManyArgs} args - Arguments to filter RiskAlerts to delete.
     * @example
     * // Delete a few RiskAlerts
     * const { count } = await prisma.riskAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskAlertDeleteManyArgs>(args?: SelectSubset<T, RiskAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskAlerts
     * const riskAlert = await prisma.riskAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskAlertUpdateManyArgs>(args: SelectSubset<T, RiskAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAlerts and returns the data updated in the database.
     * @param {RiskAlertUpdateManyAndReturnArgs} args - Arguments to update many RiskAlerts.
     * @example
     * // Update many RiskAlerts
     * const riskAlert = await prisma.riskAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskAlerts and only return the `id`
     * const riskAlertWithIdOnly = await prisma.riskAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskAlert.
     * @param {RiskAlertUpsertArgs} args - Arguments to update or create a RiskAlert.
     * @example
     * // Update or create a RiskAlert
     * const riskAlert = await prisma.riskAlert.upsert({
     *   create: {
     *     // ... data to create a RiskAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskAlert we want to update
     *   }
     * })
     */
    upsert<T extends RiskAlertUpsertArgs>(args: SelectSubset<T, RiskAlertUpsertArgs<ExtArgs>>): Prisma__RiskAlertClient<$Result.GetResult<Prisma.$RiskAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertCountArgs} args - Arguments to filter RiskAlerts to count.
     * @example
     * // Count the number of RiskAlerts
     * const count = await prisma.riskAlert.count({
     *   where: {
     *     // ... the filter for the RiskAlerts we want to count
     *   }
     * })
    **/
    count<T extends RiskAlertCountArgs>(
      args?: Subset<T, RiskAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskAlertAggregateArgs>(args: Subset<T, RiskAlertAggregateArgs>): Prisma.PrismaPromise<GetRiskAlertAggregateType<T>>

    /**
     * Group by RiskAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskAlertGroupByArgs['orderBy'] }
        : { orderBy?: RiskAlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskAlert model
   */
  readonly fields: RiskAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    riskProfile<T extends RiskProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiskProfileDefaultArgs<ExtArgs>>): Prisma__RiskProfileClient<$Result.GetResult<Prisma.$RiskProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskAlert model
   */
  interface RiskAlertFieldRefs {
    readonly id: FieldRef<"RiskAlert", 'String'>
    readonly riskProfileId: FieldRef<"RiskAlert", 'String'>
    readonly type: FieldRef<"RiskAlert", 'String'>
    readonly severity: FieldRef<"RiskAlert", 'String'>
    readonly description: FieldRef<"RiskAlert", 'String'>
    readonly metadata: FieldRef<"RiskAlert", 'Json'>
    readonly createdAt: FieldRef<"RiskAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskAlert findUnique
   */
  export type RiskAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * Filter, which RiskAlert to fetch.
     */
    where: RiskAlertWhereUniqueInput
  }

  /**
   * RiskAlert findUniqueOrThrow
   */
  export type RiskAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * Filter, which RiskAlert to fetch.
     */
    where: RiskAlertWhereUniqueInput
  }

  /**
   * RiskAlert findFirst
   */
  export type RiskAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * Filter, which RiskAlert to fetch.
     */
    where?: RiskAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAlerts to fetch.
     */
    orderBy?: RiskAlertOrderByWithRelationInput | RiskAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAlerts.
     */
    cursor?: RiskAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAlerts.
     */
    distinct?: RiskAlertScalarFieldEnum | RiskAlertScalarFieldEnum[]
  }

  /**
   * RiskAlert findFirstOrThrow
   */
  export type RiskAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * Filter, which RiskAlert to fetch.
     */
    where?: RiskAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAlerts to fetch.
     */
    orderBy?: RiskAlertOrderByWithRelationInput | RiskAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAlerts.
     */
    cursor?: RiskAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAlerts.
     */
    distinct?: RiskAlertScalarFieldEnum | RiskAlertScalarFieldEnum[]
  }

  /**
   * RiskAlert findMany
   */
  export type RiskAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * Filter, which RiskAlerts to fetch.
     */
    where?: RiskAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAlerts to fetch.
     */
    orderBy?: RiskAlertOrderByWithRelationInput | RiskAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskAlerts.
     */
    cursor?: RiskAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAlerts.
     */
    skip?: number
    distinct?: RiskAlertScalarFieldEnum | RiskAlertScalarFieldEnum[]
  }

  /**
   * RiskAlert create
   */
  export type RiskAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskAlert.
     */
    data: XOR<RiskAlertCreateInput, RiskAlertUncheckedCreateInput>
  }

  /**
   * RiskAlert createMany
   */
  export type RiskAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskAlerts.
     */
    data: RiskAlertCreateManyInput | RiskAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskAlert createManyAndReturn
   */
  export type RiskAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * The data used to create many RiskAlerts.
     */
    data: RiskAlertCreateManyInput | RiskAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskAlert update
   */
  export type RiskAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskAlert.
     */
    data: XOR<RiskAlertUpdateInput, RiskAlertUncheckedUpdateInput>
    /**
     * Choose, which RiskAlert to update.
     */
    where: RiskAlertWhereUniqueInput
  }

  /**
   * RiskAlert updateMany
   */
  export type RiskAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskAlerts.
     */
    data: XOR<RiskAlertUpdateManyMutationInput, RiskAlertUncheckedUpdateManyInput>
    /**
     * Filter which RiskAlerts to update
     */
    where?: RiskAlertWhereInput
    /**
     * Limit how many RiskAlerts to update.
     */
    limit?: number
  }

  /**
   * RiskAlert updateManyAndReturn
   */
  export type RiskAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * The data used to update RiskAlerts.
     */
    data: XOR<RiskAlertUpdateManyMutationInput, RiskAlertUncheckedUpdateManyInput>
    /**
     * Filter which RiskAlerts to update
     */
    where?: RiskAlertWhereInput
    /**
     * Limit how many RiskAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskAlert upsert
   */
  export type RiskAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskAlert to update in case it exists.
     */
    where: RiskAlertWhereUniqueInput
    /**
     * In case the RiskAlert found by the `where` argument doesn't exist, create a new RiskAlert with this data.
     */
    create: XOR<RiskAlertCreateInput, RiskAlertUncheckedCreateInput>
    /**
     * In case the RiskAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskAlertUpdateInput, RiskAlertUncheckedUpdateInput>
  }

  /**
   * RiskAlert delete
   */
  export type RiskAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
    /**
     * Filter which RiskAlert to delete.
     */
    where: RiskAlertWhereUniqueInput
  }

  /**
   * RiskAlert deleteMany
   */
  export type RiskAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAlerts to delete
     */
    where?: RiskAlertWhereInput
    /**
     * Limit how many RiskAlerts to delete.
     */
    limit?: number
  }

  /**
   * RiskAlert without action
   */
  export type RiskAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAlert
     */
    select?: RiskAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAlert
     */
    omit?: RiskAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskAlertInclude<ExtArgs> | null
  }


  /**
   * Model WatchListClient
   */

  export type AggregateWatchListClient = {
    _count: WatchListClientCountAggregateOutputType | null
    _min: WatchListClientMinAggregateOutputType | null
    _max: WatchListClientMaxAggregateOutputType | null
  }

  export type WatchListClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    priority: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchListClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    priority: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WatchListClientCountAggregateOutputType = {
    id: number
    name: number
    priority: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WatchListClientMinAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchListClientMaxAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WatchListClientCountAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WatchListClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchListClient to aggregate.
     */
    where?: WatchListClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListClients to fetch.
     */
    orderBy?: WatchListClientOrderByWithRelationInput | WatchListClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchListClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchListClients
    **/
    _count?: true | WatchListClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchListClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchListClientMaxAggregateInputType
  }

  export type GetWatchListClientAggregateType<T extends WatchListClientAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchListClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchListClient[P]>
      : GetScalarType<T[P], AggregateWatchListClient[P]>
  }




  export type WatchListClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchListClientWhereInput
    orderBy?: WatchListClientOrderByWithAggregationInput | WatchListClientOrderByWithAggregationInput[]
    by: WatchListClientScalarFieldEnum[] | WatchListClientScalarFieldEnum
    having?: WatchListClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchListClientCountAggregateInputType | true
    _min?: WatchListClientMinAggregateInputType
    _max?: WatchListClientMaxAggregateInputType
  }

  export type WatchListClientGroupByOutputType = {
    id: string
    name: string
    priority: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: WatchListClientCountAggregateOutputType | null
    _min: WatchListClientMinAggregateOutputType | null
    _max: WatchListClientMaxAggregateOutputType | null
  }

  type GetWatchListClientGroupByPayload<T extends WatchListClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchListClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchListClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchListClientGroupByOutputType[P]>
            : GetScalarType<T[P], WatchListClientGroupByOutputType[P]>
        }
      >
    >


  export type WatchListClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priority?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    analyses?: boolean | WatchListClient$analysesArgs<ExtArgs>
    _count?: boolean | WatchListClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchListClient"]>

  export type WatchListClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priority?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["watchListClient"]>

  export type WatchListClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priority?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["watchListClient"]>

  export type WatchListClientSelectScalar = {
    id?: boolean
    name?: boolean
    priority?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WatchListClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priority" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["watchListClient"]>
  export type WatchListClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | WatchListClient$analysesArgs<ExtArgs>
    _count?: boolean | WatchListClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WatchListClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WatchListClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WatchListClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchListClient"
    objects: {
      analyses: Prisma.$PublicDataAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      priority: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["watchListClient"]>
    composites: {}
  }

  type WatchListClientGetPayload<S extends boolean | null | undefined | WatchListClientDefaultArgs> = $Result.GetResult<Prisma.$WatchListClientPayload, S>

  type WatchListClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchListClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchListClientCountAggregateInputType | true
    }

  export interface WatchListClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchListClient'], meta: { name: 'WatchListClient' } }
    /**
     * Find zero or one WatchListClient that matches the filter.
     * @param {WatchListClientFindUniqueArgs} args - Arguments to find a WatchListClient
     * @example
     * // Get one WatchListClient
     * const watchListClient = await prisma.watchListClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchListClientFindUniqueArgs>(args: SelectSubset<T, WatchListClientFindUniqueArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchListClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchListClientFindUniqueOrThrowArgs} args - Arguments to find a WatchListClient
     * @example
     * // Get one WatchListClient
     * const watchListClient = await prisma.watchListClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchListClientFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchListClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchListClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientFindFirstArgs} args - Arguments to find a WatchListClient
     * @example
     * // Get one WatchListClient
     * const watchListClient = await prisma.watchListClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchListClientFindFirstArgs>(args?: SelectSubset<T, WatchListClientFindFirstArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchListClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientFindFirstOrThrowArgs} args - Arguments to find a WatchListClient
     * @example
     * // Get one WatchListClient
     * const watchListClient = await prisma.watchListClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchListClientFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchListClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchListClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchListClients
     * const watchListClients = await prisma.watchListClient.findMany()
     * 
     * // Get first 10 WatchListClients
     * const watchListClients = await prisma.watchListClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchListClientWithIdOnly = await prisma.watchListClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchListClientFindManyArgs>(args?: SelectSubset<T, WatchListClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchListClient.
     * @param {WatchListClientCreateArgs} args - Arguments to create a WatchListClient.
     * @example
     * // Create one WatchListClient
     * const WatchListClient = await prisma.watchListClient.create({
     *   data: {
     *     // ... data to create a WatchListClient
     *   }
     * })
     * 
     */
    create<T extends WatchListClientCreateArgs>(args: SelectSubset<T, WatchListClientCreateArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchListClients.
     * @param {WatchListClientCreateManyArgs} args - Arguments to create many WatchListClients.
     * @example
     * // Create many WatchListClients
     * const watchListClient = await prisma.watchListClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchListClientCreateManyArgs>(args?: SelectSubset<T, WatchListClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchListClients and returns the data saved in the database.
     * @param {WatchListClientCreateManyAndReturnArgs} args - Arguments to create many WatchListClients.
     * @example
     * // Create many WatchListClients
     * const watchListClient = await prisma.watchListClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchListClients and only return the `id`
     * const watchListClientWithIdOnly = await prisma.watchListClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchListClientCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchListClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchListClient.
     * @param {WatchListClientDeleteArgs} args - Arguments to delete one WatchListClient.
     * @example
     * // Delete one WatchListClient
     * const WatchListClient = await prisma.watchListClient.delete({
     *   where: {
     *     // ... filter to delete one WatchListClient
     *   }
     * })
     * 
     */
    delete<T extends WatchListClientDeleteArgs>(args: SelectSubset<T, WatchListClientDeleteArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchListClient.
     * @param {WatchListClientUpdateArgs} args - Arguments to update one WatchListClient.
     * @example
     * // Update one WatchListClient
     * const watchListClient = await prisma.watchListClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchListClientUpdateArgs>(args: SelectSubset<T, WatchListClientUpdateArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchListClients.
     * @param {WatchListClientDeleteManyArgs} args - Arguments to filter WatchListClients to delete.
     * @example
     * // Delete a few WatchListClients
     * const { count } = await prisma.watchListClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchListClientDeleteManyArgs>(args?: SelectSubset<T, WatchListClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchListClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchListClients
     * const watchListClient = await prisma.watchListClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchListClientUpdateManyArgs>(args: SelectSubset<T, WatchListClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchListClients and returns the data updated in the database.
     * @param {WatchListClientUpdateManyAndReturnArgs} args - Arguments to update many WatchListClients.
     * @example
     * // Update many WatchListClients
     * const watchListClient = await prisma.watchListClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchListClients and only return the `id`
     * const watchListClientWithIdOnly = await prisma.watchListClient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchListClientUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchListClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchListClient.
     * @param {WatchListClientUpsertArgs} args - Arguments to update or create a WatchListClient.
     * @example
     * // Update or create a WatchListClient
     * const watchListClient = await prisma.watchListClient.upsert({
     *   create: {
     *     // ... data to create a WatchListClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchListClient we want to update
     *   }
     * })
     */
    upsert<T extends WatchListClientUpsertArgs>(args: SelectSubset<T, WatchListClientUpsertArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchListClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientCountArgs} args - Arguments to filter WatchListClients to count.
     * @example
     * // Count the number of WatchListClients
     * const count = await prisma.watchListClient.count({
     *   where: {
     *     // ... the filter for the WatchListClients we want to count
     *   }
     * })
    **/
    count<T extends WatchListClientCountArgs>(
      args?: Subset<T, WatchListClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchListClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchListClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchListClientAggregateArgs>(args: Subset<T, WatchListClientAggregateArgs>): Prisma.PrismaPromise<GetWatchListClientAggregateType<T>>

    /**
     * Group by WatchListClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchListClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchListClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchListClientGroupByArgs['orderBy'] }
        : { orderBy?: WatchListClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchListClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchListClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchListClient model
   */
  readonly fields: WatchListClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchListClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchListClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyses<T extends WatchListClient$analysesArgs<ExtArgs> = {}>(args?: Subset<T, WatchListClient$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchListClient model
   */
  interface WatchListClientFieldRefs {
    readonly id: FieldRef<"WatchListClient", 'String'>
    readonly name: FieldRef<"WatchListClient", 'String'>
    readonly priority: FieldRef<"WatchListClient", 'String'>
    readonly notes: FieldRef<"WatchListClient", 'String'>
    readonly createdAt: FieldRef<"WatchListClient", 'DateTime'>
    readonly updatedAt: FieldRef<"WatchListClient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchListClient findUnique
   */
  export type WatchListClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * Filter, which WatchListClient to fetch.
     */
    where: WatchListClientWhereUniqueInput
  }

  /**
   * WatchListClient findUniqueOrThrow
   */
  export type WatchListClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * Filter, which WatchListClient to fetch.
     */
    where: WatchListClientWhereUniqueInput
  }

  /**
   * WatchListClient findFirst
   */
  export type WatchListClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * Filter, which WatchListClient to fetch.
     */
    where?: WatchListClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListClients to fetch.
     */
    orderBy?: WatchListClientOrderByWithRelationInput | WatchListClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchListClients.
     */
    cursor?: WatchListClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchListClients.
     */
    distinct?: WatchListClientScalarFieldEnum | WatchListClientScalarFieldEnum[]
  }

  /**
   * WatchListClient findFirstOrThrow
   */
  export type WatchListClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * Filter, which WatchListClient to fetch.
     */
    where?: WatchListClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListClients to fetch.
     */
    orderBy?: WatchListClientOrderByWithRelationInput | WatchListClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchListClients.
     */
    cursor?: WatchListClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchListClients.
     */
    distinct?: WatchListClientScalarFieldEnum | WatchListClientScalarFieldEnum[]
  }

  /**
   * WatchListClient findMany
   */
  export type WatchListClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * Filter, which WatchListClients to fetch.
     */
    where?: WatchListClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchListClients to fetch.
     */
    orderBy?: WatchListClientOrderByWithRelationInput | WatchListClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchListClients.
     */
    cursor?: WatchListClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchListClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchListClients.
     */
    skip?: number
    distinct?: WatchListClientScalarFieldEnum | WatchListClientScalarFieldEnum[]
  }

  /**
   * WatchListClient create
   */
  export type WatchListClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchListClient.
     */
    data: XOR<WatchListClientCreateInput, WatchListClientUncheckedCreateInput>
  }

  /**
   * WatchListClient createMany
   */
  export type WatchListClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchListClients.
     */
    data: WatchListClientCreateManyInput | WatchListClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchListClient createManyAndReturn
   */
  export type WatchListClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * The data used to create many WatchListClients.
     */
    data: WatchListClientCreateManyInput | WatchListClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchListClient update
   */
  export type WatchListClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchListClient.
     */
    data: XOR<WatchListClientUpdateInput, WatchListClientUncheckedUpdateInput>
    /**
     * Choose, which WatchListClient to update.
     */
    where: WatchListClientWhereUniqueInput
  }

  /**
   * WatchListClient updateMany
   */
  export type WatchListClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchListClients.
     */
    data: XOR<WatchListClientUpdateManyMutationInput, WatchListClientUncheckedUpdateManyInput>
    /**
     * Filter which WatchListClients to update
     */
    where?: WatchListClientWhereInput
    /**
     * Limit how many WatchListClients to update.
     */
    limit?: number
  }

  /**
   * WatchListClient updateManyAndReturn
   */
  export type WatchListClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * The data used to update WatchListClients.
     */
    data: XOR<WatchListClientUpdateManyMutationInput, WatchListClientUncheckedUpdateManyInput>
    /**
     * Filter which WatchListClients to update
     */
    where?: WatchListClientWhereInput
    /**
     * Limit how many WatchListClients to update.
     */
    limit?: number
  }

  /**
   * WatchListClient upsert
   */
  export type WatchListClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchListClient to update in case it exists.
     */
    where: WatchListClientWhereUniqueInput
    /**
     * In case the WatchListClient found by the `where` argument doesn't exist, create a new WatchListClient with this data.
     */
    create: XOR<WatchListClientCreateInput, WatchListClientUncheckedCreateInput>
    /**
     * In case the WatchListClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchListClientUpdateInput, WatchListClientUncheckedUpdateInput>
  }

  /**
   * WatchListClient delete
   */
  export type WatchListClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    /**
     * Filter which WatchListClient to delete.
     */
    where: WatchListClientWhereUniqueInput
  }

  /**
   * WatchListClient deleteMany
   */
  export type WatchListClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchListClients to delete
     */
    where?: WatchListClientWhereInput
    /**
     * Limit how many WatchListClients to delete.
     */
    limit?: number
  }

  /**
   * WatchListClient.analyses
   */
  export type WatchListClient$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    where?: PublicDataAnalysisWhereInput
    orderBy?: PublicDataAnalysisOrderByWithRelationInput | PublicDataAnalysisOrderByWithRelationInput[]
    cursor?: PublicDataAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicDataAnalysisScalarFieldEnum | PublicDataAnalysisScalarFieldEnum[]
  }

  /**
   * WatchListClient without action
   */
  export type WatchListClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
  }


  /**
   * Model PublicDataAnalysis
   */

  export type AggregatePublicDataAnalysis = {
    _count: PublicDataAnalysisCountAggregateOutputType | null
    _min: PublicDataAnalysisMinAggregateOutputType | null
    _max: PublicDataAnalysisMaxAggregateOutputType | null
  }

  export type PublicDataAnalysisMinAggregateOutputType = {
    id: string | null
    monitoringJobId: string | null
    watchListClientId: string | null
    clientName: string | null
    status: string | null
    firecrawlJobId: string | null
    overallRiskLevel: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type PublicDataAnalysisMaxAggregateOutputType = {
    id: string | null
    monitoringJobId: string | null
    watchListClientId: string | null
    clientName: string | null
    status: string | null
    firecrawlJobId: string | null
    overallRiskLevel: string | null
    createdAt: Date | null
    completedAt: Date | null
  }

  export type PublicDataAnalysisCountAggregateOutputType = {
    id: number
    monitoringJobId: number
    watchListClientId: number
    clientName: number
    status: number
    firecrawlJobId: number
    negativeMedia: number
    pepScreening: number
    financialHealth: number
    statutoryEnquiries: number
    mergersActivity: number
    overallRiskLevel: number
    riskFlags: number
    createdAt: number
    completedAt: number
    _all: number
  }


  export type PublicDataAnalysisMinAggregateInputType = {
    id?: true
    monitoringJobId?: true
    watchListClientId?: true
    clientName?: true
    status?: true
    firecrawlJobId?: true
    overallRiskLevel?: true
    createdAt?: true
    completedAt?: true
  }

  export type PublicDataAnalysisMaxAggregateInputType = {
    id?: true
    monitoringJobId?: true
    watchListClientId?: true
    clientName?: true
    status?: true
    firecrawlJobId?: true
    overallRiskLevel?: true
    createdAt?: true
    completedAt?: true
  }

  export type PublicDataAnalysisCountAggregateInputType = {
    id?: true
    monitoringJobId?: true
    watchListClientId?: true
    clientName?: true
    status?: true
    firecrawlJobId?: true
    negativeMedia?: true
    pepScreening?: true
    financialHealth?: true
    statutoryEnquiries?: true
    mergersActivity?: true
    overallRiskLevel?: true
    riskFlags?: true
    createdAt?: true
    completedAt?: true
    _all?: true
  }

  export type PublicDataAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicDataAnalysis to aggregate.
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicDataAnalyses to fetch.
     */
    orderBy?: PublicDataAnalysisOrderByWithRelationInput | PublicDataAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicDataAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicDataAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicDataAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicDataAnalyses
    **/
    _count?: true | PublicDataAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicDataAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicDataAnalysisMaxAggregateInputType
  }

  export type GetPublicDataAnalysisAggregateType<T extends PublicDataAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicDataAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicDataAnalysis[P]>
      : GetScalarType<T[P], AggregatePublicDataAnalysis[P]>
  }




  export type PublicDataAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicDataAnalysisWhereInput
    orderBy?: PublicDataAnalysisOrderByWithAggregationInput | PublicDataAnalysisOrderByWithAggregationInput[]
    by: PublicDataAnalysisScalarFieldEnum[] | PublicDataAnalysisScalarFieldEnum
    having?: PublicDataAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicDataAnalysisCountAggregateInputType | true
    _min?: PublicDataAnalysisMinAggregateInputType
    _max?: PublicDataAnalysisMaxAggregateInputType
  }

  export type PublicDataAnalysisGroupByOutputType = {
    id: string
    monitoringJobId: string | null
    watchListClientId: string | null
    clientName: string
    status: string
    firecrawlJobId: string | null
    negativeMedia: JsonValue | null
    pepScreening: JsonValue | null
    financialHealth: JsonValue | null
    statutoryEnquiries: JsonValue | null
    mergersActivity: JsonValue | null
    overallRiskLevel: string
    riskFlags: string[]
    createdAt: Date
    completedAt: Date | null
    _count: PublicDataAnalysisCountAggregateOutputType | null
    _min: PublicDataAnalysisMinAggregateOutputType | null
    _max: PublicDataAnalysisMaxAggregateOutputType | null
  }

  type GetPublicDataAnalysisGroupByPayload<T extends PublicDataAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicDataAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicDataAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicDataAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], PublicDataAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type PublicDataAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitoringJobId?: boolean
    watchListClientId?: boolean
    clientName?: boolean
    status?: boolean
    firecrawlJobId?: boolean
    negativeMedia?: boolean
    pepScreening?: boolean
    financialHealth?: boolean
    statutoryEnquiries?: boolean
    mergersActivity?: boolean
    overallRiskLevel?: boolean
    riskFlags?: boolean
    createdAt?: boolean
    completedAt?: boolean
    monitoringJob?: boolean | PublicDataAnalysis$monitoringJobArgs<ExtArgs>
    watchListClient?: boolean | PublicDataAnalysis$watchListClientArgs<ExtArgs>
  }, ExtArgs["result"]["publicDataAnalysis"]>

  export type PublicDataAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitoringJobId?: boolean
    watchListClientId?: boolean
    clientName?: boolean
    status?: boolean
    firecrawlJobId?: boolean
    negativeMedia?: boolean
    pepScreening?: boolean
    financialHealth?: boolean
    statutoryEnquiries?: boolean
    mergersActivity?: boolean
    overallRiskLevel?: boolean
    riskFlags?: boolean
    createdAt?: boolean
    completedAt?: boolean
    monitoringJob?: boolean | PublicDataAnalysis$monitoringJobArgs<ExtArgs>
    watchListClient?: boolean | PublicDataAnalysis$watchListClientArgs<ExtArgs>
  }, ExtArgs["result"]["publicDataAnalysis"]>

  export type PublicDataAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitoringJobId?: boolean
    watchListClientId?: boolean
    clientName?: boolean
    status?: boolean
    firecrawlJobId?: boolean
    negativeMedia?: boolean
    pepScreening?: boolean
    financialHealth?: boolean
    statutoryEnquiries?: boolean
    mergersActivity?: boolean
    overallRiskLevel?: boolean
    riskFlags?: boolean
    createdAt?: boolean
    completedAt?: boolean
    monitoringJob?: boolean | PublicDataAnalysis$monitoringJobArgs<ExtArgs>
    watchListClient?: boolean | PublicDataAnalysis$watchListClientArgs<ExtArgs>
  }, ExtArgs["result"]["publicDataAnalysis"]>

  export type PublicDataAnalysisSelectScalar = {
    id?: boolean
    monitoringJobId?: boolean
    watchListClientId?: boolean
    clientName?: boolean
    status?: boolean
    firecrawlJobId?: boolean
    negativeMedia?: boolean
    pepScreening?: boolean
    financialHealth?: boolean
    statutoryEnquiries?: boolean
    mergersActivity?: boolean
    overallRiskLevel?: boolean
    riskFlags?: boolean
    createdAt?: boolean
    completedAt?: boolean
  }

  export type PublicDataAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monitoringJobId" | "watchListClientId" | "clientName" | "status" | "firecrawlJobId" | "negativeMedia" | "pepScreening" | "financialHealth" | "statutoryEnquiries" | "mergersActivity" | "overallRiskLevel" | "riskFlags" | "createdAt" | "completedAt", ExtArgs["result"]["publicDataAnalysis"]>
  export type PublicDataAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringJob?: boolean | PublicDataAnalysis$monitoringJobArgs<ExtArgs>
    watchListClient?: boolean | PublicDataAnalysis$watchListClientArgs<ExtArgs>
  }
  export type PublicDataAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringJob?: boolean | PublicDataAnalysis$monitoringJobArgs<ExtArgs>
    watchListClient?: boolean | PublicDataAnalysis$watchListClientArgs<ExtArgs>
  }
  export type PublicDataAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitoringJob?: boolean | PublicDataAnalysis$monitoringJobArgs<ExtArgs>
    watchListClient?: boolean | PublicDataAnalysis$watchListClientArgs<ExtArgs>
  }

  export type $PublicDataAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicDataAnalysis"
    objects: {
      monitoringJob: Prisma.$MonitoringJobPayload<ExtArgs> | null
      watchListClient: Prisma.$WatchListClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monitoringJobId: string | null
      watchListClientId: string | null
      clientName: string
      status: string
      firecrawlJobId: string | null
      negativeMedia: Prisma.JsonValue | null
      pepScreening: Prisma.JsonValue | null
      financialHealth: Prisma.JsonValue | null
      statutoryEnquiries: Prisma.JsonValue | null
      mergersActivity: Prisma.JsonValue | null
      overallRiskLevel: string
      riskFlags: string[]
      createdAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["publicDataAnalysis"]>
    composites: {}
  }

  type PublicDataAnalysisGetPayload<S extends boolean | null | undefined | PublicDataAnalysisDefaultArgs> = $Result.GetResult<Prisma.$PublicDataAnalysisPayload, S>

  type PublicDataAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicDataAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicDataAnalysisCountAggregateInputType | true
    }

  export interface PublicDataAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicDataAnalysis'], meta: { name: 'PublicDataAnalysis' } }
    /**
     * Find zero or one PublicDataAnalysis that matches the filter.
     * @param {PublicDataAnalysisFindUniqueArgs} args - Arguments to find a PublicDataAnalysis
     * @example
     * // Get one PublicDataAnalysis
     * const publicDataAnalysis = await prisma.publicDataAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicDataAnalysisFindUniqueArgs>(args: SelectSubset<T, PublicDataAnalysisFindUniqueArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicDataAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicDataAnalysisFindUniqueOrThrowArgs} args - Arguments to find a PublicDataAnalysis
     * @example
     * // Get one PublicDataAnalysis
     * const publicDataAnalysis = await prisma.publicDataAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicDataAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicDataAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicDataAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisFindFirstArgs} args - Arguments to find a PublicDataAnalysis
     * @example
     * // Get one PublicDataAnalysis
     * const publicDataAnalysis = await prisma.publicDataAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicDataAnalysisFindFirstArgs>(args?: SelectSubset<T, PublicDataAnalysisFindFirstArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicDataAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisFindFirstOrThrowArgs} args - Arguments to find a PublicDataAnalysis
     * @example
     * // Get one PublicDataAnalysis
     * const publicDataAnalysis = await prisma.publicDataAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicDataAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicDataAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicDataAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicDataAnalyses
     * const publicDataAnalyses = await prisma.publicDataAnalysis.findMany()
     * 
     * // Get first 10 PublicDataAnalyses
     * const publicDataAnalyses = await prisma.publicDataAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicDataAnalysisWithIdOnly = await prisma.publicDataAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicDataAnalysisFindManyArgs>(args?: SelectSubset<T, PublicDataAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicDataAnalysis.
     * @param {PublicDataAnalysisCreateArgs} args - Arguments to create a PublicDataAnalysis.
     * @example
     * // Create one PublicDataAnalysis
     * const PublicDataAnalysis = await prisma.publicDataAnalysis.create({
     *   data: {
     *     // ... data to create a PublicDataAnalysis
     *   }
     * })
     * 
     */
    create<T extends PublicDataAnalysisCreateArgs>(args: SelectSubset<T, PublicDataAnalysisCreateArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicDataAnalyses.
     * @param {PublicDataAnalysisCreateManyArgs} args - Arguments to create many PublicDataAnalyses.
     * @example
     * // Create many PublicDataAnalyses
     * const publicDataAnalysis = await prisma.publicDataAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicDataAnalysisCreateManyArgs>(args?: SelectSubset<T, PublicDataAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicDataAnalyses and returns the data saved in the database.
     * @param {PublicDataAnalysisCreateManyAndReturnArgs} args - Arguments to create many PublicDataAnalyses.
     * @example
     * // Create many PublicDataAnalyses
     * const publicDataAnalysis = await prisma.publicDataAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicDataAnalyses and only return the `id`
     * const publicDataAnalysisWithIdOnly = await prisma.publicDataAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicDataAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicDataAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicDataAnalysis.
     * @param {PublicDataAnalysisDeleteArgs} args - Arguments to delete one PublicDataAnalysis.
     * @example
     * // Delete one PublicDataAnalysis
     * const PublicDataAnalysis = await prisma.publicDataAnalysis.delete({
     *   where: {
     *     // ... filter to delete one PublicDataAnalysis
     *   }
     * })
     * 
     */
    delete<T extends PublicDataAnalysisDeleteArgs>(args: SelectSubset<T, PublicDataAnalysisDeleteArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicDataAnalysis.
     * @param {PublicDataAnalysisUpdateArgs} args - Arguments to update one PublicDataAnalysis.
     * @example
     * // Update one PublicDataAnalysis
     * const publicDataAnalysis = await prisma.publicDataAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicDataAnalysisUpdateArgs>(args: SelectSubset<T, PublicDataAnalysisUpdateArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicDataAnalyses.
     * @param {PublicDataAnalysisDeleteManyArgs} args - Arguments to filter PublicDataAnalyses to delete.
     * @example
     * // Delete a few PublicDataAnalyses
     * const { count } = await prisma.publicDataAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicDataAnalysisDeleteManyArgs>(args?: SelectSubset<T, PublicDataAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicDataAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicDataAnalyses
     * const publicDataAnalysis = await prisma.publicDataAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicDataAnalysisUpdateManyArgs>(args: SelectSubset<T, PublicDataAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicDataAnalyses and returns the data updated in the database.
     * @param {PublicDataAnalysisUpdateManyAndReturnArgs} args - Arguments to update many PublicDataAnalyses.
     * @example
     * // Update many PublicDataAnalyses
     * const publicDataAnalysis = await prisma.publicDataAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicDataAnalyses and only return the `id`
     * const publicDataAnalysisWithIdOnly = await prisma.publicDataAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicDataAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicDataAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicDataAnalysis.
     * @param {PublicDataAnalysisUpsertArgs} args - Arguments to update or create a PublicDataAnalysis.
     * @example
     * // Update or create a PublicDataAnalysis
     * const publicDataAnalysis = await prisma.publicDataAnalysis.upsert({
     *   create: {
     *     // ... data to create a PublicDataAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicDataAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends PublicDataAnalysisUpsertArgs>(args: SelectSubset<T, PublicDataAnalysisUpsertArgs<ExtArgs>>): Prisma__PublicDataAnalysisClient<$Result.GetResult<Prisma.$PublicDataAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicDataAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisCountArgs} args - Arguments to filter PublicDataAnalyses to count.
     * @example
     * // Count the number of PublicDataAnalyses
     * const count = await prisma.publicDataAnalysis.count({
     *   where: {
     *     // ... the filter for the PublicDataAnalyses we want to count
     *   }
     * })
    **/
    count<T extends PublicDataAnalysisCountArgs>(
      args?: Subset<T, PublicDataAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicDataAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicDataAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicDataAnalysisAggregateArgs>(args: Subset<T, PublicDataAnalysisAggregateArgs>): Prisma.PrismaPromise<GetPublicDataAnalysisAggregateType<T>>

    /**
     * Group by PublicDataAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicDataAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicDataAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicDataAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: PublicDataAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicDataAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicDataAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicDataAnalysis model
   */
  readonly fields: PublicDataAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicDataAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicDataAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitoringJob<T extends PublicDataAnalysis$monitoringJobArgs<ExtArgs> = {}>(args?: Subset<T, PublicDataAnalysis$monitoringJobArgs<ExtArgs>>): Prisma__MonitoringJobClient<$Result.GetResult<Prisma.$MonitoringJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    watchListClient<T extends PublicDataAnalysis$watchListClientArgs<ExtArgs> = {}>(args?: Subset<T, PublicDataAnalysis$watchListClientArgs<ExtArgs>>): Prisma__WatchListClientClient<$Result.GetResult<Prisma.$WatchListClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublicDataAnalysis model
   */
  interface PublicDataAnalysisFieldRefs {
    readonly id: FieldRef<"PublicDataAnalysis", 'String'>
    readonly monitoringJobId: FieldRef<"PublicDataAnalysis", 'String'>
    readonly watchListClientId: FieldRef<"PublicDataAnalysis", 'String'>
    readonly clientName: FieldRef<"PublicDataAnalysis", 'String'>
    readonly status: FieldRef<"PublicDataAnalysis", 'String'>
    readonly firecrawlJobId: FieldRef<"PublicDataAnalysis", 'String'>
    readonly negativeMedia: FieldRef<"PublicDataAnalysis", 'Json'>
    readonly pepScreening: FieldRef<"PublicDataAnalysis", 'Json'>
    readonly financialHealth: FieldRef<"PublicDataAnalysis", 'Json'>
    readonly statutoryEnquiries: FieldRef<"PublicDataAnalysis", 'Json'>
    readonly mergersActivity: FieldRef<"PublicDataAnalysis", 'Json'>
    readonly overallRiskLevel: FieldRef<"PublicDataAnalysis", 'String'>
    readonly riskFlags: FieldRef<"PublicDataAnalysis", 'String[]'>
    readonly createdAt: FieldRef<"PublicDataAnalysis", 'DateTime'>
    readonly completedAt: FieldRef<"PublicDataAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicDataAnalysis findUnique
   */
  export type PublicDataAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PublicDataAnalysis to fetch.
     */
    where: PublicDataAnalysisWhereUniqueInput
  }

  /**
   * PublicDataAnalysis findUniqueOrThrow
   */
  export type PublicDataAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PublicDataAnalysis to fetch.
     */
    where: PublicDataAnalysisWhereUniqueInput
  }

  /**
   * PublicDataAnalysis findFirst
   */
  export type PublicDataAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PublicDataAnalysis to fetch.
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicDataAnalyses to fetch.
     */
    orderBy?: PublicDataAnalysisOrderByWithRelationInput | PublicDataAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicDataAnalyses.
     */
    cursor?: PublicDataAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicDataAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicDataAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicDataAnalyses.
     */
    distinct?: PublicDataAnalysisScalarFieldEnum | PublicDataAnalysisScalarFieldEnum[]
  }

  /**
   * PublicDataAnalysis findFirstOrThrow
   */
  export type PublicDataAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PublicDataAnalysis to fetch.
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicDataAnalyses to fetch.
     */
    orderBy?: PublicDataAnalysisOrderByWithRelationInput | PublicDataAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicDataAnalyses.
     */
    cursor?: PublicDataAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicDataAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicDataAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicDataAnalyses.
     */
    distinct?: PublicDataAnalysisScalarFieldEnum | PublicDataAnalysisScalarFieldEnum[]
  }

  /**
   * PublicDataAnalysis findMany
   */
  export type PublicDataAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PublicDataAnalyses to fetch.
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicDataAnalyses to fetch.
     */
    orderBy?: PublicDataAnalysisOrderByWithRelationInput | PublicDataAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicDataAnalyses.
     */
    cursor?: PublicDataAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicDataAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicDataAnalyses.
     */
    skip?: number
    distinct?: PublicDataAnalysisScalarFieldEnum | PublicDataAnalysisScalarFieldEnum[]
  }

  /**
   * PublicDataAnalysis create
   */
  export type PublicDataAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicDataAnalysis.
     */
    data: XOR<PublicDataAnalysisCreateInput, PublicDataAnalysisUncheckedCreateInput>
  }

  /**
   * PublicDataAnalysis createMany
   */
  export type PublicDataAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicDataAnalyses.
     */
    data: PublicDataAnalysisCreateManyInput | PublicDataAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicDataAnalysis createManyAndReturn
   */
  export type PublicDataAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many PublicDataAnalyses.
     */
    data: PublicDataAnalysisCreateManyInput | PublicDataAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicDataAnalysis update
   */
  export type PublicDataAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicDataAnalysis.
     */
    data: XOR<PublicDataAnalysisUpdateInput, PublicDataAnalysisUncheckedUpdateInput>
    /**
     * Choose, which PublicDataAnalysis to update.
     */
    where: PublicDataAnalysisWhereUniqueInput
  }

  /**
   * PublicDataAnalysis updateMany
   */
  export type PublicDataAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicDataAnalyses.
     */
    data: XOR<PublicDataAnalysisUpdateManyMutationInput, PublicDataAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which PublicDataAnalyses to update
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * Limit how many PublicDataAnalyses to update.
     */
    limit?: number
  }

  /**
   * PublicDataAnalysis updateManyAndReturn
   */
  export type PublicDataAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update PublicDataAnalyses.
     */
    data: XOR<PublicDataAnalysisUpdateManyMutationInput, PublicDataAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which PublicDataAnalyses to update
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * Limit how many PublicDataAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublicDataAnalysis upsert
   */
  export type PublicDataAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicDataAnalysis to update in case it exists.
     */
    where: PublicDataAnalysisWhereUniqueInput
    /**
     * In case the PublicDataAnalysis found by the `where` argument doesn't exist, create a new PublicDataAnalysis with this data.
     */
    create: XOR<PublicDataAnalysisCreateInput, PublicDataAnalysisUncheckedCreateInput>
    /**
     * In case the PublicDataAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicDataAnalysisUpdateInput, PublicDataAnalysisUncheckedUpdateInput>
  }

  /**
   * PublicDataAnalysis delete
   */
  export type PublicDataAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
    /**
     * Filter which PublicDataAnalysis to delete.
     */
    where: PublicDataAnalysisWhereUniqueInput
  }

  /**
   * PublicDataAnalysis deleteMany
   */
  export type PublicDataAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicDataAnalyses to delete
     */
    where?: PublicDataAnalysisWhereInput
    /**
     * Limit how many PublicDataAnalyses to delete.
     */
    limit?: number
  }

  /**
   * PublicDataAnalysis.monitoringJob
   */
  export type PublicDataAnalysis$monitoringJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringJob
     */
    select?: MonitoringJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonitoringJob
     */
    omit?: MonitoringJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitoringJobInclude<ExtArgs> | null
    where?: MonitoringJobWhereInput
  }

  /**
   * PublicDataAnalysis.watchListClient
   */
  export type PublicDataAnalysis$watchListClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchListClient
     */
    select?: WatchListClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchListClient
     */
    omit?: WatchListClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchListClientInclude<ExtArgs> | null
    where?: WatchListClientWhereInput
  }

  /**
   * PublicDataAnalysis without action
   */
  export type PublicDataAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicDataAnalysis
     */
    select?: PublicDataAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicDataAnalysis
     */
    omit?: PublicDataAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicDataAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model ManualInvestigativeReport
   */

  export type AggregateManualInvestigativeReport = {
    _count: ManualInvestigativeReportCountAggregateOutputType | null
    _min: ManualInvestigativeReportMinAggregateOutputType | null
    _max: ManualInvestigativeReportMaxAggregateOutputType | null
  }

  export type ManualInvestigativeReportMinAggregateOutputType = {
    id: string | null
    clientName: string | null
    analystId: string | null
    findings: string | null
    riskLevel: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManualInvestigativeReportMaxAggregateOutputType = {
    id: string | null
    clientName: string | null
    analystId: string | null
    findings: string | null
    riskLevel: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ManualInvestigativeReportCountAggregateOutputType = {
    id: number
    clientName: number
    analystId: number
    findings: number
    riskLevel: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ManualInvestigativeReportMinAggregateInputType = {
    id?: true
    clientName?: true
    analystId?: true
    findings?: true
    riskLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManualInvestigativeReportMaxAggregateInputType = {
    id?: true
    clientName?: true
    analystId?: true
    findings?: true
    riskLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ManualInvestigativeReportCountAggregateInputType = {
    id?: true
    clientName?: true
    analystId?: true
    findings?: true
    riskLevel?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ManualInvestigativeReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManualInvestigativeReport to aggregate.
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualInvestigativeReports to fetch.
     */
    orderBy?: ManualInvestigativeReportOrderByWithRelationInput | ManualInvestigativeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManualInvestigativeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualInvestigativeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualInvestigativeReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManualInvestigativeReports
    **/
    _count?: true | ManualInvestigativeReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManualInvestigativeReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManualInvestigativeReportMaxAggregateInputType
  }

  export type GetManualInvestigativeReportAggregateType<T extends ManualInvestigativeReportAggregateArgs> = {
        [P in keyof T & keyof AggregateManualInvestigativeReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManualInvestigativeReport[P]>
      : GetScalarType<T[P], AggregateManualInvestigativeReport[P]>
  }




  export type ManualInvestigativeReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManualInvestigativeReportWhereInput
    orderBy?: ManualInvestigativeReportOrderByWithAggregationInput | ManualInvestigativeReportOrderByWithAggregationInput[]
    by: ManualInvestigativeReportScalarFieldEnum[] | ManualInvestigativeReportScalarFieldEnum
    having?: ManualInvestigativeReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManualInvestigativeReportCountAggregateInputType | true
    _min?: ManualInvestigativeReportMinAggregateInputType
    _max?: ManualInvestigativeReportMaxAggregateInputType
  }

  export type ManualInvestigativeReportGroupByOutputType = {
    id: string
    clientName: string
    analystId: string
    findings: string
    riskLevel: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ManualInvestigativeReportCountAggregateOutputType | null
    _min: ManualInvestigativeReportMinAggregateOutputType | null
    _max: ManualInvestigativeReportMaxAggregateOutputType | null
  }

  type GetManualInvestigativeReportGroupByPayload<T extends ManualInvestigativeReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManualInvestigativeReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManualInvestigativeReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManualInvestigativeReportGroupByOutputType[P]>
            : GetScalarType<T[P], ManualInvestigativeReportGroupByOutputType[P]>
        }
      >
    >


  export type ManualInvestigativeReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    analystId?: boolean
    findings?: boolean
    riskLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manualInvestigativeReport"]>

  export type ManualInvestigativeReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    analystId?: boolean
    findings?: boolean
    riskLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manualInvestigativeReport"]>

  export type ManualInvestigativeReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    analystId?: boolean
    findings?: boolean
    riskLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["manualInvestigativeReport"]>

  export type ManualInvestigativeReportSelectScalar = {
    id?: boolean
    clientName?: boolean
    analystId?: boolean
    findings?: boolean
    riskLevel?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ManualInvestigativeReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientName" | "analystId" | "findings" | "riskLevel" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["manualInvestigativeReport"]>

  export type $ManualInvestigativeReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManualInvestigativeReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientName: string
      analystId: string
      findings: string
      riskLevel: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["manualInvestigativeReport"]>
    composites: {}
  }

  type ManualInvestigativeReportGetPayload<S extends boolean | null | undefined | ManualInvestigativeReportDefaultArgs> = $Result.GetResult<Prisma.$ManualInvestigativeReportPayload, S>

  type ManualInvestigativeReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManualInvestigativeReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManualInvestigativeReportCountAggregateInputType | true
    }

  export interface ManualInvestigativeReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManualInvestigativeReport'], meta: { name: 'ManualInvestigativeReport' } }
    /**
     * Find zero or one ManualInvestigativeReport that matches the filter.
     * @param {ManualInvestigativeReportFindUniqueArgs} args - Arguments to find a ManualInvestigativeReport
     * @example
     * // Get one ManualInvestigativeReport
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManualInvestigativeReportFindUniqueArgs>(args: SelectSubset<T, ManualInvestigativeReportFindUniqueArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManualInvestigativeReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManualInvestigativeReportFindUniqueOrThrowArgs} args - Arguments to find a ManualInvestigativeReport
     * @example
     * // Get one ManualInvestigativeReport
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManualInvestigativeReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ManualInvestigativeReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManualInvestigativeReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportFindFirstArgs} args - Arguments to find a ManualInvestigativeReport
     * @example
     * // Get one ManualInvestigativeReport
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManualInvestigativeReportFindFirstArgs>(args?: SelectSubset<T, ManualInvestigativeReportFindFirstArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManualInvestigativeReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportFindFirstOrThrowArgs} args - Arguments to find a ManualInvestigativeReport
     * @example
     * // Get one ManualInvestigativeReport
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManualInvestigativeReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ManualInvestigativeReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManualInvestigativeReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManualInvestigativeReports
     * const manualInvestigativeReports = await prisma.manualInvestigativeReport.findMany()
     * 
     * // Get first 10 ManualInvestigativeReports
     * const manualInvestigativeReports = await prisma.manualInvestigativeReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manualInvestigativeReportWithIdOnly = await prisma.manualInvestigativeReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManualInvestigativeReportFindManyArgs>(args?: SelectSubset<T, ManualInvestigativeReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManualInvestigativeReport.
     * @param {ManualInvestigativeReportCreateArgs} args - Arguments to create a ManualInvestigativeReport.
     * @example
     * // Create one ManualInvestigativeReport
     * const ManualInvestigativeReport = await prisma.manualInvestigativeReport.create({
     *   data: {
     *     // ... data to create a ManualInvestigativeReport
     *   }
     * })
     * 
     */
    create<T extends ManualInvestigativeReportCreateArgs>(args: SelectSubset<T, ManualInvestigativeReportCreateArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManualInvestigativeReports.
     * @param {ManualInvestigativeReportCreateManyArgs} args - Arguments to create many ManualInvestigativeReports.
     * @example
     * // Create many ManualInvestigativeReports
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManualInvestigativeReportCreateManyArgs>(args?: SelectSubset<T, ManualInvestigativeReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManualInvestigativeReports and returns the data saved in the database.
     * @param {ManualInvestigativeReportCreateManyAndReturnArgs} args - Arguments to create many ManualInvestigativeReports.
     * @example
     * // Create many ManualInvestigativeReports
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManualInvestigativeReports and only return the `id`
     * const manualInvestigativeReportWithIdOnly = await prisma.manualInvestigativeReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManualInvestigativeReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ManualInvestigativeReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManualInvestigativeReport.
     * @param {ManualInvestigativeReportDeleteArgs} args - Arguments to delete one ManualInvestigativeReport.
     * @example
     * // Delete one ManualInvestigativeReport
     * const ManualInvestigativeReport = await prisma.manualInvestigativeReport.delete({
     *   where: {
     *     // ... filter to delete one ManualInvestigativeReport
     *   }
     * })
     * 
     */
    delete<T extends ManualInvestigativeReportDeleteArgs>(args: SelectSubset<T, ManualInvestigativeReportDeleteArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManualInvestigativeReport.
     * @param {ManualInvestigativeReportUpdateArgs} args - Arguments to update one ManualInvestigativeReport.
     * @example
     * // Update one ManualInvestigativeReport
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManualInvestigativeReportUpdateArgs>(args: SelectSubset<T, ManualInvestigativeReportUpdateArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManualInvestigativeReports.
     * @param {ManualInvestigativeReportDeleteManyArgs} args - Arguments to filter ManualInvestigativeReports to delete.
     * @example
     * // Delete a few ManualInvestigativeReports
     * const { count } = await prisma.manualInvestigativeReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManualInvestigativeReportDeleteManyArgs>(args?: SelectSubset<T, ManualInvestigativeReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManualInvestigativeReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManualInvestigativeReports
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManualInvestigativeReportUpdateManyArgs>(args: SelectSubset<T, ManualInvestigativeReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManualInvestigativeReports and returns the data updated in the database.
     * @param {ManualInvestigativeReportUpdateManyAndReturnArgs} args - Arguments to update many ManualInvestigativeReports.
     * @example
     * // Update many ManualInvestigativeReports
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManualInvestigativeReports and only return the `id`
     * const manualInvestigativeReportWithIdOnly = await prisma.manualInvestigativeReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ManualInvestigativeReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ManualInvestigativeReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManualInvestigativeReport.
     * @param {ManualInvestigativeReportUpsertArgs} args - Arguments to update or create a ManualInvestigativeReport.
     * @example
     * // Update or create a ManualInvestigativeReport
     * const manualInvestigativeReport = await prisma.manualInvestigativeReport.upsert({
     *   create: {
     *     // ... data to create a ManualInvestigativeReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManualInvestigativeReport we want to update
     *   }
     * })
     */
    upsert<T extends ManualInvestigativeReportUpsertArgs>(args: SelectSubset<T, ManualInvestigativeReportUpsertArgs<ExtArgs>>): Prisma__ManualInvestigativeReportClient<$Result.GetResult<Prisma.$ManualInvestigativeReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManualInvestigativeReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportCountArgs} args - Arguments to filter ManualInvestigativeReports to count.
     * @example
     * // Count the number of ManualInvestigativeReports
     * const count = await prisma.manualInvestigativeReport.count({
     *   where: {
     *     // ... the filter for the ManualInvestigativeReports we want to count
     *   }
     * })
    **/
    count<T extends ManualInvestigativeReportCountArgs>(
      args?: Subset<T, ManualInvestigativeReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManualInvestigativeReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManualInvestigativeReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManualInvestigativeReportAggregateArgs>(args: Subset<T, ManualInvestigativeReportAggregateArgs>): Prisma.PrismaPromise<GetManualInvestigativeReportAggregateType<T>>

    /**
     * Group by ManualInvestigativeReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManualInvestigativeReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManualInvestigativeReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManualInvestigativeReportGroupByArgs['orderBy'] }
        : { orderBy?: ManualInvestigativeReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManualInvestigativeReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManualInvestigativeReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManualInvestigativeReport model
   */
  readonly fields: ManualInvestigativeReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManualInvestigativeReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManualInvestigativeReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManualInvestigativeReport model
   */
  interface ManualInvestigativeReportFieldRefs {
    readonly id: FieldRef<"ManualInvestigativeReport", 'String'>
    readonly clientName: FieldRef<"ManualInvestigativeReport", 'String'>
    readonly analystId: FieldRef<"ManualInvestigativeReport", 'String'>
    readonly findings: FieldRef<"ManualInvestigativeReport", 'String'>
    readonly riskLevel: FieldRef<"ManualInvestigativeReport", 'String'>
    readonly status: FieldRef<"ManualInvestigativeReport", 'String'>
    readonly createdAt: FieldRef<"ManualInvestigativeReport", 'DateTime'>
    readonly updatedAt: FieldRef<"ManualInvestigativeReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManualInvestigativeReport findUnique
   */
  export type ManualInvestigativeReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * Filter, which ManualInvestigativeReport to fetch.
     */
    where: ManualInvestigativeReportWhereUniqueInput
  }

  /**
   * ManualInvestigativeReport findUniqueOrThrow
   */
  export type ManualInvestigativeReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * Filter, which ManualInvestigativeReport to fetch.
     */
    where: ManualInvestigativeReportWhereUniqueInput
  }

  /**
   * ManualInvestigativeReport findFirst
   */
  export type ManualInvestigativeReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * Filter, which ManualInvestigativeReport to fetch.
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualInvestigativeReports to fetch.
     */
    orderBy?: ManualInvestigativeReportOrderByWithRelationInput | ManualInvestigativeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManualInvestigativeReports.
     */
    cursor?: ManualInvestigativeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualInvestigativeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualInvestigativeReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManualInvestigativeReports.
     */
    distinct?: ManualInvestigativeReportScalarFieldEnum | ManualInvestigativeReportScalarFieldEnum[]
  }

  /**
   * ManualInvestigativeReport findFirstOrThrow
   */
  export type ManualInvestigativeReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * Filter, which ManualInvestigativeReport to fetch.
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualInvestigativeReports to fetch.
     */
    orderBy?: ManualInvestigativeReportOrderByWithRelationInput | ManualInvestigativeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManualInvestigativeReports.
     */
    cursor?: ManualInvestigativeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualInvestigativeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualInvestigativeReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManualInvestigativeReports.
     */
    distinct?: ManualInvestigativeReportScalarFieldEnum | ManualInvestigativeReportScalarFieldEnum[]
  }

  /**
   * ManualInvestigativeReport findMany
   */
  export type ManualInvestigativeReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * Filter, which ManualInvestigativeReports to fetch.
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManualInvestigativeReports to fetch.
     */
    orderBy?: ManualInvestigativeReportOrderByWithRelationInput | ManualInvestigativeReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManualInvestigativeReports.
     */
    cursor?: ManualInvestigativeReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManualInvestigativeReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManualInvestigativeReports.
     */
    skip?: number
    distinct?: ManualInvestigativeReportScalarFieldEnum | ManualInvestigativeReportScalarFieldEnum[]
  }

  /**
   * ManualInvestigativeReport create
   */
  export type ManualInvestigativeReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * The data needed to create a ManualInvestigativeReport.
     */
    data: XOR<ManualInvestigativeReportCreateInput, ManualInvestigativeReportUncheckedCreateInput>
  }

  /**
   * ManualInvestigativeReport createMany
   */
  export type ManualInvestigativeReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManualInvestigativeReports.
     */
    data: ManualInvestigativeReportCreateManyInput | ManualInvestigativeReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManualInvestigativeReport createManyAndReturn
   */
  export type ManualInvestigativeReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * The data used to create many ManualInvestigativeReports.
     */
    data: ManualInvestigativeReportCreateManyInput | ManualInvestigativeReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManualInvestigativeReport update
   */
  export type ManualInvestigativeReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * The data needed to update a ManualInvestigativeReport.
     */
    data: XOR<ManualInvestigativeReportUpdateInput, ManualInvestigativeReportUncheckedUpdateInput>
    /**
     * Choose, which ManualInvestigativeReport to update.
     */
    where: ManualInvestigativeReportWhereUniqueInput
  }

  /**
   * ManualInvestigativeReport updateMany
   */
  export type ManualInvestigativeReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManualInvestigativeReports.
     */
    data: XOR<ManualInvestigativeReportUpdateManyMutationInput, ManualInvestigativeReportUncheckedUpdateManyInput>
    /**
     * Filter which ManualInvestigativeReports to update
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * Limit how many ManualInvestigativeReports to update.
     */
    limit?: number
  }

  /**
   * ManualInvestigativeReport updateManyAndReturn
   */
  export type ManualInvestigativeReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * The data used to update ManualInvestigativeReports.
     */
    data: XOR<ManualInvestigativeReportUpdateManyMutationInput, ManualInvestigativeReportUncheckedUpdateManyInput>
    /**
     * Filter which ManualInvestigativeReports to update
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * Limit how many ManualInvestigativeReports to update.
     */
    limit?: number
  }

  /**
   * ManualInvestigativeReport upsert
   */
  export type ManualInvestigativeReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * The filter to search for the ManualInvestigativeReport to update in case it exists.
     */
    where: ManualInvestigativeReportWhereUniqueInput
    /**
     * In case the ManualInvestigativeReport found by the `where` argument doesn't exist, create a new ManualInvestigativeReport with this data.
     */
    create: XOR<ManualInvestigativeReportCreateInput, ManualInvestigativeReportUncheckedCreateInput>
    /**
     * In case the ManualInvestigativeReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManualInvestigativeReportUpdateInput, ManualInvestigativeReportUncheckedUpdateInput>
  }

  /**
   * ManualInvestigativeReport delete
   */
  export type ManualInvestigativeReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
    /**
     * Filter which ManualInvestigativeReport to delete.
     */
    where: ManualInvestigativeReportWhereUniqueInput
  }

  /**
   * ManualInvestigativeReport deleteMany
   */
  export type ManualInvestigativeReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManualInvestigativeReports to delete
     */
    where?: ManualInvestigativeReportWhereInput
    /**
     * Limit how many ManualInvestigativeReports to delete.
     */
    limit?: number
  }

  /**
   * ManualInvestigativeReport without action
   */
  export type ManualInvestigativeReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManualInvestigativeReport
     */
    select?: ManualInvestigativeReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManualInvestigativeReport
     */
    omit?: ManualInvestigativeReportOmit<ExtArgs> | null
  }


  /**
   * Model Sandbox
   */

  export type AggregateSandbox = {
    _count: SandboxCountAggregateOutputType | null
    _min: SandboxMinAggregateOutputType | null
    _max: SandboxMaxAggregateOutputType | null
  }

  export type SandboxMinAggregateOutputType = {
    id: string | null
    alert_id: string | null
    createdAt: Date | null
  }

  export type SandboxMaxAggregateOutputType = {
    id: string | null
    alert_id: string | null
    createdAt: Date | null
  }

  export type SandboxCountAggregateOutputType = {
    id: number
    alert_id: number
    payload: number
    createdAt: number
    _all: number
  }


  export type SandboxMinAggregateInputType = {
    id?: true
    alert_id?: true
    createdAt?: true
  }

  export type SandboxMaxAggregateInputType = {
    id?: true
    alert_id?: true
    createdAt?: true
  }

  export type SandboxCountAggregateInputType = {
    id?: true
    alert_id?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type SandboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sandbox to aggregate.
     */
    where?: SandboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sandboxes to fetch.
     */
    orderBy?: SandboxOrderByWithRelationInput | SandboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SandboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sandboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sandboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sandboxes
    **/
    _count?: true | SandboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SandboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SandboxMaxAggregateInputType
  }

  export type GetSandboxAggregateType<T extends SandboxAggregateArgs> = {
        [P in keyof T & keyof AggregateSandbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSandbox[P]>
      : GetScalarType<T[P], AggregateSandbox[P]>
  }




  export type SandboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SandboxWhereInput
    orderBy?: SandboxOrderByWithAggregationInput | SandboxOrderByWithAggregationInput[]
    by: SandboxScalarFieldEnum[] | SandboxScalarFieldEnum
    having?: SandboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SandboxCountAggregateInputType | true
    _min?: SandboxMinAggregateInputType
    _max?: SandboxMaxAggregateInputType
  }

  export type SandboxGroupByOutputType = {
    id: string
    alert_id: string
    payload: JsonValue | null
    createdAt: Date
    _count: SandboxCountAggregateOutputType | null
    _min: SandboxMinAggregateOutputType | null
    _max: SandboxMaxAggregateOutputType | null
  }

  type GetSandboxGroupByPayload<T extends SandboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SandboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SandboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SandboxGroupByOutputType[P]>
            : GetScalarType<T[P], SandboxGroupByOutputType[P]>
        }
      >
    >


  export type SandboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alert_id?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sandbox"]>

  export type SandboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alert_id?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sandbox"]>

  export type SandboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alert_id?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sandbox"]>

  export type SandboxSelectScalar = {
    id?: boolean
    alert_id?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type SandboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alert_id" | "payload" | "createdAt", ExtArgs["result"]["sandbox"]>

  export type $SandboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sandbox"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alert_id: string
      payload: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["sandbox"]>
    composites: {}
  }

  type SandboxGetPayload<S extends boolean | null | undefined | SandboxDefaultArgs> = $Result.GetResult<Prisma.$SandboxPayload, S>

  type SandboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SandboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SandboxCountAggregateInputType | true
    }

  export interface SandboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sandbox'], meta: { name: 'Sandbox' } }
    /**
     * Find zero or one Sandbox that matches the filter.
     * @param {SandboxFindUniqueArgs} args - Arguments to find a Sandbox
     * @example
     * // Get one Sandbox
     * const sandbox = await prisma.sandbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SandboxFindUniqueArgs>(args: SelectSubset<T, SandboxFindUniqueArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sandbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SandboxFindUniqueOrThrowArgs} args - Arguments to find a Sandbox
     * @example
     * // Get one Sandbox
     * const sandbox = await prisma.sandbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SandboxFindUniqueOrThrowArgs>(args: SelectSubset<T, SandboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sandbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxFindFirstArgs} args - Arguments to find a Sandbox
     * @example
     * // Get one Sandbox
     * const sandbox = await prisma.sandbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SandboxFindFirstArgs>(args?: SelectSubset<T, SandboxFindFirstArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sandbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxFindFirstOrThrowArgs} args - Arguments to find a Sandbox
     * @example
     * // Get one Sandbox
     * const sandbox = await prisma.sandbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SandboxFindFirstOrThrowArgs>(args?: SelectSubset<T, SandboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sandboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sandboxes
     * const sandboxes = await prisma.sandbox.findMany()
     * 
     * // Get first 10 Sandboxes
     * const sandboxes = await prisma.sandbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sandboxWithIdOnly = await prisma.sandbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SandboxFindManyArgs>(args?: SelectSubset<T, SandboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sandbox.
     * @param {SandboxCreateArgs} args - Arguments to create a Sandbox.
     * @example
     * // Create one Sandbox
     * const Sandbox = await prisma.sandbox.create({
     *   data: {
     *     // ... data to create a Sandbox
     *   }
     * })
     * 
     */
    create<T extends SandboxCreateArgs>(args: SelectSubset<T, SandboxCreateArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sandboxes.
     * @param {SandboxCreateManyArgs} args - Arguments to create many Sandboxes.
     * @example
     * // Create many Sandboxes
     * const sandbox = await prisma.sandbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SandboxCreateManyArgs>(args?: SelectSubset<T, SandboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sandboxes and returns the data saved in the database.
     * @param {SandboxCreateManyAndReturnArgs} args - Arguments to create many Sandboxes.
     * @example
     * // Create many Sandboxes
     * const sandbox = await prisma.sandbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sandboxes and only return the `id`
     * const sandboxWithIdOnly = await prisma.sandbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SandboxCreateManyAndReturnArgs>(args?: SelectSubset<T, SandboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sandbox.
     * @param {SandboxDeleteArgs} args - Arguments to delete one Sandbox.
     * @example
     * // Delete one Sandbox
     * const Sandbox = await prisma.sandbox.delete({
     *   where: {
     *     // ... filter to delete one Sandbox
     *   }
     * })
     * 
     */
    delete<T extends SandboxDeleteArgs>(args: SelectSubset<T, SandboxDeleteArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sandbox.
     * @param {SandboxUpdateArgs} args - Arguments to update one Sandbox.
     * @example
     * // Update one Sandbox
     * const sandbox = await prisma.sandbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SandboxUpdateArgs>(args: SelectSubset<T, SandboxUpdateArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sandboxes.
     * @param {SandboxDeleteManyArgs} args - Arguments to filter Sandboxes to delete.
     * @example
     * // Delete a few Sandboxes
     * const { count } = await prisma.sandbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SandboxDeleteManyArgs>(args?: SelectSubset<T, SandboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sandboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sandboxes
     * const sandbox = await prisma.sandbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SandboxUpdateManyArgs>(args: SelectSubset<T, SandboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sandboxes and returns the data updated in the database.
     * @param {SandboxUpdateManyAndReturnArgs} args - Arguments to update many Sandboxes.
     * @example
     * // Update many Sandboxes
     * const sandbox = await prisma.sandbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sandboxes and only return the `id`
     * const sandboxWithIdOnly = await prisma.sandbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SandboxUpdateManyAndReturnArgs>(args: SelectSubset<T, SandboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sandbox.
     * @param {SandboxUpsertArgs} args - Arguments to update or create a Sandbox.
     * @example
     * // Update or create a Sandbox
     * const sandbox = await prisma.sandbox.upsert({
     *   create: {
     *     // ... data to create a Sandbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sandbox we want to update
     *   }
     * })
     */
    upsert<T extends SandboxUpsertArgs>(args: SelectSubset<T, SandboxUpsertArgs<ExtArgs>>): Prisma__SandboxClient<$Result.GetResult<Prisma.$SandboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sandboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxCountArgs} args - Arguments to filter Sandboxes to count.
     * @example
     * // Count the number of Sandboxes
     * const count = await prisma.sandbox.count({
     *   where: {
     *     // ... the filter for the Sandboxes we want to count
     *   }
     * })
    **/
    count<T extends SandboxCountArgs>(
      args?: Subset<T, SandboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SandboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sandbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SandboxAggregateArgs>(args: Subset<T, SandboxAggregateArgs>): Prisma.PrismaPromise<GetSandboxAggregateType<T>>

    /**
     * Group by Sandbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SandboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SandboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SandboxGroupByArgs['orderBy'] }
        : { orderBy?: SandboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SandboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSandboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sandbox model
   */
  readonly fields: SandboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sandbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SandboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sandbox model
   */
  interface SandboxFieldRefs {
    readonly id: FieldRef<"Sandbox", 'String'>
    readonly alert_id: FieldRef<"Sandbox", 'String'>
    readonly payload: FieldRef<"Sandbox", 'Json'>
    readonly createdAt: FieldRef<"Sandbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sandbox findUnique
   */
  export type SandboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * Filter, which Sandbox to fetch.
     */
    where: SandboxWhereUniqueInput
  }

  /**
   * Sandbox findUniqueOrThrow
   */
  export type SandboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * Filter, which Sandbox to fetch.
     */
    where: SandboxWhereUniqueInput
  }

  /**
   * Sandbox findFirst
   */
  export type SandboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * Filter, which Sandbox to fetch.
     */
    where?: SandboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sandboxes to fetch.
     */
    orderBy?: SandboxOrderByWithRelationInput | SandboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sandboxes.
     */
    cursor?: SandboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sandboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sandboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sandboxes.
     */
    distinct?: SandboxScalarFieldEnum | SandboxScalarFieldEnum[]
  }

  /**
   * Sandbox findFirstOrThrow
   */
  export type SandboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * Filter, which Sandbox to fetch.
     */
    where?: SandboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sandboxes to fetch.
     */
    orderBy?: SandboxOrderByWithRelationInput | SandboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sandboxes.
     */
    cursor?: SandboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sandboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sandboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sandboxes.
     */
    distinct?: SandboxScalarFieldEnum | SandboxScalarFieldEnum[]
  }

  /**
   * Sandbox findMany
   */
  export type SandboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * Filter, which Sandboxes to fetch.
     */
    where?: SandboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sandboxes to fetch.
     */
    orderBy?: SandboxOrderByWithRelationInput | SandboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sandboxes.
     */
    cursor?: SandboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sandboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sandboxes.
     */
    skip?: number
    distinct?: SandboxScalarFieldEnum | SandboxScalarFieldEnum[]
  }

  /**
   * Sandbox create
   */
  export type SandboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * The data needed to create a Sandbox.
     */
    data: XOR<SandboxCreateInput, SandboxUncheckedCreateInput>
  }

  /**
   * Sandbox createMany
   */
  export type SandboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sandboxes.
     */
    data: SandboxCreateManyInput | SandboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sandbox createManyAndReturn
   */
  export type SandboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * The data used to create many Sandboxes.
     */
    data: SandboxCreateManyInput | SandboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sandbox update
   */
  export type SandboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * The data needed to update a Sandbox.
     */
    data: XOR<SandboxUpdateInput, SandboxUncheckedUpdateInput>
    /**
     * Choose, which Sandbox to update.
     */
    where: SandboxWhereUniqueInput
  }

  /**
   * Sandbox updateMany
   */
  export type SandboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sandboxes.
     */
    data: XOR<SandboxUpdateManyMutationInput, SandboxUncheckedUpdateManyInput>
    /**
     * Filter which Sandboxes to update
     */
    where?: SandboxWhereInput
    /**
     * Limit how many Sandboxes to update.
     */
    limit?: number
  }

  /**
   * Sandbox updateManyAndReturn
   */
  export type SandboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * The data used to update Sandboxes.
     */
    data: XOR<SandboxUpdateManyMutationInput, SandboxUncheckedUpdateManyInput>
    /**
     * Filter which Sandboxes to update
     */
    where?: SandboxWhereInput
    /**
     * Limit how many Sandboxes to update.
     */
    limit?: number
  }

  /**
   * Sandbox upsert
   */
  export type SandboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * The filter to search for the Sandbox to update in case it exists.
     */
    where: SandboxWhereUniqueInput
    /**
     * In case the Sandbox found by the `where` argument doesn't exist, create a new Sandbox with this data.
     */
    create: XOR<SandboxCreateInput, SandboxUncheckedCreateInput>
    /**
     * In case the Sandbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SandboxUpdateInput, SandboxUncheckedUpdateInput>
  }

  /**
   * Sandbox delete
   */
  export type SandboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
    /**
     * Filter which Sandbox to delete.
     */
    where: SandboxWhereUniqueInput
  }

  /**
   * Sandbox deleteMany
   */
  export type SandboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sandboxes to delete
     */
    where?: SandboxWhereInput
    /**
     * Limit how many Sandboxes to delete.
     */
    limit?: number
  }

  /**
   * Sandbox without action
   */
  export type SandboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sandbox
     */
    select?: SandboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sandbox
     */
    omit?: SandboxOmit<ExtArgs> | null
  }


  /**
   * Model AnomalyReport
   */

  export type AggregateAnomalyReport = {
    _count: AnomalyReportCountAggregateOutputType | null
    _avg: AnomalyReportAvgAggregateOutputType | null
    _sum: AnomalyReportSumAggregateOutputType | null
    _min: AnomalyReportMinAggregateOutputType | null
    _max: AnomalyReportMaxAggregateOutputType | null
  }

  export type AnomalyReportAvgAggregateOutputType = {
    anomalyCount: number | null
  }

  export type AnomalyReportSumAggregateOutputType = {
    anomalyCount: number | null
  }

  export type AnomalyReportMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    gcsPath: string | null
    anomalyCount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type AnomalyReportMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    gcsPath: string | null
    anomalyCount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type AnomalyReportCountAggregateOutputType = {
    id: number
    jobId: number
    gcsPath: number
    anomalyCount: number
    status: number
    createdAt: number
    _all: number
  }


  export type AnomalyReportAvgAggregateInputType = {
    anomalyCount?: true
  }

  export type AnomalyReportSumAggregateInputType = {
    anomalyCount?: true
  }

  export type AnomalyReportMinAggregateInputType = {
    id?: true
    jobId?: true
    gcsPath?: true
    anomalyCount?: true
    status?: true
    createdAt?: true
  }

  export type AnomalyReportMaxAggregateInputType = {
    id?: true
    jobId?: true
    gcsPath?: true
    anomalyCount?: true
    status?: true
    createdAt?: true
  }

  export type AnomalyReportCountAggregateInputType = {
    id?: true
    jobId?: true
    gcsPath?: true
    anomalyCount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AnomalyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyReport to aggregate.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnomalyReports
    **/
    _count?: true | AnomalyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnomalyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnomalyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnomalyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnomalyReportMaxAggregateInputType
  }

  export type GetAnomalyReportAggregateType<T extends AnomalyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAnomalyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnomalyReport[P]>
      : GetScalarType<T[P], AggregateAnomalyReport[P]>
  }




  export type AnomalyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnomalyReportWhereInput
    orderBy?: AnomalyReportOrderByWithAggregationInput | AnomalyReportOrderByWithAggregationInput[]
    by: AnomalyReportScalarFieldEnum[] | AnomalyReportScalarFieldEnum
    having?: AnomalyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnomalyReportCountAggregateInputType | true
    _avg?: AnomalyReportAvgAggregateInputType
    _sum?: AnomalyReportSumAggregateInputType
    _min?: AnomalyReportMinAggregateInputType
    _max?: AnomalyReportMaxAggregateInputType
  }

  export type AnomalyReportGroupByOutputType = {
    id: string
    jobId: string
    gcsPath: string
    anomalyCount: number
    status: string
    createdAt: Date
    _count: AnomalyReportCountAggregateOutputType | null
    _avg: AnomalyReportAvgAggregateOutputType | null
    _sum: AnomalyReportSumAggregateOutputType | null
    _min: AnomalyReportMinAggregateOutputType | null
    _max: AnomalyReportMaxAggregateOutputType | null
  }

  type GetAnomalyReportGroupByPayload<T extends AnomalyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnomalyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnomalyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnomalyReportGroupByOutputType[P]>
            : GetScalarType<T[P], AnomalyReportGroupByOutputType[P]>
        }
      >
    >


  export type AnomalyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    gcsPath?: boolean
    anomalyCount?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["anomalyReport"]>

  export type AnomalyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    gcsPath?: boolean
    anomalyCount?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["anomalyReport"]>

  export type AnomalyReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    gcsPath?: boolean
    anomalyCount?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["anomalyReport"]>

  export type AnomalyReportSelectScalar = {
    id?: boolean
    jobId?: boolean
    gcsPath?: boolean
    anomalyCount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AnomalyReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "gcsPath" | "anomalyCount" | "status" | "createdAt", ExtArgs["result"]["anomalyReport"]>

  export type $AnomalyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnomalyReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      gcsPath: string
      anomalyCount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["anomalyReport"]>
    composites: {}
  }

  type AnomalyReportGetPayload<S extends boolean | null | undefined | AnomalyReportDefaultArgs> = $Result.GetResult<Prisma.$AnomalyReportPayload, S>

  type AnomalyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnomalyReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnomalyReportCountAggregateInputType | true
    }

  export interface AnomalyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnomalyReport'], meta: { name: 'AnomalyReport' } }
    /**
     * Find zero or one AnomalyReport that matches the filter.
     * @param {AnomalyReportFindUniqueArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnomalyReportFindUniqueArgs>(args: SelectSubset<T, AnomalyReportFindUniqueArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnomalyReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnomalyReportFindUniqueOrThrowArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnomalyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AnomalyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportFindFirstArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnomalyReportFindFirstArgs>(args?: SelectSubset<T, AnomalyReportFindFirstArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnomalyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportFindFirstOrThrowArgs} args - Arguments to find a AnomalyReport
     * @example
     * // Get one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnomalyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AnomalyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnomalyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnomalyReports
     * const anomalyReports = await prisma.anomalyReport.findMany()
     * 
     * // Get first 10 AnomalyReports
     * const anomalyReports = await prisma.anomalyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anomalyReportWithIdOnly = await prisma.anomalyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnomalyReportFindManyArgs>(args?: SelectSubset<T, AnomalyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnomalyReport.
     * @param {AnomalyReportCreateArgs} args - Arguments to create a AnomalyReport.
     * @example
     * // Create one AnomalyReport
     * const AnomalyReport = await prisma.anomalyReport.create({
     *   data: {
     *     // ... data to create a AnomalyReport
     *   }
     * })
     * 
     */
    create<T extends AnomalyReportCreateArgs>(args: SelectSubset<T, AnomalyReportCreateArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnomalyReports.
     * @param {AnomalyReportCreateManyArgs} args - Arguments to create many AnomalyReports.
     * @example
     * // Create many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnomalyReportCreateManyArgs>(args?: SelectSubset<T, AnomalyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnomalyReports and returns the data saved in the database.
     * @param {AnomalyReportCreateManyAndReturnArgs} args - Arguments to create many AnomalyReports.
     * @example
     * // Create many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnomalyReports and only return the `id`
     * const anomalyReportWithIdOnly = await prisma.anomalyReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnomalyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AnomalyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnomalyReport.
     * @param {AnomalyReportDeleteArgs} args - Arguments to delete one AnomalyReport.
     * @example
     * // Delete one AnomalyReport
     * const AnomalyReport = await prisma.anomalyReport.delete({
     *   where: {
     *     // ... filter to delete one AnomalyReport
     *   }
     * })
     * 
     */
    delete<T extends AnomalyReportDeleteArgs>(args: SelectSubset<T, AnomalyReportDeleteArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnomalyReport.
     * @param {AnomalyReportUpdateArgs} args - Arguments to update one AnomalyReport.
     * @example
     * // Update one AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnomalyReportUpdateArgs>(args: SelectSubset<T, AnomalyReportUpdateArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnomalyReports.
     * @param {AnomalyReportDeleteManyArgs} args - Arguments to filter AnomalyReports to delete.
     * @example
     * // Delete a few AnomalyReports
     * const { count } = await prisma.anomalyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnomalyReportDeleteManyArgs>(args?: SelectSubset<T, AnomalyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnomalyReportUpdateManyArgs>(args: SelectSubset<T, AnomalyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnomalyReports and returns the data updated in the database.
     * @param {AnomalyReportUpdateManyAndReturnArgs} args - Arguments to update many AnomalyReports.
     * @example
     * // Update many AnomalyReports
     * const anomalyReport = await prisma.anomalyReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnomalyReports and only return the `id`
     * const anomalyReportWithIdOnly = await prisma.anomalyReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnomalyReportUpdateManyAndReturnArgs>(args: SelectSubset<T, AnomalyReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnomalyReport.
     * @param {AnomalyReportUpsertArgs} args - Arguments to update or create a AnomalyReport.
     * @example
     * // Update or create a AnomalyReport
     * const anomalyReport = await prisma.anomalyReport.upsert({
     *   create: {
     *     // ... data to create a AnomalyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnomalyReport we want to update
     *   }
     * })
     */
    upsert<T extends AnomalyReportUpsertArgs>(args: SelectSubset<T, AnomalyReportUpsertArgs<ExtArgs>>): Prisma__AnomalyReportClient<$Result.GetResult<Prisma.$AnomalyReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnomalyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportCountArgs} args - Arguments to filter AnomalyReports to count.
     * @example
     * // Count the number of AnomalyReports
     * const count = await prisma.anomalyReport.count({
     *   where: {
     *     // ... the filter for the AnomalyReports we want to count
     *   }
     * })
    **/
    count<T extends AnomalyReportCountArgs>(
      args?: Subset<T, AnomalyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnomalyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnomalyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnomalyReportAggregateArgs>(args: Subset<T, AnomalyReportAggregateArgs>): Prisma.PrismaPromise<GetAnomalyReportAggregateType<T>>

    /**
     * Group by AnomalyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnomalyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnomalyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnomalyReportGroupByArgs['orderBy'] }
        : { orderBy?: AnomalyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnomalyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnomalyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnomalyReport model
   */
  readonly fields: AnomalyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnomalyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnomalyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnomalyReport model
   */
  interface AnomalyReportFieldRefs {
    readonly id: FieldRef<"AnomalyReport", 'String'>
    readonly jobId: FieldRef<"AnomalyReport", 'String'>
    readonly gcsPath: FieldRef<"AnomalyReport", 'String'>
    readonly anomalyCount: FieldRef<"AnomalyReport", 'Int'>
    readonly status: FieldRef<"AnomalyReport", 'String'>
    readonly createdAt: FieldRef<"AnomalyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnomalyReport findUnique
   */
  export type AnomalyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport findUniqueOrThrow
   */
  export type AnomalyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport findFirst
   */
  export type AnomalyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyReports.
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyReports.
     */
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * AnomalyReport findFirstOrThrow
   */
  export type AnomalyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Filter, which AnomalyReport to fetch.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnomalyReports.
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnomalyReports.
     */
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * AnomalyReport findMany
   */
  export type AnomalyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Filter, which AnomalyReports to fetch.
     */
    where?: AnomalyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnomalyReports to fetch.
     */
    orderBy?: AnomalyReportOrderByWithRelationInput | AnomalyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnomalyReports.
     */
    cursor?: AnomalyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnomalyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnomalyReports.
     */
    skip?: number
    distinct?: AnomalyReportScalarFieldEnum | AnomalyReportScalarFieldEnum[]
  }

  /**
   * AnomalyReport create
   */
  export type AnomalyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The data needed to create a AnomalyReport.
     */
    data: XOR<AnomalyReportCreateInput, AnomalyReportUncheckedCreateInput>
  }

  /**
   * AnomalyReport createMany
   */
  export type AnomalyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnomalyReports.
     */
    data: AnomalyReportCreateManyInput | AnomalyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnomalyReport createManyAndReturn
   */
  export type AnomalyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The data used to create many AnomalyReports.
     */
    data: AnomalyReportCreateManyInput | AnomalyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnomalyReport update
   */
  export type AnomalyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The data needed to update a AnomalyReport.
     */
    data: XOR<AnomalyReportUpdateInput, AnomalyReportUncheckedUpdateInput>
    /**
     * Choose, which AnomalyReport to update.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport updateMany
   */
  export type AnomalyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnomalyReports.
     */
    data: XOR<AnomalyReportUpdateManyMutationInput, AnomalyReportUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyReports to update
     */
    where?: AnomalyReportWhereInput
    /**
     * Limit how many AnomalyReports to update.
     */
    limit?: number
  }

  /**
   * AnomalyReport updateManyAndReturn
   */
  export type AnomalyReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The data used to update AnomalyReports.
     */
    data: XOR<AnomalyReportUpdateManyMutationInput, AnomalyReportUncheckedUpdateManyInput>
    /**
     * Filter which AnomalyReports to update
     */
    where?: AnomalyReportWhereInput
    /**
     * Limit how many AnomalyReports to update.
     */
    limit?: number
  }

  /**
   * AnomalyReport upsert
   */
  export type AnomalyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * The filter to search for the AnomalyReport to update in case it exists.
     */
    where: AnomalyReportWhereUniqueInput
    /**
     * In case the AnomalyReport found by the `where` argument doesn't exist, create a new AnomalyReport with this data.
     */
    create: XOR<AnomalyReportCreateInput, AnomalyReportUncheckedCreateInput>
    /**
     * In case the AnomalyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnomalyReportUpdateInput, AnomalyReportUncheckedUpdateInput>
  }

  /**
   * AnomalyReport delete
   */
  export type AnomalyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
    /**
     * Filter which AnomalyReport to delete.
     */
    where: AnomalyReportWhereUniqueInput
  }

  /**
   * AnomalyReport deleteMany
   */
  export type AnomalyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnomalyReports to delete
     */
    where?: AnomalyReportWhereInput
    /**
     * Limit how many AnomalyReports to delete.
     */
    limit?: number
  }

  /**
   * AnomalyReport without action
   */
  export type AnomalyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnomalyReport
     */
    select?: AnomalyReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnomalyReport
     */
    omit?: AnomalyReportOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    link: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    type: string | null
    link: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    type: number
    link: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    type?: true
    link?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string | null
    title: string
    message: string
    type: string
    link: string | null
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    link?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "type" | "link" | "read" | "createdAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      title: string
      message: string
      type: string
      link: string | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MonitoringJobScalarFieldEnum: {
    id: 'id',
    clientName: 'clientName',
    cronExpression: 'cronExpression',
    nextRunAt: 'nextRunAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type'
  };

  export type MonitoringJobScalarFieldEnum = (typeof MonitoringJobScalarFieldEnum)[keyof typeof MonitoringJobScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    clientName: 'clientName',
    result: 'result',
    gcsUrl: 'gcsUrl',
    pdfHash: 'pdfHash',
    screened_at: 'screened_at'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SanctionEntityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type SanctionEntityScalarFieldEnum = (typeof SanctionEntityScalarFieldEnum)[keyof typeof SanctionEntityScalarFieldEnum]


  export const BlindIndexScalarFieldEnum: {
    id: 'id',
    hash: 'hash',
    recordId: 'recordId',
    model: 'model',
    field: 'field'
  };

  export type BlindIndexScalarFieldEnum = (typeof BlindIndexScalarFieldEnum)[keyof typeof BlindIndexScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    fuzzyThreshold: 'fuzzyThreshold',
    phoneticAlgorithm: 'phoneticAlgorithm',
    semanticContext: 'semanticContext',
    updatedAt: 'updatedAt'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const RiskProfileScalarFieldEnum: {
    id: 'id',
    monitoringJobId: 'monitoringJobId',
    bqClientId: 'bqClientId',
    avgMonthlyVolume: 'avgMonthlyVolume',
    volatilityScore: 'volatilityScore',
    riskScore: 'riskScore',
    lastAnalysed: 'lastAnalysed'
  };

  export type RiskProfileScalarFieldEnum = (typeof RiskProfileScalarFieldEnum)[keyof typeof RiskProfileScalarFieldEnum]


  export const RiskAlertScalarFieldEnum: {
    id: 'id',
    riskProfileId: 'riskProfileId',
    type: 'type',
    severity: 'severity',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type RiskAlertScalarFieldEnum = (typeof RiskAlertScalarFieldEnum)[keyof typeof RiskAlertScalarFieldEnum]


  export const WatchListClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priority: 'priority',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WatchListClientScalarFieldEnum = (typeof WatchListClientScalarFieldEnum)[keyof typeof WatchListClientScalarFieldEnum]


  export const PublicDataAnalysisScalarFieldEnum: {
    id: 'id',
    monitoringJobId: 'monitoringJobId',
    watchListClientId: 'watchListClientId',
    clientName: 'clientName',
    status: 'status',
    firecrawlJobId: 'firecrawlJobId',
    negativeMedia: 'negativeMedia',
    pepScreening: 'pepScreening',
    financialHealth: 'financialHealth',
    statutoryEnquiries: 'statutoryEnquiries',
    mergersActivity: 'mergersActivity',
    overallRiskLevel: 'overallRiskLevel',
    riskFlags: 'riskFlags',
    createdAt: 'createdAt',
    completedAt: 'completedAt'
  };

  export type PublicDataAnalysisScalarFieldEnum = (typeof PublicDataAnalysisScalarFieldEnum)[keyof typeof PublicDataAnalysisScalarFieldEnum]


  export const ManualInvestigativeReportScalarFieldEnum: {
    id: 'id',
    clientName: 'clientName',
    analystId: 'analystId',
    findings: 'findings',
    riskLevel: 'riskLevel',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ManualInvestigativeReportScalarFieldEnum = (typeof ManualInvestigativeReportScalarFieldEnum)[keyof typeof ManualInvestigativeReportScalarFieldEnum]


  export const SandboxScalarFieldEnum: {
    id: 'id',
    alert_id: 'alert_id',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type SandboxScalarFieldEnum = (typeof SandboxScalarFieldEnum)[keyof typeof SandboxScalarFieldEnum]


  export const AnomalyReportScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    gcsPath: 'gcsPath',
    anomalyCount: 'anomalyCount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AnomalyReportScalarFieldEnum = (typeof AnomalyReportScalarFieldEnum)[keyof typeof AnomalyReportScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    type: 'type',
    link: 'link',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type MonitoringJobWhereInput = {
    AND?: MonitoringJobWhereInput | MonitoringJobWhereInput[]
    OR?: MonitoringJobWhereInput[]
    NOT?: MonitoringJobWhereInput | MonitoringJobWhereInput[]
    id?: StringFilter<"MonitoringJob"> | string
    clientName?: StringFilter<"MonitoringJob"> | string
    cronExpression?: StringFilter<"MonitoringJob"> | string
    nextRunAt?: DateTimeFilter<"MonitoringJob"> | Date | string
    userId?: StringNullableFilter<"MonitoringJob"> | string | null
    createdAt?: DateTimeFilter<"MonitoringJob"> | Date | string
    updatedAt?: DateTimeFilter<"MonitoringJob"> | Date | string
    type?: EnumJobTypeFilter<"MonitoringJob"> | $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisListRelationFilter
    riskProfile?: XOR<RiskProfileNullableScalarRelationFilter, RiskProfileWhereInput> | null
  }

  export type MonitoringJobOrderByWithRelationInput = {
    id?: SortOrder
    clientName?: SortOrder
    cronExpression?: SortOrder
    nextRunAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    publicDataAnalyses?: PublicDataAnalysisOrderByRelationAggregateInput
    riskProfile?: RiskProfileOrderByWithRelationInput
  }

  export type MonitoringJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonitoringJobWhereInput | MonitoringJobWhereInput[]
    OR?: MonitoringJobWhereInput[]
    NOT?: MonitoringJobWhereInput | MonitoringJobWhereInput[]
    clientName?: StringFilter<"MonitoringJob"> | string
    cronExpression?: StringFilter<"MonitoringJob"> | string
    nextRunAt?: DateTimeFilter<"MonitoringJob"> | Date | string
    userId?: StringNullableFilter<"MonitoringJob"> | string | null
    createdAt?: DateTimeFilter<"MonitoringJob"> | Date | string
    updatedAt?: DateTimeFilter<"MonitoringJob"> | Date | string
    type?: EnumJobTypeFilter<"MonitoringJob"> | $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisListRelationFilter
    riskProfile?: XOR<RiskProfileNullableScalarRelationFilter, RiskProfileWhereInput> | null
  }, "id">

  export type MonitoringJobOrderByWithAggregationInput = {
    id?: SortOrder
    clientName?: SortOrder
    cronExpression?: SortOrder
    nextRunAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    _count?: MonitoringJobCountOrderByAggregateInput
    _max?: MonitoringJobMaxOrderByAggregateInput
    _min?: MonitoringJobMinOrderByAggregateInput
  }

  export type MonitoringJobScalarWhereWithAggregatesInput = {
    AND?: MonitoringJobScalarWhereWithAggregatesInput | MonitoringJobScalarWhereWithAggregatesInput[]
    OR?: MonitoringJobScalarWhereWithAggregatesInput[]
    NOT?: MonitoringJobScalarWhereWithAggregatesInput | MonitoringJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonitoringJob"> | string
    clientName?: StringWithAggregatesFilter<"MonitoringJob"> | string
    cronExpression?: StringWithAggregatesFilter<"MonitoringJob"> | string
    nextRunAt?: DateTimeWithAggregatesFilter<"MonitoringJob"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"MonitoringJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MonitoringJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonitoringJob"> | Date | string
    type?: EnumJobTypeWithAggregatesFilter<"MonitoringJob"> | $Enums.JobType
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    jobId?: StringFilter<"AuditLog"> | string
    clientName?: StringFilter<"AuditLog"> | string
    result?: StringFilter<"AuditLog"> | string
    gcsUrl?: StringFilter<"AuditLog"> | string
    pdfHash?: StringFilter<"AuditLog"> | string
    screened_at?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    clientName?: SortOrder
    result?: SortOrder
    gcsUrl?: SortOrder
    pdfHash?: SortOrder
    screened_at?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    jobId?: StringFilter<"AuditLog"> | string
    clientName?: StringFilter<"AuditLog"> | string
    result?: StringFilter<"AuditLog"> | string
    gcsUrl?: StringFilter<"AuditLog"> | string
    pdfHash?: StringFilter<"AuditLog"> | string
    screened_at?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    clientName?: SortOrder
    result?: SortOrder
    gcsUrl?: SortOrder
    pdfHash?: SortOrder
    screened_at?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    jobId?: StringWithAggregatesFilter<"AuditLog"> | string
    clientName?: StringWithAggregatesFilter<"AuditLog"> | string
    result?: StringWithAggregatesFilter<"AuditLog"> | string
    gcsUrl?: StringWithAggregatesFilter<"AuditLog"> | string
    pdfHash?: StringWithAggregatesFilter<"AuditLog"> | string
    screened_at?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SanctionEntityWhereInput = {
    AND?: SanctionEntityWhereInput | SanctionEntityWhereInput[]
    OR?: SanctionEntityWhereInput[]
    NOT?: SanctionEntityWhereInput | SanctionEntityWhereInput[]
    id?: StringFilter<"SanctionEntity"> | string
    name?: StringFilter<"SanctionEntity"> | string
    source?: StringFilter<"SanctionEntity"> | string
    createdAt?: DateTimeFilter<"SanctionEntity"> | Date | string
  }

  export type SanctionEntityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type SanctionEntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SanctionEntityWhereInput | SanctionEntityWhereInput[]
    OR?: SanctionEntityWhereInput[]
    NOT?: SanctionEntityWhereInput | SanctionEntityWhereInput[]
    name?: StringFilter<"SanctionEntity"> | string
    source?: StringFilter<"SanctionEntity"> | string
    createdAt?: DateTimeFilter<"SanctionEntity"> | Date | string
  }, "id">

  export type SanctionEntityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: SanctionEntityCountOrderByAggregateInput
    _max?: SanctionEntityMaxOrderByAggregateInput
    _min?: SanctionEntityMinOrderByAggregateInput
  }

  export type SanctionEntityScalarWhereWithAggregatesInput = {
    AND?: SanctionEntityScalarWhereWithAggregatesInput | SanctionEntityScalarWhereWithAggregatesInput[]
    OR?: SanctionEntityScalarWhereWithAggregatesInput[]
    NOT?: SanctionEntityScalarWhereWithAggregatesInput | SanctionEntityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SanctionEntity"> | string
    name?: StringWithAggregatesFilter<"SanctionEntity"> | string
    source?: StringWithAggregatesFilter<"SanctionEntity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SanctionEntity"> | Date | string
  }

  export type BlindIndexWhereInput = {
    AND?: BlindIndexWhereInput | BlindIndexWhereInput[]
    OR?: BlindIndexWhereInput[]
    NOT?: BlindIndexWhereInput | BlindIndexWhereInput[]
    id?: StringFilter<"BlindIndex"> | string
    hash?: StringFilter<"BlindIndex"> | string
    recordId?: StringFilter<"BlindIndex"> | string
    model?: StringFilter<"BlindIndex"> | string
    field?: StringFilter<"BlindIndex"> | string
  }

  export type BlindIndexOrderByWithRelationInput = {
    id?: SortOrder
    hash?: SortOrder
    recordId?: SortOrder
    model?: SortOrder
    field?: SortOrder
  }

  export type BlindIndexWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlindIndexWhereInput | BlindIndexWhereInput[]
    OR?: BlindIndexWhereInput[]
    NOT?: BlindIndexWhereInput | BlindIndexWhereInput[]
    hash?: StringFilter<"BlindIndex"> | string
    recordId?: StringFilter<"BlindIndex"> | string
    model?: StringFilter<"BlindIndex"> | string
    field?: StringFilter<"BlindIndex"> | string
  }, "id">

  export type BlindIndexOrderByWithAggregationInput = {
    id?: SortOrder
    hash?: SortOrder
    recordId?: SortOrder
    model?: SortOrder
    field?: SortOrder
    _count?: BlindIndexCountOrderByAggregateInput
    _max?: BlindIndexMaxOrderByAggregateInput
    _min?: BlindIndexMinOrderByAggregateInput
  }

  export type BlindIndexScalarWhereWithAggregatesInput = {
    AND?: BlindIndexScalarWhereWithAggregatesInput | BlindIndexScalarWhereWithAggregatesInput[]
    OR?: BlindIndexScalarWhereWithAggregatesInput[]
    NOT?: BlindIndexScalarWhereWithAggregatesInput | BlindIndexScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlindIndex"> | string
    hash?: StringWithAggregatesFilter<"BlindIndex"> | string
    recordId?: StringWithAggregatesFilter<"BlindIndex"> | string
    model?: StringWithAggregatesFilter<"BlindIndex"> | string
    field?: StringWithAggregatesFilter<"BlindIndex"> | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    key?: StringFilter<"SystemConfig"> | string
    fuzzyThreshold?: FloatFilter<"SystemConfig"> | number
    phoneticAlgorithm?: StringFilter<"SystemConfig"> | string
    semanticContext?: StringNullableFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    fuzzyThreshold?: SortOrder
    phoneticAlgorithm?: SortOrder
    semanticContext?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    fuzzyThreshold?: FloatFilter<"SystemConfig"> | number
    phoneticAlgorithm?: StringFilter<"SystemConfig"> | string
    semanticContext?: StringNullableFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }, "id" | "key">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    fuzzyThreshold?: SortOrder
    phoneticAlgorithm?: SortOrder
    semanticContext?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _avg?: SystemConfigAvgOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
    _sum?: SystemConfigSumOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    key?: StringWithAggregatesFilter<"SystemConfig"> | string
    fuzzyThreshold?: FloatWithAggregatesFilter<"SystemConfig"> | number
    phoneticAlgorithm?: StringWithAggregatesFilter<"SystemConfig"> | string
    semanticContext?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
  }

  export type RiskProfileWhereInput = {
    AND?: RiskProfileWhereInput | RiskProfileWhereInput[]
    OR?: RiskProfileWhereInput[]
    NOT?: RiskProfileWhereInput | RiskProfileWhereInput[]
    id?: StringFilter<"RiskProfile"> | string
    monitoringJobId?: StringFilter<"RiskProfile"> | string
    bqClientId?: IntNullableFilter<"RiskProfile"> | number | null
    avgMonthlyVolume?: DecimalNullableFilter<"RiskProfile"> | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: DecimalNullableFilter<"RiskProfile"> | Decimal | DecimalJsLike | number | string | null
    riskScore?: FloatNullableFilter<"RiskProfile"> | number | null
    lastAnalysed?: DateTimeFilter<"RiskProfile"> | Date | string
    alerts?: RiskAlertListRelationFilter
    monitoringJob?: XOR<MonitoringJobScalarRelationFilter, MonitoringJobWhereInput>
  }

  export type RiskProfileOrderByWithRelationInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    bqClientId?: SortOrderInput | SortOrder
    avgMonthlyVolume?: SortOrderInput | SortOrder
    volatilityScore?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    lastAnalysed?: SortOrder
    alerts?: RiskAlertOrderByRelationAggregateInput
    monitoringJob?: MonitoringJobOrderByWithRelationInput
  }

  export type RiskProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    monitoringJobId?: string
    AND?: RiskProfileWhereInput | RiskProfileWhereInput[]
    OR?: RiskProfileWhereInput[]
    NOT?: RiskProfileWhereInput | RiskProfileWhereInput[]
    bqClientId?: IntNullableFilter<"RiskProfile"> | number | null
    avgMonthlyVolume?: DecimalNullableFilter<"RiskProfile"> | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: DecimalNullableFilter<"RiskProfile"> | Decimal | DecimalJsLike | number | string | null
    riskScore?: FloatNullableFilter<"RiskProfile"> | number | null
    lastAnalysed?: DateTimeFilter<"RiskProfile"> | Date | string
    alerts?: RiskAlertListRelationFilter
    monitoringJob?: XOR<MonitoringJobScalarRelationFilter, MonitoringJobWhereInput>
  }, "id" | "monitoringJobId">

  export type RiskProfileOrderByWithAggregationInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    bqClientId?: SortOrderInput | SortOrder
    avgMonthlyVolume?: SortOrderInput | SortOrder
    volatilityScore?: SortOrderInput | SortOrder
    riskScore?: SortOrderInput | SortOrder
    lastAnalysed?: SortOrder
    _count?: RiskProfileCountOrderByAggregateInput
    _avg?: RiskProfileAvgOrderByAggregateInput
    _max?: RiskProfileMaxOrderByAggregateInput
    _min?: RiskProfileMinOrderByAggregateInput
    _sum?: RiskProfileSumOrderByAggregateInput
  }

  export type RiskProfileScalarWhereWithAggregatesInput = {
    AND?: RiskProfileScalarWhereWithAggregatesInput | RiskProfileScalarWhereWithAggregatesInput[]
    OR?: RiskProfileScalarWhereWithAggregatesInput[]
    NOT?: RiskProfileScalarWhereWithAggregatesInput | RiskProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskProfile"> | string
    monitoringJobId?: StringWithAggregatesFilter<"RiskProfile"> | string
    bqClientId?: IntNullableWithAggregatesFilter<"RiskProfile"> | number | null
    avgMonthlyVolume?: DecimalNullableWithAggregatesFilter<"RiskProfile"> | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: DecimalNullableWithAggregatesFilter<"RiskProfile"> | Decimal | DecimalJsLike | number | string | null
    riskScore?: FloatNullableWithAggregatesFilter<"RiskProfile"> | number | null
    lastAnalysed?: DateTimeWithAggregatesFilter<"RiskProfile"> | Date | string
  }

  export type RiskAlertWhereInput = {
    AND?: RiskAlertWhereInput | RiskAlertWhereInput[]
    OR?: RiskAlertWhereInput[]
    NOT?: RiskAlertWhereInput | RiskAlertWhereInput[]
    id?: StringFilter<"RiskAlert"> | string
    riskProfileId?: StringFilter<"RiskAlert"> | string
    type?: StringFilter<"RiskAlert"> | string
    severity?: StringFilter<"RiskAlert"> | string
    description?: StringFilter<"RiskAlert"> | string
    metadata?: JsonNullableFilter<"RiskAlert">
    createdAt?: DateTimeFilter<"RiskAlert"> | Date | string
    riskProfile?: XOR<RiskProfileScalarRelationFilter, RiskProfileWhereInput>
  }

  export type RiskAlertOrderByWithRelationInput = {
    id?: SortOrder
    riskProfileId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    riskProfile?: RiskProfileOrderByWithRelationInput
  }

  export type RiskAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskAlertWhereInput | RiskAlertWhereInput[]
    OR?: RiskAlertWhereInput[]
    NOT?: RiskAlertWhereInput | RiskAlertWhereInput[]
    riskProfileId?: StringFilter<"RiskAlert"> | string
    type?: StringFilter<"RiskAlert"> | string
    severity?: StringFilter<"RiskAlert"> | string
    description?: StringFilter<"RiskAlert"> | string
    metadata?: JsonNullableFilter<"RiskAlert">
    createdAt?: DateTimeFilter<"RiskAlert"> | Date | string
    riskProfile?: XOR<RiskProfileScalarRelationFilter, RiskProfileWhereInput>
  }, "id">

  export type RiskAlertOrderByWithAggregationInput = {
    id?: SortOrder
    riskProfileId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RiskAlertCountOrderByAggregateInput
    _max?: RiskAlertMaxOrderByAggregateInput
    _min?: RiskAlertMinOrderByAggregateInput
  }

  export type RiskAlertScalarWhereWithAggregatesInput = {
    AND?: RiskAlertScalarWhereWithAggregatesInput | RiskAlertScalarWhereWithAggregatesInput[]
    OR?: RiskAlertScalarWhereWithAggregatesInput[]
    NOT?: RiskAlertScalarWhereWithAggregatesInput | RiskAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskAlert"> | string
    riskProfileId?: StringWithAggregatesFilter<"RiskAlert"> | string
    type?: StringWithAggregatesFilter<"RiskAlert"> | string
    severity?: StringWithAggregatesFilter<"RiskAlert"> | string
    description?: StringWithAggregatesFilter<"RiskAlert"> | string
    metadata?: JsonNullableWithAggregatesFilter<"RiskAlert">
    createdAt?: DateTimeWithAggregatesFilter<"RiskAlert"> | Date | string
  }

  export type WatchListClientWhereInput = {
    AND?: WatchListClientWhereInput | WatchListClientWhereInput[]
    OR?: WatchListClientWhereInput[]
    NOT?: WatchListClientWhereInput | WatchListClientWhereInput[]
    id?: StringFilter<"WatchListClient"> | string
    name?: StringFilter<"WatchListClient"> | string
    priority?: StringFilter<"WatchListClient"> | string
    notes?: StringNullableFilter<"WatchListClient"> | string | null
    createdAt?: DateTimeFilter<"WatchListClient"> | Date | string
    updatedAt?: DateTimeFilter<"WatchListClient"> | Date | string
    analyses?: PublicDataAnalysisListRelationFilter
  }

  export type WatchListClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    analyses?: PublicDataAnalysisOrderByRelationAggregateInput
  }

  export type WatchListClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchListClientWhereInput | WatchListClientWhereInput[]
    OR?: WatchListClientWhereInput[]
    NOT?: WatchListClientWhereInput | WatchListClientWhereInput[]
    name?: StringFilter<"WatchListClient"> | string
    priority?: StringFilter<"WatchListClient"> | string
    notes?: StringNullableFilter<"WatchListClient"> | string | null
    createdAt?: DateTimeFilter<"WatchListClient"> | Date | string
    updatedAt?: DateTimeFilter<"WatchListClient"> | Date | string
    analyses?: PublicDataAnalysisListRelationFilter
  }, "id">

  export type WatchListClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WatchListClientCountOrderByAggregateInput
    _max?: WatchListClientMaxOrderByAggregateInput
    _min?: WatchListClientMinOrderByAggregateInput
  }

  export type WatchListClientScalarWhereWithAggregatesInput = {
    AND?: WatchListClientScalarWhereWithAggregatesInput | WatchListClientScalarWhereWithAggregatesInput[]
    OR?: WatchListClientScalarWhereWithAggregatesInput[]
    NOT?: WatchListClientScalarWhereWithAggregatesInput | WatchListClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchListClient"> | string
    name?: StringWithAggregatesFilter<"WatchListClient"> | string
    priority?: StringWithAggregatesFilter<"WatchListClient"> | string
    notes?: StringNullableWithAggregatesFilter<"WatchListClient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WatchListClient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WatchListClient"> | Date | string
  }

  export type PublicDataAnalysisWhereInput = {
    AND?: PublicDataAnalysisWhereInput | PublicDataAnalysisWhereInput[]
    OR?: PublicDataAnalysisWhereInput[]
    NOT?: PublicDataAnalysisWhereInput | PublicDataAnalysisWhereInput[]
    id?: StringFilter<"PublicDataAnalysis"> | string
    monitoringJobId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    watchListClientId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    clientName?: StringFilter<"PublicDataAnalysis"> | string
    status?: StringFilter<"PublicDataAnalysis"> | string
    firecrawlJobId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    negativeMedia?: JsonNullableFilter<"PublicDataAnalysis">
    pepScreening?: JsonNullableFilter<"PublicDataAnalysis">
    financialHealth?: JsonNullableFilter<"PublicDataAnalysis">
    statutoryEnquiries?: JsonNullableFilter<"PublicDataAnalysis">
    mergersActivity?: JsonNullableFilter<"PublicDataAnalysis">
    overallRiskLevel?: StringFilter<"PublicDataAnalysis"> | string
    riskFlags?: StringNullableListFilter<"PublicDataAnalysis">
    createdAt?: DateTimeFilter<"PublicDataAnalysis"> | Date | string
    completedAt?: DateTimeNullableFilter<"PublicDataAnalysis"> | Date | string | null
    monitoringJob?: XOR<MonitoringJobNullableScalarRelationFilter, MonitoringJobWhereInput> | null
    watchListClient?: XOR<WatchListClientNullableScalarRelationFilter, WatchListClientWhereInput> | null
  }

  export type PublicDataAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    monitoringJobId?: SortOrderInput | SortOrder
    watchListClientId?: SortOrderInput | SortOrder
    clientName?: SortOrder
    status?: SortOrder
    firecrawlJobId?: SortOrderInput | SortOrder
    negativeMedia?: SortOrderInput | SortOrder
    pepScreening?: SortOrderInput | SortOrder
    financialHealth?: SortOrderInput | SortOrder
    statutoryEnquiries?: SortOrderInput | SortOrder
    mergersActivity?: SortOrderInput | SortOrder
    overallRiskLevel?: SortOrder
    riskFlags?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    monitoringJob?: MonitoringJobOrderByWithRelationInput
    watchListClient?: WatchListClientOrderByWithRelationInput
  }

  export type PublicDataAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicDataAnalysisWhereInput | PublicDataAnalysisWhereInput[]
    OR?: PublicDataAnalysisWhereInput[]
    NOT?: PublicDataAnalysisWhereInput | PublicDataAnalysisWhereInput[]
    monitoringJobId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    watchListClientId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    clientName?: StringFilter<"PublicDataAnalysis"> | string
    status?: StringFilter<"PublicDataAnalysis"> | string
    firecrawlJobId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    negativeMedia?: JsonNullableFilter<"PublicDataAnalysis">
    pepScreening?: JsonNullableFilter<"PublicDataAnalysis">
    financialHealth?: JsonNullableFilter<"PublicDataAnalysis">
    statutoryEnquiries?: JsonNullableFilter<"PublicDataAnalysis">
    mergersActivity?: JsonNullableFilter<"PublicDataAnalysis">
    overallRiskLevel?: StringFilter<"PublicDataAnalysis"> | string
    riskFlags?: StringNullableListFilter<"PublicDataAnalysis">
    createdAt?: DateTimeFilter<"PublicDataAnalysis"> | Date | string
    completedAt?: DateTimeNullableFilter<"PublicDataAnalysis"> | Date | string | null
    monitoringJob?: XOR<MonitoringJobNullableScalarRelationFilter, MonitoringJobWhereInput> | null
    watchListClient?: XOR<WatchListClientNullableScalarRelationFilter, WatchListClientWhereInput> | null
  }, "id">

  export type PublicDataAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    monitoringJobId?: SortOrderInput | SortOrder
    watchListClientId?: SortOrderInput | SortOrder
    clientName?: SortOrder
    status?: SortOrder
    firecrawlJobId?: SortOrderInput | SortOrder
    negativeMedia?: SortOrderInput | SortOrder
    pepScreening?: SortOrderInput | SortOrder
    financialHealth?: SortOrderInput | SortOrder
    statutoryEnquiries?: SortOrderInput | SortOrder
    mergersActivity?: SortOrderInput | SortOrder
    overallRiskLevel?: SortOrder
    riskFlags?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: PublicDataAnalysisCountOrderByAggregateInput
    _max?: PublicDataAnalysisMaxOrderByAggregateInput
    _min?: PublicDataAnalysisMinOrderByAggregateInput
  }

  export type PublicDataAnalysisScalarWhereWithAggregatesInput = {
    AND?: PublicDataAnalysisScalarWhereWithAggregatesInput | PublicDataAnalysisScalarWhereWithAggregatesInput[]
    OR?: PublicDataAnalysisScalarWhereWithAggregatesInput[]
    NOT?: PublicDataAnalysisScalarWhereWithAggregatesInput | PublicDataAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicDataAnalysis"> | string
    monitoringJobId?: StringNullableWithAggregatesFilter<"PublicDataAnalysis"> | string | null
    watchListClientId?: StringNullableWithAggregatesFilter<"PublicDataAnalysis"> | string | null
    clientName?: StringWithAggregatesFilter<"PublicDataAnalysis"> | string
    status?: StringWithAggregatesFilter<"PublicDataAnalysis"> | string
    firecrawlJobId?: StringNullableWithAggregatesFilter<"PublicDataAnalysis"> | string | null
    negativeMedia?: JsonNullableWithAggregatesFilter<"PublicDataAnalysis">
    pepScreening?: JsonNullableWithAggregatesFilter<"PublicDataAnalysis">
    financialHealth?: JsonNullableWithAggregatesFilter<"PublicDataAnalysis">
    statutoryEnquiries?: JsonNullableWithAggregatesFilter<"PublicDataAnalysis">
    mergersActivity?: JsonNullableWithAggregatesFilter<"PublicDataAnalysis">
    overallRiskLevel?: StringWithAggregatesFilter<"PublicDataAnalysis"> | string
    riskFlags?: StringNullableListFilter<"PublicDataAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"PublicDataAnalysis"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"PublicDataAnalysis"> | Date | string | null
  }

  export type ManualInvestigativeReportWhereInput = {
    AND?: ManualInvestigativeReportWhereInput | ManualInvestigativeReportWhereInput[]
    OR?: ManualInvestigativeReportWhereInput[]
    NOT?: ManualInvestigativeReportWhereInput | ManualInvestigativeReportWhereInput[]
    id?: StringFilter<"ManualInvestigativeReport"> | string
    clientName?: StringFilter<"ManualInvestigativeReport"> | string
    analystId?: StringFilter<"ManualInvestigativeReport"> | string
    findings?: StringFilter<"ManualInvestigativeReport"> | string
    riskLevel?: StringFilter<"ManualInvestigativeReport"> | string
    status?: StringFilter<"ManualInvestigativeReport"> | string
    createdAt?: DateTimeFilter<"ManualInvestigativeReport"> | Date | string
    updatedAt?: DateTimeFilter<"ManualInvestigativeReport"> | Date | string
  }

  export type ManualInvestigativeReportOrderByWithRelationInput = {
    id?: SortOrder
    clientName?: SortOrder
    analystId?: SortOrder
    findings?: SortOrder
    riskLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManualInvestigativeReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManualInvestigativeReportWhereInput | ManualInvestigativeReportWhereInput[]
    OR?: ManualInvestigativeReportWhereInput[]
    NOT?: ManualInvestigativeReportWhereInput | ManualInvestigativeReportWhereInput[]
    clientName?: StringFilter<"ManualInvestigativeReport"> | string
    analystId?: StringFilter<"ManualInvestigativeReport"> | string
    findings?: StringFilter<"ManualInvestigativeReport"> | string
    riskLevel?: StringFilter<"ManualInvestigativeReport"> | string
    status?: StringFilter<"ManualInvestigativeReport"> | string
    createdAt?: DateTimeFilter<"ManualInvestigativeReport"> | Date | string
    updatedAt?: DateTimeFilter<"ManualInvestigativeReport"> | Date | string
  }, "id">

  export type ManualInvestigativeReportOrderByWithAggregationInput = {
    id?: SortOrder
    clientName?: SortOrder
    analystId?: SortOrder
    findings?: SortOrder
    riskLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ManualInvestigativeReportCountOrderByAggregateInput
    _max?: ManualInvestigativeReportMaxOrderByAggregateInput
    _min?: ManualInvestigativeReportMinOrderByAggregateInput
  }

  export type ManualInvestigativeReportScalarWhereWithAggregatesInput = {
    AND?: ManualInvestigativeReportScalarWhereWithAggregatesInput | ManualInvestigativeReportScalarWhereWithAggregatesInput[]
    OR?: ManualInvestigativeReportScalarWhereWithAggregatesInput[]
    NOT?: ManualInvestigativeReportScalarWhereWithAggregatesInput | ManualInvestigativeReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManualInvestigativeReport"> | string
    clientName?: StringWithAggregatesFilter<"ManualInvestigativeReport"> | string
    analystId?: StringWithAggregatesFilter<"ManualInvestigativeReport"> | string
    findings?: StringWithAggregatesFilter<"ManualInvestigativeReport"> | string
    riskLevel?: StringWithAggregatesFilter<"ManualInvestigativeReport"> | string
    status?: StringWithAggregatesFilter<"ManualInvestigativeReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ManualInvestigativeReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManualInvestigativeReport"> | Date | string
  }

  export type SandboxWhereInput = {
    AND?: SandboxWhereInput | SandboxWhereInput[]
    OR?: SandboxWhereInput[]
    NOT?: SandboxWhereInput | SandboxWhereInput[]
    id?: StringFilter<"Sandbox"> | string
    alert_id?: StringFilter<"Sandbox"> | string
    payload?: JsonNullableFilter<"Sandbox">
    createdAt?: DateTimeFilter<"Sandbox"> | Date | string
  }

  export type SandboxOrderByWithRelationInput = {
    id?: SortOrder
    alert_id?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SandboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alert_id?: string
    AND?: SandboxWhereInput | SandboxWhereInput[]
    OR?: SandboxWhereInput[]
    NOT?: SandboxWhereInput | SandboxWhereInput[]
    payload?: JsonNullableFilter<"Sandbox">
    createdAt?: DateTimeFilter<"Sandbox"> | Date | string
  }, "id" | "alert_id">

  export type SandboxOrderByWithAggregationInput = {
    id?: SortOrder
    alert_id?: SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SandboxCountOrderByAggregateInput
    _max?: SandboxMaxOrderByAggregateInput
    _min?: SandboxMinOrderByAggregateInput
  }

  export type SandboxScalarWhereWithAggregatesInput = {
    AND?: SandboxScalarWhereWithAggregatesInput | SandboxScalarWhereWithAggregatesInput[]
    OR?: SandboxScalarWhereWithAggregatesInput[]
    NOT?: SandboxScalarWhereWithAggregatesInput | SandboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sandbox"> | string
    alert_id?: StringWithAggregatesFilter<"Sandbox"> | string
    payload?: JsonNullableWithAggregatesFilter<"Sandbox">
    createdAt?: DateTimeWithAggregatesFilter<"Sandbox"> | Date | string
  }

  export type AnomalyReportWhereInput = {
    AND?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    OR?: AnomalyReportWhereInput[]
    NOT?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    id?: StringFilter<"AnomalyReport"> | string
    jobId?: StringFilter<"AnomalyReport"> | string
    gcsPath?: StringFilter<"AnomalyReport"> | string
    anomalyCount?: IntFilter<"AnomalyReport"> | number
    status?: StringFilter<"AnomalyReport"> | string
    createdAt?: DateTimeFilter<"AnomalyReport"> | Date | string
  }

  export type AnomalyReportOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    gcsPath?: SortOrder
    anomalyCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    OR?: AnomalyReportWhereInput[]
    NOT?: AnomalyReportWhereInput | AnomalyReportWhereInput[]
    jobId?: StringFilter<"AnomalyReport"> | string
    gcsPath?: StringFilter<"AnomalyReport"> | string
    anomalyCount?: IntFilter<"AnomalyReport"> | number
    status?: StringFilter<"AnomalyReport"> | string
    createdAt?: DateTimeFilter<"AnomalyReport"> | Date | string
  }, "id">

  export type AnomalyReportOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    gcsPath?: SortOrder
    anomalyCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AnomalyReportCountOrderByAggregateInput
    _avg?: AnomalyReportAvgOrderByAggregateInput
    _max?: AnomalyReportMaxOrderByAggregateInput
    _min?: AnomalyReportMinOrderByAggregateInput
    _sum?: AnomalyReportSumOrderByAggregateInput
  }

  export type AnomalyReportScalarWhereWithAggregatesInput = {
    AND?: AnomalyReportScalarWhereWithAggregatesInput | AnomalyReportScalarWhereWithAggregatesInput[]
    OR?: AnomalyReportScalarWhereWithAggregatesInput[]
    NOT?: AnomalyReportScalarWhereWithAggregatesInput | AnomalyReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnomalyReport"> | string
    jobId?: StringWithAggregatesFilter<"AnomalyReport"> | string
    gcsPath?: StringWithAggregatesFilter<"AnomalyReport"> | string
    anomalyCount?: IntWithAggregatesFilter<"AnomalyReport"> | number
    status?: StringWithAggregatesFilter<"AnomalyReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnomalyReport"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type MonitoringJobCreateInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisCreateNestedManyWithoutMonitoringJobInput
    riskProfile?: RiskProfileCreateNestedOneWithoutMonitoringJobInput
  }

  export type MonitoringJobUncheckedCreateInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisUncheckedCreateNestedManyWithoutMonitoringJobInput
    riskProfile?: RiskProfileUncheckedCreateNestedOneWithoutMonitoringJobInput
  }

  export type MonitoringJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisUpdateManyWithoutMonitoringJobNestedInput
    riskProfile?: RiskProfileUpdateOneWithoutMonitoringJobNestedInput
  }

  export type MonitoringJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisUncheckedUpdateManyWithoutMonitoringJobNestedInput
    riskProfile?: RiskProfileUncheckedUpdateOneWithoutMonitoringJobNestedInput
  }

  export type MonitoringJobCreateManyInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
  }

  export type MonitoringJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
  }

  export type MonitoringJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
  }

  export type AuditLogCreateInput = {
    id?: string
    jobId: string
    clientName: string
    result: string
    gcsUrl: string
    pdfHash: string
    screened_at?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    jobId: string
    clientName: string
    result: string
    gcsUrl: string
    pdfHash: string
    screened_at?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gcsUrl?: StringFieldUpdateOperationsInput | string
    pdfHash?: StringFieldUpdateOperationsInput | string
    screened_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gcsUrl?: StringFieldUpdateOperationsInput | string
    pdfHash?: StringFieldUpdateOperationsInput | string
    screened_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    jobId: string
    clientName: string
    result: string
    gcsUrl: string
    pdfHash: string
    screened_at?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gcsUrl?: StringFieldUpdateOperationsInput | string
    pdfHash?: StringFieldUpdateOperationsInput | string
    screened_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gcsUrl?: StringFieldUpdateOperationsInput | string
    pdfHash?: StringFieldUpdateOperationsInput | string
    screened_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanctionEntityCreateInput = {
    id?: string
    name: string
    source: string
    createdAt?: Date | string
  }

  export type SanctionEntityUncheckedCreateInput = {
    id?: string
    name: string
    source: string
    createdAt?: Date | string
  }

  export type SanctionEntityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanctionEntityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanctionEntityCreateManyInput = {
    id?: string
    name: string
    source: string
    createdAt?: Date | string
  }

  export type SanctionEntityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SanctionEntityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlindIndexCreateInput = {
    id?: string
    hash: string
    recordId: string
    model: string
    field: string
  }

  export type BlindIndexUncheckedCreateInput = {
    id?: string
    hash: string
    recordId: string
    model: string
    field: string
  }

  export type BlindIndexUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
  }

  export type BlindIndexUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
  }

  export type BlindIndexCreateManyInput = {
    id?: string
    hash: string
    recordId: string
    model: string
    field: string
  }

  export type BlindIndexUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
  }

  export type BlindIndexUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
  }

  export type SystemConfigCreateInput = {
    id?: string
    key: string
    fuzzyThreshold?: number
    phoneticAlgorithm?: string
    semanticContext?: string | null
    updatedAt?: Date | string
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    key: string
    fuzzyThreshold?: number
    phoneticAlgorithm?: string
    semanticContext?: string | null
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    fuzzyThreshold?: FloatFieldUpdateOperationsInput | number
    phoneticAlgorithm?: StringFieldUpdateOperationsInput | string
    semanticContext?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    fuzzyThreshold?: FloatFieldUpdateOperationsInput | number
    phoneticAlgorithm?: StringFieldUpdateOperationsInput | string
    semanticContext?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    key: string
    fuzzyThreshold?: number
    phoneticAlgorithm?: string
    semanticContext?: string | null
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    fuzzyThreshold?: FloatFieldUpdateOperationsInput | number
    phoneticAlgorithm?: StringFieldUpdateOperationsInput | string
    semanticContext?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    fuzzyThreshold?: FloatFieldUpdateOperationsInput | number
    phoneticAlgorithm?: StringFieldUpdateOperationsInput | string
    semanticContext?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskProfileCreateInput = {
    id?: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
    alerts?: RiskAlertCreateNestedManyWithoutRiskProfileInput
    monitoringJob: MonitoringJobCreateNestedOneWithoutRiskProfileInput
  }

  export type RiskProfileUncheckedCreateInput = {
    id?: string
    monitoringJobId: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
    alerts?: RiskAlertUncheckedCreateNestedManyWithoutRiskProfileInput
  }

  export type RiskProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: RiskAlertUpdateManyWithoutRiskProfileNestedInput
    monitoringJob?: MonitoringJobUpdateOneRequiredWithoutRiskProfileNestedInput
  }

  export type RiskProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: RiskAlertUncheckedUpdateManyWithoutRiskProfileNestedInput
  }

  export type RiskProfileCreateManyInput = {
    id?: string
    monitoringJobId: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
  }

  export type RiskProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAlertCreateInput = {
    id?: string
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    riskProfile: RiskProfileCreateNestedOneWithoutAlertsInput
  }

  export type RiskAlertUncheckedCreateInput = {
    id?: string
    riskProfileId: string
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    riskProfile?: RiskProfileUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type RiskAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskProfileId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAlertCreateManyInput = {
    id?: string
    riskProfileId: string
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    riskProfileId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListClientCreateInput = {
    id?: string
    name: string
    priority?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: PublicDataAnalysisCreateNestedManyWithoutWatchListClientInput
  }

  export type WatchListClientUncheckedCreateInput = {
    id?: string
    name: string
    priority?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: PublicDataAnalysisUncheckedCreateNestedManyWithoutWatchListClientInput
  }

  export type WatchListClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: PublicDataAnalysisUpdateManyWithoutWatchListClientNestedInput
  }

  export type WatchListClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: PublicDataAnalysisUncheckedUpdateManyWithoutWatchListClientNestedInput
  }

  export type WatchListClientCreateManyInput = {
    id?: string
    name: string
    priority?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchListClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicDataAnalysisCreateInput = {
    id?: string
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
    monitoringJob?: MonitoringJobCreateNestedOneWithoutPublicDataAnalysesInput
    watchListClient?: WatchListClientCreateNestedOneWithoutAnalysesInput
  }

  export type PublicDataAnalysisUncheckedCreateInput = {
    id?: string
    monitoringJobId?: string | null
    watchListClientId?: string | null
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PublicDataAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monitoringJob?: MonitoringJobUpdateOneWithoutPublicDataAnalysesNestedInput
    watchListClient?: WatchListClientUpdateOneWithoutAnalysesNestedInput
  }

  export type PublicDataAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: NullableStringFieldUpdateOperationsInput | string | null
    watchListClientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicDataAnalysisCreateManyInput = {
    id?: string
    monitoringJobId?: string | null
    watchListClientId?: string | null
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PublicDataAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicDataAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: NullableStringFieldUpdateOperationsInput | string | null
    watchListClientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ManualInvestigativeReportCreateInput = {
    id?: string
    clientName: string
    analystId: string
    findings: string
    riskLevel?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManualInvestigativeReportUncheckedCreateInput = {
    id?: string
    clientName: string
    analystId: string
    findings: string
    riskLevel?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManualInvestigativeReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    analystId?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualInvestigativeReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    analystId?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualInvestigativeReportCreateManyInput = {
    id?: string
    clientName: string
    analystId: string
    findings: string
    riskLevel?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManualInvestigativeReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    analystId?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManualInvestigativeReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    analystId?: StringFieldUpdateOperationsInput | string
    findings?: StringFieldUpdateOperationsInput | string
    riskLevel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SandboxCreateInput = {
    id?: string
    alert_id: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SandboxUncheckedCreateInput = {
    id?: string
    alert_id: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SandboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_id?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SandboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_id?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SandboxCreateManyInput = {
    id?: string
    alert_id: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SandboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_id?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SandboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alert_id?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportCreateInput = {
    id?: string
    jobId: string
    gcsPath: string
    anomalyCount: number
    status?: string
    createdAt?: Date | string
  }

  export type AnomalyReportUncheckedCreateInput = {
    id?: string
    jobId: string
    gcsPath: string
    anomalyCount: number
    status?: string
    createdAt?: Date | string
  }

  export type AnomalyReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    gcsPath?: StringFieldUpdateOperationsInput | string
    anomalyCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    gcsPath?: StringFieldUpdateOperationsInput | string
    anomalyCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportCreateManyInput = {
    id?: string
    jobId: string
    gcsPath: string
    anomalyCount: number
    status?: string
    createdAt?: Date | string
  }

  export type AnomalyReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    gcsPath?: StringFieldUpdateOperationsInput | string
    anomalyCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnomalyReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    gcsPath?: StringFieldUpdateOperationsInput | string
    anomalyCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId?: string | null
    title: string
    message: string
    type: string
    link?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type PublicDataAnalysisListRelationFilter = {
    every?: PublicDataAnalysisWhereInput
    some?: PublicDataAnalysisWhereInput
    none?: PublicDataAnalysisWhereInput
  }

  export type RiskProfileNullableScalarRelationFilter = {
    is?: RiskProfileWhereInput | null
    isNot?: RiskProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PublicDataAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonitoringJobCountOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    cronExpression?: SortOrder
    nextRunAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type MonitoringJobMaxOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    cronExpression?: SortOrder
    nextRunAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type MonitoringJobMinOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    cronExpression?: SortOrder
    nextRunAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    clientName?: SortOrder
    result?: SortOrder
    gcsUrl?: SortOrder
    pdfHash?: SortOrder
    screened_at?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    clientName?: SortOrder
    result?: SortOrder
    gcsUrl?: SortOrder
    pdfHash?: SortOrder
    screened_at?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    clientName?: SortOrder
    result?: SortOrder
    gcsUrl?: SortOrder
    pdfHash?: SortOrder
    screened_at?: SortOrder
  }

  export type SanctionEntityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type SanctionEntityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type SanctionEntityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type BlindIndexCountOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    recordId?: SortOrder
    model?: SortOrder
    field?: SortOrder
  }

  export type BlindIndexMaxOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    recordId?: SortOrder
    model?: SortOrder
    field?: SortOrder
  }

  export type BlindIndexMinOrderByAggregateInput = {
    id?: SortOrder
    hash?: SortOrder
    recordId?: SortOrder
    model?: SortOrder
    field?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    fuzzyThreshold?: SortOrder
    phoneticAlgorithm?: SortOrder
    semanticContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigAvgOrderByAggregateInput = {
    fuzzyThreshold?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    fuzzyThreshold?: SortOrder
    phoneticAlgorithm?: SortOrder
    semanticContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    fuzzyThreshold?: SortOrder
    phoneticAlgorithm?: SortOrder
    semanticContext?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigSumOrderByAggregateInput = {
    fuzzyThreshold?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RiskAlertListRelationFilter = {
    every?: RiskAlertWhereInput
    some?: RiskAlertWhereInput
    none?: RiskAlertWhereInput
  }

  export type MonitoringJobScalarRelationFilter = {
    is?: MonitoringJobWhereInput
    isNot?: MonitoringJobWhereInput
  }

  export type RiskAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiskProfileCountOrderByAggregateInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    bqClientId?: SortOrder
    avgMonthlyVolume?: SortOrder
    volatilityScore?: SortOrder
    riskScore?: SortOrder
    lastAnalysed?: SortOrder
  }

  export type RiskProfileAvgOrderByAggregateInput = {
    bqClientId?: SortOrder
    avgMonthlyVolume?: SortOrder
    volatilityScore?: SortOrder
    riskScore?: SortOrder
  }

  export type RiskProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    bqClientId?: SortOrder
    avgMonthlyVolume?: SortOrder
    volatilityScore?: SortOrder
    riskScore?: SortOrder
    lastAnalysed?: SortOrder
  }

  export type RiskProfileMinOrderByAggregateInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    bqClientId?: SortOrder
    avgMonthlyVolume?: SortOrder
    volatilityScore?: SortOrder
    riskScore?: SortOrder
    lastAnalysed?: SortOrder
  }

  export type RiskProfileSumOrderByAggregateInput = {
    bqClientId?: SortOrder
    avgMonthlyVolume?: SortOrder
    volatilityScore?: SortOrder
    riskScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RiskProfileScalarRelationFilter = {
    is?: RiskProfileWhereInput
    isNot?: RiskProfileWhereInput
  }

  export type RiskAlertCountOrderByAggregateInput = {
    id?: SortOrder
    riskProfileId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    riskProfileId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAlertMinOrderByAggregateInput = {
    id?: SortOrder
    riskProfileId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WatchListClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchListClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WatchListClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MonitoringJobNullableScalarRelationFilter = {
    is?: MonitoringJobWhereInput | null
    isNot?: MonitoringJobWhereInput | null
  }

  export type WatchListClientNullableScalarRelationFilter = {
    is?: WatchListClientWhereInput | null
    isNot?: WatchListClientWhereInput | null
  }

  export type PublicDataAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    watchListClientId?: SortOrder
    clientName?: SortOrder
    status?: SortOrder
    firecrawlJobId?: SortOrder
    negativeMedia?: SortOrder
    pepScreening?: SortOrder
    financialHealth?: SortOrder
    statutoryEnquiries?: SortOrder
    mergersActivity?: SortOrder
    overallRiskLevel?: SortOrder
    riskFlags?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type PublicDataAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    watchListClientId?: SortOrder
    clientName?: SortOrder
    status?: SortOrder
    firecrawlJobId?: SortOrder
    overallRiskLevel?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type PublicDataAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    monitoringJobId?: SortOrder
    watchListClientId?: SortOrder
    clientName?: SortOrder
    status?: SortOrder
    firecrawlJobId?: SortOrder
    overallRiskLevel?: SortOrder
    createdAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ManualInvestigativeReportCountOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    analystId?: SortOrder
    findings?: SortOrder
    riskLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManualInvestigativeReportMaxOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    analystId?: SortOrder
    findings?: SortOrder
    riskLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ManualInvestigativeReportMinOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    analystId?: SortOrder
    findings?: SortOrder
    riskLevel?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SandboxCountOrderByAggregateInput = {
    id?: SortOrder
    alert_id?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type SandboxMaxOrderByAggregateInput = {
    id?: SortOrder
    alert_id?: SortOrder
    createdAt?: SortOrder
  }

  export type SandboxMinOrderByAggregateInput = {
    id?: SortOrder
    alert_id?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AnomalyReportCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    gcsPath?: SortOrder
    anomalyCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportAvgOrderByAggregateInput = {
    anomalyCount?: SortOrder
  }

  export type AnomalyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    gcsPath?: SortOrder
    anomalyCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    gcsPath?: SortOrder
    anomalyCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AnomalyReportSumOrderByAggregateInput = {
    anomalyCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    link?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PublicDataAnalysisCreateNestedManyWithoutMonitoringJobInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput> | PublicDataAnalysisCreateWithoutMonitoringJobInput[] | PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput | PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput[]
    createMany?: PublicDataAnalysisCreateManyMonitoringJobInputEnvelope
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
  }

  export type RiskProfileCreateNestedOneWithoutMonitoringJobInput = {
    create?: XOR<RiskProfileCreateWithoutMonitoringJobInput, RiskProfileUncheckedCreateWithoutMonitoringJobInput>
    connectOrCreate?: RiskProfileCreateOrConnectWithoutMonitoringJobInput
    connect?: RiskProfileWhereUniqueInput
  }

  export type PublicDataAnalysisUncheckedCreateNestedManyWithoutMonitoringJobInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput> | PublicDataAnalysisCreateWithoutMonitoringJobInput[] | PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput | PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput[]
    createMany?: PublicDataAnalysisCreateManyMonitoringJobInputEnvelope
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
  }

  export type RiskProfileUncheckedCreateNestedOneWithoutMonitoringJobInput = {
    create?: XOR<RiskProfileCreateWithoutMonitoringJobInput, RiskProfileUncheckedCreateWithoutMonitoringJobInput>
    connectOrCreate?: RiskProfileCreateOrConnectWithoutMonitoringJobInput
    connect?: RiskProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type PublicDataAnalysisUpdateManyWithoutMonitoringJobNestedInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput> | PublicDataAnalysisCreateWithoutMonitoringJobInput[] | PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput | PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput[]
    upsert?: PublicDataAnalysisUpsertWithWhereUniqueWithoutMonitoringJobInput | PublicDataAnalysisUpsertWithWhereUniqueWithoutMonitoringJobInput[]
    createMany?: PublicDataAnalysisCreateManyMonitoringJobInputEnvelope
    set?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    disconnect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    delete?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    update?: PublicDataAnalysisUpdateWithWhereUniqueWithoutMonitoringJobInput | PublicDataAnalysisUpdateWithWhereUniqueWithoutMonitoringJobInput[]
    updateMany?: PublicDataAnalysisUpdateManyWithWhereWithoutMonitoringJobInput | PublicDataAnalysisUpdateManyWithWhereWithoutMonitoringJobInput[]
    deleteMany?: PublicDataAnalysisScalarWhereInput | PublicDataAnalysisScalarWhereInput[]
  }

  export type RiskProfileUpdateOneWithoutMonitoringJobNestedInput = {
    create?: XOR<RiskProfileCreateWithoutMonitoringJobInput, RiskProfileUncheckedCreateWithoutMonitoringJobInput>
    connectOrCreate?: RiskProfileCreateOrConnectWithoutMonitoringJobInput
    upsert?: RiskProfileUpsertWithoutMonitoringJobInput
    disconnect?: RiskProfileWhereInput | boolean
    delete?: RiskProfileWhereInput | boolean
    connect?: RiskProfileWhereUniqueInput
    update?: XOR<XOR<RiskProfileUpdateToOneWithWhereWithoutMonitoringJobInput, RiskProfileUpdateWithoutMonitoringJobInput>, RiskProfileUncheckedUpdateWithoutMonitoringJobInput>
  }

  export type PublicDataAnalysisUncheckedUpdateManyWithoutMonitoringJobNestedInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput> | PublicDataAnalysisCreateWithoutMonitoringJobInput[] | PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput | PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput[]
    upsert?: PublicDataAnalysisUpsertWithWhereUniqueWithoutMonitoringJobInput | PublicDataAnalysisUpsertWithWhereUniqueWithoutMonitoringJobInput[]
    createMany?: PublicDataAnalysisCreateManyMonitoringJobInputEnvelope
    set?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    disconnect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    delete?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    update?: PublicDataAnalysisUpdateWithWhereUniqueWithoutMonitoringJobInput | PublicDataAnalysisUpdateWithWhereUniqueWithoutMonitoringJobInput[]
    updateMany?: PublicDataAnalysisUpdateManyWithWhereWithoutMonitoringJobInput | PublicDataAnalysisUpdateManyWithWhereWithoutMonitoringJobInput[]
    deleteMany?: PublicDataAnalysisScalarWhereInput | PublicDataAnalysisScalarWhereInput[]
  }

  export type RiskProfileUncheckedUpdateOneWithoutMonitoringJobNestedInput = {
    create?: XOR<RiskProfileCreateWithoutMonitoringJobInput, RiskProfileUncheckedCreateWithoutMonitoringJobInput>
    connectOrCreate?: RiskProfileCreateOrConnectWithoutMonitoringJobInput
    upsert?: RiskProfileUpsertWithoutMonitoringJobInput
    disconnect?: RiskProfileWhereInput | boolean
    delete?: RiskProfileWhereInput | boolean
    connect?: RiskProfileWhereUniqueInput
    update?: XOR<XOR<RiskProfileUpdateToOneWithWhereWithoutMonitoringJobInput, RiskProfileUpdateWithoutMonitoringJobInput>, RiskProfileUncheckedUpdateWithoutMonitoringJobInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RiskAlertCreateNestedManyWithoutRiskProfileInput = {
    create?: XOR<RiskAlertCreateWithoutRiskProfileInput, RiskAlertUncheckedCreateWithoutRiskProfileInput> | RiskAlertCreateWithoutRiskProfileInput[] | RiskAlertUncheckedCreateWithoutRiskProfileInput[]
    connectOrCreate?: RiskAlertCreateOrConnectWithoutRiskProfileInput | RiskAlertCreateOrConnectWithoutRiskProfileInput[]
    createMany?: RiskAlertCreateManyRiskProfileInputEnvelope
    connect?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
  }

  export type MonitoringJobCreateNestedOneWithoutRiskProfileInput = {
    create?: XOR<MonitoringJobCreateWithoutRiskProfileInput, MonitoringJobUncheckedCreateWithoutRiskProfileInput>
    connectOrCreate?: MonitoringJobCreateOrConnectWithoutRiskProfileInput
    connect?: MonitoringJobWhereUniqueInput
  }

  export type RiskAlertUncheckedCreateNestedManyWithoutRiskProfileInput = {
    create?: XOR<RiskAlertCreateWithoutRiskProfileInput, RiskAlertUncheckedCreateWithoutRiskProfileInput> | RiskAlertCreateWithoutRiskProfileInput[] | RiskAlertUncheckedCreateWithoutRiskProfileInput[]
    connectOrCreate?: RiskAlertCreateOrConnectWithoutRiskProfileInput | RiskAlertCreateOrConnectWithoutRiskProfileInput[]
    createMany?: RiskAlertCreateManyRiskProfileInputEnvelope
    connect?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RiskAlertUpdateManyWithoutRiskProfileNestedInput = {
    create?: XOR<RiskAlertCreateWithoutRiskProfileInput, RiskAlertUncheckedCreateWithoutRiskProfileInput> | RiskAlertCreateWithoutRiskProfileInput[] | RiskAlertUncheckedCreateWithoutRiskProfileInput[]
    connectOrCreate?: RiskAlertCreateOrConnectWithoutRiskProfileInput | RiskAlertCreateOrConnectWithoutRiskProfileInput[]
    upsert?: RiskAlertUpsertWithWhereUniqueWithoutRiskProfileInput | RiskAlertUpsertWithWhereUniqueWithoutRiskProfileInput[]
    createMany?: RiskAlertCreateManyRiskProfileInputEnvelope
    set?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    disconnect?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    delete?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    connect?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    update?: RiskAlertUpdateWithWhereUniqueWithoutRiskProfileInput | RiskAlertUpdateWithWhereUniqueWithoutRiskProfileInput[]
    updateMany?: RiskAlertUpdateManyWithWhereWithoutRiskProfileInput | RiskAlertUpdateManyWithWhereWithoutRiskProfileInput[]
    deleteMany?: RiskAlertScalarWhereInput | RiskAlertScalarWhereInput[]
  }

  export type MonitoringJobUpdateOneRequiredWithoutRiskProfileNestedInput = {
    create?: XOR<MonitoringJobCreateWithoutRiskProfileInput, MonitoringJobUncheckedCreateWithoutRiskProfileInput>
    connectOrCreate?: MonitoringJobCreateOrConnectWithoutRiskProfileInput
    upsert?: MonitoringJobUpsertWithoutRiskProfileInput
    connect?: MonitoringJobWhereUniqueInput
    update?: XOR<XOR<MonitoringJobUpdateToOneWithWhereWithoutRiskProfileInput, MonitoringJobUpdateWithoutRiskProfileInput>, MonitoringJobUncheckedUpdateWithoutRiskProfileInput>
  }

  export type RiskAlertUncheckedUpdateManyWithoutRiskProfileNestedInput = {
    create?: XOR<RiskAlertCreateWithoutRiskProfileInput, RiskAlertUncheckedCreateWithoutRiskProfileInput> | RiskAlertCreateWithoutRiskProfileInput[] | RiskAlertUncheckedCreateWithoutRiskProfileInput[]
    connectOrCreate?: RiskAlertCreateOrConnectWithoutRiskProfileInput | RiskAlertCreateOrConnectWithoutRiskProfileInput[]
    upsert?: RiskAlertUpsertWithWhereUniqueWithoutRiskProfileInput | RiskAlertUpsertWithWhereUniqueWithoutRiskProfileInput[]
    createMany?: RiskAlertCreateManyRiskProfileInputEnvelope
    set?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    disconnect?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    delete?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    connect?: RiskAlertWhereUniqueInput | RiskAlertWhereUniqueInput[]
    update?: RiskAlertUpdateWithWhereUniqueWithoutRiskProfileInput | RiskAlertUpdateWithWhereUniqueWithoutRiskProfileInput[]
    updateMany?: RiskAlertUpdateManyWithWhereWithoutRiskProfileInput | RiskAlertUpdateManyWithWhereWithoutRiskProfileInput[]
    deleteMany?: RiskAlertScalarWhereInput | RiskAlertScalarWhereInput[]
  }

  export type RiskProfileCreateNestedOneWithoutAlertsInput = {
    create?: XOR<RiskProfileCreateWithoutAlertsInput, RiskProfileUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: RiskProfileCreateOrConnectWithoutAlertsInput
    connect?: RiskProfileWhereUniqueInput
  }

  export type RiskProfileUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<RiskProfileCreateWithoutAlertsInput, RiskProfileUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: RiskProfileCreateOrConnectWithoutAlertsInput
    upsert?: RiskProfileUpsertWithoutAlertsInput
    connect?: RiskProfileWhereUniqueInput
    update?: XOR<XOR<RiskProfileUpdateToOneWithWhereWithoutAlertsInput, RiskProfileUpdateWithoutAlertsInput>, RiskProfileUncheckedUpdateWithoutAlertsInput>
  }

  export type PublicDataAnalysisCreateNestedManyWithoutWatchListClientInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutWatchListClientInput, PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput> | PublicDataAnalysisCreateWithoutWatchListClientInput[] | PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput | PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput[]
    createMany?: PublicDataAnalysisCreateManyWatchListClientInputEnvelope
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
  }

  export type PublicDataAnalysisUncheckedCreateNestedManyWithoutWatchListClientInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutWatchListClientInput, PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput> | PublicDataAnalysisCreateWithoutWatchListClientInput[] | PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput | PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput[]
    createMany?: PublicDataAnalysisCreateManyWatchListClientInputEnvelope
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
  }

  export type PublicDataAnalysisUpdateManyWithoutWatchListClientNestedInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutWatchListClientInput, PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput> | PublicDataAnalysisCreateWithoutWatchListClientInput[] | PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput | PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput[]
    upsert?: PublicDataAnalysisUpsertWithWhereUniqueWithoutWatchListClientInput | PublicDataAnalysisUpsertWithWhereUniqueWithoutWatchListClientInput[]
    createMany?: PublicDataAnalysisCreateManyWatchListClientInputEnvelope
    set?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    disconnect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    delete?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    update?: PublicDataAnalysisUpdateWithWhereUniqueWithoutWatchListClientInput | PublicDataAnalysisUpdateWithWhereUniqueWithoutWatchListClientInput[]
    updateMany?: PublicDataAnalysisUpdateManyWithWhereWithoutWatchListClientInput | PublicDataAnalysisUpdateManyWithWhereWithoutWatchListClientInput[]
    deleteMany?: PublicDataAnalysisScalarWhereInput | PublicDataAnalysisScalarWhereInput[]
  }

  export type PublicDataAnalysisUncheckedUpdateManyWithoutWatchListClientNestedInput = {
    create?: XOR<PublicDataAnalysisCreateWithoutWatchListClientInput, PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput> | PublicDataAnalysisCreateWithoutWatchListClientInput[] | PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput[]
    connectOrCreate?: PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput | PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput[]
    upsert?: PublicDataAnalysisUpsertWithWhereUniqueWithoutWatchListClientInput | PublicDataAnalysisUpsertWithWhereUniqueWithoutWatchListClientInput[]
    createMany?: PublicDataAnalysisCreateManyWatchListClientInputEnvelope
    set?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    disconnect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    delete?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    connect?: PublicDataAnalysisWhereUniqueInput | PublicDataAnalysisWhereUniqueInput[]
    update?: PublicDataAnalysisUpdateWithWhereUniqueWithoutWatchListClientInput | PublicDataAnalysisUpdateWithWhereUniqueWithoutWatchListClientInput[]
    updateMany?: PublicDataAnalysisUpdateManyWithWhereWithoutWatchListClientInput | PublicDataAnalysisUpdateManyWithWhereWithoutWatchListClientInput[]
    deleteMany?: PublicDataAnalysisScalarWhereInput | PublicDataAnalysisScalarWhereInput[]
  }

  export type PublicDataAnalysisCreateriskFlagsInput = {
    set: string[]
  }

  export type MonitoringJobCreateNestedOneWithoutPublicDataAnalysesInput = {
    create?: XOR<MonitoringJobCreateWithoutPublicDataAnalysesInput, MonitoringJobUncheckedCreateWithoutPublicDataAnalysesInput>
    connectOrCreate?: MonitoringJobCreateOrConnectWithoutPublicDataAnalysesInput
    connect?: MonitoringJobWhereUniqueInput
  }

  export type WatchListClientCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<WatchListClientCreateWithoutAnalysesInput, WatchListClientUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: WatchListClientCreateOrConnectWithoutAnalysesInput
    connect?: WatchListClientWhereUniqueInput
  }

  export type PublicDataAnalysisUpdateriskFlagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MonitoringJobUpdateOneWithoutPublicDataAnalysesNestedInput = {
    create?: XOR<MonitoringJobCreateWithoutPublicDataAnalysesInput, MonitoringJobUncheckedCreateWithoutPublicDataAnalysesInput>
    connectOrCreate?: MonitoringJobCreateOrConnectWithoutPublicDataAnalysesInput
    upsert?: MonitoringJobUpsertWithoutPublicDataAnalysesInput
    disconnect?: MonitoringJobWhereInput | boolean
    delete?: MonitoringJobWhereInput | boolean
    connect?: MonitoringJobWhereUniqueInput
    update?: XOR<XOR<MonitoringJobUpdateToOneWithWhereWithoutPublicDataAnalysesInput, MonitoringJobUpdateWithoutPublicDataAnalysesInput>, MonitoringJobUncheckedUpdateWithoutPublicDataAnalysesInput>
  }

  export type WatchListClientUpdateOneWithoutAnalysesNestedInput = {
    create?: XOR<WatchListClientCreateWithoutAnalysesInput, WatchListClientUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: WatchListClientCreateOrConnectWithoutAnalysesInput
    upsert?: WatchListClientUpsertWithoutAnalysesInput
    disconnect?: WatchListClientWhereInput | boolean
    delete?: WatchListClientWhereInput | boolean
    connect?: WatchListClientWhereUniqueInput
    update?: XOR<XOR<WatchListClientUpdateToOneWithWhereWithoutAnalysesInput, WatchListClientUpdateWithoutAnalysesInput>, WatchListClientUncheckedUpdateWithoutAnalysesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PublicDataAnalysisCreateWithoutMonitoringJobInput = {
    id?: string
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
    watchListClient?: WatchListClientCreateNestedOneWithoutAnalysesInput
  }

  export type PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput = {
    id?: string
    watchListClientId?: string | null
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PublicDataAnalysisCreateOrConnectWithoutMonitoringJobInput = {
    where: PublicDataAnalysisWhereUniqueInput
    create: XOR<PublicDataAnalysisCreateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput>
  }

  export type PublicDataAnalysisCreateManyMonitoringJobInputEnvelope = {
    data: PublicDataAnalysisCreateManyMonitoringJobInput | PublicDataAnalysisCreateManyMonitoringJobInput[]
    skipDuplicates?: boolean
  }

  export type RiskProfileCreateWithoutMonitoringJobInput = {
    id?: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
    alerts?: RiskAlertCreateNestedManyWithoutRiskProfileInput
  }

  export type RiskProfileUncheckedCreateWithoutMonitoringJobInput = {
    id?: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
    alerts?: RiskAlertUncheckedCreateNestedManyWithoutRiskProfileInput
  }

  export type RiskProfileCreateOrConnectWithoutMonitoringJobInput = {
    where: RiskProfileWhereUniqueInput
    create: XOR<RiskProfileCreateWithoutMonitoringJobInput, RiskProfileUncheckedCreateWithoutMonitoringJobInput>
  }

  export type PublicDataAnalysisUpsertWithWhereUniqueWithoutMonitoringJobInput = {
    where: PublicDataAnalysisWhereUniqueInput
    update: XOR<PublicDataAnalysisUpdateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedUpdateWithoutMonitoringJobInput>
    create: XOR<PublicDataAnalysisCreateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedCreateWithoutMonitoringJobInput>
  }

  export type PublicDataAnalysisUpdateWithWhereUniqueWithoutMonitoringJobInput = {
    where: PublicDataAnalysisWhereUniqueInput
    data: XOR<PublicDataAnalysisUpdateWithoutMonitoringJobInput, PublicDataAnalysisUncheckedUpdateWithoutMonitoringJobInput>
  }

  export type PublicDataAnalysisUpdateManyWithWhereWithoutMonitoringJobInput = {
    where: PublicDataAnalysisScalarWhereInput
    data: XOR<PublicDataAnalysisUpdateManyMutationInput, PublicDataAnalysisUncheckedUpdateManyWithoutMonitoringJobInput>
  }

  export type PublicDataAnalysisScalarWhereInput = {
    AND?: PublicDataAnalysisScalarWhereInput | PublicDataAnalysisScalarWhereInput[]
    OR?: PublicDataAnalysisScalarWhereInput[]
    NOT?: PublicDataAnalysisScalarWhereInput | PublicDataAnalysisScalarWhereInput[]
    id?: StringFilter<"PublicDataAnalysis"> | string
    monitoringJobId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    watchListClientId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    clientName?: StringFilter<"PublicDataAnalysis"> | string
    status?: StringFilter<"PublicDataAnalysis"> | string
    firecrawlJobId?: StringNullableFilter<"PublicDataAnalysis"> | string | null
    negativeMedia?: JsonNullableFilter<"PublicDataAnalysis">
    pepScreening?: JsonNullableFilter<"PublicDataAnalysis">
    financialHealth?: JsonNullableFilter<"PublicDataAnalysis">
    statutoryEnquiries?: JsonNullableFilter<"PublicDataAnalysis">
    mergersActivity?: JsonNullableFilter<"PublicDataAnalysis">
    overallRiskLevel?: StringFilter<"PublicDataAnalysis"> | string
    riskFlags?: StringNullableListFilter<"PublicDataAnalysis">
    createdAt?: DateTimeFilter<"PublicDataAnalysis"> | Date | string
    completedAt?: DateTimeNullableFilter<"PublicDataAnalysis"> | Date | string | null
  }

  export type RiskProfileUpsertWithoutMonitoringJobInput = {
    update: XOR<RiskProfileUpdateWithoutMonitoringJobInput, RiskProfileUncheckedUpdateWithoutMonitoringJobInput>
    create: XOR<RiskProfileCreateWithoutMonitoringJobInput, RiskProfileUncheckedCreateWithoutMonitoringJobInput>
    where?: RiskProfileWhereInput
  }

  export type RiskProfileUpdateToOneWithWhereWithoutMonitoringJobInput = {
    where?: RiskProfileWhereInput
    data: XOR<RiskProfileUpdateWithoutMonitoringJobInput, RiskProfileUncheckedUpdateWithoutMonitoringJobInput>
  }

  export type RiskProfileUpdateWithoutMonitoringJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: RiskAlertUpdateManyWithoutRiskProfileNestedInput
  }

  export type RiskProfileUncheckedUpdateWithoutMonitoringJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: RiskAlertUncheckedUpdateManyWithoutRiskProfileNestedInput
  }

  export type RiskAlertCreateWithoutRiskProfileInput = {
    id?: string
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskAlertUncheckedCreateWithoutRiskProfileInput = {
    id?: string
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskAlertCreateOrConnectWithoutRiskProfileInput = {
    where: RiskAlertWhereUniqueInput
    create: XOR<RiskAlertCreateWithoutRiskProfileInput, RiskAlertUncheckedCreateWithoutRiskProfileInput>
  }

  export type RiskAlertCreateManyRiskProfileInputEnvelope = {
    data: RiskAlertCreateManyRiskProfileInput | RiskAlertCreateManyRiskProfileInput[]
    skipDuplicates?: boolean
  }

  export type MonitoringJobCreateWithoutRiskProfileInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisCreateNestedManyWithoutMonitoringJobInput
  }

  export type MonitoringJobUncheckedCreateWithoutRiskProfileInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisUncheckedCreateNestedManyWithoutMonitoringJobInput
  }

  export type MonitoringJobCreateOrConnectWithoutRiskProfileInput = {
    where: MonitoringJobWhereUniqueInput
    create: XOR<MonitoringJobCreateWithoutRiskProfileInput, MonitoringJobUncheckedCreateWithoutRiskProfileInput>
  }

  export type RiskAlertUpsertWithWhereUniqueWithoutRiskProfileInput = {
    where: RiskAlertWhereUniqueInput
    update: XOR<RiskAlertUpdateWithoutRiskProfileInput, RiskAlertUncheckedUpdateWithoutRiskProfileInput>
    create: XOR<RiskAlertCreateWithoutRiskProfileInput, RiskAlertUncheckedCreateWithoutRiskProfileInput>
  }

  export type RiskAlertUpdateWithWhereUniqueWithoutRiskProfileInput = {
    where: RiskAlertWhereUniqueInput
    data: XOR<RiskAlertUpdateWithoutRiskProfileInput, RiskAlertUncheckedUpdateWithoutRiskProfileInput>
  }

  export type RiskAlertUpdateManyWithWhereWithoutRiskProfileInput = {
    where: RiskAlertScalarWhereInput
    data: XOR<RiskAlertUpdateManyMutationInput, RiskAlertUncheckedUpdateManyWithoutRiskProfileInput>
  }

  export type RiskAlertScalarWhereInput = {
    AND?: RiskAlertScalarWhereInput | RiskAlertScalarWhereInput[]
    OR?: RiskAlertScalarWhereInput[]
    NOT?: RiskAlertScalarWhereInput | RiskAlertScalarWhereInput[]
    id?: StringFilter<"RiskAlert"> | string
    riskProfileId?: StringFilter<"RiskAlert"> | string
    type?: StringFilter<"RiskAlert"> | string
    severity?: StringFilter<"RiskAlert"> | string
    description?: StringFilter<"RiskAlert"> | string
    metadata?: JsonNullableFilter<"RiskAlert">
    createdAt?: DateTimeFilter<"RiskAlert"> | Date | string
  }

  export type MonitoringJobUpsertWithoutRiskProfileInput = {
    update: XOR<MonitoringJobUpdateWithoutRiskProfileInput, MonitoringJobUncheckedUpdateWithoutRiskProfileInput>
    create: XOR<MonitoringJobCreateWithoutRiskProfileInput, MonitoringJobUncheckedCreateWithoutRiskProfileInput>
    where?: MonitoringJobWhereInput
  }

  export type MonitoringJobUpdateToOneWithWhereWithoutRiskProfileInput = {
    where?: MonitoringJobWhereInput
    data: XOR<MonitoringJobUpdateWithoutRiskProfileInput, MonitoringJobUncheckedUpdateWithoutRiskProfileInput>
  }

  export type MonitoringJobUpdateWithoutRiskProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisUpdateManyWithoutMonitoringJobNestedInput
  }

  export type MonitoringJobUncheckedUpdateWithoutRiskProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    publicDataAnalyses?: PublicDataAnalysisUncheckedUpdateManyWithoutMonitoringJobNestedInput
  }

  export type RiskProfileCreateWithoutAlertsInput = {
    id?: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
    monitoringJob: MonitoringJobCreateNestedOneWithoutRiskProfileInput
  }

  export type RiskProfileUncheckedCreateWithoutAlertsInput = {
    id?: string
    monitoringJobId: string
    bqClientId?: number | null
    avgMonthlyVolume?: Decimal | DecimalJsLike | number | string | null
    volatilityScore?: Decimal | DecimalJsLike | number | string | null
    riskScore?: number | null
    lastAnalysed?: Date | string
  }

  export type RiskProfileCreateOrConnectWithoutAlertsInput = {
    where: RiskProfileWhereUniqueInput
    create: XOR<RiskProfileCreateWithoutAlertsInput, RiskProfileUncheckedCreateWithoutAlertsInput>
  }

  export type RiskProfileUpsertWithoutAlertsInput = {
    update: XOR<RiskProfileUpdateWithoutAlertsInput, RiskProfileUncheckedUpdateWithoutAlertsInput>
    create: XOR<RiskProfileCreateWithoutAlertsInput, RiskProfileUncheckedCreateWithoutAlertsInput>
    where?: RiskProfileWhereInput
  }

  export type RiskProfileUpdateToOneWithWhereWithoutAlertsInput = {
    where?: RiskProfileWhereInput
    data: XOR<RiskProfileUpdateWithoutAlertsInput, RiskProfileUncheckedUpdateWithoutAlertsInput>
  }

  export type RiskProfileUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
    monitoringJob?: MonitoringJobUpdateOneRequiredWithoutRiskProfileNestedInput
  }

  export type RiskProfileUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: StringFieldUpdateOperationsInput | string
    bqClientId?: NullableIntFieldUpdateOperationsInput | number | null
    avgMonthlyVolume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volatilityScore?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAnalysed?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicDataAnalysisCreateWithoutWatchListClientInput = {
    id?: string
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
    monitoringJob?: MonitoringJobCreateNestedOneWithoutPublicDataAnalysesInput
  }

  export type PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput = {
    id?: string
    monitoringJobId?: string | null
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PublicDataAnalysisCreateOrConnectWithoutWatchListClientInput = {
    where: PublicDataAnalysisWhereUniqueInput
    create: XOR<PublicDataAnalysisCreateWithoutWatchListClientInput, PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput>
  }

  export type PublicDataAnalysisCreateManyWatchListClientInputEnvelope = {
    data: PublicDataAnalysisCreateManyWatchListClientInput | PublicDataAnalysisCreateManyWatchListClientInput[]
    skipDuplicates?: boolean
  }

  export type PublicDataAnalysisUpsertWithWhereUniqueWithoutWatchListClientInput = {
    where: PublicDataAnalysisWhereUniqueInput
    update: XOR<PublicDataAnalysisUpdateWithoutWatchListClientInput, PublicDataAnalysisUncheckedUpdateWithoutWatchListClientInput>
    create: XOR<PublicDataAnalysisCreateWithoutWatchListClientInput, PublicDataAnalysisUncheckedCreateWithoutWatchListClientInput>
  }

  export type PublicDataAnalysisUpdateWithWhereUniqueWithoutWatchListClientInput = {
    where: PublicDataAnalysisWhereUniqueInput
    data: XOR<PublicDataAnalysisUpdateWithoutWatchListClientInput, PublicDataAnalysisUncheckedUpdateWithoutWatchListClientInput>
  }

  export type PublicDataAnalysisUpdateManyWithWhereWithoutWatchListClientInput = {
    where: PublicDataAnalysisScalarWhereInput
    data: XOR<PublicDataAnalysisUpdateManyMutationInput, PublicDataAnalysisUncheckedUpdateManyWithoutWatchListClientInput>
  }

  export type MonitoringJobCreateWithoutPublicDataAnalysesInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
    riskProfile?: RiskProfileCreateNestedOneWithoutMonitoringJobInput
  }

  export type MonitoringJobUncheckedCreateWithoutPublicDataAnalysesInput = {
    id?: string
    clientName: string
    cronExpression: string
    nextRunAt: Date | string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    type?: $Enums.JobType
    riskProfile?: RiskProfileUncheckedCreateNestedOneWithoutMonitoringJobInput
  }

  export type MonitoringJobCreateOrConnectWithoutPublicDataAnalysesInput = {
    where: MonitoringJobWhereUniqueInput
    create: XOR<MonitoringJobCreateWithoutPublicDataAnalysesInput, MonitoringJobUncheckedCreateWithoutPublicDataAnalysesInput>
  }

  export type WatchListClientCreateWithoutAnalysesInput = {
    id?: string
    name: string
    priority?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchListClientUncheckedCreateWithoutAnalysesInput = {
    id?: string
    name: string
    priority?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WatchListClientCreateOrConnectWithoutAnalysesInput = {
    where: WatchListClientWhereUniqueInput
    create: XOR<WatchListClientCreateWithoutAnalysesInput, WatchListClientUncheckedCreateWithoutAnalysesInput>
  }

  export type MonitoringJobUpsertWithoutPublicDataAnalysesInput = {
    update: XOR<MonitoringJobUpdateWithoutPublicDataAnalysesInput, MonitoringJobUncheckedUpdateWithoutPublicDataAnalysesInput>
    create: XOR<MonitoringJobCreateWithoutPublicDataAnalysesInput, MonitoringJobUncheckedCreateWithoutPublicDataAnalysesInput>
    where?: MonitoringJobWhereInput
  }

  export type MonitoringJobUpdateToOneWithWhereWithoutPublicDataAnalysesInput = {
    where?: MonitoringJobWhereInput
    data: XOR<MonitoringJobUpdateWithoutPublicDataAnalysesInput, MonitoringJobUncheckedUpdateWithoutPublicDataAnalysesInput>
  }

  export type MonitoringJobUpdateWithoutPublicDataAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    riskProfile?: RiskProfileUpdateOneWithoutMonitoringJobNestedInput
  }

  export type MonitoringJobUncheckedUpdateWithoutPublicDataAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    cronExpression?: StringFieldUpdateOperationsInput | string
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    riskProfile?: RiskProfileUncheckedUpdateOneWithoutMonitoringJobNestedInput
  }

  export type WatchListClientUpsertWithoutAnalysesInput = {
    update: XOR<WatchListClientUpdateWithoutAnalysesInput, WatchListClientUncheckedUpdateWithoutAnalysesInput>
    create: XOR<WatchListClientCreateWithoutAnalysesInput, WatchListClientUncheckedCreateWithoutAnalysesInput>
    where?: WatchListClientWhereInput
  }

  export type WatchListClientUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: WatchListClientWhereInput
    data: XOR<WatchListClientUpdateWithoutAnalysesInput, WatchListClientUncheckedUpdateWithoutAnalysesInput>
  }

  export type WatchListClientUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchListClientUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicDataAnalysisCreateManyMonitoringJobInput = {
    id?: string
    watchListClientId?: string | null
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PublicDataAnalysisUpdateWithoutMonitoringJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    watchListClient?: WatchListClientUpdateOneWithoutAnalysesNestedInput
  }

  export type PublicDataAnalysisUncheckedUpdateWithoutMonitoringJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchListClientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicDataAnalysisUncheckedUpdateManyWithoutMonitoringJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchListClientId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RiskAlertCreateManyRiskProfileInput = {
    id?: string
    type: string
    severity: string
    description: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RiskAlertUpdateWithoutRiskProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAlertUncheckedUpdateWithoutRiskProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAlertUncheckedUpdateManyWithoutRiskProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicDataAnalysisCreateManyWatchListClientInput = {
    id?: string
    monitoringJobId?: string | null
    clientName: string
    status?: string
    firecrawlJobId?: string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: string
    riskFlags?: PublicDataAnalysisCreateriskFlagsInput | string[]
    createdAt?: Date | string
    completedAt?: Date | string | null
  }

  export type PublicDataAnalysisUpdateWithoutWatchListClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monitoringJob?: MonitoringJobUpdateOneWithoutPublicDataAnalysesNestedInput
  }

  export type PublicDataAnalysisUncheckedUpdateWithoutWatchListClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicDataAnalysisUncheckedUpdateManyWithoutWatchListClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitoringJobId?: NullableStringFieldUpdateOperationsInput | string | null
    clientName?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    firecrawlJobId?: NullableStringFieldUpdateOperationsInput | string | null
    negativeMedia?: NullableJsonNullValueInput | InputJsonValue
    pepScreening?: NullableJsonNullValueInput | InputJsonValue
    financialHealth?: NullableJsonNullValueInput | InputJsonValue
    statutoryEnquiries?: NullableJsonNullValueInput | InputJsonValue
    mergersActivity?: NullableJsonNullValueInput | InputJsonValue
    overallRiskLevel?: StringFieldUpdateOperationsInput | string
    riskFlags?: PublicDataAnalysisUpdateriskFlagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}