import * as React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useLittera /*, useLitteraMethods */ } from './hooks'
import { LitteraService } from './service'

const mockTranslations = Object.freeze({
  en_US: {
    hello: (name: string) => `Hello ${name}`,
    simple: 'Simple',
    very: (something: string, somethingMore: string) =>
      `Very ${something} and ${somethingMore}`,
    slogans: ['Welcome to the show', 'Welcome back!'],
    greetings: ['Good morning', 'Hello']
  },
  de_DE: {
    hello: (name: string) => `Hallo ${name}`,
    simple: 'Einfach',
    very: (something: string, somethingMore: string) =>
      `Sehr ${something} und ${somethingMore}`,
    slogans: ['Willkommen in der Show', 'Willkommen zurück!'],
    greetings: ['Guten Morgen', 'Hallo']
  },
  pl_PL: {
    hello: (name: string) => `Cześć ${name}`,
    simple: 'Proste',
    very: (something: string, somethingMore: string) =>
      `Bardzo ${something} oraz ${somethingMore}`,
    slogans: ['Witamy w programie', 'Witaj spowrotem!'],
    greetings: ['Dzień dobry', 'Cześć']
  }
})

// const mockMissingTranslations = {
//   pl_PL: {
//     simple: 'Proste'
//   },
//   en_US: {
//     simple: 'Simple'
//   }
// }

const mockPreset = {
  en_US: {
    example: 'Example'
  },
  de_DE: {
    example: 'Beispiel'
  },
  pl_PL: {
    example: 'Przykład'
  }
}

const wrapper = ({ children }: any) => {
  return (
    <LitteraService
      initialLocale='pl_PL'
      locales={['en_US', 'de_DE', 'pl_PL']}
      preset={mockPreset}
    >
      {children}
    </LitteraService>
  )
}

describe('useLittera', () => {
  it('should return correct translation', () => {
    const render = renderHook(() => useLittera(mockTranslations), { wrapper })
    const translated = render.result.current

    expect(translated.simple).toBe('Proste')
  })

  it('should return correct translation without LitteraProvider', () => {
    const render = renderHook(() => useLittera(mockTranslations, 'pl_PL'), {})
    const translated = render.result.current

    expect(translated.simple).toBe('Proste')
  })

  it('should return correct translation with variables', () => {
    const render = renderHook(() => useLittera(mockTranslations), {
      wrapper
    })
    const translated = render.result.current

    expect(translated.hello('Mike')).toBe('Cześć Mike')
    expect(translated.hello(translated.simple)).toBe('Cześć Proste')
    expect(translated.hello(translated.very(translated.simple, 'Magic'))).toBe(
      'Cześć Bardzo Proste oraz Magic'
    )
  })

  it('should return correct translation with arrays', () => {
    const render = renderHook(() => useLittera(mockTranslations), {
      wrapper
    })
    const translated = render.result.current

    expect(translated.slogans.length).toBe(2)
    expect(translated.slogans[0]).toBe('Witamy w programie')
    expect(translated.greetings).toStrictEqual(['Dzień dobry', 'Cześć'])
  })

  /** @deprecated since v3.0 */
  // it('should return correct translation from preset', () => {
  //   const render = renderHook(() => useLittera(mockTranslationsFunc), {
  //     wrapper
  //   })
  //   const translated = render.result.current

  //   expect(translated.simpleExample).toBe('Prosty Przykład')
  // })

  it('should return empty object when empty translations given', () => {
    const render = renderHook(() => useLittera({}), { wrapper })
    const translated = render.result.current

    expect(JSON.stringify(translated)).toBe(JSON.stringify({}))
  })

  // ! Failing!
  // it('should throw error on local change with invalid pattern', () => {
  //   const render = renderHook(() => useLitteraMethods(), { wrapper })
  //   const methods = render.result.current

  //   const t = () => {
  //     methods.setLocale('pl-pl')
  //   }

  //   expect(t).toThrowError(`Locale does not match the pattern.`)
  // })

  // TODO: Not implemented yet.
  // it('should warn about missing translations', () => {
  //   console.warn = jest.fn()
  //   renderHook(() => useLittera(mockMissingTranslations), { wrapper })

  //   // @ts-ignore
  //   expect(console.warn.mock.calls[0][0]).toBe(
  //     `You are missing "simple" in de_DE.`
  //   )
  // })
})

// describe('useLitteraMethods', () => {
//   it('should have all methods and variables.', () => {
//     const render = renderHook(() => useLitteraMethods(), { wrapper })
//     const {
//       locale,
//       locales,
//       setLocale,
//       validateLocale,
//       preset,
//       translate,
//       translateSingle
//     } = render.result.current

//     expect(typeof locale).toBeTruthy()
//     expect(typeof locales).toBeTruthy()
//     expect(typeof setLocale).toBeTruthy()
//     expect(typeof validateLocale).toBeTruthy()
//     expect(typeof preset).toBeTruthy()
//     expect(typeof translate).toBeTruthy()
//     expect(typeof translateSingle).toBeTruthy()
//   })

//   it('should corretly utilize translateSingle method.', () => {
//     const render = renderHook(() => useLitteraMethods(), { wrapper })
//     const { translateSingle } = render.result.current

//     expect(translateSingle(mockTranslations.simple, 'pl_PL')).toBe('Proste')
//   })

//   it('should corretly utilize translate method.', () => {
//     const render = renderHook(() => useLitteraMethods(), { wrapper })
//     const { translate } = render.result.current

//     expect(translate(mockTranslations, 'pl_PL').simple).toBe('Proste')
//   })

//   it('should return locale', () => {
//     const render = renderHook(() => useLitteraMethods(), { wrapper })
//     const { locale } = render.result.current

//     expect(locale).toBe('pl_PL')
//   })

//   it('should change locale', async () => {
//     const render = renderHook(() => useLitteraMethods(), { wrapper })
//     const { locale, setLocale } = render.result.current

//     expect(locale).toBe('pl_PL')

//     act(() => {
//       setLocale('en_US')
//     })

//     setTimeout(() => {
//       expect(locale).toBe('en_US')
//     }, 500)
//   })
// })
