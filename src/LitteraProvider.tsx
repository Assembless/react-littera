import * as React from "react";
import { ILitteraProvider, ITranslations } from "../types/index.d";
import { localePattern } from "./utils/methods";

export const LitteraContext = React.createContext<ILitteraProvider>({
  locale: "en_US",
  preset: {},
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
const LitteraProvider: React.FunctionComponent<ILitteraProvider> = ({
  locale,
  preset,
  setLocale,
  pattern,
  children
}) => {
  return (
    <LitteraContext.Provider
      value={{
        locale,
        preset,
        setLocale,
        pattern
      }}
    >
      {children}
    </LitteraContext.Provider>
  );
};

export default LitteraProvider;
