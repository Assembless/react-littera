import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../../static/images/undraw_elements_cipa.svg";

const styles = {
    root: {
        width: "100%",
        minHeight: "32px",
        background: "#2F2E41"
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "0 5%",
        "& p": {
            color: "#FFF"
        }
    },
    links: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        "& a": {
            margin: "0 7px",
            color: "#FFF",
            fontSize: "0.85rem"
        }
    }
};

const Footer = ({ classes, children }) => {
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <p>react-littera</p>
                <div className={classes.links}>
                    <a href="https://github.com/DRFR0ST/react-littera">GitHub</a>
                    <a href="https://github.com/DRFR0ST/react-littera/packages/22522">
                        Package registry
                    </a>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Footer);
