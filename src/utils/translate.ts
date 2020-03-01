import {
  ITranslations,
  ITranslationsFunction,
  ITranslated,
  ITranslation
} from "../../types";

function isTranslated(x: any): x is string {
  return typeof x === "string";
}

export const translate = (
  t: ITranslations | ITranslationsFunction,
  l: string,
  preset?: ITranslations
) => {
  const _t = typeof t === "function" ? { ...t(preset) } : { ...t };
  let translated = {};

  Object.keys(_t).forEach(_tr => {
    if (isTranslated(_t[_tr][l])) {
      translated = { ...translated, [_tr]: _t[_tr][l] as string };
    }
    else {
      translated = {...translated, [_tr]: translate(_t[_tr] as ITranslations, l, preset) as ITranslation };
    }
  });
  
  return translated as ITranslated;
};
