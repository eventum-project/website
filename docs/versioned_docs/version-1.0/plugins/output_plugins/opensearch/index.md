# Opensearch

## Description

Output plugin for sending events to OpenSearch.

## Parameters

Usage name: `opensearch`

<table>
    <th>Parameter</th>
    <th>Expected value</th>
    <th>Required</th>
    <th>Description</th>
    <tr>
        <td>`hosts`</td>
        <td>`<list[str]>` (e.g `["https://localhost:9200"]`)</td>
        <td>Yes</td>
        <td>List of data nodes of OpenSearch cluster</td>
    </tr>
    <tr>
        <td>`user`</td>
        <td>`<str>`</td>
        <td>Yes</td>
        <td>User for authorization</td>
    </tr>
    <tr>
        <td>`password`</td>
        <td>`<str>`</td>
        <td>Yes</td>
        <td>Password for authorization</td>
    </tr>
    <tr>
        <td>`index`</td>
        <td>`<str>`</td>
        <td>Yes</td>
        <td>Index name for events</td>
    </tr>
    <tr>
        <td>`verify_ssl`</td>
        <td>`<bool>`</td>
        <td>Yes</td>
        <td>Whether to verify ssl certificate when making requests to the cluster</td>
    </tr>
        <tr>
        <td>`ca_cert_path`</td>
        <td>`<str>`</td>
        <td>No</td>
        <td>Path to trusted CA certificate</td>
    </tr>
</table>

## Example

```yaml
opensearch:
  hosts: ["https://localhost:9200"]
  user: "admin"
  password: "${secrets.opensearch_pwd}"
  index: "test"
  verify_ssl: false
```