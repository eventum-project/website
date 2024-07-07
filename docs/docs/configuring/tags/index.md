# Tags

For any input plugin you can optionally set tags. If `tags` field is provided with the list of tags, then it can be accessed in template using `tags` variable (by default).

## Example

In below configuration there are two Timer input plugins with different value of `seconds` parameter and tags list.
```yaml
input:
  - timer:
      seconds: 1
      count: 1
      repeat: true
// highlight-next-line
      tags: ["timer1"]
  - timer:
      seconds: 3
      count: 1
      repeat: true
// highlight-next-line
      tags: ["timer2", "yet another tag"]

event:
  params: { }
  samples: { }

  mode: all
  templates:
    - test:
        template: test.jinja

output:
  - stdout: { }
```

Content of template `test.jinja`:
```txt
Tags values is: {{ tags }}
```

Expected output:
```
Tags values is: ['timer1']
Tags values is: ['timer1']
Tags values is: ['timer1']
Tags values is: ['timer2', 'yet another tag']
Tags values is: ['timer1']
Tags values is: ['timer1']
Tags values is: ['timer1']
Tags values is: ['timer2', 'yet another tag']
...
```
