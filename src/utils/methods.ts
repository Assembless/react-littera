import { ITranslations, ITranslationVarFn } from "../../types";

export const localePattern = /[a-z]{2}_[A-Z]{2}/gi;

export const validateLocale = (l: string, p: RegExp) => {
  const _p = p || localePattern;

  return Boolean(new RegExp(_p).test(l));
}

export const detectDeviceLocale = () => {
  const browserLocale = tryParseLocale(window.navigator.language);

  if(!browserLocale) console.warn("Locale not detected.");

  return browserLocale || null;
}

/**
 * Tries parsing locale from a string. (eg. de-DE or de => de_DE)
 * @param locale Locale string. (eg. de)
 * @returns Parsed locale string or null. (eg. de_DE)
 */
export const tryParseLocale = (locale: string) => {
  if(!locale) return null;

  if(locale.length === 2) {
    if(locale === "en") return "en_US";

    return `${locale}_${locale.toUpperCase()}`;
  }
  if(locale.length === 4 && locale.includes("-")) return locale.replace(/-/g, "_");

  return null;
}

/** 
 * Searches for missing translations. Prints an warning if there is a translation for a language missing.
 */
export const lookForMissingKeys = <T>(translations: ITranslations<T>, locales: string[]) => {
  Object.keys(translations).forEach(key => {
    if(typeof translations[key] === "function") return; // TODO: Detect missing translations for variable functions.
    locales.forEach(locale => {

      if (typeof translations[key][locale] !== "string") 
        console.warn(`You are missing "${key}" in ${locale}.`);
    });
  });
}

export function isVariableFunction(value: unknown): value is ITranslationVarFn {
  return typeof (value as ITranslationVarFn) === "function";
}