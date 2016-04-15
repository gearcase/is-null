# is-null

> Checks if the given value is null. 

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/is-null/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/is-null/master.svg?style=flat-square)](https://travis-ci.org/gearcase/is-null)
[![coverage:?](https://img.shields.io/coveralls/gearcase/is-null/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/is-null)


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

- [is-nil](https://github.com/gearcase/is-nil) - Checks if the given value is null or undefined.
- [is-window](https://github.com/gearcase/is-window) - Checks if the given value is a window object.
- [is-native](https://github.com/gearcase/is-native) - Checks if the given value is a native function.
- [is-array-like](https://github.com/gearcase/is-array-like) - Checks if the given value is an array or an array-like object.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/gearcase/is-null/issues/new).
