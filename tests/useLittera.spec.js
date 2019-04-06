import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import { mount } from "enzyme";
import LitteraProvider, { useLittera } from "../src";

it("useLittera", () => {
    const wrapper = document.createElement("div");
    // just return the data

    ReactDOM.render(
        <LitteraProvider language="de_DE">
            <ExampleComp />
        </LitteraProvider>,
        wrapper
    );

    expect("Test").toBe("Test");
});

const ExampleComp = () => {
    const [translated, language] = useLittera({ example: { de_DE: "Beispiel", en_US: "Example" } });
    console.log(translated, language);
    return <p>{language}</p>;
};
