import * as React from "react";
import { LitteraContext } from "./LitteraProvider";
import { translate } from "./utils/translate";
import { validateLocale, lookForMissingKeys } from "./utils/methods";
import { ITranslations, TSetLocale, TValidateLocale, TTranslationsArg, TTranslatedArg } from "../types";

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
 *    })
 * }
 * 
 * const YourComponent = () => {
 *    const translated = useLittera(translations);
 * 
 *    return <h2>{translated.example} - {translated.hello("Mike")}</h2>
 * }
 * @returns {ITranslated}
 */
export function useLittera<T extends ITranslations>(t: TTranslationsArg<T>, l?: string): TTranslatedArg<T> {
  const { locale, preset, locales=[] } = React.useContext(LitteraContext);
  
  const translations: T = React.useMemo(() => typeof t === "function" ? {...t(preset)} : {...t}, [t, preset]);

  React.useEffect(() => {
    lookForMissingKeys(translations, locales)
  }, [translations]);

  return React.useMemo(() => translate(translations, l || locale), [translations, l, locale]);
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
