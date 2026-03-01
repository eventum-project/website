# API Reference

## Logging Functions

All logging functions accept any type: strings, objects, arrays, or primitives. Complex objects are safely serialized (handles circular references, NaN, BigInt, etc.).

```ts
logger.trace(message: any): void    // Detailed debug information
logger.debug(message: any): void    // Debug-level messages
logger.info(message: any): void     // Informational messages
logger.warn(message: any): void     // Warning messages
logger.error(message: any): void    // Error messages
logger.fatal(message: any): void    // Critical failures
```

## Configuration

### `setConfig`

Sets the logger configuration. Returns the active config or `null` if invalid. Automatically selects `dev` or `prod` based on `NODE_ENV`.

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
- `color: boolean`
- `format: OutputFormat`
- `target: OutputTarget`
- `filePath?: string`
- `maxFileSize?: number`
- `maxBackups?: number`
- `rotateDaily?: boolean`
- `batchEnabled?: boolean`
- `batchSize?: number`
- `batchIntervalMs?: number`
- `masking?: MaskingConfig`

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
