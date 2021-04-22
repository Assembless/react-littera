import { translate, translateSingle } from '../src/utils/translate'

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
  }),
  you: {
    de_DE: "Du",
    en_US: "You",
    pl_PL: "Ty"
  }
}

const translationsMockWithArrays = {
  slogans: [
    {
      en_US: "Welcome to the show",
      de_DE: "Willkommen in der Show"
    }
  ]
}

describe('translate', () => {
    it('should be a function', () => {
      expect(typeof translate).toBe('function')
    })

    it("should translate flat translations", () => {
      expect(translate(translationsMock, "en_US").example).toBe("Example")
      expect(translate(translationsMockWithVariables, "de_DE").you).toBe("Du")
    });

    it("should translate flat translations with variables", () => {
      const translated = translate(translationsMockWithVariables, "en_US");
      
      expect(translated.greeting("Mike")).toBe("Hello Mike");
      expect(translated.greeting(translated.you)).toBe("Hello You");
    });

    it("should translate flat translations with variables", () => {
      const translated = translate(translationsMockWithArrays, "en_US");
      
      expect(translated.slogans[0]).toBe("Welcome to the show");
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

describe('translateSingle', () => {
  it('should be a function', () => {
    expect(typeof translateSingle).toBe('function')
  })

  it("should translate flat translation", () => {
    const result = translateSingle(translationsMock.example, "de_DE");

    expect(result).toBe("Beispiel")
  });

  it("should translate flat translation with variables", () => {
    const result = translateSingle(translationsMockWithVariables.greeting, "en_US");

    expect(result("Mike")).toBe("Hello Mike");
  });

  it("should translate flat translation with arrays", () => {
    const result = translateSingle(translationsMockWithArrays.slogans, "en_US");

    expect(result[0]).toBe("Welcome to the show");
  });
})
