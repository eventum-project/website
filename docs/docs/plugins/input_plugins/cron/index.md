# Cron

## Description

Input plugin for generating events at moments defined by cron expression.

## Parameters

Supported modes: `live`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`expression`</td>
        <td>`<cron expression>` (e.g. `*/5 12-23 * * *`)</td>
        <td>Yes</td>
        <td>Valid cron expression</td>
    </tr>
    <tr>
        <td>`count`</td>
        <td>`<int>`</td>
        <td>Yes</td>
        <td>Number of events to generate each interval</td>
    </tr>
</table>