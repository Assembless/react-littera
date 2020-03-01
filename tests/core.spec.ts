import {translate} from '../src/utils/translate'
import { ITranslations } from '../types'

const translationsMock = {
  example: {
    de_DE: "Beispiel",
    en_US: "Example",
    pl_PL: "Przykład"
  }
}
const translations2dMock: ITranslations = {
  profile: {
    sex: {
      de_DE: "Geschlecht",
      en_US: "Sex",
      pl_PL: "Płeć",
    }
  },
  example: {
    de_DE: "Beispiel",
    en_US: "Example",
    pl_PL: "Przykład"
  }
}

const translations3dMock: ITranslations = {
  profile: {
    sex: {
      de_DE: "Geschlecht",
      en_US: "Sex",
      pl_PL: "Płeć",
    },
    props: {
      name: {
        de_DE: "Name",
        en_US: "Name",
        pl_PL: "Nazwa"
      }
    }
  },
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
  it("should translate 2d translations", () => {
    expect(translate(translations2dMock, "pl_PL").example).toBe("Przykład")
    expect(translate(translations2dMock, "pl_PL").profile.sex).toBe("Płeć")
  });
  it("should translate 3d translations", () => {
    expect(translate(translations3dMock, "pl_PL").example).toBe("Przykład")
    expect(translate(translations3dMock, "pl_PL").profile.sex).toBe("Płeć")
    expect(translate(translations3dMock, "pl_PL").profile.props.name).toBe("Nazwa")
  });
})
