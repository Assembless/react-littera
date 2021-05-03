# react-littera

🌐 Modern react library for managing translations.

![littera header](https://i.imgur.com/2bkiWmg.png)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Assembless/react-littera/Test?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/Assembless/react-littera?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
[![npm](https://img.shields.io/npm/dt/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-littera?style=for-the-badge)](https://www.npmjs.com/package/@assembless/react-littera)
![GitHub last commit](https://img.shields.io/github/last-commit/Assembless/react-littera?style=for-the-badge)
[![](https://img.shields.io/github/license/Assembless/react-littera.svg?style=for-the-badge)](https://github.com/Assembless/react-littera)
[![Website](https://img.shields.io/website?down_message=offline&label=documentation&style=for-the-badge&up_message=online&url=https%3A%2F%2Fdrfr0st.github.io%2Freact-littera)](https://assembless.github.io/react-littera)

## Features

- ⚡ Lightning fast
- 🧩 Variable translations
- 🗃️ User defined presets
- 👶 Shallow learning curve
- ♻️ Reusable

## About

Littera was created to make maintaining and managing translations easier. It allows placing translations right beside your component as well as storing translations globally. Littera's structure was inspired by [react-jss](https://github.com/cssinjs/jss/tree/master/packages/react-jss).

Here below we have a **translations** object which is accepted by the core `translate` function, which then returns the translated string for the correct language. It can be passed to the `useLittera` hook or `withLittera` HOC.
```javascript
{
    welcome: {
        en_US: "Welcome",
        pl_PL: "Witamy",
        de_DE: "Willkommen"
    }
}
```

Let's say the active language is `en_US` (English), the output will be:
```javascript
{
    welcome: "Welcome"
}
```

## Simply explained

Let's assume you want to have a translations system in your React app that updates all the text when the language changes. Bam! All you need to do is: define a simple object that lists all translated strings for each language. Then pass it to a hook and it will return a reduced object with translations only for active language. Display it like any other string. Ready.

## Installation

via npm

```
npm install react-littera
```

via yarn

```
yarn add react-littera
```

or clone/download the repository.

## Usage

First you have to wrap your components with a provider and feed it with a list of available languages.

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

import { LitteraProvider } from "react-littera";

function App() {
    return (
        <div className="App">
            <LitteraProvider locales={[ "en_US", "pl_PL", "de_DE" ]}>
                <YourApp />
            </LitteraProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Now you can make use of Littera by adding translations directly into your component.

Here we have two options:

-   **Hooks** (recommended)
-   **HOC** (deprecated)

#### Hooks Example

##### Basic
```javascript
import React from "react";
import { useLittera } from "react-littera";

// Object containing translations for each key...
const translations = {
    example: {
        en_US: "Example",
        pl_PL: "Przykład",
        de_DE: "Beispiel"
    }
};

const ExampleComponent = () => {
    // Obtain our translated object.
    const translated = useLittera(translations);
    // Get access to global littera methods for currect context.
    const methods = useLitteraMethods();

    const handleLocaleChange = () => {
        // Change language to German.
        methods.setLocale("de_DE");
    }

    return <button onClick={handleLocaleChange}>{translated.example}</button>;
};

export default ExampleComponent;
```

##### Variable translations
```javascript
import React from "react";
import { useLittera } from "react-littera";

const translations = {
    // Use a function for variable translations.
    hello: (name) => ({
        en_US: `Hello ${name}`,
        pl_PL: `Cześć ${name}`,
        de_DE: `Hallo ${name}`
    })
};

const ExampleComponent = () => {
    // Obtain our translated object.
    const translated = useLittera(translations);

    // Call the method obtained from our translated object with required arguments.
    const varTranslation = translated.hello("Mike");

    return <button onClick={handleLocaleChange}>{varTranslation}</button>;
};

export default ExampleComponent;
```

#### HOC Example

```javascript
import React from "react";
import { withLittera } from "react-littera";

// Object containing translations for each key...
const translations = {
    example: {
        en_US: "Example",
        pl_PL: "Przykład",
        de_DE: "Beispiel"
    }
};

class ExampleComponent extends React.Component {

    handleLocaleChange() {
        const { setLocale } = this.props;

        setLocale("de_DE");
    }

    render() {
        const { translated } = this.props;

        return <button onClick={this.handleLocaleChange}>{translated.example}</button>;
    }
}

export default withLittera(translation)(ExampleComponent);
```

## API

 #### LitteraProvider
 type: `ReactContext<ILitteraProvider>`

 Component providing the core context. To use `withLittera` and `useLittera` properly, you have to wrap your components with this provider.

| Key       | Description                                 | Type                     | Default                 |
|-----------|---------------------------------------------|--------------------------|-------------------------|
| initialLocale | Initial language.                    | string |                         |
| locales | List of available languages.                   | Array<string\> | `[ "en_US" ]` |
| setLocale | Callback called when active language changes.                     | (locale: string) => void |                         |
| preset    | Preset of translations.                      | { [key: string]: { [locale: string]: string } }            | `{}`                    |
| pattern   | Locale pattern. Default format is xx_XX. | RegExp                   | `/[a-z]{2}_[A-Z]{2}/gi` |
| detectLocale | Tries to detect the browser language. Overriding initialLocale if detected. Not available yet for React Native! | boolean | false

 #### withLittera - HOC
 type: `(translations: ITranslations) => (Component: React.FunctionComponent) => JSX.Element`

A HOC, you feed it with `translations`(ITranslations) and a component which then gets the `translated` object passed via prop (e.g. `withLittera(translations)(Component)`). 

| Key       | Description                                 | Type                     | Default                 |
|-----------|---------------------------------------------|--------------------------|-------------------------|
| translated    | Translated object                            | ITranslated                   |               |
| setLocale | Changes active language                     | (locale: string) => void |                         |
| preset    | Preset of translations                      | { [key: string]: { [locale: string]: string } }            | `{}`                    |
| locale    | Active language                  | string            | `en_US`                    |

 #### useLittera - Hook
 type: `(translations: ITranslations) => ITranslated`

 A Hook, you feed it with `translations`(ITranslations) and it returns `translated`(ITranslated).

 #### useLitteraMethods - Hook
 type: `() => { see methods below }`

This hook exposes following methods:
| Key       | Description                                 | Type                     |
|-----------|---------------------------------------------|--------------------------|
| locale | Active language                     | `string` |
| locales | List of all locales | `string[]` |
| setLocale | Changes active language | `(locale: string) => void` |
| validateLocale | Validates locale with pattern | `(locale: string, pattern?: RegExp) => boolean` |
| preset | Preset object previously passed to the provider | `ITranslations` |
| translate | Core translate method                    | `(translations: T, locale: string) => ITranslated` |
| translateSingle | Core method for translating a single key | `<T>(translation: T, locale: string) => ISingleTranslated<T>` |

### Types

#### ITranslation
`{ [locale: string]: string }`

```javascript
{
    de_DE: "Einfach",
    en_US: "Simple"
}
```

#### ITranslationVarFn
`(...args: (string | number)[]) => ITranslation`

```javascript
(name) => ({
    de_DE: `Hallo ${name}`,
    en_US: `Hello ${name}`
})
```

#### ITranslations
`{ [key: string]: ITranslation | ITranslationVarFn }`

```javascript
{
    simple: {
        de_DE: "Einfach",
        en_US: "Simple"
    },
    hello: (name) => ({
        de_DE: `Hallo ${name}`,
        en_US: `Hello ${name}`
    })
}
```

#### ITranslated
`{ [key: string]: string | (...args: (string | number)[]) => string }`

```javascript
{
    simple: "Simple",
    hello: (name) => "Hello Mike" // Run this function to get variable translation.
}
```

## Build instructions

After cloning the repo, install all dependencies using `npm install`.

Build:
`npm run build`

Test the library:
`npm test`

## Migration 1.X => 2.X

The migration process is straightforward. You have to rename some properties and change the way you use `useLittera`.

### Changed naming
- `language` => `locale`
- `setLanguage` => `setLocale`

Mainly pay attention to `LitteraProvider` and `withLittera` props naming.

### LitteraProvider changes
The provider accepts 2 new props `locales: string[]` and `initialLocale?: string`. You don't need to use your own state from now, the provider will handle it by itself. That makes the `locale` and `setLocale` props not required.

```javascript
// v1.X
import LitteraProvider from "react-littera";

const App = () => {
    const [language, setLanguage] = useState("en_US");

    return <LitteraProvider language={language} setLanguage={setLanguage}>
       ...
    </LitteraProvider>
}

// v2.X
import { LitteraProvider } from "react-littera";

const App = () => {

    return <LitteraProvider locales={["en_US", "de_DE", "pl_PL"]}>
       ...
    </LitteraProvider>
}
```

### useLittera changes
The hook returns only the translated object now. Use `useLitteraMethods` to get/set locale, set pattern etc.

```javascript
// The translations object remains the same.
const translations = {
    example: {
        "en_US": "Example",
        "de_DE": "Beispiel",
        "pl_PL": "Przykład"
    }
}

// v1.X
const [translated, locale, setLanguage] = useLittera(translations)

// v2.X
const translated = useLittera(translations);
const { locale, setLocale, pattern, setPattern, validateLocale } = useLitteraMethods();
```

## FAQ

#### Will I need to type all the translations by myself?
Yes, we have not implemented a translator to keep this package simple and lightweight also providing the translations manually guarantees a better user experience.

#### Does react-littera work with React Native?
React Native compatibility has not been tested but the community reported 100% usability.

#### You can easily transfer translations with a component.
Just define the translations object in your components file or directory. It will travel with your component, just remember to add react-littera as a dependency!

## License

[MIT License](https://github.com/Assembless/react-littera/blob/master/LICENSE)
