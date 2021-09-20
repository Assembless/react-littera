import * as React from 'react'
import { makeTranslations, useLitteraMethods } from './hooks'
import { LitteraContextValue, LitteraTranslations } from '../typings'

/**
 * @description Function initializing Littera. Creates a context and exposes Provider and other methods.
 * @param locales List of supported languages.
 * @param preset Global translations.
 * @returns The context, provider and hooks.
 */
export function createLittera<L extends ReadonlyArray<string>, P>(
  locales: L,
  preset: P
) {
  const context = React.createContext<LitteraContextValue<L, P>>({
    locale: (locales[0] ?? 'en_US') as L[number],
    locales: locales as L,
    setLocale: () => {},
    preset
  })

  return {
    LitteraContext: context,
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
     *    return <LitteraService initialLocale={"en_US"}>
     *      ...
     *    </LitteraService>
     * }
     */
    LitteraService: ({
      children,
      initialLocale
    }: {
      children: React.ReactNode
      initialLocale: L[number]
    }) => (
      <LitteraService<L, P>
        initialLocale={initialLocale}
        preset={preset}
        locales={locales}
        Context={context}
      >
        {children}
      </LitteraService>
    ),
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
    makeTranslations:
      <T, Tp extends T & P, TpK extends keyof Tp>(
        translations: LitteraTranslations<T>
      ) =>
      (
        locale?: TpK
      ): {
        [key in keyof Tp[TpK]]: Tp[TpK][key]
      } =>
        // @ts-ignore
        makeTranslations<L, P>(context)<Tp, TpK>(translations)(locale),
    useLitteraMethods: useLitteraMethods<L, P>(context)
  }
}

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
 *    return <LitteraService initialLocale={"en_US"}>
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
        preset: preset ?? {}
      }}
    >
      {children}
    </Context.Provider>
  )
}
