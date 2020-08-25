import {
  ITranslations,
} from "../../types";

/**
 * Returns reduced object based on locale.
 * @category Core
 * @param {ITranslations} translations Translations object
 * @param {string} locale
 * @returns {ITranslated}
 */
export function translate<T extends ITranslations, K extends keyof T>(
  t: T,
  l: string
) {
  
  return Object.freeze(
          Object.keys(t).reduce( (a: {[key in K]: string}, b) => 
            (a[b as K]=t[b][l], a),
            {} as {[key in K]: string} ));
};