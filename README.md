# react-littera

🌐 Modern react library for managing translations.

![littera header](https://i.imgur.com/2bkiWmg.png)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Assembless/react-littera/Test?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/Assembless/react-littera?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
[![npm](https://img.shields.io/npm/dt/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-littera?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
![GitHub last commit](https://img.shields.io/github/last-commit/Assembless/react-littera?style=for-the-badge)
[![](https://img.shields.io/github/license/Assembless/react-littera.svg?style=for-the-badge)](https://github.com/Assembless/react-littera)

## Features

- ⚡ Lightning fast
- 🔃 Variable translations
- 🗃️ User defined presets
- 👶 Shallow learning curve
- 🪝 Hooks support
- 🧩 Common format
- ♻️ Reusable

## About

Littera was created to make maintaining and managing translations more React-y. The lib isolates your translations by storing it right besides your component. It provides tools to manipulate translations, detects missing strings, injects presets and more. No more files with thousands of lines of translations. Littera's structure was inspired by [react-jss](https://github.com/cssinjs/jss/tree/master/packages/react-jss).

Below we have a **translations** object which is accepted by the core `translate` function, which then returns the translated string for the correct language.

```javascript
{
    en_US: {
        welcome: "Welcome"
    },
    de_DE: {
        welcome: "Willkommen"
    },
    pl_PL: {
        welcome: "Witaj"
    }
}
```

Let's say the active language is `en_US` (English), the output will be:

```javascript
{
  welcome: 'Welcome'
}
```

## Installation

via npm

```
npm install @assembless/react-littera
```

via yarn

```
yarn add @assembless/react-littera
```

or clone/download the repository.

## Installation

In order to initialize Littera, we recommend creating a separate file for the setup. The file will be used by your project to import key methods.

An example of the setup file:

```javascript
import { createLittera } from "@assembless/react-littera"

const LOCALES = [ "en_US", "de_DE" ] as const;

const PRESET = {
  "en_US": {
    "language": "Language",
    yes: "Yes",
    no: "No",
  },
  "de_DE": {
    "language": "Sprache",
    yes: "Ja",
    no: "Nein",
  },
}
const { LitteraService, makeTranslations, useLitteraMethods} = createLittera(LOCALES, PRESET);

export { LitteraService, makeTranslations, useLitteraMethods }
// or simply just: export createLittera(LOCALES, PRESET);
```

The next, and final step is to wrap your app with the `LitteraService` component. This will provide the context for the rest of the app.

```javascript
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { LitteraProvider } from '@assembless/react-littera'

function App() {
  return (
    <div className='App'>
      <LitteraService initialLocale='de_DE'>
        <YourApp />
      </LitteraService>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Now Littera is setup and you can start taking advantage of the library by adding translations directly into your component (We recommend creating a trans.ts file for each component).

#### Example

##### Basic

```javascript
import React from 'react'
import { useLittera } from '@assembless/react-littera'

// Object containing translations for each key...
const useTrans = makeTranslations({
  en_US: {
    example: 'Example'
  },
  de_DE: {
    example: 'Beispiel'
  }
})

const ExampleComponent = () => {
  // Obtain our translated object.
  const translated = useTrans()

  return <p>{translated.example}</p>
}

export default ExampleComponent
```

You can also use the variable and array translations:

##### Variable translations

```javascript
const useTrans = makeTranslations({
  en_US: {
    example: 'Example',
    hello: (name) => `Hello ${name}`
  },
  de_DE: {
    example: 'Beispiel',
    hello: (name) => `Hallo ${name}`
  }
})

const ExampleComponent = () => {
  // Obtain our translated object.
  const translated = useTrans()

  // Call the method obtained from our translated object with required arguments.
  const varTranslation = translated.hello('Mike') // => "Hello Mike"

  return <p>{varTranslation}</p>
}
```

##### Array translations

```javascript
const translations = {
  en_US: {
    example: 'Example',
    hello: (name) => `Hello ${name}`,
    greetings: ['Good morning', 'Hello']
  },
  de_DE: {
    example: 'Beispiel',
    hello: (name) => `Hallo ${name}`,
    greetings: ['Guten Morgen', 'Hallo']
  }
}

const ExampleComponent = () => {
  // Obtain our translated object.
  const translated = useLittera(translations)

  // Get the translated strings from the array.
  const varTranslation = translated[0] // => Good morning

  return <p>{varTranslation}</p>
}
```

## API

### TODO: Write API docs.

## Build instructions

After cloning the repo, install all dependencies using `yarn install`.

Build:
`yarn build`

Test the library:
`yarn test`

## Migration 2.X => 3.X

ℹ Migration from 2.X to 3.X coming soon!

## FAQ

#### Will I need to type all the translations by myself?

Yes, we have not implemented a translator to keep this package simple and lightweight also providing the translations manually guarantees a better user experience.

#### Does react-littera work with React Native?

Littera is fully compatible with React Native. It was tested with React Native CLI.

#### You can easily transfer translations with a component.

Just define the translations object in your components file or directory. It will travel with your component, just remember to add `@assembless/react-littera` as a dependency!

## License

[MIT](https://github.com/Assembless/react-littera/blob/master/LICENSE) © [Assembless](https://github.com/Assembless)
