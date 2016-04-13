# is-null

> Checks if the given value is null. 

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/is-null/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/is-null/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/is-null)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/is-null/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/is-null)


## Install

```
$ npm install --save is-null 
```


## Usage

```js
var isNull = require('is-null');

isNull(null);     // => true

isNull(void 0);   // => false
isNull('abc');    // => false
isNull(123);      // => false
isNull(true);     // => false
isNull(false);    // => false
isNull({});       // => false
isNull([]);       // => false
isNull(NAN);      // => false
```

## Related

- [is-nil](https://github.com/bubkoo/is-nil) - Checks if the given value is null or undefined.
- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [is-window](https://github.com/bubkoo/is-window) - Checks if the given value is a window object.
- [is-array-like](https://github.com/bubkoo/is-array-like) - Checks if the given value is an array or an array-like object.
