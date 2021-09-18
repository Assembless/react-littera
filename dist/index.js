var React = require('react');

var translate = function translate(translations, locale) {
  var _translations$locale;

  return (_translations$locale = translations[locale]) != null ? _translations$locale : {};
};

var LitteraContext = React.createContext({
  locale: 'en_US',
  locales: ['en_US'],
  setLocale: function setLocale() {},
  translate: function translate$1(translations, locale) {
    return translate(translations, locale != null ? locale : 'en_US');
  }
});
var LitteraService = function LitteraService(_ref) {
  var _ref2;

  var children = _ref.children,
      initialLocale = _ref.initialLocale,
      locales = _ref.locales;

  var _React$useState = React.useState((_ref2 = initialLocale != null ? initialLocale : locales[0]) != null ? _ref2 : 'en_US'),
      locale = _React$useState[0],
      setLocale = _React$useState[1];

  return React.createElement(LitteraContext.Provider, {
    value: {
      locale: locale,
      setLocale: setLocale,
      locales: locales
    }
  }, children);
};

var throwInvalidLocale = function throwInvalidLocale(locales, locale) {
  if (!locales.includes(locale)) throw new Error("Invalid locale provided. Expected [" + locales.join(", ") + "], got " + locale);
  return true;
};

var useLittera = function useLittera(translations, locale) {
  var service = React.useContext(LitteraContext);
  var currentLocale = locale != null ? locale : service.locale;
  React.useEffect(function () {
    if (locale) throwInvalidLocale(service.locales, locale);
  }, [locale]);
  return React.useMemo(function () {
    return translate(translations, currentLocale);
  }, [currentLocale]);
};
var makeTranslations = function makeTranslations(translations) {
  if (process.env.NODE_ENV !== 'production') {
    var keys = [];
    Object.keys(translations).forEach(function (locale) {
      Object.keys(translations[locale]).forEach(function (key) {
        if (!keys.includes(key)) keys.push(key);
      });
      keys.forEach(function (key) {
        if (!Object.keys(translations[locale]).includes(key)) {
          console.warn(key + " is missing in locale " + locale);
        }
      });
    });
  }

  return function (locale) {
    return useLittera(translations, locale);
  };
};
var useLitteraMethods = function useLitteraMethods() {
  var _React$useContext = React.useContext(LitteraContext),
      setLocale = _React$useContext.setLocale,
      locale = _React$useContext.locale,
      locales = _React$useContext.locales;

  var handleLocaleChange = React.useCallback(function (nextLocale) {
    throwInvalidLocale(locales, nextLocale);
    setLocale(nextLocale);
  }, [setLocale]);

  var translateFn = function translateFn(translations, l) {
    var _ref;

    var currentLocale = (_ref = l != null ? l : locale) != null ? _ref : locales[0];
    return translate(translations, currentLocale);
  };

  return React.useMemo(function () {
    return {
      setLocale: handleLocaleChange,
      locale: locale,
      locales: locales,
      translate: translateFn
    };
  }, [locale]);
};

exports.LitteraService = LitteraService;
exports.makeTranslations = makeTranslations;
exports.translate = translate;
exports.useLittera = useLittera;
exports.useLitteraMethods = useLitteraMethods;
//# sourceMappingURL=index.js.map
