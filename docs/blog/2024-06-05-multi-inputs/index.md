---
slug: multi-inputs
title: Multi inputs
authors: [rnv812]
tags: [feature, plugins]
---

Since version 1.0.7 of Eventum CLI it's available to specify multiple input plugins in configuration!

Combining of input plugins makes scheduling even more flexible eliminating the need to run additional instances of Eventum.

Example:
```yaml
input:
  - cron:
      expression: "*/10 17-18 * * *"
      count: 1
  - cron:
      expression: "*/5 19-20 * * *"
      count: 1
```
