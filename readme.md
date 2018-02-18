# Dot-prop-wild

Get value from object or array using dot path and wildcard.

## Installation

```bash
npm install dot-prop-wild
# or
yarn add dot-prop-wild
```

## Usage

This library is written using ES6, in order to use it in your project it is advised to transpile it to your environment. The easiest way to do this is by using [Babel](https://babeljs.io) with [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env).

```js
import get from 'dot-prop-wild'

const data = [null, 1, [{ name: 'Sam' }]]

get(data, '*.*.name')
```

## License

MIT
