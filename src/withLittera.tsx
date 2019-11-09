import React, { FunctionComponent } from 'react'
import { LitteraContext } from './LitteraProvider'
import { ITranslations } from '../types'

/**
 * HOC for managing translations.
 * @param {Function | ITranslations} translations
 * @returns {FunctionComponent}
 */
const withLittera = (translations: Function | ITranslations) => (Component: FunctionComponent) =>
  function WrapperComponent(props) {
    return (
      <LitteraContext.Consumer>
        {state => {
          const translated = {}

          const transes =
            typeof translations === 'function'
              ? { ...translations(state.preset) }
              : { ...translations }

          Object.keys(transes).forEach(e => (translated[e] = transes[e][state.language]))

          return (
            <Component
              {...props}
              translated={translated}
              language={state.language}
              setLanguage={state.setLanguage}
            />
          )
        }}
      </LitteraContext.Consumer>
    )
  }

export default withLittera
