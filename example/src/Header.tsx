import React from 'react';

import { makeTranslations, useLitteraMethods } from './config'

const useLittera = makeTranslations({
  "en_US": {
    "hello": "Hello world!",
    "greetings": [
      "Hello",
      "Greetings",
    ],
    "nameNAge": (name: string, age: number) => `My name is ${name} and I'm ${age} years old.` 
  },
  "de_DE": {
    "hello": "Hallo Welt!",
    "greetings": [
      "Hallo",
      "Grüße",
    ],
    "nameAge": (name: string, age: number) => `Mein Name ist ${name} und ich bin ${age} Jahre alt.`
  },
  "pl_PL": {
    "hello": "Witaj świecie!",
    "greetings": [
      "Witaj",
      "Dzień dobry",
    ],
    "nameAge": (name: string, age: number) => `Moje imię to ${name} i jestem ${age} lat.`
  },
  "no_NO": {
    "hello": "Hei verden!",
    "greetings": [
      "Hei",
      "Velkommen",
    ],
    "nameAge": (name: string, age: number) => `Mitt navn er ${name} og jeg er ${age} år gammel.`
  },
  "jp_JP": {
    "hello": "こんにちは、世界！",
    "greetings": [
      "こんにちは、世界",
      "こんばんは、世界",
    ],
    "nameAge": (name: string, age: number) => `私の名前は${name}です。私は${age}歳です。`
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
      <h2>{translated.yes}</h2>
      <h2>{translated.greetings[1]}</h2>
      <h2>{translated.nameNAge("Pawel", 43)}</h2>
      <button onClick={switchLocale}>Switch {translated.language}</button>
    </div>
  }
   export default Header;