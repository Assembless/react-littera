import React from "react";
import injectSheet from "react-jss";

const styles = {
    root: {
        width: "52px",
        height: "52px",
        borderRadius: "52px",
        background: "#5F4494",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)",
        transition: "transform .155s ease",
        "&:active": {
            transform: "scale(.95)"
        },
        "& svg": {
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            width: "24px",
            height: "auto"
        }
    }
};

const Fab = ({ classes, children, style, onClick }) => {
    return (
        <div style={style} onClick={onClick} className={classes.root}>
            {children}
        </div>
    );
};

export default injectSheet(styles)(Fab);
