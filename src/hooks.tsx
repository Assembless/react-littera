import * as React from "react";
import { LitteraContext } from "./LitteraProvider";
import { translate } from "./utils/translate";
import { validateLocale } from "./utils/methods";
import { ITranslations, TGetLocale, TGetPreset, TSetLocale, TValidateLocale } from "../types";

/**
 * Hook returns translations for the active locale.
 * @param t Translations
 * @param l Locale
 */
export const useLittera = <T extends ITranslations>(t: T | ((preset?: ITranslations) => T), l?: string) => {
  const { locale, preset } = React.useContext(LitteraContext);

  const translated = React.useMemo(() => translate(t, l || locale, preset), [t, l, locale, preset])

  return translated;
}

/**
 * Hook exposes an object with global translation methods.
 * @returns getLocale - returns active locale.
 * @returns setLocale - overrides the active locale.
 * @returns validateLocale - validates the locale format using a pattern.
 * @returns getPreset - returns the global preset.
 * @returns translate - the core translation method.
 */
export const useLitteraMethods = () => {
  const { locale, preset, setLocale, pattern } = React.useContext(LitteraContext);

  const _getLocale:TGetLocale = React.useCallback(() => locale, [locale]);
  const _setLocale:TSetLocale = React.useCallback((locale: string) => {
    if(!_validateLocale(locale)) throw new Error(`Locale does not match the pattern.`);
   
    setLocale(locale);
  }, [locale]);
  const _validateLocale:TValidateLocale = React.useCallback(validateLocale, [pattern]);
  const _getPreset:TGetPreset = React.useCallback(() => ({...preset}), [preset])

  return {
    getLocale: _getLocale,
    setLocale: _setLocale,
    validateLocale: _validateLocale,
    getPreset: _getPreset,
    translate
  };
};
