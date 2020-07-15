import {
  ITranslations,
} from "../../types";

export function translate<T extends ITranslations, K extends keyof T>(
  t: T,
  l: string
) {
  const keys: Array<keyof typeof t> = Object.keys(t);

  let translated = keys.reduce((a, b: K) => {
    return (a[b]=t[b][l], a);
  }, {} as {[key in K]: string});
  
  return translated;
};