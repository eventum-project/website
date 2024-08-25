# Rand

## Description

Module provides functions to generate random values.

Template object: `module.rand`

## Provided objects

<table>
    <th>Function</th>
    <th>Parameters</th>
    <th>Returned value</th>
    <th>Description</th>
    <tr>
        <td>`shuffle`</td>
        <td>`items: <Sequence[T]> | <str>`</td>
        <td>`<list[T]> | <str>`</td>
        <td>Return shuffled copy of sequence </td>
    </tr>
    <tr>
        <td>`choice`</td>
        <td>`items: <Sequence[T]>`</td>
        <td>`<T>`</td>
        <td>Return random item from non empty sequence</td>
    </tr>
    <tr>
        <td>`choices`</td>
        <td>
            <ul>
                <li>`items: <Sequence[T]>`</li>
                <li>`n: <int>`</li>
            </ul>
        </td>
        <td>`<list[T]>`</td>
        <td>Return `n` random items from non empty sequence</td>
    </tr>
    <tr>
        <td>`weighted_choice`</td>
        <td>
            <ul>
                <li>`items: <Sequence[T]>`</li>
                <li>`weights: <Sequence[float]>`</li>
            </ul>
        </td>
        <td>`<T>`</td>
        <td>Return random item from non empty sequence with `weights` probability</td>
    </tr>
    <tr>
        <td>`weighted_choices`</td>
        <td>
            <ul>
                <li>`items: <Sequence[T]>`</li>
                <li>`weights: <Sequence[float]>`</li>
                <li>`n: <int>`</li>
            </ul>
        </td>
        <td>`<list[T]>`</td>
        <td>Return `n` random items from non empty sequence with `weights` probability</td>
    </tr>
    <tr>
        <td>`number.integer`</td>
        <td>
            <ul>
                <li>`a: <int>`</li>
                <li>`b: <int>`</li>
            </ul>
        </td>
        <td>`<int>`</td>
        <td>Return random integer in range [a, b]</td>
    </tr>
    <tr>
        <td>`number.floating`</td>
        <td>
            <ul>
                <li>`a: <float>`</li>
                <li>`b: <float>`</li>
            </ul>
        </td>
        <td>`<float>`</td>
        <td>Return random floating point number in range [a, b]</td>
    </tr>
    <tr>
        <td>`number.gauss`</td>
        <td>
            <ul>
                <li>`mu: <float>`</li>
                <li>`sigma: <float>`</li>
            </ul>
        </td>
        <td>`<float>`</td>
        <td>Return random floating point number from Gaussian distribution</td>
    </tr>
    <tr>
        <td>`string.letters_lowercase`</td>
        <td>
            <ul>
                <li>`size: <int>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return string of specified `size` that contains random ASCII lowercase letters</td>
    </tr>
    <tr>
        <td>`string.letters_uppercase`</td>
        <td>
            <ul>
                <li>`size: <int>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return string of specified `size` that contains random ASCII uppercase letters</td>
    </tr>
    <tr>
        <td>`string.letters`</td>
        <td>
            <ul>
                <li>`size: <int>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return string of specified `size` that contains random ASCII letters</td>
    </tr>
    <tr>
        <td>`string.digits`</td>
        <td>
            <ul>
                <li>`size: <int>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return string of specified `size` that contains random digits characters</td>
    </tr>
    <tr>
        <td>`string.punctuation`</td>
        <td>
            <ul>
                <li>`size: <int>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return string of specified `size` that contains random ASCII punctuation characters</td>
    </tr>
    <tr>
        <td>`string.hex`</td>
        <td>
            <ul>
                <li>`size: <int>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return string of specified `size` that contains random hex characters</td>
    </tr>
    <tr>
        <td>`network.ip_v4`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random IPv4 address</td>
    </tr>
    <tr>
        <td>`network.ip_v4_private_a`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random private IPv4 address of Class A</td>
    </tr>
    <tr>
        <td>`network.ip_v4_private_b`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random private IPv4 address of Class B</td>
    </tr>
    <tr>
        <td>`network.ip_v4_private_c`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random private IPv4 address of Class C</td>
    </tr>
    <tr>
        <td>`network.ip_v4_public`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random public IPv4 address</td>
    </tr>
    <tr>
        <td>`network.mac`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random MAC address</td>
    </tr>
    <tr>
        <td>`crypto.uuid4`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return universally unique identifier of version 4</td>
    </tr>
    <tr>
        <td>`crypto.md5`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random MD5 hash</td>
    </tr>
    <tr>
        <td>`crypto.sha256`</td>
        <td>-</td>
        <td>`<str>`</td>
        <td>Return random SHA-256 hash</td>
    </tr>
    <tr>
        <td>`datetime.timestamp`</td>
        <td>
            <ul>
                <li>`start: <str>`</li>
                <li>`end: <str>`</li>
            </ul>
        </td>
        <td>`<str>`</td>
        <td>Return random timestamp in range [start; end]</td>
    </tr>
</table>

## Example usage

#### Example 1
```js
{{ module.rand.number.integer(0, 9) }}
```

Output:
```
1
```
