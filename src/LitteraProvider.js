import React from "react";

export const LitteraContext = React.createContext({ language: "en_US", preset: {} });

class LitteraProvider extends React.Component {
    render() {
        return (
            <LitteraContext.Provider
                value={{ language: this.props.language, preset: this.props.preset }}
            >
                {this.props.children}
            </LitteraContext.Provider>
        );
    }
}

export default LitteraProvider;
