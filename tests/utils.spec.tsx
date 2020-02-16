import { getLocale } from "../src/utils/methods";

describe("utils", () => {
  describe("getLocale", () => {
    it("should return the locale", () => {
      const lang = window.navigator.language
        ? window.navigator.language.replace("-", "_")
        : "en_US";

      expect(getLocale()).toBe(lang);
    });
  });
});
