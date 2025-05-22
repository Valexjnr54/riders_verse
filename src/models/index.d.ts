
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Rider
 * 
 */
export type Rider = $Result.DefaultSelection<Prisma.$RiderPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model nigerian_banks
 * 
 */
export type nigerian_banks = $Result.DefaultSelection<Prisma.$nigerian_banksPayload>
/**
 * Model delivery_payment
 * 
 */
export type delivery_payment = $Result.DefaultSelection<Prisma.$delivery_paymentPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model Operating_areas
 * 
 */
export type Operating_areas = $Result.DefaultSelection<Prisma.$Operating_areasPayload>
/**
 * Model Bank_details
 * 
 */
export type Bank_details = $Result.DefaultSelection<Prisma.$Bank_detailsPayload>
/**
 * Model Rider_rating
 * 
 */
export type Rider_rating = $Result.DefaultSelection<Prisma.$Rider_ratingPayload>
/**
 * Model Rider_credentials
 * 
 */
export type Rider_credentials = $Result.DefaultSelection<Prisma.$Rider_credentialsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Available: 'Available',
  Pending: 'Pending',
  Delivered: 'Delivered',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  User: 'User',
  Rider: 'Rider',
  Admin: 'Admin',
  Vendor: 'Vendor'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.rider.findMany()
    * ```
    */
  get rider(): Prisma.RiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nigerian_banks`: Exposes CRUD operations for the **nigerian_banks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nigerian_banks
    * const nigerian_banks = await prisma.nigerian_banks.findMany()
    * ```
    */
  get nigerian_banks(): Prisma.nigerian_banksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery_payment`: Exposes CRUD operations for the **delivery_payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Delivery_payments
    * const delivery_payments = await prisma.delivery_payment.findMany()
    * ```
    */
  get delivery_payment(): Prisma.delivery_paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operating_areas`: Exposes CRUD operations for the **Operating_areas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operating_areas
    * const operating_areas = await prisma.operating_areas.findMany()
    * ```
    */
  get operating_areas(): Prisma.Operating_areasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank_details`: Exposes CRUD operations for the **Bank_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bank_details
    * const bank_details = await prisma.bank_details.findMany()
    * ```
    */
  get bank_details(): Prisma.Bank_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rider_rating`: Exposes CRUD operations for the **Rider_rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rider_ratings
    * const rider_ratings = await prisma.rider_rating.findMany()
    * ```
    */
  get rider_rating(): Prisma.Rider_ratingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rider_credentials`: Exposes CRUD operations for the **Rider_credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rider_credentials
    * const rider_credentials = await prisma.rider_credentials.findMany()
    * ```
    */
  get rider_credentials(): Prisma.Rider_credentialsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Admin: 'Admin',
    User: 'User',
    Vendor: 'Vendor',
    Rider: 'Rider',
    Delivery: 'Delivery',
    nigerian_banks: 'nigerian_banks',
    delivery_payment: 'delivery_payment',
    Proposal: 'Proposal',
    Operating_areas: 'Operating_areas',
    Bank_details: 'Bank_details',
    Rider_rating: 'Rider_rating',
    Rider_credentials: 'Rider_credentials'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "user" | "vendor" | "rider" | "delivery" | "nigerian_banks" | "delivery_payment" | "proposal" | "operating_areas" | "bank_details" | "rider_rating" | "rider_credentials"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Rider: {
        payload: Prisma.$RiderPayload<ExtArgs>
        fields: Prisma.RiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findFirst: {
            args: Prisma.RiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findMany: {
            args: Prisma.RiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          create: {
            args: Prisma.RiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          createMany: {
            args: Prisma.RiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          update: {
            args: Prisma.RiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          deleteMany: {
            args: Prisma.RiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          aggregate: {
            args: Prisma.RiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider>
          }
          groupBy: {
            args: Prisma.RiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiderCountArgs<ExtArgs>
            result: $Utils.Optional<RiderCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      nigerian_banks: {
        payload: Prisma.$nigerian_banksPayload<ExtArgs>
        fields: Prisma.nigerian_banksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nigerian_banksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nigerian_banksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>
          }
          findFirst: {
            args: Prisma.nigerian_banksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nigerian_banksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>
          }
          findMany: {
            args: Prisma.nigerian_banksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>[]
          }
          create: {
            args: Prisma.nigerian_banksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>
          }
          createMany: {
            args: Prisma.nigerian_banksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.nigerian_banksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>
          }
          update: {
            args: Prisma.nigerian_banksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>
          }
          deleteMany: {
            args: Prisma.nigerian_banksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nigerian_banksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nigerian_banksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nigerian_banksPayload>
          }
          aggregate: {
            args: Prisma.Nigerian_banksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNigerian_banks>
          }
          groupBy: {
            args: Prisma.nigerian_banksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nigerian_banksGroupByOutputType>[]
          }
          count: {
            args: Prisma.nigerian_banksCountArgs<ExtArgs>
            result: $Utils.Optional<Nigerian_banksCountAggregateOutputType> | number
          }
        }
      }
      delivery_payment: {
        payload: Prisma.$delivery_paymentPayload<ExtArgs>
        fields: Prisma.delivery_paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.delivery_paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.delivery_paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>
          }
          findFirst: {
            args: Prisma.delivery_paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.delivery_paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>
          }
          findMany: {
            args: Prisma.delivery_paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>[]
          }
          create: {
            args: Prisma.delivery_paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>
          }
          createMany: {
            args: Prisma.delivery_paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.delivery_paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>
          }
          update: {
            args: Prisma.delivery_paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>
          }
          deleteMany: {
            args: Prisma.delivery_paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.delivery_paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.delivery_paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$delivery_paymentPayload>
          }
          aggregate: {
            args: Prisma.Delivery_paymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery_payment>
          }
          groupBy: {
            args: Prisma.delivery_paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Delivery_paymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.delivery_paymentCountArgs<ExtArgs>
            result: $Utils.Optional<Delivery_paymentCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      Operating_areas: {
        payload: Prisma.$Operating_areasPayload<ExtArgs>
        fields: Prisma.Operating_areasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Operating_areasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Operating_areasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          findFirst: {
            args: Prisma.Operating_areasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Operating_areasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          findMany: {
            args: Prisma.Operating_areasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>[]
          }
          create: {
            args: Prisma.Operating_areasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          createMany: {
            args: Prisma.Operating_areasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Operating_areasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          update: {
            args: Prisma.Operating_areasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          deleteMany: {
            args: Prisma.Operating_areasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Operating_areasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Operating_areasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Operating_areasPayload>
          }
          aggregate: {
            args: Prisma.Operating_areasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperating_areas>
          }
          groupBy: {
            args: Prisma.Operating_areasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Operating_areasGroupByOutputType>[]
          }
          count: {
            args: Prisma.Operating_areasCountArgs<ExtArgs>
            result: $Utils.Optional<Operating_areasCountAggregateOutputType> | number
          }
        }
      }
      Bank_details: {
        payload: Prisma.$Bank_detailsPayload<ExtArgs>
        fields: Prisma.Bank_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bank_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bank_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          findFirst: {
            args: Prisma.Bank_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bank_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          findMany: {
            args: Prisma.Bank_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>[]
          }
          create: {
            args: Prisma.Bank_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          createMany: {
            args: Prisma.Bank_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Bank_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          update: {
            args: Prisma.Bank_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          deleteMany: {
            args: Prisma.Bank_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Bank_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Bank_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_detailsPayload>
          }
          aggregate: {
            args: Prisma.Bank_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank_details>
          }
          groupBy: {
            args: Prisma.Bank_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bank_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bank_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Bank_detailsCountAggregateOutputType> | number
          }
        }
      }
      Rider_rating: {
        payload: Prisma.$Rider_ratingPayload<ExtArgs>
        fields: Prisma.Rider_ratingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rider_ratingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rider_ratingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          findFirst: {
            args: Prisma.Rider_ratingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rider_ratingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          findMany: {
            args: Prisma.Rider_ratingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>[]
          }
          create: {
            args: Prisma.Rider_ratingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          createMany: {
            args: Prisma.Rider_ratingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Rider_ratingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          update: {
            args: Prisma.Rider_ratingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          deleteMany: {
            args: Prisma.Rider_ratingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Rider_ratingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Rider_ratingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_ratingPayload>
          }
          aggregate: {
            args: Prisma.Rider_ratingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider_rating>
          }
          groupBy: {
            args: Prisma.Rider_ratingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rider_ratingGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rider_ratingCountArgs<ExtArgs>
            result: $Utils.Optional<Rider_ratingCountAggregateOutputType> | number
          }
        }
      }
      Rider_credentials: {
        payload: Prisma.$Rider_credentialsPayload<ExtArgs>
        fields: Prisma.Rider_credentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Rider_credentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Rider_credentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          findFirst: {
            args: Prisma.Rider_credentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Rider_credentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          findMany: {
            args: Prisma.Rider_credentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>[]
          }
          create: {
            args: Prisma.Rider_credentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          createMany: {
            args: Prisma.Rider_credentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Rider_credentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          update: {
            args: Prisma.Rider_credentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          deleteMany: {
            args: Prisma.Rider_credentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Rider_credentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Rider_credentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Rider_credentialsPayload>
          }
          aggregate: {
            args: Prisma.Rider_credentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider_credentials>
          }
          groupBy: {
            args: Prisma.Rider_credentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rider_credentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Rider_credentialsCountArgs<ExtArgs>
            result: $Utils.Optional<Rider_credentialsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    user?: UserOmit
    vendor?: VendorOmit
    rider?: RiderOmit
    delivery?: DeliveryOmit
    nigerian_banks?: nigerian_banksOmit
    delivery_payment?: delivery_paymentOmit
    proposal?: ProposalOmit
    operating_areas?: Operating_areasOmit
    bank_details?: Bank_detailsOmit
    rider_rating?: Rider_ratingOmit
    rider_credentials?: Rider_credentialsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    delivery: number
    rider_rating: number
    delivery_payment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | UserCountOutputTypeCountDeliveryArgs
    rider_rating?: boolean | UserCountOutputTypeCountRider_ratingArgs
    delivery_payment?: boolean | UserCountOutputTypeCountDelivery_paymentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_ratingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDelivery_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: delivery_paymentWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    rider: number
    delivery: number
    bank_details: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | VendorCountOutputTypeCountRiderArgs
    delivery?: boolean | VendorCountOutputTypeCountDeliveryArgs
    bank_details?: boolean | VendorCountOutputTypeCountBank_detailsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountRiderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountBank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_detailsWhereInput
  }


  /**
   * Count Type RiderCountOutputType
   */

  export type RiderCountOutputType = {
    proposal: number
    rider_rating: number
    rider_credentials: number
  }

  export type RiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | RiderCountOutputTypeCountProposalArgs
    rider_rating?: boolean | RiderCountOutputTypeCountRider_ratingArgs
    rider_credentials?: boolean | RiderCountOutputTypeCountRider_credentialsArgs
  }

  // Custom InputTypes
  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiderCountOutputType
     */
    select?: RiderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountRider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_ratingWhereInput
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountRider_credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_credentialsWhereInput
  }


  /**
   * Count Type DeliveryCountOutputType
   */

  export type DeliveryCountOutputType = {
    proposal: number
  }

  export type DeliveryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposal?: boolean | DeliveryCountOutputTypeCountProposalArgs
  }

  // Custom InputTypes
  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryCountOutputType
     */
    select?: DeliveryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryCountOutputType without action
   */
  export type DeliveryCountOutputTypeCountProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }


  /**
   * Count Type Nigerian_banksCountOutputType
   */

  export type Nigerian_banksCountOutputType = {
    bank_details: number
  }

  export type Nigerian_banksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank_details?: boolean | Nigerian_banksCountOutputTypeCountBank_detailsArgs
  }

  // Custom InputTypes
  /**
   * Nigerian_banksCountOutputType without action
   */
  export type Nigerian_banksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nigerian_banksCountOutputType
     */
    select?: Nigerian_banksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Nigerian_banksCountOutputType without action
   */
  export type Nigerian_banksCountOutputTypeCountBank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_detailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    role: $Enums.Role
    profile_image: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "role" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      role: $Enums.Role
      profile_image: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullname: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly profile_image: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    role: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delivery?: boolean | User$deliveryArgs<ExtArgs>
    rider_rating?: boolean | User$rider_ratingArgs<ExtArgs>
    delivery_payment?: boolean | User$delivery_paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "phone_number" | "role" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | User$deliveryArgs<ExtArgs>
    rider_rating?: boolean | User$rider_ratingArgs<ExtArgs>
    delivery_payment?: boolean | User$delivery_paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      delivery: Prisma.$DeliveryPayload<ExtArgs>[]
      rider_rating: Prisma.$Rider_ratingPayload<ExtArgs>[]
      delivery_payment: Prisma.$delivery_paymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      profile_image: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delivery<T extends User$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, User$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rider_rating<T extends User$rider_ratingArgs<ExtArgs> = {}>(args?: Subset<T, User$rider_ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    delivery_payment<T extends User$delivery_paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$delivery_paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profile_image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.delivery
   */
  export type User$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * User.rider_rating
   */
  export type User$rider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    where?: Rider_ratingWhereInput
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    cursor?: Rider_ratingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }

  /**
   * User.delivery_payment
   */
  export type User$delivery_paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    where?: delivery_paymentWhereInput
    orderBy?: delivery_paymentOrderByWithRelationInput | delivery_paymentOrderByWithRelationInput[]
    cursor?: delivery_paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Delivery_paymentScalarFieldEnum | Delivery_paymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    id: number | null
  }

  export type VendorSumAggregateOutputType = {
    id: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    role: number
    operating_areas: number
    profile_image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    id?: true
  }

  export type VendorSumAggregateInputType = {
    id?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    operating_areas?: true
    profile_image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    operating_areas: JsonValue | null
    profile_image: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    operating_areas?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | Vendor$riderArgs<ExtArgs>
    delivery?: boolean | Vendor$deliveryArgs<ExtArgs>
    bank_details?: boolean | Vendor$bank_detailsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>



  export type VendorSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    operating_areas?: boolean
    profile_image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "phone_number" | "role" | "operating_areas" | "profile_image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | Vendor$riderArgs<ExtArgs>
    delivery?: boolean | Vendor$deliveryArgs<ExtArgs>
    bank_details?: boolean | Vendor$bank_detailsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>[]
      delivery: Prisma.$DeliveryPayload<ExtArgs>[]
      bank_details: Prisma.$Bank_detailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      operating_areas: Prisma.JsonValue | null
      profile_image: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
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
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends Vendor$riderArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$riderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    delivery<T extends Vendor$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bank_details<T extends Vendor$bank_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$bank_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'Int'>
    readonly fullname: FieldRef<"Vendor", 'String'>
    readonly username: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly phone_number: FieldRef<"Vendor", 'String'>
    readonly role: FieldRef<"Vendor", 'Role'>
    readonly operating_areas: FieldRef<"Vendor", 'Json'>
    readonly profile_image: FieldRef<"Vendor", 'String'>
    readonly password: FieldRef<"Vendor", 'String'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.rider
   */
  export type Vendor$riderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    cursor?: RiderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Vendor.delivery
   */
  export type Vendor$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Vendor.bank_details
   */
  export type Vendor$bank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    where?: Bank_detailsWhereInput
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    cursor?: Bank_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Rider
   */

  export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  export type RiderAvgAggregateOutputType = {
    id: number | null
    vendor_id: number | null
    avg_rating: number | null
  }

  export type RiderSumAggregateOutputType = {
    id: number | null
    vendor_id: number | null
    avg_rating: number | null
  }

  export type RiderMinAggregateOutputType = {
    id: number | null
    vendor_id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    avg_rating: number | null
    password: string | null
    status: $Enums.Status | null
    is_verified: boolean | null
    available: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderMaxAggregateOutputType = {
    id: number | null
    vendor_id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    phone_number: string | null
    role: $Enums.Role | null
    profile_image: string | null
    avg_rating: number | null
    password: string | null
    status: $Enums.Status | null
    is_verified: boolean | null
    available: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderCountAggregateOutputType = {
    id: number
    vendor_id: number
    fullname: number
    username: number
    email: number
    phone_number: number
    role: number
    profile_image: number
    avg_rating: number
    password: number
    status: number
    is_verified: number
    available: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiderAvgAggregateInputType = {
    id?: true
    vendor_id?: true
    avg_rating?: true
  }

  export type RiderSumAggregateInputType = {
    id?: true
    vendor_id?: true
    avg_rating?: true
  }

  export type RiderMinAggregateInputType = {
    id?: true
    vendor_id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    avg_rating?: true
    password?: true
    status?: true
    is_verified?: true
    available?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderMaxAggregateInputType = {
    id?: true
    vendor_id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    avg_rating?: true
    password?: true
    status?: true
    is_verified?: true
    available?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderCountAggregateInputType = {
    id?: true
    vendor_id?: true
    fullname?: true
    username?: true
    email?: true
    phone_number?: true
    role?: true
    profile_image?: true
    avg_rating?: true
    password?: true
    status?: true
    is_verified?: true
    available?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider to aggregate.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Riders
    **/
    _count?: true | RiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiderMaxAggregateInputType
  }

  export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider[P]>
      : GetScalarType<T[P], AggregateRider[P]>
  }




  export type RiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithAggregationInput | RiderOrderByWithAggregationInput[]
    by: RiderScalarFieldEnum[] | RiderScalarFieldEnum
    having?: RiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiderCountAggregateInputType | true
    _avg?: RiderAvgAggregateInputType
    _sum?: RiderSumAggregateInputType
    _min?: RiderMinAggregateInputType
    _max?: RiderMaxAggregateInputType
  }

  export type RiderGroupByOutputType = {
    id: number
    vendor_id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role: $Enums.Role
    profile_image: string
    avg_rating: number
    password: string
    status: $Enums.Status
    is_verified: boolean
    available: boolean
    createdAt: Date
    updatedAt: Date
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiderGroupByOutputType[P]>
            : GetScalarType<T[P], RiderGroupByOutputType[P]>
        }
      >
    >


  export type RiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    avg_rating?: boolean
    password?: boolean
    status?: boolean
    is_verified?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    proposal?: boolean | Rider$proposalArgs<ExtArgs>
    rider_rating?: boolean | Rider$rider_ratingArgs<ExtArgs>
    rider_credentials?: boolean | Rider$rider_credentialsArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider"]>



  export type RiderSelectScalar = {
    id?: boolean
    vendor_id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    phone_number?: boolean
    role?: boolean
    profile_image?: boolean
    avg_rating?: boolean
    password?: boolean
    status?: boolean
    is_verified?: boolean
    available?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendor_id" | "fullname" | "username" | "email" | "phone_number" | "role" | "profile_image" | "avg_rating" | "password" | "status" | "is_verified" | "available" | "createdAt" | "updatedAt", ExtArgs["result"]["rider"]>
  export type RiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    proposal?: boolean | Rider$proposalArgs<ExtArgs>
    rider_rating?: boolean | Rider$rider_ratingArgs<ExtArgs>
    rider_credentials?: boolean | Rider$rider_credentialsArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      proposal: Prisma.$ProposalPayload<ExtArgs>[]
      rider_rating: Prisma.$Rider_ratingPayload<ExtArgs>[]
      rider_credentials: Prisma.$Rider_credentialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendor_id: number
      fullname: string
      username: string
      email: string
      phone_number: string
      role: $Enums.Role
      profile_image: string
      avg_rating: number
      password: string
      status: $Enums.Status
      is_verified: boolean
      available: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider"]>
    composites: {}
  }

  type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = $Result.GetResult<Prisma.$RiderPayload, S>

  type RiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiderCountAggregateInputType | true
    }

  export interface RiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider'], meta: { name: 'Rider' } }
    /**
     * Find zero or one Rider that matches the filter.
     * @param {RiderFindUniqueArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiderFindUniqueArgs>(args: SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiderFindUniqueOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs>(args: SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiderFindFirstArgs>(args?: SelectSubset<T, RiderFindFirstArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs>(args?: SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.rider.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.rider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riderWithIdOnly = await prisma.rider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiderFindManyArgs>(args?: SelectSubset<T, RiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider.
     * @param {RiderCreateArgs} args - Arguments to create a Rider.
     * @example
     * // Create one Rider
     * const Rider = await prisma.rider.create({
     *   data: {
     *     // ... data to create a Rider
     *   }
     * })
     * 
     */
    create<T extends RiderCreateArgs>(args: SelectSubset<T, RiderCreateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Riders.
     * @param {RiderCreateManyArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiderCreateManyArgs>(args?: SelectSubset<T, RiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider.
     * @param {RiderDeleteArgs} args - Arguments to delete one Rider.
     * @example
     * // Delete one Rider
     * const Rider = await prisma.rider.delete({
     *   where: {
     *     // ... filter to delete one Rider
     *   }
     * })
     * 
     */
    delete<T extends RiderDeleteArgs>(args: SelectSubset<T, RiderDeleteArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider.
     * @param {RiderUpdateArgs} args - Arguments to update one Rider.
     * @example
     * // Update one Rider
     * const rider = await prisma.rider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiderUpdateArgs>(args: SelectSubset<T, RiderUpdateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Riders.
     * @param {RiderDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.rider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiderDeleteManyArgs>(args?: SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiderUpdateManyArgs>(args: SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider.
     * @param {RiderUpsertArgs} args - Arguments to update or create a Rider.
     * @example
     * // Update or create a Rider
     * const rider = await prisma.rider.upsert({
     *   create: {
     *     // ... data to create a Rider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider we want to update
     *   }
     * })
     */
    upsert<T extends RiderUpsertArgs>(args: SelectSubset<T, RiderUpsertArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.rider.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends RiderCountArgs>(
      args?: Subset<T, RiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiderAggregateArgs>(args: Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>

    /**
     * Group by Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderGroupByArgs} args - Group by arguments.
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
      T extends RiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiderGroupByArgs['orderBy'] }
        : { orderBy?: RiderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider model
   */
  readonly fields: RiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposal<T extends Rider$proposalArgs<ExtArgs> = {}>(args?: Subset<T, Rider$proposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rider_rating<T extends Rider$rider_ratingArgs<ExtArgs> = {}>(args?: Subset<T, Rider$rider_ratingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rider_credentials<T extends Rider$rider_credentialsArgs<ExtArgs> = {}>(args?: Subset<T, Rider$rider_credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rider model
   */
  interface RiderFieldRefs {
    readonly id: FieldRef<"Rider", 'Int'>
    readonly vendor_id: FieldRef<"Rider", 'Int'>
    readonly fullname: FieldRef<"Rider", 'String'>
    readonly username: FieldRef<"Rider", 'String'>
    readonly email: FieldRef<"Rider", 'String'>
    readonly phone_number: FieldRef<"Rider", 'String'>
    readonly role: FieldRef<"Rider", 'Role'>
    readonly profile_image: FieldRef<"Rider", 'String'>
    readonly avg_rating: FieldRef<"Rider", 'Float'>
    readonly password: FieldRef<"Rider", 'String'>
    readonly status: FieldRef<"Rider", 'Status'>
    readonly is_verified: FieldRef<"Rider", 'Boolean'>
    readonly available: FieldRef<"Rider", 'Boolean'>
    readonly createdAt: FieldRef<"Rider", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rider findUnique
   */
  export type RiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findUniqueOrThrow
   */
  export type RiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findFirst
   */
  export type RiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findFirstOrThrow
   */
  export type RiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findMany
   */
  export type RiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Riders to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider create
   */
  export type RiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider.
     */
    data: XOR<RiderCreateInput, RiderUncheckedCreateInput>
  }

  /**
   * Rider createMany
   */
  export type RiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider update
   */
  export type RiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider.
     */
    data: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
    /**
     * Choose, which Rider to update.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider updateMany
   */
  export type RiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider upsert
   */
  export type RiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider to update in case it exists.
     */
    where: RiderWhereUniqueInput
    /**
     * In case the Rider found by the `where` argument doesn't exist, create a new Rider with this data.
     */
    create: XOR<RiderCreateInput, RiderUncheckedCreateInput>
    /**
     * In case the Rider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
  }

  /**
   * Rider delete
   */
  export type RiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter which Rider to delete.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider deleteMany
   */
  export type RiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Riders to delete
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to delete.
     */
    limit?: number
  }

  /**
   * Rider.proposal
   */
  export type Rider$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Rider.rider_rating
   */
  export type Rider$rider_ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    where?: Rider_ratingWhereInput
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    cursor?: Rider_ratingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }

  /**
   * Rider.rider_credentials
   */
  export type Rider$rider_credentialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    where?: Rider_credentialsWhereInput
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    cursor?: Rider_credentialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }

  /**
   * Rider without action
   */
  export type RiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    vendor_id: number | null
    delivery_code: number | null
  }

  export type DeliverySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    vendor_id: number | null
    delivery_code: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    package_name: string | null
    phone_number: string | null
    pickup_location: string | null
    delivery_location: string | null
    estimated_delivery_price: string | null
    package_image: string | null
    landmark: string | null
    reference: string | null
    vendor_id: number | null
    delivery_code: number | null
    is_pickedup: boolean | null
    is_delivered: boolean | null
    is_accepted: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    package_name: string | null
    phone_number: string | null
    pickup_location: string | null
    delivery_location: string | null
    estimated_delivery_price: string | null
    package_image: string | null
    landmark: string | null
    reference: string | null
    vendor_id: number | null
    delivery_code: number | null
    is_pickedup: boolean | null
    is_delivered: boolean | null
    is_accepted: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    user_id: number
    package_name: number
    phone_number: number
    pickup_location: number
    delivery_location: number
    estimated_delivery_price: number
    package_image: number
    landmark: number
    reference: number
    vendor_id: number
    delivery_code: number
    is_pickedup: number
    is_delivered: number
    is_accepted: number
    status: number
    createdAt: number
    updatedAt: number
    sent_proposal_rider_id: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    id?: true
    user_id?: true
    vendor_id?: true
    delivery_code?: true
  }

  export type DeliverySumAggregateInputType = {
    id?: true
    user_id?: true
    vendor_id?: true
    delivery_code?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    user_id?: true
    package_name?: true
    phone_number?: true
    pickup_location?: true
    delivery_location?: true
    estimated_delivery_price?: true
    package_image?: true
    landmark?: true
    reference?: true
    vendor_id?: true
    delivery_code?: true
    is_pickedup?: true
    is_delivered?: true
    is_accepted?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    user_id?: true
    package_name?: true
    phone_number?: true
    pickup_location?: true
    delivery_location?: true
    estimated_delivery_price?: true
    package_image?: true
    landmark?: true
    reference?: true
    vendor_id?: true
    delivery_code?: true
    is_pickedup?: true
    is_delivered?: true
    is_accepted?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    user_id?: true
    package_name?: true
    phone_number?: true
    pickup_location?: true
    delivery_location?: true
    estimated_delivery_price?: true
    package_image?: true
    landmark?: true
    reference?: true
    vendor_id?: true
    delivery_code?: true
    is_pickedup?: true
    is_delivered?: true
    is_accepted?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    sent_proposal_rider_id?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    vendor_id: number | null
    delivery_code: number | null
    is_pickedup: boolean
    is_delivered: boolean
    is_accepted: boolean
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    sent_proposal_rider_id: JsonValue | null
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    package_name?: boolean
    phone_number?: boolean
    pickup_location?: boolean
    delivery_location?: boolean
    estimated_delivery_price?: boolean
    package_image?: boolean
    landmark?: boolean
    reference?: boolean
    vendor_id?: boolean
    delivery_code?: boolean
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sent_proposal_rider_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | Delivery$vendorArgs<ExtArgs>
    proposal?: boolean | Delivery$proposalArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>



  export type DeliverySelectScalar = {
    id?: boolean
    user_id?: boolean
    package_name?: boolean
    phone_number?: boolean
    pickup_location?: boolean
    delivery_location?: boolean
    estimated_delivery_price?: boolean
    package_image?: boolean
    landmark?: boolean
    reference?: boolean
    vendor_id?: boolean
    delivery_code?: boolean
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sent_proposal_rider_id?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "package_name" | "phone_number" | "pickup_location" | "delivery_location" | "estimated_delivery_price" | "package_image" | "landmark" | "reference" | "vendor_id" | "delivery_code" | "is_pickedup" | "is_delivered" | "is_accepted" | "status" | "createdAt" | "updatedAt" | "sent_proposal_rider_id", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    vendor?: boolean | Delivery$vendorArgs<ExtArgs>
    proposal?: boolean | Delivery$proposalArgs<ExtArgs>
    _count?: boolean | DeliveryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      proposal: Prisma.$ProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      package_name: string
      phone_number: string
      pickup_location: string
      delivery_location: string
      estimated_delivery_price: string
      package_image: string
      landmark: string
      reference: string
      vendor_id: number | null
      delivery_code: number | null
      is_pickedup: boolean
      is_delivered: boolean
      is_accepted: boolean
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      sent_proposal_rider_id: Prisma.JsonValue | null
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
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
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends Delivery$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proposal<T extends Delivery$proposalArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$proposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'Int'>
    readonly user_id: FieldRef<"Delivery", 'Int'>
    readonly package_name: FieldRef<"Delivery", 'String'>
    readonly phone_number: FieldRef<"Delivery", 'String'>
    readonly pickup_location: FieldRef<"Delivery", 'String'>
    readonly delivery_location: FieldRef<"Delivery", 'String'>
    readonly estimated_delivery_price: FieldRef<"Delivery", 'String'>
    readonly package_image: FieldRef<"Delivery", 'String'>
    readonly landmark: FieldRef<"Delivery", 'String'>
    readonly reference: FieldRef<"Delivery", 'String'>
    readonly vendor_id: FieldRef<"Delivery", 'Int'>
    readonly delivery_code: FieldRef<"Delivery", 'Int'>
    readonly is_pickedup: FieldRef<"Delivery", 'Boolean'>
    readonly is_delivered: FieldRef<"Delivery", 'Boolean'>
    readonly is_accepted: FieldRef<"Delivery", 'Boolean'>
    readonly status: FieldRef<"Delivery", 'Status'>
    readonly createdAt: FieldRef<"Delivery", 'DateTime'>
    readonly updatedAt: FieldRef<"Delivery", 'DateTime'>
    readonly sent_proposal_rider_id: FieldRef<"Delivery", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery.vendor
   */
  export type Delivery$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Delivery.proposal
   */
  export type Delivery$proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model nigerian_banks
   */

  export type AggregateNigerian_banks = {
    _count: Nigerian_banksCountAggregateOutputType | null
    _avg: Nigerian_banksAvgAggregateOutputType | null
    _sum: Nigerian_banksSumAggregateOutputType | null
    _min: Nigerian_banksMinAggregateOutputType | null
    _max: Nigerian_banksMaxAggregateOutputType | null
  }

  export type Nigerian_banksAvgAggregateOutputType = {
    id: number | null
  }

  export type Nigerian_banksSumAggregateOutputType = {
    id: number | null
  }

  export type Nigerian_banksMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    is_active: boolean | null
    slug: string | null
    ussd: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Nigerian_banksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    is_active: boolean | null
    slug: string | null
    ussd: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Nigerian_banksCountAggregateOutputType = {
    id: number
    name: number
    code: number
    is_active: number
    slug: number
    ussd: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Nigerian_banksAvgAggregateInputType = {
    id?: true
  }

  export type Nigerian_banksSumAggregateInputType = {
    id?: true
  }

  export type Nigerian_banksMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    is_active?: true
    slug?: true
    ussd?: true
    created_at?: true
    updated_at?: true
  }

  export type Nigerian_banksMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    is_active?: true
    slug?: true
    ussd?: true
    created_at?: true
    updated_at?: true
  }

  export type Nigerian_banksCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    is_active?: true
    slug?: true
    ussd?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Nigerian_banksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nigerian_banks to aggregate.
     */
    where?: nigerian_banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nigerian_banks to fetch.
     */
    orderBy?: nigerian_banksOrderByWithRelationInput | nigerian_banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nigerian_banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nigerian_banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nigerian_banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nigerian_banks
    **/
    _count?: true | Nigerian_banksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nigerian_banksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nigerian_banksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nigerian_banksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nigerian_banksMaxAggregateInputType
  }

  export type GetNigerian_banksAggregateType<T extends Nigerian_banksAggregateArgs> = {
        [P in keyof T & keyof AggregateNigerian_banks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNigerian_banks[P]>
      : GetScalarType<T[P], AggregateNigerian_banks[P]>
  }




  export type nigerian_banksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nigerian_banksWhereInput
    orderBy?: nigerian_banksOrderByWithAggregationInput | nigerian_banksOrderByWithAggregationInput[]
    by: Nigerian_banksScalarFieldEnum[] | Nigerian_banksScalarFieldEnum
    having?: nigerian_banksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nigerian_banksCountAggregateInputType | true
    _avg?: Nigerian_banksAvgAggregateInputType
    _sum?: Nigerian_banksSumAggregateInputType
    _min?: Nigerian_banksMinAggregateInputType
    _max?: Nigerian_banksMaxAggregateInputType
  }

  export type Nigerian_banksGroupByOutputType = {
    id: number
    name: string
    code: string
    is_active: boolean
    slug: string
    ussd: string
    created_at: Date
    updated_at: Date
    _count: Nigerian_banksCountAggregateOutputType | null
    _avg: Nigerian_banksAvgAggregateOutputType | null
    _sum: Nigerian_banksSumAggregateOutputType | null
    _min: Nigerian_banksMinAggregateOutputType | null
    _max: Nigerian_banksMaxAggregateOutputType | null
  }

  type GetNigerian_banksGroupByPayload<T extends nigerian_banksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nigerian_banksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nigerian_banksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nigerian_banksGroupByOutputType[P]>
            : GetScalarType<T[P], Nigerian_banksGroupByOutputType[P]>
        }
      >
    >


  export type nigerian_banksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    is_active?: boolean
    slug?: boolean
    ussd?: boolean
    created_at?: boolean
    updated_at?: boolean
    bank_details?: boolean | nigerian_banks$bank_detailsArgs<ExtArgs>
    _count?: boolean | Nigerian_banksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nigerian_banks"]>



  export type nigerian_banksSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    is_active?: boolean
    slug?: boolean
    ussd?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type nigerian_banksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "is_active" | "slug" | "ussd" | "created_at" | "updated_at", ExtArgs["result"]["nigerian_banks"]>
  export type nigerian_banksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank_details?: boolean | nigerian_banks$bank_detailsArgs<ExtArgs>
    _count?: boolean | Nigerian_banksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $nigerian_banksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nigerian_banks"
    objects: {
      bank_details: Prisma.$Bank_detailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      is_active: boolean
      slug: string
      ussd: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["nigerian_banks"]>
    composites: {}
  }

  type nigerian_banksGetPayload<S extends boolean | null | undefined | nigerian_banksDefaultArgs> = $Result.GetResult<Prisma.$nigerian_banksPayload, S>

  type nigerian_banksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nigerian_banksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nigerian_banksCountAggregateInputType | true
    }

  export interface nigerian_banksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nigerian_banks'], meta: { name: 'nigerian_banks' } }
    /**
     * Find zero or one Nigerian_banks that matches the filter.
     * @param {nigerian_banksFindUniqueArgs} args - Arguments to find a Nigerian_banks
     * @example
     * // Get one Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nigerian_banksFindUniqueArgs>(args: SelectSubset<T, nigerian_banksFindUniqueArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nigerian_banks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nigerian_banksFindUniqueOrThrowArgs} args - Arguments to find a Nigerian_banks
     * @example
     * // Get one Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nigerian_banksFindUniqueOrThrowArgs>(args: SelectSubset<T, nigerian_banksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nigerian_banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nigerian_banksFindFirstArgs} args - Arguments to find a Nigerian_banks
     * @example
     * // Get one Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nigerian_banksFindFirstArgs>(args?: SelectSubset<T, nigerian_banksFindFirstArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nigerian_banks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nigerian_banksFindFirstOrThrowArgs} args - Arguments to find a Nigerian_banks
     * @example
     * // Get one Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nigerian_banksFindFirstOrThrowArgs>(args?: SelectSubset<T, nigerian_banksFindFirstOrThrowArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nigerian_banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nigerian_banksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.findMany()
     * 
     * // Get first 10 Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nigerian_banksWithIdOnly = await prisma.nigerian_banks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nigerian_banksFindManyArgs>(args?: SelectSubset<T, nigerian_banksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nigerian_banks.
     * @param {nigerian_banksCreateArgs} args - Arguments to create a Nigerian_banks.
     * @example
     * // Create one Nigerian_banks
     * const Nigerian_banks = await prisma.nigerian_banks.create({
     *   data: {
     *     // ... data to create a Nigerian_banks
     *   }
     * })
     * 
     */
    create<T extends nigerian_banksCreateArgs>(args: SelectSubset<T, nigerian_banksCreateArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nigerian_banks.
     * @param {nigerian_banksCreateManyArgs} args - Arguments to create many Nigerian_banks.
     * @example
     * // Create many Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nigerian_banksCreateManyArgs>(args?: SelectSubset<T, nigerian_banksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nigerian_banks.
     * @param {nigerian_banksDeleteArgs} args - Arguments to delete one Nigerian_banks.
     * @example
     * // Delete one Nigerian_banks
     * const Nigerian_banks = await prisma.nigerian_banks.delete({
     *   where: {
     *     // ... filter to delete one Nigerian_banks
     *   }
     * })
     * 
     */
    delete<T extends nigerian_banksDeleteArgs>(args: SelectSubset<T, nigerian_banksDeleteArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nigerian_banks.
     * @param {nigerian_banksUpdateArgs} args - Arguments to update one Nigerian_banks.
     * @example
     * // Update one Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nigerian_banksUpdateArgs>(args: SelectSubset<T, nigerian_banksUpdateArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nigerian_banks.
     * @param {nigerian_banksDeleteManyArgs} args - Arguments to filter Nigerian_banks to delete.
     * @example
     * // Delete a few Nigerian_banks
     * const { count } = await prisma.nigerian_banks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nigerian_banksDeleteManyArgs>(args?: SelectSubset<T, nigerian_banksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nigerian_banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nigerian_banksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nigerian_banksUpdateManyArgs>(args: SelectSubset<T, nigerian_banksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nigerian_banks.
     * @param {nigerian_banksUpsertArgs} args - Arguments to update or create a Nigerian_banks.
     * @example
     * // Update or create a Nigerian_banks
     * const nigerian_banks = await prisma.nigerian_banks.upsert({
     *   create: {
     *     // ... data to create a Nigerian_banks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nigerian_banks we want to update
     *   }
     * })
     */
    upsert<T extends nigerian_banksUpsertArgs>(args: SelectSubset<T, nigerian_banksUpsertArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nigerian_banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nigerian_banksCountArgs} args - Arguments to filter Nigerian_banks to count.
     * @example
     * // Count the number of Nigerian_banks
     * const count = await prisma.nigerian_banks.count({
     *   where: {
     *     // ... the filter for the Nigerian_banks we want to count
     *   }
     * })
    **/
    count<T extends nigerian_banksCountArgs>(
      args?: Subset<T, nigerian_banksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nigerian_banksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nigerian_banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nigerian_banksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Nigerian_banksAggregateArgs>(args: Subset<T, Nigerian_banksAggregateArgs>): Prisma.PrismaPromise<GetNigerian_banksAggregateType<T>>

    /**
     * Group by Nigerian_banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nigerian_banksGroupByArgs} args - Group by arguments.
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
      T extends nigerian_banksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nigerian_banksGroupByArgs['orderBy'] }
        : { orderBy?: nigerian_banksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nigerian_banksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNigerian_banksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nigerian_banks model
   */
  readonly fields: nigerian_banksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nigerian_banks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nigerian_banksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank_details<T extends nigerian_banks$bank_detailsArgs<ExtArgs> = {}>(args?: Subset<T, nigerian_banks$bank_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the nigerian_banks model
   */
  interface nigerian_banksFieldRefs {
    readonly id: FieldRef<"nigerian_banks", 'Int'>
    readonly name: FieldRef<"nigerian_banks", 'String'>
    readonly code: FieldRef<"nigerian_banks", 'String'>
    readonly is_active: FieldRef<"nigerian_banks", 'Boolean'>
    readonly slug: FieldRef<"nigerian_banks", 'String'>
    readonly ussd: FieldRef<"nigerian_banks", 'String'>
    readonly created_at: FieldRef<"nigerian_banks", 'DateTime'>
    readonly updated_at: FieldRef<"nigerian_banks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nigerian_banks findUnique
   */
  export type nigerian_banksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * Filter, which nigerian_banks to fetch.
     */
    where: nigerian_banksWhereUniqueInput
  }

  /**
   * nigerian_banks findUniqueOrThrow
   */
  export type nigerian_banksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * Filter, which nigerian_banks to fetch.
     */
    where: nigerian_banksWhereUniqueInput
  }

  /**
   * nigerian_banks findFirst
   */
  export type nigerian_banksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * Filter, which nigerian_banks to fetch.
     */
    where?: nigerian_banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nigerian_banks to fetch.
     */
    orderBy?: nigerian_banksOrderByWithRelationInput | nigerian_banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nigerian_banks.
     */
    cursor?: nigerian_banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nigerian_banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nigerian_banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nigerian_banks.
     */
    distinct?: Nigerian_banksScalarFieldEnum | Nigerian_banksScalarFieldEnum[]
  }

  /**
   * nigerian_banks findFirstOrThrow
   */
  export type nigerian_banksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * Filter, which nigerian_banks to fetch.
     */
    where?: nigerian_banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nigerian_banks to fetch.
     */
    orderBy?: nigerian_banksOrderByWithRelationInput | nigerian_banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nigerian_banks.
     */
    cursor?: nigerian_banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nigerian_banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nigerian_banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nigerian_banks.
     */
    distinct?: Nigerian_banksScalarFieldEnum | Nigerian_banksScalarFieldEnum[]
  }

  /**
   * nigerian_banks findMany
   */
  export type nigerian_banksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * Filter, which nigerian_banks to fetch.
     */
    where?: nigerian_banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nigerian_banks to fetch.
     */
    orderBy?: nigerian_banksOrderByWithRelationInput | nigerian_banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nigerian_banks.
     */
    cursor?: nigerian_banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nigerian_banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nigerian_banks.
     */
    skip?: number
    distinct?: Nigerian_banksScalarFieldEnum | Nigerian_banksScalarFieldEnum[]
  }

  /**
   * nigerian_banks create
   */
  export type nigerian_banksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * The data needed to create a nigerian_banks.
     */
    data: XOR<nigerian_banksCreateInput, nigerian_banksUncheckedCreateInput>
  }

  /**
   * nigerian_banks createMany
   */
  export type nigerian_banksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nigerian_banks.
     */
    data: nigerian_banksCreateManyInput | nigerian_banksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nigerian_banks update
   */
  export type nigerian_banksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * The data needed to update a nigerian_banks.
     */
    data: XOR<nigerian_banksUpdateInput, nigerian_banksUncheckedUpdateInput>
    /**
     * Choose, which nigerian_banks to update.
     */
    where: nigerian_banksWhereUniqueInput
  }

  /**
   * nigerian_banks updateMany
   */
  export type nigerian_banksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nigerian_banks.
     */
    data: XOR<nigerian_banksUpdateManyMutationInput, nigerian_banksUncheckedUpdateManyInput>
    /**
     * Filter which nigerian_banks to update
     */
    where?: nigerian_banksWhereInput
    /**
     * Limit how many nigerian_banks to update.
     */
    limit?: number
  }

  /**
   * nigerian_banks upsert
   */
  export type nigerian_banksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * The filter to search for the nigerian_banks to update in case it exists.
     */
    where: nigerian_banksWhereUniqueInput
    /**
     * In case the nigerian_banks found by the `where` argument doesn't exist, create a new nigerian_banks with this data.
     */
    create: XOR<nigerian_banksCreateInput, nigerian_banksUncheckedCreateInput>
    /**
     * In case the nigerian_banks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nigerian_banksUpdateInput, nigerian_banksUncheckedUpdateInput>
  }

  /**
   * nigerian_banks delete
   */
  export type nigerian_banksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    /**
     * Filter which nigerian_banks to delete.
     */
    where: nigerian_banksWhereUniqueInput
  }

  /**
   * nigerian_banks deleteMany
   */
  export type nigerian_banksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nigerian_banks to delete
     */
    where?: nigerian_banksWhereInput
    /**
     * Limit how many nigerian_banks to delete.
     */
    limit?: number
  }

  /**
   * nigerian_banks.bank_details
   */
  export type nigerian_banks$bank_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    where?: Bank_detailsWhereInput
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    cursor?: Bank_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }

  /**
   * nigerian_banks without action
   */
  export type nigerian_banksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
  }


  /**
   * Model delivery_payment
   */

  export type AggregateDelivery_payment = {
    _count: Delivery_paymentCountAggregateOutputType | null
    _avg: Delivery_paymentAvgAggregateOutputType | null
    _sum: Delivery_paymentSumAggregateOutputType | null
    _min: Delivery_paymentMinAggregateOutputType | null
    _max: Delivery_paymentMaxAggregateOutputType | null
  }

  export type Delivery_paymentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Delivery_paymentSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Delivery_paymentMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    status: string | null
    has_paid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Delivery_paymentMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    email: string | null
    amount: string | null
    reference: string | null
    phone_number: string | null
    status: string | null
    has_paid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Delivery_paymentCountAggregateOutputType = {
    id: number
    user_id: number
    email: number
    amount: number
    reference: number
    phone_number: number
    status: number
    has_paid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Delivery_paymentAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Delivery_paymentSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Delivery_paymentMinAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    status?: true
    has_paid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Delivery_paymentMaxAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    status?: true
    has_paid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Delivery_paymentCountAggregateInputType = {
    id?: true
    user_id?: true
    email?: true
    amount?: true
    reference?: true
    phone_number?: true
    status?: true
    has_paid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Delivery_paymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which delivery_payment to aggregate.
     */
    where?: delivery_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of delivery_payments to fetch.
     */
    orderBy?: delivery_paymentOrderByWithRelationInput | delivery_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: delivery_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` delivery_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` delivery_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned delivery_payments
    **/
    _count?: true | Delivery_paymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Delivery_paymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Delivery_paymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Delivery_paymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Delivery_paymentMaxAggregateInputType
  }

  export type GetDelivery_paymentAggregateType<T extends Delivery_paymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery_payment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery_payment[P]>
      : GetScalarType<T[P], AggregateDelivery_payment[P]>
  }




  export type delivery_paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: delivery_paymentWhereInput
    orderBy?: delivery_paymentOrderByWithAggregationInput | delivery_paymentOrderByWithAggregationInput[]
    by: Delivery_paymentScalarFieldEnum[] | Delivery_paymentScalarFieldEnum
    having?: delivery_paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Delivery_paymentCountAggregateInputType | true
    _avg?: Delivery_paymentAvgAggregateInputType
    _sum?: Delivery_paymentSumAggregateInputType
    _min?: Delivery_paymentMinAggregateInputType
    _max?: Delivery_paymentMaxAggregateInputType
  }

  export type Delivery_paymentGroupByOutputType = {
    id: number
    user_id: number
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid: boolean
    createdAt: Date
    updatedAt: Date
    _count: Delivery_paymentCountAggregateOutputType | null
    _avg: Delivery_paymentAvgAggregateOutputType | null
    _sum: Delivery_paymentSumAggregateOutputType | null
    _min: Delivery_paymentMinAggregateOutputType | null
    _max: Delivery_paymentMaxAggregateOutputType | null
  }

  type GetDelivery_paymentGroupByPayload<T extends delivery_paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Delivery_paymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Delivery_paymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Delivery_paymentGroupByOutputType[P]>
            : GetScalarType<T[P], Delivery_paymentGroupByOutputType[P]>
        }
      >
    >


  export type delivery_paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    status?: boolean
    has_paid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delivery_payment"]>



  export type delivery_paymentSelectScalar = {
    id?: boolean
    user_id?: boolean
    email?: boolean
    amount?: boolean
    reference?: boolean
    phone_number?: boolean
    status?: boolean
    has_paid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type delivery_paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "email" | "amount" | "reference" | "phone_number" | "status" | "has_paid" | "createdAt" | "updatedAt", ExtArgs["result"]["delivery_payment"]>
  export type delivery_paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $delivery_paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "delivery_payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      email: string
      amount: string
      reference: string
      phone_number: string
      status: string
      has_paid: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["delivery_payment"]>
    composites: {}
  }

  type delivery_paymentGetPayload<S extends boolean | null | undefined | delivery_paymentDefaultArgs> = $Result.GetResult<Prisma.$delivery_paymentPayload, S>

  type delivery_paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<delivery_paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Delivery_paymentCountAggregateInputType | true
    }

  export interface delivery_paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['delivery_payment'], meta: { name: 'delivery_payment' } }
    /**
     * Find zero or one Delivery_payment that matches the filter.
     * @param {delivery_paymentFindUniqueArgs} args - Arguments to find a Delivery_payment
     * @example
     * // Get one Delivery_payment
     * const delivery_payment = await prisma.delivery_payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends delivery_paymentFindUniqueArgs>(args: SelectSubset<T, delivery_paymentFindUniqueArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery_payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {delivery_paymentFindUniqueOrThrowArgs} args - Arguments to find a Delivery_payment
     * @example
     * // Get one Delivery_payment
     * const delivery_payment = await prisma.delivery_payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends delivery_paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, delivery_paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery_payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {delivery_paymentFindFirstArgs} args - Arguments to find a Delivery_payment
     * @example
     * // Get one Delivery_payment
     * const delivery_payment = await prisma.delivery_payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends delivery_paymentFindFirstArgs>(args?: SelectSubset<T, delivery_paymentFindFirstArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery_payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {delivery_paymentFindFirstOrThrowArgs} args - Arguments to find a Delivery_payment
     * @example
     * // Get one Delivery_payment
     * const delivery_payment = await prisma.delivery_payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends delivery_paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, delivery_paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Delivery_payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {delivery_paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Delivery_payments
     * const delivery_payments = await prisma.delivery_payment.findMany()
     * 
     * // Get first 10 Delivery_payments
     * const delivery_payments = await prisma.delivery_payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delivery_paymentWithIdOnly = await prisma.delivery_payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends delivery_paymentFindManyArgs>(args?: SelectSubset<T, delivery_paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery_payment.
     * @param {delivery_paymentCreateArgs} args - Arguments to create a Delivery_payment.
     * @example
     * // Create one Delivery_payment
     * const Delivery_payment = await prisma.delivery_payment.create({
     *   data: {
     *     // ... data to create a Delivery_payment
     *   }
     * })
     * 
     */
    create<T extends delivery_paymentCreateArgs>(args: SelectSubset<T, delivery_paymentCreateArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Delivery_payments.
     * @param {delivery_paymentCreateManyArgs} args - Arguments to create many Delivery_payments.
     * @example
     * // Create many Delivery_payments
     * const delivery_payment = await prisma.delivery_payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends delivery_paymentCreateManyArgs>(args?: SelectSubset<T, delivery_paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delivery_payment.
     * @param {delivery_paymentDeleteArgs} args - Arguments to delete one Delivery_payment.
     * @example
     * // Delete one Delivery_payment
     * const Delivery_payment = await prisma.delivery_payment.delete({
     *   where: {
     *     // ... filter to delete one Delivery_payment
     *   }
     * })
     * 
     */
    delete<T extends delivery_paymentDeleteArgs>(args: SelectSubset<T, delivery_paymentDeleteArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery_payment.
     * @param {delivery_paymentUpdateArgs} args - Arguments to update one Delivery_payment.
     * @example
     * // Update one Delivery_payment
     * const delivery_payment = await prisma.delivery_payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends delivery_paymentUpdateArgs>(args: SelectSubset<T, delivery_paymentUpdateArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Delivery_payments.
     * @param {delivery_paymentDeleteManyArgs} args - Arguments to filter Delivery_payments to delete.
     * @example
     * // Delete a few Delivery_payments
     * const { count } = await prisma.delivery_payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends delivery_paymentDeleteManyArgs>(args?: SelectSubset<T, delivery_paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delivery_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {delivery_paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Delivery_payments
     * const delivery_payment = await prisma.delivery_payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends delivery_paymentUpdateManyArgs>(args: SelectSubset<T, delivery_paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delivery_payment.
     * @param {delivery_paymentUpsertArgs} args - Arguments to update or create a Delivery_payment.
     * @example
     * // Update or create a Delivery_payment
     * const delivery_payment = await prisma.delivery_payment.upsert({
     *   create: {
     *     // ... data to create a Delivery_payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery_payment we want to update
     *   }
     * })
     */
    upsert<T extends delivery_paymentUpsertArgs>(args: SelectSubset<T, delivery_paymentUpsertArgs<ExtArgs>>): Prisma__delivery_paymentClient<$Result.GetResult<Prisma.$delivery_paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Delivery_payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {delivery_paymentCountArgs} args - Arguments to filter Delivery_payments to count.
     * @example
     * // Count the number of Delivery_payments
     * const count = await prisma.delivery_payment.count({
     *   where: {
     *     // ... the filter for the Delivery_payments we want to count
     *   }
     * })
    **/
    count<T extends delivery_paymentCountArgs>(
      args?: Subset<T, delivery_paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Delivery_paymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Delivery_paymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Delivery_paymentAggregateArgs>(args: Subset<T, Delivery_paymentAggregateArgs>): Prisma.PrismaPromise<GetDelivery_paymentAggregateType<T>>

    /**
     * Group by Delivery_payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {delivery_paymentGroupByArgs} args - Group by arguments.
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
      T extends delivery_paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: delivery_paymentGroupByArgs['orderBy'] }
        : { orderBy?: delivery_paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, delivery_paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelivery_paymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the delivery_payment model
   */
  readonly fields: delivery_paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for delivery_payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__delivery_paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the delivery_payment model
   */
  interface delivery_paymentFieldRefs {
    readonly id: FieldRef<"delivery_payment", 'Int'>
    readonly user_id: FieldRef<"delivery_payment", 'Int'>
    readonly email: FieldRef<"delivery_payment", 'String'>
    readonly amount: FieldRef<"delivery_payment", 'String'>
    readonly reference: FieldRef<"delivery_payment", 'String'>
    readonly phone_number: FieldRef<"delivery_payment", 'String'>
    readonly status: FieldRef<"delivery_payment", 'String'>
    readonly has_paid: FieldRef<"delivery_payment", 'Boolean'>
    readonly createdAt: FieldRef<"delivery_payment", 'DateTime'>
    readonly updatedAt: FieldRef<"delivery_payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * delivery_payment findUnique
   */
  export type delivery_paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * Filter, which delivery_payment to fetch.
     */
    where: delivery_paymentWhereUniqueInput
  }

  /**
   * delivery_payment findUniqueOrThrow
   */
  export type delivery_paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * Filter, which delivery_payment to fetch.
     */
    where: delivery_paymentWhereUniqueInput
  }

  /**
   * delivery_payment findFirst
   */
  export type delivery_paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * Filter, which delivery_payment to fetch.
     */
    where?: delivery_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of delivery_payments to fetch.
     */
    orderBy?: delivery_paymentOrderByWithRelationInput | delivery_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for delivery_payments.
     */
    cursor?: delivery_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` delivery_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` delivery_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of delivery_payments.
     */
    distinct?: Delivery_paymentScalarFieldEnum | Delivery_paymentScalarFieldEnum[]
  }

  /**
   * delivery_payment findFirstOrThrow
   */
  export type delivery_paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * Filter, which delivery_payment to fetch.
     */
    where?: delivery_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of delivery_payments to fetch.
     */
    orderBy?: delivery_paymentOrderByWithRelationInput | delivery_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for delivery_payments.
     */
    cursor?: delivery_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` delivery_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` delivery_payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of delivery_payments.
     */
    distinct?: Delivery_paymentScalarFieldEnum | Delivery_paymentScalarFieldEnum[]
  }

  /**
   * delivery_payment findMany
   */
  export type delivery_paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * Filter, which delivery_payments to fetch.
     */
    where?: delivery_paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of delivery_payments to fetch.
     */
    orderBy?: delivery_paymentOrderByWithRelationInput | delivery_paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing delivery_payments.
     */
    cursor?: delivery_paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` delivery_payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` delivery_payments.
     */
    skip?: number
    distinct?: Delivery_paymentScalarFieldEnum | Delivery_paymentScalarFieldEnum[]
  }

  /**
   * delivery_payment create
   */
  export type delivery_paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a delivery_payment.
     */
    data: XOR<delivery_paymentCreateInput, delivery_paymentUncheckedCreateInput>
  }

  /**
   * delivery_payment createMany
   */
  export type delivery_paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many delivery_payments.
     */
    data: delivery_paymentCreateManyInput | delivery_paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * delivery_payment update
   */
  export type delivery_paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a delivery_payment.
     */
    data: XOR<delivery_paymentUpdateInput, delivery_paymentUncheckedUpdateInput>
    /**
     * Choose, which delivery_payment to update.
     */
    where: delivery_paymentWhereUniqueInput
  }

  /**
   * delivery_payment updateMany
   */
  export type delivery_paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update delivery_payments.
     */
    data: XOR<delivery_paymentUpdateManyMutationInput, delivery_paymentUncheckedUpdateManyInput>
    /**
     * Filter which delivery_payments to update
     */
    where?: delivery_paymentWhereInput
    /**
     * Limit how many delivery_payments to update.
     */
    limit?: number
  }

  /**
   * delivery_payment upsert
   */
  export type delivery_paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the delivery_payment to update in case it exists.
     */
    where: delivery_paymentWhereUniqueInput
    /**
     * In case the delivery_payment found by the `where` argument doesn't exist, create a new delivery_payment with this data.
     */
    create: XOR<delivery_paymentCreateInput, delivery_paymentUncheckedCreateInput>
    /**
     * In case the delivery_payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<delivery_paymentUpdateInput, delivery_paymentUncheckedUpdateInput>
  }

  /**
   * delivery_payment delete
   */
  export type delivery_paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
    /**
     * Filter which delivery_payment to delete.
     */
    where: delivery_paymentWhereUniqueInput
  }

  /**
   * delivery_payment deleteMany
   */
  export type delivery_paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which delivery_payments to delete
     */
    where?: delivery_paymentWhereInput
    /**
     * Limit how many delivery_payments to delete.
     */
    limit?: number
  }

  /**
   * delivery_payment without action
   */
  export type delivery_paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the delivery_payment
     */
    select?: delivery_paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the delivery_payment
     */
    omit?: delivery_paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: delivery_paymentInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    id: number | null
    rider_id: number | null
    delivery_id: number | null
  }

  export type ProposalSumAggregateOutputType = {
    id: number | null
    rider_id: number | null
    delivery_id: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: number | null
    rider_id: number | null
    delivery_id: number | null
    status: $Enums.Status | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: number | null
    rider_id: number | null
    delivery_id: number | null
    status: $Enums.Status | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    rider_id: number
    delivery_id: number
    status: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    id?: true
    rider_id?: true
    delivery_id?: true
  }

  export type ProposalSumAggregateInputType = {
    id?: true
    rider_id?: true
    delivery_id?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    rider_id?: true
    delivery_id?: true
    status?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    rider_id?: true
    delivery_id?: true
    status?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    rider_id?: true
    delivery_id?: true
    status?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: number
    rider_id: number
    delivery_id: number
    status: $Enums.Status
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    delivery_id?: boolean
    status?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    deliver?: boolean | DeliveryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>



  export type ProposalSelectScalar = {
    id?: boolean
    rider_id?: boolean
    delivery_id?: boolean
    status?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rider_id" | "delivery_id" | "status", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    deliver?: boolean | DeliveryDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      deliver: Prisma.$DeliveryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rider_id: number
      delivery_id: number
      status: $Enums.Status
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
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
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliver<T extends DeliveryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryDefaultArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'Int'>
    readonly rider_id: FieldRef<"Proposal", 'Int'>
    readonly delivery_id: FieldRef<"Proposal", 'Int'>
    readonly status: FieldRef<"Proposal", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model Operating_areas
   */

  export type AggregateOperating_areas = {
    _count: Operating_areasCountAggregateOutputType | null
    _avg: Operating_areasAvgAggregateOutputType | null
    _sum: Operating_areasSumAggregateOutputType | null
    _min: Operating_areasMinAggregateOutputType | null
    _max: Operating_areasMaxAggregateOutputType | null
  }

  export type Operating_areasAvgAggregateOutputType = {
    id: number | null
  }

  export type Operating_areasSumAggregateOutputType = {
    id: number | null
  }

  export type Operating_areasMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Operating_areasMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Operating_areasCountAggregateOutputType = {
    id: number
    name: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Operating_areasAvgAggregateInputType = {
    id?: true
  }

  export type Operating_areasSumAggregateInputType = {
    id?: true
  }

  export type Operating_areasMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Operating_areasMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Operating_areasCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Operating_areasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operating_areas to aggregate.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operating_areas
    **/
    _count?: true | Operating_areasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Operating_areasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Operating_areasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Operating_areasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Operating_areasMaxAggregateInputType
  }

  export type GetOperating_areasAggregateType<T extends Operating_areasAggregateArgs> = {
        [P in keyof T & keyof AggregateOperating_areas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperating_areas[P]>
      : GetScalarType<T[P], AggregateOperating_areas[P]>
  }




  export type Operating_areasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Operating_areasWhereInput
    orderBy?: Operating_areasOrderByWithAggregationInput | Operating_areasOrderByWithAggregationInput[]
    by: Operating_areasScalarFieldEnum[] | Operating_areasScalarFieldEnum
    having?: Operating_areasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Operating_areasCountAggregateInputType | true
    _avg?: Operating_areasAvgAggregateInputType
    _sum?: Operating_areasSumAggregateInputType
    _min?: Operating_areasMinAggregateInputType
    _max?: Operating_areasMaxAggregateInputType
  }

  export type Operating_areasGroupByOutputType = {
    id: number
    name: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: Operating_areasCountAggregateOutputType | null
    _avg: Operating_areasAvgAggregateOutputType | null
    _sum: Operating_areasSumAggregateOutputType | null
    _min: Operating_areasMinAggregateOutputType | null
    _max: Operating_areasMaxAggregateOutputType | null
  }

  type GetOperating_areasGroupByPayload<T extends Operating_areasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operating_areasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Operating_areasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Operating_areasGroupByOutputType[P]>
            : GetScalarType<T[P], Operating_areasGroupByOutputType[P]>
        }
      >
    >


  export type Operating_areasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["operating_areas"]>



  export type Operating_areasSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Operating_areasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["operating_areas"]>

  export type $Operating_areasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operating_areas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["operating_areas"]>
    composites: {}
  }

  type Operating_areasGetPayload<S extends boolean | null | undefined | Operating_areasDefaultArgs> = $Result.GetResult<Prisma.$Operating_areasPayload, S>

  type Operating_areasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Operating_areasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Operating_areasCountAggregateInputType | true
    }

  export interface Operating_areasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operating_areas'], meta: { name: 'Operating_areas' } }
    /**
     * Find zero or one Operating_areas that matches the filter.
     * @param {Operating_areasFindUniqueArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Operating_areasFindUniqueArgs>(args: SelectSubset<T, Operating_areasFindUniqueArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operating_areas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Operating_areasFindUniqueOrThrowArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Operating_areasFindUniqueOrThrowArgs>(args: SelectSubset<T, Operating_areasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operating_areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasFindFirstArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Operating_areasFindFirstArgs>(args?: SelectSubset<T, Operating_areasFindFirstArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operating_areas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasFindFirstOrThrowArgs} args - Arguments to find a Operating_areas
     * @example
     * // Get one Operating_areas
     * const operating_areas = await prisma.operating_areas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Operating_areasFindFirstOrThrowArgs>(args?: SelectSubset<T, Operating_areasFindFirstOrThrowArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operating_areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operating_areas
     * const operating_areas = await prisma.operating_areas.findMany()
     * 
     * // Get first 10 Operating_areas
     * const operating_areas = await prisma.operating_areas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operating_areasWithIdOnly = await prisma.operating_areas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Operating_areasFindManyArgs>(args?: SelectSubset<T, Operating_areasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operating_areas.
     * @param {Operating_areasCreateArgs} args - Arguments to create a Operating_areas.
     * @example
     * // Create one Operating_areas
     * const Operating_areas = await prisma.operating_areas.create({
     *   data: {
     *     // ... data to create a Operating_areas
     *   }
     * })
     * 
     */
    create<T extends Operating_areasCreateArgs>(args: SelectSubset<T, Operating_areasCreateArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operating_areas.
     * @param {Operating_areasCreateManyArgs} args - Arguments to create many Operating_areas.
     * @example
     * // Create many Operating_areas
     * const operating_areas = await prisma.operating_areas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Operating_areasCreateManyArgs>(args?: SelectSubset<T, Operating_areasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operating_areas.
     * @param {Operating_areasDeleteArgs} args - Arguments to delete one Operating_areas.
     * @example
     * // Delete one Operating_areas
     * const Operating_areas = await prisma.operating_areas.delete({
     *   where: {
     *     // ... filter to delete one Operating_areas
     *   }
     * })
     * 
     */
    delete<T extends Operating_areasDeleteArgs>(args: SelectSubset<T, Operating_areasDeleteArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operating_areas.
     * @param {Operating_areasUpdateArgs} args - Arguments to update one Operating_areas.
     * @example
     * // Update one Operating_areas
     * const operating_areas = await prisma.operating_areas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Operating_areasUpdateArgs>(args: SelectSubset<T, Operating_areasUpdateArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operating_areas.
     * @param {Operating_areasDeleteManyArgs} args - Arguments to filter Operating_areas to delete.
     * @example
     * // Delete a few Operating_areas
     * const { count } = await prisma.operating_areas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Operating_areasDeleteManyArgs>(args?: SelectSubset<T, Operating_areasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operating_areas
     * const operating_areas = await prisma.operating_areas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Operating_areasUpdateManyArgs>(args: SelectSubset<T, Operating_areasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operating_areas.
     * @param {Operating_areasUpsertArgs} args - Arguments to update or create a Operating_areas.
     * @example
     * // Update or create a Operating_areas
     * const operating_areas = await prisma.operating_areas.upsert({
     *   create: {
     *     // ... data to create a Operating_areas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operating_areas we want to update
     *   }
     * })
     */
    upsert<T extends Operating_areasUpsertArgs>(args: SelectSubset<T, Operating_areasUpsertArgs<ExtArgs>>): Prisma__Operating_areasClient<$Result.GetResult<Prisma.$Operating_areasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasCountArgs} args - Arguments to filter Operating_areas to count.
     * @example
     * // Count the number of Operating_areas
     * const count = await prisma.operating_areas.count({
     *   where: {
     *     // ... the filter for the Operating_areas we want to count
     *   }
     * })
    **/
    count<T extends Operating_areasCountArgs>(
      args?: Subset<T, Operating_areasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operating_areasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Operating_areasAggregateArgs>(args: Subset<T, Operating_areasAggregateArgs>): Prisma.PrismaPromise<GetOperating_areasAggregateType<T>>

    /**
     * Group by Operating_areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operating_areasGroupByArgs} args - Group by arguments.
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
      T extends Operating_areasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Operating_areasGroupByArgs['orderBy'] }
        : { orderBy?: Operating_areasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Operating_areasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperating_areasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operating_areas model
   */
  readonly fields: Operating_areasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operating_areas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Operating_areasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Operating_areas model
   */
  interface Operating_areasFieldRefs {
    readonly id: FieldRef<"Operating_areas", 'Int'>
    readonly name: FieldRef<"Operating_areas", 'String'>
    readonly status: FieldRef<"Operating_areas", 'Status'>
    readonly createdAt: FieldRef<"Operating_areas", 'DateTime'>
    readonly updatedAt: FieldRef<"Operating_areas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operating_areas findUnique
   */
  export type Operating_areasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where: Operating_areasWhereUniqueInput
  }

  /**
   * Operating_areas findUniqueOrThrow
   */
  export type Operating_areasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where: Operating_areasWhereUniqueInput
  }

  /**
   * Operating_areas findFirst
   */
  export type Operating_areasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operating_areas.
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operating_areas.
     */
    distinct?: Operating_areasScalarFieldEnum | Operating_areasScalarFieldEnum[]
  }

  /**
   * Operating_areas findFirstOrThrow
   */
  export type Operating_areasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operating_areas.
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operating_areas.
     */
    distinct?: Operating_areasScalarFieldEnum | Operating_areasScalarFieldEnum[]
  }

  /**
   * Operating_areas findMany
   */
  export type Operating_areasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * Filter, which Operating_areas to fetch.
     */
    where?: Operating_areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operating_areas to fetch.
     */
    orderBy?: Operating_areasOrderByWithRelationInput | Operating_areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operating_areas.
     */
    cursor?: Operating_areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operating_areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operating_areas.
     */
    skip?: number
    distinct?: Operating_areasScalarFieldEnum | Operating_areasScalarFieldEnum[]
  }

  /**
   * Operating_areas create
   */
  export type Operating_areasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * The data needed to create a Operating_areas.
     */
    data: XOR<Operating_areasCreateInput, Operating_areasUncheckedCreateInput>
  }

  /**
   * Operating_areas createMany
   */
  export type Operating_areasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operating_areas.
     */
    data: Operating_areasCreateManyInput | Operating_areasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operating_areas update
   */
  export type Operating_areasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * The data needed to update a Operating_areas.
     */
    data: XOR<Operating_areasUpdateInput, Operating_areasUncheckedUpdateInput>
    /**
     * Choose, which Operating_areas to update.
     */
    where: Operating_areasWhereUniqueInput
  }

  /**
   * Operating_areas updateMany
   */
  export type Operating_areasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operating_areas.
     */
    data: XOR<Operating_areasUpdateManyMutationInput, Operating_areasUncheckedUpdateManyInput>
    /**
     * Filter which Operating_areas to update
     */
    where?: Operating_areasWhereInput
    /**
     * Limit how many Operating_areas to update.
     */
    limit?: number
  }

  /**
   * Operating_areas upsert
   */
  export type Operating_areasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * The filter to search for the Operating_areas to update in case it exists.
     */
    where: Operating_areasWhereUniqueInput
    /**
     * In case the Operating_areas found by the `where` argument doesn't exist, create a new Operating_areas with this data.
     */
    create: XOR<Operating_areasCreateInput, Operating_areasUncheckedCreateInput>
    /**
     * In case the Operating_areas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Operating_areasUpdateInput, Operating_areasUncheckedUpdateInput>
  }

  /**
   * Operating_areas delete
   */
  export type Operating_areasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
    /**
     * Filter which Operating_areas to delete.
     */
    where: Operating_areasWhereUniqueInput
  }

  /**
   * Operating_areas deleteMany
   */
  export type Operating_areasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operating_areas to delete
     */
    where?: Operating_areasWhereInput
    /**
     * Limit how many Operating_areas to delete.
     */
    limit?: number
  }

  /**
   * Operating_areas without action
   */
  export type Operating_areasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operating_areas
     */
    select?: Operating_areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Operating_areas
     */
    omit?: Operating_areasOmit<ExtArgs> | null
  }


  /**
   * Model Bank_details
   */

  export type AggregateBank_details = {
    _count: Bank_detailsCountAggregateOutputType | null
    _avg: Bank_detailsAvgAggregateOutputType | null
    _sum: Bank_detailsSumAggregateOutputType | null
    _min: Bank_detailsMinAggregateOutputType | null
    _max: Bank_detailsMaxAggregateOutputType | null
  }

  export type Bank_detailsAvgAggregateOutputType = {
    id: number | null
    bank_id: number | null
    vendor_id: number | null
  }

  export type Bank_detailsSumAggregateOutputType = {
    id: number | null
    bank_id: number | null
    vendor_id: number | null
  }

  export type Bank_detailsMinAggregateOutputType = {
    id: number | null
    bank_id: number | null
    vendor_id: number | null
    bank_name: string | null
    account_name: string | null
    account_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Bank_detailsMaxAggregateOutputType = {
    id: number | null
    bank_id: number | null
    vendor_id: number | null
    bank_name: string | null
    account_name: string | null
    account_number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Bank_detailsCountAggregateOutputType = {
    id: number
    bank_id: number
    vendor_id: number
    bank_name: number
    account_name: number
    account_number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Bank_detailsAvgAggregateInputType = {
    id?: true
    bank_id?: true
    vendor_id?: true
  }

  export type Bank_detailsSumAggregateInputType = {
    id?: true
    bank_id?: true
    vendor_id?: true
  }

  export type Bank_detailsMinAggregateInputType = {
    id?: true
    bank_id?: true
    vendor_id?: true
    bank_name?: true
    account_name?: true
    account_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Bank_detailsMaxAggregateInputType = {
    id?: true
    bank_id?: true
    vendor_id?: true
    bank_name?: true
    account_name?: true
    account_number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Bank_detailsCountAggregateInputType = {
    id?: true
    bank_id?: true
    vendor_id?: true
    bank_name?: true
    account_name?: true
    account_number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Bank_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_details to aggregate.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bank_details
    **/
    _count?: true | Bank_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bank_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bank_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bank_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bank_detailsMaxAggregateInputType
  }

  export type GetBank_detailsAggregateType<T extends Bank_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateBank_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank_details[P]>
      : GetScalarType<T[P], AggregateBank_details[P]>
  }




  export type Bank_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_detailsWhereInput
    orderBy?: Bank_detailsOrderByWithAggregationInput | Bank_detailsOrderByWithAggregationInput[]
    by: Bank_detailsScalarFieldEnum[] | Bank_detailsScalarFieldEnum
    having?: Bank_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bank_detailsCountAggregateInputType | true
    _avg?: Bank_detailsAvgAggregateInputType
    _sum?: Bank_detailsSumAggregateInputType
    _min?: Bank_detailsMinAggregateInputType
    _max?: Bank_detailsMaxAggregateInputType
  }

  export type Bank_detailsGroupByOutputType = {
    id: number
    bank_id: number | null
    vendor_id: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt: Date
    updatedAt: Date
    _count: Bank_detailsCountAggregateOutputType | null
    _avg: Bank_detailsAvgAggregateOutputType | null
    _sum: Bank_detailsSumAggregateOutputType | null
    _min: Bank_detailsMinAggregateOutputType | null
    _max: Bank_detailsMaxAggregateOutputType | null
  }

  type GetBank_detailsGroupByPayload<T extends Bank_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bank_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bank_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bank_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Bank_detailsGroupByOutputType[P]>
        }
      >
    >


  export type Bank_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bank_id?: boolean
    vendor_id?: boolean
    bank_name?: boolean
    account_name?: boolean
    account_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bank?: boolean | Bank_details$bankArgs<ExtArgs>
    vendor?: boolean | Bank_details$vendorArgs<ExtArgs>
  }, ExtArgs["result"]["bank_details"]>



  export type Bank_detailsSelectScalar = {
    id?: boolean
    bank_id?: boolean
    vendor_id?: boolean
    bank_name?: boolean
    account_name?: boolean
    account_number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Bank_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bank_id" | "vendor_id" | "bank_name" | "account_name" | "account_number" | "createdAt" | "updatedAt", ExtArgs["result"]["bank_details"]>
  export type Bank_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bank?: boolean | Bank_details$bankArgs<ExtArgs>
    vendor?: boolean | Bank_details$vendorArgs<ExtArgs>
  }

  export type $Bank_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank_details"
    objects: {
      bank: Prisma.$nigerian_banksPayload<ExtArgs> | null
      vendor: Prisma.$VendorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bank_id: number | null
      vendor_id: number | null
      bank_name: string
      account_name: string
      account_number: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bank_details"]>
    composites: {}
  }

  type Bank_detailsGetPayload<S extends boolean | null | undefined | Bank_detailsDefaultArgs> = $Result.GetResult<Prisma.$Bank_detailsPayload, S>

  type Bank_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Bank_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bank_detailsCountAggregateInputType | true
    }

  export interface Bank_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank_details'], meta: { name: 'Bank_details' } }
    /**
     * Find zero or one Bank_details that matches the filter.
     * @param {Bank_detailsFindUniqueArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bank_detailsFindUniqueArgs>(args: SelectSubset<T, Bank_detailsFindUniqueArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bank_detailsFindUniqueOrThrowArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bank_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, Bank_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsFindFirstArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bank_detailsFindFirstArgs>(args?: SelectSubset<T, Bank_detailsFindFirstArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsFindFirstOrThrowArgs} args - Arguments to find a Bank_details
     * @example
     * // Get one Bank_details
     * const bank_details = await prisma.bank_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bank_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, Bank_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bank_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bank_details
     * const bank_details = await prisma.bank_details.findMany()
     * 
     * // Get first 10 Bank_details
     * const bank_details = await prisma.bank_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bank_detailsWithIdOnly = await prisma.bank_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Bank_detailsFindManyArgs>(args?: SelectSubset<T, Bank_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank_details.
     * @param {Bank_detailsCreateArgs} args - Arguments to create a Bank_details.
     * @example
     * // Create one Bank_details
     * const Bank_details = await prisma.bank_details.create({
     *   data: {
     *     // ... data to create a Bank_details
     *   }
     * })
     * 
     */
    create<T extends Bank_detailsCreateArgs>(args: SelectSubset<T, Bank_detailsCreateArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bank_details.
     * @param {Bank_detailsCreateManyArgs} args - Arguments to create many Bank_details.
     * @example
     * // Create many Bank_details
     * const bank_details = await prisma.bank_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Bank_detailsCreateManyArgs>(args?: SelectSubset<T, Bank_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bank_details.
     * @param {Bank_detailsDeleteArgs} args - Arguments to delete one Bank_details.
     * @example
     * // Delete one Bank_details
     * const Bank_details = await prisma.bank_details.delete({
     *   where: {
     *     // ... filter to delete one Bank_details
     *   }
     * })
     * 
     */
    delete<T extends Bank_detailsDeleteArgs>(args: SelectSubset<T, Bank_detailsDeleteArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank_details.
     * @param {Bank_detailsUpdateArgs} args - Arguments to update one Bank_details.
     * @example
     * // Update one Bank_details
     * const bank_details = await prisma.bank_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Bank_detailsUpdateArgs>(args: SelectSubset<T, Bank_detailsUpdateArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bank_details.
     * @param {Bank_detailsDeleteManyArgs} args - Arguments to filter Bank_details to delete.
     * @example
     * // Delete a few Bank_details
     * const { count } = await prisma.bank_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Bank_detailsDeleteManyArgs>(args?: SelectSubset<T, Bank_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bank_details
     * const bank_details = await prisma.bank_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Bank_detailsUpdateManyArgs>(args: SelectSubset<T, Bank_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bank_details.
     * @param {Bank_detailsUpsertArgs} args - Arguments to update or create a Bank_details.
     * @example
     * // Update or create a Bank_details
     * const bank_details = await prisma.bank_details.upsert({
     *   create: {
     *     // ... data to create a Bank_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank_details we want to update
     *   }
     * })
     */
    upsert<T extends Bank_detailsUpsertArgs>(args: SelectSubset<T, Bank_detailsUpsertArgs<ExtArgs>>): Prisma__Bank_detailsClient<$Result.GetResult<Prisma.$Bank_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsCountArgs} args - Arguments to filter Bank_details to count.
     * @example
     * // Count the number of Bank_details
     * const count = await prisma.bank_details.count({
     *   where: {
     *     // ... the filter for the Bank_details we want to count
     *   }
     * })
    **/
    count<T extends Bank_detailsCountArgs>(
      args?: Subset<T, Bank_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bank_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bank_detailsAggregateArgs>(args: Subset<T, Bank_detailsAggregateArgs>): Prisma.PrismaPromise<GetBank_detailsAggregateType<T>>

    /**
     * Group by Bank_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_detailsGroupByArgs} args - Group by arguments.
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
      T extends Bank_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bank_detailsGroupByArgs['orderBy'] }
        : { orderBy?: Bank_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Bank_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBank_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank_details model
   */
  readonly fields: Bank_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bank_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bank<T extends Bank_details$bankArgs<ExtArgs> = {}>(args?: Subset<T, Bank_details$bankArgs<ExtArgs>>): Prisma__nigerian_banksClient<$Result.GetResult<Prisma.$nigerian_banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vendor<T extends Bank_details$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Bank_details$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bank_details model
   */
  interface Bank_detailsFieldRefs {
    readonly id: FieldRef<"Bank_details", 'Int'>
    readonly bank_id: FieldRef<"Bank_details", 'Int'>
    readonly vendor_id: FieldRef<"Bank_details", 'Int'>
    readonly bank_name: FieldRef<"Bank_details", 'String'>
    readonly account_name: FieldRef<"Bank_details", 'String'>
    readonly account_number: FieldRef<"Bank_details", 'String'>
    readonly createdAt: FieldRef<"Bank_details", 'DateTime'>
    readonly updatedAt: FieldRef<"Bank_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bank_details findUnique
   */
  export type Bank_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where: Bank_detailsWhereUniqueInput
  }

  /**
   * Bank_details findUniqueOrThrow
   */
  export type Bank_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where: Bank_detailsWhereUniqueInput
  }

  /**
   * Bank_details findFirst
   */
  export type Bank_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_details.
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_details.
     */
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }

  /**
   * Bank_details findFirstOrThrow
   */
  export type Bank_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_details.
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_details.
     */
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }

  /**
   * Bank_details findMany
   */
  export type Bank_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Bank_details to fetch.
     */
    where?: Bank_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_details to fetch.
     */
    orderBy?: Bank_detailsOrderByWithRelationInput | Bank_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bank_details.
     */
    cursor?: Bank_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_details.
     */
    skip?: number
    distinct?: Bank_detailsScalarFieldEnum | Bank_detailsScalarFieldEnum[]
  }

  /**
   * Bank_details create
   */
  export type Bank_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank_details.
     */
    data: XOR<Bank_detailsCreateInput, Bank_detailsUncheckedCreateInput>
  }

  /**
   * Bank_details createMany
   */
  export type Bank_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bank_details.
     */
    data: Bank_detailsCreateManyInput | Bank_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank_details update
   */
  export type Bank_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank_details.
     */
    data: XOR<Bank_detailsUpdateInput, Bank_detailsUncheckedUpdateInput>
    /**
     * Choose, which Bank_details to update.
     */
    where: Bank_detailsWhereUniqueInput
  }

  /**
   * Bank_details updateMany
   */
  export type Bank_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bank_details.
     */
    data: XOR<Bank_detailsUpdateManyMutationInput, Bank_detailsUncheckedUpdateManyInput>
    /**
     * Filter which Bank_details to update
     */
    where?: Bank_detailsWhereInput
    /**
     * Limit how many Bank_details to update.
     */
    limit?: number
  }

  /**
   * Bank_details upsert
   */
  export type Bank_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank_details to update in case it exists.
     */
    where: Bank_detailsWhereUniqueInput
    /**
     * In case the Bank_details found by the `where` argument doesn't exist, create a new Bank_details with this data.
     */
    create: XOR<Bank_detailsCreateInput, Bank_detailsUncheckedCreateInput>
    /**
     * In case the Bank_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bank_detailsUpdateInput, Bank_detailsUncheckedUpdateInput>
  }

  /**
   * Bank_details delete
   */
  export type Bank_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
    /**
     * Filter which Bank_details to delete.
     */
    where: Bank_detailsWhereUniqueInput
  }

  /**
   * Bank_details deleteMany
   */
  export type Bank_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_details to delete
     */
    where?: Bank_detailsWhereInput
    /**
     * Limit how many Bank_details to delete.
     */
    limit?: number
  }

  /**
   * Bank_details.bank
   */
  export type Bank_details$bankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nigerian_banks
     */
    select?: nigerian_banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nigerian_banks
     */
    omit?: nigerian_banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nigerian_banksInclude<ExtArgs> | null
    where?: nigerian_banksWhereInput
  }

  /**
   * Bank_details.vendor
   */
  export type Bank_details$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Bank_details without action
   */
  export type Bank_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_details
     */
    select?: Bank_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_details
     */
    omit?: Bank_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_detailsInclude<ExtArgs> | null
  }


  /**
   * Model Rider_rating
   */

  export type AggregateRider_rating = {
    _count: Rider_ratingCountAggregateOutputType | null
    _avg: Rider_ratingAvgAggregateOutputType | null
    _sum: Rider_ratingSumAggregateOutputType | null
    _min: Rider_ratingMinAggregateOutputType | null
    _max: Rider_ratingMaxAggregateOutputType | null
  }

  export type Rider_ratingAvgAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type Rider_ratingSumAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type Rider_ratingMinAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_ratingMaxAggregateOutputType = {
    id: number | null
    rider_id: number | null
    user_id: number | null
    rating: number | null
    review: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_ratingCountAggregateOutputType = {
    id: number
    rider_id: number
    user_id: number
    rating: number
    review: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Rider_ratingAvgAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
  }

  export type Rider_ratingSumAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
  }

  export type Rider_ratingMinAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_ratingMaxAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_ratingCountAggregateInputType = {
    id?: true
    rider_id?: true
    user_id?: true
    rating?: true
    review?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Rider_ratingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_rating to aggregate.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rider_ratings
    **/
    _count?: true | Rider_ratingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rider_ratingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rider_ratingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rider_ratingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rider_ratingMaxAggregateInputType
  }

  export type GetRider_ratingAggregateType<T extends Rider_ratingAggregateArgs> = {
        [P in keyof T & keyof AggregateRider_rating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider_rating[P]>
      : GetScalarType<T[P], AggregateRider_rating[P]>
  }




  export type Rider_ratingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_ratingWhereInput
    orderBy?: Rider_ratingOrderByWithAggregationInput | Rider_ratingOrderByWithAggregationInput[]
    by: Rider_ratingScalarFieldEnum[] | Rider_ratingScalarFieldEnum
    having?: Rider_ratingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rider_ratingCountAggregateInputType | true
    _avg?: Rider_ratingAvgAggregateInputType
    _sum?: Rider_ratingSumAggregateInputType
    _min?: Rider_ratingMinAggregateInputType
    _max?: Rider_ratingMaxAggregateInputType
  }

  export type Rider_ratingGroupByOutputType = {
    id: number
    rider_id: number
    user_id: number
    rating: number
    review: string
    createdAt: Date
    updatedAt: Date
    _count: Rider_ratingCountAggregateOutputType | null
    _avg: Rider_ratingAvgAggregateOutputType | null
    _sum: Rider_ratingSumAggregateOutputType | null
    _min: Rider_ratingMinAggregateOutputType | null
    _max: Rider_ratingMaxAggregateOutputType | null
  }

  type GetRider_ratingGroupByPayload<T extends Rider_ratingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rider_ratingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rider_ratingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rider_ratingGroupByOutputType[P]>
            : GetScalarType<T[P], Rider_ratingGroupByOutputType[P]>
        }
      >
    >


  export type Rider_ratingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    user_id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider_rating"]>



  export type Rider_ratingSelectScalar = {
    id?: boolean
    rider_id?: boolean
    user_id?: boolean
    rating?: boolean
    review?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Rider_ratingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rider_id" | "user_id" | "rating" | "review" | "createdAt" | "updatedAt", ExtArgs["result"]["rider_rating"]>
  export type Rider_ratingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Rider_ratingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider_rating"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rider_id: number
      user_id: number
      rating: number
      review: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider_rating"]>
    composites: {}
  }

  type Rider_ratingGetPayload<S extends boolean | null | undefined | Rider_ratingDefaultArgs> = $Result.GetResult<Prisma.$Rider_ratingPayload, S>

  type Rider_ratingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Rider_ratingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rider_ratingCountAggregateInputType | true
    }

  export interface Rider_ratingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider_rating'], meta: { name: 'Rider_rating' } }
    /**
     * Find zero or one Rider_rating that matches the filter.
     * @param {Rider_ratingFindUniqueArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Rider_ratingFindUniqueArgs>(args: SelectSubset<T, Rider_ratingFindUniqueArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider_rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Rider_ratingFindUniqueOrThrowArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Rider_ratingFindUniqueOrThrowArgs>(args: SelectSubset<T, Rider_ratingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider_rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingFindFirstArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Rider_ratingFindFirstArgs>(args?: SelectSubset<T, Rider_ratingFindFirstArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider_rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingFindFirstOrThrowArgs} args - Arguments to find a Rider_rating
     * @example
     * // Get one Rider_rating
     * const rider_rating = await prisma.rider_rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Rider_ratingFindFirstOrThrowArgs>(args?: SelectSubset<T, Rider_ratingFindFirstOrThrowArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rider_ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rider_ratings
     * const rider_ratings = await prisma.rider_rating.findMany()
     * 
     * // Get first 10 Rider_ratings
     * const rider_ratings = await prisma.rider_rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rider_ratingWithIdOnly = await prisma.rider_rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Rider_ratingFindManyArgs>(args?: SelectSubset<T, Rider_ratingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider_rating.
     * @param {Rider_ratingCreateArgs} args - Arguments to create a Rider_rating.
     * @example
     * // Create one Rider_rating
     * const Rider_rating = await prisma.rider_rating.create({
     *   data: {
     *     // ... data to create a Rider_rating
     *   }
     * })
     * 
     */
    create<T extends Rider_ratingCreateArgs>(args: SelectSubset<T, Rider_ratingCreateArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rider_ratings.
     * @param {Rider_ratingCreateManyArgs} args - Arguments to create many Rider_ratings.
     * @example
     * // Create many Rider_ratings
     * const rider_rating = await prisma.rider_rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Rider_ratingCreateManyArgs>(args?: SelectSubset<T, Rider_ratingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider_rating.
     * @param {Rider_ratingDeleteArgs} args - Arguments to delete one Rider_rating.
     * @example
     * // Delete one Rider_rating
     * const Rider_rating = await prisma.rider_rating.delete({
     *   where: {
     *     // ... filter to delete one Rider_rating
     *   }
     * })
     * 
     */
    delete<T extends Rider_ratingDeleteArgs>(args: SelectSubset<T, Rider_ratingDeleteArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider_rating.
     * @param {Rider_ratingUpdateArgs} args - Arguments to update one Rider_rating.
     * @example
     * // Update one Rider_rating
     * const rider_rating = await prisma.rider_rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Rider_ratingUpdateArgs>(args: SelectSubset<T, Rider_ratingUpdateArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rider_ratings.
     * @param {Rider_ratingDeleteManyArgs} args - Arguments to filter Rider_ratings to delete.
     * @example
     * // Delete a few Rider_ratings
     * const { count } = await prisma.rider_rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Rider_ratingDeleteManyArgs>(args?: SelectSubset<T, Rider_ratingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rider_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rider_ratings
     * const rider_rating = await prisma.rider_rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Rider_ratingUpdateManyArgs>(args: SelectSubset<T, Rider_ratingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider_rating.
     * @param {Rider_ratingUpsertArgs} args - Arguments to update or create a Rider_rating.
     * @example
     * // Update or create a Rider_rating
     * const rider_rating = await prisma.rider_rating.upsert({
     *   create: {
     *     // ... data to create a Rider_rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider_rating we want to update
     *   }
     * })
     */
    upsert<T extends Rider_ratingUpsertArgs>(args: SelectSubset<T, Rider_ratingUpsertArgs<ExtArgs>>): Prisma__Rider_ratingClient<$Result.GetResult<Prisma.$Rider_ratingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rider_ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingCountArgs} args - Arguments to filter Rider_ratings to count.
     * @example
     * // Count the number of Rider_ratings
     * const count = await prisma.rider_rating.count({
     *   where: {
     *     // ... the filter for the Rider_ratings we want to count
     *   }
     * })
    **/
    count<T extends Rider_ratingCountArgs>(
      args?: Subset<T, Rider_ratingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rider_ratingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider_rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rider_ratingAggregateArgs>(args: Subset<T, Rider_ratingAggregateArgs>): Prisma.PrismaPromise<GetRider_ratingAggregateType<T>>

    /**
     * Group by Rider_rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_ratingGroupByArgs} args - Group by arguments.
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
      T extends Rider_ratingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rider_ratingGroupByArgs['orderBy'] }
        : { orderBy?: Rider_ratingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Rider_ratingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_ratingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider_rating model
   */
  readonly fields: Rider_ratingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider_rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rider_ratingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rider_rating model
   */
  interface Rider_ratingFieldRefs {
    readonly id: FieldRef<"Rider_rating", 'Int'>
    readonly rider_id: FieldRef<"Rider_rating", 'Int'>
    readonly user_id: FieldRef<"Rider_rating", 'Int'>
    readonly rating: FieldRef<"Rider_rating", 'Int'>
    readonly review: FieldRef<"Rider_rating", 'String'>
    readonly createdAt: FieldRef<"Rider_rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider_rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rider_rating findUnique
   */
  export type Rider_ratingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where: Rider_ratingWhereUniqueInput
  }

  /**
   * Rider_rating findUniqueOrThrow
   */
  export type Rider_ratingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where: Rider_ratingWhereUniqueInput
  }

  /**
   * Rider_rating findFirst
   */
  export type Rider_ratingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_ratings.
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_ratings.
     */
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }

  /**
   * Rider_rating findFirstOrThrow
   */
  export type Rider_ratingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_rating to fetch.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_ratings.
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_ratings.
     */
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }

  /**
   * Rider_rating findMany
   */
  export type Rider_ratingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter, which Rider_ratings to fetch.
     */
    where?: Rider_ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_ratings to fetch.
     */
    orderBy?: Rider_ratingOrderByWithRelationInput | Rider_ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rider_ratings.
     */
    cursor?: Rider_ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_ratings.
     */
    skip?: number
    distinct?: Rider_ratingScalarFieldEnum | Rider_ratingScalarFieldEnum[]
  }

  /**
   * Rider_rating create
   */
  export type Rider_ratingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider_rating.
     */
    data: XOR<Rider_ratingCreateInput, Rider_ratingUncheckedCreateInput>
  }

  /**
   * Rider_rating createMany
   */
  export type Rider_ratingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rider_ratings.
     */
    data: Rider_ratingCreateManyInput | Rider_ratingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider_rating update
   */
  export type Rider_ratingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider_rating.
     */
    data: XOR<Rider_ratingUpdateInput, Rider_ratingUncheckedUpdateInput>
    /**
     * Choose, which Rider_rating to update.
     */
    where: Rider_ratingWhereUniqueInput
  }

  /**
   * Rider_rating updateMany
   */
  export type Rider_ratingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rider_ratings.
     */
    data: XOR<Rider_ratingUpdateManyMutationInput, Rider_ratingUncheckedUpdateManyInput>
    /**
     * Filter which Rider_ratings to update
     */
    where?: Rider_ratingWhereInput
    /**
     * Limit how many Rider_ratings to update.
     */
    limit?: number
  }

  /**
   * Rider_rating upsert
   */
  export type Rider_ratingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider_rating to update in case it exists.
     */
    where: Rider_ratingWhereUniqueInput
    /**
     * In case the Rider_rating found by the `where` argument doesn't exist, create a new Rider_rating with this data.
     */
    create: XOR<Rider_ratingCreateInput, Rider_ratingUncheckedCreateInput>
    /**
     * In case the Rider_rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rider_ratingUpdateInput, Rider_ratingUncheckedUpdateInput>
  }

  /**
   * Rider_rating delete
   */
  export type Rider_ratingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
    /**
     * Filter which Rider_rating to delete.
     */
    where: Rider_ratingWhereUniqueInput
  }

  /**
   * Rider_rating deleteMany
   */
  export type Rider_ratingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_ratings to delete
     */
    where?: Rider_ratingWhereInput
    /**
     * Limit how many Rider_ratings to delete.
     */
    limit?: number
  }

  /**
   * Rider_rating without action
   */
  export type Rider_ratingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_rating
     */
    select?: Rider_ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_rating
     */
    omit?: Rider_ratingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_ratingInclude<ExtArgs> | null
  }


  /**
   * Model Rider_credentials
   */

  export type AggregateRider_credentials = {
    _count: Rider_credentialsCountAggregateOutputType | null
    _avg: Rider_credentialsAvgAggregateOutputType | null
    _sum: Rider_credentialsSumAggregateOutputType | null
    _min: Rider_credentialsMinAggregateOutputType | null
    _max: Rider_credentialsMaxAggregateOutputType | null
  }

  export type Rider_credentialsAvgAggregateOutputType = {
    id: number | null
    rider_id: number | null
  }

  export type Rider_credentialsSumAggregateOutputType = {
    id: number | null
    rider_id: number | null
  }

  export type Rider_credentialsMinAggregateOutputType = {
    id: number | null
    rider_id: number | null
    nin: string | null
    nin_image: string | null
    driver_license: string | null
    driver_license_image: string | null
    plate_number: string | null
    vehicle_image: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_credentialsMaxAggregateOutputType = {
    id: number | null
    rider_id: number | null
    nin: string | null
    nin_image: string | null
    driver_license: string | null
    driver_license_image: string | null
    plate_number: string | null
    vehicle_image: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Rider_credentialsCountAggregateOutputType = {
    id: number
    rider_id: number
    nin: number
    nin_image: number
    driver_license: number
    driver_license_image: number
    plate_number: number
    vehicle_image: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Rider_credentialsAvgAggregateInputType = {
    id?: true
    rider_id?: true
  }

  export type Rider_credentialsSumAggregateInputType = {
    id?: true
    rider_id?: true
  }

  export type Rider_credentialsMinAggregateInputType = {
    id?: true
    rider_id?: true
    nin?: true
    nin_image?: true
    driver_license?: true
    driver_license_image?: true
    plate_number?: true
    vehicle_image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_credentialsMaxAggregateInputType = {
    id?: true
    rider_id?: true
    nin?: true
    nin_image?: true
    driver_license?: true
    driver_license_image?: true
    plate_number?: true
    vehicle_image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Rider_credentialsCountAggregateInputType = {
    id?: true
    rider_id?: true
    nin?: true
    nin_image?: true
    driver_license?: true
    driver_license_image?: true
    plate_number?: true
    vehicle_image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Rider_credentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_credentials to aggregate.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rider_credentials
    **/
    _count?: true | Rider_credentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rider_credentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rider_credentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rider_credentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rider_credentialsMaxAggregateInputType
  }

  export type GetRider_credentialsAggregateType<T extends Rider_credentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateRider_credentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider_credentials[P]>
      : GetScalarType<T[P], AggregateRider_credentials[P]>
  }




  export type Rider_credentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Rider_credentialsWhereInput
    orderBy?: Rider_credentialsOrderByWithAggregationInput | Rider_credentialsOrderByWithAggregationInput[]
    by: Rider_credentialsScalarFieldEnum[] | Rider_credentialsScalarFieldEnum
    having?: Rider_credentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rider_credentialsCountAggregateInputType | true
    _avg?: Rider_credentialsAvgAggregateInputType
    _sum?: Rider_credentialsSumAggregateInputType
    _min?: Rider_credentialsMinAggregateInputType
    _max?: Rider_credentialsMaxAggregateInputType
  }

  export type Rider_credentialsGroupByOutputType = {
    id: number
    rider_id: number
    nin: string
    nin_image: string | null
    driver_license: string
    driver_license_image: string | null
    plate_number: string
    vehicle_image: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: Rider_credentialsCountAggregateOutputType | null
    _avg: Rider_credentialsAvgAggregateOutputType | null
    _sum: Rider_credentialsSumAggregateOutputType | null
    _min: Rider_credentialsMinAggregateOutputType | null
    _max: Rider_credentialsMaxAggregateOutputType | null
  }

  type GetRider_credentialsGroupByPayload<T extends Rider_credentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rider_credentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rider_credentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rider_credentialsGroupByOutputType[P]>
            : GetScalarType<T[P], Rider_credentialsGroupByOutputType[P]>
        }
      >
    >


  export type Rider_credentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    nin?: boolean
    nin_image?: boolean
    driver_license?: boolean
    driver_license_image?: boolean
    plate_number?: boolean
    vehicle_image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider_credentials"]>



  export type Rider_credentialsSelectScalar = {
    id?: boolean
    rider_id?: boolean
    nin?: boolean
    nin_image?: boolean
    driver_license?: boolean
    driver_license_image?: boolean
    plate_number?: boolean
    vehicle_image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Rider_credentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rider_id" | "nin" | "nin_image" | "driver_license" | "driver_license_image" | "plate_number" | "vehicle_image" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rider_credentials"]>
  export type Rider_credentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
  }

  export type $Rider_credentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider_credentials"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rider_id: number
      nin: string
      nin_image: string | null
      driver_license: string
      driver_license_image: string | null
      plate_number: string
      vehicle_image: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider_credentials"]>
    composites: {}
  }

  type Rider_credentialsGetPayload<S extends boolean | null | undefined | Rider_credentialsDefaultArgs> = $Result.GetResult<Prisma.$Rider_credentialsPayload, S>

  type Rider_credentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Rider_credentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rider_credentialsCountAggregateInputType | true
    }

  export interface Rider_credentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider_credentials'], meta: { name: 'Rider_credentials' } }
    /**
     * Find zero or one Rider_credentials that matches the filter.
     * @param {Rider_credentialsFindUniqueArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Rider_credentialsFindUniqueArgs>(args: SelectSubset<T, Rider_credentialsFindUniqueArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider_credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Rider_credentialsFindUniqueOrThrowArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Rider_credentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, Rider_credentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsFindFirstArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Rider_credentialsFindFirstArgs>(args?: SelectSubset<T, Rider_credentialsFindFirstArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider_credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsFindFirstOrThrowArgs} args - Arguments to find a Rider_credentials
     * @example
     * // Get one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Rider_credentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, Rider_credentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rider_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findMany()
     * 
     * // Get first 10 Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rider_credentialsWithIdOnly = await prisma.rider_credentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Rider_credentialsFindManyArgs>(args?: SelectSubset<T, Rider_credentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider_credentials.
     * @param {Rider_credentialsCreateArgs} args - Arguments to create a Rider_credentials.
     * @example
     * // Create one Rider_credentials
     * const Rider_credentials = await prisma.rider_credentials.create({
     *   data: {
     *     // ... data to create a Rider_credentials
     *   }
     * })
     * 
     */
    create<T extends Rider_credentialsCreateArgs>(args: SelectSubset<T, Rider_credentialsCreateArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rider_credentials.
     * @param {Rider_credentialsCreateManyArgs} args - Arguments to create many Rider_credentials.
     * @example
     * // Create many Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Rider_credentialsCreateManyArgs>(args?: SelectSubset<T, Rider_credentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rider_credentials.
     * @param {Rider_credentialsDeleteArgs} args - Arguments to delete one Rider_credentials.
     * @example
     * // Delete one Rider_credentials
     * const Rider_credentials = await prisma.rider_credentials.delete({
     *   where: {
     *     // ... filter to delete one Rider_credentials
     *   }
     * })
     * 
     */
    delete<T extends Rider_credentialsDeleteArgs>(args: SelectSubset<T, Rider_credentialsDeleteArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider_credentials.
     * @param {Rider_credentialsUpdateArgs} args - Arguments to update one Rider_credentials.
     * @example
     * // Update one Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Rider_credentialsUpdateArgs>(args: SelectSubset<T, Rider_credentialsUpdateArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rider_credentials.
     * @param {Rider_credentialsDeleteManyArgs} args - Arguments to filter Rider_credentials to delete.
     * @example
     * // Delete a few Rider_credentials
     * const { count } = await prisma.rider_credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Rider_credentialsDeleteManyArgs>(args?: SelectSubset<T, Rider_credentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Rider_credentialsUpdateManyArgs>(args: SelectSubset<T, Rider_credentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rider_credentials.
     * @param {Rider_credentialsUpsertArgs} args - Arguments to update or create a Rider_credentials.
     * @example
     * // Update or create a Rider_credentials
     * const rider_credentials = await prisma.rider_credentials.upsert({
     *   create: {
     *     // ... data to create a Rider_credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider_credentials we want to update
     *   }
     * })
     */
    upsert<T extends Rider_credentialsUpsertArgs>(args: SelectSubset<T, Rider_credentialsUpsertArgs<ExtArgs>>): Prisma__Rider_credentialsClient<$Result.GetResult<Prisma.$Rider_credentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsCountArgs} args - Arguments to filter Rider_credentials to count.
     * @example
     * // Count the number of Rider_credentials
     * const count = await prisma.rider_credentials.count({
     *   where: {
     *     // ... the filter for the Rider_credentials we want to count
     *   }
     * })
    **/
    count<T extends Rider_credentialsCountArgs>(
      args?: Subset<T, Rider_credentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rider_credentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rider_credentialsAggregateArgs>(args: Subset<T, Rider_credentialsAggregateArgs>): Prisma.PrismaPromise<GetRider_credentialsAggregateType<T>>

    /**
     * Group by Rider_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rider_credentialsGroupByArgs} args - Group by arguments.
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
      T extends Rider_credentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Rider_credentialsGroupByArgs['orderBy'] }
        : { orderBy?: Rider_credentialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Rider_credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRider_credentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider_credentials model
   */
  readonly fields: Rider_credentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider_credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Rider_credentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rider_credentials model
   */
  interface Rider_credentialsFieldRefs {
    readonly id: FieldRef<"Rider_credentials", 'Int'>
    readonly rider_id: FieldRef<"Rider_credentials", 'Int'>
    readonly nin: FieldRef<"Rider_credentials", 'String'>
    readonly nin_image: FieldRef<"Rider_credentials", 'String'>
    readonly driver_license: FieldRef<"Rider_credentials", 'String'>
    readonly driver_license_image: FieldRef<"Rider_credentials", 'String'>
    readonly plate_number: FieldRef<"Rider_credentials", 'String'>
    readonly vehicle_image: FieldRef<"Rider_credentials", 'String'>
    readonly status: FieldRef<"Rider_credentials", 'Status'>
    readonly createdAt: FieldRef<"Rider_credentials", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider_credentials", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rider_credentials findUnique
   */
  export type Rider_credentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where: Rider_credentialsWhereUniqueInput
  }

  /**
   * Rider_credentials findUniqueOrThrow
   */
  export type Rider_credentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where: Rider_credentialsWhereUniqueInput
  }

  /**
   * Rider_credentials findFirst
   */
  export type Rider_credentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_credentials.
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_credentials.
     */
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }

  /**
   * Rider_credentials findFirstOrThrow
   */
  export type Rider_credentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rider_credentials.
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rider_credentials.
     */
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }

  /**
   * Rider_credentials findMany
   */
  export type Rider_credentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which Rider_credentials to fetch.
     */
    where?: Rider_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rider_credentials to fetch.
     */
    orderBy?: Rider_credentialsOrderByWithRelationInput | Rider_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rider_credentials.
     */
    cursor?: Rider_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rider_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rider_credentials.
     */
    skip?: number
    distinct?: Rider_credentialsScalarFieldEnum | Rider_credentialsScalarFieldEnum[]
  }

  /**
   * Rider_credentials create
   */
  export type Rider_credentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider_credentials.
     */
    data: XOR<Rider_credentialsCreateInput, Rider_credentialsUncheckedCreateInput>
  }

  /**
   * Rider_credentials createMany
   */
  export type Rider_credentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rider_credentials.
     */
    data: Rider_credentialsCreateManyInput | Rider_credentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider_credentials update
   */
  export type Rider_credentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider_credentials.
     */
    data: XOR<Rider_credentialsUpdateInput, Rider_credentialsUncheckedUpdateInput>
    /**
     * Choose, which Rider_credentials to update.
     */
    where: Rider_credentialsWhereUniqueInput
  }

  /**
   * Rider_credentials updateMany
   */
  export type Rider_credentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rider_credentials.
     */
    data: XOR<Rider_credentialsUpdateManyMutationInput, Rider_credentialsUncheckedUpdateManyInput>
    /**
     * Filter which Rider_credentials to update
     */
    where?: Rider_credentialsWhereInput
    /**
     * Limit how many Rider_credentials to update.
     */
    limit?: number
  }

  /**
   * Rider_credentials upsert
   */
  export type Rider_credentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider_credentials to update in case it exists.
     */
    where: Rider_credentialsWhereUniqueInput
    /**
     * In case the Rider_credentials found by the `where` argument doesn't exist, create a new Rider_credentials with this data.
     */
    create: XOR<Rider_credentialsCreateInput, Rider_credentialsUncheckedCreateInput>
    /**
     * In case the Rider_credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Rider_credentialsUpdateInput, Rider_credentialsUncheckedUpdateInput>
  }

  /**
   * Rider_credentials delete
   */
  export type Rider_credentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
    /**
     * Filter which Rider_credentials to delete.
     */
    where: Rider_credentialsWhereUniqueInput
  }

  /**
   * Rider_credentials deleteMany
   */
  export type Rider_credentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider_credentials to delete
     */
    where?: Rider_credentialsWhereInput
    /**
     * Limit how many Rider_credentials to delete.
     */
    limit?: number
  }

  /**
   * Rider_credentials without action
   */
  export type Rider_credentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider_credentials
     */
    select?: Rider_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider_credentials
     */
    omit?: Rider_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Rider_credentialsInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    operating_areas: 'operating_areas',
    profile_image: 'profile_image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const RiderScalarFieldEnum: {
    id: 'id',
    vendor_id: 'vendor_id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    role: 'role',
    profile_image: 'profile_image',
    avg_rating: 'avg_rating',
    password: 'password',
    status: 'status',
    is_verified: 'is_verified',
    available: 'available',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    package_name: 'package_name',
    phone_number: 'phone_number',
    pickup_location: 'pickup_location',
    delivery_location: 'delivery_location',
    estimated_delivery_price: 'estimated_delivery_price',
    package_image: 'package_image',
    landmark: 'landmark',
    reference: 'reference',
    vendor_id: 'vendor_id',
    delivery_code: 'delivery_code',
    is_pickedup: 'is_pickedup',
    is_delivered: 'is_delivered',
    is_accepted: 'is_accepted',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sent_proposal_rider_id: 'sent_proposal_rider_id'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const Nigerian_banksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    is_active: 'is_active',
    slug: 'slug',
    ussd: 'ussd',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Nigerian_banksScalarFieldEnum = (typeof Nigerian_banksScalarFieldEnum)[keyof typeof Nigerian_banksScalarFieldEnum]


  export const Delivery_paymentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    email: 'email',
    amount: 'amount',
    reference: 'reference',
    phone_number: 'phone_number',
    status: 'status',
    has_paid: 'has_paid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Delivery_paymentScalarFieldEnum = (typeof Delivery_paymentScalarFieldEnum)[keyof typeof Delivery_paymentScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    delivery_id: 'delivery_id',
    status: 'status'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const Operating_areasScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Operating_areasScalarFieldEnum = (typeof Operating_areasScalarFieldEnum)[keyof typeof Operating_areasScalarFieldEnum]


  export const Bank_detailsScalarFieldEnum: {
    id: 'id',
    bank_id: 'bank_id',
    vendor_id: 'vendor_id',
    bank_name: 'bank_name',
    account_name: 'account_name',
    account_number: 'account_number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Bank_detailsScalarFieldEnum = (typeof Bank_detailsScalarFieldEnum)[keyof typeof Bank_detailsScalarFieldEnum]


  export const Rider_ratingScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    user_id: 'user_id',
    rating: 'rating',
    review: 'review',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Rider_ratingScalarFieldEnum = (typeof Rider_ratingScalarFieldEnum)[keyof typeof Rider_ratingScalarFieldEnum]


  export const Rider_credentialsScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    nin: 'nin',
    nin_image: 'nin_image',
    driver_license: 'driver_license',
    driver_license_image: 'driver_license_image',
    plate_number: 'plate_number',
    vehicle_image: 'vehicle_image',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Rider_credentialsScalarFieldEnum = (typeof Rider_credentialsScalarFieldEnum)[keyof typeof Rider_credentialsScalarFieldEnum]


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


  export const AdminOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const VendorOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type VendorOrderByRelevanceFieldEnum = (typeof VendorOrderByRelevanceFieldEnum)[keyof typeof VendorOrderByRelevanceFieldEnum]


  export const RiderOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    phone_number: 'phone_number',
    profile_image: 'profile_image',
    password: 'password'
  };

  export type RiderOrderByRelevanceFieldEnum = (typeof RiderOrderByRelevanceFieldEnum)[keyof typeof RiderOrderByRelevanceFieldEnum]


  export const DeliveryOrderByRelevanceFieldEnum: {
    package_name: 'package_name',
    phone_number: 'phone_number',
    pickup_location: 'pickup_location',
    delivery_location: 'delivery_location',
    estimated_delivery_price: 'estimated_delivery_price',
    package_image: 'package_image',
    landmark: 'landmark',
    reference: 'reference'
  };

  export type DeliveryOrderByRelevanceFieldEnum = (typeof DeliveryOrderByRelevanceFieldEnum)[keyof typeof DeliveryOrderByRelevanceFieldEnum]


  export const nigerian_banksOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code',
    slug: 'slug',
    ussd: 'ussd'
  };

  export type nigerian_banksOrderByRelevanceFieldEnum = (typeof nigerian_banksOrderByRelevanceFieldEnum)[keyof typeof nigerian_banksOrderByRelevanceFieldEnum]


  export const delivery_paymentOrderByRelevanceFieldEnum: {
    email: 'email',
    amount: 'amount',
    reference: 'reference',
    phone_number: 'phone_number',
    status: 'status'
  };

  export type delivery_paymentOrderByRelevanceFieldEnum = (typeof delivery_paymentOrderByRelevanceFieldEnum)[keyof typeof delivery_paymentOrderByRelevanceFieldEnum]


  export const Operating_areasOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type Operating_areasOrderByRelevanceFieldEnum = (typeof Operating_areasOrderByRelevanceFieldEnum)[keyof typeof Operating_areasOrderByRelevanceFieldEnum]


  export const Bank_detailsOrderByRelevanceFieldEnum: {
    bank_name: 'bank_name',
    account_name: 'account_name',
    account_number: 'account_number'
  };

  export type Bank_detailsOrderByRelevanceFieldEnum = (typeof Bank_detailsOrderByRelevanceFieldEnum)[keyof typeof Bank_detailsOrderByRelevanceFieldEnum]


  export const Rider_ratingOrderByRelevanceFieldEnum: {
    review: 'review'
  };

  export type Rider_ratingOrderByRelevanceFieldEnum = (typeof Rider_ratingOrderByRelevanceFieldEnum)[keyof typeof Rider_ratingOrderByRelevanceFieldEnum]


  export const Rider_credentialsOrderByRelevanceFieldEnum: {
    nin: 'nin',
    nin_image: 'nin_image',
    driver_license: 'driver_license',
    driver_license_image: 'driver_license_image',
    plate_number: 'plate_number',
    vehicle_image: 'vehicle_image'
  };

  export type Rider_credentialsOrderByRelevanceFieldEnum = (typeof Rider_credentialsOrderByRelevanceFieldEnum)[keyof typeof Rider_credentialsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullname?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullname?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    profile_image?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "username" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullname?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullname?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_image?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    delivery?: DeliveryListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
    delivery_payment?: Delivery_paymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delivery?: DeliveryOrderByRelationAggregateInput
    rider_rating?: Rider_ratingOrderByRelationAggregateInput
    delivery_payment?: delivery_paymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_image?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    delivery?: DeliveryListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
    delivery_payment?: Delivery_paymentListRelationFilter
  }, "id" | "username" | "email" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullname?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: IntFilter<"Vendor"> | number
    fullname?: StringFilter<"Vendor"> | string
    username?: StringFilter<"Vendor"> | string
    email?: StringFilter<"Vendor"> | string
    phone_number?: StringFilter<"Vendor"> | string
    role?: EnumRoleFilter<"Vendor"> | $Enums.Role
    operating_areas?: JsonNullableFilter<"Vendor">
    profile_image?: StringFilter<"Vendor"> | string
    password?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    rider?: RiderListRelationFilter
    delivery?: DeliveryListRelationFilter
    bank_details?: Bank_detailsListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    operating_areas?: SortOrderInput | SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByRelationAggregateInput
    delivery?: DeliveryOrderByRelationAggregateInput
    bank_details?: Bank_detailsOrderByRelationAggregateInput
    _relevance?: VendorOrderByRelevanceInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    fullname?: StringFilter<"Vendor"> | string
    role?: EnumRoleFilter<"Vendor"> | $Enums.Role
    operating_areas?: JsonNullableFilter<"Vendor">
    profile_image?: StringFilter<"Vendor"> | string
    password?: StringFilter<"Vendor"> | string
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    rider?: RiderListRelationFilter
    delivery?: DeliveryListRelationFilter
    bank_details?: Bank_detailsListRelationFilter
  }, "id" | "username" | "email" | "phone_number">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    operating_areas?: SortOrderInput | SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendor"> | number
    fullname?: StringWithAggregatesFilter<"Vendor"> | string
    username?: StringWithAggregatesFilter<"Vendor"> | string
    email?: StringWithAggregatesFilter<"Vendor"> | string
    phone_number?: StringWithAggregatesFilter<"Vendor"> | string
    role?: EnumRoleWithAggregatesFilter<"Vendor"> | $Enums.Role
    operating_areas?: JsonNullableWithAggregatesFilter<"Vendor">
    profile_image?: StringWithAggregatesFilter<"Vendor"> | string
    password?: StringWithAggregatesFilter<"Vendor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type RiderWhereInput = {
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    id?: IntFilter<"Rider"> | number
    vendor_id?: IntFilter<"Rider"> | number
    fullname?: StringFilter<"Rider"> | string
    username?: StringFilter<"Rider"> | string
    email?: StringFilter<"Rider"> | string
    phone_number?: StringFilter<"Rider"> | string
    role?: EnumRoleFilter<"Rider"> | $Enums.Role
    profile_image?: StringFilter<"Rider"> | string
    avg_rating?: FloatFilter<"Rider"> | number
    password?: StringFilter<"Rider"> | string
    status?: EnumStatusFilter<"Rider"> | $Enums.Status
    is_verified?: BoolFilter<"Rider"> | boolean
    available?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    proposal?: ProposalListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
    rider_credentials?: Rider_credentialsListRelationFilter
  }

  export type RiderOrderByWithRelationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    proposal?: ProposalOrderByRelationAggregateInput
    rider_rating?: Rider_ratingOrderByRelationAggregateInput
    rider_credentials?: Rider_credentialsOrderByRelationAggregateInput
    _relevance?: RiderOrderByRelevanceInput
  }

  export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_number?: string
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    vendor_id?: IntFilter<"Rider"> | number
    fullname?: StringFilter<"Rider"> | string
    role?: EnumRoleFilter<"Rider"> | $Enums.Role
    profile_image?: StringFilter<"Rider"> | string
    avg_rating?: FloatFilter<"Rider"> | number
    password?: StringFilter<"Rider"> | string
    status?: EnumStatusFilter<"Rider"> | $Enums.Status
    is_verified?: BoolFilter<"Rider"> | boolean
    available?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    proposal?: ProposalListRelationFilter
    rider_rating?: Rider_ratingListRelationFilter
    rider_credentials?: Rider_credentialsListRelationFilter
  }, "id" | "username" | "email" | "phone_number">

  export type RiderOrderByWithAggregationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiderCountOrderByAggregateInput
    _avg?: RiderAvgOrderByAggregateInput
    _max?: RiderMaxOrderByAggregateInput
    _min?: RiderMinOrderByAggregateInput
    _sum?: RiderSumOrderByAggregateInput
  }

  export type RiderScalarWhereWithAggregatesInput = {
    AND?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    OR?: RiderScalarWhereWithAggregatesInput[]
    NOT?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider"> | number
    vendor_id?: IntWithAggregatesFilter<"Rider"> | number
    fullname?: StringWithAggregatesFilter<"Rider"> | string
    username?: StringWithAggregatesFilter<"Rider"> | string
    email?: StringWithAggregatesFilter<"Rider"> | string
    phone_number?: StringWithAggregatesFilter<"Rider"> | string
    role?: EnumRoleWithAggregatesFilter<"Rider"> | $Enums.Role
    profile_image?: StringWithAggregatesFilter<"Rider"> | string
    avg_rating?: FloatWithAggregatesFilter<"Rider"> | number
    password?: StringWithAggregatesFilter<"Rider"> | string
    status?: EnumStatusWithAggregatesFilter<"Rider"> | $Enums.Status
    is_verified?: BoolWithAggregatesFilter<"Rider"> | boolean
    available?: BoolWithAggregatesFilter<"Rider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: IntFilter<"Delivery"> | number
    user_id?: IntFilter<"Delivery"> | number
    package_name?: StringFilter<"Delivery"> | string
    phone_number?: StringFilter<"Delivery"> | string
    pickup_location?: StringFilter<"Delivery"> | string
    delivery_location?: StringFilter<"Delivery"> | string
    estimated_delivery_price?: StringFilter<"Delivery"> | string
    package_image?: StringFilter<"Delivery"> | string
    landmark?: StringFilter<"Delivery"> | string
    reference?: StringFilter<"Delivery"> | string
    vendor_id?: IntNullableFilter<"Delivery"> | number | null
    delivery_code?: IntNullableFilter<"Delivery"> | number | null
    is_pickedup?: BoolFilter<"Delivery"> | boolean
    is_delivered?: BoolFilter<"Delivery"> | boolean
    is_accepted?: BoolFilter<"Delivery"> | boolean
    status?: EnumStatusFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    sent_proposal_rider_id?: JsonNullableFilter<"Delivery">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    proposal?: ProposalListRelationFilter
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    landmark?: SortOrder
    reference?: SortOrder
    vendor_id?: SortOrderInput | SortOrder
    delivery_code?: SortOrderInput | SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    is_accepted?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sent_proposal_rider_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    proposal?: ProposalOrderByRelationAggregateInput
    _relevance?: DeliveryOrderByRelevanceInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    delivery_code?: number
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    user_id?: IntFilter<"Delivery"> | number
    package_name?: StringFilter<"Delivery"> | string
    phone_number?: StringFilter<"Delivery"> | string
    pickup_location?: StringFilter<"Delivery"> | string
    delivery_location?: StringFilter<"Delivery"> | string
    estimated_delivery_price?: StringFilter<"Delivery"> | string
    package_image?: StringFilter<"Delivery"> | string
    landmark?: StringFilter<"Delivery"> | string
    vendor_id?: IntNullableFilter<"Delivery"> | number | null
    is_pickedup?: BoolFilter<"Delivery"> | boolean
    is_delivered?: BoolFilter<"Delivery"> | boolean
    is_accepted?: BoolFilter<"Delivery"> | boolean
    status?: EnumStatusFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    sent_proposal_rider_id?: JsonNullableFilter<"Delivery">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    proposal?: ProposalListRelationFilter
  }, "id" | "reference" | "delivery_code">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    landmark?: SortOrder
    reference?: SortOrder
    vendor_id?: SortOrderInput | SortOrder
    delivery_code?: SortOrderInput | SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    is_accepted?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sent_proposal_rider_id?: SortOrderInput | SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Delivery"> | number
    user_id?: IntWithAggregatesFilter<"Delivery"> | number
    package_name?: StringWithAggregatesFilter<"Delivery"> | string
    phone_number?: StringWithAggregatesFilter<"Delivery"> | string
    pickup_location?: StringWithAggregatesFilter<"Delivery"> | string
    delivery_location?: StringWithAggregatesFilter<"Delivery"> | string
    estimated_delivery_price?: StringWithAggregatesFilter<"Delivery"> | string
    package_image?: StringWithAggregatesFilter<"Delivery"> | string
    landmark?: StringWithAggregatesFilter<"Delivery"> | string
    reference?: StringWithAggregatesFilter<"Delivery"> | string
    vendor_id?: IntNullableWithAggregatesFilter<"Delivery"> | number | null
    delivery_code?: IntNullableWithAggregatesFilter<"Delivery"> | number | null
    is_pickedup?: BoolWithAggregatesFilter<"Delivery"> | boolean
    is_delivered?: BoolWithAggregatesFilter<"Delivery"> | boolean
    is_accepted?: BoolWithAggregatesFilter<"Delivery"> | boolean
    status?: EnumStatusWithAggregatesFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    sent_proposal_rider_id?: JsonNullableWithAggregatesFilter<"Delivery">
  }

  export type nigerian_banksWhereInput = {
    AND?: nigerian_banksWhereInput | nigerian_banksWhereInput[]
    OR?: nigerian_banksWhereInput[]
    NOT?: nigerian_banksWhereInput | nigerian_banksWhereInput[]
    id?: IntFilter<"nigerian_banks"> | number
    name?: StringFilter<"nigerian_banks"> | string
    code?: StringFilter<"nigerian_banks"> | string
    is_active?: BoolFilter<"nigerian_banks"> | boolean
    slug?: StringFilter<"nigerian_banks"> | string
    ussd?: StringFilter<"nigerian_banks"> | string
    created_at?: DateTimeFilter<"nigerian_banks"> | Date | string
    updated_at?: DateTimeFilter<"nigerian_banks"> | Date | string
    bank_details?: Bank_detailsListRelationFilter
  }

  export type nigerian_banksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    ussd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bank_details?: Bank_detailsOrderByRelationAggregateInput
    _relevance?: nigerian_banksOrderByRelevanceInput
  }

  export type nigerian_banksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: nigerian_banksWhereInput | nigerian_banksWhereInput[]
    OR?: nigerian_banksWhereInput[]
    NOT?: nigerian_banksWhereInput | nigerian_banksWhereInput[]
    name?: StringFilter<"nigerian_banks"> | string
    is_active?: BoolFilter<"nigerian_banks"> | boolean
    slug?: StringFilter<"nigerian_banks"> | string
    ussd?: StringFilter<"nigerian_banks"> | string
    created_at?: DateTimeFilter<"nigerian_banks"> | Date | string
    updated_at?: DateTimeFilter<"nigerian_banks"> | Date | string
    bank_details?: Bank_detailsListRelationFilter
  }, "id" | "code">

  export type nigerian_banksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    ussd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: nigerian_banksCountOrderByAggregateInput
    _avg?: nigerian_banksAvgOrderByAggregateInput
    _max?: nigerian_banksMaxOrderByAggregateInput
    _min?: nigerian_banksMinOrderByAggregateInput
    _sum?: nigerian_banksSumOrderByAggregateInput
  }

  export type nigerian_banksScalarWhereWithAggregatesInput = {
    AND?: nigerian_banksScalarWhereWithAggregatesInput | nigerian_banksScalarWhereWithAggregatesInput[]
    OR?: nigerian_banksScalarWhereWithAggregatesInput[]
    NOT?: nigerian_banksScalarWhereWithAggregatesInput | nigerian_banksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"nigerian_banks"> | number
    name?: StringWithAggregatesFilter<"nigerian_banks"> | string
    code?: StringWithAggregatesFilter<"nigerian_banks"> | string
    is_active?: BoolWithAggregatesFilter<"nigerian_banks"> | boolean
    slug?: StringWithAggregatesFilter<"nigerian_banks"> | string
    ussd?: StringWithAggregatesFilter<"nigerian_banks"> | string
    created_at?: DateTimeWithAggregatesFilter<"nigerian_banks"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"nigerian_banks"> | Date | string
  }

  export type delivery_paymentWhereInput = {
    AND?: delivery_paymentWhereInput | delivery_paymentWhereInput[]
    OR?: delivery_paymentWhereInput[]
    NOT?: delivery_paymentWhereInput | delivery_paymentWhereInput[]
    id?: IntFilter<"delivery_payment"> | number
    user_id?: IntFilter<"delivery_payment"> | number
    email?: StringFilter<"delivery_payment"> | string
    amount?: StringFilter<"delivery_payment"> | string
    reference?: StringFilter<"delivery_payment"> | string
    phone_number?: StringFilter<"delivery_payment"> | string
    status?: StringFilter<"delivery_payment"> | string
    has_paid?: BoolFilter<"delivery_payment"> | boolean
    createdAt?: DateTimeFilter<"delivery_payment"> | Date | string
    updatedAt?: DateTimeFilter<"delivery_payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type delivery_paymentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    status?: SortOrder
    has_paid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: delivery_paymentOrderByRelevanceInput
  }

  export type delivery_paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: delivery_paymentWhereInput | delivery_paymentWhereInput[]
    OR?: delivery_paymentWhereInput[]
    NOT?: delivery_paymentWhereInput | delivery_paymentWhereInput[]
    user_id?: IntFilter<"delivery_payment"> | number
    email?: StringFilter<"delivery_payment"> | string
    amount?: StringFilter<"delivery_payment"> | string
    phone_number?: StringFilter<"delivery_payment"> | string
    status?: StringFilter<"delivery_payment"> | string
    has_paid?: BoolFilter<"delivery_payment"> | boolean
    createdAt?: DateTimeFilter<"delivery_payment"> | Date | string
    updatedAt?: DateTimeFilter<"delivery_payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "reference">

  export type delivery_paymentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    status?: SortOrder
    has_paid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: delivery_paymentCountOrderByAggregateInput
    _avg?: delivery_paymentAvgOrderByAggregateInput
    _max?: delivery_paymentMaxOrderByAggregateInput
    _min?: delivery_paymentMinOrderByAggregateInput
    _sum?: delivery_paymentSumOrderByAggregateInput
  }

  export type delivery_paymentScalarWhereWithAggregatesInput = {
    AND?: delivery_paymentScalarWhereWithAggregatesInput | delivery_paymentScalarWhereWithAggregatesInput[]
    OR?: delivery_paymentScalarWhereWithAggregatesInput[]
    NOT?: delivery_paymentScalarWhereWithAggregatesInput | delivery_paymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"delivery_payment"> | number
    user_id?: IntWithAggregatesFilter<"delivery_payment"> | number
    email?: StringWithAggregatesFilter<"delivery_payment"> | string
    amount?: StringWithAggregatesFilter<"delivery_payment"> | string
    reference?: StringWithAggregatesFilter<"delivery_payment"> | string
    phone_number?: StringWithAggregatesFilter<"delivery_payment"> | string
    status?: StringWithAggregatesFilter<"delivery_payment"> | string
    has_paid?: BoolWithAggregatesFilter<"delivery_payment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"delivery_payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"delivery_payment"> | Date | string
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: IntFilter<"Proposal"> | number
    rider_id?: IntFilter<"Proposal"> | number
    delivery_id?: IntFilter<"Proposal"> | number
    status?: EnumStatusFilter<"Proposal"> | $Enums.Status
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    deliver?: XOR<DeliveryScalarRelationFilter, DeliveryWhereInput>
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
    status?: SortOrder
    rider?: RiderOrderByWithRelationInput
    deliver?: DeliveryOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    rider_id?: IntFilter<"Proposal"> | number
    delivery_id?: IntFilter<"Proposal"> | number
    status?: EnumStatusFilter<"Proposal"> | $Enums.Status
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    deliver?: XOR<DeliveryScalarRelationFilter, DeliveryWhereInput>
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
    status?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proposal"> | number
    rider_id?: IntWithAggregatesFilter<"Proposal"> | number
    delivery_id?: IntWithAggregatesFilter<"Proposal"> | number
    status?: EnumStatusWithAggregatesFilter<"Proposal"> | $Enums.Status
  }

  export type Operating_areasWhereInput = {
    AND?: Operating_areasWhereInput | Operating_areasWhereInput[]
    OR?: Operating_areasWhereInput[]
    NOT?: Operating_areasWhereInput | Operating_areasWhereInput[]
    id?: IntFilter<"Operating_areas"> | number
    name?: StringFilter<"Operating_areas"> | string
    status?: EnumStatusFilter<"Operating_areas"> | $Enums.Status
    createdAt?: DateTimeFilter<"Operating_areas"> | Date | string
    updatedAt?: DateTimeFilter<"Operating_areas"> | Date | string
  }

  export type Operating_areasOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: Operating_areasOrderByRelevanceInput
  }

  export type Operating_areasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Operating_areasWhereInput | Operating_areasWhereInput[]
    OR?: Operating_areasWhereInput[]
    NOT?: Operating_areasWhereInput | Operating_areasWhereInput[]
    name?: StringFilter<"Operating_areas"> | string
    status?: EnumStatusFilter<"Operating_areas"> | $Enums.Status
    createdAt?: DateTimeFilter<"Operating_areas"> | Date | string
    updatedAt?: DateTimeFilter<"Operating_areas"> | Date | string
  }, "id">

  export type Operating_areasOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Operating_areasCountOrderByAggregateInput
    _avg?: Operating_areasAvgOrderByAggregateInput
    _max?: Operating_areasMaxOrderByAggregateInput
    _min?: Operating_areasMinOrderByAggregateInput
    _sum?: Operating_areasSumOrderByAggregateInput
  }

  export type Operating_areasScalarWhereWithAggregatesInput = {
    AND?: Operating_areasScalarWhereWithAggregatesInput | Operating_areasScalarWhereWithAggregatesInput[]
    OR?: Operating_areasScalarWhereWithAggregatesInput[]
    NOT?: Operating_areasScalarWhereWithAggregatesInput | Operating_areasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Operating_areas"> | number
    name?: StringWithAggregatesFilter<"Operating_areas"> | string
    status?: EnumStatusWithAggregatesFilter<"Operating_areas"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Operating_areas"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Operating_areas"> | Date | string
  }

  export type Bank_detailsWhereInput = {
    AND?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    OR?: Bank_detailsWhereInput[]
    NOT?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    id?: IntFilter<"Bank_details"> | number
    bank_id?: IntNullableFilter<"Bank_details"> | number | null
    vendor_id?: IntNullableFilter<"Bank_details"> | number | null
    bank_name?: StringFilter<"Bank_details"> | string
    account_name?: StringFilter<"Bank_details"> | string
    account_number?: StringFilter<"Bank_details"> | string
    createdAt?: DateTimeFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeFilter<"Bank_details"> | Date | string
    bank?: XOR<Nigerian_banksNullableScalarRelationFilter, nigerian_banksWhereInput> | null
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }

  export type Bank_detailsOrderByWithRelationInput = {
    id?: SortOrder
    bank_id?: SortOrderInput | SortOrder
    vendor_id?: SortOrderInput | SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bank?: nigerian_banksOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    _relevance?: Bank_detailsOrderByRelevanceInput
  }

  export type Bank_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bank_id?: number
    vendor_id?: number
    AND?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    OR?: Bank_detailsWhereInput[]
    NOT?: Bank_detailsWhereInput | Bank_detailsWhereInput[]
    bank_name?: StringFilter<"Bank_details"> | string
    account_name?: StringFilter<"Bank_details"> | string
    account_number?: StringFilter<"Bank_details"> | string
    createdAt?: DateTimeFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeFilter<"Bank_details"> | Date | string
    bank?: XOR<Nigerian_banksNullableScalarRelationFilter, nigerian_banksWhereInput> | null
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
  }, "id" | "bank_id" | "vendor_id">

  export type Bank_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    bank_id?: SortOrderInput | SortOrder
    vendor_id?: SortOrderInput | SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Bank_detailsCountOrderByAggregateInput
    _avg?: Bank_detailsAvgOrderByAggregateInput
    _max?: Bank_detailsMaxOrderByAggregateInput
    _min?: Bank_detailsMinOrderByAggregateInput
    _sum?: Bank_detailsSumOrderByAggregateInput
  }

  export type Bank_detailsScalarWhereWithAggregatesInput = {
    AND?: Bank_detailsScalarWhereWithAggregatesInput | Bank_detailsScalarWhereWithAggregatesInput[]
    OR?: Bank_detailsScalarWhereWithAggregatesInput[]
    NOT?: Bank_detailsScalarWhereWithAggregatesInput | Bank_detailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank_details"> | number
    bank_id?: IntNullableWithAggregatesFilter<"Bank_details"> | number | null
    vendor_id?: IntNullableWithAggregatesFilter<"Bank_details"> | number | null
    bank_name?: StringWithAggregatesFilter<"Bank_details"> | string
    account_name?: StringWithAggregatesFilter<"Bank_details"> | string
    account_number?: StringWithAggregatesFilter<"Bank_details"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bank_details"> | Date | string
  }

  export type Rider_ratingWhereInput = {
    AND?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    OR?: Rider_ratingWhereInput[]
    NOT?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    id?: IntFilter<"Rider_rating"> | number
    rider_id?: IntFilter<"Rider_rating"> | number
    user_id?: IntFilter<"Rider_rating"> | number
    rating?: IntFilter<"Rider_rating"> | number
    review?: StringFilter<"Rider_rating"> | string
    createdAt?: DateTimeFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_rating"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Rider_ratingOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: Rider_ratingOrderByRelevanceInput
  }

  export type Rider_ratingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    OR?: Rider_ratingWhereInput[]
    NOT?: Rider_ratingWhereInput | Rider_ratingWhereInput[]
    rider_id?: IntFilter<"Rider_rating"> | number
    user_id?: IntFilter<"Rider_rating"> | number
    rating?: IntFilter<"Rider_rating"> | number
    review?: StringFilter<"Rider_rating"> | string
    createdAt?: DateTimeFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_rating"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Rider_ratingOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Rider_ratingCountOrderByAggregateInput
    _avg?: Rider_ratingAvgOrderByAggregateInput
    _max?: Rider_ratingMaxOrderByAggregateInput
    _min?: Rider_ratingMinOrderByAggregateInput
    _sum?: Rider_ratingSumOrderByAggregateInput
  }

  export type Rider_ratingScalarWhereWithAggregatesInput = {
    AND?: Rider_ratingScalarWhereWithAggregatesInput | Rider_ratingScalarWhereWithAggregatesInput[]
    OR?: Rider_ratingScalarWhereWithAggregatesInput[]
    NOT?: Rider_ratingScalarWhereWithAggregatesInput | Rider_ratingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider_rating"> | number
    rider_id?: IntWithAggregatesFilter<"Rider_rating"> | number
    user_id?: IntWithAggregatesFilter<"Rider_rating"> | number
    rating?: IntWithAggregatesFilter<"Rider_rating"> | number
    review?: StringWithAggregatesFilter<"Rider_rating"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider_rating"> | Date | string
  }

  export type Rider_credentialsWhereInput = {
    AND?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    OR?: Rider_credentialsWhereInput[]
    NOT?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    id?: IntFilter<"Rider_credentials"> | number
    rider_id?: IntFilter<"Rider_credentials"> | number
    nin?: StringFilter<"Rider_credentials"> | string
    nin_image?: StringNullableFilter<"Rider_credentials"> | string | null
    driver_license?: StringFilter<"Rider_credentials"> | string
    driver_license_image?: StringNullableFilter<"Rider_credentials"> | string | null
    plate_number?: StringFilter<"Rider_credentials"> | string
    vehicle_image?: StringNullableFilter<"Rider_credentials"> | string | null
    status?: EnumStatusFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
  }

  export type Rider_credentialsOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrderInput | SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    _relevance?: Rider_credentialsOrderByRelevanceInput
  }

  export type Rider_credentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nin?: string
    driver_license?: string
    plate_number?: string
    AND?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    OR?: Rider_credentialsWhereInput[]
    NOT?: Rider_credentialsWhereInput | Rider_credentialsWhereInput[]
    rider_id?: IntFilter<"Rider_credentials"> | number
    nin_image?: StringNullableFilter<"Rider_credentials"> | string | null
    driver_license_image?: StringNullableFilter<"Rider_credentials"> | string | null
    vehicle_image?: StringNullableFilter<"Rider_credentials"> | string | null
    status?: EnumStatusFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
  }, "id" | "nin" | "driver_license" | "plate_number">

  export type Rider_credentialsOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrderInput | SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrderInput | SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Rider_credentialsCountOrderByAggregateInput
    _avg?: Rider_credentialsAvgOrderByAggregateInput
    _max?: Rider_credentialsMaxOrderByAggregateInput
    _min?: Rider_credentialsMinOrderByAggregateInput
    _sum?: Rider_credentialsSumOrderByAggregateInput
  }

  export type Rider_credentialsScalarWhereWithAggregatesInput = {
    AND?: Rider_credentialsScalarWhereWithAggregatesInput | Rider_credentialsScalarWhereWithAggregatesInput[]
    OR?: Rider_credentialsScalarWhereWithAggregatesInput[]
    NOT?: Rider_credentialsScalarWhereWithAggregatesInput | Rider_credentialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider_credentials"> | number
    rider_id?: IntWithAggregatesFilter<"Rider_credentials"> | number
    nin?: StringWithAggregatesFilter<"Rider_credentials"> | string
    nin_image?: StringNullableWithAggregatesFilter<"Rider_credentials"> | string | null
    driver_license?: StringWithAggregatesFilter<"Rider_credentials"> | string
    driver_license_image?: StringNullableWithAggregatesFilter<"Rider_credentials"> | string | null
    plate_number?: StringWithAggregatesFilter<"Rider_credentials"> | string
    vehicle_image?: StringNullableWithAggregatesFilter<"Rider_credentials"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider_credentials"> | Date | string
  }

  export type AdminCreateInput = {
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutUserInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutUserInput
    delivery_payment?: delivery_paymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutUserInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutUserInput
    delivery_payment?: delivery_paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutUserNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutUserNestedInput
    delivery_payment?: delivery_paymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutUserNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutUserNestedInput
    delivery_payment?: delivery_paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedManyWithoutVendorInput
    delivery?: DeliveryCreateNestedManyWithoutVendorInput
    bank_details?: Bank_detailsCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderUncheckedCreateNestedManyWithoutVendorInput
    delivery?: DeliveryUncheckedCreateNestedManyWithoutVendorInput
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateManyWithoutVendorNestedInput
    delivery?: DeliveryUpdateManyWithoutVendorNestedInput
    bank_details?: Bank_detailsUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUncheckedUpdateManyWithoutVendorNestedInput
    delivery?: DeliveryUncheckedUpdateManyWithoutVendorNestedInput
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderCreateInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutRiderInput
    proposal?: ProposalCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateInput = {
    id?: number
    vendor_id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutRiderNestedInput
    proposal?: ProposalUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateManyInput = {
    id?: number
    vendor_id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDeliveryInput
    vendor?: VendorCreateNestedOneWithoutDeliveryInput
    proposal?: ProposalCreateNestedManyWithoutDeliverInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    vendor_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    proposal?: ProposalUncheckedCreateNestedManyWithoutDeliverInput
  }

  export type DeliveryUpdateInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDeliveryNestedInput
    vendor?: VendorUpdateOneWithoutDeliveryNestedInput
    proposal?: ProposalUpdateManyWithoutDeliverNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    proposal?: ProposalUncheckedUpdateManyWithoutDeliverNestedInput
  }

  export type DeliveryCreateManyInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    vendor_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeliveryUpdateManyMutationInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type nigerian_banksCreateInput = {
    name: string
    code: string
    is_active?: boolean
    slug: string
    ussd: string
    created_at?: Date | string
    updated_at?: Date | string
    bank_details?: Bank_detailsCreateNestedManyWithoutBankInput
  }

  export type nigerian_banksUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    is_active?: boolean
    slug: string
    ussd: string
    created_at?: Date | string
    updated_at?: Date | string
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutBankInput
  }

  export type nigerian_banksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ussd?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_details?: Bank_detailsUpdateManyWithoutBankNestedInput
  }

  export type nigerian_banksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ussd?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutBankNestedInput
  }

  export type nigerian_banksCreateManyInput = {
    id?: number
    name: string
    code: string
    is_active?: boolean
    slug: string
    ussd: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type nigerian_banksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ussd?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nigerian_banksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ussd?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type delivery_paymentCreateInput = {
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDelivery_paymentInput
  }

  export type delivery_paymentUncheckedCreateInput = {
    id?: number
    user_id: number
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type delivery_paymentUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDelivery_paymentNestedInput
  }

  export type delivery_paymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type delivery_paymentCreateManyInput = {
    id?: number
    user_id: number
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type delivery_paymentUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type delivery_paymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateInput = {
    status?: $Enums.Status
    rider: RiderCreateNestedOneWithoutProposalInput
    deliver: DeliveryCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: number
    rider_id: number
    delivery_id: number
    status?: $Enums.Status
  }

  export type ProposalUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    rider?: RiderUpdateOneRequiredWithoutProposalNestedInput
    deliver?: DeliveryUpdateOneRequiredWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    delivery_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProposalCreateManyInput = {
    id?: number
    rider_id: number
    delivery_id: number
    status?: $Enums.Status
  }

  export type ProposalUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    delivery_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Operating_areasCreateInput = {
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Operating_areasUncheckedCreateInput = {
    id?: number
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Operating_areasUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasCreateManyInput = {
    id?: number
    name: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Operating_areasUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Operating_areasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsCreateInput = {
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bank?: nigerian_banksCreateNestedOneWithoutBank_detailsInput
    vendor?: VendorCreateNestedOneWithoutBank_detailsInput
  }

  export type Bank_detailsUncheckedCreateInput = {
    id?: number
    bank_id?: number | null
    vendor_id?: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsUpdateInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: nigerian_banksUpdateOneWithoutBank_detailsNestedInput
    vendor?: VendorUpdateOneWithoutBank_detailsNestedInput
  }

  export type Bank_detailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_id?: NullableIntFieldUpdateOperationsInput | number | null
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsCreateManyInput = {
    id?: number
    bank_id?: number | null
    vendor_id?: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsUpdateManyMutationInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_id?: NullableIntFieldUpdateOperationsInput | number | null
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingCreateInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRider_ratingInput
    user: UserCreateNestedOneWithoutRider_ratingInput
  }

  export type Rider_ratingUncheckedCreateInput = {
    id?: number
    rider_id: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRider_ratingNestedInput
    user?: UserUpdateOneRequiredWithoutRider_ratingNestedInput
  }

  export type Rider_ratingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingCreateManyInput = {
    id?: number
    rider_id: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsCreateInput = {
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRider_credentialsInput
  }

  export type Rider_credentialsUncheckedCreateInput = {
    id?: number
    rider_id: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsUpdateInput = {
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRider_credentialsNestedInput
  }

  export type Rider_credentialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsCreateManyInput = {
    id?: number
    rider_id: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsUpdateManyMutationInput = {
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type Rider_ratingListRelationFilter = {
    every?: Rider_ratingWhereInput
    some?: Rider_ratingWhereInput
    none?: Rider_ratingWhereInput
  }

  export type Delivery_paymentListRelationFilter = {
    every?: delivery_paymentWhereInput
    some?: delivery_paymentWhereInput
    none?: delivery_paymentWhereInput
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Rider_ratingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type delivery_paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RiderListRelationFilter = {
    every?: RiderWhereInput
    some?: RiderWhereInput
    none?: RiderWhereInput
  }

  export type Bank_detailsListRelationFilter = {
    every?: Bank_detailsWhereInput
    some?: Bank_detailsWhereInput
    none?: Bank_detailsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RiderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Bank_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorOrderByRelevanceInput = {
    fields: VendorOrderByRelevanceFieldEnum | VendorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    operating_areas?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type Rider_credentialsListRelationFilter = {
    every?: Rider_credentialsWhereInput
    some?: Rider_credentialsWhereInput
    none?: Rider_credentialsWhereInput
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Rider_credentialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiderOrderByRelevanceInput = {
    fields: RiderOrderByRelevanceFieldEnum | RiderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RiderCountOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderAvgOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    avg_rating?: SortOrder
  }

  export type RiderMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMinOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    role?: SortOrder
    profile_image?: SortOrder
    avg_rating?: SortOrder
    password?: SortOrder
    status?: SortOrder
    is_verified?: SortOrder
    available?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderSumOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    avg_rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type DeliveryOrderByRelevanceInput = {
    fields: DeliveryOrderByRelevanceFieldEnum | DeliveryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    landmark?: SortOrder
    reference?: SortOrder
    vendor_id?: SortOrder
    delivery_code?: SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    is_accepted?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sent_proposal_rider_id?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    delivery_code?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    landmark?: SortOrder
    reference?: SortOrder
    vendor_id?: SortOrder
    delivery_code?: SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    is_accepted?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    package_name?: SortOrder
    phone_number?: SortOrder
    pickup_location?: SortOrder
    delivery_location?: SortOrder
    estimated_delivery_price?: SortOrder
    package_image?: SortOrder
    landmark?: SortOrder
    reference?: SortOrder
    vendor_id?: SortOrder
    delivery_code?: SortOrder
    is_pickedup?: SortOrder
    is_delivered?: SortOrder
    is_accepted?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vendor_id?: SortOrder
    delivery_code?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type nigerian_banksOrderByRelevanceInput = {
    fields: nigerian_banksOrderByRelevanceFieldEnum | nigerian_banksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type nigerian_banksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    ussd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type nigerian_banksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type nigerian_banksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    ussd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type nigerian_banksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    ussd?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type nigerian_banksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type delivery_paymentOrderByRelevanceInput = {
    fields: delivery_paymentOrderByRelevanceFieldEnum | delivery_paymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type delivery_paymentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    status?: SortOrder
    has_paid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type delivery_paymentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type delivery_paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    status?: SortOrder
    has_paid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type delivery_paymentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    reference?: SortOrder
    phone_number?: SortOrder
    status?: SortOrder
    has_paid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type delivery_paymentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type RiderScalarRelationFilter = {
    is?: RiderWhereInput
    isNot?: RiderWhereInput
  }

  export type DeliveryScalarRelationFilter = {
    is?: DeliveryWhereInput
    isNot?: DeliveryWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
    status?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
    status?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
    status?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    delivery_id?: SortOrder
  }

  export type Operating_areasOrderByRelevanceInput = {
    fields: Operating_areasOrderByRelevanceFieldEnum | Operating_areasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Operating_areasCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Operating_areasMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Operating_areasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Nigerian_banksNullableScalarRelationFilter = {
    is?: nigerian_banksWhereInput | null
    isNot?: nigerian_banksWhereInput | null
  }

  export type Bank_detailsOrderByRelevanceInput = {
    fields: Bank_detailsOrderByRelevanceFieldEnum | Bank_detailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Bank_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    bank_id?: SortOrder
    vendor_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Bank_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    bank_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type Bank_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    bank_id?: SortOrder
    vendor_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Bank_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    bank_id?: SortOrder
    vendor_id?: SortOrder
    bank_name?: SortOrder
    account_name?: SortOrder
    account_number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Bank_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    bank_id?: SortOrder
    vendor_id?: SortOrder
  }

  export type Rider_ratingOrderByRelevanceInput = {
    fields: Rider_ratingOrderByRelevanceFieldEnum | Rider_ratingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Rider_ratingCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_ratingAvgOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type Rider_ratingMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_ratingMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_ratingSumOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Rider_credentialsOrderByRelevanceInput = {
    fields: Rider_credentialsOrderByRelevanceFieldEnum | Rider_credentialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Rider_credentialsCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_credentialsAvgOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
  }

  export type Rider_credentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_credentialsMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    nin?: SortOrder
    nin_image?: SortOrder
    driver_license?: SortOrder
    driver_license_image?: SortOrder
    plate_number?: SortOrder
    vehicle_image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Rider_credentialsSumOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeliveryCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Rider_ratingCreateNestedManyWithoutUserInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type delivery_paymentCreateNestedManyWithoutUserInput = {
    create?: XOR<delivery_paymentCreateWithoutUserInput, delivery_paymentUncheckedCreateWithoutUserInput> | delivery_paymentCreateWithoutUserInput[] | delivery_paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: delivery_paymentCreateOrConnectWithoutUserInput | delivery_paymentCreateOrConnectWithoutUserInput[]
    createMany?: delivery_paymentCreateManyUserInputEnvelope
    connect?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Rider_ratingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type delivery_paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<delivery_paymentCreateWithoutUserInput, delivery_paymentUncheckedCreateWithoutUserInput> | delivery_paymentCreateWithoutUserInput[] | delivery_paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: delivery_paymentCreateOrConnectWithoutUserInput | delivery_paymentCreateOrConnectWithoutUserInput[]
    createMany?: delivery_paymentCreateManyUserInputEnvelope
    connect?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
  }

  export type DeliveryUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutUserInput | DeliveryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutUserInput | DeliveryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutUserInput | DeliveryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Rider_ratingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutUserInput | Rider_ratingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutUserInput | Rider_ratingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutUserInput | Rider_ratingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type delivery_paymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<delivery_paymentCreateWithoutUserInput, delivery_paymentUncheckedCreateWithoutUserInput> | delivery_paymentCreateWithoutUserInput[] | delivery_paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: delivery_paymentCreateOrConnectWithoutUserInput | delivery_paymentCreateOrConnectWithoutUserInput[]
    upsert?: delivery_paymentUpsertWithWhereUniqueWithoutUserInput | delivery_paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: delivery_paymentCreateManyUserInputEnvelope
    set?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    disconnect?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    delete?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    connect?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    update?: delivery_paymentUpdateWithWhereUniqueWithoutUserInput | delivery_paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: delivery_paymentUpdateManyWithWhereWithoutUserInput | delivery_paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: delivery_paymentScalarWhereInput | delivery_paymentScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput> | DeliveryCreateWithoutUserInput[] | DeliveryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutUserInput | DeliveryCreateOrConnectWithoutUserInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutUserInput | DeliveryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeliveryCreateManyUserInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutUserInput | DeliveryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutUserInput | DeliveryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Rider_ratingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput> | Rider_ratingCreateWithoutUserInput[] | Rider_ratingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutUserInput | Rider_ratingCreateOrConnectWithoutUserInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutUserInput | Rider_ratingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Rider_ratingCreateManyUserInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutUserInput | Rider_ratingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutUserInput | Rider_ratingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type delivery_paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<delivery_paymentCreateWithoutUserInput, delivery_paymentUncheckedCreateWithoutUserInput> | delivery_paymentCreateWithoutUserInput[] | delivery_paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: delivery_paymentCreateOrConnectWithoutUserInput | delivery_paymentCreateOrConnectWithoutUserInput[]
    upsert?: delivery_paymentUpsertWithWhereUniqueWithoutUserInput | delivery_paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: delivery_paymentCreateManyUserInputEnvelope
    set?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    disconnect?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    delete?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    connect?: delivery_paymentWhereUniqueInput | delivery_paymentWhereUniqueInput[]
    update?: delivery_paymentUpdateWithWhereUniqueWithoutUserInput | delivery_paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: delivery_paymentUpdateManyWithWhereWithoutUserInput | delivery_paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: delivery_paymentScalarWhereInput | delivery_paymentScalarWhereInput[]
  }

  export type RiderCreateNestedManyWithoutVendorInput = {
    create?: XOR<RiderCreateWithoutVendorInput, RiderUncheckedCreateWithoutVendorInput> | RiderCreateWithoutVendorInput[] | RiderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RiderCreateOrConnectWithoutVendorInput | RiderCreateOrConnectWithoutVendorInput[]
    createMany?: RiderCreateManyVendorInputEnvelope
    connect?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
  }

  export type DeliveryCreateNestedManyWithoutVendorInput = {
    create?: XOR<DeliveryCreateWithoutVendorInput, DeliveryUncheckedCreateWithoutVendorInput> | DeliveryCreateWithoutVendorInput[] | DeliveryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutVendorInput | DeliveryCreateOrConnectWithoutVendorInput[]
    createMany?: DeliveryCreateManyVendorInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Bank_detailsCreateNestedManyWithoutVendorInput = {
    create?: XOR<Bank_detailsCreateWithoutVendorInput, Bank_detailsUncheckedCreateWithoutVendorInput> | Bank_detailsCreateWithoutVendorInput[] | Bank_detailsUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutVendorInput | Bank_detailsCreateOrConnectWithoutVendorInput[]
    createMany?: Bank_detailsCreateManyVendorInputEnvelope
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
  }

  export type RiderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RiderCreateWithoutVendorInput, RiderUncheckedCreateWithoutVendorInput> | RiderCreateWithoutVendorInput[] | RiderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RiderCreateOrConnectWithoutVendorInput | RiderCreateOrConnectWithoutVendorInput[]
    createMany?: RiderCreateManyVendorInputEnvelope
    connect?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<DeliveryCreateWithoutVendorInput, DeliveryUncheckedCreateWithoutVendorInput> | DeliveryCreateWithoutVendorInput[] | DeliveryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutVendorInput | DeliveryCreateOrConnectWithoutVendorInput[]
    createMany?: DeliveryCreateManyVendorInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type Bank_detailsUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<Bank_detailsCreateWithoutVendorInput, Bank_detailsUncheckedCreateWithoutVendorInput> | Bank_detailsCreateWithoutVendorInput[] | Bank_detailsUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutVendorInput | Bank_detailsCreateOrConnectWithoutVendorInput[]
    createMany?: Bank_detailsCreateManyVendorInputEnvelope
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
  }

  export type RiderUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RiderCreateWithoutVendorInput, RiderUncheckedCreateWithoutVendorInput> | RiderCreateWithoutVendorInput[] | RiderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RiderCreateOrConnectWithoutVendorInput | RiderCreateOrConnectWithoutVendorInput[]
    upsert?: RiderUpsertWithWhereUniqueWithoutVendorInput | RiderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RiderCreateManyVendorInputEnvelope
    set?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    disconnect?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    delete?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    connect?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    update?: RiderUpdateWithWhereUniqueWithoutVendorInput | RiderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RiderUpdateManyWithWhereWithoutVendorInput | RiderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RiderScalarWhereInput | RiderScalarWhereInput[]
  }

  export type DeliveryUpdateManyWithoutVendorNestedInput = {
    create?: XOR<DeliveryCreateWithoutVendorInput, DeliveryUncheckedCreateWithoutVendorInput> | DeliveryCreateWithoutVendorInput[] | DeliveryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutVendorInput | DeliveryCreateOrConnectWithoutVendorInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutVendorInput | DeliveryUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: DeliveryCreateManyVendorInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutVendorInput | DeliveryUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutVendorInput | DeliveryUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Bank_detailsUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Bank_detailsCreateWithoutVendorInput, Bank_detailsUncheckedCreateWithoutVendorInput> | Bank_detailsCreateWithoutVendorInput[] | Bank_detailsUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutVendorInput | Bank_detailsCreateOrConnectWithoutVendorInput[]
    upsert?: Bank_detailsUpsertWithWhereUniqueWithoutVendorInput | Bank_detailsUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: Bank_detailsCreateManyVendorInputEnvelope
    set?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    disconnect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    delete?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    update?: Bank_detailsUpdateWithWhereUniqueWithoutVendorInput | Bank_detailsUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: Bank_detailsUpdateManyWithWhereWithoutVendorInput | Bank_detailsUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
  }

  export type RiderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RiderCreateWithoutVendorInput, RiderUncheckedCreateWithoutVendorInput> | RiderCreateWithoutVendorInput[] | RiderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RiderCreateOrConnectWithoutVendorInput | RiderCreateOrConnectWithoutVendorInput[]
    upsert?: RiderUpsertWithWhereUniqueWithoutVendorInput | RiderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RiderCreateManyVendorInputEnvelope
    set?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    disconnect?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    delete?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    connect?: RiderWhereUniqueInput | RiderWhereUniqueInput[]
    update?: RiderUpdateWithWhereUniqueWithoutVendorInput | RiderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RiderUpdateManyWithWhereWithoutVendorInput | RiderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RiderScalarWhereInput | RiderScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<DeliveryCreateWithoutVendorInput, DeliveryUncheckedCreateWithoutVendorInput> | DeliveryCreateWithoutVendorInput[] | DeliveryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutVendorInput | DeliveryCreateOrConnectWithoutVendorInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutVendorInput | DeliveryUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: DeliveryCreateManyVendorInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutVendorInput | DeliveryUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutVendorInput | DeliveryUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type Bank_detailsUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<Bank_detailsCreateWithoutVendorInput, Bank_detailsUncheckedCreateWithoutVendorInput> | Bank_detailsCreateWithoutVendorInput[] | Bank_detailsUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutVendorInput | Bank_detailsCreateOrConnectWithoutVendorInput[]
    upsert?: Bank_detailsUpsertWithWhereUniqueWithoutVendorInput | Bank_detailsUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: Bank_detailsCreateManyVendorInputEnvelope
    set?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    disconnect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    delete?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    update?: Bank_detailsUpdateWithWhereUniqueWithoutVendorInput | Bank_detailsUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: Bank_detailsUpdateManyWithWhereWithoutVendorInput | Bank_detailsUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutRiderInput = {
    create?: XOR<VendorCreateWithoutRiderInput, VendorUncheckedCreateWithoutRiderInput>
    connectOrCreate?: VendorCreateOrConnectWithoutRiderInput
    connect?: VendorWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutRiderInput = {
    create?: XOR<ProposalCreateWithoutRiderInput, ProposalUncheckedCreateWithoutRiderInput> | ProposalCreateWithoutRiderInput[] | ProposalUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRiderInput | ProposalCreateOrConnectWithoutRiderInput[]
    createMany?: ProposalCreateManyRiderInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type Rider_ratingCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type Rider_credentialsCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<ProposalCreateWithoutRiderInput, ProposalUncheckedCreateWithoutRiderInput> | ProposalCreateWithoutRiderInput[] | ProposalUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRiderInput | ProposalCreateOrConnectWithoutRiderInput[]
    createMany?: ProposalCreateManyRiderInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type Rider_ratingUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
  }

  export type Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VendorUpdateOneRequiredWithoutRiderNestedInput = {
    create?: XOR<VendorCreateWithoutRiderInput, VendorUncheckedCreateWithoutRiderInput>
    connectOrCreate?: VendorCreateOrConnectWithoutRiderInput
    upsert?: VendorUpsertWithoutRiderInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutRiderInput, VendorUpdateWithoutRiderInput>, VendorUncheckedUpdateWithoutRiderInput>
  }

  export type ProposalUpdateManyWithoutRiderNestedInput = {
    create?: XOR<ProposalCreateWithoutRiderInput, ProposalUncheckedCreateWithoutRiderInput> | ProposalCreateWithoutRiderInput[] | ProposalUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRiderInput | ProposalCreateOrConnectWithoutRiderInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutRiderInput | ProposalUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: ProposalCreateManyRiderInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutRiderInput | ProposalUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutRiderInput | ProposalUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type Rider_ratingUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutRiderInput | Rider_ratingUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutRiderInput | Rider_ratingUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutRiderInput | Rider_ratingUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type Rider_credentialsUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput | Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    set?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    disconnect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    delete?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    update?: Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput | Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_credentialsUpdateManyWithWhereWithoutRiderInput | Rider_credentialsUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<ProposalCreateWithoutRiderInput, ProposalUncheckedCreateWithoutRiderInput> | ProposalCreateWithoutRiderInput[] | ProposalUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRiderInput | ProposalCreateOrConnectWithoutRiderInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutRiderInput | ProposalUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: ProposalCreateManyRiderInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutRiderInput | ProposalUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutRiderInput | ProposalUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput> | Rider_ratingCreateWithoutRiderInput[] | Rider_ratingUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_ratingCreateOrConnectWithoutRiderInput | Rider_ratingCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_ratingUpsertWithWhereUniqueWithoutRiderInput | Rider_ratingUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_ratingCreateManyRiderInputEnvelope
    set?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    disconnect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    delete?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    connect?: Rider_ratingWhereUniqueInput | Rider_ratingWhereUniqueInput[]
    update?: Rider_ratingUpdateWithWhereUniqueWithoutRiderInput | Rider_ratingUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_ratingUpdateManyWithWhereWithoutRiderInput | Rider_ratingUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
  }

  export type Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput> | Rider_credentialsCreateWithoutRiderInput[] | Rider_credentialsUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: Rider_credentialsCreateOrConnectWithoutRiderInput | Rider_credentialsCreateOrConnectWithoutRiderInput[]
    upsert?: Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput | Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: Rider_credentialsCreateManyRiderInputEnvelope
    set?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    disconnect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    delete?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    connect?: Rider_credentialsWhereUniqueInput | Rider_credentialsWhereUniqueInput[]
    update?: Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput | Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: Rider_credentialsUpdateManyWithWhereWithoutRiderInput | Rider_credentialsUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInput
    connect?: UserWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<VendorCreateWithoutDeliveryInput, VendorUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: VendorCreateOrConnectWithoutDeliveryInput
    connect?: VendorWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutDeliverInput = {
    create?: XOR<ProposalCreateWithoutDeliverInput, ProposalUncheckedCreateWithoutDeliverInput> | ProposalCreateWithoutDeliverInput[] | ProposalUncheckedCreateWithoutDeliverInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutDeliverInput | ProposalCreateOrConnectWithoutDeliverInput[]
    createMany?: ProposalCreateManyDeliverInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutDeliverInput = {
    create?: XOR<ProposalCreateWithoutDeliverInput, ProposalUncheckedCreateWithoutDeliverInput> | ProposalCreateWithoutDeliverInput[] | ProposalUncheckedCreateWithoutDeliverInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutDeliverInput | ProposalCreateOrConnectWithoutDeliverInput[]
    createMany?: ProposalCreateManyDeliverInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeliveryInput
    upsert?: UserUpsertWithoutDeliveryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeliveryInput, UserUpdateWithoutDeliveryInput>, UserUncheckedUpdateWithoutDeliveryInput>
  }

  export type VendorUpdateOneWithoutDeliveryNestedInput = {
    create?: XOR<VendorCreateWithoutDeliveryInput, VendorUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: VendorCreateOrConnectWithoutDeliveryInput
    upsert?: VendorUpsertWithoutDeliveryInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutDeliveryInput, VendorUpdateWithoutDeliveryInput>, VendorUncheckedUpdateWithoutDeliveryInput>
  }

  export type ProposalUpdateManyWithoutDeliverNestedInput = {
    create?: XOR<ProposalCreateWithoutDeliverInput, ProposalUncheckedCreateWithoutDeliverInput> | ProposalCreateWithoutDeliverInput[] | ProposalUncheckedCreateWithoutDeliverInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutDeliverInput | ProposalCreateOrConnectWithoutDeliverInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutDeliverInput | ProposalUpsertWithWhereUniqueWithoutDeliverInput[]
    createMany?: ProposalCreateManyDeliverInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutDeliverInput | ProposalUpdateWithWhereUniqueWithoutDeliverInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutDeliverInput | ProposalUpdateManyWithWhereWithoutDeliverInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutDeliverNestedInput = {
    create?: XOR<ProposalCreateWithoutDeliverInput, ProposalUncheckedCreateWithoutDeliverInput> | ProposalCreateWithoutDeliverInput[] | ProposalUncheckedCreateWithoutDeliverInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutDeliverInput | ProposalCreateOrConnectWithoutDeliverInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutDeliverInput | ProposalUpsertWithWhereUniqueWithoutDeliverInput[]
    createMany?: ProposalCreateManyDeliverInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutDeliverInput | ProposalUpdateWithWhereUniqueWithoutDeliverInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutDeliverInput | ProposalUpdateManyWithWhereWithoutDeliverInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type Bank_detailsCreateNestedManyWithoutBankInput = {
    create?: XOR<Bank_detailsCreateWithoutBankInput, Bank_detailsUncheckedCreateWithoutBankInput> | Bank_detailsCreateWithoutBankInput[] | Bank_detailsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutBankInput | Bank_detailsCreateOrConnectWithoutBankInput[]
    createMany?: Bank_detailsCreateManyBankInputEnvelope
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
  }

  export type Bank_detailsUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<Bank_detailsCreateWithoutBankInput, Bank_detailsUncheckedCreateWithoutBankInput> | Bank_detailsCreateWithoutBankInput[] | Bank_detailsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutBankInput | Bank_detailsCreateOrConnectWithoutBankInput[]
    createMany?: Bank_detailsCreateManyBankInputEnvelope
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
  }

  export type Bank_detailsUpdateManyWithoutBankNestedInput = {
    create?: XOR<Bank_detailsCreateWithoutBankInput, Bank_detailsUncheckedCreateWithoutBankInput> | Bank_detailsCreateWithoutBankInput[] | Bank_detailsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutBankInput | Bank_detailsCreateOrConnectWithoutBankInput[]
    upsert?: Bank_detailsUpsertWithWhereUniqueWithoutBankInput | Bank_detailsUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: Bank_detailsCreateManyBankInputEnvelope
    set?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    disconnect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    delete?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    update?: Bank_detailsUpdateWithWhereUniqueWithoutBankInput | Bank_detailsUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: Bank_detailsUpdateManyWithWhereWithoutBankInput | Bank_detailsUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
  }

  export type Bank_detailsUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<Bank_detailsCreateWithoutBankInput, Bank_detailsUncheckedCreateWithoutBankInput> | Bank_detailsCreateWithoutBankInput[] | Bank_detailsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: Bank_detailsCreateOrConnectWithoutBankInput | Bank_detailsCreateOrConnectWithoutBankInput[]
    upsert?: Bank_detailsUpsertWithWhereUniqueWithoutBankInput | Bank_detailsUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: Bank_detailsCreateManyBankInputEnvelope
    set?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    disconnect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    delete?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    connect?: Bank_detailsWhereUniqueInput | Bank_detailsWhereUniqueInput[]
    update?: Bank_detailsUpdateWithWhereUniqueWithoutBankInput | Bank_detailsUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: Bank_detailsUpdateManyWithWhereWithoutBankInput | Bank_detailsUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDelivery_paymentInput = {
    create?: XOR<UserCreateWithoutDelivery_paymentInput, UserUncheckedCreateWithoutDelivery_paymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutDelivery_paymentInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDelivery_paymentNestedInput = {
    create?: XOR<UserCreateWithoutDelivery_paymentInput, UserUncheckedCreateWithoutDelivery_paymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutDelivery_paymentInput
    upsert?: UserUpsertWithoutDelivery_paymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDelivery_paymentInput, UserUpdateWithoutDelivery_paymentInput>, UserUncheckedUpdateWithoutDelivery_paymentInput>
  }

  export type RiderCreateNestedOneWithoutProposalInput = {
    create?: XOR<RiderCreateWithoutProposalInput, RiderUncheckedCreateWithoutProposalInput>
    connectOrCreate?: RiderCreateOrConnectWithoutProposalInput
    connect?: RiderWhereUniqueInput
  }

  export type DeliveryCreateNestedOneWithoutProposalInput = {
    create?: XOR<DeliveryCreateWithoutProposalInput, DeliveryUncheckedCreateWithoutProposalInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutProposalInput
    connect?: DeliveryWhereUniqueInput
  }

  export type RiderUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<RiderCreateWithoutProposalInput, RiderUncheckedCreateWithoutProposalInput>
    connectOrCreate?: RiderCreateOrConnectWithoutProposalInput
    upsert?: RiderUpsertWithoutProposalInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutProposalInput, RiderUpdateWithoutProposalInput>, RiderUncheckedUpdateWithoutProposalInput>
  }

  export type DeliveryUpdateOneRequiredWithoutProposalNestedInput = {
    create?: XOR<DeliveryCreateWithoutProposalInput, DeliveryUncheckedCreateWithoutProposalInput>
    connectOrCreate?: DeliveryCreateOrConnectWithoutProposalInput
    upsert?: DeliveryUpsertWithoutProposalInput
    connect?: DeliveryWhereUniqueInput
    update?: XOR<XOR<DeliveryUpdateToOneWithWhereWithoutProposalInput, DeliveryUpdateWithoutProposalInput>, DeliveryUncheckedUpdateWithoutProposalInput>
  }

  export type nigerian_banksCreateNestedOneWithoutBank_detailsInput = {
    create?: XOR<nigerian_banksCreateWithoutBank_detailsInput, nigerian_banksUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: nigerian_banksCreateOrConnectWithoutBank_detailsInput
    connect?: nigerian_banksWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutBank_detailsInput = {
    create?: XOR<VendorCreateWithoutBank_detailsInput, VendorUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutBank_detailsInput
    connect?: VendorWhereUniqueInput
  }

  export type nigerian_banksUpdateOneWithoutBank_detailsNestedInput = {
    create?: XOR<nigerian_banksCreateWithoutBank_detailsInput, nigerian_banksUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: nigerian_banksCreateOrConnectWithoutBank_detailsInput
    upsert?: nigerian_banksUpsertWithoutBank_detailsInput
    disconnect?: nigerian_banksWhereInput | boolean
    delete?: nigerian_banksWhereInput | boolean
    connect?: nigerian_banksWhereUniqueInput
    update?: XOR<XOR<nigerian_banksUpdateToOneWithWhereWithoutBank_detailsInput, nigerian_banksUpdateWithoutBank_detailsInput>, nigerian_banksUncheckedUpdateWithoutBank_detailsInput>
  }

  export type VendorUpdateOneWithoutBank_detailsNestedInput = {
    create?: XOR<VendorCreateWithoutBank_detailsInput, VendorUncheckedCreateWithoutBank_detailsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutBank_detailsInput
    upsert?: VendorUpsertWithoutBank_detailsInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutBank_detailsInput, VendorUpdateWithoutBank_detailsInput>, VendorUncheckedUpdateWithoutBank_detailsInput>
  }

  export type RiderCreateNestedOneWithoutRider_ratingInput = {
    create?: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_ratingInput
    connect?: RiderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRider_ratingInput = {
    create?: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRider_ratingInput
    connect?: UserWhereUniqueInput
  }

  export type RiderUpdateOneRequiredWithoutRider_ratingNestedInput = {
    create?: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_ratingInput
    upsert?: RiderUpsertWithoutRider_ratingInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutRider_ratingInput, RiderUpdateWithoutRider_ratingInput>, RiderUncheckedUpdateWithoutRider_ratingInput>
  }

  export type UserUpdateOneRequiredWithoutRider_ratingNestedInput = {
    create?: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
    connectOrCreate?: UserCreateOrConnectWithoutRider_ratingInput
    upsert?: UserUpsertWithoutRider_ratingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRider_ratingInput, UserUpdateWithoutRider_ratingInput>, UserUncheckedUpdateWithoutRider_ratingInput>
  }

  export type RiderCreateNestedOneWithoutRider_credentialsInput = {
    create?: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_credentialsInput
    connect?: RiderWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RiderUpdateOneRequiredWithoutRider_credentialsNestedInput = {
    create?: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRider_credentialsInput
    upsert?: RiderUpsertWithoutRider_credentialsInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutRider_credentialsInput, RiderUpdateWithoutRider_credentialsInput>, RiderUncheckedUpdateWithoutRider_credentialsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DeliveryCreateWithoutUserInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    vendor?: VendorCreateNestedOneWithoutDeliveryInput
    proposal?: ProposalCreateNestedManyWithoutDeliverInput
  }

  export type DeliveryUncheckedCreateWithoutUserInput = {
    id?: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    vendor_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    proposal?: ProposalUncheckedCreateNestedManyWithoutDeliverInput
  }

  export type DeliveryCreateOrConnectWithoutUserInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput>
  }

  export type DeliveryCreateManyUserInputEnvelope = {
    data: DeliveryCreateManyUserInput | DeliveryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Rider_ratingCreateWithoutUserInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRider_ratingInput
  }

  export type Rider_ratingUncheckedCreateWithoutUserInput = {
    id?: number
    rider_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingCreateOrConnectWithoutUserInput = {
    where: Rider_ratingWhereUniqueInput
    create: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput>
  }

  export type Rider_ratingCreateManyUserInputEnvelope = {
    data: Rider_ratingCreateManyUserInput | Rider_ratingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type delivery_paymentCreateWithoutUserInput = {
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type delivery_paymentUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type delivery_paymentCreateOrConnectWithoutUserInput = {
    where: delivery_paymentWhereUniqueInput
    create: XOR<delivery_paymentCreateWithoutUserInput, delivery_paymentUncheckedCreateWithoutUserInput>
  }

  export type delivery_paymentCreateManyUserInputEnvelope = {
    data: delivery_paymentCreateManyUserInput | delivery_paymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutUserInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutUserInput, DeliveryUncheckedUpdateWithoutUserInput>
    create: XOR<DeliveryCreateWithoutUserInput, DeliveryUncheckedCreateWithoutUserInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutUserInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutUserInput, DeliveryUncheckedUpdateWithoutUserInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutUserInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutUserInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: IntFilter<"Delivery"> | number
    user_id?: IntFilter<"Delivery"> | number
    package_name?: StringFilter<"Delivery"> | string
    phone_number?: StringFilter<"Delivery"> | string
    pickup_location?: StringFilter<"Delivery"> | string
    delivery_location?: StringFilter<"Delivery"> | string
    estimated_delivery_price?: StringFilter<"Delivery"> | string
    package_image?: StringFilter<"Delivery"> | string
    landmark?: StringFilter<"Delivery"> | string
    reference?: StringFilter<"Delivery"> | string
    vendor_id?: IntNullableFilter<"Delivery"> | number | null
    delivery_code?: IntNullableFilter<"Delivery"> | number | null
    is_pickedup?: BoolFilter<"Delivery"> | boolean
    is_delivered?: BoolFilter<"Delivery"> | boolean
    is_accepted?: BoolFilter<"Delivery"> | boolean
    status?: EnumStatusFilter<"Delivery"> | $Enums.Status
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    sent_proposal_rider_id?: JsonNullableFilter<"Delivery">
  }

  export type Rider_ratingUpsertWithWhereUniqueWithoutUserInput = {
    where: Rider_ratingWhereUniqueInput
    update: XOR<Rider_ratingUpdateWithoutUserInput, Rider_ratingUncheckedUpdateWithoutUserInput>
    create: XOR<Rider_ratingCreateWithoutUserInput, Rider_ratingUncheckedCreateWithoutUserInput>
  }

  export type Rider_ratingUpdateWithWhereUniqueWithoutUserInput = {
    where: Rider_ratingWhereUniqueInput
    data: XOR<Rider_ratingUpdateWithoutUserInput, Rider_ratingUncheckedUpdateWithoutUserInput>
  }

  export type Rider_ratingUpdateManyWithWhereWithoutUserInput = {
    where: Rider_ratingScalarWhereInput
    data: XOR<Rider_ratingUpdateManyMutationInput, Rider_ratingUncheckedUpdateManyWithoutUserInput>
  }

  export type Rider_ratingScalarWhereInput = {
    AND?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
    OR?: Rider_ratingScalarWhereInput[]
    NOT?: Rider_ratingScalarWhereInput | Rider_ratingScalarWhereInput[]
    id?: IntFilter<"Rider_rating"> | number
    rider_id?: IntFilter<"Rider_rating"> | number
    user_id?: IntFilter<"Rider_rating"> | number
    rating?: IntFilter<"Rider_rating"> | number
    review?: StringFilter<"Rider_rating"> | string
    createdAt?: DateTimeFilter<"Rider_rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_rating"> | Date | string
  }

  export type delivery_paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: delivery_paymentWhereUniqueInput
    update: XOR<delivery_paymentUpdateWithoutUserInput, delivery_paymentUncheckedUpdateWithoutUserInput>
    create: XOR<delivery_paymentCreateWithoutUserInput, delivery_paymentUncheckedCreateWithoutUserInput>
  }

  export type delivery_paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: delivery_paymentWhereUniqueInput
    data: XOR<delivery_paymentUpdateWithoutUserInput, delivery_paymentUncheckedUpdateWithoutUserInput>
  }

  export type delivery_paymentUpdateManyWithWhereWithoutUserInput = {
    where: delivery_paymentScalarWhereInput
    data: XOR<delivery_paymentUpdateManyMutationInput, delivery_paymentUncheckedUpdateManyWithoutUserInput>
  }

  export type delivery_paymentScalarWhereInput = {
    AND?: delivery_paymentScalarWhereInput | delivery_paymentScalarWhereInput[]
    OR?: delivery_paymentScalarWhereInput[]
    NOT?: delivery_paymentScalarWhereInput | delivery_paymentScalarWhereInput[]
    id?: IntFilter<"delivery_payment"> | number
    user_id?: IntFilter<"delivery_payment"> | number
    email?: StringFilter<"delivery_payment"> | string
    amount?: StringFilter<"delivery_payment"> | string
    reference?: StringFilter<"delivery_payment"> | string
    phone_number?: StringFilter<"delivery_payment"> | string
    status?: StringFilter<"delivery_payment"> | string
    has_paid?: BoolFilter<"delivery_payment"> | boolean
    createdAt?: DateTimeFilter<"delivery_payment"> | Date | string
    updatedAt?: DateTimeFilter<"delivery_payment"> | Date | string
  }

  export type RiderCreateWithoutVendorInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    proposal?: ProposalCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutVendorInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutVendorInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutVendorInput, RiderUncheckedCreateWithoutVendorInput>
  }

  export type RiderCreateManyVendorInputEnvelope = {
    data: RiderCreateManyVendorInput | RiderCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryCreateWithoutVendorInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDeliveryInput
    proposal?: ProposalCreateNestedManyWithoutDeliverInput
  }

  export type DeliveryUncheckedCreateWithoutVendorInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    proposal?: ProposalUncheckedCreateNestedManyWithoutDeliverInput
  }

  export type DeliveryCreateOrConnectWithoutVendorInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutVendorInput, DeliveryUncheckedCreateWithoutVendorInput>
  }

  export type DeliveryCreateManyVendorInputEnvelope = {
    data: DeliveryCreateManyVendorInput | DeliveryCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type Bank_detailsCreateWithoutVendorInput = {
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bank?: nigerian_banksCreateNestedOneWithoutBank_detailsInput
  }

  export type Bank_detailsUncheckedCreateWithoutVendorInput = {
    id?: number
    bank_id?: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsCreateOrConnectWithoutVendorInput = {
    where: Bank_detailsWhereUniqueInput
    create: XOR<Bank_detailsCreateWithoutVendorInput, Bank_detailsUncheckedCreateWithoutVendorInput>
  }

  export type Bank_detailsCreateManyVendorInputEnvelope = {
    data: Bank_detailsCreateManyVendorInput | Bank_detailsCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type RiderUpsertWithWhereUniqueWithoutVendorInput = {
    where: RiderWhereUniqueInput
    update: XOR<RiderUpdateWithoutVendorInput, RiderUncheckedUpdateWithoutVendorInput>
    create: XOR<RiderCreateWithoutVendorInput, RiderUncheckedCreateWithoutVendorInput>
  }

  export type RiderUpdateWithWhereUniqueWithoutVendorInput = {
    where: RiderWhereUniqueInput
    data: XOR<RiderUpdateWithoutVendorInput, RiderUncheckedUpdateWithoutVendorInput>
  }

  export type RiderUpdateManyWithWhereWithoutVendorInput = {
    where: RiderScalarWhereInput
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyWithoutVendorInput>
  }

  export type RiderScalarWhereInput = {
    AND?: RiderScalarWhereInput | RiderScalarWhereInput[]
    OR?: RiderScalarWhereInput[]
    NOT?: RiderScalarWhereInput | RiderScalarWhereInput[]
    id?: IntFilter<"Rider"> | number
    vendor_id?: IntFilter<"Rider"> | number
    fullname?: StringFilter<"Rider"> | string
    username?: StringFilter<"Rider"> | string
    email?: StringFilter<"Rider"> | string
    phone_number?: StringFilter<"Rider"> | string
    role?: EnumRoleFilter<"Rider"> | $Enums.Role
    profile_image?: StringFilter<"Rider"> | string
    avg_rating?: FloatFilter<"Rider"> | number
    password?: StringFilter<"Rider"> | string
    status?: EnumStatusFilter<"Rider"> | $Enums.Status
    is_verified?: BoolFilter<"Rider"> | boolean
    available?: BoolFilter<"Rider"> | boolean
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
  }

  export type DeliveryUpsertWithWhereUniqueWithoutVendorInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutVendorInput, DeliveryUncheckedUpdateWithoutVendorInput>
    create: XOR<DeliveryCreateWithoutVendorInput, DeliveryUncheckedCreateWithoutVendorInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutVendorInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutVendorInput, DeliveryUncheckedUpdateWithoutVendorInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutVendorInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutVendorInput>
  }

  export type Bank_detailsUpsertWithWhereUniqueWithoutVendorInput = {
    where: Bank_detailsWhereUniqueInput
    update: XOR<Bank_detailsUpdateWithoutVendorInput, Bank_detailsUncheckedUpdateWithoutVendorInput>
    create: XOR<Bank_detailsCreateWithoutVendorInput, Bank_detailsUncheckedCreateWithoutVendorInput>
  }

  export type Bank_detailsUpdateWithWhereUniqueWithoutVendorInput = {
    where: Bank_detailsWhereUniqueInput
    data: XOR<Bank_detailsUpdateWithoutVendorInput, Bank_detailsUncheckedUpdateWithoutVendorInput>
  }

  export type Bank_detailsUpdateManyWithWhereWithoutVendorInput = {
    where: Bank_detailsScalarWhereInput
    data: XOR<Bank_detailsUpdateManyMutationInput, Bank_detailsUncheckedUpdateManyWithoutVendorInput>
  }

  export type Bank_detailsScalarWhereInput = {
    AND?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
    OR?: Bank_detailsScalarWhereInput[]
    NOT?: Bank_detailsScalarWhereInput | Bank_detailsScalarWhereInput[]
    id?: IntFilter<"Bank_details"> | number
    bank_id?: IntNullableFilter<"Bank_details"> | number | null
    vendor_id?: IntNullableFilter<"Bank_details"> | number | null
    bank_name?: StringFilter<"Bank_details"> | string
    account_name?: StringFilter<"Bank_details"> | string
    account_number?: StringFilter<"Bank_details"> | string
    createdAt?: DateTimeFilter<"Bank_details"> | Date | string
    updatedAt?: DateTimeFilter<"Bank_details"> | Date | string
  }

  export type VendorCreateWithoutRiderInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutVendorInput
    bank_details?: Bank_detailsCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutRiderInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutVendorInput
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutRiderInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutRiderInput, VendorUncheckedCreateWithoutRiderInput>
  }

  export type ProposalCreateWithoutRiderInput = {
    status?: $Enums.Status
    deliver: DeliveryCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutRiderInput = {
    id?: number
    delivery_id: number
    status?: $Enums.Status
  }

  export type ProposalCreateOrConnectWithoutRiderInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutRiderInput, ProposalUncheckedCreateWithoutRiderInput>
  }

  export type ProposalCreateManyRiderInputEnvelope = {
    data: ProposalCreateManyRiderInput | ProposalCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type Rider_ratingCreateWithoutRiderInput = {
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRider_ratingInput
  }

  export type Rider_ratingUncheckedCreateWithoutRiderInput = {
    id?: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_ratingCreateOrConnectWithoutRiderInput = {
    where: Rider_ratingWhereUniqueInput
    create: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput>
  }

  export type Rider_ratingCreateManyRiderInputEnvelope = {
    data: Rider_ratingCreateManyRiderInput | Rider_ratingCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type Rider_credentialsCreateWithoutRiderInput = {
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsUncheckedCreateWithoutRiderInput = {
    id?: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsCreateOrConnectWithoutRiderInput = {
    where: Rider_credentialsWhereUniqueInput
    create: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput>
  }

  export type Rider_credentialsCreateManyRiderInputEnvelope = {
    data: Rider_credentialsCreateManyRiderInput | Rider_credentialsCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutRiderInput = {
    update: XOR<VendorUpdateWithoutRiderInput, VendorUncheckedUpdateWithoutRiderInput>
    create: XOR<VendorCreateWithoutRiderInput, VendorUncheckedCreateWithoutRiderInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutRiderInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutRiderInput, VendorUncheckedUpdateWithoutRiderInput>
  }

  export type VendorUpdateWithoutRiderInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutVendorNestedInput
    bank_details?: Bank_detailsUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutVendorNestedInput
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutRiderInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutRiderInput, ProposalUncheckedUpdateWithoutRiderInput>
    create: XOR<ProposalCreateWithoutRiderInput, ProposalUncheckedCreateWithoutRiderInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutRiderInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutRiderInput, ProposalUncheckedUpdateWithoutRiderInput>
  }

  export type ProposalUpdateManyWithWhereWithoutRiderInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutRiderInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: IntFilter<"Proposal"> | number
    rider_id?: IntFilter<"Proposal"> | number
    delivery_id?: IntFilter<"Proposal"> | number
    status?: EnumStatusFilter<"Proposal"> | $Enums.Status
  }

  export type Rider_ratingUpsertWithWhereUniqueWithoutRiderInput = {
    where: Rider_ratingWhereUniqueInput
    update: XOR<Rider_ratingUpdateWithoutRiderInput, Rider_ratingUncheckedUpdateWithoutRiderInput>
    create: XOR<Rider_ratingCreateWithoutRiderInput, Rider_ratingUncheckedCreateWithoutRiderInput>
  }

  export type Rider_ratingUpdateWithWhereUniqueWithoutRiderInput = {
    where: Rider_ratingWhereUniqueInput
    data: XOR<Rider_ratingUpdateWithoutRiderInput, Rider_ratingUncheckedUpdateWithoutRiderInput>
  }

  export type Rider_ratingUpdateManyWithWhereWithoutRiderInput = {
    where: Rider_ratingScalarWhereInput
    data: XOR<Rider_ratingUpdateManyMutationInput, Rider_ratingUncheckedUpdateManyWithoutRiderInput>
  }

  export type Rider_credentialsUpsertWithWhereUniqueWithoutRiderInput = {
    where: Rider_credentialsWhereUniqueInput
    update: XOR<Rider_credentialsUpdateWithoutRiderInput, Rider_credentialsUncheckedUpdateWithoutRiderInput>
    create: XOR<Rider_credentialsCreateWithoutRiderInput, Rider_credentialsUncheckedCreateWithoutRiderInput>
  }

  export type Rider_credentialsUpdateWithWhereUniqueWithoutRiderInput = {
    where: Rider_credentialsWhereUniqueInput
    data: XOR<Rider_credentialsUpdateWithoutRiderInput, Rider_credentialsUncheckedUpdateWithoutRiderInput>
  }

  export type Rider_credentialsUpdateManyWithWhereWithoutRiderInput = {
    where: Rider_credentialsScalarWhereInput
    data: XOR<Rider_credentialsUpdateManyMutationInput, Rider_credentialsUncheckedUpdateManyWithoutRiderInput>
  }

  export type Rider_credentialsScalarWhereInput = {
    AND?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
    OR?: Rider_credentialsScalarWhereInput[]
    NOT?: Rider_credentialsScalarWhereInput | Rider_credentialsScalarWhereInput[]
    id?: IntFilter<"Rider_credentials"> | number
    rider_id?: IntFilter<"Rider_credentials"> | number
    nin?: StringFilter<"Rider_credentials"> | string
    nin_image?: StringNullableFilter<"Rider_credentials"> | string | null
    driver_license?: StringFilter<"Rider_credentials"> | string
    driver_license_image?: StringNullableFilter<"Rider_credentials"> | string | null
    plate_number?: StringFilter<"Rider_credentials"> | string
    vehicle_image?: StringNullableFilter<"Rider_credentials"> | string | null
    status?: EnumStatusFilter<"Rider_credentials"> | $Enums.Status
    createdAt?: DateTimeFilter<"Rider_credentials"> | Date | string
    updatedAt?: DateTimeFilter<"Rider_credentials"> | Date | string
  }

  export type UserCreateWithoutDeliveryInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider_rating?: Rider_ratingCreateNestedManyWithoutUserInput
    delivery_payment?: delivery_paymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeliveryInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutUserInput
    delivery_payment?: delivery_paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeliveryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
  }

  export type VendorCreateWithoutDeliveryInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedManyWithoutVendorInput
    bank_details?: Bank_detailsCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutDeliveryInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderUncheckedCreateNestedManyWithoutVendorInput
    bank_details?: Bank_detailsUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutDeliveryInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutDeliveryInput, VendorUncheckedCreateWithoutDeliveryInput>
  }

  export type ProposalCreateWithoutDeliverInput = {
    status?: $Enums.Status
    rider: RiderCreateNestedOneWithoutProposalInput
  }

  export type ProposalUncheckedCreateWithoutDeliverInput = {
    id?: number
    rider_id: number
    status?: $Enums.Status
  }

  export type ProposalCreateOrConnectWithoutDeliverInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutDeliverInput, ProposalUncheckedCreateWithoutDeliverInput>
  }

  export type ProposalCreateManyDeliverInputEnvelope = {
    data: ProposalCreateManyDeliverInput | ProposalCreateManyDeliverInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDeliveryInput = {
    update: XOR<UserUpdateWithoutDeliveryInput, UserUncheckedUpdateWithoutDeliveryInput>
    create: XOR<UserCreateWithoutDeliveryInput, UserUncheckedCreateWithoutDeliveryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeliveryInput, UserUncheckedUpdateWithoutDeliveryInput>
  }

  export type UserUpdateWithoutDeliveryInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider_rating?: Rider_ratingUpdateManyWithoutUserNestedInput
    delivery_payment?: delivery_paymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutUserNestedInput
    delivery_payment?: delivery_paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VendorUpsertWithoutDeliveryInput = {
    update: XOR<VendorUpdateWithoutDeliveryInput, VendorUncheckedUpdateWithoutDeliveryInput>
    create: XOR<VendorCreateWithoutDeliveryInput, VendorUncheckedCreateWithoutDeliveryInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutDeliveryInput, VendorUncheckedUpdateWithoutDeliveryInput>
  }

  export type VendorUpdateWithoutDeliveryInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateManyWithoutVendorNestedInput
    bank_details?: Bank_detailsUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutDeliveryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUncheckedUpdateManyWithoutVendorNestedInput
    bank_details?: Bank_detailsUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutDeliverInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutDeliverInput, ProposalUncheckedUpdateWithoutDeliverInput>
    create: XOR<ProposalCreateWithoutDeliverInput, ProposalUncheckedCreateWithoutDeliverInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutDeliverInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutDeliverInput, ProposalUncheckedUpdateWithoutDeliverInput>
  }

  export type ProposalUpdateManyWithWhereWithoutDeliverInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutDeliverInput>
  }

  export type Bank_detailsCreateWithoutBankInput = {
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor?: VendorCreateNestedOneWithoutBank_detailsInput
  }

  export type Bank_detailsUncheckedCreateWithoutBankInput = {
    id?: number
    vendor_id?: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsCreateOrConnectWithoutBankInput = {
    where: Bank_detailsWhereUniqueInput
    create: XOR<Bank_detailsCreateWithoutBankInput, Bank_detailsUncheckedCreateWithoutBankInput>
  }

  export type Bank_detailsCreateManyBankInputEnvelope = {
    data: Bank_detailsCreateManyBankInput | Bank_detailsCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type Bank_detailsUpsertWithWhereUniqueWithoutBankInput = {
    where: Bank_detailsWhereUniqueInput
    update: XOR<Bank_detailsUpdateWithoutBankInput, Bank_detailsUncheckedUpdateWithoutBankInput>
    create: XOR<Bank_detailsCreateWithoutBankInput, Bank_detailsUncheckedCreateWithoutBankInput>
  }

  export type Bank_detailsUpdateWithWhereUniqueWithoutBankInput = {
    where: Bank_detailsWhereUniqueInput
    data: XOR<Bank_detailsUpdateWithoutBankInput, Bank_detailsUncheckedUpdateWithoutBankInput>
  }

  export type Bank_detailsUpdateManyWithWhereWithoutBankInput = {
    where: Bank_detailsScalarWhereInput
    data: XOR<Bank_detailsUpdateManyMutationInput, Bank_detailsUncheckedUpdateManyWithoutBankInput>
  }

  export type UserCreateWithoutDelivery_paymentInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutUserInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDelivery_paymentInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutUserInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDelivery_paymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDelivery_paymentInput, UserUncheckedCreateWithoutDelivery_paymentInput>
  }

  export type UserUpsertWithoutDelivery_paymentInput = {
    update: XOR<UserUpdateWithoutDelivery_paymentInput, UserUncheckedUpdateWithoutDelivery_paymentInput>
    create: XOR<UserCreateWithoutDelivery_paymentInput, UserUncheckedCreateWithoutDelivery_paymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDelivery_paymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDelivery_paymentInput, UserUncheckedUpdateWithoutDelivery_paymentInput>
  }

  export type UserUpdateWithoutDelivery_paymentInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutUserNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDelivery_paymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutUserNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RiderCreateWithoutProposalInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutProposalInput = {
    id?: number
    vendor_id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutProposalInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutProposalInput, RiderUncheckedCreateWithoutProposalInput>
  }

  export type DeliveryCreateWithoutProposalInput = {
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDeliveryInput
    vendor?: VendorCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutProposalInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    vendor_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DeliveryCreateOrConnectWithoutProposalInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutProposalInput, DeliveryUncheckedCreateWithoutProposalInput>
  }

  export type RiderUpsertWithoutProposalInput = {
    update: XOR<RiderUpdateWithoutProposalInput, RiderUncheckedUpdateWithoutProposalInput>
    create: XOR<RiderCreateWithoutProposalInput, RiderUncheckedCreateWithoutProposalInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutProposalInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutProposalInput, RiderUncheckedUpdateWithoutProposalInput>
  }

  export type RiderUpdateWithoutProposalInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutProposalInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type DeliveryUpsertWithoutProposalInput = {
    update: XOR<DeliveryUpdateWithoutProposalInput, DeliveryUncheckedUpdateWithoutProposalInput>
    create: XOR<DeliveryCreateWithoutProposalInput, DeliveryUncheckedCreateWithoutProposalInput>
    where?: DeliveryWhereInput
  }

  export type DeliveryUpdateToOneWithWhereWithoutProposalInput = {
    where?: DeliveryWhereInput
    data: XOR<DeliveryUpdateWithoutProposalInput, DeliveryUncheckedUpdateWithoutProposalInput>
  }

  export type DeliveryUpdateWithoutProposalInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDeliveryNestedInput
    vendor?: VendorUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutProposalInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type nigerian_banksCreateWithoutBank_detailsInput = {
    name: string
    code: string
    is_active?: boolean
    slug: string
    ussd: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type nigerian_banksUncheckedCreateWithoutBank_detailsInput = {
    id?: number
    name: string
    code: string
    is_active?: boolean
    slug: string
    ussd: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type nigerian_banksCreateOrConnectWithoutBank_detailsInput = {
    where: nigerian_banksWhereUniqueInput
    create: XOR<nigerian_banksCreateWithoutBank_detailsInput, nigerian_banksUncheckedCreateWithoutBank_detailsInput>
  }

  export type VendorCreateWithoutBank_detailsInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedManyWithoutVendorInput
    delivery?: DeliveryCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutBank_detailsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderUncheckedCreateNestedManyWithoutVendorInput
    delivery?: DeliveryUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutBank_detailsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutBank_detailsInput, VendorUncheckedCreateWithoutBank_detailsInput>
  }

  export type nigerian_banksUpsertWithoutBank_detailsInput = {
    update: XOR<nigerian_banksUpdateWithoutBank_detailsInput, nigerian_banksUncheckedUpdateWithoutBank_detailsInput>
    create: XOR<nigerian_banksCreateWithoutBank_detailsInput, nigerian_banksUncheckedCreateWithoutBank_detailsInput>
    where?: nigerian_banksWhereInput
  }

  export type nigerian_banksUpdateToOneWithWhereWithoutBank_detailsInput = {
    where?: nigerian_banksWhereInput
    data: XOR<nigerian_banksUpdateWithoutBank_detailsInput, nigerian_banksUncheckedUpdateWithoutBank_detailsInput>
  }

  export type nigerian_banksUpdateWithoutBank_detailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ussd?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nigerian_banksUncheckedUpdateWithoutBank_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    ussd?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUpsertWithoutBank_detailsInput = {
    update: XOR<VendorUpdateWithoutBank_detailsInput, VendorUncheckedUpdateWithoutBank_detailsInput>
    create: XOR<VendorCreateWithoutBank_detailsInput, VendorUncheckedCreateWithoutBank_detailsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutBank_detailsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutBank_detailsInput, VendorUncheckedUpdateWithoutBank_detailsInput>
  }

  export type VendorUpdateWithoutBank_detailsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateManyWithoutVendorNestedInput
    delivery?: DeliveryUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutBank_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    operating_areas?: NullableJsonNullValueInput | InputJsonValue
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUncheckedUpdateManyWithoutVendorNestedInput
    delivery?: DeliveryUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type RiderCreateWithoutRider_ratingInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutRiderInput
    proposal?: ProposalCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutRider_ratingInput = {
    id?: number
    vendor_id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutRiderInput
    rider_credentials?: Rider_credentialsUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutRider_ratingInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
  }

  export type UserCreateWithoutRider_ratingInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryCreateNestedManyWithoutUserInput
    delivery_payment?: delivery_paymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRider_ratingInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delivery?: DeliveryUncheckedCreateNestedManyWithoutUserInput
    delivery_payment?: delivery_paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRider_ratingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
  }

  export type RiderUpsertWithoutRider_ratingInput = {
    update: XOR<RiderUpdateWithoutRider_ratingInput, RiderUncheckedUpdateWithoutRider_ratingInput>
    create: XOR<RiderCreateWithoutRider_ratingInput, RiderUncheckedCreateWithoutRider_ratingInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutRider_ratingInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutRider_ratingInput, RiderUncheckedUpdateWithoutRider_ratingInput>
  }

  export type RiderUpdateWithoutRider_ratingInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutRiderNestedInput
    proposal?: ProposalUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutRider_ratingInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type UserUpsertWithoutRider_ratingInput = {
    update: XOR<UserUpdateWithoutRider_ratingInput, UserUncheckedUpdateWithoutRider_ratingInput>
    create: XOR<UserCreateWithoutRider_ratingInput, UserUncheckedCreateWithoutRider_ratingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRider_ratingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRider_ratingInput, UserUncheckedUpdateWithoutRider_ratingInput>
  }

  export type UserUpdateWithoutRider_ratingInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUpdateManyWithoutUserNestedInput
    delivery_payment?: delivery_paymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRider_ratingInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delivery?: DeliveryUncheckedUpdateManyWithoutUserNestedInput
    delivery_payment?: delivery_paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RiderCreateWithoutRider_credentialsInput = {
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutRiderInput
    proposal?: ProposalCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateWithoutRider_credentialsInput = {
    id?: number
    vendor_id: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    proposal?: ProposalUncheckedCreateNestedManyWithoutRiderInput
    rider_rating?: Rider_ratingUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderCreateOrConnectWithoutRider_credentialsInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
  }

  export type RiderUpsertWithoutRider_credentialsInput = {
    update: XOR<RiderUpdateWithoutRider_credentialsInput, RiderUncheckedUpdateWithoutRider_credentialsInput>
    create: XOR<RiderCreateWithoutRider_credentialsInput, RiderUncheckedCreateWithoutRider_credentialsInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutRider_credentialsInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutRider_credentialsInput, RiderUncheckedUpdateWithoutRider_credentialsInput>
  }

  export type RiderUpdateWithoutRider_credentialsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutRiderNestedInput
    proposal?: ProposalUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutRider_credentialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type DeliveryCreateManyUserInput = {
    id?: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    vendor_id?: number | null
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Rider_ratingCreateManyUserInput = {
    id?: number
    rider_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type delivery_paymentCreateManyUserInput = {
    id?: number
    email: string
    amount: string
    reference: string
    phone_number: string
    status: string
    has_paid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutUserInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    vendor?: VendorUpdateOneWithoutDeliveryNestedInput
    proposal?: ProposalUpdateManyWithoutDeliverNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    proposal?: ProposalUncheckedUpdateManyWithoutDeliverNestedInput
  }

  export type DeliveryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Rider_ratingUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRider_ratingNestedInput
  }

  export type Rider_ratingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type delivery_paymentUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type delivery_paymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type delivery_paymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    has_paid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderCreateManyVendorInput = {
    id?: number
    fullname: string
    username: string
    email: string
    phone_number: string
    role?: $Enums.Role
    profile_image: string
    avg_rating?: number
    password: string
    status?: $Enums.Status
    is_verified?: boolean
    available?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryCreateManyVendorInput = {
    id?: number
    user_id: number
    package_name: string
    phone_number: string
    pickup_location: string
    delivery_location: string
    estimated_delivery_price: string
    package_image: string
    landmark: string
    reference: string
    delivery_code?: number | null
    is_pickedup?: boolean
    is_delivered?: boolean
    is_accepted?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Bank_detailsCreateManyVendorInput = {
    id?: number
    bank_id?: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUpdateWithoutVendorInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposal?: ProposalUncheckedUpdateManyWithoutRiderNestedInput
    rider_rating?: Rider_ratingUncheckedUpdateManyWithoutRiderNestedInput
    rider_credentials?: Rider_credentialsUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_image?: StringFieldUpdateOperationsInput | string
    avg_rating?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    available?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUpdateWithoutVendorInput = {
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDeliveryNestedInput
    proposal?: ProposalUpdateManyWithoutDeliverNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
    proposal?: ProposalUncheckedUpdateManyWithoutDeliverNestedInput
  }

  export type DeliveryUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    package_name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    pickup_location?: StringFieldUpdateOperationsInput | string
    delivery_location?: StringFieldUpdateOperationsInput | string
    estimated_delivery_price?: StringFieldUpdateOperationsInput | string
    package_image?: StringFieldUpdateOperationsInput | string
    landmark?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    delivery_code?: NullableIntFieldUpdateOperationsInput | number | null
    is_pickedup?: BoolFieldUpdateOperationsInput | boolean
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    is_accepted?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_proposal_rider_id?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Bank_detailsUpdateWithoutVendorInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bank?: nigerian_banksUpdateOneWithoutBank_detailsNestedInput
  }

  export type Bank_detailsUncheckedUpdateWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_id?: NullableIntFieldUpdateOperationsInput | number | null
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUncheckedUpdateManyWithoutVendorInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_id?: NullableIntFieldUpdateOperationsInput | number | null
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyRiderInput = {
    id?: number
    delivery_id: number
    status?: $Enums.Status
  }

  export type Rider_ratingCreateManyRiderInput = {
    id?: number
    user_id: number
    rating: number
    review: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Rider_credentialsCreateManyRiderInput = {
    id?: number
    nin: string
    nin_image?: string | null
    driver_license: string
    driver_license_image?: string | null
    plate_number: string
    vehicle_image?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProposalUpdateWithoutRiderInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    deliver?: DeliveryUpdateOneRequiredWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    delivery_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProposalUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    delivery_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Rider_ratingUpdateWithoutRiderInput = {
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRider_ratingNestedInput
  }

  export type Rider_ratingUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_ratingUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    review?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUpdateWithoutRiderInput = {
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Rider_credentialsUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    nin?: StringFieldUpdateOperationsInput | string
    nin_image?: NullableStringFieldUpdateOperationsInput | string | null
    driver_license?: StringFieldUpdateOperationsInput | string
    driver_license_image?: NullableStringFieldUpdateOperationsInput | string | null
    plate_number?: StringFieldUpdateOperationsInput | string
    vehicle_image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProposalCreateManyDeliverInput = {
    id?: number
    rider_id: number
    status?: $Enums.Status
  }

  export type ProposalUpdateWithoutDeliverInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    rider?: RiderUpdateOneRequiredWithoutProposalNestedInput
  }

  export type ProposalUncheckedUpdateWithoutDeliverInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type ProposalUncheckedUpdateManyWithoutDeliverInput = {
    id?: IntFieldUpdateOperationsInput | number
    rider_id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type Bank_detailsCreateManyBankInput = {
    id?: number
    vendor_id?: number | null
    bank_name: string
    account_name: string
    account_number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Bank_detailsUpdateWithoutBankInput = {
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutBank_detailsNestedInput
  }

  export type Bank_detailsUncheckedUpdateWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bank_detailsUncheckedUpdateManyWithoutBankInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendor_id?: NullableIntFieldUpdateOperationsInput | number | null
    bank_name?: StringFieldUpdateOperationsInput | string
    account_name?: StringFieldUpdateOperationsInput | string
    account_number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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