import * as React from 'react';
import { LitteraContextValue, LitteraTranslations } from '../typings';
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
export declare const makeTranslations: <L, P>(LitteraContext: React.Context<LitteraContextValue<L, P>>) => <T, K extends keyof T>(translations: LitteraTranslations<T>) => (locale?: K | undefined) => import("../typings").LitteraTranslated<T, K>;
/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export declare const useLittera: <L, P>(LitteraContext: React.Context<LitteraContextValue<L, P>>) => <T, K extends keyof T>(translations: LitteraTranslations<T>, locale?: K | undefined) => import("../typings").LitteraTranslated<T, K>;
/**
 * @description React hook exposing methods for current context.
 * @category React
 */
export declare const useLitteraMethods: <L, P>(LitteraContext: React.Context<LitteraContextValue<L, P>>) => () => {
    setLocale: (nextLocale: string) => void;
    locale: L[number];
    locales: L;
};
