import React from "react";
import PropTypes from "prop-types";
import { useLittera } from "../../../src";

const translations = {
    welcome: {
        en_US: "Welcome",
        pl_PL: "Witamy",
        de_DE: "Willkommen"
    }
};

const ExampleText = () => {
    const [translated, language] = useLittera(translations);

    return (
        <h4>
            {language} =>
            {translated.welcome}
        </h4>
    );
};

export default ExampleText;
