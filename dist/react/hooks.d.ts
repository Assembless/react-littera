import { LitteraTranslated, LitteraTranslations } from '../typings';
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
export declare const makeTranslations: <T, K extends keyof T>(translations: LitteraTranslations<T>) => (locale?: string | undefined) => LitteraTranslated<T, K>;
/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export declare const useLittera: <T, K extends keyof T>(translations: LitteraTranslations<T>, locale?: string | undefined) => LitteraTranslated<T, K>;
declare type LitteraMethodsReturn = {
    readonly locale: string;
    readonly locales: string[];
    readonly setLocale: (locale: string) => void;
    readonly translate: <T, K extends keyof T>(translations: LitteraTranslations<T>, locale?: string) => LitteraTranslated<T, K>;
};
/**
 * @description React hook exposing methods for current context.
 * @category React
 */
export declare const useLitteraMethods: () => LitteraMethodsReturn;
export {};
