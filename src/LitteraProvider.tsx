import React from "react";
import { ILitteraProvider, ILitteraProviderProps } from "../types/index.d";
import { localePattern, detectDeviceLocale } from "./utils/methods";

export const LitteraContext = React.createContext<ILitteraProvider>({
  locale: "en_US",
  preset: {},
  locales: ["en_US"],
  pattern: localePattern
});

/**
 * Context Provider for Littera
 * @category Setup
 * @public
 * @param initialLocale Initial active locale.
 * @param preset Set of predefined translations.
 * @param setLocale Callback called when the locale changes.
 * @param pattern Locale pattern.
 * @example
 * // Setting up Littera provider.
 * 
 * const App = () => {
 *    return <LitteraProvider locales={["en_US", "de_DE"]}>
 *      ...
 *    </LitteraProvider>
 * }
 */
export function LitteraProvider({
  locales,
  detectLocale,
  initialLocale=locales?.[0] || "en_US",
  preset,
  setLocale,
  pattern,
  children
}: ILitteraProviderProps & {children: JSX.Element | JSX.Element[]}) {
  initialLocale = detectLocale ? detectDeviceLocale() || initialLocale : initialLocale;
  const [locale, changeLocale] = React.useState(initialLocale);

  const handleLocale = (locale: string) => {
    if(locales && locales.indexOf(locale) <= -1) 
      throw new Error(`The '${locale}' locale does not exist on the locales list. (${locales.join(", ")})`);

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