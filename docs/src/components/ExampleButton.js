import React from "react";
import PropTypes from "prop-types";
import { withLittera } from "../../../src";

const translations = {
    example: {
        en_US: "Example",
        pl_PL: "Przykład",
        de_DE: "Beispiel"
    }
};

const ExampleButton = ({ translated, onClick }) => (
    <button onClick={onClick}>{translated.example}</button>
);

export default withLittera(translations)(ExampleButton);
