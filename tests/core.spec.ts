import {translate} from '../src/utils/translate'

const translationsMock = {
  example: {
    de_DE: "Beispiel",
    en_US: "Example",
    pl_PL: "Przykład"
  }
}

const translationsFunctionMock = (preset) => ({
  simple: {
    de_DE: "Einfach",
    en_US: "Simple",
    pl_PL: "Łatwo"
  },
  ...preset
})

const presetMock = {
  hard: {
   en_US: "Hard",
   pl_PL: "Twarde", 
   de_DE: "Hart", 
  }
}

describe('translate', () => {
    it('should be a function', () => {
      expect(typeof translate).toBe('function')
    })
    it("should translate flat translations", () => {
      expect(translate(translationsMock, "en_US").example).toBe("Example")
      expect(translate(translationsFunctionMock, "de_DE").simple).toBe("Einfach")
    });
    it("should translate with preset", () => {
      const t = translate(translationsFunctionMock, "de_DE", presetMock)
      expect(t.hard).toBe("Hart")
    })
})
