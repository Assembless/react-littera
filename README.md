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

This tool was created to help manage and maintain translations in React applications. All translations are kept in objects contained in each component. The object has nested strings and each string is a translation for a language (e.g. `en_US: "Welcome"`).

Following the example above, the whole translations object might look like this:

```javascript
welcome: {
    en_US: "Welcome",
    pl_PL: "Witamy",
    de_DE: "Willkommen"
}
```

This makes the maintenance and development much easier as you don't have to go through a long JSON/YAML file looking for the translation key because each translation is declared directly in the component it will be used in.

## Install

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
    const [language, setLanguage] = useState("en_US");

    return (
        <div className="App">
            <LitteraProvider language={language} setLanguage={setLanguage}>
                <ChildComponents />
            </LitteraProvider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

Now you can make use of Littera by adding translations directly into your component.

Here we have two options:

-   **HOC**: If it's a class component.
-   **Hook**: If it's a functional component.

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
    render() {
        return <button>{this.props.translated.example}</button>;
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
    const [translated] = useLittera(translations); // returns translated, language and setLanguage

    return <button>{translated.example}</button>;
};

export default ExampleComponent;
```

Give it a try on _codesandbox_

##### HOC

[![Code Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6299pk9r1r)

##### Hooks

[![Code Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ywl2lm8r4z)

#### Translations example

```javascript
{
  example: {
    en_US: "Example",
    pl_PL: "Przykład",
    de_DE: "Beispiel"
  }
}
```

`props.translated.example` will equal `"Example"`, if language is set to `en_US`.

## API

`LitteraProvider` => Component providing the context for a specific language. You can pass a **language** [string] and **preset** [object] prop. To use `withLittera` and `useLittera` properly, you have to wrap your component with this provider.

`withLittera` => A HOC, you feed it with translations [object] and a component which then gets the "translated" object passed via prop (e.g. `withLittera(translations)(Component)`). Passed with props: `translated` [object], `language` [string] and `setLanguage` [func].

`useLittera` => A Hook, you feed it with translations [object] and it returns `translated` [object], `language` [string] and `setLanguage` [func].

## Build instructions

After cloning the repo, install all dependencies using `npm install`.

Build:
`npm run build`

Test the library:
`npm test`

## License

[MIT License](https://github.com/DRFR0ST/react-littera/blob/master/LICENSE)
