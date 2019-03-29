import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../static/images/undraw_elements_cipa.svg";

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
        padding: "5% 10%"
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
        color: "#fff",

        "& h3": {
            fontSize: "4rem",
            margin: 0,
            color: "#7e5cc2",
            textTransform: "uppercase"
        },
        "& p": {
            opacity: ".5",
            marginTop: 0
        }
    }
};

const Header = ({ classes, children }) => {
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div
                        className={classes.image_one}
                        dangerouslySetInnerHTML={{ __html: image_one }}
                    />
                    <div className={classes.intro_text}>
                        <h3>SETUP</h3>
                        <p />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Header);
