import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../static/images/starman.svg";

import { Header, About, Setup, API, Examples, Footer } from "./Segments/";

const styles = {
    root: {},
    timeSwitch: {}
};

const Home = ({ classes, children, switchTheme }) => {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Examples />
            <Setup />
            <API />
            <Footer />
            <button onClick={() => switchTheme()} className={classes.timeSwitch}>
                time switch
            </button>
        </React.Fragment>
    );
};

export default injectSheet(styles)(Home);
