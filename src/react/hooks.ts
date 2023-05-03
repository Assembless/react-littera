import * as React from 'react'
import { translate } from '..'
import { throwInvalidLocale, raportMissingTranslations } from '../utils/helpers'
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
    raportMissingTranslations(translations)

    return (locale?: K) => {
      const service = React.useContext(LitteraContext)

      const presetTranslated = React.useMemo(
        () =>
          translate(
            service.preset,
            (locale ?? service.locale) as unknown as keyof P
          ),
        [locale ?? service.locale]
      )

      return {
        ...presetTranslated,
        ...useLittera<L, P>(LitteraContext)<T, K>(translations, locale)
      }
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
      () => translate<T>(translations, currentLocale),
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

    return React.useMemo(
      () => ({
        setLocale: handleLocaleChange,
        locale,
        locales
      }),
      [locale]
    )
  }
