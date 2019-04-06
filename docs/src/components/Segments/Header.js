import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../../static/images/starman.svg";

const styles = theme => ({
    root: {
        width: "100%",
        height: "calc(100vh - 1rem)",
        background: theme.palette.background, //"#1c1922",
        position: "relative",
        padding: "1rem 0 0 0",
        display: "block"
    },
    content: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    image_one: {
        flexBasis: "50%",
        "& svg": {
            width: "60%",
            height: "auto"
        }
    },
    intro_text: {
        flexBasis: "50%",
        textAlign: "center",
        color: "#fff",

        "& h1": {
            fontSize: "5rem",
            margin: 0
        },
        "& p": {
            opacity: ".5",
            marginTop: 0
        }
    },
    codeBox: {
        background: "#5f44944d",
        padding: "0.6rem 1.2rem",
        borderRadius: ".5rem",
        textAlign: "center",
        display: "inline-block",
        color: "#fafafa",
        boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)"
    }
});

const Header = ({ classes, children }) => {
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.intro_text}>
                        <h1>LiTTERA</h1>
                        <p>Lightweight react library for handling translations</p>
                        <br />
                        <br />
                        <div className={classes.codeBox}>npm install react-littera</div>
                    </div>
                    <div
                        className={classes.image_one}
                        dangerouslySetInnerHTML={{ __html: image_one }}
                    />
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Header);
