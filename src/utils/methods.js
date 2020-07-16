"use strict";
exports.__esModule = true;
exports.tryParseLocale = exports.detectDeviceLocale = exports.validateLocale = exports.localePattern = void 0;
var logger_1 = require("./logger");
exports.localePattern = /[a-z]{2}_[A-Z]{2}/gi;
exports.validateLocale = function (l, p) {
    var _p = p || exports.localePattern;
    return Boolean(new RegExp(_p).test(l));
};
exports.detectDeviceLocale = function () {
    var browserLocale = exports.tryParseLocale(window.navigator.language);
    if (!browserLocale)
        logger_1.log("warn", "Locale not detected.");
    return browserLocale || null;
};
exports.tryParseLocale = function (locale) {
    if (!locale)
        return null;
    if (locale.length === 2) {
        if (locale === "en")
            return "en_US";
        return locale + "_" + locale.toUpperCase();
    }
    if (locale.length === 4 && locale.includes("-"))
        return locale.replace(/-/g, "_");
    return null;
};
