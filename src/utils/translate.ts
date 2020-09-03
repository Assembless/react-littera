import {
  ITranslations, ITranslation, ITranslationVarFn, ITranslated,
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

    if (isVarFn(value))
      translated[key] = (...args: Parameters<typeof value>) =>
        value(...args)[locale];
    else if (isSimpleObj(value)) translated[key] = value[locale];
  }

  return translated as ITranslated<T>;
}


function isVarFn(value: unknown): value is ITranslationVarFn {
  return typeof (value as ITranslationVarFn) === "function";
}
function isSimpleObj(value: unknown): value is ITranslation {
  return typeof (value as ITranslation) === "object";
}