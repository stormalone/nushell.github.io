---
title: split column
layout: command
version: 0.60.0
usage: |
  splits contents across multiple columns via the separator.
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> split column (separator) ...rest --collapse-empty```

## Parameters

 -  `separator`: the character that denotes what separates columns
 -  `...rest`: column names to give the new columns
 -  `--collapse-empty`: remove empty columns

## Examples

Split a string into columns by the specified separator
```shell
> echo 'a--b--c' | split column '--'
```

Split a string into columns of char and remove the empty columns
```shell
> echo 'abc' | split column -c ''
```