import * as React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { useLitteraMethods } from './hooks'
import { LitteraService } from './service'
import { makeTranslations } from '..'

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

const useLittera = makeTranslations(mockTranslations)

const mockMissingTranslations = {
  en_US: {
    example: 'Example'
  },
  de_DE: {
    example: 'Beispiel'
  },
  pl_PL: {}
}

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
    const render = renderHook(() => useLittera(), { wrapper })
    const translated = render.result.current

    expect(translated.simple).toBe('Proste')
  })

  it('should return correct translation including preset', () => {
    const render = renderHook(() => useLittera(), { wrapper })
    const translated = render.result.current

    // TODO: Typing
    expect(translated.example).toBe('Przykład')
  })

  it('should return correct translation with variables', () => {
    const render = renderHook(() => useLittera(), {
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
    const render = renderHook(() => useLittera(), {
      wrapper
    })
    const translated = render.result.current

    expect(translated.slogans.length).toBe(2)
    expect(translated.slogans[0]).toBe('Witamy w programie')
    expect(translated.greetings).toStrictEqual(['Dzień dobry', 'Cześć'])
  })

  // it('should return empty object when empty translations given', () => {
  //   const useEmptyLittera = makeTranslations({})
  //   const render = renderHook(() => useEmptyLittera(), { wrapper })
  //   const translated = render.result.current

  //   expect(JSON.stringify(translated)).toBe(JSON.stringify({}))
  // })

  it('should warn about missing translations', () => {
    console.warn = jest.fn()
    const useMissingLittera = makeTranslations(mockMissingTranslations)
    renderHook(() => useMissingLittera('pl_PL'), { wrapper })

    // @ts-ignore
    expect(console.warn.mock.calls[0][0]).toEqual(
      `Key example is missing in locale pl_PL`
    )
  })
})

describe('useLitteraMethods', () => {
  it('should have all methods and variables.', () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper })
    const { locale, locales, setLocale } = render.result.current

    expect(typeof locale).toBeTruthy()
    expect(typeof locales).toBeTruthy()
    expect(typeof setLocale).toBeTruthy()
  })

  it('should corretly utilize translate method.', () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper })
    const { translate } = render.result.current

    expect(translate(mockTranslations).simple).toBe('Proste')
    expect(translate(mockTranslations, 'de_DE').simple).toBe('Einfach')
  })

  it('should return locale', () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper })
    const { locale } = render.result.current

    expect(locale).toBe('pl_PL')
  })

  it('should change locale', async () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper })
    const { locale, setLocale } = render.result.current

    expect(locale).toBe('pl_PL')

    act(() => {
      setLocale('en_US')
    })

    setTimeout(() => {
      expect(locale).toBe('en_US')
    }, 500)
  })

  it('should throw error for invalid locale', async () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper })
    const { setLocale } = render.result.current

    expect(() => setLocale('jp_JP')).toThrowError(
      `Invalid locale provided. Expected [en_US, de_DE, pl_PL], got jp_JP`
    )
  })
})
