import React from "react";

export const LitteraContext = React.createContext({
    language: "en_US",
    preset: {},
    setLanguage: () => {}
});

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
