import { createContext, useState, createElement } from 'react';

var translate = function translate(translations, locale) {
  var _translations$locale;

  return (_translations$locale = translations[locale]) != null ? _translations$locale : {};
};

var LitteraContext = createContext({
  locale: 'en_US',
  locales: ['en_US'],
  setLocale: function setLocale() {}
});
var LitteraService = function LitteraService(_ref) {
  var _ref2;

  var children = _ref.children,
      initialLocale = _ref.initialLocale,
      locales = _ref.locales;

  var _React$useState = useState((_ref2 = initialLocale != null ? initialLocale : locales[0]) != null ? _ref2 : 'en_US'),
      locale = _React$useState[0],
      setLocale = _React$useState[1];

  return createElement(LitteraContext.Provider, {
    value: {
      locale: locale,
      setLocale: setLocale,
      locales: locales
    }
  }, children);
};

export { LitteraService, translate };
//# sourceMappingURL=index.modern.js.map
