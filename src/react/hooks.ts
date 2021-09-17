import * as React from 'react'
import { LitteraContext } from './service'
import { translate } from '..'
import { LitteraTranslated, LitteraTranslations } from '../typings'

/**
 * @description React hook for translating a component.
 * @category React
 * @param translations
 * @param locale Optional locale to translate to. Defaults to the current locale.
 * @returns The translations object for the specified locale.
 */
export const useLittera = <T, K extends keyof T>(
  translations: LitteraTranslations<T>,
  locale?: string
): LitteraTranslated<T, K> => {
  const service = React.useContext(LitteraContext)

  return React.useRef(translate<T, K>(translations, locale ?? service.locale))
    .current
}

export const useLitteraMethods = () => {
  const service = React.useContext(LitteraContext)

  return React.useRef({ setLocale: service.setLocale, locale: service.locale })
    .current
}
