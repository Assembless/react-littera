import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useLittera, useLitteraMethods } from "../src/hooks";
import { LitteraProvider } from "../src/LitteraProvider";
import { ITranslations } from "../src";

const mockTranslations = Object.freeze({
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  }
});

const mockTranslationsWithVariables = Object.freeze({
  hello: (name: string) => ({
    de_DE: `Hallo ${name}`,
    pl_PL: `Cześć ${name}`,
    en_US: `Hello ${name}`
  }),
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  },
  very: (something: string, somethingMore: string) => ({
    de_DE: `Sehr ${something} und ${somethingMore}`,
    pl_PL: `Bardzo ${something} oraz ${somethingMore}`,
    en_US: `Very ${something} and ${somethingMore}`
  })
});

const mockTranslationsArrs = Object.freeze({
  hello: (name: string) => ({
    de_DE: `Hallo ${name}`,
    pl_PL: `Cześć ${name}`,
    en_US: `Hello ${name}`
  }),
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  },
  slogans: [
    {
      en_US: "Welcome to the show",
      pl_PL: "Witamy w programie"
    },
    {
      en_US: "Welcome back!",
      pl_PL: "Witaj spowrotem!"
    },
  ],
  greetings: [
    {
      pl_PL: "Dzień dobry",
      en_US: "Good morning"
    },
    {
      pl_PL: "Cześć",
      en_US: "Hello"
    },
  ]
})

const mockMissingTranslations = {
  simple: {
    pl_PL: "Proste",
    en_US: "Simple"
  }
};

const mockTranslationsFunc = (preset: typeof mockPreset) => ({
  simpleExample: {
    de_DE: `Einfacher ${preset.example.de_DE}`,
    pl_PL: `Prosty ${preset.example.pl_PL}`,
    en_US: `Simple ${preset.example.en_US}`
  }
});

const mockPreset = {
  example: {
    de_DE: "Beispiel",
    en_US: "Example",
    pl_PL: "Przykład"
  }
};

const wrapper = ({ children }: any) => {
  return (
    <LitteraProvider
      initialLocale="pl_PL"
      locales={["en_US", "de_DE", "pl_PL"]}
      preset={mockPreset}
    >
      {children}
    </LitteraProvider>
  );
};

describe("useLittera", () => {
  it("should return correct translation", () => {
    const render = renderHook(() => useLittera(mockTranslations), { wrapper });
    const translated = render.result.current;

    expect(translated.simple).toBe("Proste");
  });

  it("should return correct translation without LitteraProvider", () => {
    const render = renderHook(() => useLittera(mockTranslations, "pl_PL"), {});
    const translated = render.result.current;

    expect(translated.simple).toBe("Proste");
  });

  it("should return correct translation with variables", () => {
    const render = renderHook(() => useLittera(mockTranslationsWithVariables), { wrapper });
    const translated = render.result.current;

    expect(translated.hello("Mike")).toBe("Cześć Mike");
    expect(translated.hello(translated.simple)).toBe("Cześć Proste");
    expect(translated.hello(translated.very(translated.simple, "Magic"))).toBe("Cześć Bardzo Proste oraz Magic");
  });

  it("should return correct translation with arrays", () => {
    const render = renderHook(() => useLittera(mockTranslationsArrs), { wrapper });
    const translated = render.result.current;

    expect(translated.slogans.length).toBe(2);
    expect(translated.slogans[0]).toBe("Witamy w programie");
    expect(translated.greetings).toStrictEqual([ "Dzień dobry", "Cześć" ]);
  });

  it("should return correct translation from preset", () => {
    // @ts-ignore
    const render = renderHook(() => useLittera(mockTranslationsFunc), { wrapper });
    const translated = render.result.current;

    expect(translated.simpleExample).toBe("Prosty Przykład");
  });

  it("should return empty object when empty translations given", () => {
    const render = renderHook(() => useLittera({}), { wrapper });
    const translated = render.result.current;

    expect(JSON.stringify(translated)).toBe(JSON.stringify({}));
  });

  it("should throw error on local change with invalid pattern", () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper });
    const methods = render.result.current;

    const t = () => {
      methods.setLocale("pl-pl");
    };

    expect(t).toThrowError(`Locale does not match the pattern.`);
  });

  it("should warn about missing translations", () => {
    console.warn = jest.fn();
    renderHook(() => useLittera(mockMissingTranslations), { wrapper });

    // @ts-ignore
    expect(console.warn.mock.calls[0][0]).toBe(`You are missing "simple" in de_DE.`);
  });

  it("should fall back to available locale if translations for active are missing", () => {
    console.warn = jest.fn();
    const render = renderHook(() => useLittera(mockMissingTranslations, "de_DE"), { wrapper });
    const translated = render.result.current;

    const fallbackLocale = Object.keys(mockMissingTranslations.simple)[0];

    // @ts-ignore
    expect(translated.simple).toEqual(mockMissingTranslations.simple[fallbackLocale]);
  });
});

describe("useLitteraMethods", () => {
  it("should have all methods and variables.", () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper });
    const { locale,
      locales,
      setLocale,
      validateLocale,
      preset,
      translate,
      translateSingle } = render.result.current;

    expect(typeof locale).toBeTruthy();
    expect(typeof locales).toBeTruthy();
    expect(typeof setLocale).toBeTruthy();
    expect(typeof validateLocale).toBeTruthy();
    expect(typeof preset).toBeTruthy();
    expect(typeof translate).toBeTruthy();
    expect(typeof translateSingle).toBeTruthy();
  });

  it("should corretly utilize translateSingle method.", () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper });
    const { translateSingle } = render.result.current;

    expect(translateSingle(mockTranslations.simple, "pl_PL")).toBe("Proste");
  });

  it("should corretly utilize translate method.", () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper });
    const { translate } = render.result.current;

    expect(translate(mockTranslations, "pl_PL").simple).toBe("Proste");
  });

  it("should return locale", () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper });
    const { locale } = render.result.current;

    expect(locale).toBe("pl_PL");
  });

  it("should change locale", async () => {
    const render = renderHook(() => useLitteraMethods(), { wrapper });
    const { locale, setLocale } = render.result.current;

    expect(locale).toBe("pl_PL");

    act(() => {
      setLocale("en_US");
    });

    setTimeout(() => {
      expect(locale).toBe("en_US");
    }, 500);
  });
})