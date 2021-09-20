import * as React from 'react'
import { translate } from '..'
import {
  deepMerge,
  throwInvalidLocale,
  warnMissingTranslations
} from '../utils/helpers'
import { LitteraContextValue, LitteraTranslations } from '../typings'

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
export const makeTranslations =
  <L, P>(LitteraContext: React.Context<LitteraContextValue<L, P>>) =>
  <T, K extends keyof T>(translations: LitteraTranslations<T>) => {
    warnMissingTranslations(translations)

    return (locale?: K) => {
      const service = React.useContext(LitteraContext)

      const translationsWithPreset = React.useMemo(
        () => deepMerge(service.preset, translations),
        [service.locale]
      ) as T

      return useLittera<L, P>(LitteraContext)<T, K>(
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
export const useLittera =
  <L, P>(LitteraContext: React.Context<LitteraContextValue<L, P>>) =>
  <T, K extends keyof T>(translations: LitteraTranslations<T>, locale?: K) => {
    const service = React.useContext(LitteraContext)
    const currentLocale = (locale ?? service.locale) as K

    React.useEffect(() => {
      if (locale)
        throwInvalidLocale(
          service.locales as unknown as string[],
          locale as unknown as string
        )
    }, [locale])

    return React.useMemo(
      () => translate<T, K>(translations, currentLocale),
      [currentLocale]
    )
  }

/**
 * @description React hook exposing methods for current context.
 * @category React
 */
export const useLitteraMethods =
  <L, P>(LitteraContext: React.Context<LitteraContextValue<L, P>>) =>
  () => {
    const { setLocale, locale, locales } = React.useContext(LitteraContext)

    const handleLocaleChange = React.useCallback(
      (nextLocale: string) => {
        throwInvalidLocale(locales as unknown as string[], nextLocale)

        setLocale(nextLocale)
      },
      [setLocale]
    )

    /*     const translateFn = <T, K extends keyof T>(
      translations: LitteraTranslations<T>,
      overrideLocale?: string
    ) => {
      const currentLocale = overrideLocale ?? locale ?? locales[0]

      // @ts-ignore
      return translate<T, K>(translations, currentLocale)
    } */

    return React.useMemo(
      () => ({
        setLocale: handleLocaleChange,
        locale,
        locales
      }),
      [locale]
    )
  }
