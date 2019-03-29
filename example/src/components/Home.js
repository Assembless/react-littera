import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../static/images/starman.svg";
import Header from "./Header";
import About from "./About";
import Language from "./Language";

const styles = {
    root: {}
};

const Home = ({ classes, children }) => {
    return (
        <React.Fragment>
            <Header />
            <Language />
            <About />
        </React.Fragment>
    );
};

export default injectSheet(styles)(Home);
