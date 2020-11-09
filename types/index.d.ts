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

/**
 * @example
  (name) => ({
    de_DE: `Hallo ${name}`,
    pl_PL: `Cześć ${name}`,
    en_US: `Hello ${name}`
  })
 */
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
  [key in keyof T]: T[key]
};

/**
 * @example
  {
    example: "Beispiel"
    ...
  }
 */
export type ITranslated<T> = {
  [key in keyof T]: ISingleTranslated<T[key]>
};

/**
 * @example
   "Beispiel"
 */
export type ISingleTranslated<T> =
  T extends ITranslation
    ? string
  : T extends ITranslationVarFn
  ? (...args: Parameters<T>) => string
  : string;

export type ITranslationsPreset<P = any> = ITranslations<P>

export type ITranslationsFunction<T, P> = ((preset?: P) => T);

export interface ILitteraProvider {
  preset?: ITranslationsPreset;
  locale?: string;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
  locales?: Array<string>;
}

export interface ILitteraProviderProps {
  preset?: ITranslationsPreset;
  setLocale?: (locale: string) => void;
  pattern?: RegExp;
  locales?: Array<string>;
  initialLocale?: string;
  detectLocale?: boolean;
}

export interface LitteraProps<T> {
  locale: string;
  translated: ITranslated<T>;
  setLocale: TSetLocale;
  preset?: ITranslationsPreset;
}

export type TSetLocale = (locale: string) => void;
export type TValidateLocale = (locale: string, pattern?: RegExp) => Boolean
export type TTranslate = <T>(translations: ITranslations<T>, locale: string, preset?: ITranslationsPreset) => ITranslated<T>

export type TTranslationsArg<T extends ITranslations<T>, P extends ITranslations<P>> = T | ITranslationsFunction<T, P>;

export function useLittera<T, P = ITranslationsPreset>(translations: ITranslations<T> | ((preset: P) => ITranslations<T>), locale?: string): ITranslated<T>;
export function useLitteraMethods(): {
  readonly locale: string;
  readonly locales: string[];
  readonly setLocale: TSetLocale;
  readonly preset: ITranslationsPreset;
  readonly validateLocale: TValidateLocale;
  readonly translate: TTranslate;
}
export const withLittera: <T>(translations: ITranslations<T>) => (Component: React.FunctionComponent<LitteraProps<T>>) => (props: any) => JSX.Element
export const LitteraContext: React.Context<ILitteraProvider>
export const LitteraProvider: (props: ILitteraProviderProps & {children: JSX.Element | JSX.Element[]}) => JSX.Element