import { ITranslated, ISingleTranslated } from "../../types";
import { isVariableFunction } from "./methods";

/**
 * Returns object with translated values based on locale.
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
 *    },
 *    hello: (name: string) => ({
 *      en_US: `Hello ${name}`,
 *      de_DE: `Hallo ${name}`
 *    })
 * }
 * 
 * const translated = translate(translations, "de_DE");
 * 
 * translated.example // => "Beispiel"
 * translated.hello("Mike") // => "Hallo Mike"
 * @returns {ITranslated}
 */
export function translate<T, K extends keyof T>(
  translations: T,
  locale: string
) {
  if (typeof locale !== "string")
    throw new Error(`Expected a string for locale, got: ${typeof locale}`);
  if (typeof translations !== "object" || Array.isArray(translations))
    throw new Error(
      `Expected an object for translations, got: ${
        Array.isArray(translations) ? "array" : typeof translations
      }`
    );

  let translated = {} as any;

  for (var i = 0; i < Object.keys(translations).length; i++) {
    const key = Object.keys(translations)[i] as K;
    const value = translations[key] as T[K];

    translated[key] = translateSingle(value, locale);
  }

  return translated as ITranslated<T>;
}

/**
 * Returns translated string based on locale.
 * @param {ITranslation} translation
 * @param {string} locale 
 * @example
 * // Example of utilizing a single translation.
 * 
 * const translations = {
 *    example: {
 *      en_US: "Example",
 *      de_DE: "Beispiel"
 *    },
 *    hello: (name: string) => ({
 *      en_US: `Hello ${name}`,
 *      de_DE: `Hallo ${name}`
 *    })
 * }
 * 
 * const translatedExample = translateSingle(translations.example, "de_DE");
 * const translatedExample = translateSingle(translations.hello("Mike"), "de_DE");
 * 
 * translatedExample // => "Beispiel"
 * translatedHello("Mike") // => "Hallo Mike"
 * @returns {ISingleTranslated}
 */
export function translateSingle<T>(translation: T, locale: string) {
  if (isVariableFunction(translation))
    return ((...args: Parameters<typeof translation>) => translation(...args)[locale]) as ISingleTranslated<T>;

  return translation[locale] as ISingleTranslated<T>;
}