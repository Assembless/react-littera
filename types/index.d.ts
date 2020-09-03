import * as React from "react";

/**
 * @example
  {
    de_DE: "Beispiel",
    pl_PL: "Przykład",
    en_US: "Example"
  }
 */
export type ITranslation = { [key: string]: string };
export type ITranslationVarFn = (...args: any[]) => ITranslation;

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
export type ITranslations<T> = {
  [key in keyof T]: T[key] extends ITranslation
    ? ITranslation
    : T[key] extends ITranslationVarFn
    ? ITranslationVarFn
    : string;
};

export type ITranslated<T> = {
  [key in keyof T]: T[key] extends ITranslation
    ? string
    : T[key] extends ITranslationVarFn
    ? (...args: Parameters<T[key]>) => string
    : string;
};

export type ITranslationsPreset = ITranslations<any>

export type ITranslationsFunction<T> = ((preset?: ITranslations<any>) => ITranslated<T>);

export interface ILitteraProvider {
  preset?: ITranslationsPreset;
  locale?: string;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
  locales?: Array<string>;
}

export interface ILitteraProviderProps {
  preset?: ITranslationsPreset;
  initialLocale?: string;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
  locales?: Array<string>;
  detectLocale?: boolean;
}

export interface LitteraProps<T> {
  locale: string;
  translated: ITranslated<T>,
  setLocale: TSetLocale,
  preset?: ITranslationsPreset
}

export type TSetLocale = (locale: string) => void;
export type TValidateLocale = (locale: string, pattern?: RegExp) => Boolean
export type TTranslate = <T>(translations: ITranslations<T>, locale: string, preset?: ITranslationsPreset) => ITranslated<T>

export type TTranslationsArg<T> = Readonly<T | ITranslationsFunction<T>>;
//export type TTranslatedArg<T> = Readonly<{[key in keyof T]: T[keyof T] extends {[key: string]: string} ? string : (...args: Parameters<T[keyof T] extends ((...args: (string | number)[]) => {[key: string]: string}) ? T[keyof T] : ((...args: (string | number)[]) => string)>) => string}>;

export function useLittera<T>(translations: ITranslations<T>, locale?: string): ITranslated<T>;
export function useLitteraMethods(): {
  locale: string,
  locales: string[],
  setLocale: TSetLocale,
  preset: ITranslationsPreset,
  validateLocale: TValidateLocale,
  translate: TTranslate
}
export const withLittera: <T>(translations: ITranslations<T>) => (Component: React.FunctionComponent<LitteraProps<T>>) => (props: any) => JSX.Element
export const LitteraContext: React.Context<ILitteraProvider>
export const LitteraProvider: (props: ILitteraProviderProps & {children: JSX.Element | JSX.Element[]}) => JSX.Element