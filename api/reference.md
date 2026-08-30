# API Reference

## Logging Functions

All logging functions accept any type: strings, objects, arrays, or primitives.

```ts
logger.trace(message: unknown): void    // Detailed debug information
logger.debug(message: unknown): void    // Debug-level messages
logger.info(message: unknown): void     // Informational messages
logger.warn(message: unknown): void     // Warning messages
logger.error(message: unknown): void    // Error messages
logger.fatal(message: unknown): void    // Critical failures
```

### Serialization

Values that JSON cannot represent are normalized natively in Rust before serialization, so
a log call never throws on an awkward payload:

| Input                          | Serialized as                          |
| ------------------------------ | -------------------------------------- |
| `NaN`, `Infinity`, `-Infinity` | `"NaN"`, `"Infinity"`, `"-Infinity"`   |
| `BigInt`, `Symbol`             | String form                            |
| `Function`                     | `"[Function]"`                         |
| `Error`                        | `{ name, message, stack, ...ownProps }` |
| `Date`                         | ISO 8601 string                        |
| `RegExp`                       | `toString()` form                      |
| Circular reference             | `"[Circular]"`                          |

Integer numbers are preserved as JSON integers (`42`, not `42.0`).

## Configuration

### `setConfig`

Sets the logger configuration. Returns the active config, or `null` if the selected config
is missing or invalid.

The active environment is chosen from `NODE_ENV`: `production` selects `prod`, anything
else selects `dev` and falls back to `prod` when no `dev` block is defined. That fallback
is why a config containing only `prod` still works during local development.

```ts
logger.setConfig(config: LoggerConfig): EnvConfig | null
```

## Lifecycle

### `shutdown`

Flushes all buffered logs and cleanly shuts down background threads. Call this before process exit to ensure no logs are lost.

```ts
logger.shutdown(): void
```

## Types & Enums

### `LoggerConfig`
```ts
interface LoggerConfig {
  dev?: EnvConfig;
  prod?: EnvConfig;
}
```

### `EnvConfig`
```ts
interface EnvConfig {
  output: OutputConfig;
  fields?: FieldsConfig;
}
```

### `OutputConfig`
- `format: OutputFormat`
- `target: OutputTarget`
- `color?: boolean`
- `filePath?: string` — required when `target` is `OutputTarget.File`
- `maxFileSize?: number`
- `maxBackups?: number`
- `rotateDaily?: boolean`
- `batchEnabled?: boolean`
- `batchSize?: number`
- `batchIntervalMs?: number`
- `masking?: MaskingConfig`

### `FieldsConfig`

Controls which fields are emitted on each log entry.

```ts
interface FieldsConfig {
  pid?: boolean;
  time?: boolean;
  msg?: boolean;
  level?: boolean;
}
```

Defaults depend on whether you supply the `fields` block at all:

| Field   | `fields` omitted entirely | `fields` supplied, key omitted |
| ------- | :-----------------------: | :----------------------------: |
| `level` |         enabled           |           disabled             |
| `time`  |         enabled           |           disabled             |
| `msg`   |         enabled           |           enabled              |
| `pid`   |         disabled          |           disabled             |

> [!TIP]
> Once you provide a `fields` block, every key you leave out is treated as `false` except
> `msg`. List each field you want explicitly rather than relying on defaults.

### `MaskingConfig`

Redacts sensitive values natively in Rust, before anything is written. Matching is applied
recursively across nested objects and arrays.

```ts
interface MaskingConfig {
  keyword?: string;        // Replacement text, defaults to "[MASKED]"
  exact?: string[];        // Mask when the key matches exactly
  partial?: string[];      // Mask when the key contains the substring
  regex?: string[];        // Mask when the *value* matches the pattern
}
```

`exact` and `partial` match against the **key**, while `regex` matches against the
**value** — which is what lets you catch secrets in unpredictably named fields.

```ts
masking: {
  keyword: '[REDACTED]',
  exact: ['password', 'token'],
  partial: ['secret'],
  regex: ['\\d{16}']       // e.g. card-like numbers, wherever they appear
}
```

### Enums

```ts
enum LogLevel {
  Trace = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5
}

enum OutputFormat {
  Text = 0,  // Human-readable text output
  Json = 1   // JSON Lines format
}

enum OutputTarget {
  Stdout = 0,
  Stderr = 1,
  File = 2,
  Null = 3
}
```
