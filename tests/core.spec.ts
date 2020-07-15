import {translate} from '../src/utils/translate'

const translationsMock = {
  example: {
    de_DE: "Beispiel",
    en_US: "Example",
    pl_PL: "Przykład"
  }
}

describe('translate', () => {
    it('should be a function', () => {
      expect(typeof translate).toBe('function')
    })
    it("should translate flat translations", () => {
      expect(translate(translationsMock, "en_US").example).toBe("Example")
    });
})
