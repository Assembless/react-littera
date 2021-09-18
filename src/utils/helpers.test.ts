import { throwInvalidLocale } from './helpers'

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
