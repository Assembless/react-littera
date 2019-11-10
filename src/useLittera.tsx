import * as React from 'react'
import { LitteraContext } from '.'
import { ITranslations } from '../types'

/**
 * Hook for managing translations.
 * @argument {Function|ITranslations} translations
 * @returns {Array} Hook returns `translated` object, active `language` string and `setLanguage` function.
 */
const useLittera = (translations: Function | ITranslations) => {
  const { language, preset, setLanguage } = React.useContext(LitteraContext)

  let translated = {}

  const _t = typeof translations === 'function' ? { ...translations(preset) } : { ...translations }

  Object.keys(_t).forEach(e => {
    translated = { ...translated, [e]: _t[e][language] }
  })

  return [translated, language, setLanguage]
}

export default useLittera
