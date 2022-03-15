---
title: from json
layout: command
version: 0.59.1
usage: |
  Convert from json to structured data
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> from json --objects```

## Parameters

 -  `--objects`: treat each line as a separate value

## Examples

Converts json formatted string to table
```shell
> '{ "a": 1 }' | from json
```

Converts json formatted string to table
```shell
> '{ "a": 1, "b": [1, 2] }' | from json
```