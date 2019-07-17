import React from "react";

export const LitteraContext = React.createContext({
    language: "en_US",
    preset: {},
    setLanguage: () => {}
});

/**
 * Context Provider for Littera
 * @public
 * @param {String} language Active language
 * @param {Object} preset Set of predefined translations
 * @param {Func} setLanguage Callback handling the setLanguage event.
 */
class LitteraProvider extends React.Component {
    render() {
        return (
            <LitteraContext.Provider
                value={{
                    language: this.props.language,
                    preset: this.props.preset,
                    setLanguage: language => this.props.setLanguage(language)
                }}
            >
                {this.props.children}
            </LitteraContext.Provider>
        );
    }
}

export default LitteraProvider;
