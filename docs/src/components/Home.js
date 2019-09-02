import React, { useState } from "react";
import injectSheet from "react-jss";

import image_one from "../static/images/starman.svg";

import { Header, About, Setup, API, Examples, Footer } from "./Segments/";
import UnderCunstruction from "./UnderConstruction";

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
            <UnderCunstruction />
            {/* <API /> */}
            <Footer />
        </React.Fragment>
    );
};

export default injectSheet(styles)(Home);
