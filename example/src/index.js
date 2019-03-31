import React, { useState } from "react";
import { render } from "react-dom";
import LitteraProvider from "../../src";

import ExampleButton from "./components/ExampleButton";
import ExampleText from "./components/ExampleText";
import Home from "./components/Home";

import "./index.css";

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
        <Home>
            <LitteraProvider
                language={language}
                preset={preset}
                setLanguage={_language => setLanguage(_language)}
            >
                <ExampleText />
                <ExampleButton onClick={() => setLanguage(nextLanguage())} />
            </LitteraProvider>
        </Home>
    );
};

render(<App />, document.getElementById("root"));
