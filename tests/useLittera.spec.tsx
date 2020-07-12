import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useLittera, useLitteraMethods } from "../src/hooks";
import { LitteraProvider } from "../src/LitteraProvider";
import { ITranslations } from "../src";

const mockTranslations = {
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  }
};

const mockMissingTranslations = {
  simple: {
    pl_PL: "Proste",
    en_US: "Simple"
  }
};

const mockTranslationsFunc = (preset: ITranslations) => ({
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

const wrapper = ({ children }) => {
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
    }, 100);
  });

  it("should return correct translation", () => {
    const render = renderHook(() => useLittera(mockTranslations), { wrapper });
    const translated = render.result.current;

    expect(translated.simple).toBe("Proste");
  });

  it("should return correct translation from preset", () => {
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
});
