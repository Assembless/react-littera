import * as React from "react";
import { LitteraContext } from "./LitteraProvider";
import { translate } from "./utils/translate";
import { validateLocale } from "./utils/methods";
import { ITranslations, ITranslationsFunction } from "../types";

type setLocale = (locale: string) => void;
type getLocale = () => string;
type getPreset = () => ITranslations;
type validateLocale = (locale: string, pattern?: RegExp) => Boolean

export const useLittera = (t: ITranslations | ITranslationsFunction, l?: string) => {
  const { locale, preset } = React.useContext(LitteraContext);

  const translated = React.useMemo(() => translate(t, l || locale, preset), [t, l, locale, preset])

  return translated;
}

export const useLitteraMethods = () => {
  const { locale, preset, setLocale, pattern } = React.useContext(LitteraContext);

  const _getLocale:getLocale = React.useCallback(() => locale, [locale]);
  const _setLocale:setLocale = React.useCallback((locale: string) => {
    if(!_validateLocale(locale)) throw new Error(`Locale does not match the pattern.`);
   
    setLocale(locale);
  }, [locale]);
  const _validateLocale:validateLocale = React.useCallback(validateLocale, [pattern]);
  const _getPreset:getPreset = React.useCallback(() => ({...preset}), [preset])

  return {
    getLocale: _getLocale,
    setLocale: _setLocale,
    validateLocale: _validateLocale,
    getPreset: _getPreset,
    translate
  };
};
