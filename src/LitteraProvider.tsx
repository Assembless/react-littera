import * as React from 'react'
import { ILitteraProvider } from '../types'

export const LitteraContext = React.createContext({
  language: 'en_US',
  preset: {},
  setLanguage: () => {},
})

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
  children,
}) => {
  return (
    <LitteraContext.Provider
      value={{
        language: language,
        preset: preset,
        setLanguage: language => setLanguage(language),
      }}
    >
      {children}
    </LitteraContext.Provider>
  )
}

export default LitteraProvider
