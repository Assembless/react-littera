import * as React from "react";
import { ILitteraProvider } from "../types/index.d";

export const LitteraContext = React.createContext<ILitteraProvider>({
  language: "en_US",
  preset: {}
});

/**
 * Context Provider for Littera
 * @public
 * @param {String} language Active language
 * @param {Object} preset Set of predefined translations
 * @param {Function} setLanguage Callback handling the setLanguage event.
 */
const LitteraProvider: React.FunctionComponent<ILitteraProvider> = ({
  language,
  preset,
  setLanguage,
  children
}) => {
  return (
    <LitteraContext.Provider
      value={{
        language: language,
        preset: preset,
        setLanguage
      }}
    >
      {children}
    </LitteraContext.Provider>
  );
};

export default LitteraProvider;
