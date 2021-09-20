import * as React from 'react';
import { LitteraContextValue, LitteraTranslations } from '../typings';
export declare function createLittera<L extends ReadonlyArray<string>, P>(locales: L, preset: P): {
    LitteraContext: React.Context<LitteraContextValue<L, P>>;
    LitteraService: ({ children, initialLocale }: any) => JSX.Element;
    makeTranslations: <T, Tp extends T & P, TpK extends keyof Tp>(translations: { [key in keyof T]: T[key]; }) => (locale?: keyof TpK | undefined) => { [key_1 in keyof Tp[TpK]]: Tp[TpK][key_1]; };
    useLitteraMethods: () => {
        setLocale: (nextLocale: string) => void;
        locale: L[number];
        locales: L;
    };
};
/**
 * Context Provider for Littera
 * @category React
 * @public
 * @param initialLocale Initial active locale.
 * @param preset Set of predefined translations.
 * @param setLocale Callback called when the locale changes.
 * @param pattern Locale pattern.
 * @example
 * // Setting up Littera provider.
 *
 * const App = () => {
 *    return <LitteraService locales={["en_US", "de_DE"]}>
 *      ...
 *    </LitteraService>
 * }
 */
export declare const LitteraService: <L extends readonly unknown[], P>({ children, initialLocale, locales, preset, Context }: {
    children: any;
    initialLocale: L[number];
    locales: L;
    preset: LitteraTranslations<P>;
    Context: React.Context<LitteraContextValue<L, P>>;
}) => JSX.Element;
