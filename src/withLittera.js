import React from 'react';
import { getOptions, getLanguage, getGlobals } from './LitteraProvider';

/** Stacked/Unstacked -- Translation */
function translateStacked(translations) {
  const language = getLanguage();
  const result = {};

  if (Object.keys(translations).length > 0) {
    Object.keys(translations).forEach((key) => {
      result[key] = translations[key][language];
    });
  }

  return result;
}

function translateUnstacked(translations) {
  const language = getLanguage();
  return translations[language];
}

function translate(translations) {
  return getOptions().stacked ? translateStacked(translations) : translateUnstacked(translations);
}

const withLittera = translations => Component => class extends React.PureComponent {
  render() {
    return (
      <Component translations={{ ...getGlobals(), ...translate(translations) }} {...this.props} />
    );
  }
};

export default withLittera;
