import React from 'react';
import PropTypes from 'prop-types';
import { withLittera } from '../../src';

const preTranslations = {
  'unique.example': {
    en_US: 'Example',
    pl_PL: 'Przykład',
    de_DE: 'Beispiel',
  },
};

const SimpleText = ({ translations }) => (
  <p>
Simple Text
    {translations.toString()}
  </p>
);

export default withLittera(preTranslations)(SimpleText);

SimpleText.propTypes = {
  translations: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
