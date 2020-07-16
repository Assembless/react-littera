"use strict";
exports.__esModule = true;
exports.translate = void 0;
function translate(t, l) {
    var keys = Object.keys(t);
    var translated = keys.reduce(function (a, b) {
        return (a[b] = t[b][l], a);
    }, {});
    return translated;
}
exports.translate = translate;
;
