import React from 'react'

import { LitteraService, useLittera, useLitteraMethods } from '@assembless/react-littera'

const App = () => {
  return <LitteraService locales={[ "en_US", "de_DE", "pl_PL", "no_NO" ]}>
    <Header />
  </LitteraService>
}

// ---

const translations = {
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
    "hello": "Hei verden!"
  }
}

const Header = () => {
  const translated = useLittera(translations)
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
        setLocale("en_US");
        break;
    }
  }

  return <div>
    <h1>{translated.hello}</h1>
    <button onClick={switchLocale}>Switch language</button>
  </div>
}

export default App
