import {translate} from '../src/utils/translate'

const translationsMock = {
  example: {
    de_DE: "Beispiel",
    en_US: "Example",
    pl_PL: "Przykład"
  }
}

const translationsMockWithVariables = {
  greeting: (name: string) => ({
    de_DE: `Hallo ${name}`,
    en_US: `Hello ${name}`,
    pl_PL: `Cześć ${name}`
  })
}

describe('translate', () => {
    it('should be a function', () => {
      expect(typeof translate).toBe('function')
    })
    it("should translate flat translations", () => {
      expect(translate(translationsMock, "en_US").example).toBe("Example")
    });
    it("should translate flat translations with variables", () => {
      expect(translate(translationsMockWithVariables, "en_US").greeting("Mike")).toBe("Hello Mike");
    });
    it("should throw error if translations is invalid type", () => {
      const fn = () => {
        // @ts-ignore
        translate(["test"], "en_US")
      };

      expect(fn).toThrowError('Expected an object for translations, got: array');
    });
    it("should throw error if locale is not provided", () => {
      const fn = () => {
        // @ts-ignore
        translate(translationsMock)
      };

      expect(fn).toThrowError('Expected a string for locale, got: undefined');
    });
})
