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
        <td>Number of events to generate after time has passed</td>
    </tr>
    <tr>
        <td>`repeat`</td>
        <td>`<int>`</td>
        <td>No, repeat infinitely if not specified</td>
        <td>Number of cycles to repeat generation</td>
    </tr>
</table>

## Example

```yaml
timer:
  seconds: 1
  count: 1
  repeat: 3600
```