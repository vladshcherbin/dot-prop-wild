# Dot-prop-wild

Get value from object or array using dot path and wildcard.

## Installation

```bash
npm install dot-prop-wild
# or
yarn add dot-prop-wild
```

## Usage

This library is tested in Node 6 and up, if you are using this library in browser or in different Node version, you need to transpile ES6 code to your environment. The easiest way to do this is by using [Babel](https://babeljs.io/) with [@babel/preset-env preset](https://github.com/babel/babel/tree/master/packages/babel-preset-env).

```js
import get from 'dot-prop-wild'

const data = [null, 1, [{ name: 'Sam' }]]

get(data, '*.*.name')
```

## License

MIT
