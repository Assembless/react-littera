import { LitteraTranslations } from '../typings'

/**
 * Throws an error if the given locale is not contained in the list of locales.
 * @param locales The list of locales.
 * @param locale The locale to check.
 * @returns True if the locale is contained, throw error otherwise.
 */
export const throwInvalidLocale = (locales: string[], locale: string) => {
  if (!locales.includes(locale))
    throw new Error(
      `Invalid locale provided. Expected [${locales.join(', ')}], got ${locale}`
    )

  return true
}

/**
 * Compares translations for each locale and warns about missing.
 * Disabled for 'production' environment.
 * @param translations The translations object.
 */
export const raportMissingTranslations = <T>(
  translations: LitteraTranslations<T>
) => {
  if (process.env.NODE_ENV === 'production') return

  const keys: string[] = []
  Object.keys(translations).forEach((locale) => {
    Object.keys(translations[locale]).forEach((key) => {
      if (!keys.includes(key)) keys.push(key)
    })

    keys.forEach((key) => {
      // console.warn if key is missing in a locale.
      if (!Object.keys(translations[locale]).includes(key)) {
        console.warn(`Key ${key} is missing in locale ${locale}`)
      }
    })
  })
}

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function deepMerge(target: any, ...sources: any[]): any {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        deepMerge(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return deepMerge(target, ...sources)
}
