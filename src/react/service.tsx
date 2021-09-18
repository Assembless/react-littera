import * as React from 'react'
import { translate } from '../core/translate'
import { LitteraContextValue, LitteraTranslations } from '../typings'

export const LitteraContext = React.createContext<LitteraContextValue<any>>({
  locale: 'en_US',
  locales: ['en_US'],
  setLocale: () => {},
  translate: <T, K extends keyof T>(
    translations: LitteraTranslations<T>,
    locale?: string
  ) => translate<T, K>(translations, locale ?? 'en_US')
})

/**
 * Context Provider for Littera
 * @category React
 * @public
 * @param initialLocale Initial active locale.
 * @param preset Set of predefined translations.
 * @param setLocale Callback called when the locale changes.
 * @param pattern Locale pattern.
 * @example
 * // Setting up Littera provider.
 *
 * const App = () => {
 *    return <LitteraService locales={["en_US", "de_DE"]}>
 *      ...
 *    </LitteraService>
 * }
 */
export const LitteraService = function <T extends ReadonlyArray<unknown>>({
  children,
  initialLocale,
  locales
}: {
  children: any
  initialLocale: T[number]
  locales: T
}) {
  const [locale, setLocale] = React.useState(
    initialLocale ?? locales[0] ?? 'en_US'
  )

  return (
    <LitteraContext.Provider
      value={{ locale, setLocale, locales } as LitteraContextValue<T>}
    >
      {children}
    </LitteraContext.Provider>
  )
}
