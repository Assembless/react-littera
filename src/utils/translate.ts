import {
  ITranslations,
} from "../../types";

export function translate<T extends ITranslations, K extends keyof T, P extends ITranslations>(
  t: T | ((preset?: P) => T),
  l: string,
  preset?: P
) {
  const _t: T = typeof t === "function" ? { ...t(preset) } : { ...t };
  const keys: Array<keyof typeof _t> = Object.keys(_t);

  let translated = keys.reduce((a, b: K) => {
    return (a[b]=_t[b][l], a);
  }, {} as {[key in K]: string});
  
  return translated;
};