# Roadmap

We prioritize correctness over speed and stability over features. The project is currently in Alpha, and development follows a "deep-dive" approach.

---

## v0.1.x — Stabilization & Logic <Badge type="tip" text="Current" />

**Focus:** Mastering the Rust-Node.js bridge.

- [x] **Native I/O**: Reliable log writing via Rust background threads.
- [x] **File Management**: Daily and size-based rotation logic.
- [ ] **Graceful Exit**: Ensuring 100% log delivery and clean thread shutdown during process termination.
- [ ] **Error Handling**: Basic native handling for system-level I/O errors.

## v0.2.x — Moving the Logic (The Rust Phase)

**Focus:** Shifting CPU-intensive tasks from JavaScript to Native.

- [ ] **Native Sanitization**: Implementing the recursive object crawler and PII masking directly in Rust.
- [ ] **Native Regex Engine**: Using Rust’s regex for high-speed pattern-based data protection.
- [ ] **Performance Optimization**: Eliminating JS-side bottlenecks and minimizing memory allocations during serialization.

## v0.3.x — Ecosystem & Polish

**Focus:** Making Eventum ready for real-world projects.

- [ ] **API Hardening**: Finalizing the `LoggerConfig` and `EnvConfig` structures based on the native engine requirements.
- [ ] **TypeScript Excellence**: Fully refined types and documentation for professional DX.
- [ ] **Framework Support**: Official wrappers and examples for NestJS and Fastify.
- [ ] **Observability**: Initial support for structured logging and OpenTelemetry standards.