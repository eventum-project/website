# Advanced Usage

## Sensitive Data Masking

Protect sensitive information in your logs with built-in masking. Eventum can automatically replace private data with a keyword based on exact field names, partial matches, or regex patterns.

```ts
import * as logger from 'eventum';

logger.setConfig({
  prod: {
    output: {
      format: logger.OutputFormat.Json,
      target: logger.OutputTarget.File,
      filePath: './logs/app.log',
      masking: {
        keyword: '***',                              // Replacement text
        exact: ['password', 'token', 'apiKey'],      // Mask these field names
        partial: ['email', 'creditCard'],            // Matches substrings in field names
        regex: ['(?i)bearer\\s+[a-z0-9\\._\\-]+']   // Regex patterns
      }
    }
  }
});

// Sensitive data will be automatically masked
logger.info({
  username: 'alice',
  password: 'secret123',           // Will be masked
  token: 'Bearer abc.def.ghi',     // Will be masked
  email: 'alice@example.com',      // Will be masked (contains 'email')
  userEmail: 'alice@work.com'      // Will be masked (contains 'email')
});
```

### Masking Options

- **`exact`**: masks values of fields with an exact name match (e.g. `password`, `token`).
- **`partial`**: masks values of fields whose names *contain* any of the given substrings (e.g. `user_email`, `billingEmail`).
- **`regex`**: masks values matched by custom regex patterns.
- **`keyword`**: replacement string (default: `[MASKED]`).

---

## Colorized Output

Eventum supports colorized output for better readability during development.

```ts
logger.setConfig({
  dev: {
    output: {
      format: logger.OutputFormat.Text,
      target: logger.OutputTarget.Stdout,
      color: true  // Enable colorization
    }
  }
});
```

| Level | Color |
|-------|-------|
| `trace` | Bright Black |
| `debug` | Cyan |
| `info`  | Green |
| `warn`  | Yellow |
| `error` | Red |
| `fatal` | Bold Red |

> [!TIP]
> Colors are automatically disabled when `color: false` or when output is piped to a file.

---

## Best Practices

### Scope-Based Logging

Use the `scope` field to add context to your logs:

```ts
logger.info({ scope: 'AuthService', msg: 'User logged in', userId: '123' });

// In JSON format, scope appears as a top-level field
// In Text format, scope appears in brackets: [AuthService] User logged in
```

### Environment-Specific Configuration

Configure different behavior for dev and prod:

```ts
logger.setConfig({
  dev: {
    output: {
      format: logger.OutputFormat.Text,
      target: logger.OutputTarget.Stdout,
      color: true
    }
  },
  prod: {
    output: {
      format: logger.OutputFormat.Json,
      target: logger.OutputTarget.File,
      filePath: './logs/app.log',
      batchEnabled: true,
      batchSize: 100,
      batchIntervalMs: 1000
    }
  }
});
```
