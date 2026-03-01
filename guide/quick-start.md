# Quick Start

Get up and running with Eventum in seconds.

```ts
import * as logger from 'eventum';

// Configure the logger
logger.setConfig({
  prod: {
    output: {
      color: true,
      format: logger.OutputFormat.Json,
      target: logger.OutputTarget.Stderr,
      filePath: './logs/app.log'
    },
    fields: {
      time: true,
      pid: true,
      msg: true,
      level: true
    }
  }
});

// Log at different levels
logger.trace('Detailed trace information');
logger.debug({ userId: '123', action: 'login' });
logger.info('User session started');
logger.warn('Rate limit approaching threshold');
logger.error({ error: 'Connection timeout', retries: 3 });
logger.fatal('Critical system failure');

// Gracefully flush logs before exit
process.on('SIGINT', () => {
  logger.shutdown();
  process.exit(0);
});
```

## Lifecycle Management

Always call `shutdown()` before process exit to flush buffered logs and cleanly shut down background threads.

```ts
process.on('SIGTERM', () => {
  logger.info('Received SIGTERM, shutting down gracefully');
  logger.shutdown();
  process.exit(0);
});
```
