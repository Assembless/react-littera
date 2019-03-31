import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../static/images/starman.svg";

import { Header, About, Setup, API, Examples, Footer } from "./Segments/";

const styles = {
    root: {}
};

const Home = ({ classes, children }) => {
    return (
        <React.Fragment>
            <Header />
            <About />
            <Examples />
            <Setup />
            <API />
            <Footer />
        </React.Fragment>
    );
};

export default injectSheet(styles)(Home);
