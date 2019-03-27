import React from "react";
import PropTypes from "prop-types";
import { withLittera } from "../../src";

const translations = {
    example: {
        en_US: "Example",
        pl_PL: "Przykład",
        de_DE: "Beispiel"
    },
    welcome: {
        en_US: "Welcome",
        pl_PL: "Witamy",
        de_DE: "Willkommen"
    }
};

const ExampleButton = ({ translated, onClick }) => (
    <React.Fragment>
        <p>{translated.welcome}</p>
        <button onClick={onClick}>{translated["example"]}</button>
    </React.Fragment>
);

export default withLittera(translations)(ExampleButton);

ExampleButton.propTypes = {
    translated: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired
};
