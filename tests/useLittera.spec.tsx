import * as React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useLittera from "../src/useLittera";
import LitteraProvider from "../src/LitteraProvider";
import { ITranslations } from "../src";

const mockTranslations = {
  simple: {
    de_DE: "Einfach",
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
  const [lang, setLang] = React.useState("pl_PL");

  return (
    <LitteraProvider language={lang} preset={mockPreset} setLanguage={setLang}>
      {children}
    </LitteraProvider>
  );
};

describe("useLittera", () => {
  it("should return locale", () => {
    const render = renderHook(() => useLittera(mockTranslations), { wrapper });
    const [, actions] = render.result.current;

    expect(actions.getLocale()).toBe("pl_PL");
  });

  it("should change locale", async () => {
    const render = renderHook(() => useLittera(mockTranslations), { wrapper });
    const [, actions] = render.result.current;

    expect(actions.getLocale()).toBe("pl_PL");

    act(() => {
      actions.setLocale("en_US");
    });

    setImmediate(() =>
      setTimeout(() => {
        expect(actions.getLocale()).toBe("en_US");
      }, 100)
    );
  });

  it("should return correct translation", () => {
    const render = renderHook(() => useLittera(mockTranslations), { wrapper });
    const [translated] = render.result.current;

    expect(translated.simple).toBe("Proste");
  });

  it("should return correct translation from preset", () => {
    const render = renderHook(() => useLittera(mockTranslationsFunc), { wrapper });
    const [translated] = render.result.current;

    expect(translated.simpleExample).toBe("Prosty Przykład");
  });

  it("should return empty object when empty translations given", () => {
    const render = renderHook(() => useLittera({}), { wrapper });
    const [translated] = render.result.current;

    expect(JSON.stringify(translated)).toBe(JSON.stringify({}));
  });
});
