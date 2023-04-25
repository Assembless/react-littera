import * as React from 'react'
import { LitteraContext } from './LitteraProvider'
import { ITranslations, LitteraProps, ITranslationsPreset } from "../types/index.d";
import { translate } from './utils/translate';

/**
 * HOC for managing translations.
 * @category HOCs
 * @param {ITranslations|ITranslationsFunction} translations
 * @returns {FunctionComponent}
 * @deprecated HOCs are out of support. Please consider switching to React hooks.
 */
const withLittera = <T extends ITranslations<T>>(translations: T | ((preset?: ITranslationsPreset) => T)) => (
  Component: React.FunctionComponent<LitteraProps<T>>
) =>
  function WrapperComponent(props: any) {
    return (
      <LitteraContext.Consumer>
        {state => {
          
          const transes: T | ((preset?: ITranslationsPreset) => T) =
            typeof translations === 'function'
            ? { ...translations(state.preset) }
            : { ...translations }
          
          const translated = translate(transes, state.locale as string);

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
