import { LitteraTranslated, LitteraTranslations } from '../typings';
/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export declare const useLittera: <T, K extends keyof T>(translations: LitteraTranslations<T>, locale?: string | undefined) => LitteraTranslated<T, K>;
export declare const makeTranslations: <T, K extends keyof T>(translations: T) => (locale?: string | undefined) => LitteraTranslated<T, K>;
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
