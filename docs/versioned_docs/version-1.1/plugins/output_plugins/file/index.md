# File

## Description

Output plugin for writing events to a file.

## Parameters

Usage name: `file`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`path`</td>
        <td>`<str>`</td>
        <td>Yes</td>
        <td>Absolute file path</td>
    </tr>
    <tr>
        <td>`format`</td>
        <td>`original` | `json-lines`</td>
        <td>No, default is `original`</td>
        <td>Format for output events</td>
    </tr>
    <tr>
        <td>`flush`</td>
        <td>`<bool>`</td>
        <td>No, default is `False`</td>
        <td>Whether to flush buffer after each write operation</td>
    </tr>
</table>

## Example

```yaml
file:
  path: "/app/log/out.log"
  format: "json-lines"
  flush: true
```