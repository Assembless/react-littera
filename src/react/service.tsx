import * as React from 'react'
import { LitteraTranslated } from '../typings'

type LitteraContext = {
  locale: string
  locales: string[]
  setLocale: (locale: string) => void
}

export const LitteraContext = React.createContext<LitteraContext>({
  locale: 'en_US',
  locales: ['en_US'],
  setLocale: () => {}
})

interface LitteraServiceProps {
  children: React.ReactNode
  initialLocale: string
  locales: string[]
  preset: LitteraTranslated<any, any>
}

/**
 * Context Provider for Littera
 * @category React
 * @public
 * @param initialLocale Initial active locale.
 * @param preset Set of predefined translations.
 * @param setLocale Callback called when the locale changes.
 * @param pattern Locale pattern.
 * @example
 * // Setting up Littera provider.
 *
 * const App = () => {
 *    return <LitteraService locales={["en_US", "de_DE"]}>
 *      ...
 *    </LitteraService>
 * }
 */
export const LitteraService = ({
  children,
  initialLocale,
  locales
}: LitteraServiceProps) => {
  const [locale, setLocale] = React.useState(
    initialLocale ?? locales[0] ?? 'en_US'
  )

  return (
    <LitteraContext.Provider value={{ locale, setLocale, locales }}>
      {children}
    </LitteraContext.Provider>
  )
}
