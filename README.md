# [Static Land](https://github.com/rpominov/static-land) Stream type for [Most](https://github.com/cujojs/most)

## Installation

```sh
npm install most-static-land
```

```js
// modern JavaScritp
import Stream from 'most-static-land'

// classic JavaScript
var Stream = require('most-static-land')
```

## Usage

`Stream` is a [Static Land type](https://github.com/rpominov/static-land/blob/master/docs/spec.md#type)
that supports `Semigroup`, `Monoid`, `Functor`, `Apply`, `Applicative`, `Chain`, and `Monad`.

```js
import {observe} from 'most'
import Stream from 'most-static-land'

const stream = Stream.map(x => x * 3, Stream.of(2))

observe(x => {
  // ...
}, stream)
```
