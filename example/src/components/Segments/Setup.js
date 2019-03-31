import React, { useState } from "react";
import injectSheet from "react-jss";

import Highlight from "react-highlight";

const styles = {
    root: {
        width: "100%",
        height: "auto",
        position: "relative",
        display: "block"
    },
    content: {
        display: "flex",
        width: "90%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "5% 5%"
    },
    image_one: {
        width: "40%",
        position: "relative",
        "& svg": {
            width: "80%",
            height: "auto",
            left: "50%",
            position: "absolute",
            transform: "translateX(-50%)"
        }
    },
    intro_text: {
        color: "#fff",
        width: "60%",

        "& h3": {
            fontSize: "4rem",
            margin: 0,
            color: "#FAFAFA",
            textTransform: "uppercase",
            marginBottom: "1.5rem"
        },
        "& p": {
            opacity: ".5",
            marginTop: 0
        },

        "& .hljs": {
            background: "#1a1720",
            borderRadius: "20px",
            padding: "1rem 1.5rem"
        }
    }
};

const Setup = ({ classes, children }) => {
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.intro_text}>
                        <h3>Setup</h3>

                        <p>1. Install react-littera via npm</p>
                        <Highlight language="bash">npm i react-littera</Highlight>
                        <p>or via yarn</p>
                        <Highlight language="bash">yarn add react-littera</Highlight>
                        <br />
                        <p>2. Wrap your code with a context provider</p>
                        <Highlight language="javascript">
                            {`import React, {useState} from "react";
import LitteraProvider from "react-littera";

const preset = {
    example: {
        en_US: "Example",
        de_DE: "Beispiel",
        pl_PL: "Przykład"
    }
};

const App = () => {
    const [language, setLanguage] = useState("en_US");

    return (
        <div className="App">
            <LitteraProvider
                language={language} 
                preset={preset} 
                setLanguage={(lang) => setLanguage(lang)}>
                    <div>
                        ...Your code
                    </div>
            </LitteraProvider>
        </div>
    );
}
                            `}
                        </Highlight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Setup);
