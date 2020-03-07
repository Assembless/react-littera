import * as React from 'react'
import { LitteraContext } from './LitteraProvider'
import { ITranslations, ITranslationsFunction, ITranslation, LitteraProps } from "../types/index.d";
import { translate } from './utils/translate';

/**
 * HOC for managing translations.
 * @param {ITranslations|ITranslationsFunction} translations
 * @returns {FunctionComponent}
 */
const withLittera = (translations: ITranslationsFunction | ITranslations) => (
  Component: React.FunctionComponent<LitteraProps>
) =>
  function WrapperComponent(props) {
    return (
      <LitteraContext.Consumer>
        {state => {
          
          // TODO: types?
          const transes: any =
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
