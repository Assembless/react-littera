# react-littera

🌐 Lightweight react library for managing translations.

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

First you have to wrap your components with a provider and feed it some data.

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

import LitteraProvider from "react-littera";

function App() {
    const [locale, setLocale] = useState("en_US");

    return (
        <div className="App">
            <LitteraProvider locale={locale} setLocale={setLocale}>
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

## API

 ### **LitteraProvider**
 type: `ReactContext<ILitteraProvider>`

 Component providing the core context. To use `withLittera` and `useLittera` properly, you have to wrap your component with this provider.

| Key       | Description                                 | Type                     | Default                 |
|-----------|---------------------------------------------|--------------------------|-------------------------|
| locale    | Active language                             | string                   | `"en_US"`               |
| setLocale | Changes active language                     | (locale: string) => void |                         |
| preset    | Preset of translations                      | ITranslations            | `{}`                    |
| pattern   | Locale pattern. Default format is xx**_**XX | RegExp                   | `/[a-z]{2}_[A-Z]{2}/gi` |

 ### **withLittera** - HOC
 type: `(translations: ITranslations) => (Component: React.FunctionComponent) => JSX.Element`

A HOC, you feed it with translations [object] and a component which then gets the "translated" object passed via prop (e.g. `withLittera(translations)(Component)`). 

| Key       | Description                                 | Type                     | Default                 |
|-----------|---------------------------------------------|--------------------------|-------------------------|
| translated    | Translated object                            | ITranslated                   |               |
| setLocale | Changes active language                     | (locale: string) => void |                         |
| preset    | Preset of translations                      | ITranslations            | `{}`                    |
| locale    | Active language                  | string            | `en_US`                    |

 ### **useLittera** - Hook
 type: `(translations: ITranslations) => ITranslated`

 A Hook, you feed it with translations [object] and it returns `translated` [object].

 ### **useLitteraMethods** - Hook
 type: `() => { see below }`

This hook exposes following methods:
| Key       | Description                                 | Type                     |
|-----------|---------------------------------------------|--------------------------|
| setLocale | Changes active language                     | `(locale: string) => void` |
| getLocale | Returns active language                     | `() => string` |
| setPattern | Changes locale pattern | `(pattern: RegExp) => void` |
| getPattern | Returns locale pattern | `() => RegExp` |
| validatePattern | Validates locale with pattern | `(locale: string, pattern?: RegExp) => boolean` |

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

### useLittera changes
The hook returns only the translated object now. Use `useLitteraMethods` instead of the secondary `actions` parameter returned from useLittera like before.

```javascript
// v1.X
const [translated, actions] = useLittera(translated)

// v2.X
const translated = useLittera(translated);
const actions = useLitteraMethods();
```

## License

[MIT License](https://github.com/DRFR0ST/react-littera/blob/master/LICENSE)
