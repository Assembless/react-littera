import React from "react";
import { LitteraContext } from "./";

const withLittera = translations => Component => {
    return function WrapperComponent(props) {
        return (
            <LitteraContext.Consumer>
                {state => {
                    let translated = {};

                    const transes =
                        typeof translations === "function"
                            ? { ...translations(state.preset) }
                            : { ...translations };

                    Object.keys(transes).forEach(e => (translated[e] = transes[e][state.language]));

                    return <Component {...props} translated={translated} />;
                }}
            </LitteraContext.Consumer>
        );
    };
};

export default withLittera;
