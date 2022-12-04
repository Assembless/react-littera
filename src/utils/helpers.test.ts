import { deepMerge, throwInvalidLocale } from './helpers'

describe('throwInvalidLocale', () => {
  it('should not throw if locale is included in locales', () => {
    expect(throwInvalidLocale(['en_US', 'de_DE', 'pl_PL'], 'pl_PL')).toBe(true)
  })
  it('should throw if locale is included in locales', () => {
    expect(() => throwInvalidLocale(['en_US', 'de_DE'], 'pl_PL')).toThrowError(
      'Invalid locale provided. Expected [en_US, de_DE], got pl_PL'
    )
  })
})

describe('deepMerge', () => {
  test('merges two objects', () => {
    const obj1 = {
      a: 1,
      b: 2,
      c: 3
    }
    const obj2 = {
      b: 4,
      c: 5,
      d: 6
    }
    const expected = {
      a: 1,
      b: 4,
      c: 5,
      d: 6
    }
    expect(deepMerge(obj1, obj2)).toEqual(expected)
  })

  test('merges multiple objects', () => {
    const obj1 = {
      a: 1,
      b: 2,
      c: 3
    }
    const obj2 = {
      b: 4,
      c: 5,
      d: 6
    }
    const obj3 = {
      d: 7,
      e: 8,
      f: 9
    }
    const expected = {
      a: 1,
      b: 4,
      c: 5,
      d: 7,
      e: 8,
      f: 9
    }
    expect(deepMerge(obj1, obj2, obj3)).toEqual(expected)
  })

  test('handles nested objects', () => {
    const obj1 = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    }
    const obj2 = {
      b: 5,
      c: {
        e: 6,
        f: 7
      },
      g: 8
    }
    const expected = {
      a: 1,
      b: 5,
      c: {
        d: 3,
        e: 6,
        f: 7
      },
      g: 8
    }
    expect(deepMerge(obj1, obj2)).toEqual(expected)
  })
})
