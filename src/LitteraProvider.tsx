import React, { FunctionComponent, createContext } from 'react'
import { ILitteraProvider } from '../types'

export const LitteraContext = createContext({
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
const LitteraProvider: FunctionComponent<ILitteraProvider> = ({
  language,
  preset,
  setLanguage,
}) => {
  return (
    <LitteraContext.Provider
      value={{
        language: language,
        preset: preset,
        setLanguage: language => setLanguage(language),
      }}
    >
      {this.props.children}
    </LitteraContext.Provider>
  )
}

export default LitteraProvider
