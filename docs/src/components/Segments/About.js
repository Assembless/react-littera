import React, { useState } from "react";
import injectSheet from "react-jss";

import thumbnail from "../../static/images/about.svg";

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
        padding: "2vh 10% 10vh 10%"
    },
    image_one: {
        flexBasis: "50%",
        "& img": {
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

const About = ({ classes, children }) => {
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.content}>
                    <div className={classes.image_one}>
                        <img src={thumbnail} />
                    </div>
                    <div className={classes.intro_text}>
                        <h3>ABOUT</h3>
                        <p>
                            This tool was created to help manage and maintain translations in React
                            applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default injectSheet(styles)(About);
