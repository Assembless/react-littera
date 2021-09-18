import * as React from 'react'
import { LitteraContext } from './service'
import { translate } from '..'
import { throwInvalidLocale } from '../utils/helpers'
import { LitteraTranslated, LitteraTranslations } from '../typings'

/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export const useLittera = <T, K extends keyof T>(
  translations: LitteraTranslations<T>,
  locale?: string
): LitteraTranslated<T, K> => {
  const service = React.useContext(LitteraContext)
  const currentLocale = locale ?? service.locale

  React.useEffect(() => {
    if (locale) throwInvalidLocale(service.locales, locale)
  }, [locale])

  return React.useMemo(
    () => translate<T, K>(translations, currentLocale),
    [currentLocale]
  )
}

export const makeTranslations = <T, K extends keyof T>(
  translations: T
): ((locale?: string) => LitteraTranslated<T, K>) => {
  if (process.env.NODE_ENV !== 'production') {
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

  return (locale?: string) => {
    const service = React.useContext(LitteraContext)

    return useLittera<T, K>(translations, locale)
  }
}

type LitteraMethodsReturn = {
  readonly locale: string
  readonly locales: string[]
  readonly setLocale: (locale: string) => void
  readonly translate: <T, K extends keyof T>(
    translations: LitteraTranslations<T>,
    locale?: string
  ) => LitteraTranslated<T, K>
}

/**
 * @description React hook exposing methods for current context.
 * @category React
 */
export const useLitteraMethods = () => {
  const { setLocale, locale, locales } = React.useContext(LitteraContext)

  const handleLocaleChange = React.useCallback(
    (nextLocale: string) => {
      throwInvalidLocale(locales, nextLocale)

      setLocale(nextLocale)
    },
    [setLocale]
  )

  const translateFn = <T, K extends keyof T>(
    translations: LitteraTranslations<T>,
    l?: string
  ) => {
    const currentLocale = l ?? locale ?? locales[0]

    return translate<T, K>(translations, currentLocale)
  }

  return React.useMemo<LitteraMethodsReturn>(
    () => ({
      setLocale: handleLocaleChange,
      locale,
      locales,
      translate: translateFn
    }),
    [locale]
  )
}
