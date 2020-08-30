# react-littera

🌐 Lightweight react library for managing translations.

![littera header](https://i.imgur.com/2bkiWmg.png)

![Travis (.com)](https://img.shields.io/travis/com/DRFR0ST/react-littera?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/DRFR0ST/react-littera?style=for-the-badge)
[![npm](https://img.shields.io/npm/dt/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/react-littera)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react.svg?style=for-the-badge)](https://www.npmjs.com/package/react-littera)
![GitHub last commit](https://img.shields.io/github/last-commit/DRFR0ST/react-littera?style=for-the-badge)
[![](https://img.shields.io/github/license/DRFR0ST/react-littera.svg?style=for-the-badge)](https://github.com/DRFR0ST/react-littera)
[![Website](https://img.shields.io/website?down_message=offline&label=documentation&style=for-the-badge&up_message=online&url=https%3A%2F%2Fdrfr0st.github.io%2Freact-littera)](https://drfr0st.github.io/react-littera)

## About

Littera was created to make maintaining and managing translations easier. It allows placing translations right beside your component as well as storing translations globally.

Here below we have a **translations** object which is accepted by the `translate` function, which then returns the translated string for the correct language.
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

import LitteraProvider from "react-littera";

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

-   **HOC**
-   **Hooks**

#### Example with a HOC

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

#### Example with a Hook

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
| detectLocale | Tries to detect the browser language. Overriding initialLocale if detected. | boolean | false

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
| setLocale | Changes active language                     | `(locale: string) => void` |
| locale | Active language                     | `string` |
| setPattern | Changes locale pattern | `(pattern: RegExp) => void` |
| pattern | Locale pattern | `RegExp` |
| validatePattern | Validates locale with pattern | `(locale: string, pattern?: RegExp) => boolean` |

### Types

#### ITranslation
`{ [locale: string]: string } | (...args: (string | number)[]) => { [locale: string]: string }`

```javascript
{
    de_DE: "Einfach",
    en_US: "Simple"
}
// or
(name) => ({
    de_DE: `Hallo ${name}`,
    en_US: `Hello ${name}`
})
```

#### ITranslations
`{ [key: string]: ITranslation }`

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

## License

[MIT License](https://github.com/DRFR0ST/react-littera/blob/master/LICENSE)
