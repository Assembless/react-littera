export type LitteraTranslations<T> = { [key in keyof T]: T[key] }
export type LitteraTranslated<T, K extends keyof T> = {
  [key in keyof T[K]]: T[K][key]
}
