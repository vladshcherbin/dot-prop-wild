import get from '../src'

const data = [null, 1, [{ name: 'Sam' }]]

console.log(get(data, '*.*.name'))
