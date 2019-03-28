import React, { useState } from "react";
import { render } from "react-dom";
import LitteraProvider from "../../src";

import ExampleButton from "./ExampleButton";
import ExampleText from "./ExampleText";

const preset = {
    "unique.hello": {
        de_DE: "Hallo",
        pl_PL: "Cześć",
        en_US: "Hello"
    }
};

const App = () => {
    const [language, setLanguage] = useState("en_US");
    const languages = ["en_US", "de_DE", "pl_PL"];

    const nextLanguage = () => languages[languages.indexOf(language) + 1] || languages[0];

    return (
        <LitteraProvider language={language} preset={preset}>
            <ExampleText />
            <ExampleButton onClick={() => setLanguage(nextLanguage())} />
        </LitteraProvider>
    );
};

render(<App />, document.getElementById("root"));
