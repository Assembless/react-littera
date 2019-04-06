import React from "react";
import injectSheet from "react-jss";

const styles = {
    root: {}
};

const CodeBox = ({ classes }) => {
    return <div className={classes.root} />;
};

export default injectSheet(styles)(CodeBox);
