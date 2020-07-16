import * as React from 'react'
import { LitteraContext } from './LitteraProvider'
import { ITranslations, LitteraProps } from "../types/index.d";
import { translate } from './utils/translate';

/**
 * HOC for managing translations.
 * @category HOCs
 * @param {ITranslations|ITranslationsFunction} translations
 * @returns {FunctionComponent}
 */
const withLittera = <T extends ITranslations>(translations: T | ((preset?: ITranslations) => T)) => (
  Component: React.FunctionComponent<LitteraProps<T>>
) =>
  function WrapperComponent(props) {
    return (
      <LitteraContext.Consumer>
        {state => {
          
          const transes: T | ((preset?: ITranslations) => T) =
            typeof translations === 'function'
            ? { ...translations(state.preset) }
            : { ...translations }
          
          const translated = translate(transes, state.locale);

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
