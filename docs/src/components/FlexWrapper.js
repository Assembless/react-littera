import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/**
 * @class
 * @description Simple Flexbox wrapper.
 * @author Mike Eling <mike.eling97@gmail.com>
 */
class FlexWrapper extends PureComponent {
    /**
     * @description Include props which contain flex container style.
     * @returns {object}
     */
    composeStyle = () => {
        let styles = { display: "flex" }; // Initial style.

        const styleProps = Object.keys(FlexWrapper.styleProps);

        // Adds props to style.
        for (var i = 0; i < styleProps.length; i++)
            if (this.props[styleProps[i]]) styles[styleProps[i]] = this.props[styleProps[i]];

        return styles;
    };

    render() {
        return (
            <div style={this.composeStyle()}>
                {this.props.children}
            </div>
        );
    }
}

FlexWrapper.styleProps = {
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
    ]),
    alignItems: PropTypes.oneOf(["strech", "flex-start", "flex-end", "center", "baseline"]),
    alignContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "stretch"
    ]),
    flexDirection: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
    flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
    flexFlow: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

FlexWrapper.propTypes = {
    ...FlexWrapper.styleProps
};

FlexWrapper.defaultProps = {
    justifyContent: "space-between"
};

export default FlexWrapper;
