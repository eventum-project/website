# Eventum Compose

Eventum CLI has a powerful feature with its compose files, enabling you to start multiple event generators at once, each with its own template, parameters and settings.

## Usage
In command line you can run multiple generators like:
```bash
eventum-compose -c winlog-generators.yml
```

Where `winlog-generators.yml` is an example compose file.

## Configuration structure

A compose configuration is structured as individual generator definitions in `generators` top-level section. 
```yml
generators:
  <generator alias>:
    config: <configuration path>
    time_mode: <time mode>
    params: <configuration params>
    settings: <core settings>
  ...
```

Each generator configuration includes next parameters:
- config - specifies the path to the generator's [configuration file](../config_file/)
- time_mode - defines the time mode for the generator (`sample` or `live`)
- params - dictionary of [configuration parameters](../config_file/#tokens) specific to the generator
- settings: - dictionary of [core settings](../arguments_and_settings/#core-settings) specific to the generator

## Example
Example compose configuration file look like the following:
```yml
generators:
  winlog_auth:
    config: winlog_auth.yml
    time_mode: live
    params: { "success_ratio": 0.92 }
    settings: { "timezone": "Europe/Moscow" }

  winlog_iam:
    config: winlog_iam.yml
    time_mode: live
    params: { "new_accounts_count": 7 }
    settings: { }
```

This compose configuration defines two independent generators `winlog_auth` and `winlog_iam`.
