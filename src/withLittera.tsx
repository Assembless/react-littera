import * as React from 'react'
import { LitteraContext } from './LitteraProvider'
import { ITranslations, ITranslationsFunction } from "../types/index.d";

/**
 * HOC for managing translations.
 * @param {ITranslations|ITranslationsFunction} translations
 * @returns {FunctionComponent}
 */
const withLittera = (translations: ITranslationsFunction | ITranslations) => (
  Component: React.FunctionComponent
) =>
  function WrapperComponent(props) {
    return (
      <LitteraContext.Consumer>
        {state => {
          const translated = {}

          const transes =
            typeof translations === 'function'
              ? { ...translations(state.preset) }
              : { ...translations }

          Object.keys(transes).forEach(k => (translated[k] = transes[k][state.locale]))

          return (
            <Component
              {...props}
              translated={translated}
              locale={state.locale}
              setLocale={state.setLocale}
              pattern={state.pattern}
            />
          )
        }}
      </LitteraContext.Consumer>
    )
  }

export default withLittera
