import * as React from "react";
import { LitteraContext } from "./LitteraProvider";
import { translate, translateSingle } from "./utils/translate";
import { validateLocale, reportMissing } from "./utils/methods";
import { ITranslations, TSetLocale, TValidateLocale, ITranslated, TTranslationsArg, ITranslationsFunction, ITranslationsPreset } from "../types";

/**
 * Hook returns translations for the active locale.
 * @category Hooks
 * @param {ITranslations} translations Translations
 * @param {string} locale Locale in case you need translations for a not active locale.
 * @example
 * // Example of using translations in a function component.
 * 
 * const translations = {
 *    example: {
 *      en_US: "Example",
 *      de_DE: "Beispiel"
 *    },
 *    hello: (name: string) => ({
 *      en_US: `Hello ${name}`,
 *      de_DE: `Hallo ${name}`
 *    }),
 *    news: [
 *      {
 *        en_US: "The spaghetti code monster ate our homework.",
 *        de_DE: "Das Spaghetti-Code-Monster aß unsere Hausaufgaben."
 *      }
 *    ]
 * }
 * 
 * const YourComponent = () => {
 *    const translated = useLittera(translations);
 * 
 *    return <>
 *        <h2>{translated.example} - {translated.hello("Mike")}</h2>
 *        <p>{translated.news[0]}</p>
 *    </>
 * }
 * @returns {ITranslated}
 */
export function useLittera<T extends ITranslations<T>>(t: TTranslationsArg<T, ITranslationsPreset<typeof preset>>, l?: string): ITranslated<T> {
  const context = React.useContext(LitteraContext);

  if (context.locale === null && !l)
    throw new Error("Your app has to be wrapped with the LitteraProvider to work properly. Alternatively you can provide the language argument.");

  const locale = l ?? context.locale ?? "en_US";
  const preset = context.preset ?? {};
  const locales = context.locales ?? [locale];
  
  const translations = React.useMemo(() => isTransFn<T, ITranslationsPreset<typeof preset>>(t) ? { ...t(preset) } : { ...t }, [t, preset]) as T;

  React.useEffect(() => {
    reportMissing(translations, locales)
  }, [translations]);

  return React.useMemo(() => translate<T, keyof T>(translations, locale), [translations, locale]) as ITranslated<T>;
}

function isTransFn<T extends ITranslations<T>, P>(value: unknown): value is ITranslationsFunction<T, P> {
  return typeof (value as ITranslationsFunction<T, P>) === "function";
}

/**
 * Hook exposes an object with global translation methods and variables.
 * @category Hooks
 * @example
 * // Example of accessing littera methods and variables in a function component.
 *
 * const YourComponent = () => {
 *    const { setLocale, locale } = useLittera(translations);
 * 
 *    const handleClick = () => {
 *      setLocale("de_DE");
 *    }
 * 
 *    return <h2 onClick={handleClick}>Current language: {locale}</h2>
 * }
 * @returns {Object} methods
 * @returns {string} methods.locale - active locale.
 * @returns {string[]} methods.locales - all locales.
 * @returns {Function} methods.setLocale - changes the active locale.
 * @returns {Function} methods.validateLocale - method validates the locale format using a pattern.
 * @returns {ITranslations} methods.preset - global preset.
 * @returns {Function} methods.translate - the core translations method.
 * @returns {Function} methods.translateSingle - the core single translation method.
 */
export function useLitteraMethods() {
  const { locale, preset, setLocale, pattern, locales } = React.useContext(LitteraContext);

  const _setLocale:TSetLocale = React.useCallback((locale: string) => {
    if(!_validateLocale(locale)) throw new Error(`Locale does not match the pattern.`);
    
    setLocale(locale);
  }, [locale]);

  const _validateLocale:TValidateLocale = React.useCallback(validateLocale, [pattern]);
  
  return ({
    locale,
    locales,
    setLocale: _setLocale,
    validateLocale: _validateLocale,
    preset,
    translate,
    translateSingle
  })
};