import {
  ITranslations, ITranslation,
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
export function translate<T extends ITranslations, K extends keyof T>(
  translations: T,
  locale: string
) {
  if(typeof locale !== "string") throw new Error(`Expected a string for locale, got: ${typeof locale}`)
  if(typeof translations !== "object" || Array.isArray(translations)) throw new Error(`Expected an object for translations, got: ${Array.isArray(translations) ? "array" : typeof translations}`);

  return (Object.keys(translations) as Array<keyof typeof translations>)
    .reduce((a, b: K) => {
      if(typeof translations[b] === "function")
        return (a[b] = (...args: (string | number)[]) => translate({[b]: (translations[b] as Function)(...args)} as any, locale)[b] as string, a)
      else 
        return (a[b]=translations[b][locale], a);
    }, {} as any) as {[key in K]: typeof translations[K] extends {[key: string]: string} ? string : ITranslatedVariableFn<typeof translations[K]>};
};

type ITranslatedVariableFn<T extends ITranslation> = (...args: Parameters<T extends ((...args: (string | number)[]) => {[key: string]: string}) ? T : ((...args: (string | number)[]) => string)>) => string;