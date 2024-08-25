# Jinja

## Description

Event plugin for producing events using Jinja template engine.

## Parameters

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`params`</td>
        <td>`<ParamsMapping>`</td>
        <td>Yes</td>
        <td>Parameters to pass to templates</td>
    </tr>
    <tr>
        <td>`samples`</td>
        <td>`<SamplesMapping>`</td>
        <td>Yes</td>
        <td>Samples to pass to templates</td>
    </tr>
    <tr>
        <td>`mode`</td>
        <td>`all` | `any` | `chance` | `spin`</td>
        <td>Yes</td>
        <td>
            Mode of template picking
            <ul>
                <li>`all` - render all templates at a time</li>
                <li>`any` - render one any template</li>
                <li>`chance` - render one template depending on their chances</li>
                <li>`spin` - render one template after another in turn</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`templates`</td>
        <td>`<TemplatesList>`</td>
        <td>Yes</td>
        <td>Templates to render</td>
    </tr>
</table>

### Params mapping

Params mapping is a simple mapping of key-value type where key is parameter name and value is a value of parameter. Mapping can be nested.

Example:
```yaml
param1: 1
param2: ["a", "b", "c"]
param3: "hello"
```

:::tip
In yaml files mapping can be passed as json as well:
```json
{ "param1": 1, "param2": ["a", "b", "c"], "param3": "hello" }
```
:::

### Samples mapping

Each key in samples mapping is a sample alias and value is a following object:
<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`type`</td>
        <td>`csv` | `items`</td>
        <td>Yes</td>
        <td>Type of sample</td>
    </tr>
    <tr>
        <td>`header`</td>
        <td>`<bool>`</td>
        <td>No, applicable only with `csv` type, default is `False`</td>
        <td>Whether the csv sample includes header</td>
    </tr>
    <tr>
        <td>`delimiter`</td>
        <td>`<str>`</td>
        <td>No, applicable only with `csv` type, default is `,`</td>
        <td>Delimiter for csv sample</td>
    </tr>
    <tr>
        <td>`source`</td>
        <td>`<str>` | `<list[str]>`</td>
        <td>Yes</td>
        <td>
            Source data for sample
            <ul>
                <li>For `csv` type is a filepath to csv file</li>
                <li>For `items` type is a list of sample items</li>
            </ul>
        </td>
    </tr>
</table>

Example:
```yaml
users:
  type: "csv"
  source: "users.csv"

hosts:
  type: "items"
  source:
    - "host1"
    - "host2"
    - "host3"
```

### Templates list

Each item in templates list is a mapping where key is a template alias and value is a following object:
<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`template`</td>
        <td>`<str>`</td>
        <td>Yes</td>
        <td>Path to template</td>
    </tr>
    <tr>
        <td>`chance`</td>
        <td>`<float>`</td>
        <td>Only for `chance` picking mode</td>
        <td>Chance for the template to be picked</td>
    </tr>
</table>

Example

```yaml
- auth_failed:
    template: "auth_failed.json.jinja"
    chance: 0.05

- auth_success:
    template: "auth_success.json.jinja"
    chance: 0.95
```

## Example

```yaml
params: {"param": 1, "param2": "string"}

samples:
  users:
    type: "csv"
    source: "users.csv"

mode: "all"

templates:
  - test:
      template: "test.jinja"
```

## Usage in templates

### Predefined variables

<table>
    <th>Variable</th>
    <th>Example value</th>
    <th>Description</th>
    <tr>
        <td>`timestamp`</td>
        <td>`2024-01-01T00:00:00`</td>
        <td>Original timestamp of the event</td>
    </tr>
    <tr>
        <td>`tz`</td>
        <td>`+0300`</td>
        <td>Timezone of timestamp</td>
    </tr>
    <tr>
        <td>`tags`</td>
        <td>`["tag1", "tag2", "tag3"]`</td>
        <td>Tags list of input plugin that triggered event rendering</td>
    </tr>
</table>

Variable names can be adjusted via [core settings](../../../configuring/arguments_and_settings/#core-settings).

### State API

There are two scopes of states in templates:
- `locals` - individual state for each template
- `shared` - single shared state available across templates

To set variable to state (e.g. `locals` scope):
```javascript
{% do locals.set("key", value) %}
```

To get variable from state:
```javascript
{% value = locals.get("key", "default") %}
```

If state has no specified key when calling get, then default value passed as second argument will be returned. If second argument is omitted, then `None` is returned.  


### Params API

To use parameters in templates use `params` keyword and then specify parameter name:
```
{{ params.param_name }}
```

### Samples API

To use samples in templates use `samples` keyword and then specify sample alias:
```
{{ samples.samples_alias }}
```

For type `csv` collection of tuples is returned even if sample has one column. For type `items` collection of strings is returned.

To pick random row from a sample you can for example use Jinja `random` filter:
```
{{ samples.samples_alias | random }}
```

### Subprocess API

To run subprocess from template use `subprocess` keyword and call `run` method.

Parameters of `subprocess.run` method:

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`command`</td>
        <td>`<str>`</td>
        <td>Yes</td>
        <td>Shell command to execute</td>
    </tr>
    <tr>
        <td>`block`</td>
        <td>`<bool>`</td>
        <td>No, default is `False`</td>
        <td>Whether to block template rendering waiting for the result of the command. If `True` is provided command output is returned after its execution, otherwise subprocess runs in the background and method call immediately returns `None` to unblock template rendering.</td>
    </tr>
</table>

Examples:
```javascript
{% do subprocess.run("python3 trigger_me.py") %}
```

```javascript
{% set result = subprocess.run("tail -n 1 /app/data/status.log", True) %}
```

### Module API

To run some python function in template you can use `module` keyword. Then you have to specify module and function name to be called.

```javascript
{{ module.my_module.my_function("param") }}
```

Modules are placed in `event_plugins/jinja_modules` directory of eventum-plugins package. There are default modules, see [modules](./modules/faker).

