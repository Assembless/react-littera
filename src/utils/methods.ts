import { getUserLocale } from "get-user-locale";

export const getLocale = () => {
  const l = getUserLocale().replace("-", "_");
  return l || "en_US";
};
