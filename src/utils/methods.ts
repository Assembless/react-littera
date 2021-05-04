import { ITranslation, ITranslations, ITranslationsArr, ITranslationVarFn } from "../../types";

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
 * @param translations 
 * @param locales List of country codes for tested languages. eg. ["de_DE", "pl_PL"]
 */
export const reportMissing = <T>(translations: ITranslations<T>, locales: string[]) => {
  Object.keys(translations).forEach(key => {
    if(typeof translations[key] === "function") return; // TODO: Detect missing translations for variable functions.
    if(translations[key] instanceof Array) return; // TODO: Detect missing translations for arrays.
    
    locales.forEach(locale => {

      if (typeof translations[key][locale] !== "string") 
        console.warn(`You are missing "${key}" in ${locale}.`);
    });
  });
}

/** 
 * Searches for missing translations. Prints an warning if there is a translation for a language missing.
 * @param translations 
 * @param locales List of country codes for tested languages. eg. ["de_DE", "pl_PL"]
 * @deprecated Naming changed to reportMissing.
 * @augments reportMissing
 */
export const lookForMissingKeys = reportMissing;

/**
 * Checks if value is a translation object.
 * @param value 
 * @returns 
 */
 export function isTranslation(value: unknown): value is ITranslation {
  return typeof (value as ITranslation) === "object";
}

/**
 * Checks if value is a variable function.
 * @param value 
 * @returns 
 */
export function isVariableFunction(value: unknown): value is ITranslationVarFn {
  return typeof (value as ITranslationVarFn) === "function";
}

/**
 * Checks if value is a translations array.
 * @param value 
 * @returns 
 */
export function isTransArrayFunction(value: unknown): value is ITranslationsArr {
  return (value as ITranslationsArr) instanceof Array &&
          !(value as ITranslationsArr).find(v => !isTranslation(v))
}