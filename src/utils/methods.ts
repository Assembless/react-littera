export const localePattern = /[a-z]{2}_[A-Z]{2}/gi;

export const validateLocale = (l, p) => {
    const _p = p || localePattern;

    return Boolean(new RegExp(_p).test(l));
  }