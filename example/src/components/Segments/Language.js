import React, { useState } from "react";
import injectSheet from "react-jss";
import Flag from "react-world-flags";
import { useLittera } from "../../../../src";

const styles = {
    root: {
        width: "100%",
        height: "auto",
        position: "relative",
        display: "block",
        textAlign: "center",
        "& h4": {
            fontSize: "2.2rem",
            color: "#ffffff26",
            fontWeight: "unset",
            textTransform: "lowercase"
        }
    },
    content: {
        display: "flex",
        width: "80%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "0% 10% 7% 10%"
    },
    flagContainer: {
        padding: "2rem"
    },
    flag: {
        borderRadius: "10rem",
        boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.10)",
        cursor: "pointer",
        transition: "all .255s ease",
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)"
        },
        "&:active": {
            transform: "scale(1)",
            transition: "all .200s ease-in",
            boxShadow: "0px 0px 55px 7px rgba(158, 102, 255, 0.35)"
        },
        "&.active": {
            boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.30)",
            transform: "scale(1.05)"
        }
    },
    flagActive: {
        borderRadius: "10rem",
        cursor: "pointer",
        transition: "all .255s ease",
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)"
        },
        "&:active": {
            transform: "scale(1)",
            transition: "all .200s ease-in",
            boxShadow: "0px 0px 55px 7px rgba(158, 102, 255, 0.35)"
        },
        boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.30)",
        transform: "scale(1.05)"
    }
};

const translations = {
    select: {
        de_DE: "Sprache wählen",
        en_US: "Choose language",
        pl_PL: "Wybierz język"
    }
};

const Language = ({ classes, children }) => {
    const [translated, language] = useLittera(translations);

    const flags = [
        {
            code: "pl"
        },
        {
            code: "de"
        },
        {
            code: "us"
        }
    ];

    return (
        <div className={classes.root}>
            <h4>{translated.select}</h4>
            <div className={classes.content}>
                {flags.map(e => (
                    <div className={classes.flagContainer}>
                        <Flag
                            {...e}
                            className={e.code === language ? classes.flagActive : classes.flag}
                            height="100"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default injectSheet(styles)(Language);
