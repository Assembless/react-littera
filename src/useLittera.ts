import * as React from "react";
import { LitteraContext } from ".";
import { ITranslationsFunction } from "../types/index.d";
import { translate } from "./translate";

/**
 * Hook for managing translations.
 * @argument {Function|ITranslations} translations
 * @returns {Array} Hook returns `translated` object, active `language` string and `setLanguage` function.
 */
const useLittera = (translations: ITranslationsFunction) => {
  const { language, preset, setLanguage } = React.useContext(LitteraContext);

  const translated = React.useMemo(() => translate(translations, language, preset), [
    translations,
    language,
    preset
  ]);

  const _getLocale: () => string = () => language;
  const _setLocale: (language: string) => void = (l: string) => {
    setLanguage && setLanguage(l);
  };

  const ress = React.useRef<[any, any] | null>(null);

  if (ress.current === null) {
    ress.current = [
      translated,
      {
        getLocale: _getLocale,
        setLocale: _setLocale
      }
    ];
  }
  ress.current[0] = translated;
  ress.current[1] = { ...ress.current[1], getLocale: _getLocale };

  return ress.current;
};

export default useLittera;
