export type ITranslation =  { [key: string]: string }; 

export interface ITranslations {
  [key: string]: ITranslation | ITranslations
}

export type ITranslationsFunction = ((preset?: ITranslations) => ITranslations);

export interface ITranslated {
  [key: string]: string & ITranslated;
}

export interface ILitteraProvider {
  locale?: string;
  preset?: ITranslations;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
}
