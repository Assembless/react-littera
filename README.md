# react-littera

🌐 Lightweight react library for handling translations.

[![npm](https://img.shields.io/npm/v/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/react-littera)
[![npm](https://img.shields.io/npm/dt/react-littera.svg?style=for-the-badge)](https://www.npmjs.com/package/react-littera)
[![](https://img.shields.io/github/license/DRFR0ST/react-littera.svg?style=for-the-badge)](https://github.com/DRFR0ST/react-littera)
[![](https://img.shields.io/codecov/c/github/DRFR0ST/react-littera.svg?style=for-the-badge)](https://codecov.io/gh/DRFR0ST/react-littera)
[![](https://img.shields.io/librariesio/github/DRFR0ST/react-littera.svg?style=for-the-badge)](https://libraries.io/github/DRFR0ST/react-littera)

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

## Examples

The basic concept is that you declare an object with keys and for each language, strings with a translation and pass it to the `withLittera` HOC.

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

[![Code Sandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n5wlmrwwm4)

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
