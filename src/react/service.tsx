import * as React from 'react'
import { makeTranslations, useLitteraMethods } from './hooks'
import { LitteraContextValue, LitteraTranslations } from '../typings'

export function createLittera<L extends ReadonlyArray<string>, P>(
  locales: L,
  preset: P
) {
  const context = React.createContext<LitteraContextValue<L, P>>({
    locale: (locales[0] ?? 'en_US') as L[number],
    locales: locales as L,
    setLocale: () => {},
    // translate: <T extends {[key in L]: T[key]}, K extends keyof T>(
    //   translations: LitteraTranslations<T>,
    //   locale: K
    // ) => translate<T, K >(translations, locale ?? 'en_US'),
    preset
  })

  return {
    LitteraContext: context,
    LitteraService: ({ children, initialLocale }: any) => (
      <LitteraService<L, P>
        initialLocale={initialLocale}
        preset={preset}
        locales={locales}
        Context={context}
      >
        {children}
      </LitteraService>
    ),
    makeTranslations:
      <T, Tp extends T & P, TpK extends keyof Tp>(translations: {
        [key in keyof T]: T[key]
      }) =>
      (
        locale?: keyof TpK
      ): {
        [key in keyof Tp[TpK]]: Tp[TpK][key]
      } =>
        // @ts-ignore
        makeTranslations<L, P>(context)<Tp, TpK>(translations)(locale),
    useLitteraMethods: useLitteraMethods<L, P>(context)
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
export const LitteraService = function <L extends ReadonlyArray<unknown>, P>({
  children,
  initialLocale,
  locales,
  preset,
  Context
}: {
  children: any
  initialLocale: L[number]
  locales: L
  preset: LitteraTranslations<P>
  Context: React.Context<LitteraContextValue<L, P>>
}) {
  const [locale, setLocale] = React.useState(
    initialLocale ?? locales[0] ?? 'en_US'
  )

  return (
    <Context.Provider
      value={{
        locale,
        setLocale,
        locales,
        // translate: <T, K extends keyof T>(
        //   translations: LitteraTranslations<T>,
        //   locale?: string
        // ) => translate<T, K>(translations, locale ?? 'en_US'),
        preset: preset ?? {}
      }}
    >
      {children}
    </Context.Provider>
  )
}
