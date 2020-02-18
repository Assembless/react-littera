export interface ITranslations {
  [key: string]: {
    [key: string]: string;
  };
}

export type ITranslationsFunction = ITranslations | ((preset: ITranslations) => ITranslations);

export interface ITranslated {
  [key: string]: string;
}

export interface ILitteraProvider {
  language?: string;
  preset?: ITranslations;
  setLanguage?: any;
  // setLanguage?: (language: string) => void;
}
