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
  },
  preset: {}
});
var LitteraService = function LitteraService(_ref) {
  var _ref2;

  var children = _ref.children,
      initialLocale = _ref.initialLocale,
      locales = _ref.locales,
      _ref$preset = _ref.preset,
      preset = _ref$preset === void 0 ? {} : _ref$preset;

  var _React$useState = React.useState((_ref2 = initialLocale != null ? initialLocale : locales[0]) != null ? _ref2 : 'en_US'),
      locale = _React$useState[0],
      setLocale = _React$useState[1];

  return React.createElement(LitteraContext.Provider, {
    value: {
      locale: locale,
      setLocale: setLocale,
      locales: locales,
      preset: preset
    }
  }, children);
};

var throwInvalidLocale = function throwInvalidLocale(locales, locale) {
  if (!locales.includes(locale)) throw new Error("Invalid locale provided. Expected [" + locales.join(', ') + "], got " + locale);
  return true;
};
var warnMissingTranslations = function warnMissingTranslations(translations) {
  if (process.env.NODE_ENV === 'production') return;
  var keys = [];
  Object.keys(translations).forEach(function (locale) {
    Object.keys(translations[locale]).forEach(function (key) {
      if (!keys.includes(key)) keys.push(key);
    });
    keys.forEach(function (key) {
      if (!Object.keys(translations[locale]).includes(key)) {
        console.warn("Key " + key + " is missing in locale " + locale);
      }
    });
  });
};
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function deepMerge(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        var _Object$assign;

        if (!target[key]) Object.assign(target, (_Object$assign = {}, _Object$assign[key] = {}, _Object$assign));
        deepMerge(target[key], source[key]);
      } else {
        var _Object$assign2;

        Object.assign(target, (_Object$assign2 = {}, _Object$assign2[key] = source[key], _Object$assign2));
      }
    }
  }

  return deepMerge.apply(void 0, [target].concat(sources));
}

var makeTranslations = function makeTranslations(translations) {
  warnMissingTranslations(translations);
  return function (locale) {
    var service = React.useContext(LitteraContext);
    var translationsWithPreset = React.useMemo(function () {
      return deepMerge(service.preset, translations);
    }, [service.locale]);
    return useLittera(translationsWithPreset, locale);
  };
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
var useLitteraMethods = function useLitteraMethods() {
  var _React$useContext = React.useContext(LitteraContext),
      setLocale = _React$useContext.setLocale,
      locale = _React$useContext.locale,
      locales = _React$useContext.locales;

  var handleLocaleChange = React.useCallback(function (nextLocale) {
    throwInvalidLocale(locales, nextLocale);
    setLocale(nextLocale);
  }, [setLocale]);

  var translateFn = function translateFn(translations, overrideLocale) {
    var _ref;

    var currentLocale = (_ref = overrideLocale != null ? overrideLocale : locale) != null ? _ref : locales[0];
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
