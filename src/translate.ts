import { ITranslations, ITranslationsFunction } from "../types";

export const translate = (t: ITranslationsFunction, l: string, preset?: ITranslations) => {
  const _t = typeof t === "function" ? { ...t(preset) } : { ...t };
  let translated = {};
  Object.keys(_t).forEach(e => {
    translated = { ...translated, [e]: _t[e][l] };
  });

  return translated;
};
