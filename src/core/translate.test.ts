import { translate } from './translate'

const translations = {
  en_US: {
    example: 'Example',
    hello: (name: string) => `Hello ${name}!`,
    numbers: ['First', 'Second']
  },
  de_DE: {
    example: 'Beispiel',
    hello: (name: string) => `Hallo ${name}!`,
    numbers: ['Erster', 'Zweiter']
  },
  pl_PL: {
    example: 'Przykład',
    hello: (name: string) => `Witaj ${name}!`,
    numbers: ['Pierwszy', 'Drugi']
  }
}

describe('translate', () => {
  it('is a function', () => {
    expect(typeof translate).toEqual('function')
  })

  it('returns a translated string', () => {
    expect(translate(translations, 'de_DE').example).toEqual('Beispiel')
    expect(translate(translations, 'de_DE').hello('Mike')).toEqual(
      'Hallo Mike!'
    )
    expect(translate(translations, 'de_DE').numbers[1]).toEqual('Zweiter')
  })

  it('handles nested translations', () => {
    expect(translate(translations, 'pl_PL').numbers[1]).toEqual('Drugi')
  })

  it('handles translations with placeholders', () => {
    expect(translate(translations, 'en_US').hello('Bob')).toEqual('Hello Bob!')
  })
})
