import { useContext, useMemo, useEffect, useCallback, createContext, createElement, useState } from 'react';

var translate = function translate(translations, locale) {
  return translations[locale];
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

var makeTranslations = function makeTranslations(LitteraContext) {
  return function (translations) {
    warnMissingTranslations(translations);
    return function (locale) {
      var service = useContext(LitteraContext);
      var translationsWithPreset = useMemo(function () {
        return deepMerge(service.preset, translations);
      }, [service.locale]);
      return useLittera(LitteraContext)(translationsWithPreset, locale);
    };
  };
};
var useLittera = function useLittera(LitteraContext) {
  return function (translations, locale) {
    var service = useContext(LitteraContext);
    var currentLocale = locale != null ? locale : service.locale;
    useEffect(function () {
      if (locale) throwInvalidLocale(service.locales, locale);
    }, [locale]);
    return useMemo(function () {
      return translate(translations, currentLocale);
    }, [currentLocale]);
  };
};
var useLitteraMethods = function useLitteraMethods(LitteraContext) {
  return function () {
    var _React$useContext = useContext(LitteraContext),
        setLocale = _React$useContext.setLocale,
        locale = _React$useContext.locale,
        locales = _React$useContext.locales;

    var handleLocaleChange = useCallback(function (nextLocale) {
      throwInvalidLocale(locales, nextLocale);
      setLocale(nextLocale);
    }, [setLocale]);
    return useMemo(function () {
      return {
        setLocale: handleLocaleChange,
        locale: locale,
        locales: locales
      };
    }, [locale]);
  };
};

function createLittera(locales, preset) {
  var _locales$;

  var context = createContext({
    locale: (_locales$ = locales[0]) != null ? _locales$ : 'en_US',
    locales: locales,
    setLocale: function setLocale() {},
    preset: preset
  });
  return {
    LitteraContext: context,
    LitteraService: function LitteraService(_ref) {
      var children = _ref.children,
          initialLocale = _ref.initialLocale;
      return createElement(_LitteraService, {
        initialLocale: initialLocale,
        preset: preset,
        locales: locales,
        Context: context
      }, children);
    },
    makeTranslations: function makeTranslations$1(translations) {
      return function (locale) {
        return makeTranslations(context)(translations)(locale);
      };
    },
    useLitteraMethods: useLitteraMethods(context)
  };
}

var _LitteraService = function _LitteraService(_ref2) {
  var _ref3;

  var children = _ref2.children,
      initialLocale = _ref2.initialLocale,
      locales = _ref2.locales,
      preset = _ref2.preset,
      Context = _ref2.Context;

  var _React$useState = useState((_ref3 = initialLocale != null ? initialLocale : locales[0]) != null ? _ref3 : 'en_US'),
      locale = _React$useState[0],
      setLocale = _React$useState[1];

  return createElement(Context.Provider, {
    value: {
      locale: locale,
      setLocale: setLocale,
      locales: locales,
      preset: preset != null ? preset : {}
    }
  }, children);
};

export { createLittera, translate };
//# sourceMappingURL=index.modern.js.map
