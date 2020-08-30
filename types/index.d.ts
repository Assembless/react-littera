import * as React from "react";

/**
 * @example
  {
    de_DE: "Beispiel",
    pl_PL: "Przykład",
    en_US: "Example"
  }
 */
export type ITranslation =  { [key: string]: string } | ((...args: Array<string | number>) => {[key: string]: string}); 

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
  [key: string]: string | ((...args: Array<string | number>) => string);
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

export interface LitteraProps<T extends ITranslations> {
  locale: string;
  translated: TTranslatedArg<T>,
  setLocale: TSetLocale,
  preset?: ITranslations
}

export type TSetLocale = (locale: string) => void;
export type TValidateLocale = (locale: string, pattern?: RegExp) => Boolean
export type TTranslate = (translations: ITranslations, locale: string, preset?: ITranslations) => ITranslated

export type TTranslationsArg<T> = Readonly<T | ((preset?: ITranslations) => T)>;
export type TTranslatedArg<T extends ITranslations> = Readonly<{[key in keyof T]: T[keyof T] extends {[key: string]: string} ? string : (...args: Parameters<T[keyof T] extends ((...args: (string | number)[]) => {[key: string]: string}) ? T[keyof T] : ((...args: (string | number)[]) => string)>) => string}>;

export function useLittera<T extends ITranslations>(translations: TTranslationsArg<T>, locale?: string): TTranslatedArg<T>;
export function useLitteraMethods(): {
  locale: string,
  locales: string[],
  setLocale: TSetLocale,
  preset: ITranslations,
  validateLocale: TValidateLocale,
  translate: TTranslate
}
export const withLittera: <T extends ITranslations>(translations: TTranslationsArg<T>) => (Component: React.FunctionComponent<LitteraProps<T>>) => (props: any) => JSX.Element
export const LitteraContext: React.Context<ILitteraProvider>
export const LitteraProvider: (props: ILitteraProviderProps & {children: JSX.Element | JSX.Element[]}) => JSX.Element