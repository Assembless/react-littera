import * as React from "react";
import { LitteraContext } from "./LitteraProvider";
import { translate } from "./utils/translate";
import { validateLocale } from "./utils/methods";
import { ITranslations, TSetLocale, TValidateLocale, ITranslationsFunction, ITranslated } from "../types";
import { log } from "./utils/logger";

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
 *    }
 * }
 * 
 * const YourComponent = () => {
 *    const translated = useLittera(translations);
 * 
 *    return <h2>{translated.example}</h2>
 * }
 * @returns {ITranslated}
 */
export function useLittera<T extends ITranslations>(t: T | ((preset?: ITranslations) => T), l?: string): {[key in keyof T]: string} {
  const { locale, preset, locales=[] } = React.useContext(LitteraContext);
  
  const _translations = React.useMemo(() => typeof t === "function" ? {...t(preset)} : {...t}, [t, preset]);

  React.useEffect(() => {
    Object.keys(_translations).forEach(_key => {
      locales.forEach(_locale => {
        if(!_translations[_key][_locale]) {
          log("warn", `You are missing "${_key}" in ${_locale}.`);
        }
      });
    });
  }, [_translations]);

  return React.useMemo(() => translate(_translations, l || locale), [_translations, l, locale]);
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
 * @returns {Function} methods.translate - the core translation method.
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
    translate
  })
};
