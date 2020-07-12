import * as React from "react";
import { LitteraContext } from "./LitteraProvider";
import { translate } from "./utils/translate";
import { validateLocale } from "./utils/methods";
import { ITranslations, TSetLocale, TValidateLocale } from "../types";

/**
 * Hook returns translations for the active locale.
 * @param translations Translations
 * @param locale Locale in case you need translations for a not active locale.
 */
export const useLittera = <T extends ITranslations>(t: T | ((preset?: ITranslations) => T), l?: string): {[key in keyof T]: string} => {
  const { locale, preset, locales=[] } = React.useContext(LitteraContext);
  
  const _translations = React.useMemo(() => typeof t === "function" ? {...t(preset)} : {...t}, [t, preset]);

  React.useEffect(() => {
    Object.keys(_translations).forEach(_key => {
      locales.forEach(_locale => {
        if(!_translations[_key][_locale]) {
          console.warn(`You are missing "${_key}" in ${_locale}.`);
        }
      });
    });
  }, [_translations]);

  return React.useMemo(() => translate(_translations, l || locale), [_translations, l, locale]);
}

/**
 * Hook exposes an object with global translation methods and variables.
 * @returns locale - active locale.
 * @returns locales - all locales.
 * @returns setLocale - changes the active locale.
 * @returns validateLocale - method validates the locale format using a pattern.
 * @returns preset - global preset.
 * @returns translate - the core translation method.
 */
export const useLitteraMethods = () => {
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
