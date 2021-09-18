/**
 * Object including each language and respective translations.
 */
export type LitteraTranslations<T> = { [key in keyof T]: T[key] }
/**
 * LitteraTranslations reduced to an object with translations for a single language.
 */
export type LitteraTranslated<T, K extends keyof T> = {
  [key in keyof T[K]]: T[K][key]
}

export type LitteraContextValue<T> = {
  locale: T[number]
  locales: T
  setLocale: (locale: string) => void
  translate: <T, K extends keyof T>(
    translations: LitteraTranslations<T>,
    locale?: string
  ) => LitteraTranslated<T, K>
}
