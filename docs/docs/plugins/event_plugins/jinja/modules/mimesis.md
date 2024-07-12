# Mimesis

## Description

[**Mimesis**](https://mimesis.name/en/latest/about.html#) (/mɪˈmiːsɪs) is a robust data generator for Python that can produce a wide range of fake data in various languages.

Template object: `module.mimesis`

## Provided objects

List data of providers: https://mimesis.name/en/latest/api.html

<table>
    <th>Object</th>
    <th>Description</th>
    <tr>
        <td>`enums`</td>
        <td>`mimesis.enums` module</td>
    </tr>
    <tr>
        <td>`random`</td>
        <td>`mimesis.random` module</td>
    </tr>
    <tr>
        <td>`brazil_spec`</td>
        <td>`BrazilSpecProvider` object</td>
    </tr>
    <tr>
        <td>`denmark_spec`</td>
        <td>`DenmarkSpecProvider` object</td>
    </tr>
    <tr>
        <td>`italy_spec`</td>
        <td>`ItalySpecProvider` object</td>
    </tr>
    <tr>
        <td>`netherlands_spec`</td>
        <td>`NetherlandsSpecProvider` object</td>
    </tr>
    <tr>
        <td>`poland_spec`</td>
        <td>`PolandSpecProvider` object</td>
    </tr>
    <tr>
        <td>`russia_spec`</td>
        <td>`RussiaSpecProvider` object</td>
    </tr>
    <tr>
        <td>`ukraine_spec`</td>
        <td>`UkraineSpecProvider` object</td>
    </tr>
    <tr>
        <td>`generic`</td>
        <td>`Generic` object with default locale</td>
    </tr>
    <tr>
        <td>`usa_spec`</td>
        <td>`USASpecProvider` object</td>
    </tr>
    <tr>
        <td>`cs`</td>
        <td>`Generic` object with `CS` locale</td>
    </tr>
    <tr>
        <td>`da`</td>
        <td>`Generic` object with `DA` locale</td>
    </tr>
    <tr>
        <td>`de`</td>
        <td>`Generic` object with `DE` locale</td>
    </tr>
    <tr>
        <td>`de_at`</td>
        <td>`Generic` object with `DE_AT` locale</td>
    </tr>
    <tr>
        <td>`de_ch`</td>
        <td>`Generic` object with `DE_CH` locale</td>
    </tr>
    <tr>
        <td>`el`</td>
        <td>`Generic` object with `EL` locale</td>
    </tr>
    <tr>
        <td>`en`</td>
        <td>`Generic` object with `EN` locale</td>
    </tr>
    <tr>
        <td>`en_au`</td>
        <td>`Generic` object with `EN_AU` locale</td>
    </tr>
    <tr>
        <td>`en_ca`</td>
        <td>`Generic` object with `EN_CA` locale</td>
    </tr>
    <tr>
        <td>`en_gb`</td>
        <td>`Generic` object with `EN_GB` locale</td>
    </tr>
    <tr>
        <td>`es`</td>
        <td>`Generic` object with `ES` locale</td>
    </tr>
    <tr>
        <td>`es_mx`</td>
        <td>`Generic` object with `ES_MX` locale</td>
    </tr>
    <tr>
        <td>`et`</td>
        <td>`Generic` object with `ET` locale</td>
    </tr>
    <tr>
        <td>`fa`</td>
        <td>`Generic` object with `FA` locale</td>
    </tr>
    <tr>
        <td>`fi`</td>
        <td>`Generic` object with `FI` locale</td>
    </tr>
    <tr>
        <td>`fr`</td>
        <td>`Generic` object with `FR` locale</td>
    </tr>
    <tr>
        <td>`hu`</td>
        <td>`Generic` object with `HU` locale</td>
    </tr>
    <tr>
        <td>`hr`</td>
        <td>`Generic` object with `HR` locale</td>
    </tr>
    <tr>
        <td>`is_`</td>
        <td>`Generic` object with `IS` locale</td>
    </tr>
    <tr>
        <td>`it`</td>
        <td>`Generic` object with `IT` locale</td>
    </tr>
    <tr>
        <td>`ja`</td>
        <td>`Generic` object with `JA` locale</td>
    </tr>
    <tr>
        <td>`kk`</td>
        <td>`Generic` object with `KK` locale</td>
    </tr>
    <tr>
        <td>`ko`</td>
        <td>`Generic` object with `KO` locale</td>
    </tr>
    <tr>
        <td>`nl`</td>
        <td>`Generic` object with `NL` locale</td>
    </tr>
    <tr>
        <td>`nl_be`</td>
        <td>`Generic` object with `NL_BE` locale</td>
    </tr>
    <tr>
        <td>`no`</td>
        <td>`Generic` object with `NO` locale</td>
    </tr>
    <tr>
        <td>`pl`</td>
        <td>`Generic` object with `PL` locale</td>
    </tr>
    <tr>
        <td>`pt`</td>
        <td>`Generic` object with `PT` locale</td>
    </tr>
    <tr>
        <td>`pt_br`</td>
        <td>`Generic` object with `PT_BR` locale</td>
    </tr>
    <tr>
        <td>`ru`</td>
        <td>`Generic` object with `RU` locale</td>
    </tr>
    <tr>
        <td>`sk`</td>
        <td>`Generic` object with `SK` locale</td>
    </tr>
    <tr>
        <td>`sv`</td>
        <td>`Generic` object with `SV` locale</td>
    </tr>
    <tr>
        <td>`tr`</td>
        <td>`Generic` object with `TR` locale</td>
    </tr>
    <tr>
        <td>`uk`</td>
        <td>`Generic` object with `UK` locale</td>
    </tr>
    <tr>
        <td>`zh`</td>
        <td>`Generic` object with `ZH` locale</td>
    </tr>
</table>



## Example usage

#### Example 1
```js
{{ module.mimesis.en.address.country() }}
```

Output:
```
Greenland
```

#### Example 2
```js
{% set gender = module.mimesis.enums.Gender.MALE %}
{{ module.mimesis.en.person.first_name(gender=gender) }}
```

Output:
```
Allan
```

#### Example 3
```js
{{ module.mimesis.fr.text.sentence() }}
```

Output:
```
Pour un observateur s’approchant d’une singularité, ce sont les effets de marée qui vont devenir importants.
```

#### Example 4
```js
{{ module.mimesis.russia_spec.ogrn() }}
```

Output:
```
1473799644504
```
