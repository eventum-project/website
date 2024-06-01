# Arguments and Settings

## Arguments
<table>
    <th>Option</th>
    <th>Expected value</th>
    <th>Description</th>
    <tr>
        <td>`-c`, `--config`</td>
        <td>`<filepath>`</td>
        <td>Path to configuration file</td>
    </tr>
    <tr>
        <td>`-t`, `--time-mode`</td>
        <td>`sample` | `live`</td>
        <td>
            Time mode of generating events
            <ul>
                <li>`sample` - publish all events immediately</li>
                <li>`live` - publish events with respect to real time</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>`-i`, `--interactive`</td>
        <td>-</td>
        <td>Enable interactive mode: display progress bar and EPS stats</td>
    </tr>
    <tr>
        <td>`-s`, `--settings`</td>
        <td>`<json string>`</td>
        <td>Application core settings. See table below with listed settings</td>
    </tr>
    <tr>
        <td>`-p`, `--params`</td>
        <td>`<json string>`</td>
        <td>Parameters to use in configuration file as token values for `params`</td>
    </tr>
    <tr>
        <td>`-v`, `--verbose`</td>
        <td>-</td>
        <td>Enable all informational messages in output.</td>
    </tr>
        <tr>
        <td>`-V`, `--version`</td>
        <td>-</td>
        <td>Show package's version</td>
    </tr>
</table>

## Core settings
Following parameters can be used in json string passed to `--settings` argument:

<table>
    <th>Key</th>
    <th>Expected value</th>
    <th>Default value</th>
    <th>Description</th>
    <tr>
        <td>`timezone`</td>
        <td>`<zone name>` (e.g `Europe/Moscow`)</td>
        <td>`UTC`</td>
        <td>Time zone of timestamps in events</td>
    </tr>
    <tr>
        <td>`timezone_field_name`</td>
        <td>`<string>`</td>
        <td>`tz`</td>
        <td>Name of the variable in template with zone offset</td>
    </tr>
    <tr>
        <td>`timestamp_field_name`</td>
        <td>`<string>`</td>
        <td>`timestamp`</td>
        <td>Name of the variable in template with timestamp</td>
    </tr>
    <tr>
        <td>`events_batch_size`</td>
        <td>`<int>`</td>
        <td>`1,000,000`</td>
        <td>Minimal events batch size to be published by input plugin to event plugin</td>
    </tr>
    <tr>
        <td>`events_batch_timeout`</td>
        <td>`<float>`</td>
        <td>`1.0`</td>
        <td>Minimal seconds of events batch lifetime to be published by input plugin to event plugin</td>
    </tr>
    <tr>
        <td>`output_batch_size`</td>
        <td>`<int>`</td>
        <td>`10,000`</td>
        <td>Minimal events batch size to be written by output plugin</td>
    </tr>
    <tr>
        <td>`output_batch_timeout`</td>
        <td>`<float>`</td>
        <td>`1.0`</td>
        <td>Minimal seconds of events batch lifetime to be written by output plugin</td>
    </tr>
</table>
