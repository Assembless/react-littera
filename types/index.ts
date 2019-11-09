export interface ITranslations {
  [key: string]: {
    [key: string]: string
  }
}

export interface ILitteraProvider {
  language: string
  preset?: ITranslations
  setLanguage?: Function
}
