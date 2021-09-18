/**
 * Throws an error if the given locale is not contained in the list of locales.
 * @param locales The list of locales.
 * @param locale The locale to check.
 * @returns True if the locale is contained, throw error otherwise.
 */
export const throwInvalidLocale = (locales: string[], locale: string) => {
  if(!locales.includes(locale)) 
    throw new Error(`Invalid locale provided. Expected [${locales.join(", ")}], got ${locale}`);

  return true;
}