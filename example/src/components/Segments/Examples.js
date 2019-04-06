import React, { useState } from "react";
import injectSheet from "react-jss";
import { FaCode, FaFileAlt } from "react-icons/fa";
import Highlight from "react-highlight";
import LitteraProvider, { useLittera } from "../../../../src";
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
        de_DE: "Romeo und Julia",
        pl_PL: "Romeo i Julia",
        en_US: "Romeo and Juliet"
    },
    author: {
        de_DE: "William Shakespeare",
        pl_PL: "William Shakespeare",
        en_US: "William Shakespeare"
    },
    content: {
        de_DE:
            "O Romeo, Romeo, warum bist du Romeo? Verleugne deinen Vater und lehne deinen Namen ab. Oder wenn du nicht willst, sei nur meine Liebe geschworen Und ich werde kein Capulet mehr sein. „Das ist aber dein Name, der mein Feind ist: Du bist selbst, wenn auch kein Montague. Was ist Montague? Es ist weder Hand noch Fuß Weder Arm noch Gesicht noch irgendein anderer Teil Zu einem Mann gehören. O sei irgendein anderer Name. Was ist in einem Namen? Das, was wir eine Rose nennen Bei jedem anderen Namen würde es süß riechen; Also würde Romeo, würde er nicht Romeo rufen, Behalten Sie die Liebe, die er schuldet Ohne diesen Titel Romeo, mach deinen Namen, Und für diesen Namen, der kein Teil von dir ist, Nimm alles selbst.",
        en_US:
            "O Romeo, Romeo, wherefore art thou Romeo? Deny thy father and refuse thy name. Or if thou wilt not, be but sworn my love And I’ll no longer be a Capulet. ‘Tis but thy name that is my enemy: Thou art thyself, though not a Montague. What’s Montague? It is nor hand nor foot Nor arm nor face nor any other part Belonging to a man. O be some other name. What’s in a name? That which we call a rose By any other name would smell as sweet; So Romeo would, were he not Romeo call’d, Retain that dear perfection which he owes Without that title. Romeo, doff thy name, And for that name, which is no part of thee, Take all myself.",
        pl_PL:
            "O Romeo, Romeo, dlaczego jesteś Romeo? Zaprzyj się ojca twego i odmów imienia twego. Albo jeśli nie chcesz, bądź przysięgany mojej miłości I już nie będę Kapuletem. „Tis, ale twoje imię, które jest moim wrogiem: Ty sam jesteś, choć nie Montague. Co to jest Montague? Nie jest ani ręką, ani stopą Ani ramię, ani twarz, ani żadna inna część Należący do mężczyzny. O, bądź jakaś inna nazwa. Co jest w imieniu? To, co nazywamy różą Jakakolwiek inna nazwa pachniałaby słodko; Więc Romeo zrobiłby, gdyby nie Romeo, zadzwonił, Zachowaj tę drogocenną doskonałość, którą jest winien Bez tego tytułu. Romeo, zdejmij swoje imię, I dla tego imienia, które nie jest częścią ciebie, Weź wszystko sam."
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
        <React.Fragment>
            <Highlight language="javascript">
                <CodeSnippet />
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
        </React.Fragment>
    );

    return (
        <div className={classes.card}>
            <h4 className={classes.cardTitle}>Examples</h4>
            <div className={classes.cardContainer}>{codeShown ? code : preview}</div>
        </div>
    );
};

const CodeSnippet = () => {
    return (
        <React.Fragment>
            {`
import React from "react";
import { useLittera } from "react-littera";

const translations = {
    title: {
        de_DE: "Romeo und Julia",
        pl_PL: "Romeo i Julia",
        en_US: "Romeo and Juliet",
    },
    subtitle: {
        de_DE: "William Shakespeare",
        pl_PL: "William Shakespeare",
        en_US: "William Shakespeare",
    },
    content: {
        de_DE:
            "O Romeo, Romeo, warum bist du Romeo? Verleugne deinen Vater und lehne deinen Namen ab. Oder wenn du nicht willst, sei nur meine Liebe geschworen Und ich werde kein Capulet mehr sein. „Das ist aber dein Name, der mein Feind ist: Du bist selbst, wenn auch kein Montague. Was ist Montague? Es ist weder Hand noch Fuß Weder Arm noch Gesicht noch irgendein anderer Teil Zu einem Mann gehören. O sei irgendein anderer Name. Was ist in einem Namen? Das, was wir eine Rose nennen Bei jedem anderen Namen würde es süß riechen; Also würde Romeo, würde er nicht Romeo rufen, Behalten Sie die Liebe, die er schuldet Ohne diesen Titel Romeo, mach deinen Namen, Und für diesen Namen, der kein Teil von dir ist, Nimm alles selbst.",
        en_US:
            "O Romeo, Romeo, wherefore art thou Romeo? Deny thy father and refuse thy name. Or if thou wilt not, be but sworn my love And I’ll no longer be a Capulet. ‘Tis but thy name that is my enemy: Thou art thyself, though not a Montague. What’s Montague? It is nor hand nor foot Nor arm nor face nor any other part Belonging to a man. O be some other name. What’s in a name? That which we call a rose By any other name would smell as sweet; So Romeo would, were he not Romeo call’d, Retain that dear perfection which he owes Without that title. Romeo, doff thy name, And for that name, which is no part of thee, Take all myself.",
        pl_PL:
            "O Romeo, Romeo, dlaczego jesteś Romeo? Zaprzyj się ojca twego i odmów imienia twego. Albo jeśli nie chcesz, bądź przysięgany mojej miłości I już nie będę Kapuletem. „Tis, ale twoje imię, które jest moim wrogiem: Ty sam jesteś, choć nie Montague. Co to jest Montague? Nie jest ani ręką, ani stopą Ani ramię, ani twarz, ani żadna inna część Należący do mężczyzny. O, bądź jakaś inna nazwa. Co jest w imieniu? To, co nazywamy różą Jakakolwiek inna nazwa pachniałaby słodko; Więc Romeo zrobiłby, gdyby nie Romeo, zadzwonił, Zachowaj tę drogocenną doskonałość, którą jest winien Bez tego tytułu. Romeo, zdejmij swoje imię, I dla tego imienia, które nie jest częścią ciebie, Weź wszystko sam.",
    },
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
        </React.Fragment>
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
