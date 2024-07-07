# Configuration file

## Structure

Eventum configuration file is a yaml file that consists of three sections:
- Input plugin section
- Event plugin section 
- Output plugins section

The generic structure of the file is the following:
```yaml
// highlight-next-line
input:
  - <input plugin name>:
      <parameter name>: <value>
      [tags: <tags list>]
      ...
  - ...

// highlight-next-line
event:
  params: <parameters>
  
  samples:
    <sample name>:
      type: csv | items
      source: <filename> | <list[item]> 
    ...
  
  mode: { all | any | chance | spin }
  
  templates:
    - <template alias>:
        template: <template path>
        [chance: <chance>]
    ...

// highlight-next-line
output:
  - <output plugin name>:
      <parameter name>: <value>
      ...
  - ...
```

Configuration can have multiple input plugins and multiple output plugins. Specifying the name of event plugin is omitted since Jinja event plugin is the only one and it's used by default, so in event section we see its parameters straightaway.

## Example
Example simple config looks like this:

```yaml
input:
  - cron:       1️⃣
      expression: "*/5 * * * *"
      count: 1
      tags: ["basic"]

event:
  params: { "env": "dev", "status": true }    2️⃣
  
  samples:
    users:      3️⃣
      type: csv
      source: "users.csv"
    hosts:      4️⃣
      type: items
      source: ["msk-dc", "msk-01", "msk-02"]
  
  mode: all     5️⃣
  
  templates:    6️⃣
    - logon:
        template: "logon_events.json.jinja"

output:         7️⃣
  - file:
      path: "/app/logs/events.log"
      format: "json-lines"
  - stdout:
      format: "original"
```

1. As input plugin we use only `cron` with parameters `expression` and `count`.
2. Parameters `env` and `status` will be accessible in templates.
3. Sample `users` can be used in template with data defined in csv file.
4. Sample `hosts` can be used in template with data defined directly in configuration.
5. All specified templates will be rendered on input plugin trigger.
6. One template is specified to be rendered.
7. Rendered events will be written to file and duplicated to stdout.

## Tokens

You can parametrize your configuration and hide sensitive data like passwords using tokens.

There are two types of tokens:
- `params` - passed as CLI argument
- `secrets` - stored in keyring

In configuration file you can refer them using `${<token name>}` construction.

Example usage:
```yaml
output:
  - opensearch:
      hosts: ["https://localhost:9200"]
      index: "test"
      // highlight-next-line
      user: "${params.user}"
      // highlight-next-line
      password: "${secrets.opensearch_password}"
      verify_ssl: false
```

In the above example it is expected you have passed `user` parameter as argument like:

```bash
eventum ... --params '{"user": "admin"}'
```

and set `opensearch_password` value to keyring:
```bash
keyring set eventum opensearch_password
```

## Plugin parameters

All plugin parameters are documented in the **[Plugins](../../plugins/index.md)** part.  