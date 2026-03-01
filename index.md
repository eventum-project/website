---
layout: home

hero:
  name: Eventum
  text: Infrastructure-grade, security-first logging for Node.js, powered by Rust.
  tagline: Minimal overhead, threaded batching, and text/JSON outputs.
  image:
    src: https://raw.githubusercontent.com/eventum-project/eventum/main/eventum-banner.png
    alt: Eventum Log Output
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-eventum
    - theme: alt
      text: View on GitHub
      link: https://github.com/eventum-project/eventum

features:
  - title: Minimal overhead
    details: Rust handles all heavy lifting with almost no impact on the Event Loop.
    icon: ⚡️
  - title: Threaded batching
    details: Efficient log batching in background threads. Log millions of messages with ease.
    icon: 🧵
  - title: Output Formats
    details: Choose between human-readable text output with automatic coloring or exact JSON lines.
    icon: 📝
  - title: Data Masking
    details: Protect passwords, tokens, and PII with built-in sensitive data masking schemas.
    icon: 🛡️
  - title: Log Rotation
    details: Daily rotation, size-based rotation, and backup limits built-in out of the box.
    icon: 🔄
  - title: Environment Aware
    details: Separate configs for development and production automatically applied.
    icon: 🌍
---

<style>
.vp-doc {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>

<div class="vp-doc">

<br/>

## Benchmark (1 million logs)

> Benchmarks were executed locally on a development machine. Results may vary depending on hardware and environment.

| Format | Target  | CPU ms   | Elapsed ms | CPU %   | Memory MB | Logs/sec  |
|--------|---------|----------|------------|---------|-----------|-----------|
| Text   | Stdout  | 3842.29  | 3871       | 99.26%  | 43.20     | 516,662   |
| Text   | Stderr  | 4314.89  | 4330       | 99.65%  | 0.02      | 461,893   |
| Text   | File    | 64694.64 | 64788      | 99.86%  | 0.31      | 30,869    |
| Text   | Null    | 1488.89  | 1489       | 99.99%  | -0.02     | 1,343,183 |
| JSON   | Stdout  | 2656.76  | 2660       | 99.88%  | 0.02      | 751,879   |
| JSON   | Stderr  | 3702.20  | 3709       | 99.82%  | 0.00      | 539,228   |
| JSON   | File    | 62866.59 | 62946      | 99.87%  | -0.02     | 31,773    |
| JSON   | Null    | 1108.02  | 1109       | 99.91%  | -0.03     | 1,803,426 |

<br/>

<p align="center">Made with 🦀 Rust & ❤️ for performance-first JS developers.</p>

<br/>
<br/>
</div>
