# Timer

## Description

Input plugin for generating events after specified number of seconds.

## Parameters

Usage name: `timer`

Supported modes: `live`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`seconds`</td>
        <td>`<float>`</td>
        <td>Yes</td>
        <td>Number of seconds to wait before generating event</td>
    </tr>
    <tr>
        <td>`count`</td>
        <td>`<int>`</td>
        <td>Yes</td>
        <td>Number of events to generate after time has come</td>
    </tr>
    <tr>
        <td>`repeat`</td>
        <td>`<bool>`</td>
        <td>Yes</td>
        <td>Whether to restart the timer after the cycle</td>
    </tr>
</table>

## Example

```yaml
timer:
  seconds: 0.5
  count: 1
  repeat: true
```