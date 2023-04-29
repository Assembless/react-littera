import * as React from 'react'
import { makeTranslations, useLitteraMethods, useLitteraRemote } from './hooks'
import { LitteraContextValue, LitteraRemoteOptions } from '../typings'
import { parseRemoteOptions } from '../utils/remote';
import { SWRConfig } from 'swr';

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // We still use the map for write & read for performance.
  return map
}

/**
 * @description Function initializing Littera. Creates a context and exposes Provider and other methods.
 * @param locales List of supported languages.
 * @param preset Global translations.
 * @returns The context, provider and hooks.
 */
export function createLittera<L extends ReadonlyArray<string>, P>(
  locales: L,
  preset: P,
) {
  const contextState: LitteraContextValue<L, P> = {
    locale: (locales[0] ?? 'en_US') as L[number],
    locales: locales as L,
    setLocale: () => { },
    preset,
    remote: undefined
  };

  const context = React.createContext(contextState);

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
      initialLocale,
      remote
    }: {
      children: React.ReactNode
      initialLocale: L[number],
      remote?: LitteraRemoteOptions<P>,
    }) => {
      const [locale, setLocale] = React.useState(
        initialLocale ?? locales[0] ?? 'en_US'
      )
      const ContextProvider = context.Provider

      return (
        // @ts-ignore
        <SWRConfig value={{ provider: localStorageProvider }}>
          <ContextProvider
            value={{
              locale,
              setLocale,
              locales,
              preset,
              remote: parseRemoteOptions<P>(remote, locale)
            }}
          >
            {children}
          </ContextProvider>
        </SWRConfig>
      )
    },
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
      <T, Tp extends T & P, TpK extends keyof Tp>(translations: {
        [key in keyof T]: T[key]
      }) =>
        (
          locale?: TpK
        ): {
            [key in keyof Tp[TpK]]: Tp[TpK][key]
          } =>
          // @ts-ignore
          makeTranslations<L, P>(context)<Tp, TpK>(translations)(locale),
    /**
     * @description React hook exposing methods for current context.
     * @category React
     */
    useLitteraMethods: useLitteraMethods<L, P>(context),
    /**
     * @description React hook for translating a component from remote source.
     * @category React
     * @param path Path to the remote source.
     * @param locale Optional locale to translate to. Defaults to the current locale.
     * @returns The translations object for the specified locale.
     * @example
     * const Component = () => {
     *      const translated = useLitteraRemote("account/personal");
     * 
     *      return <div>
     *           <h1>{translated.firstName}</h1>
     *           <h2>{translated.age}</h2>
     *      </div>
     * }
     */
    useLitteraRemote: useLitteraRemote<L, P>(context)
  }
}
