import * as React from 'react'
import { translate } from '../core/translate'
import { makeTranslations } from './hooks'
import { LitteraContextValue, LitteraTranslations } from '../typings'

export function createLittera<L extends ReadonlyArray<unknown>, P>(
  locales: L,
  preset: P
) {
  const context = React.createContext<LitteraContextValue<L, P>>({
    locale: locales[0] ?? 'en_US',
    locales: locales,
    setLocale: () => {},
    translate: <T, K extends keyof T>(
      translations: LitteraTranslations<T>,
      locale: K
    ) => translate<T, K>(translations, locale ?? 'en_US'),
    preset
  })

  return {
    LitteraContext: context,
    makeTranslations:
      <T, K extends keyof T>(translations: LitteraTranslations<T>) =>
      (locale?: K) =>
        makeTranslations<T, K>(translations)(locale)
  }
}

// export const LitteraContext = React.createContext<LitteraContextValue<any>>({
//   locale: 'en_US',
//   locales: ['en_US'],
//   setLocale: () => {},
//   translate: <T, K extends keyof T>(
//     translations: LitteraTranslations<T>,
//     locale?: string
//   ) => translate<T, K>(translations, locale ?? 'en_US'),
//   preset: {}
// })

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
export const LitteraService = function <T extends ReadonlyArray<unknown>, P>({
  children,
  initialLocale,
  locales,
  preset
}: {
  children: any
  initialLocale: T[number]
  locales: T
  preset: LitteraTranslations<P>
}) {
  const [locale, setLocale] = React.useState(
    initialLocale ?? locales[0] ?? 'en_US'
  )

  return (
    <LitteraContext.Provider
      value={{
        locale,
        setLocale,
        locales,
        translate: <T, K extends keyof T>(
          translations: LitteraTranslations<T>,
          locale?: string
        ) => translate<T, K>(translations, locale ?? 'en_US'),
        preset: preset ?? {}
      }}
    >
      {children}
    </LitteraContext.Provider>
  )
}
