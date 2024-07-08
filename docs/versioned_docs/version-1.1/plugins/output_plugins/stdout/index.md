# Stdout

## Description

Output plugin for writing events to stdout.

## Parameters

Usage name: `stdout`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`format`</td>
        <td>`original` | `json-lines`</td>
        <td>No, default is `original`</td>
        <td>Format for output events</td>
    </tr>
</table>

## Example

```yaml
stdout:
  format: "json-lines"
```

Usage with default parameters:
```yaml
stdout: { }
```
