# react-littera

🌐 Lightweight react library for handling translations.

[![npm](https://img.shields.io/npm/v/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/react-littera)
[![npm](https://img.shields.io/npm/dt/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/react-littera)
[![](https://img.shields.io/github/license/DRFR0ST/react-littera.svg?style=for-the-badge)](https://github.com/DRFR0ST/react-littera)

## About

This tool was created to help create and maintain translations in React applications. All translations are kept in objects contained in each component. The object has nested strings and each string is a translation for a language (e.g. `en_US: "Welcome"`).

Following the example above, the whole object might look like this:

```javascript
welcome: {
    en_US: "Welcome",
    pl_PL: "Witamy",
    de_DE: "Willkommen"
}
```

This makes the maintenance and development much easier as you don't have to go through a long JSON file looking for the translation key and each translation is applied directly in one component.

## Install

Using npm

```
npm install react-littera
```

Using yarn

```
yarn add react-littera
```

or clone/download the repository.

## Example

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

const ExampleComponent = ({ translated }) => {
    return <button>{translated.example}</button>;
};

export default withLittera(translation)(ExampleComponent);
```

Give it a try on _codesandbox_

[![Code Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6299pk9r1r)

#### Translations example

```javascript
{
  "unique.example": {
    en_US: "Example",
    pl_PL: "Przykład",
    de_DE: "Beispiel"
  }
}
```

which can be then accessed from props as `translated`.

## API

`LitteraProvider` => Component providing the context for a specific language. You can pass a **language**(string) and **preset**(object) prop. To use `withLittera` properly, you have to wrap your component with this provider.

`withLittera` => You feed it with translations and a component which then gets the translated object passed via prop (e.g. `withLittera(translations)(Component)`).

## Build instructions

After cloning the repo, install all dependencies using `npm install`.

Build:
`npm run build`

Start example:
`npm run start`

Test the library:
`npm test:watch`

## License

[MIT License](https://github.com/DRFR0ST/react-littera/blob/master/LICENSE)