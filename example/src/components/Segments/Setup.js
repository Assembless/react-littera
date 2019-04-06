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
    },
    codebox_npm: {
        position: "relative",
        margin: "4rem 0",
        "& code": {
            padding: "2rem 0",
            "&:before": {
                transition: "opacity .155s ease",
                top: "-3.4rem",
                color: "#5F4494",
                right: "0.5rem",
                bottom: "0",
                content: "'npm'",
                opacity: ".2",
                zIndex: "0",
                position: "absolute",
                fontSize: "4rem",
                fontWeight: "bold"
            },
            "&:after": {
                transition: "opacity .155s ease",
                content: "''",
                boxShadow: "-26px -2px 65px 28px rgba(158, 102, 255, 0.16)",
                width: 0,
                height: 0,
                position: "absolute",
                top: 0,
                right: "2rem"
            }
        }
    },
    codebox_yarn: {
        position: "relative",
        margin: "4rem 0",
        "& code": {
            padding: "2rem 0",
            "&:before": {
                transition: "opacity .155s ease",
                top: "-3.4rem",
                color: "#5F4494",
                right: "0.5rem",
                bottom: "0",
                content: "'yarn'",
                opacity: ".2",
                zIndex: "0",
                position: "absolute",
                fontSize: "4rem",
                fontWeight: "bold"
            },
            "&:after": {
                transition: "opacity .155s ease",
                content: "''",
                boxShadow: "-45px -2px 65px 28px rgba(158, 102, 255, 0.16)",
                width: 0,
                height: 0,
                position: "absolute",
                top: 0,
                right: "2rem"
            }
        }
    },
    doubleSection: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    "@media only screen and (max-width: 715px)": {
        codebox_npm: {
            "& code": {
                "&:before": { opacity: 0 },
                "&:after": { opacity: 0 }
            }
        },
        codebox_yarn: {
            "& code": {
                "&:before": { opacity: 0 },
                "&:after": { opacity: 0 }
            }
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

                        <p>Install react-littera</p>
                        <div className={classes.codebox_npm}>
                            <Highlight language="bash">npm i react-littera</Highlight>
                        </div>
                        <div className={classes.codebox_yarn}>
                            <Highlight language="bash">yarn add react-littera</Highlight>
                        </div>
                        <br />
                        <div>
                            <p>Wrap your code with a context provider</p>
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
                        <div>
                            <p>Start creating translations right in your components.</p>
                            <Highlight language="javascript">
                                {`import React from "react";
import {useLittera} from "react-littera";

const translations = preset => ({
    title: {
        en_US: "Hello",
        de_DE: "Hallo",
        pl_PL: "Cześć"
    },
    description: {
        en_US: \`This is just an \${preset.example}\`,
        en_US: \`Das ist nur ein \${preset.example}\`,
        en_US: \`To tylko \${preset.example}\`,
    }
});

const WelcomeComponent = () => {
    const [translated] = useLittera(translations);

    return (
        <React.Fragment>
            <h2>{translated.title}</h2>
            <p>{translated.description}</p>
        </React.Fragment>
    );
}

export default WelcomeComponent;
                            `}
                            </Highlight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Setup);
