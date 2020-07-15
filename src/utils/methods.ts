import { log } from "./logger";

export const localePattern = /[a-z]{2}_[A-Z]{2}/gi;

export const validateLocale = (l: string, p: RegExp) => {
    const _p = p || localePattern;

    return Boolean(new RegExp(_p).test(l));
  }

export const detectDeviceLocale = () => {
  const browserLocale = tryParseLocale(window.navigator.language);

  if(!browserLocale) log("warn", "Locale not detected.");

  return browserLocale || null;
}

export const tryParseLocale = (locale: string) => {
  if(!locale) return null;

  if(locale.length === 2) {
    if(locale === "en") return "en_US";

    return `${locale}_${locale.toUpperCase()}`;
  }
  if(locale.length === 4 && locale.includes("-")) return locale.replace(/-/g, "_");

  return null;
}