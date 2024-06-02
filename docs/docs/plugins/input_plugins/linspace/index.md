# Linspace

## Description

Input plugin for generating specified count of events linearly spaced in time interval.

## Parameters

Usage name: `linspace`

Supported modes: `sample`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`start`</td>
        <td>`<datetime>` (see format [here](https://docs.pydantic.dev/2.0/usage/types/datetime/#validation-of-datetime-types))</td>
        <td>Yes</td>
        <td>Start time of interval</td>
    </tr>
    <tr>
        <td>`end`</td>
        <td>`<datetime>`</td>
        <td>Yes</td>
        <td>End time of interval</td>
    </tr>
    <tr>
        <td>`count`</td>
        <td>`<int>`</td>
        <td>Yes</td>
        <td>Number of events within interval</td>
    </tr>
    <tr>
        <td>`endpoint`</td>
        <td>`<bool>`</td>
        <td>No, default is `True`</td>
        <td>Whether to include end point of interval</td>
    </tr>
</table>

## Example

```yaml
linspace:
  start: "2024-01-01T00:00:00.000Z"
  end: "2024-01-31T00:00:00.000Z"
  count: 31
  endpoint: true
```
