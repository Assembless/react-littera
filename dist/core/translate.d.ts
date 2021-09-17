import { LitteraTranslated, LitteraTranslations } from '../typings';
/**
 * Reduces a translations object, returning translations for the specified locale.
 * @category core
 * @param translations The translations object.
 * @param locale The locale to return.
 */
export declare const translate: <T, K extends keyof T>(translations: LitteraTranslations<T>, locale: string) => LitteraTranslated<T, K>;
