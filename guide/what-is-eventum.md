# What is Eventum?

Infrastructure-grade, security-first logging for Node.js, powered by Rust.

Eventum takes its name from the Latin eventus — meaning "that which has happened." In modern distributed systems, logs are more than just text messages; they are immutable records of events with technical, operational, and security consequences.

Eventum is designed to capture these events by acting as a native security boundary. Our mission is to move the heavy lifting of logging — such as data sanitization, PII masking, and complex serialization — from the volatile JavaScript environment into a hardened, high-performance Rust core.
The Core Philosophy

We believe that logging should be treated as infrastructure, not as a part of your application's business logic. By offloading logging concerns to a native binary, Eventum ensures that your Node.js Event Loop remains dedicated to what matters most: serving your users.


## Why Eventum?

- **Native Security Boundary** — While currently in alpha, Eventum is designed to move sensitive data masking (passwords, tokens, PII) to a hardened Rust layer. This creates a clear boundary between your application's logic and its data output.
- **Architectural Vision: Zero-Blocking** — Our core goal is to offload intensive operations like deep object serialization and complex regex masking to dedicated system threads. Currently, Eventum handles log writing and rotation in background threads, with native serialization offloading being the primary focus for our v0.2.0 milestone.
- **Native Reliability** — Moving the logging sink to a native binary provides more predictable memory consumption and reduces the impact of Garbage Collector (GC) pauses compared to traditional JS-only solutions.
- **Infrastructure-Grade Rotation** — Built-in log rotation (daily or size-based) implemented in Rust, removing the need for external JS dependencies or fragile cron jobs.
- **Compact** — no outdated JS dependencies.
- **Colorized output** (great for CLI debugging).
- **NODE_ENV aware** — separate config for dev and prod.
