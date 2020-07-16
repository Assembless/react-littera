import * as React from "react";

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
  preset?: ITranslations;
  locale?: string;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
  locales?: Array<string>;
}

export interface ILitteraProviderProps {
  preset?: ITranslations;
  initialLocale?: string;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
  locales?: Array<string>;
  detectLocale?: boolean;
}

export interface LitteraProps {
  locale: string;
  translated: ITranslated,
  setLocale: TSetLocale,
  preset?: ITranslations
}

export type TSetLocale = (locale: string) => void;
export type TValidateLocale = (locale: string, pattern?: RegExp) => Boolean
export type TTranslate = (translations: ITranslations, locale: string, preset?: ITranslations) => ITranslated

export function useLittera<T extends ITranslations>(translations: T | ((preset?: ITranslations) => T), locale?: string): {[key in keyof T]: string};
export function useLitteraMethods(): {
  locale: string,
  locales: string[],
  setLocale: TSetLocale,
  preset: ITranslations,
  validateLocale: TValidateLocale,
  translate: TTranslate
}
export const withLittera: (translations: ITranslationsFunction | ITranslations) => (Component: React.FunctionComponent<{}>) => (props: any) => JSX.Element
export const LitteraContext: React.Context<ILitteraProvider>
export const LitteraProvider: (props: ILitteraProviderProps & {children: JSX.Element | JSX.Element[]}) => JSX.Element