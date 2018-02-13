import get from '../src/index'

describe('Dot-prop-wild', () => {
  test('should pass adapted dot-prop package tests', () => {
    const f1 = { foo: { bar: 1 } }
    const f2 = { foo: null }
    f1[''] = 'foo'

    expect(get(f1)).toEqual(f1)
    expect(get(f1, '')).toEqual({ path: '', value: 'foo' })
    expect(get(f1, 'foo')).toEqual({ path: 'foo', value: f1.foo })
    expect(get(f2, 'foo.bar')).toEqual({ path: 'foo.bar', value: undefined })
    expect(get({ foo: 1 }, 'foo')).toEqual({ path: 'foo', value: 1 })
    expect(get({ foo: null }, 'foo')).toEqual({ path: 'foo', value: null })
    expect(get({ foo: undefined }, 'foo')).toEqual({ path: 'foo', value: undefined })
    expect(get({ foo: { bar: true } }, 'foo.bar')).toEqual({ path: 'foo.bar', value: true })
    expect(get({ foo: { bar: { baz: true } } }, 'foo.bar.baz')).toEqual({ path: 'foo.bar.baz', value: true })
    expect(get({ foo: { bar: { baz: null } } }, 'foo.bar.baz')).toEqual({ path: 'foo.bar.baz', value: null })
    expect(get({ foo: { bar: 'a' } }, 'foo.fake')).toEqual({ path: 'foo.fake', value: undefined })
    expect(get({ foo: { bar: 'a' } }, 'foo.fake.fake2')).toEqual({ path: 'foo.fake.fake2', value: undefined })
    expect(get({ '\\': true }, '\\')).toEqual({ path: '\\', value: true })
    expect(get({ '\\foo': true }, '\\foo')).toEqual({ path: '\\foo', value: true })
    expect(get({ 'bar\\': true }, 'bar\\')).toEqual({ path: 'bar\\', value: true })
    expect(get({ 'foo\\bar': true }, 'foo\\bar')).toEqual({ path: 'foo\\bar', value: true })
    expect(get({ '\\.foo': true }, '\\\\.foo')).toEqual({ path: '\\.foo', value: true })
    expect(get({ 'bar\\.': true }, 'bar\\\\.')).toEqual({ path: 'bar\\.', value: true })
    expect(get({ 'foo\\.bar': true }, 'foo\\\\.bar')).toEqual({ path: 'foo\\.bar', value: true })
    expect(get({ foo: 1 }, 'foo.bar')).toEqual({ path: 'foo.bar', value: undefined })
    expect(get({ 'foo.baz': { bar: true } }, 'foo\\.baz.bar')).toEqual({ path: 'foo.baz.bar', value: true })
    expect(get({ 'fo.ob.az': { bar: true } }, 'fo\\.ob\\.az.bar')).toEqual({ path: 'fo.ob.az.bar', value: true })
    expect(get(null, 'foo.bar')).toEqual(null)
    expect(get('foo', 'foo.bar')).toEqual('foo')
    expect(get([], 'foo.bar')).toEqual({ path: 'foo.bar', value: undefined })
    expect(get(undefined, 'foo.bar')).toEqual(undefined)
  })
})
