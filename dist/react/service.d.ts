import * as React from 'react';
import { LitteraTranslated } from '../typings';
declare type LitteraContext = {
    locale: string;
    locales: string[];
    setLocale: (locale: string) => void;
};
export declare const LitteraContext: React.Context<LitteraContext>;
interface LitteraServiceProps {
    children: React.ReactNode;
    initialLocale: string;
    locales: string[];
    preset: LitteraTranslated<any, any>;
}
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
export declare const LitteraService: ({ children, initialLocale, locales }: LitteraServiceProps) => JSX.Element;
export {};
