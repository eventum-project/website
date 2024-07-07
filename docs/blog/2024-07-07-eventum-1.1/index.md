---
slug: eventum-1.1
title: 🎉 Eventum 1.1 is Released! 🎉
authors: [rnv812]
tags: [release, announce]
---

## Change log

### New features
- Input plugin tags feature is added
- Logging was separated into different files individually for configuration / compose file
- New module `py` was added for Jinja event plugin
- New function `shuffle` was added to `rand` module for Jinja event plugin
- New function `datetime.timestamp` was added to `rand` module for Jinja event plugin

### Bug fixes
- Bulk request response check was added in Opensearch output plugin
- Timestamp type in template was fixed to be a string
