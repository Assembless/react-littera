import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import LitteraProvider from "../../src";

import ExampleButton from "./components/ExampleButton";
import ExampleText from "./components/ExampleText";
import Home from "./components/Home";

import { ThemeProvider } from "react-jss";

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
    const [theme, setTheme] = useState("dark");
    const languages = ["en_US", "de_DE", "pl_PL"];

    const nextLanguage = () => languages[languages.indexOf(language) + 1] || languages[0];

    let appTheme = {
        palette: {
            primary: "#5F4494",
            background: "#1c1922"
        }
    };

    useEffect(() => {
        if (theme === "dark") {
            appTheme = {
                palette: {
                    primary: "#5F4494",
                    background: "#1c1922"
                }
            };
        } else {
            appTheme = {
                palette: {
                    primary: "#5F4494",
                    background: "#eee"
                }
            };
        }

        console.log(appTheme);
    }, [theme]);

    const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <ThemeProvider theme={appTheme}>
            <Home switchTheme={switchTheme}>
                <LitteraProvider
                    language={language}
                    preset={preset}
                    setLanguage={_language => setLanguage(_language)}
                >
                    <ExampleText />
                    <ExampleButton onClick={() => setLanguage(nextLanguage())} />
                </LitteraProvider>
            </Home>
        </ThemeProvider>
    );
};

render(<App />, document.getElementById("root"));
