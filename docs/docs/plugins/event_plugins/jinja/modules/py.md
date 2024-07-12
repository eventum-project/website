# Py

## Description

Module provides classes from python standard library.

Template object: `module.py`

## Provided objects

<table>
    <th>Object</th>
    <th>Description</th>
    <tr>
        <td>`datetime`</td>
        <td>`datetime` class from `datetime` module</td>
    </tr>
    <tr>
        <td>`time`</td>
        <td>`time` class from `datetime` module</td>
    </tr>
    <tr>
        <td>`timedelta`</td>
        <td>`timedelta` class from `datetime` module</td>
    </tr>
</table>

## Example usage

#### Example 1
```js
{{ module.py.datetime.now().astimezone().isoformat() }}
```

Output:
```
2024-07-12T23:59:36.366434+03:00
```

#### Example 2
```js
{% set delta = module.py.timedelta(hours=1, minutes=55) %}
{{ (module.py.datetime(year=2024, month=12, day=31, hour=23) + delta).year }}
```

Output:
```
2025
```
