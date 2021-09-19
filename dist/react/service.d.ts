import * as React from 'react';
import { LitteraContextValue, LitteraTranslations } from '../typings';
export declare const LitteraContext: React.Context<LitteraContextValue<any>>;
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
export declare const LitteraService: <T extends readonly unknown[]>({ children, initialLocale, locales, preset }: {
    children: any;
    initialLocale: T[number];
    locales: T;
    preset: LitteraTranslations<unknown>;
}) => JSX.Element;
