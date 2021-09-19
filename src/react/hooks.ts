import * as React from 'react'
import { LitteraContext } from './service'
import { translate } from '..'
import {
  deepMerge,
  throwInvalidLocale,
  warnMissingTranslations
} from '../utils/helpers'
import { LitteraTranslated, LitteraTranslations } from '../typings'

/**
 * Method accepting translations object and returning a React hook.
 * @param translations
 * @returns A React hook used to retrieve the translations.
 * @example
 * const translations = {
 *  'en_US': {
 *    'hello': 'Hello',
 *    'world': 'World'
 *  },
 *  'fr_FR': {
 *    'hello': 'Bonjour',
 *    'world': 'Monde'
 *  }
 * };
 * const useLittera = makeTranslations(translations);
 *
 * const Component () => {
 *  const translated = useLittera();
 *
 *  return <div>
 *    <h1>{translated.hello}</h1>
 *    <h2>{translated.world}</h2>
 *  </div>
 * }
 */
export const makeTranslations = <T, K extends keyof T>(
  translations: LitteraTranslations<T>
) => {
  warnMissingTranslations(translations)

  return (locale?: K) => {
    const service = React.useContext(LitteraContext)

    const translationsWithPreset = React.useMemo(
      () => deepMerge(service.preset, translations),
      [service.locale]
    ) as T & typeof service.preset

    return useLittera<T & typeof service.preset, K>(
      translationsWithPreset,
      locale
    )
  }
}

/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export const useLittera = <T, K extends keyof T>(
  translations: LitteraTranslations<T>,
  locale?: K
): LitteraTranslated<T, K> => {
  const service = React.useContext(LitteraContext)
  const currentLocale: K = locale ?? service.locale

  React.useEffect(() => {
    if (locale) throwInvalidLocale(service.locales, locale as unknown as string)
  }, [locale])

  return React.useMemo(
    () => translate<T, K>(translations, currentLocale),
    [currentLocale]
  )
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
    overrideLocale?: string
  ) => {
    const currentLocale = overrideLocale ?? locale ?? locales[0]

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
