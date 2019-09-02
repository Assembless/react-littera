import React, { useState } from "react";
import injectSheet from "react-jss";
import { FaCode, FaFileAlt } from "react-icons/fa";
import Highlight from "react-highlight";
import LitteraProvider, { useLittera } from "react-littera";
import Fab from "../Fab";

const styles = {
    root: {
        width: "100%",
        height: "auto",
        position: "relative",
        display: "block"
    },
    content: {
        display: "flex",
        width: "80%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "10vh 10%",
        transition: "all 255ms ease"
    },
    card: {
        display: "inline-block",
        width: "60%",
        height: "auto",
        border: "8px dashed rgba(79, 56, 121, .3)",
        borderRadius: "15px",
        padding: "2.5rem 3.5rem",
        color: "#fff",
        position: "relative",
        maxWidth: "750px",
        "& h1": {
            marginBottom: 0
        },
        "& p": {
            marginTop: 0,
            opacity: ".7"
        },
        "& .hljs": {
            background: "#1c1922"
        }
    },
    cardTitle: {
        width: "254px",
        textAlign: "center",
        marginTop: "-90px",
        fontSize: "54px",
        marginBottom: "0",
        marginLeft: "5px",
        background: "#1C1922"
    },
    cardContainer: {
        padding: "1.5rem 2.5rem"
    },
    cardContent: {
        marginTop: 0,
        opacity: ".7",
        padding: "1rem 1.2rem",
        background: "rgba(95, 68, 148, .2)",
        borderRadius: "15px"
    },
    flags: {
        display: "inline-block",
        paddingRight: "4%"
    }
};

const translations = {
    head: {
        de_DE: "Nelson Mandela",
        pl_PL: "Nelson Mandela",
        en_US: "Nelson Mandela"
    },
    author: {
        de_DE: "Zitat",
        pl_PL: "Cytat",
        en_US: "Quote"
    },
    content: {
        de_DE:
            "Wenn Sie mit einem Mann in einer Sprache sprechen, die er versteht, geht ihm das in den Kopf. Wenn du mit ihm in seiner Sprache sprichst, geht ihm das sehr ans Herz.",
        en_US:
            "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
        pl_PL:
            "Jeśli rozmawiasz z mężczyzną w języku, który on rozumie, trafia to do jego głowy. Jeśli mówisz do niego w jego języku, trafia to do jego serca."
    }
};

const flags = [
    { text: "English", flag: "us", language: "en_US" },
    { text: "German", flag: "de", language: "de_DE" },
    { text: "Polish", flag: "pl", language: "pl_PL" }
];

const Examples = ({ classes, children }) => {
    const [language, setLanguage] = useState("en_US");

    return (
        <LitteraProvider language={language} preset={{}} setLanguage={_lang => setLanguage(_lang)}>
            <div className={classes.root}>
                <Content classes={classes} setLanguage={_lang => setLanguage(_lang)} />
            </div>
        </LitteraProvider>
    );
};

const Content = ({ classes, setLanguage }) => {
    return (
        <div className={classes.content}>
            <div className={classes.flags}>
                {flags.map(e => (
                    <FlagButton setLanguage={setLanguage} {...e} />
                ))}
            </div>
            <Card classes={classes} />
        </div>
    );
};

const Card = ({ classes }) => {
    const [codeShown, showCode] = useState(false);
    const [translated] = useLittera(translations);

    const preview = (
        <React.Fragment>
            <h1>{translated.head}</h1>
            <p>{translated.author}</p>
            <br />
            <p className={classes.cardContent}>{translated.content}</p>
            <Fab
                onClick={() => showCode(!codeShown)}
                style={{
                    position: "absolute",
                    right: "-20px",
                    top: "-25px"
                }}
            >
                <FaCode />
            </Fab>
        </React.Fragment>
    );

    const code = (
        <div style={{ overflow: "auto" }}>
            <Highlight language="javascript">
                {`import React from "react";
import { useLittera } from "react-littera";

const translations = {
    head: {
        de_DE: "Nelson Mandela",
        pl_PL: "Nelson Mandela",
        en_US: "Nelson Mandela"
    },
    author: {
        de_DE: "Nelson Mandela",
        pl_PL: "Nelson Mandela",
        en_US: "Nelson Mandela"
    },
    content: {
        de_DE:
            "Wenn Sie mit einem Mann in einer Sprache sprechen, die er versteht, geht ihm das in den Kopf. Wenn du mit ihm in seiner Sprache sprichst, geht ihm das sehr ans Herz.",
        en_US:
            "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
        pl_PL:
            "Jeśli rozmawiasz z mężczyzną w języku, który on rozumie, trafia to do jego głowy. Jeśli mówisz do niego w jego języku, trafia to do jego serca."
    }
};

const Card = () => {
    const [ translated ] = useLittera(translations);

    return (
        <div>
            <h3>{translated.title}</h3>
            <p>{translated.subtitle}</p>
            <br/>
            <p>{translated.content}</p>
        </div>
    );
}

export default Card;
`}
            </Highlight>
            <Fab
                onClick={() => showCode(!codeShown)}
                style={{
                    position: "absolute",
                    right: "-20px",
                    top: "-25px"
                }}
            >
                <FaFileAlt />
            </Fab>
        </div>
    );

    return (
        <div className={classes.card}>
            <h4 className={classes.cardTitle}>Examples</h4>
            <div className={classes.cardContainer}>{codeShown ? code : preview}</div>
        </div>
    );
};

const flagStyles = {
    root: {
        width: "52px",
        height: "52px",
        borderRadius: "52px",
        margin: "2rem",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "all .155s ease",
        transform: "scale(0.9)",
        "&:hover": {
            opacity: 1,
            transform: "scale(1.1)",
            boxShadow: "0px 0px 33px 6px rgba(158, 102, 255, 0.15)"
        },
        "&:active": {
            transform: "scale(0.98)"
        }
    },
    active: {
        opacity: 1,
        transform: "scale(1.30)",
        boxShadow: "0px 0px 55px 9px rgba(158, 102, 255, 0.20)",
        "&:hover": {
            boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)",
            transform: "scale(1.30)"
        },
        "&:active": {
            transform: "scale(1.28)"
        }
    },
    dimmed: {
        opacity: 0.4
    },
    image: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scale(1.5)"
    }
};

const FlagButton = injectSheet(flagStyles)(({ flag, language: lang, classes, setLanguage }) => {
    const [translated, language] = useLittera(translations);

    return (
        <div
            className={`${classes.root} ${language === lang ? classes.active : classes.dimmed}`}
            onClick={() => setLanguage(lang)}
        >
            <img
                src={`https://www.countryflags.io/${flag}/flat/64.png`}
                className={classes.image}
            />
        </div>
    );
});

export default injectSheet(styles)(Examples);
