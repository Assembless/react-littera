import { LitteraTranslated, LitteraTranslations } from '../typings'

/**
 * Reduces a translations object, returning translations for the specified locale.
 * @category core
 * @param translations The translations object.
 * @param locale The locale to return.
 */
export const translate = <T>(
  translations: LitteraTranslations<T>,
  locale: keyof T
): LitteraTranslated<T, keyof T> => translations[locale]
