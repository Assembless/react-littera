import React from 'react';

import { LitteraService, makeTranslations, useLitteraMethods } from '@assembless/react-littera'

const useLittera = makeTranslations({
  "en_US": {
    "hello": "Hello world!"
  },
  "de_DE": {
    "hello": "Hallo Welt!"
  },
  "pl_PL": {
    "hello": "Witaj świecie!"
  },
  "no_NO": {
    "hello": "Hei verden!",
  },
  "jp_JP": {
  }
});

// type TArrEl <T extends ReadonlyArray<unknown>> = T[number];
// type TTranslations <T extends Object> = {[key in "k" | "p" | "c" ] : T}
// type TObjShape <T extends Object, K> = T[0] as const;

// function makeTranslations<T, K extends keyof T>(translations: T) {
//   return Object.freeze(translations);
// }

const Header = () => {
  const translated = useLittera();
  const { locale, setLocale } = useLitteraMethods();

  const switchLocale = () => {
    switch(locale) {
      case "en_US":
        setLocale("de_DE");
        break;
      case "de_DE":
        setLocale("pl_PL");
        break;
      case "pl_PL":
        setLocale("no_NO");
        break;
      case "no_NO":
        setLocale("jp_JP");
        break;
      case "jp_JP":
        setLocale("en_US");
        break;
      }
    } 
  
    return <div>
      <h1>{translated.hello}</h1>
      <button onClick={switchLocale}>Switch {translated.language}</button>
    </div>
  }
  