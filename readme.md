# Dot-prop-wild

Get value from object or array using dot path and wildcard.

## Installation

```bash
npm install dot-prop-wild
# or
yarn add dot-prop-wild
```

## Usage

```js
import get from 'dot-prop-wild'

const data = [null, 1, [{ name: 'Sam' }]]

get(data, '*.*.name')
```

## License

MIT
