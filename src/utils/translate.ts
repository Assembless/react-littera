import {
  ITranslations,
} from "../../types";

/**
 * Returns reduced object based on locale.
 * @category Core
 * @param {ITranslations} translations
 * @param {string} locale
 * @example
 * // Example of using translations.
 * 
 * const translations = {
 *    example: {
 *      en_US: "Example",
 *      de_DE: "Beispiel"
 *    }
 * }
 * 
 * translate(translations, "de_DE"); // => { example: "Beispiel" }
 * @returns {ITranslated}
 */
export function translate<T extends ITranslations, K extends keyof T>(
  translations: T,
  locale: string
) {
  if(typeof locale !== "string") throw new Error(`Expected a string for locale, got: ${typeof locale}`)
  if(typeof translations !== "object" || Array.isArray(translations)) throw new Error(`Expected an object for translations, got: ${Array.isArray(translations) ? "array" : typeof translations}`);

  return (Object.keys(translations) as Array<keyof typeof translations>).reduce((a, b: K) => {
    return (a[b]=translations[b][locale], a);
  }, {} as {[key in K]: string});
};