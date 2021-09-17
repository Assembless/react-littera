import { LitteraTranslated, LitteraTranslations } from '../typings';
/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export declare const useLittera: <T, K extends keyof T>(translations: LitteraTranslations<T>, locale?: string | undefined) => LitteraTranslated<T, K>;
export declare const useLitteraMethods: () => {
    setLocale: (locale: string) => void;
    locale: string;
};
