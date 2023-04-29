import { LitteraRemoteOptions } from "../typings";

/**
 * @description Default fetcher for remote translations.
 * @param url URL to fetch from.
 */
const defaultFetcher = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()

  return data;
};

/**
 * @description Parses remote options.
 * @param remote Remote options.
 * @param locale Locale to use translations from.
 * @returns Parsed remote options.
 */
export const parseRemoteOptions = <P>(remote: LitteraRemoteOptions<P> | undefined, locale: string) => {
  if(!remote || !remote.url) return undefined;
  
  // Replace the placeholders in url.
  const url = remote.url.replace("{locale}", locale);
  const fetcher = remote.fetcher ?? defaultFetcher;

  return Object.freeze({
    url,
    fetcher,
  });
}