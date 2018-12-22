import React from "react";
import PropTypes from "prop-types";

/*eslint-disable */
let _language = null;
let _options = null;
let _globals = null;
/* eslint-enable */

export const getOptions = () => _options;
export const setOptions = opts => {
  _options = { ...opts };
};
export const getLanguage = () => _language;
export const setLanguage = newLanguage => {
  _language = newLanguage;
};
export const setGlobals = glbal => {
  _globals = glbal;
};
export const getGlobals = () => _globals;

class LitteraProvider extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    stacked: PropTypes.bool,
    children: PropTypes.node.isRequired,
    translations: PropTypes.objectOf(PropTypes.object),
  };

  static defaultProps = {
    stacked: true,
    translations: {},
  };

  componentWillMount() {
    const { language, translations, stacked } = this.props;

    setLanguage(language);
    setOptions({ ..._options, stacked });
    setGlobals(translations);
  }

  componentWillUpdate(nextProps) {
    const { language, translations, stacked } = this.props;
    if (language !== nextProps.language) setLanguage(nextProps.language);
    if (stacked !== nextProps.stacked)
      setOptions({ ..._options, stacked: nextProps.stacked });
    if (translations !== nextProps.translations)
      setGlobals(nextProps.translations);
  }

  render() {
    // eslint-disable-next-line
    return this.props.children;
  }
}

export default LitteraProvider;
