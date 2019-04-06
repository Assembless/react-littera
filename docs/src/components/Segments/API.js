import React, { useState } from "react";
import injectSheet from "react-jss";

import thumbnail from "../../static/images/api_2.svg";

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
            color: "#FAFAFA",
            textTransform: "uppercase"
        },
        "& p": {
            opacity: ".5",
            marginTop: 0
        }
    }
};

const API = ({ classes, children }) => {
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.intro_text}>
                        <h3>API</h3>
                        <p />
                    </div>
                    <div
                        className={classes.image_one}
                        dangerouslySetInnerHTML={{ __html: thumbnail }}
                    />
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(API);
