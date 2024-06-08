---
slug: compose
title: Eventum Compose
authors: [rnv812]
tags: [feature, cli]
---

Since version 1.0.10 of Eventum CLI it's available to run multiple generators at once using compose files via `eventum-compose` tool!

Example compose config:
```yaml
generators:
  winlog_auth:
    config: winlog_auth.yml
    time_mode: live
    params: { "success_ratio": 0.92 }
    settings: { "timezone": "Europe/Moscow" }

  winlog_iam:
    config: winlog_auth.yml
    time_mode: live
    params: { "new_accounts_count": 7 }
    settings: { }
```

and run it with:
```bash
eventum-compose -c winlog-generators.yml
```

Read more about Eventum Compose in the **Configuring** part.