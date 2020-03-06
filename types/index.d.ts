/**
 * @example
  {
    de_DE: "Beispiel",
    pl_PL: "Przykład",
    en_US: "Example"
  }
 */
export type ITranslation =  { [key: string]: string }; 

 /**
 * @example
  {
    example: {
      de_DE: "Beispiel",
      pl_PL: "Przykład",
      en_US: "Example"
    },
    profile: {
      name: {
        de_DE: "Name",
        pl_PL: "Nazwa",
        en_US: "Name"
      }
      ...
    }
    ...
  }
 */
export interface ITranslations {
  [key: string]: ITranslation
}

export type ITranslationsFunction = ((preset?: ITranslations) => {[key: string]: string});

export interface ITranslated {
  [key: string]: string;
}

export interface ILitteraProvider {
  locale?: string;
  preset?: ITranslations;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
}

export type TSetLocale = (locale: string) => void;
export type TGetLocale = () => string;
export type TGetPreset = () => ITranslations;
export type TValidateLocale = (locale: string, pattern?: RegExp) => Boolean
export type TTranslate = (translations: ITranslations, locale: string, preset?: ITranslations) => ITranslated

declare module 'react-littera' {
  export function useLittera(translations: ITranslations, locale: string): ITranslated
  export function useLitteraMethods(): {
    getLocale: TGetLocale,
    setLocale: TSetLocale,
    getPreset: TGetPreset,
    validateLocale: TValidateLocale,
    translate: TTranslate
  }
  export const withLittera: (translations: ITranslationsFunction | ITranslations) => (Component: React.FunctionComponent<{}>) => (props: any) => JSX.Element
  export const LitteraContext: React.Context<ILitteraProvider>
  export const LitteraProvider: React.FunctionComponent<ILitteraProvider> 
} 