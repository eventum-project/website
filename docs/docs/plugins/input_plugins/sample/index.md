# Sample

## Description

Input plugin for generating specified count of events. Use it when you only need to produce event facts and timestamps aren't important. For all events timestamps are the same and have a value of time when sample generating process was started.

## Parameters

Supported modes: `sample`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`count`</td>
        <td>`<int>`</td>
        <td>Yes</td>
        <td>Number of events to generate</td>
    </tr>
</table>