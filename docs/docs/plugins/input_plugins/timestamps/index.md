# Timestamps

## Description

Input plugin for generating events in specified timestamps.

## Parameters

Usage name: `timestamps`

Supported modes: `live`, `sample`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`source`</td>
        <td>`<list[datetime]>` | `<str>`</td>
        <td>Yes</td>
        <td>List of timestamps or path to file with new line separated timestamps</td>
    </tr>
</table>

## Example

```yaml
timestamps:
  source:
    - "2024-01-01T00:00:00.000Z"
    - "2024-01-07T00:00:00.000Z"
    - "2024-01-19T00:00:00.000Z"
```

```yaml
timestamps:
  source: "/home/user/timestamps.csv"
```