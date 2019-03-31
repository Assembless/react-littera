import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../../static/images/undraw_elements_cipa.svg";

const styles = {
    root: {
        width: "100%",
        height: "32px",
        lineHeight: "32px",
        background: "#2F2E41"
    },
    content: {
        padding: "0 5%",
        "& p": {
            color: "#FFF"
        }
    }
};

const Footer = ({ classes, children }) => {
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <p>react-littera</p>
            </div>
        </div>
    );
};

export default injectSheet(styles)(Footer);
