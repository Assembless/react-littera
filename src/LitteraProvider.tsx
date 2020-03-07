import * as React from "react";
import { ILitteraProvider, ITranslations } from "../types/index.d";
import { localePattern } from "./utils/methods";

export const LitteraContext = React.createContext<ILitteraProvider>({
  locale: "en_US",
  preset: {},
  locales: ["en_US"],
  pattern: localePattern
});

/**
 * Context Provider for Littera
 * @public
 * @param {String} locale Active locale.
 * @param {ITranslations} preset Set of predefined translations.
 * @param {Function} setLocale Callback handling the setLocale event.
 * @param {RegExp} pattern Locale pattern.
 */
const LitteraProvider: React.FunctionComponent<ILitteraProvider & {initialLocale?: string}> = ({
  locales,
  initialLocale=locales?.[0] || "en_US",
  preset,
  setLocale,
  pattern,
  children
}) => {
  const [locale, changeLocale] = React.useState(initialLocale);

  const handleLocale = (locale: string) => {
    if(locales && locales.indexOf(locale) <= -1) throw new Error("The locale does not exist on the locales list.");

    setLocale && setLocale(locale);
    changeLocale(locale);
  }

  return (
    <LitteraContext.Provider
      value={{
        locale,
        preset,
        setLocale: handleLocale,
        pattern,
        locales
      }}
    >
      {children}
    </LitteraContext.Provider>
  );
};

export default LitteraProvider;
