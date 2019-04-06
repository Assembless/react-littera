module.exports = (function(a) {
    var t = {};
    function e(r) {
        if (t[r]) return t[r].exports;
        var n = (t[r] = { i: r, l: !1, exports: {} });
        return a[r].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    return (
        (e.m = a),
        (e.c = t),
        (e.d = function(a, t, r) {
            e.o(a, t) || Object.defineProperty(a, t, { enumerable: !0, get: r });
        }),
        (e.r = function(a) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(a, "__esModule", { value: !0 });
        }),
        (e.t = function(a, t) {
            if ((1 & t && (a = e(a)), 8 & t)) return a;
            if (4 & t && "object" == typeof a && a && a.__esModule) return a;
            var r = Object.create(null);
            if (
                (e.r(r),
                Object.defineProperty(r, "default", { enumerable: !0, value: a }),
                2 & t && "string" != typeof a)
            )
                for (var n in a)
                    e.d(
                        r,
                        n,
                        function(t) {
                            return a[t];
                        }.bind(null, n)
                    );
            return r;
        }),
        (e.n = function(a) {
            var t =
                a && a.__esModule
                    ? function() {
                          return a.default;
                      }
                    : function() {
                          return a;
                      };
            return e.d(t, "a", t), t;
        }),
        (e.o = function(a, t) {
            return Object.prototype.hasOwnProperty.call(a, t);
        }),
        (e.p = ""),
        e((e.s = 9))
    );
})([
    function(a, t) {
        a.exports = require("react");
    },
    function(a, t) {
        a.exports = require("react-jss");
    },
    function(a, t) {
        a.exports = require("react-highlight");
    },
    function(a, t) {
        a.exports = require("react-icons/fa");
    },
    function(a, t) {
        a.exports = require("prop-types");
    },
    function(a, t) {
        a.exports = require("react-dom");
    },
    function(a, t, e) {
        var r = e(7);
        "string" == typeof r && (r = [[a.i, r, ""]]);
        var n = { hmr: !0, transform: void 0, insertInto: void 0 };
        e(8)(r, n);
        r.locals && (a.exports = r.locals);
    },
    function(a, t) {
        a.exports = require("!!../../node_modules/css-loader/dist/cjs.js!./index.css");
    },
    function(a, t) {
        a.exports = require("!../../node_modules/style-loader/lib/addStyles.js");
    },
    function(a, t, e) {
        "use strict";
        e.r(t);
        var r = e(0),
            n = e.n(r),
            l = e(5),
            i = (function() {
                function a(a, t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(a, r.key, r);
                    }
                }
                return function(t, e, r) {
                    return e && a(t.prototype, e), r && a(t, r), t;
                };
            })();
        var o = n.a.createContext({ language: "en_US", preset: {}, setLanguage: function() {} }),
            c = (function(a) {
                function t() {
                    return (
                        (function(a, t) {
                            if (!(a instanceof t))
                                throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function(a, t) {
                            if (!a)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t || ("object" != typeof t && "function" != typeof t) ? a : t;
                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                    );
                }
                return (
                    (function(a, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (a.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: a,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(a, t)
                                    : (a.__proto__ = t));
                    })(t, n.a.Component),
                    i(t, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                console.log("PROPS", this.props);
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                var a = this;
                                return n.a.createElement(
                                    o.Provider,
                                    {
                                        value: {
                                            language: this.props.language,
                                            preset: this.props.preset,
                                            setLanguage: function(t) {
                                                return a.props.setLanguage(t);
                                            }
                                        }
                                    },
                                    this.props.children
                                );
                            }
                        }
                    ]),
                    t
                );
            })(),
            s =
                Object.assign ||
                function(a) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                },
            f = function(a) {
                return function(t) {
                    return function(e) {
                        return n.a.createElement(o.Consumer, null, function(r) {
                            var l = {},
                                i = s({}, "function" == typeof a ? a(r.preset) : a);
                            return (
                                Object.keys(i).forEach(function(a) {
                                    return (l[a] = i[a][r.language]);
                                }),
                                n.a.createElement(
                                    t,
                                    s({}, e, {
                                        translated: l,
                                        language: r.language,
                                        setLanguage: r.setLanguage
                                    })
                                )
                            );
                        });
                    };
                };
            },
            d =
                Object.assign ||
                function(a) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                };
        var m = function(a) {
                var t = Object(r.useContext)(o),
                    e = t.language,
                    n = t.preset,
                    l = t.setLanguage,
                    i = {},
                    c = d({}, "function" == typeof a ? a(n) : a);
                return (
                    Object.keys(c).forEach(function(a) {
                        var t, r, n;
                        i = d(
                            {},
                            i,
                            ((t = {}),
                            (r = a),
                            (n = c[a][e]),
                            r in t
                                ? Object.defineProperty(t, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[r] = n),
                            t)
                        );
                    }),
                    [i, e, l]
                );
            },
            p = c,
            h = (e(4),
            f({ example: { en_US: "Example", pl_PL: "Przykład", de_DE: "Beispiel" } })(function(a) {
                var t = a.translated,
                    e = a.onClick;
                return n.a.createElement("button", { onClick: e }, t.example);
            })),
            u = (function() {
                return function(a, t) {
                    if (Array.isArray(a)) return a;
                    if (Symbol.iterator in Object(a))
                        return (function(a, t) {
                            var e = [],
                                r = !0,
                                n = !1,
                                l = void 0;
                            try {
                                for (
                                    var i, o = a[Symbol.iterator]();
                                    !(r = (i = o.next()).done) &&
                                    (e.push(i.value), !t || e.length !== t);
                                    r = !0
                                );
                            } catch (a) {
                                (n = !0), (l = a);
                            } finally {
                                try {
                                    !r && o.return && o.return();
                                } finally {
                                    if (n) throw l;
                                }
                            }
                            return e;
                        })(a, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            })(),
            y = { welcome: { en_US: "Welcome", pl_PL: "Witamy", de_DE: "Willkommen" } },
            g = function() {
                var a = m(y),
                    t = u(a, 2),
                    e = t[0],
                    r = t[1];
                return n.a.createElement("h4", null, r, " =>", e.welcome);
            },
            b = e(1),
            x = e.n(b),
            Z = x()(function(a) {
                return {
                    root: {
                        width: "100%",
                        height: "calc(100vh - 1rem)",
                        background: a.palette.background,
                        position: "relative",
                        padding: "1rem 0 0 0",
                        display: "block"
                    },
                    content: {
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap"
                    },
                    image_one: { flexBasis: "50%", "& svg": { width: "60%", height: "auto" } },
                    intro_text: {
                        flexBasis: "50%",
                        textAlign: "center",
                        color: "#fff",
                        "& h1": { fontSize: "5rem", margin: 0 },
                        "& p": { opacity: ".5", marginTop: 0 }
                    },
                    codeBox: {
                        background: "#5f44944d",
                        padding: "0.6rem 1.2rem",
                        borderRadius: ".5rem",
                        textAlign: "center",
                        display: "inline-block",
                        color: "#fafafa",
                        boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)"
                    }
                };
            })(function(a) {
                var t = a.classes;
                a.children;
                return n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                        "div",
                        { className: t.root },
                        n.a.createElement(
                            "div",
                            { className: t.content },
                            n.a.createElement(
                                "div",
                                { className: t.intro_text },
                                n.a.createElement("h1", null, "LiTTERA"),
                                n.a.createElement(
                                    "p",
                                    null,
                                    "Lightweight react library for handling translations"
                                ),
                                n.a.createElement("br", null),
                                n.a.createElement("br", null),
                                n.a.createElement(
                                    "div",
                                    { className: t.codeBox },
                                    "npm install react-littera"
                                )
                            ),
                            n.a.createElement("div", {
                                className: t.image_one,
                                dangerouslySetInnerHTML: {
                                    __html:
                                        '<svg id="8abbfe23-26e0-4ef7-83d7-6944c41cdadc" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="829" height="744.16" viewBox="0 0 829 744.16"><defs><linearGradient id="8d3987ee-7da6-4397-b7c6-fc969519ed63" x1="382.9" y1="692.59" x2="382.9" y2="45.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient><linearGradient id="41a98616-cc8d-45ca-bf5b-bcdeacba7b4f" x1="577.21" y1="539.76" x2="577.21" y2="383.34" xlink:href="#8d3987ee-7da6-4397-b7c6-fc969519ed63"/><linearGradient id="cbeba5be-4290-4dae-bc1b-44a303762a01" x1="422.99" y1="586.26" x2="422.99" y2="284.95" xlink:href="#8d3987ee-7da6-4397-b7c6-fc969519ed63"/><linearGradient id="d7c56f50-4219-4953-bdbb-ce8107747d0c" x1="809.48" y1="657.06" x2="809.48" y2="582.42" xlink:href="#8d3987ee-7da6-4397-b7c6-fc969519ed63"/><linearGradient id="65800a0c-0f7d-440b-866d-d9a2d0291c31" x1="728.61" y1="677.75" x2="728.61" y2="553.95" gradientTransform="translate(-210.42 971.61) rotate(-62.55)" xlink:href="#8d3987ee-7da6-4397-b7c6-fc969519ed63"/></defs><title>startman1</title><circle cx="382.9" cy="368.92" r="323.67" fill="url(#8d3987ee-7da6-4397-b7c6-fc969519ed63)"/><circle cx="382.9" cy="368.92" r="315.73" fill="#5f4494"/><circle cx="280.81" cy="186.43" r="39.22" opacity="0.05"/><circle cx="400.77" cy="606.43" r="39.22" opacity="0.05"/><circle cx="439.99" cy="324.03" r="80.19" opacity="0.05"/><path d="M694.73,539.76c-39.72,0-82-1.9-125.22-5.72-96.07-8.48-185.62-25.41-252.14-47.66-67-22.43-102.8-47.77-100.72-71.35,1.05-11.94,11.57-22.6,31.25-31.68l1,2.25c-18.82,8.68-28.85,18.65-29.82,29.65s7.35,22.84,24.75,34.82c17.1,11.77,42.09,23.19,74.29,34,66.35,22.2,155.69,39.08,251.58,47.54s186.81,7.49,256-2.74c33.58-5,60.19-11.84,79.09-20.43,19.24-8.74,29.49-18.82,30.47-29.95,1.12-12.67-10.33-26.56-33.1-40.16l1.27-2.13c24,14.33,35.53,28.63,34.3,42.51-2.08,23.59-41.74,42.27-111.66,52.6C788,536.92,743.23,539.75,694.73,539.76Z" transform="translate(-185 -76.87)" fill="url(#41a98616-cc8d-45ca-bf5b-bcdeacba7b4f)"/><path d="M902.83,434.76c22.71,13.57,34.91,27.67,33.7,41.33-4.19,47.47-168.46,71.75-366.91,54.23s-355.93-70.2-351.74-117.67c1-11.73,11.85-22,30.53-30.66" transform="translate(-185 -76.87)" fill="none" stroke="#bdbdbd" stroke-miterlimit="10" stroke-width="3" opacity="0.5"/><path d="M608.39,586.26c-28.62-12.34-57.83-26.11-86.81-40.94-85.87-43.92-162.52-93.21-215.83-138.81-53.72-45.94-77.36-82.85-66.58-103.94,5.46-10.68,19.21-16.61,40.85-17.64l.12,2.47c-20.7,1-33.74,6.46-38.77,16.29s-1.76,23.93,9.88,41.56c11.43,17.32,30.31,37.3,56.11,59.36C360.52,450.11,437,499.29,522.7,543.12c28.94,14.8,58.09,28.55,86.67,40.87Z" transform="translate(-185 -76.87)" fill="url(#cbeba5be-4290-4dae-bc1b-44a303762a01)"/><path d="M613,585.12c-28.09-12.11-57.19-25.79-86.74-40.9C348.89,453.51,222.7,345.57,244.4,303.15c5.36-10.48,19.25-16,39.81-17" transform="translate(-185 -76.87)" fill="none" stroke="#bdbdbd" stroke-miterlimit="10" stroke-width="3"/><path d="M840.73,657.06c-26,0-62.67-8.5-112.17-25.56l.81-2.34c94.46,32.54,141.19,33.86,156.25,4.41,5.79-11.32.39-28.49-15.61-49.65l2-1.49c16.86,22.28,22.19,39.87,15.84,52.27C880.2,649.59,865.12,657.05,840.73,657.06Z" transform="translate(-185 -76.87)" fill="url(#d7c56f50-4219-4953-bdbb-ce8107747d0c)"/><path d="M871,580.69c16,21.1,22,38.75,15.73,51-14.39,28.13-56.6,31-157.76-3.8" transform="translate(-185 -76.87)" fill="none" stroke="#bdbdbd" stroke-miterlimit="10" stroke-width="3"/><g opacity="0.5"><rect x="94.38" y="661.7" width="3.22" height="18.23" fill="#47e6b1"/><rect x="279.38" y="738.56" width="3.22" height="18.23" transform="translate(843.66 389.83) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="748.57" y="3.22" width="3.22" height="18.23" fill="#47e6b1"/><rect x="933.57" y="80.08" width="3.22" height="18.23" transform="translate(839.37 -922.84) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="818.28" y="500.83" width="3.22" height="18.23" fill="#47e6b1"/><rect x="1003.28" y="577.7" width="3.22" height="18.23" transform="translate(1406.7 -494.94) rotate(90)" fill="#47e6b1"/></g><g opacity="0.5"><rect x="105.1" y="47.19" width="3.22" height="18.23" fill="#47e6b1"/><rect x="290.1" y="124.05" width="3.22" height="18.23" transform="translate(239.88 -235.4) rotate(90)" fill="#47e6b1"/></g><path d="M385.22,801.09a3.94,3.94,0,0,1-2.2-4.76,1.89,1.89,0,0,0,.09-.44h0a2,2,0,0,0-3.55-1.31h0a1.89,1.89,0,0,0-.22.39,3.94,3.94,0,0,1-4.76,2.2,1.89,1.89,0,0,0-.44-.09h0a2,2,0,0,0-1.31,3.55h0a1.89,1.89,0,0,0,.39.22,3.94,3.94,0,0,1,2.2,4.76,1.89,1.89,0,0,0-.09.44h0a2,2,0,0,0,3.55,1.31h0a1.89,1.89,0,0,0,.22-.39,3.94,3.94,0,0,1,4.76-2.2,1.89,1.89,0,0,0,.44.09h0a2,2,0,0,0,1.31-3.55h0A1.89,1.89,0,0,0,385.22,801.09Z" transform="translate(-185 -76.87)" fill="#4d8af0" opacity="0.5"/><path d="M581.47,814a3.94,3.94,0,0,1-2.2-4.76,1.89,1.89,0,0,0,.09-.44h0a2,2,0,0,0-3.55-1.31h0a1.89,1.89,0,0,0-.22.39,3.94,3.94,0,0,1-4.76,2.2,1.89,1.89,0,0,0-.44-.09h0a2,2,0,0,0-1.31,3.55h0a1.89,1.89,0,0,0,.39.22,3.94,3.94,0,0,1,2.2,4.76,1.89,1.89,0,0,0-.09.44h0a2,2,0,0,0,3.55,1.31h0a1.89,1.89,0,0,0,.22-.39,3.94,3.94,0,0,1,4.76-2.2,1.89,1.89,0,0,0,.44.09h0a2,2,0,0,0,1.31-3.55h0A1.89,1.89,0,0,0,581.47,814Z" transform="translate(-185 -76.87)" fill="#4d8af0" opacity="0.5"/><path d="M969.7,296a3.94,3.94,0,0,1-2.2-4.76,1.89,1.89,0,0,0,.09-.44h0a2,2,0,0,0-3.55-1.31h0a1.89,1.89,0,0,0-.22.39,3.94,3.94,0,0,1-4.76,2.2,1.89,1.89,0,0,0-.44-.09h0a2,2,0,0,0-1.31,3.55h0a1.89,1.89,0,0,0,.39.22,3.94,3.94,0,0,1,2.2,4.76,1.89,1.89,0,0,0-.09.44h0a2,2,0,0,0,3.55,1.31h0a1.89,1.89,0,0,0,.22-.39,3.94,3.94,0,0,1,4.76-2.2,1.89,1.89,0,0,0,.44.09h0a2,2,0,0,0,1.31-3.55h0A1.89,1.89,0,0,0,969.7,296Z" transform="translate(-185 -76.87)" fill="#4d8af0" opacity="0.5"/><path d="M205.26,579.8a3.94,3.94,0,0,1-2.2-4.76,1.89,1.89,0,0,0,.09-.44h0a2,2,0,0,0-3.55-1.31h0a1.89,1.89,0,0,0-.22.39,3.94,3.94,0,0,1-4.76,2.2,1.89,1.89,0,0,0-.44-.09h0a2,2,0,0,0-1.31,3.55h0a1.89,1.89,0,0,0,.39.22,3.94,3.94,0,0,1,2.2,4.76,1.89,1.89,0,0,0-.09.44h0a2,2,0,0,0,3.55,1.31h0a1.89,1.89,0,0,0,.22-.39,3.94,3.94,0,0,1,4.76-2.2,1.89,1.89,0,0,0,.44.09h0a2,2,0,0,0,1.31-3.55h0A1.89,1.89,0,0,0,205.26,579.8Z" transform="translate(-185 -76.87)" fill="#4d8af0" opacity="0.5"/><circle cx="6.43" cy="238.08" r="6.43" fill="#f55f44" opacity="0.5"/><circle cx="530.86" cy="22.52" r="6.43" fill="#4d8af0" opacity="0.5"/><circle cx="176.95" cy="6.43" r="6.43" fill="#47e6b1" opacity="0.5"/><circle cx="653.12" cy="691.73" r="6.43" fill="#f55f44" opacity="0.5"/><path d="M686.59,566.15a7.62,7.62,0,0,0-10.27,3.25l-.78,1.5-1.78-.93-15.91-8.26-3.46-1.8a3,3,0,0,0-1.57-.33c-15.23-5-27.45,4.63-35.33,19.8h0A49.7,49.7,0,0,0,612,596.06l-.18-.09c-.88,6.25-.06,12.11,3,17.07l.26-.51a24.56,24.56,0,0,0,5.82,6.56,2.32,2.32,0,0,0,1.19,1.52l21.78,11.31-1.66,3.19a7.62,7.62,0,0,0,3.25,10.27h0l5.17-10,26.86,13.95,1.76-3.38,1.76-3.38,2.63-5.07.09,0-6.1,11.74L690.48,656c15.64,8.12,27.59-2.31,36.27-18.47l0-.09.53-1,0,0h0l0-.09h0l0,0,.45-.89,0,0c8.3-16.45,10-32.21-5.72-40.36L709.2,588.5l-7.07,13.62-.09,0,3.61-6.95,1.66-3.19,1.85-3.57L682.3,574.41l4.29-8.26Zm-41,58.08.08.07-.09,0Z" transform="translate(-185 -76.87)" fill="url(#65800a0c-0f7d-440b-866d-d9a2d0291c31)"/><rect x="650.61" y="597.43" width="57.32" height="28.66" transform="translate(-361.71 855.76) rotate(-62.55)" fill="#4f617d"/><path d="M724,634.88l0-.09c-8.21,15.8-19.62,26.25-34.67,18.44l-12.11-6.29L707,589.71,719.1,596C734.15,603.82,732.21,619.08,724,634.88Z" transform="translate(-185 -76.87)" fill="#ff656a"/><path d="M724,634.79l0,0,0,0Z" transform="translate(-185 -76.87)" fill="#4a5c81"/><path d="M714.65,648.3A55.65,55.65,0,0,0,724,634.84a59.11,59.11,0,0,0,5.17-13.29L724,618.86l-14,27Z" transform="translate(-185 -76.87)" fill="#4a5c81"/><path d="M675.15,617.71h37.62a0,0,0,0,1,0,0v1.05a4.32,4.32,0,0,1-4.32,4.32h-29a4.32,4.32,0,0,1-4.32-4.32v-1.05A0,0,0,0,1,675.15,617.71Z" transform="translate(-361.46 873.45) rotate(-62.55)" fill="#4a5c81"/><path d="M653.93,599.31h1.4a0,0,0,0,1,0,0v60.9a0,0,0,0,1,0,0h-7.16a0,0,0,0,1,0,0V605.08A5.76,5.76,0,0,1,653.93,599.31Z" transform="translate(-392.52 841.05) rotate(-62.55)" fill="#ff6469"/><path d="M674.68,548.27h1.4a5.76,5.76,0,0,1,5.76,5.76v55.14a0,0,0,0,1,0,0h-7.16a0,0,0,0,1,0,0v-60.9A0,0,0,0,1,674.68,548.27Z" transform="translate(-332.93 837.05) rotate(-62.55)" fill="#ff6469"/><path d="M673.65,572.28l-29.72,57.23-15-7.77c-16.53-8.59-16.44-24.81-8.24-40.61h0c8.21-15.8,21.43-25.2,38-16.62Z" transform="translate(-185 -76.87)" fill="#ff656a"/><path d="M618.18,612.8l6-11.5-8.79-4.56C614.53,602.62,615.31,608.13,618.18,612.8Z" transform="translate(-185 -76.87)" fill="#fff6d5"/><path d="M644.89,561.37l-6,11.5-8.79-4.56C634.47,564.24,639.42,561.7,644.89,561.37Z" transform="translate(-185 -76.87)" fill="#fff6d5"/><path d="M646.69,633.22h5a0,0,0,0,1,0,0v7.16a0,0,0,0,1,0,0H640.93a0,0,0,0,1,0,0V639A5.76,5.76,0,0,1,646.69,633.22Z" transform="translate(-401.71 840) rotate(-62.55)" fill="#ff6469"/><path d="M674.69,568.22h10.75a0,0,0,0,1,0,0v7.16a0,0,0,0,1,0,0h-5a5.76,5.76,0,0,1-5.76-5.76v-1.4A0,0,0,0,1,674.69,568.22Z" transform="translate(1315.95 154.96) rotate(117.45)" fill="#ff6469"/><path d="M677.44,580.31l-24.86,47.87L631,608.88a10.15,10.15,0,0,1-2.24-12.24L638,578.86a10.15,10.15,0,0,1,11.35-5.2Z" transform="translate(-185 -76.87)" fill="#53678b"/><path d="M653.67,626.5c-10.54-5.47-14.09-19.51-7.93-31.37s19.69-17,30.22-11.55" transform="translate(-185 -76.87)" fill="#658bc8"/><polygon points="494.16 504.45 469.39 552.14 464.62 549.66 467.98 547.08 488.33 507.91 489.39 501.97 494.16 504.45" fill="#ff656a"/><polygon points="494.16 504.45 469.39 552.14 464.62 549.66 467.98 547.08 488.33 507.91 489.39 501.97 494.16 504.45" opacity="0.05"/><rect x="664.63" y="606.36" width="7.16" height="7.16" transform="translate(-366.06 844.97) rotate(-62.55)" fill="#53678b"/><ellipse cx="671.4" cy="611.6" rx="7.16" ry="1.79" transform="translate(-365.81 848.68) rotate(-62.55)" fill="#53678b"/><path d="M688.86,644.9A12.27,12.27,0,0,0,706.33,641" transform="translate(-185 -76.87)" opacity="0.05"/><path d="M711.16,602A12.27,12.27,0,0,1,718,618.52" transform="translate(-185 -76.87)" opacity="0.05"/><path d="M633.89,602.21s-1.41-12.84,11.56-22.25" transform="translate(-185 -76.87)" opacity="0.05"/><path d="M639.89,605.33s-1.41-12.84,11.56-22.25" transform="translate(-185 -76.87)" opacity="0.05"/><circle cx="652.2" cy="609.7" r="5.37" transform="translate(-374.48 830.62) rotate(-62.55)" fill="#4a77be"/><circle cx="659.69" cy="591.39" r="3.58" transform="translate(-354.19 827.4) rotate(-62.55)" fill="#4a77be"/><path d="M679.67,595.44h1.05a2.16,2.16,0,0,1,2.16,2.16v11.75a2.21,2.21,0,0,1-2.21,2.21h-3.17a0,0,0,0,1,0,0v-14A2.16,2.16,0,0,1,679.67,595.44Z" transform="matrix(-0.2, -0.98, 0.98, -0.2, 38.73, 1313.09)" fill="#cdefff"/><path d="M680.15,597.59h5.37a0,0,0,0,1,0,0V604a4.32,4.32,0,0,1-4.32,4.32h-1.05a0,0,0,0,1,0,0V597.59A0,0,0,0,1,680.15,597.59Z" transform="translate(42.41 1315.03) rotate(-101.45)" opacity="0.05"/><path d="M672,623.88h9.39a0,0,0,0,1,0,0V635a0,0,0,0,1,0,0H672a4.45,4.45,0,0,1-4.45-4.45v-2.17A4.45,4.45,0,0,1,672,623.88Z" transform="translate(-379.98 861) rotate(-62.55)" fill="#cdefff"/><path d="M678.53,633.27l-1.79,3.83c-1.94,3.22-6.64,4.1-10.69,2l-4.7-2.44,2.55-4.92Z" transform="translate(-185 -76.87)" fill="#cdefff"/><path d="M657.16,626.1h1.08a2.23,2.23,0,0,1,2.23,2.23v8.85a0,0,0,0,1,0,0h-5.54a0,0,0,0,1,0,0v-8.85A2.23,2.23,0,0,1,657.16,626.1Z" transform="translate(-390.98 847.33) rotate(-62.55)" fill="#cdefff"/><path d="M676.92,626a8.27,8.27,0,0,0,5.3.8l.26-.51-9.6-5A8.28,8.28,0,0,0,676.92,626Z" transform="translate(-185 -76.87)" opacity="0.05"/><path d="M683.62,601.49H693a0,0,0,0,1,0,0v11.08a0,0,0,0,1,0,0h-9.39a4.45,4.45,0,0,1-4.45-4.45v-2.17a4.45,4.45,0,0,1,4.45-4.45Z" transform="translate(1356.01 201.07) rotate(117.45)" fill="#cdefff"/><path d="M684.72,611a8.27,8.27,0,0,1,3.71,3.88l-.26.51-9.6-5A8.28,8.28,0,0,1,684.72,611Z" transform="translate(-185 -76.87)" opacity="0.05"/><circle cx="680.82" cy="618.16" r="8.31" transform="translate(-366.56 860.59) rotate(-62.55)" fill="#cdefff"/><circle cx="680.41" cy="618.29" r="8.31" transform="translate(-366.9 860.29) rotate(-62.55)" fill="#cdefff"/><path d="M673,614.46a8.3,8.3,0,0,0,.37,8.3A8.31,8.31,0,0,0,680,610,8.3,8.3,0,0,0,673,614.46Z" transform="translate(-185 -76.87)" fill="#658bc8"/></svg>'
                                }
                            })
                        )
                    )
                );
            }),
            M = e(2),
            w = e.n(M),
            v = x()({
                root: { width: "100%", height: "auto", position: "relative", display: "block" },
                content: {
                    display: "flex",
                    width: "90%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "5% 5%"
                },
                image_one: {
                    width: "40%",
                    position: "relative",
                    "& svg": {
                        width: "80%",
                        height: "auto",
                        left: "50%",
                        position: "absolute",
                        transform: "translateX(-50%)"
                    }
                },
                intro_text: {
                    color: "#fff",
                    width: "60%",
                    "& h3": {
                        fontSize: "4rem",
                        margin: 0,
                        color: "#FAFAFA",
                        textTransform: "uppercase",
                        marginBottom: "1.5rem"
                    },
                    "& p": { opacity: ".5", marginTop: 0 },
                    "& .hljs": {
                        background: "#1a1720",
                        borderRadius: "20px",
                        padding: "1rem 1.5rem"
                    }
                },
                codebox_npm: {
                    position: "relative",
                    margin: "4rem 0",
                    "& code": {
                        padding: "2rem 0",
                        "&:before": {
                            transition: "opacity .155s ease",
                            top: "-3.4rem",
                            color: "#5F4494",
                            right: "0.5rem",
                            bottom: "0",
                            content: "'npm'",
                            opacity: ".2",
                            zIndex: "0",
                            position: "absolute",
                            fontSize: "4rem",
                            fontWeight: "bold"
                        },
                        "&:after": {
                            transition: "opacity .155s ease",
                            content: "''",
                            boxShadow: "-26px -2px 65px 28px rgba(158, 102, 255, 0.16)",
                            width: 0,
                            height: 0,
                            position: "absolute",
                            top: 0,
                            right: "2rem"
                        }
                    }
                },
                codebox_yarn: {
                    position: "relative",
                    margin: "4rem 0",
                    "& code": {
                        padding: "2rem 0",
                        "&:before": {
                            transition: "opacity .155s ease",
                            top: "-3.4rem",
                            color: "#5F4494",
                            right: "0.5rem",
                            bottom: "0",
                            content: "'yarn'",
                            opacity: ".2",
                            zIndex: "0",
                            position: "absolute",
                            fontSize: "4rem",
                            fontWeight: "bold"
                        },
                        "&:after": {
                            transition: "opacity .155s ease",
                            content: "''",
                            boxShadow: "-45px -2px 65px 28px rgba(158, 102, 255, 0.16)",
                            width: 0,
                            height: 0,
                            position: "absolute",
                            top: 0,
                            right: "2rem"
                        }
                    }
                },
                doubleSection: { display: "flex", justifyContent: "center", flexWrap: "wrap" },
                "@media only screen and (max-width: 715px)": {
                    codebox_npm: {
                        "& code": { "&:before": { opacity: 0 }, "&:after": { opacity: 0 } }
                    },
                    codebox_yarn: {
                        "& code": { "&:before": { opacity: 0 }, "&:after": { opacity: 0 } }
                    }
                }
            })(function(a) {
                var t = a.classes;
                a.children;
                return n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                        "div",
                        { className: t.root },
                        n.a.createElement(
                            "div",
                            { className: t.content },
                            n.a.createElement(
                                "div",
                                { className: t.intro_text },
                                n.a.createElement("h3", null, "Setup"),
                                n.a.createElement("p", null, "Install react-littera"),
                                n.a.createElement(
                                    "div",
                                    { className: t.codebox_npm },
                                    n.a.createElement(
                                        w.a,
                                        { language: "bash" },
                                        "npm i react-littera"
                                    )
                                ),
                                n.a.createElement(
                                    "div",
                                    { className: t.codebox_yarn },
                                    n.a.createElement(
                                        w.a,
                                        { language: "bash" },
                                        "yarn add react-littera"
                                    )
                                ),
                                n.a.createElement("br", null),
                                n.a.createElement(
                                    "div",
                                    null,
                                    n.a.createElement(
                                        "p",
                                        null,
                                        "Wrap your code with a context provider"
                                    ),
                                    n.a.createElement(
                                        w.a,
                                        { language: "javascript" },
                                        'import React, {useState} from "react";\nimport LitteraProvider from "react-littera";\n\nconst preset = {\n    example: {\n        en_US: "Example",\n        de_DE: "Beispiel",\n        pl_PL: "Przykład"\n    }\n};\n\nconst App = () => {\n    const [language, setLanguage] = useState("en_US");\n\n    return (\n        <div className="App">\n            <LitteraProvider\n                language={language} \n                preset={preset} \n                setLanguage={(lang) => setLanguage(lang)}>\n                    <div>\n                        ...Your code\n                    </div>\n            </LitteraProvider>\n        </div>\n    );\n}\n                            '
                                    )
                                ),
                                n.a.createElement(
                                    "div",
                                    null,
                                    n.a.createElement(
                                        "p",
                                        null,
                                        "Start creating translations right in your components."
                                    ),
                                    n.a.createElement(
                                        w.a,
                                        { language: "javascript" },
                                        'import React from "react";\nimport {useLittera} from "react-littera";\n\nconst translations = preset => ({\n    title: {\n        en_US: "Hello",\n        de_DE: "Hallo",\n        pl_PL: "Cześć"\n    },\n    description: {\n        en_US: `This is just an ${preset.example}`,\n        en_US: `Das ist nur ein ${preset.example}`,\n        en_US: `To tylko ${preset.example}`,\n    }\n});\n\nconst WelcomeComponent = () => {\n    const [translated] = useLittera(translations);\n\n    return (\n        <React.Fragment>\n            <h2>{translated.title}</h2>\n            <p>{translated.description}</p>\n        </React.Fragment>\n    );\n}\n\nexport default WelcomeComponent;\n                            '
                                    )
                                )
                            )
                        )
                    )
                );
            }),
            A = x()({
                root: { width: "100%", height: "32px", lineHeight: "32px", background: "#2F2E41" },
                content: { padding: "0 5%", "& p": { color: "#FFF" } }
            })(function(a) {
                var t = a.classes;
                a.children;
                return n.a.createElement(
                    "div",
                    { className: t.root },
                    n.a.createElement(
                        "div",
                        { className: t.content },
                        n.a.createElement("p", null, "react-littera")
                    )
                );
            }),
            E = x()({
                root: { width: "100%", height: "auto", position: "relative", display: "block" },
                content: {
                    display: "flex",
                    width: "80%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "5% 10%"
                },
                image_one: { flexBasis: "50%", "& svg": { width: "60%", height: "auto" } },
                intro_text: {
                    flexBasis: "50%",
                    color: "#fff",
                    "& h3": {
                        fontSize: "4rem",
                        margin: 0,
                        color: "#FAFAFA",
                        textTransform: "uppercase"
                    },
                    "& p": { opacity: ".5", marginTop: 0 }
                }
            })(function(a) {
                var t = a.classes;
                a.children;
                return n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                        "div",
                        { className: t.root },
                        n.a.createElement(
                            "div",
                            { className: t.content },
                            n.a.createElement(
                                "div",
                                { className: t.intro_text },
                                n.a.createElement("h3", null, "API"),
                                n.a.createElement("p", null)
                            ),
                            n.a.createElement("div", {
                                className: t.image_one,
                                dangerouslySetInnerHTML: {
                                    __html:
                                        '<svg id="e7dedc5b-fca6-4313-b5a0-e6297481e8ae" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1022.7" height="785.81" viewBox="0 0 1022.7 785.81"><defs><linearGradient id="af83dc26-9572-4816-b7a1-1af4f72ff554" x1="678.2" y1="821.79" x2="678.2" y2="493.4" gradientTransform="translate(-20.24 29.65) rotate(-2.31)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient></defs><title>bug fixing</title><ellipse cx="468.63" cy="660.88" rx="425" ry="33" fill="#5f4494" opacity="0.1"/><g opacity="0.1"><path d="M933.7,529.93c-2.54-7.71-12.84-11.26-23-7.92a24.76,24.76,0,0,0-4.23,1.83c-.65-.18-1.32-.34-2-.46a22.42,22.42,0,0,0,.63-6.79A24.6,24.6,0,0,0,916,495.12a24.63,24.63,0,0,0,10.86-21.47,23.76,23.76,0,0,0,8.23-9.32c4.9-9.7,2.87-20.6-4.54-24.35s-17.4,1.08-22.3,10.78a23.69,23.69,0,0,0-2.63,12.15,24.63,24.63,0,0,0-10.86,21.47,24.63,24.63,0,0,0-10.86,21.47A24.64,24.64,0,0,0,873,527.33a23.76,23.76,0,0,0-8.23,9.32,25.46,25.46,0,0,0-2.08,5.74,21.18,21.18,0,0,0-4.44-4.73,25.38,25.38,0,0,0-1-4.5c-3.34-10.17-12.3-16.37-20-13.83s-11.26,12.83-7.92,23a23.07,23.07,0,0,0,7.56,11.08,25.38,25.38,0,0,0,1,4.5c1.94,5.9,5.77,10.46,10.15,12.75a23.23,23.23,0,0,0-.83,3.9,25.29,25.29,0,0,0-7.54,14.91,25.27,25.27,0,0,0-7.54,14.92,24.63,24.63,0,0,0-5,6.81c-4.91,9.7-2.88,20.61,4.53,24.35s17.4-1.07,22.31-10.78a24.62,24.62,0,0,0,2.5-8.09,25.29,25.29,0,0,0,7.54-14.91,25.27,25.27,0,0,0,7.54-14.92A25.21,25.21,0,0,0,879,571.94,25.21,25.21,0,0,0,886.56,557a24.11,24.11,0,0,0,3.39-4,23.46,23.46,0,0,0,12.27-.77,24.76,24.76,0,0,0,4.23-1.83,23.2,23.2,0,0,0,13.42-.48C930,546.61,936.23,537.65,933.7,529.93Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><g opacity="0.1"><path d="M915.77,499.53a21.5,21.5,0,0,1-3.44,2.75,23,23,0,0,1-1.11,8.43,26.18,26.18,0,0,0,2.1-3.43A24.64,24.64,0,0,0,915.77,499.53Z" transform="translate(-88.65 -57.09)"/><path d="M926.63,478.06a21.5,21.5,0,0,1-3.44,2.75,23,23,0,0,1-1.11,8.43,25.65,25.65,0,0,0,2.1-3.44A24.85,24.85,0,0,0,926.63,478.06Z" transform="translate(-88.65 -57.09)"/><path d="M902,470.07a21.91,21.91,0,0,1,.17-4.41,24.93,24.93,0,0,0-4.78,6.57,25.63,25.63,0,0,0-1.52,3.73A22.75,22.75,0,0,1,902,470.07Z" transform="translate(-88.65 -57.09)"/><path d="M833.07,600a23.59,23.59,0,0,1,2.95-3.38,22.92,22.92,0,0,1,.87-4,25.09,25.09,0,0,0-2.29,3.71A25.59,25.59,0,0,0,833.07,600Z" transform="translate(-88.65 -57.09)"/><path d="M840.61,585.1a23.59,23.59,0,0,1,2.95-3.38,23,23,0,0,1,.83-3.9l0,0a25.68,25.68,0,0,0-2.2,3.59A26.76,26.76,0,0,0,840.61,585.1Z" transform="translate(-88.65 -57.09)"/><path d="M904.9,521a20.82,20.82,0,0,1-3.43,2.74,22.45,22.45,0,0,1-.63,6.79,18.75,18.75,0,0,1,2,.46,24.76,24.76,0,0,1,4.23-1.83c10.18-3.34,20.47.21,23,7.92a11.68,11.68,0,0,1,.32,6c3.35-3.94,4.74-8.74,3.3-13.14-2.54-7.71-12.84-11.26-23-7.92a24.76,24.76,0,0,0-4.23,1.83c-.65-.18-1.32-.34-2-.46C904.65,522.59,904.79,521.8,904.9,521Z" transform="translate(-88.65 -57.09)"/><path d="M829.35,607.49a25.09,25.09,0,0,0-2.29,3.71,26.56,26.56,0,0,0-1.54,3.74,24.48,24.48,0,0,1,3-3.4A22.92,22.92,0,0,1,829.35,607.49Z" transform="translate(-88.65 -57.09)"/><path d="M891.09,491.54a22,22,0,0,1,.17-4.41,24.93,24.93,0,0,0-4.78,6.57,25.63,25.63,0,0,0-1.52,3.73A22.75,22.75,0,0,1,891.09,491.54Z" transform="translate(-88.65 -57.09)"/><path d="M875.4,579.1a24.29,24.29,0,0,1-1,4.38,26.67,26.67,0,0,0,2.09-3.44,25.49,25.49,0,0,0,1.63-4A24.23,24.23,0,0,1,875.4,579.1Z" transform="translate(-88.65 -57.09)"/><path d="M860.32,608.92a24.15,24.15,0,0,1-1,4.38,25.65,25.65,0,0,0,2.1-3.44,26.47,26.47,0,0,0,1.63-4A23.57,23.57,0,0,1,860.32,608.92Z" transform="translate(-88.65 -57.09)"/><path d="M867.86,594a24.11,24.11,0,0,1-1,4.38A26.67,26.67,0,0,0,869,595a25.49,25.49,0,0,0,1.63-4A24.23,24.23,0,0,1,867.86,594Z" transform="translate(-88.65 -57.09)"/><path d="M882.94,564.19a24,24,0,0,1-1,4.37,25.89,25.89,0,0,0,2.09-3.43,25.48,25.48,0,0,0,1.64-4.07A23.22,23.22,0,0,1,882.94,564.19Z" transform="translate(-88.65 -57.09)"/><path d="M833.57,526.48c7.72-2.53,16.68,3.66,20,13.83a25.68,25.68,0,0,1,1,4.51,21.18,21.18,0,0,1,4.44,4.73,25.53,25.53,0,0,1,2.08-5.75c.35-.68.73-1.33,1.12-2a21.07,21.07,0,0,0-4-4.18,25.38,25.38,0,0,0-1-4.5c-3.34-10.17-12.3-16.37-20-13.83-4.4,1.44-7.44,5.41-8.62,10.43A11.69,11.69,0,0,1,833.57,526.48Z" transform="translate(-88.65 -57.09)"/><path d="M869.37,534.48a21.85,21.85,0,0,1,.18-4.4,24.73,24.73,0,0,0-4.79,6.57,25.07,25.07,0,0,0-1.52,3.72A23,23,0,0,1,869.37,534.48Z" transform="translate(-88.65 -57.09)"/><path d="M880.23,513a21.85,21.85,0,0,1,.18-4.4,24.52,24.52,0,0,0-4.79,6.56,25.63,25.63,0,0,0-1.52,3.73A22.75,22.75,0,0,1,880.23,513Z" transform="translate(-88.65 -57.09)"/><path d="M852.78,623.83a24.25,24.25,0,0,1-1,4.39,25.73,25.73,0,0,0,3.73-7.49A23.57,23.57,0,0,1,852.78,623.83Z" transform="translate(-88.65 -57.09)"/></g><path d="M948.52,430.71a23.68,23.68,0,0,0,8.23-9.32c4.91-9.7,2.88-20.61-4.53-24.36s-17.4,1.08-22.31,10.79A23.68,23.68,0,0,0,927.29,420a24.63,24.63,0,0,0-10.86,21.47,23.61,23.61,0,0,0-8.23,9.32,24.69,24.69,0,0,0-1.51,3.69,20.85,20.85,0,0,1,10.77-8A12.24,12.24,0,0,0,933,454.32a20.85,20.85,0,0,1,0,13.41,25.48,25.48,0,0,0,2.08-3.4,23.68,23.68,0,0,0,2.62-12.15,24.57,24.57,0,0,0,10.86-21.47Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><path d="M1067.88,293.07a72,72,0,0,0,8.72-4.83l-32.33-23.62,38,19.57a72.13,72.13,0,0,0,27-50.31l-64.58.66,64.72-10.82A72,72,0,1,0,966.83,242a72.09,72.09,0,0,0-13.26,8l33.75,46.93L946.8,255.85a72.08,72.08,0,0,0-20.17,65.61,72,72,0,1,0,101.05,51.1,72,72,0,0,0,40.2-79.49Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M933,274.75a71.77,71.77,0,0,0-6.35,46.71,72,72,0,1,0,101.05,51.1C1041.83,366,936.62,267.54,933,274.75Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><circle cx="925.49" cy="102.72" r="10.69" fill="#5f4494"/><circle cx="987.93" cy="109.58" r="10.69" fill="#5f4494"/><circle cx="1012.01" cy="205.64" r="10.69" fill="#5f4494"/><circle cx="979.51" cy="253.61" r="10.69" fill="#5f4494"/><circle cx="935.11" cy="353.24" r="10.69" fill="#5f4494"/><circle cx="935.11" cy="353.24" r="10.69" opacity="0.1"/><circle cx="836.39" cy="240.4" r="10.69" fill="#5f4494"/><circle cx="836.39" cy="240.4" r="10.69" opacity="0.1"/><path d="M913.64,473.32c-7.11-3.59-9.26-13.76-5.11-23.14-.22.38-.43.77-.63,1.18-4.91,9.7-2.88,20.6,4.53,24.35s17.4-1.08,22.3-10.78c.21-.4.39-.81.57-1.21C930.21,472.63,920.74,476.92,913.64,473.32Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M903.08,494.2c-7.1-3.59-9.26-13.76-5.1-23.15-.22.39-.44.78-.64,1.18-4.91,9.7-2.88,20.61,4.53,24.35s17.4-1.07,22.31-10.78c.2-.4.39-.8.57-1.21C919.65,493.5,910.19,497.79,903.08,494.2Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M892.52,515.07c-7.1-3.59-9.26-13.76-5.1-23.14-.22.38-.44.77-.64,1.18-4.91,9.7-2.87,20.6,4.54,24.35s17.39-1.08,22.3-10.78c.2-.4.39-.81.57-1.21C909.1,514.38,899.63,518.67,892.52,515.07Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M882,536c-7.11-3.59-9.26-13.76-5.11-23.14-.22.38-.43.77-.64,1.17-4.9,9.7-2.87,20.61,4.54,24.36s17.4-1.08,22.3-10.79c.21-.4.39-.8.57-1.21C898.54,535.25,889.07,539.54,882,536Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M871.41,556.82c-7.11-3.59-9.26-13.76-5.11-23.14-.22.38-.43.77-.63,1.18-4.91,9.7-2.88,20.6,4.53,24.35s17.4-1.08,22.31-10.78c.2-.4.39-.81.57-1.21C888,556.13,878.51,560.42,871.41,556.82Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M860.85,577.7c-7.1-3.59-9.26-13.76-5.1-23.14-.22.38-.44.77-.64,1.17-4.91,9.7-2.88,20.61,4.54,24.36S877,579,882,569.3c.2-.4.39-.8.57-1.21C877.42,577,868,581.29,860.85,577.7Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M850.29,598.57c-7.1-3.59-9.26-13.76-5.1-23.14-.22.39-.43.77-.64,1.18-4.9,9.7-2.87,20.6,4.54,24.35s17.4-1.08,22.3-10.78c.21-.4.39-.81.57-1.21C866.87,597.88,857.4,602.17,850.29,598.57Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M839.74,619.45c-7.11-3.59-9.26-13.76-5.11-23.14q-.33.57-.63,1.17c-4.91,9.7-2.88,20.61,4.53,24.36s17.4-1.08,22.31-10.79c.2-.4.38-.8.56-1.21C856.31,618.75,846.84,623,839.74,619.45Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M832.8,633.17c-7.1-3.6-9.26-13.76-5.1-23.15-.22.39-.44.78-.64,1.18-4.91,9.7-2.88,20.61,4.53,24.35s17.4-1.07,22.31-10.78c.2-.4.39-.8.57-1.21C849.37,632.47,839.9,636.76,832.8,633.17Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M1023.59,540.26a37.4,37.4,0,0,0,2-9.79,5.34,5.34,0,1,0-.81-10.62,37.31,37.31,0,0,0-19.64-25.31,5.34,5.34,0,1,0-9.54-4.82,5,5,0,0,0-.48,1.43A37.49,37.49,0,0,0,962.25,501a37.64,37.64,0,0,0-9.82-.29l-4.33,19.71-.26-19a37.42,37.42,0,1,0,20,72,5.28,5.28,0,0,0,2.25,2.16,5.34,5.34,0,0,0,7.32-6.88,37.35,37.35,0,0,0,4.8-3.92,37.45,37.45,0,0,0,39.31-19.83l-20.15-3.39Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><g opacity="0.1"><path d="M992.46,549.83c-7.44-9.82-12-21.45-17.25-32.61a136.38,136.38,0,0,0-7.07-13.36l-3.94-4.59c-.66.56-1.32,1.14-2,1.75a37.64,37.64,0,0,0-9.82-.29l-4.33,19.71-.26-19a37.42,37.42,0,1,0,20,72,5.28,5.28,0,0,0,2.25,2.16,5.34,5.34,0,0,0,7.32-6.88,37.35,37.35,0,0,0,4.8-3.92,37.49,37.49,0,0,0,22.44-3.32A52.71,52.71,0,0,1,992.46,549.83Z" transform="translate(-88.65 -57.09)"/></g><path d="M860.71,507.63a5.34,5.34,0,0,0-4.78-7.75,37.37,37.37,0,0,0-11.7-20.83,37.52,37.52,0,0,0,1.1-11.7L825.68,464l19.08-1.2a38,38,0,0,0-1.41-5.28,5.46,5.46,0,0,0,1.76-2,5.35,5.35,0,0,0-6.59-7.44A37.42,37.42,0,0,0,771.73,479a5.25,5.25,0,0,0-2.66,2.5,5.34,5.34,0,0,0,6.75,7.37,37.53,37.53,0,0,0,7.09,8.65,37.4,37.4,0,0,0,1.74,23.76L811,514.44,787.5,526.8a37.42,37.42,0,0,0,68.91-16.26A5.33,5.33,0,0,0,860.71,507.63Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M860.71,507.63a5.34,5.34,0,0,0-4.78-7.75,37.37,37.37,0,0,0-11.7-20.83c.16-.63.3-1.25.42-1.88a13.18,13.18,0,0,0-1.93,1.71c-3.55,3.89-5.37,9.12-8.88,13.05-4.14,4.64-10.34,7.06-16.53,7.71s-12.42-.3-18.53-1.49c-5.06-1-10.19-2.16-15.32-1.67-.5,0-1,.11-1.46.19.3.29.6.58.91.86a37.4,37.4,0,0,0,1.74,23.76L811,514.44,787.5,526.8a37.42,37.42,0,0,0,68.91-16.26A5.33,5.33,0,0,0,860.71,507.63Z" transform="translate(-88.65 -57.09)" opacity="0.1"/></g><g opacity="0.1"><path d="M178.14,568.33c1.28-3.89,6.47-5.68,11.59-4a12.78,12.78,0,0,1,2.13.92c.33-.09.67-.17,1-.23a11.26,11.26,0,0,1-.32-3.42,12.46,12.46,0,0,1-5.47-10.82,11.92,11.92,0,0,1-4.14-4.69,12,12,0,0,1-1.33-6.12,12,12,0,0,1-4.14-4.7C175,530.39,176,524.9,179.75,523s8.77.55,11.24,5.43a12,12,0,0,1,1.32,6.13,12.37,12.37,0,0,1,5.47,10.81,12.4,12.4,0,0,1,5.47,10.82A12.37,12.37,0,0,1,208.72,567a12,12,0,0,1,4.15,4.7,12.66,12.66,0,0,1,1,2.9,10.66,10.66,0,0,1,2.23-2.39,12.58,12.58,0,0,1,.52-2.27c1.69-5.12,6.2-8.24,10.09-7s5.67,6.47,4,11.59a11.67,11.67,0,0,1-3.81,5.59,12.67,12.67,0,0,1-.52,2.26,11.1,11.1,0,0,1-5.11,6.42,12.84,12.84,0,0,1,.42,2,12.57,12.57,0,0,1,2.53,3.43,12.32,12.32,0,0,1,1.26,4.08,12.55,12.55,0,0,1,2.54,3.43,12.39,12.39,0,0,1,1.26,4.08,12.45,12.45,0,0,1,2.54,3.44c2.47,4.88,1.45,10.38-2.28,12.26s-8.77-.54-11.24-5.43a12.48,12.48,0,0,1-1.26-4.08,12.7,12.7,0,0,1-3.8-7.51,12.7,12.7,0,0,1-3.8-7.51,12.6,12.6,0,0,1-2.54-3.43,12.73,12.73,0,0,1-1.26-4.08,12.57,12.57,0,0,1-2.53-3.43,12.32,12.32,0,0,1-1.26-4.08,11.63,11.63,0,0,1-1.71-2,11.9,11.9,0,0,1-6.18-.38,13.29,13.29,0,0,1-2.14-.93,11.61,11.61,0,0,1-6.75-.24C180,576.73,176.87,572.22,178.14,568.33Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><g opacity="0.1"><path d="M187.17,553a10.72,10.72,0,0,0,1.74,1.39,11.31,11.31,0,0,0,.56,4.24,11.93,11.93,0,0,1-1.06-1.73A12.46,12.46,0,0,1,187.17,553Z" transform="translate(-88.65 -57.09)"/><path d="M181.7,542.2a11.21,11.21,0,0,0,1.74,1.38,11.39,11.39,0,0,0,.56,4.25,12.7,12.7,0,0,1-2.3-5.63Z" transform="translate(-88.65 -57.09)"/><path d="M194.13,538.17a11.11,11.11,0,0,0-.08-2.22,12.66,12.66,0,0,1,2.41,3.31,13,13,0,0,1,.76,1.88A11.42,11.42,0,0,0,194.13,538.17Z" transform="translate(-88.65 -57.09)"/><path d="M228.83,603.63a11.65,11.65,0,0,0-1.48-1.7,12.4,12.4,0,0,0-.44-2,13.23,13.23,0,0,1,1.15,1.86A13,13,0,0,1,228.83,603.63Z" transform="translate(-88.65 -57.09)"/><path d="M225,596.12a11.65,11.65,0,0,0-1.48-1.7,11.75,11.75,0,0,0-.42-2h0a12.67,12.67,0,0,1,1.88,3.68Z" transform="translate(-88.65 -57.09)"/><path d="M192.65,563.84a10.11,10.11,0,0,0,1.73,1.37,10.9,10.9,0,0,0,.32,3.42,10,10,0,0,0-1,.23,13.26,13.26,0,0,0-2.14-.92c-5.12-1.68-10.31.11-11.58,4a5.82,5.82,0,0,0-.17,3,6.93,6.93,0,0,1-1.66-6.61c1.28-3.89,6.47-5.68,11.59-4a12.78,12.78,0,0,1,2.13.92c.33-.09.67-.17,1-.23A10.32,10.32,0,0,1,192.65,563.84Z" transform="translate(-88.65 -57.09)"/><path d="M230.71,607.4a12.79,12.79,0,0,1,1.15,1.87,13,13,0,0,1,.77,1.88,11.74,11.74,0,0,0-1.48-1.71A12.4,12.4,0,0,0,230.71,607.4Z" transform="translate(-88.65 -57.09)"/><path d="M199.6,549a11.08,11.08,0,0,0-.08-2.22,12.49,12.49,0,0,1,2.41,3.31,12.87,12.87,0,0,1,.76,1.87A11.38,11.38,0,0,0,199.6,549Z" transform="translate(-88.65 -57.09)"/><path d="M207.51,593.1a11.94,11.94,0,0,0,.49,2.2,12.63,12.63,0,0,1-1.88-3.77A11.72,11.72,0,0,0,207.51,593.1Z" transform="translate(-88.65 -57.09)"/><path d="M215.1,608.12a12.66,12.66,0,0,0,.5,2.2,11.93,11.93,0,0,1-1.06-1.73,12.88,12.88,0,0,1-.82-2A13,13,0,0,0,215.1,608.12Z" transform="translate(-88.65 -57.09)"/><path d="M211.31,600.61a11.94,11.94,0,0,0,.49,2.2,12.88,12.88,0,0,1-1.06-1.73,12.6,12.6,0,0,1-.82-2A11.72,11.72,0,0,0,211.31,600.61Z" transform="translate(-88.65 -57.09)"/><path d="M203.71,585.58a11.86,11.86,0,0,0,.49,2.21,12.44,12.44,0,0,1-1-1.73,12.23,12.23,0,0,1-.83-2A11.13,11.13,0,0,0,203.71,585.58Z" transform="translate(-88.65 -57.09)"/><path d="M228.58,566.59c-3.89-1.28-8.4,1.84-10.08,7a12.58,12.58,0,0,0-.52,2.27,10.63,10.63,0,0,0-2.24,2.38,12.83,12.83,0,0,0-1.05-2.9c-.17-.34-.36-.67-.56-1a10.63,10.63,0,0,1,2-2.1,12.58,12.58,0,0,1,.52-2.27c1.69-5.12,6.2-8.24,10.09-7a6.93,6.93,0,0,1,4.34,5.26A5.93,5.93,0,0,0,228.58,566.59Z" transform="translate(-88.65 -57.09)"/><path d="M210.54,570.62a11.11,11.11,0,0,0-.08-2.22,12.49,12.49,0,0,1,2.41,3.31,13,13,0,0,1,.76,1.88A11.28,11.28,0,0,0,210.54,570.62Z" transform="translate(-88.65 -57.09)"/><path d="M205.07,559.8a11.13,11.13,0,0,0-.08-2.22,12.83,12.83,0,0,1,2.41,3.31,13,13,0,0,1,.76,1.88A11.42,11.42,0,0,0,205.07,559.8Z" transform="translate(-88.65 -57.09)"/><path d="M218.9,615.63a11.9,11.9,0,0,0,.5,2.21,12.61,12.61,0,0,1-1.06-1.74,12.88,12.88,0,0,1-.82-2A13,13,0,0,0,218.9,615.63Z" transform="translate(-88.65 -57.09)"/></g><path d="M170.67,518.34a11.92,11.92,0,0,1-4.14-4.69c-2.47-4.89-1.45-10.38,2.28-12.27s8.77.54,11.24,5.43a11.93,11.93,0,0,1,1.32,6.12,12.4,12.4,0,0,1,5.47,10.82,12,12,0,0,1,4.15,4.69,13.23,13.23,0,0,1,.76,1.86,10.57,10.57,0,0,0-5.43-4,6.16,6.16,0,0,1-7.83,4,10.52,10.52,0,0,0,0,6.75,13.19,13.19,0,0,1-1-1.71,12,12,0,0,1-1.33-6.12,12.43,12.43,0,0,1-5.47-10.82Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><path d="M110.55,449a36.81,36.81,0,0,1-4.39-2.43l16.28-11.9-19.14,9.85a36.34,36.34,0,0,1-13.59-25.34l32.54.34-32.61-5.46a36.29,36.29,0,1,1,71.81,9.2,36.73,36.73,0,0,1,6.68,4l-17,23.64,20.41-20.68a36.32,36.32,0,0,1,10.16,33.05,36.29,36.29,0,1,1-50.9,25.74,36.28,36.28,0,0,1-20.25-40Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M178.5,439.78a36.12,36.12,0,0,1,3.2,23.53,36.29,36.29,0,1,1-50.9,25.74C123.67,485.74,176.67,436.15,178.5,439.78Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><circle cx="48.97" cy="324.78" r="5.39" fill="#5f4494"/><circle cx="17.51" cy="328.24" r="5.39" fill="#5f4494"/><circle cx="5.39" cy="376.63" r="5.39" fill="#5f4494"/><circle cx="21.76" cy="400.8" r="5.39" fill="#5f4494"/><circle cx="44.12" cy="450.99" r="5.39" fill="#5f4494"/><circle cx="44.12" cy="450.99" r="5.39" opacity="0.1"/><circle cx="93.85" cy="394.14" r="5.39" fill="#5f4494"/><circle cx="93.85" cy="394.14" r="5.39" opacity="0.1"/><path d="M188.25,539.81c3.58-1.81,4.66-6.93,2.57-11.66.11.2.22.39.32.59,2.47,4.89,1.45,10.38-2.29,12.27s-8.76-.54-11.23-5.43c-.1-.2-.2-.4-.29-.61C179.9,539.46,184.67,541.62,188.25,539.81Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M193.56,550.33c3.58-1.81,4.67-6.94,2.58-11.66.11.19.22.39.32.59,2.47,4.89,1.45,10.38-2.29,12.27s-8.76-.54-11.23-5.43c-.11-.2-.2-.41-.29-.61C185.22,550,190,552.14,193.56,550.33Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M198.88,560.84c3.58-1.81,4.67-6.93,2.57-11.66.12.2.22.39.33.6,2.47,4.88,1.44,10.38-2.29,12.26s-8.76-.54-11.23-5.43c-.11-.2-.2-.4-.29-.61C190.53,560.49,195.3,562.65,198.88,560.84Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M204.2,571.36c3.58-1.81,4.67-6.93,2.57-11.66.11.19.22.39.32.59,2.48,4.89,1.45,10.38-2.28,12.27s-8.77-.54-11.24-5.43c-.1-.2-.19-.41-.28-.61C195.85,571,200.62,573.17,204.2,571.36Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M209.52,581.87c3.58-1.81,4.66-6.93,2.57-11.65.11.19.22.39.32.59,2.47,4.89,1.45,10.38-2.28,12.27s-8.77-.55-11.24-5.43c-.1-.21-.19-.41-.29-.61C201.17,581.52,205.94,583.68,209.52,581.87Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M214.84,592.39c3.58-1.81,4.66-6.93,2.57-11.66.11.2.22.39.32.59,2.47,4.89,1.45,10.38-2.28,12.27s-8.77-.54-11.24-5.43c-.1-.2-.2-.4-.29-.61C206.49,592,211.26,594.2,214.84,592.39Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M220.16,602.91c3.57-1.81,4.66-6.94,2.57-11.66.11.19.22.39.32.59,2.47,4.89,1.45,10.38-2.29,12.27s-8.76-.55-11.23-5.43c-.1-.21-.2-.41-.29-.61C211.81,602.55,216.58,604.72,220.16,602.91Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M225.47,613.42c3.58-1.81,4.67-6.93,2.57-11.66.12.2.22.39.33.6,2.47,4.88,1.44,10.38-2.29,12.26s-8.76-.54-11.23-5.43c-.11-.2-.2-.4-.29-.61C217.13,613.07,221.89,615.23,225.47,613.42Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M229,620.33c3.58-1.81,4.66-6.93,2.57-11.66.11.2.22.39.32.6,2.47,4.88,1.45,10.38-2.28,12.26s-8.77-.54-11.24-5.43c-.1-.2-.2-.4-.29-.61C220.62,620,225.39,622.14,229,620.33Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M132.86,573.53a18.57,18.57,0,0,1-1-4.93,2.69,2.69,0,1,1,.41-5.35,18.82,18.82,0,0,1,9.89-12.75,2.69,2.69,0,1,1,4.81-2.43,2.44,2.44,0,0,1,.24.72,18.92,18.92,0,0,1,16.56,5,18.68,18.68,0,0,1,5-.14l2.18,9.92L171,554a18.85,18.85,0,1,1-10.08,36.29,2.76,2.76,0,0,1-1.13,1.09,2.7,2.7,0,0,1-3.7-3.47,18.84,18.84,0,0,1-2.41-2,18.87,18.87,0,0,1-19.8-10l10.15-1.71Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><g opacity="0.1"><path d="M148.54,578.35c3.75-5,6.05-10.8,8.69-16.42a66.7,66.7,0,0,1,3.56-6.74l2-2.31c.34.29.67.58,1,.88a18.68,18.68,0,0,1,5-.14l2.18,9.92L171,554a18.85,18.85,0,1,1-10.08,36.29,2.76,2.76,0,0,1-1.13,1.09,2.7,2.7,0,0,1-3.7-3.47,18.84,18.84,0,0,1-2.41-2,19,19,0,0,1-11.31-1.67A26.59,26.59,0,0,0,148.54,578.35Z" transform="translate(-88.65 -57.09)"/></g><path d="M214.91,557.09a2.68,2.68,0,0,1,1.19-3.61,2.64,2.64,0,0,1,1.22-.29,18.85,18.85,0,0,1,5.89-10.5,18.71,18.71,0,0,1-.55-5.89l9.89-1.66-9.61-.61a18.65,18.65,0,0,1,.72-2.66,2.64,2.64,0,0,1-.89-1,2.7,2.7,0,0,1,3.32-3.75,18.63,18.63,0,0,1,6.87-5.93,18.84,18.84,0,0,1,26.77,21.5,2.69,2.69,0,0,1,.16,4.87,2.7,2.7,0,0,1-2.22.1A18.74,18.74,0,0,1,254.1,552a18.9,18.9,0,0,1-.87,12L240,560.52l11.83,6.23A18.86,18.86,0,0,1,219,565.21a19.11,19.11,0,0,1-1.94-6.65A2.67,2.67,0,0,1,214.91,557.09Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M214.91,557.09a2.68,2.68,0,0,1,1.19-3.61,2.64,2.64,0,0,1,1.22-.29,18.85,18.85,0,0,1,5.89-10.5c-.08-.31-.15-.63-.21-.94a7.27,7.27,0,0,1,1,.86c1.79,2,2.71,4.59,4.47,6.57a12.91,12.91,0,0,0,8.33,3.89,31.54,31.54,0,0,0,9.33-.75,27.35,27.35,0,0,1,7.72-.85l.74.1-.46.43a18.9,18.9,0,0,1-.87,12L240,560.52l11.83,6.23A18.86,18.86,0,0,1,219,565.21a19.11,19.11,0,0,1-1.94-6.65A2.67,2.67,0,0,1,214.91,557.09Z" transform="translate(-88.65 -57.09)" opacity="0.1"/></g><path d="M435,109a20.23,20.23,0,0,0-11.74,1.28,17.32,17.32,0,0,1-14.1,0,19.76,19.76,0,0,0-16.58.33,10.28,10.28,0,0,1-4.77,1.19c-6.72,0-12.31-6.77-13.47-15.7a13.07,13.07,0,0,0,3.36-3.62c3.94-6.35,10-10.43,16.89-10.43s12.89,4,16.83,10.31a13,13,0,0,0,11.16,6.14h.18C428.06,98.47,432.69,102.76,435,109Z" transform="translate(-88.65 -57.09)" fill="#5f4494" opacity="0.1"/><path d="M455.42,81l-10.86,6.89,6.59-12a10.74,10.74,0,0,0-6.57-2.34h-.17a12.89,12.89,0,0,1-2.25-.17l-3.69,2.34,1.58-2.87A13.19,13.19,0,0,1,433.61,68L427,72.13l4.16-7.57c-3.85-4.63-9.05-7.47-14.76-7.47-6.85,0-13,4.08-16.9,10.43a12.62,12.62,0,0,1-11.17,6H388c-7.56,0-13.7,8.57-13.7,19.16s6.14,19.15,13.7,19.15a10.28,10.28,0,0,0,4.77-1.19,19.72,19.72,0,0,1,16.58-.32,17.37,17.37,0,0,0,14.1,0,19.75,19.75,0,0,1,16.43.32,10.35,10.35,0,0,0,4.72,1.16c7.57,0,13.7-8.57,13.7-19.15A24.36,24.36,0,0,0,455.42,81Z" transform="translate(-88.65 -57.09)" fill="#5f4494" opacity="0.1"/><path d="M209,247.54a29,29,0,0,0-16.77,1.82,24.71,24.71,0,0,1-20.14-.05,28.22,28.22,0,0,0-23.68.47,14.75,14.75,0,0,1-6.82,1.7c-9.6,0-17.59-9.67-19.25-22.43a18.41,18.41,0,0,0,4.8-5.17c5.63-9.07,14.35-14.9,24.14-14.9s18.4,5.76,24,14.73a18.52,18.52,0,0,0,16,8.77h.25C199.11,232.47,205.73,238.6,209,247.54Z" transform="translate(-88.65 -57.09)" fill="#5f4494" opacity="0.1"/><path d="M238.2,207.49l-15.52,9.84,9.42-17.13a15.34,15.34,0,0,0-9.39-3.35h-.25a18.16,18.16,0,0,1-3.22-.24L214,200l2.26-4.1a18.7,18.7,0,0,1-9.2-7l-9.42,6L203.57,184c-5.51-6.61-12.93-10.66-21.09-10.66-9.79,0-18.51,5.82-24.14,14.89a18.05,18.05,0,0,1-16,8.61h-.53c-10.81,0-19.57,12.25-19.57,27.37s8.76,27.37,19.57,27.37a14.61,14.61,0,0,0,6.82-1.71,28.22,28.22,0,0,1,23.68-.46,24.71,24.71,0,0,0,20.14.05,28.25,28.25,0,0,1,23.48.45,14.65,14.65,0,0,0,6.74,1.67c10.81,0,19.57-12.26,19.57-27.37A34.76,34.76,0,0,0,238.2,207.49Z" transform="translate(-88.65 -57.09)" fill="#5f4494" opacity="0.1"/><path d="M836.62,148a20.24,20.24,0,0,1,11.74,1.28,17.29,17.29,0,0,0,14.09,0,19.76,19.76,0,0,1,16.58.33,10.31,10.31,0,0,0,4.77,1.19c6.72,0,12.32-6.77,13.48-15.7a12.93,12.93,0,0,1-3.36-3.62C890,125.11,883.87,121,877,121s-12.88,4-16.82,10.31A13,13,0,0,1,849,137.48h-.17C843.51,137.47,838.87,141.76,836.62,148Z" transform="translate(-88.65 -57.09)" fill="#5f4494" opacity="0.1"/><path d="M816.14,120,827,126.87l-6.6-12a10.76,10.76,0,0,1,6.57-2.34h.18a13,13,0,0,0,2.25-.17l3.68,2.34-1.58-2.87A13.21,13.21,0,0,0,838,107l6.59,4.18-4.17-7.57c3.86-4.63,9-7.47,14.77-7.47,6.85,0,13,4.08,16.9,10.43a12.61,12.61,0,0,0,11.17,6h.36c7.57,0,13.7,8.57,13.7,19.16s-6.13,19.15-13.7,19.15a10.34,10.34,0,0,1-4.77-1.19,19.72,19.72,0,0,0-16.58-.32,17.35,17.35,0,0,1-14.09,0,19.77,19.77,0,0,0-16.44.32,10.32,10.32,0,0,1-4.72,1.16c-7.56,0-13.7-8.57-13.7-19.15A24.36,24.36,0,0,1,816.14,120Z" transform="translate(-88.65 -57.09)" fill="#5f4494" opacity="0.1"/><ellipse cx="615.63" cy="756.88" rx="115" ry="20" fill="#5f4494" opacity="0.1"/><polygon points="555.44 661.88 377.25 659.59 377.78 655.02 386.39 579.63 542.88 579.63 554.39 655.02 555.27 660.74 555.44 661.88" fill="#d0d2d5"/><polygon points="555.27 660.74 466.35 660.74 377.25 659.59 377.78 655.02 554.39 655.02 555.27 660.74" opacity="0.1"/><rect x="347.55" y="656.17" width="236.45" height="5.71" fill="#d0d2d5"/><path d="M898.24,183.92A14.87,14.87,0,0,0,883.44,169H223.12a14.87,14.87,0,0,0-14.8,14.94V584.19H898.24Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><path d="M208.32,580.19v46.88a14.8,14.8,0,0,0,14.8,14.8H883.44a14.8,14.8,0,0,0,14.8-14.8V580.19Z" transform="translate(-88.65 -57.09)" fill="#d0d2d5"/><rect x="148.23" y="137.01" width="636.23" height="359.81" fill="#fff"/><path d="M556.71,624.08a15.4,15.4,0,0,0,12.13-5.89h0a16.06,16.06,0,0,0,1.2-1.76L561.57,615l9.15.06a15.42,15.42,0,0,0,.29-12.21l-12.27,6.36,11.32-8.32a15.42,15.42,0,1,0-25.47,17.26h0A15.4,15.4,0,0,0,556.71,624.08Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><polygon points="483.48 584.77 554.57 656.17 543.66 584.77 483.48 584.77" opacity="0.1"/><rect x="147.73" y="137.05" width="636.92" height="21.02" fill="#444053" opacity="0.1"/><rect x="368.87" y="140.71" width="191.9" height="12.79" rx="0.58" fill="#5f4494" opacity="0.3"/><path d="M643.72,205.52h-.47l-.17-.15a3.89,3.89,0,0,0,.9-2.49,3.78,3.78,0,1,0-3.77,3.81,3.9,3.9,0,0,0,2.49-.91l.17.15v.47l2.93,2.93.87-.88Zm-3.51,0a2.64,2.64,0,1,1,2.63-2.64A2.62,2.62,0,0,1,640.21,205.52Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><circle cx="159.18" cy="147.56" r="3.85" fill="#fa5959" opacity="0.8"/><circle cx="169.77" cy="147.56" r="3.85" fill="#fed253" opacity="0.8"/><circle cx="180.37" cy="147.56" r="3.85" fill="#8ccf4d" opacity="0.8"/><path d="M588.7,348.49c-8.73-11.6-21.38-18.92-35.46-18.92s-26.73,7.32-35.46,18.92a38.39,38.39,0,0,0,8.4,12.65,38.28,38.28,0,0,0,62.52-12.65Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M513.17,355.28a9.17,9.17,0,0,1-1.76-1,7.06,7.06,0,0,1-1.94-2.51,7.18,7.18,0,1,0-11.72,1.74,8,8,0,0,0,1.7,1.37,4.94,4.94,0,0,1,1.91,2,14.44,14.44,0,0,0,3.32,4.36,29,29,0,0,0,4.55,3.2A66.31,66.31,0,0,0,505.49,384a27.05,27.05,0,0,0-7.62,1.23,12.29,12.29,0,0,0-3.53,1.76,8.48,8.48,0,0,0-.87-.06,7.19,7.19,0,1,0,6.73,9.72,4.59,4.59,0,0,1,3.71-3,16.75,16.75,0,0,1,1.85-.12,64.4,64.4,0,0,0,8.55,26.67c-4.24,3.29-6.85,6.88-7.95,10.86a3,3,0,0,0-.57.41,6.81,6.81,0,0,0-.84.78A7.18,7.18,0,1,0,517,434.6a4.71,4.71,0,0,1,1.17-5.08c.48-.45,1-.93,1.7-1.46,8.11,9.47,17.76,15.54,29.81,16.26V380.07C533.75,379.2,519.87,368.83,513.17,355.28ZM613,387a7.93,7.93,0,0,0-.87.06,13.56,13.56,0,0,0-3.53-1.76,26.86,26.86,0,0,0-7.62-1.23,67.76,67.76,0,0,0-3.74-19.55,29,29,0,0,0,4.55-3.2,15.58,15.58,0,0,0,3.44-4.57A4.22,4.22,0,0,1,607,355a0,0,0,0,0,0,0,7.18,7.18,0,1,0-10-3.17,6.82,6.82,0,0,1-1.94,2.51,18.85,18.85,0,0,1-1.76,1.29c-6.7,13.54-20.57,23.62-36.48,24.49v64.31c12-.72,21.71-6.82,29.81-16.26.63.5,1.16.95,1.61,1.37a4.86,4.86,0,0,1,1.26,5.23,7.18,7.18,0,1,0,12.08-2.33,6.81,6.81,0,0,0-.84-.78c-.33-.26-.57-.41-.57-.41-1.1-4-3.7-7.57-8-10.86a64.4,64.4,0,0,0,8.55-26.67,15.9,15.9,0,0,1,1.77.12,4.8,4.8,0,0,1,3.85,3,7.18,7.18,0,0,0,13.85-2.18A7.29,7.29,0,0,0,613,387Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M769.65,802.31a9.56,9.56,0,0,0-2.17-2.41c-4.37-4.13-6.4-10.19-7.48-16.13s-1.39-12-3.12-17.81a58.74,58.74,0,0,0-3.52-8.67c-1-2.14-2.26-6.33-4.09-7.83a2.7,2.7,0,0,0-1.26-.61,14.85,14.85,0,0,0-3.62-4.82c-2.86-2.59-6.35-4.65-8.26-8a18,18,0,0,0-1.93-3.29c-1.29-1.42-3.33-2-4.52-3.5-1.55-1.94-1.2-4.72-1-7.19s0-5.43-2.14-6.73c-1.28-.79-2.93-.71-4.26-1.41-2-1-2.79-3.52-2.75-5.77s.74-4.44.92-6.69c.56-7.16-4.16-14.28-2.34-21.22.69-2.63,2.27-4.91,3.44-7.36a15.37,15.37,0,0,0,1-2.54,35.73,35.73,0,0,0,9.74,2.35c-5.51-12.36-4.11-26.72-6.68-40l.33-.45a20.84,20.84,0,0,0,4.22-11.86c0-4.94-2.31-9.56-3.35-14.4-.89-4.11-.85-8.41-2-12.45a37.65,37.65,0,0,0-3.16-7.22q-1.87-3.47-3.93-6.83-1.92-6.36-3.85-12.72c-1.8-5.95-3.65-12-7.15-17.14-1.28-1.88-1.67-5.7-3.64-6.84a8.81,8.81,0,0,0-5.2-.91c-2.78-1.56-5.22-3.81-5.57-6.89a6.68,6.68,0,0,1,.2-2l.34,0c4.4-.4,6.63-4.28,8.92-7.68,3.7-5.5,2.29-12.94,0-19.2a13,13,0,0,0-3-5.29c-3.21-3-8.29-2.34-12.43-3.79-1.39-.48-2.69-1.21-4.11-1.55-2.75-.64-5.63.26-8.15,1.53s-4.87,2.91-7.51,3.91-5.9,1.79-6.55,4.5a5,5,0,0,0,.22,2.73,10.18,10.18,0,0,0,3.09,4.46,17.81,17.81,0,0,0,10.87,24.82c.76,1.22,1.47,2.46,2.12,3.73,1.16,2.24,2.14,4.88,1.74,7.28a22.45,22.45,0,0,0-2,2.45c-2.87,4-4.5,8.69-6,13.37a141.65,141.65,0,0,0-4.83,18.27c-2.44,5.19-5.42,10.15-7.19,15.6a35.21,35.21,0,0,1-9.38-1.26l-8.44-1.91c-2.94-.67-6-1.39-8.3-3.33-1.22-1-2.17-2.33-3.41-3.32s-3.73-2.15-5.09-1.33a4,4,0,0,0-.69.53c-1.24-2.51-2.42-5-3.86-7.43-2.07-3.4-5.15-6.51-9.05-7.16a9.21,9.21,0,0,0-6.79,1.58c-2.28,1.62-3.71,5-2,7.28a13.29,13.29,0,0,0,1.39,1.42,29.2,29.2,0,0,1,3.09,4.29A21.91,21.91,0,0,0,619,596.23l-.35,1c-.71,2.08-2.22,4.59-1.84,6.75l37.54,12.85a23.13,23.13,0,0,0,7.56,1.67,12.21,12.21,0,0,0,3-.4l0,1.92v.08c.1,13.19-2,26.29-2.39,39.47-.07,2.41,0,5,1.52,6.88,1.7,2.06,4.72,2.47,7.35,2q.95-.16,1.86-.42a69.33,69.33,0,0,1,1.92,10.11L677.65,696a27.14,27.14,0,0,1,.39,5.54c-.29,4.19-2.5,7.94-4.1,11.81s-2.55,8.5-.45,12.12c.66,1.12,1.57,2.07,2.16,3.23a13.14,13.14,0,0,1,1,5.68q.23,8.08.44,16.18a1.83,1.83,0,0,0-1.26.25c-2.08,1.62-1.85,9.33-2,11.72-.16,4,0,8.08-.22,12.12A72.22,72.22,0,0,1,671,790.74a10.29,10.29,0,0,1-2.29,4.61,9.74,9.74,0,0,1-4.07,2.11,46.49,46.49,0,0,1-15.41,2.1c-2.11-.07-4.31-.27-6.27.53s-3.54,3-2.83,5c.61,1.68,2.46,2.48,4.13,3.11a65.53,65.53,0,0,1,11,5.06,29.74,29.74,0,0,0,4.25,2.41,21.91,21.91,0,0,0,4.38,1.08l17.73,3.06c3.63.62,8,1,10.31-2,1.25-1.62,1.43-3.82,1.37-5.88-.1-4-.9-8.07-.38-12.07a37.14,37.14,0,0,1,1.86-6.93q2.65-7.87,5.32-15.73c1.78-5.26,3.58-10.57,4.27-16.09.25-2,.23-4.28-1.3-5.53a3.54,3.54,0,0,0-1.32-.68c-.06-4.82-.69-9.65-.42-14.47.07-1.2.19-2.4.29-3.61a17.61,17.61,0,0,1,2.47,2.92c1.71,2.68,2.34,6.22,4.95,8,2.22,1.52,5.51,1.44,7.07,3.64a10.26,10.26,0,0,1,1.12,2.71,19.32,19.32,0,0,0,4,6.35,32,32,0,0,0,2.47,6.34q2.21,4.67,4.4,9.31a108.59,108.59,0,0,0,5,9.77,27.55,27.55,0,0,1,3.35,6.46c1.41,4.94-.89,10.36-4.53,14s-8.44,5.73-13.17,7.68a3.71,3.71,0,0,0-1.34.8,2.59,2.59,0,0,0-.61,1.74c0,2.31,1.9,4.29,4.08,5a15.26,15.26,0,0,0,6.83.25c12.78-1.55,25.52-4.67,36.82-10.88a13,13,0,0,0,4.39-3.39A5.13,5.13,0,0,0,769.65,802.31Z" transform="translate(-88.65 -57.09)" fill="url(#af83dc26-9572-4816-b7a1-1af4f72ff554)"/><path d="M715.64,578.06q3.2,4.91,6,10.06a37,37,0,0,1,3.17,7.17c1.16,4,1.13,8.27,2,12.35,1,4.8,3.34,9.38,3.34,14.3a20.56,20.56,0,0,1-4.22,11.76,55.82,55.82,0,0,1-8.82,9.1,187.62,187.62,0,0,1-12.48-61.21c-.1-2.9-.12-5.89.94-8.6.65-1.7,3.77-6.36,5.78-4.53.73.67.92,3.69,1.37,4.7A36.13,36.13,0,0,0,715.64,578.06Z" transform="translate(-88.65 -57.09)" fill="#2f2e41"/><path d="M715.64,578.06q3.2,4.91,6,10.06a37,37,0,0,1,3.17,7.17c1.16,4,1.13,8.27,2,12.35,1,4.8,3.34,9.38,3.34,14.3a20.56,20.56,0,0,1-4.22,11.76,55.82,55.82,0,0,1-8.82,9.1,187.62,187.62,0,0,1-12.48-61.21c-.1-2.9-.12-5.89.94-8.6.65-1.7,3.77-6.36,5.78-4.53.73.67.92,3.69,1.37,4.7A36.13,36.13,0,0,0,715.64,578.06Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M452,441.63c-7.91,7.9-8.86,11.38-13.61,12.95S416.55,465,421.92,474.81l14.44,9.54.42.28,2.21,6.64-21.84,38.88s-36-16.46-39.53,7.89-1.29,31-2.24,44,.31,16.76-2.86,16.76-4.42-8.54-4.42-8.54-.2-.39-.55-1.12c-4.71-9.79-36.68-81.66,14.53-131.06,0,0,23.72-1.56,29.43-28.76,3.94-18.8,17.72-17.18,26.88-13.35a30.38,30.38,0,0,1,8.22,4.83,40.48,40.48,0,0,1,5.89,7C455.11,431.92,456.53,437.09,452,441.63Z" transform="translate(-88.65 -57.09)" fill="#d0d2d5"/><path d="M436.78,484.63l2.21,6.64-21.84,38.88s-36-16.46-39.53,7.89-1.29,31-2.24,44,.31,16.76-2.86,16.76-4.42-8.54-4.42-8.54-.2-.39-.55-1.12c-1.59-12.16-9.65-83.29,19.57-79.51,0,0,23.71,11.08,27.5,6.66,3-3.5,16.32-23.63,21.74-31.89Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M452.5,427.74l-14.44,16.41s-16.77,22.44-20.25,21.49a16.23,16.23,0,0,0-3.17-.37,6.16,6.16,0,0,1-4-10.38c5.72-6,16.26-17.39,16.95-19.92s7.4-13.62,10.76-19.05a30.38,30.38,0,0,1,8.22,4.83A40.48,40.48,0,0,1,452.5,427.74Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M861.06,663.83c-2.45,4.9-15,23.28-20.49,31.31L838,698.92s-1,6.64-17.39-1.59S419.13,526.61,419.13,526.61l-2.61-7.84,19-28.45L857.59,653.39S864.23,657.5,861.06,663.83Z" transform="translate(-88.65 -57.09)" fill="#454b69"/><path d="M840.57,695.14,838,698.92s-1,6.64-17.39-1.59S419.13,526.61,419.13,526.61l-2.61-7.84Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M608.29,589c-3.91-.64-8.25-.33-11.29,2.21a9.29,9.29,0,0,0-3.24,6.16c-.26,2.77,1.35,6.06,4.13,6.27a13.17,13.17,0,0,0,2-.13,29.89,29.89,0,0,1,5.24.44,21.39,21.39,0,0,0,18.23-7.36c2.39-3-.76-4.3-3.58-4.9C615.92,590.87,612.15,589.62,608.29,589Z" transform="translate(-88.65 -57.09)" fill="#fbbebe"/><path d="M675.17,679.31l2.48,17.62a26.84,26.84,0,0,1,.38,5.51c-.29,4.15-2.5,7.87-4.09,11.71s-2.56,8.44-.45,12c.65,1.11,1.56,2.06,2.15,3.21a12.92,12.92,0,0,1,1,5.63l.68,25a157.33,157.33,0,0,0,23.18-.13,1.29,1.29,0,0,0,.84-.26,1.36,1.36,0,0,0,.29-.91c.34-5.85-.68-11.71-.35-17.56.12-2.14.42-4.27.46-6.42.12-8.71-4.18-17.24-2.88-25.85a57,57,0,0,1,1.6-6.43c4.11-15,3.24-30.76,2.33-46.25a1.09,1.09,0,0,0-.2-.7,1.06,1.06,0,0,0-.54-.29,28.45,28.45,0,0,0-25.78,4.9c-1.09.88-3.84,1.73-4.56,2.78-1,1.46.31,2.92.89,4.47A56.89,56.89,0,0,1,675.17,679.31Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><path d="M675.17,679.31l2.48,17.62a26.84,26.84,0,0,1,.38,5.51c-.29,4.15-2.5,7.87-4.09,11.71s-2.56,8.44-.45,12c.65,1.11,1.56,2.06,2.15,3.21a12.92,12.92,0,0,1,1,5.63l.68,25a157.33,157.33,0,0,0,23.18-.13,1.29,1.29,0,0,0,.84-.26,1.36,1.36,0,0,0,.29-.91c.34-5.85-.68-11.71-.35-17.56.12-2.14.42-4.27.46-6.42.12-8.71-4.18-17.24-2.88-25.85a57,57,0,0,1,1.6-6.43c4.11-15,3.24-30.76,2.33-46.25a1.09,1.09,0,0,0-.2-.7,1.06,1.06,0,0,0-.54-.29,28.45,28.45,0,0,0-25.78,4.9c-1.09.88-3.84,1.73-4.56,2.78-1,1.46.31,2.92.89,4.47A56.89,56.89,0,0,1,675.17,679.31Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M721.54,674c-1.17,2.43-2.74,4.69-3.44,7.3-1.82,6.89,2.89,14,2.33,21.06-.18,2.23-.87,4.4-.92,6.63s.77,4.71,2.75,5.74c1.33.68,3,.61,4.25,1.39,2.11,1.29,2.35,4.22,2.14,6.68s-.56,5.21,1,7.13c1.19,1.49,3.23,2.07,4.51,3.48a17.17,17.17,0,0,1,1.93,3.26c1.91,3.34,5.4,5.38,8.26,8s5.28,6.46,4,10.09c-.94,2.66-3.58,4.3-6.12,5.55a64.93,64.93,0,0,1-14.57,5.15,3.52,3.52,0,0,1-1.67.09,3.57,3.57,0,0,1-1.46-1c-2.95-2.89-6-5.92-7.36-9.81a10.07,10.07,0,0,0-1.12-2.68c-1.56-2.19-4.85-2.11-7.07-3.62-2.6-1.77-3.23-5.28-4.93-7.93s-4.19-4.23-6-6.56c-3.06-3.88-3.81-9.06-6-13.49-.93-1.88-2.12-3.64-2.86-5.6a30.58,30.58,0,0,1-1.37-7.24c-1.41-11.68-5-23.44-2.74-35,.5-2.54,1.27-5,1.59-7.62.55-4.53-.32-9.17.35-13.69a3.77,3.77,0,0,1,1.51-2.91,4,4,0,0,1,1.72-.35,117.28,117.28,0,0,1,17.78.4c3,.29,6.36.9,8.16,3.35,1.53,2.1,1.45,4.91,1.94,7.46.61,3.14,2.2,4.85,3.87,7.31S722.77,671.46,721.54,674Z" transform="translate(-88.65 -57.09)" fill="#3f3d56"/><path d="M698.47,755.26c1.58,0,3.33-.1,4.55.9,1.52,1.25,1.54,3.54,1.3,5.49-.7,5.48-2.49,10.75-4.28,16l-5.32,15.61a36.65,36.65,0,0,0-1.86,6.88c-.52,4,.28,8,.38,12,0,2-.13,4.22-1.38,5.83-2.26,2.91-6.67,2.57-10.3,2l-17.71-3a21.07,21.07,0,0,1-4.38-1.07,30.61,30.61,0,0,1-4.25-2.39,65.42,65.42,0,0,0-11-5c-1.66-.62-3.52-1.41-4.12-3.08-.71-2,.87-4.2,2.83-5s4.15-.6,6.27-.54a47,47,0,0,0,15.4-2.08,9.74,9.74,0,0,0,4.06-2.1A10,10,0,0,0,671,791a70.17,70.17,0,0,0,2.68-16c.21-4,.07-8,.23-12,.1-2.37-.13-10,1.95-11.63,1.59-1.22,8.13,2.15,10.28,2.64A50,50,0,0,0,698.47,755.26Z" transform="translate(-88.65 -57.09)" fill="#2f2e41"/><path d="M756.81,766.38c1.73,5.73,2,11.79,3.12,17.68s3.1,11.9,7.47,16a9.87,9.87,0,0,1,2.17,2.4,5.06,5.06,0,0,1-.75,5.23,13.13,13.13,0,0,1-4.39,3.37c-11.29,6.16-24,9.27-36.81,10.81a15.51,15.51,0,0,1-6.82-.25c-2.18-.74-4.11-2.7-4.07-5a2.55,2.55,0,0,1,.6-1.73,3.73,3.73,0,0,1,1.35-.79c4.72-1.94,9.51-4.05,13.16-7.63s5.94-9,4.53-13.86A27.42,27.42,0,0,0,733,786.2a108.35,108.35,0,0,1-5-9.69l-4.4-9.23c-1.29-2.7-2.59-5.48-2.81-8.46a40.6,40.6,0,0,0,16.22-2.6,25.51,25.51,0,0,0,6.67-4c1.7-1.42,3.25-4.07,5.54-2.22,1.84,1.48,3,5.65,4.08,7.76A57,57,0,0,1,756.81,766.38Z" transform="translate(-88.65 -57.09)" fill="#2f2e41"/><path d="M692.33,537.19c.44,3.84,4.16,6.37,7.71,7.89l-22.47,7.17c1.45-2.78.28-6.18-1.16-9a50.93,50.93,0,0,0-4-6.41c-.22-.31-.47-.7-.31-1.06a1.12,1.12,0,0,1,.63-.49c4.62-2.06,9.38-4.19,14.43-4.94,1.46-.21,4.22-.79,5.31.69S692.12,535.42,692.33,537.19Z" transform="translate(-88.65 -57.09)" fill="#fbbebe"/><path d="M692.33,537.19c.44,3.84,4.16,6.37,7.71,7.89l-22.47,7.17c1.45-2.78.28-6.18-1.16-9a50.93,50.93,0,0,0-4-6.41c-.22-.31-.47-.7-.31-1.06a1.12,1.12,0,0,1,.63-.49c4.62-2.06,9.38-4.19,14.43-4.94,1.46-.21,4.22-.79,5.31.69S692.12,535.42,692.33,537.19Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><circle cx="590.62" cy="465.59" r="17.62" fill="#fbbebe"/><path d="M664,667.68c1.71,2.05,4.72,2.45,7.35,2,6.15-1,11.18-5.53,17.2-7.16,7.38-2,15.19.57,22.16,3.72s13.9,7,21.52,7.54c-6.89-15.36-2.95-33.84-9.54-49.33-1.61-3.79-3.86-7.44-4.22-11.54-.45-5.09,2.09-10,2.48-15.06.36-4.51-1-9-2.3-13.3q-2.41-7.92-4.82-15.84c-1.8-5.91-3.65-11.92-7.14-17-1.29-1.87-1.68-5.66-3.64-6.79-4.28-2.47-10.77.64-15.41.81s-8.87,3.47-11.58,7.2c-2.87,3.94-4.5,8.63-6,13.27a126.15,126.15,0,0,0-5.33,21.23c-.15,1.08-.28,2.16-.38,3.25-1,10.27.46,20.6.54,30.92v.07c.1,13.09-2,26.1-2.39,39.18C662.46,663.24,662.52,665.85,664,667.68Z" transform="translate(-88.65 -57.09)" fill="#2f2e41"/><path d="M664.92,621.61c3.45-.87,6.57-3.1,9.25-5.54a38.67,38.67,0,0,0,6.14-7A49.86,49.86,0,0,0,685.6,598a129.36,129.36,0,0,0,7-32.27c.26-3,.34-6.22-1.45-8.6a7.24,7.24,0,0,0-8.75-2.12c-2.36,1.15-3.89,3.48-5.31,5.71-2.81,4.42-5.64,8.9-7.45,13.82-.8,2.18-1.39,4.42-2.17,6.61a61,61,0,0,1-2.74,6.33c-.15,1.08-.28,2.16-.38,3.25C663.42,601,664.84,611.29,664.92,621.61Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><path d="M691.1,555.2c1.79,2.38,1.71,5.63,1.46,8.59a129.18,129.18,0,0,1-7,32.27,49.43,49.43,0,0,1-5.29,11.16,39.07,39.07,0,0,1-6.14,7c-3.4,3.1-7.54,5.87-12.15,5.91a23.16,23.16,0,0,1-7.56-1.65L616.87,605.7c-.38-2.14,1.13-4.64,1.84-6.7l2-5.93c.57-1.64,1.23-3.41,2.72-4.3s3.85.33,5.09,1.32,2.18,2.29,3.4,3.3c2.31,1.92,5.36,2.64,8.3,3.3l8.43,1.89a35.2,35.2,0,0,0,9.38,1.25c2.35-7.18,6.82-13.5,9.35-20.62.78-2.18,1.37-4.43,2.18-6.61,1.8-4.92,4.64-9.39,7.45-13.82,1.41-2.22,2.94-4.55,5.31-5.71A7.23,7.23,0,0,1,691.1,555.2Z" transform="translate(-88.65 -57.09)" fill="#2f2e41"/><path d="M684.89,526.66a8.89,8.89,0,0,0-1.06-3.3,2.77,2.77,0,0,0-3-1.32c-1.76.55-2.35,3.27-4.19,3.36-1.24.06-2.13-1.2-2.52-2.38s-.6-2.53-1.53-3.36a5.7,5.7,0,0,0-2.18-1c-4.27-1.35-8.68-3.84-10.1-8.09a4.84,4.84,0,0,1-.23-2.71c.65-2.69,4-3.5,6.55-4.47s5-2.63,7.5-3.89,5.4-2.15,8.15-1.51a42.47,42.47,0,0,1,4.11,1.53c4.14,1.44,9.21.77,12.42,3.76a12.83,12.83,0,0,1,3,5.24c2.24,6.22,3.66,13.6-.05,19.06-2.29,3.37-4.51,7.22-8.91,7.63C687.73,535.64,685.7,531,684.89,526.66Z" transform="translate(-88.65 -57.09)" fill="#2f2e41"/><g opacity="0.1"><path d="M677.07,520.9c-.39-1.18-.6-2.53-1.52-3.36a5.7,5.7,0,0,0-2.18-1c-4.28-1.35-8.68-3.84-10.11-8.09a4.93,4.93,0,0,1-.22-2.71,3.39,3.39,0,0,1,.53-1.19c-1.63.71-3.05,1.65-3.45,3.31a4.84,4.84,0,0,0,.23,2.71c1.42,4.25,5.83,6.74,10.1,8.09a5.7,5.7,0,0,1,2.18,1c.93.83,1.13,2.17,1.53,3.36s1.28,2.44,2.52,2.38,1.84-1.19,2.63-2.14C678.22,523.12,677.43,522,677.07,520.9Z" transform="translate(-88.65 -57.09)"/><path d="M695.79,533.06c-5.14.47-7.17-4.21-8-8.52a8.7,8.7,0,0,0-1-3.3,2.78,2.78,0,0,0-3-1.32,5.32,5.32,0,0,0-2.21,2,3,3,0,0,1,2.26,1.4,8.89,8.89,0,0,1,1.06,3.3c.81,4.31,2.84,9,8,8.52a8.25,8.25,0,0,0,5.28-2.74A7.46,7.46,0,0,1,695.79,533.06Z" transform="translate(-88.65 -57.09)"/></g><ellipse cx="813.11" cy="655.78" rx="32.29" ry="6.21" fill="#5f4494"/><ellipse cx="812.57" cy="653.14" rx="3.76" ry="4.92" fill="#3f3d56"/><ellipse cx="812.57" cy="647.12" rx="3.76" ry="4.92" fill="#3f3d56"/><ellipse cx="812.57" cy="641.11" rx="3.76" ry="4.92" fill="#3f3d56"/><ellipse cx="812.57" cy="635.09" rx="3.76" ry="4.92" fill="#3f3d56"/><ellipse cx="812.57" cy="629.07" rx="3.76" ry="4.92" fill="#3f3d56"/><ellipse cx="812.57" cy="623.06" rx="3.76" ry="4.92" fill="#3f3d56"/><ellipse cx="812.57" cy="617.04" rx="3.76" ry="4.92" fill="#3f3d56"/><path d="M915.29,633a18.19,18.19,0,0,0,1.4-2.06l-9.88-1.62,10.69.07a18.11,18.11,0,0,0,.34-14.27l-14.34,7.44,13.22-9.72A18,18,0,1,0,887,633a17.92,17.92,0,0,0-2.06,3.28l12.83,6.67-13.68-4.59A18,18,0,0,0,887,655.24a18,18,0,1,0,28.31,0,18,18,0,0,0,0-22.27Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M883.12,644.1A17.91,17.91,0,0,0,887,655.24a18,18,0,1,0,28.31,0C917.7,652.17,883.12,642.08,883.12,644.1Z" transform="translate(-88.65 -57.09)" opacity="0.1"/><ellipse cx="148.42" cy="776.87" rx="46.49" ry="8.94" fill="#5f4494"/><ellipse cx="147.64" cy="773.07" rx="5.41" ry="7.09" fill="#3f3d56"/><ellipse cx="147.64" cy="764.41" rx="5.41" ry="7.09" fill="#3f3d56"/><ellipse cx="147.64" cy="755.75" rx="5.41" ry="7.09" fill="#3f3d56"/><ellipse cx="147.64" cy="747.09" rx="5.41" ry="7.09" fill="#3f3d56"/><ellipse cx="147.64" cy="738.43" rx="5.41" ry="7.09" fill="#3f3d56"/><ellipse cx="147.64" cy="729.76" rx="5.41" ry="7.09" fill="#3f3d56"/><ellipse cx="147.64" cy="721.1" rx="5.41" ry="7.09" fill="#3f3d56"/><path d="M256.55,718.93a27.23,27.23,0,0,0,2-3l-14.22-2.34,15.38.12a26,26,0,0,0,.49-20.55L239.58,703.9l19-14a25.93,25.93,0,1,0-42.83,29,25.83,25.83,0,0,0-3,4.72l18.47,9.6-19.69-6.61A25.93,25.93,0,0,0,215.79,751a25.93,25.93,0,1,0,40.76,0,25.92,25.92,0,0,0,0-32.06Z" transform="translate(-88.65 -57.09)" fill="#5f4494"/><path d="M210.24,735a25.85,25.85,0,0,0,5.55,16,25.93,25.93,0,1,0,40.76,0C260,746.58,210.24,732.05,210.24,735Z" transform="translate(-88.65 -57.09)" opacity="0.1"/></svg>'
                                }
                            })
                        )
                    )
                );
            }),
            C = x()({
                root: { width: "100%", height: "auto", position: "relative", display: "block" },
                content: {
                    display: "flex",
                    width: "80%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "2vh 10% 10vh 10%"
                },
                image_one: { flexBasis: "50%", "& svg": { width: "60%", height: "auto" } },
                intro_text: {
                    flexBasis: "50%",
                    color: "#fff",
                    "& h3": {
                        fontSize: "4rem",
                        margin: 0,
                        color: "#FAFAFA",
                        textTransform: "uppercase"
                    },
                    "& p": { opacity: ".5", marginTop: 0 }
                }
            })(function(a) {
                var t = a.classes;
                a.children;
                return n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                        "div",
                        { className: t.root },
                        n.a.createElement(
                            "div",
                            { className: t.content },
                            n.a.createElement("div", {
                                className: t.image_one,
                                dangerouslySetInnerHTML: {
                                    __html:
                                        '<svg id="fbbf0112-9f0c-4059-91ae-024eb0aa32cc" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1046" height="729.87" viewBox="0 0 1046 729.87"><title>directions</title><path d="M494.15,178.37A246.62,246.62,0,0,0,197.81,145C292.79,179,397.59,180.25,494.15,178.37Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M1044.64,730.55,940.92,550.9a3.3,3.3,0,0,0-5.73,0L831.47,730.55a3.3,3.3,0,0,0,2.86,5h30.94a3.32,3.32,0,0,1,3.31,3.31V777.2a3.31,3.31,0,0,0,3.3,3.31h40.37a3.31,3.31,0,0,0,3.31-3.31V758.67a3.3,3.3,0,0,1,3.3-3.3h38.38a3.31,3.31,0,0,1,3.31,3.3V777.2a3.31,3.31,0,0,0,3.31,3.31h40.36a3.31,3.31,0,0,0,3.31-3.31V738.82a3.31,3.31,0,0,1,3.31-3.31h30.94A3.31,3.31,0,0,0,1044.64,730.55ZM900,750.43a3.3,3.3,0,0,1-2.34,1H883.13a3.31,3.31,0,0,1,0-6.62h14.56a3.31,3.31,0,0,1,2.34,5.65Zm95.28,0a3.3,3.3,0,0,1-2.34,1H978.42a3.31,3.31,0,0,1,0-6.62H993a3.31,3.31,0,0,1,2.34,5.65Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M403.55,732.13,299.83,552.48a3.31,3.31,0,0,0-5.73,0L204.51,707.65A273.67,273.67,0,0,0,242,746.36H256.6a3.31,3.31,0,0,1,0,6.62h-6.16a160.29,160.29,0,0,0,24,14.93v-7.65a3.31,3.31,0,0,1,3.31-3.31h38.38a3.31,3.31,0,0,1,3.3,3.31v18.52a3.22,3.22,0,0,0,.31,1.39,3.31,3.31,0,0,0,3,1.92h40.37a3.24,3.24,0,0,0,2.63-1.33,3.18,3.18,0,0,0,.67-2V740.41a3.31,3.31,0,0,1,3.31-3.31h30.94A3.31,3.31,0,0,0,403.55,732.13ZM335,747.33a3.3,3.3,0,0,1,2.34-1h14.56a3.31,3.31,0,0,1,0,6.62H337.33a3.31,3.31,0,0,1-2.34-5.65Zm-65.15-66.48a3.31,3.31,0,0,1-3.31-3.31V652.4a3.31,3.31,0,0,1,3.31-3.31H324.1a3.31,3.31,0,0,1,3.3,3.31v25.14a3.31,3.31,0,0,1-3.3,3.31Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M813.53,409.41H685.18V381.65a6.64,6.64,0,0,0-6.64-6.64H640.85V345.44a4.18,4.18,0,0,0-4.18-4.18H588.12a4.18,4.18,0,0,0-4.18,4.18V375H539.63a6.64,6.64,0,0,0-6.64,6.64v27.76H410.6a1.35,1.35,0,0,0-1.34,1.35V779.28a1.35,1.35,0,0,0,1.34,1.35h81.34a1.35,1.35,0,0,0,1.35-1.35V729.7a1.36,1.36,0,0,1,1.35-1.35H529a1.36,1.36,0,0,1,1.35,1.35v49.58a1.35,1.35,0,0,0,1.34,1.35H692.44a1.36,1.36,0,0,0,1.35-1.35V729.7a1.35,1.35,0,0,1,1.34-1.35h34.36a1.35,1.35,0,0,1,1.35,1.35v49.58a1.36,1.36,0,0,0,1.35,1.35h81.34a1.36,1.36,0,0,0,1.35-1.35V410.76A1.36,1.36,0,0,0,813.53,409.41ZM478.73,711.13a1.34,1.34,0,0,1-1.34,1.34H427.15a1.34,1.34,0,0,1-1.35-1.34V694a1.35,1.35,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.34,1.35Zm0-44.34a1.34,1.34,0,0,1-1.34,1.35H427.15a1.34,1.34,0,0,1-1.35-1.35V649.64a1.34,1.34,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.34,1.35Zm0-44.33a1.35,1.35,0,0,1-1.34,1.35H427.15a1.35,1.35,0,0,1-1.35-1.35V605.3a1.35,1.35,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.34,1.35Zm0-44.34a1.34,1.34,0,0,1-1.34,1.35H427.15a1.34,1.34,0,0,1-1.35-1.35V561a1.34,1.34,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.34,1.35Zm0-44.33a1.35,1.35,0,0,1-1.34,1.35H427.15a1.35,1.35,0,0,1-1.35-1.35V516.63a1.34,1.34,0,0,1,1.35-1.34h50.24a1.34,1.34,0,0,1,1.34,1.34Zm0-44.33a1.34,1.34,0,0,1-1.34,1.34H427.15a1.34,1.34,0,0,1-1.35-1.34V472.3a1.35,1.35,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.34,1.35Zm0-44.34a1.34,1.34,0,0,1-1.34,1.35H427.15a1.34,1.34,0,0,1-1.35-1.35V428a1.34,1.34,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.34,1.35Zm119.11,266a1.34,1.34,0,0,1-1.35,1.34H546.25a1.35,1.35,0,0,1-1.35-1.34V694a1.36,1.36,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.35,1.35Zm0-44.34a1.34,1.34,0,0,1-1.35,1.35H546.25a1.35,1.35,0,0,1-1.35-1.35V649.64a1.35,1.35,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.35,1.35Zm0-44.33a1.35,1.35,0,0,1-1.35,1.35H546.25a1.36,1.36,0,0,1-1.35-1.35V605.3a1.36,1.36,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.35,1.35Zm0-44.34a1.34,1.34,0,0,1-1.35,1.35H546.25a1.35,1.35,0,0,1-1.35-1.35V561a1.35,1.35,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.35,1.35Zm0-44.33a1.35,1.35,0,0,1-1.35,1.35H546.25a1.36,1.36,0,0,1-1.35-1.35V516.63a1.35,1.35,0,0,1,1.35-1.34h50.24a1.34,1.34,0,0,1,1.35,1.34Zm0-44.33a1.34,1.34,0,0,1-1.35,1.34H546.25a1.35,1.35,0,0,1-1.35-1.34V472.3a1.36,1.36,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.35,1.35Zm0-44.34a1.34,1.34,0,0,1-1.35,1.35H546.25a1.35,1.35,0,0,1-1.35-1.35V428a1.35,1.35,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.35,1.35Zm81.39,266a1.34,1.34,0,0,1-1.35,1.34H627.64a1.35,1.35,0,0,1-1.35-1.34V694a1.36,1.36,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.35,1.35Zm0-44.34a1.34,1.34,0,0,1-1.35,1.35H627.64a1.35,1.35,0,0,1-1.35-1.35V649.64a1.35,1.35,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.35,1.35Zm0-44.33a1.35,1.35,0,0,1-1.35,1.35H627.64a1.36,1.36,0,0,1-1.35-1.35V605.3a1.36,1.36,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.35,1.35Zm0-44.34a1.34,1.34,0,0,1-1.35,1.35H627.64a1.35,1.35,0,0,1-1.35-1.35V561a1.35,1.35,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.35,1.35Zm0-44.33a1.35,1.35,0,0,1-1.35,1.35H627.64a1.36,1.36,0,0,1-1.35-1.35V516.63a1.35,1.35,0,0,1,1.35-1.34h50.24a1.34,1.34,0,0,1,1.35,1.34Zm0-44.33a1.34,1.34,0,0,1-1.35,1.34H627.64a1.35,1.35,0,0,1-1.35-1.34V472.3a1.36,1.36,0,0,1,1.35-1.35h50.24a1.35,1.35,0,0,1,1.35,1.35Zm0-44.34a1.34,1.34,0,0,1-1.35,1.35H627.64a1.35,1.35,0,0,1-1.35-1.35V428a1.35,1.35,0,0,1,1.35-1.35h50.24a1.34,1.34,0,0,1,1.35,1.35Zm119.11,266a1.35,1.35,0,0,1-1.35,1.34H746.75a1.34,1.34,0,0,1-1.35-1.34V694a1.35,1.35,0,0,1,1.35-1.35H797a1.36,1.36,0,0,1,1.35,1.35Zm0-44.34a1.35,1.35,0,0,1-1.35,1.35H746.75a1.34,1.34,0,0,1-1.35-1.35V649.64a1.34,1.34,0,0,1,1.35-1.35H797a1.35,1.35,0,0,1,1.35,1.35Zm0-44.33a1.36,1.36,0,0,1-1.35,1.35H746.75a1.35,1.35,0,0,1-1.35-1.35V605.3a1.35,1.35,0,0,1,1.35-1.35H797a1.36,1.36,0,0,1,1.35,1.35Zm0-44.34a1.35,1.35,0,0,1-1.35,1.35H746.75a1.34,1.34,0,0,1-1.35-1.35V561a1.34,1.34,0,0,1,1.35-1.35H797a1.35,1.35,0,0,1,1.35,1.35Zm0-44.33a1.36,1.36,0,0,1-1.35,1.35H746.75a1.35,1.35,0,0,1-1.35-1.35V516.63a1.34,1.34,0,0,1,1.35-1.34H797a1.35,1.35,0,0,1,1.35,1.34Zm0-44.33A1.35,1.35,0,0,1,797,490.8H746.75a1.34,1.34,0,0,1-1.35-1.34V472.3a1.35,1.35,0,0,1,1.35-1.35H797a1.36,1.36,0,0,1,1.35,1.35Zm0-44.34a1.35,1.35,0,0,1-1.35,1.35H746.75a1.34,1.34,0,0,1-1.35-1.35V428a1.34,1.34,0,0,1,1.35-1.35H797a1.35,1.35,0,0,1,1.35,1.35Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M448,309.53a28.89,28.89,0,0,0-16.77,1.82A24.71,24.71,0,0,1,411,311.3a28.22,28.22,0,0,0-23.68.47,14.75,14.75,0,0,1-6.82,1.7c-9.6,0-17.59-9.67-19.25-22.43a18.41,18.41,0,0,0,4.8-5.17c5.63-9.07,14.35-14.9,24.14-14.9s18.4,5.76,24,14.73a18.51,18.51,0,0,0,15.95,8.76h.25C438.11,294.46,444.73,300.59,448,309.53Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M477.2,269.48l-15.52,9.84,9.42-17.13a15.34,15.34,0,0,0-9.39-3.35h-.25a18.16,18.16,0,0,1-3.22-.24L453,261.94l2.26-4.1a18.7,18.7,0,0,1-9.2-7l-9.42,6L442.57,246c-5.51-6.61-12.93-10.66-21.09-10.66-9.79,0-18.51,5.82-24.14,14.89a18.05,18.05,0,0,1-16,8.61h-.53c-10.81,0-19.57,12.25-19.57,27.37s8.76,27.37,19.57,27.37a14.61,14.61,0,0,0,6.82-1.71,28.22,28.22,0,0,1,23.68-.46,24.71,24.71,0,0,0,20.14,0,28.21,28.21,0,0,1,23.48.45,14.65,14.65,0,0,0,6.74,1.67c10.81,0,19.57-12.26,19.57-27.37A34.76,34.76,0,0,0,477.2,269.48Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M909,492a20.31,20.31,0,0,0-11.74,1.27,17.27,17.27,0,0,1-14.1,0,19.76,19.76,0,0,0-16.58.33,10.28,10.28,0,0,1-4.77,1.19c-6.72,0-12.31-6.77-13.47-15.7a13.07,13.07,0,0,0,3.36-3.62c3.94-6.35,10-10.43,16.89-10.43s12.89,4,16.83,10.31a12.94,12.94,0,0,0,11.16,6.13h.18C902.06,481.46,906.69,485.75,909,492Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M929.42,464l-10.86,6.89,6.59-12a10.74,10.74,0,0,0-6.57-2.34h-.17a12.89,12.89,0,0,1-2.25-.17l-3.69,2.33,1.58-2.86a13.19,13.19,0,0,1-6.44-4.89L901,455.12l4.16-7.57c-3.85-4.63-9-7.47-14.76-7.47-6.85,0-13,4.08-16.9,10.43a12.62,12.62,0,0,1-11.17,6H862c-7.56,0-13.7,8.57-13.7,19.15s6.14,19.16,13.7,19.16a10.28,10.28,0,0,0,4.77-1.19,19.72,19.72,0,0,1,16.58-.32,17.37,17.37,0,0,0,14.1,0,19.75,19.75,0,0,1,16.43.32,10.35,10.35,0,0,0,4.72,1.16c7.57,0,13.7-8.57,13.7-19.16A24.35,24.35,0,0,0,929.42,464Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M315.62,428a20.32,20.32,0,0,1,11.74,1.27,17.24,17.24,0,0,0,14.09,0,19.76,19.76,0,0,1,16.58.33,10.31,10.31,0,0,0,4.77,1.19c6.72,0,12.32-6.77,13.48-15.7a12.93,12.93,0,0,1-3.36-3.62C369,405.1,362.87,401,356,401s-12.88,4-16.82,10.31A13,13,0,0,1,328,417.46h-.17C322.51,417.46,317.87,421.75,315.62,428Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M295.14,400,306,406.86l-6.6-12a10.76,10.76,0,0,1,6.57-2.34h.18a13,13,0,0,0,2.25-.17l3.68,2.33-1.58-2.86a13.21,13.21,0,0,0,6.45-4.89l6.59,4.18-4.17-7.57c3.86-4.63,9.05-7.47,14.77-7.47,6.85,0,13,4.08,16.9,10.43a12.61,12.61,0,0,0,11.17,6h.36c7.57,0,13.7,8.57,13.7,19.15s-6.13,19.16-13.7,19.16a10.34,10.34,0,0,1-4.77-1.19,19.72,19.72,0,0,0-16.58-.32,17.35,17.35,0,0,1-14.09,0,19.77,19.77,0,0,0-16.44.32,10.32,10.32,0,0,1-4.72,1.16c-7.56,0-13.7-8.57-13.7-19.16A24.35,24.35,0,0,1,295.14,400Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M295.68,785.13c13.54,8.6,33.05-.1,46.68,8.37,3.52,2.18,6.36,5.39,10,7.37,4.37,2.39,9.51,2.82,14.48,3,41.62,1.61,83.94-10,124.52-.62,11.35,2.62,22.45,6.88,34.08,7.5,20.09,1.09,39.34-8.71,59.45-9.25,30.5-.82,60.47,19.59,89.9,11.54,9.68-2.65,18.56-8.3,28.55-9.25,11.13-1,21.83,3.85,32.65,6.68,38.37,10,78.33-6.2,118-7.41,25.87-.79,51.49,4.85,77.34,6.15,18.38.92,36.8-.37,55.16-1.65,7-.49,14.33-1.09,20.19-4.93s9.46-12.09,5.84-18.09Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><path d="M295.68,785.13c13.54,8.6,33.05-.1,46.68,8.37,3.52,2.18,6.36,5.39,10,7.37,4.37,2.39,9.51,2.82,14.48,3,41.62,1.61,83.94-10,124.52-.62,11.35,2.62,22.45,6.88,34.08,7.5,20.09,1.09,39.34-8.71,59.45-9.25,30.5-.82,60.47,19.59,89.9,11.54,9.68-2.65,18.56-8.3,28.55-9.25,11.13-1,21.83,3.85,32.65,6.68,38.37,10,78.33-6.2,118-7.41,25.87-.79,51.49,4.85,77.34,6.15,18.38.92,36.8-.37,55.16-1.65,7-.49,14.33-1.09,20.19-4.93s9.46-12.09,5.84-18.09Z" transform="translate(-77 -85.07)" opacity="0.1"/><path d="M295.68,780.13c13.54,8.6,33.05-.1,46.68,8.37,3.52,2.18,6.36,5.39,10,7.37,4.37,2.39,9.51,2.82,14.48,3,41.62,1.61,83.94-10,124.52-.62,11.35,2.62,22.45,6.88,34.08,7.5,20.09,1.09,39.34-8.71,59.45-9.25,30.5-.82,60.47,19.59,89.9,11.54,9.68-2.65,18.56-8.3,28.55-9.25,11.13-1,21.83,3.85,32.65,6.68,38.37,10,78.33-6.2,118-7.41,25.87-.79,51.49,4.85,77.34,6.15,18.38.92,36.8-.37,55.16-1.65,7-.49,14.33-1.09,20.19-4.93s9.46-12.09,5.84-18.09Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><g opacity="0.1"><path d="M199.35,656.93a24.45,24.45,0,0,1-3.23,12.38,25.34,25.34,0,0,1,0,24.76,22.75,22.75,0,0,1,2.44,6,454.1,454.1,0,0,1-30.09-45h0a24,24,0,0,1,3.16-10.56,24.45,24.45,0,0,1-3.23-12.38,25.46,25.46,0,0,1,1.46-8.61,21.39,21.39,0,0,1,1.77-3.77c2.82-4.79,7.26-7.88,12.24-7.88s9.43,3.09,12.25,7.88a22.28,22.28,0,0,1,1.73,3.65,25.63,25.63,0,0,1,1.5,8.73,24.45,24.45,0,0,1-3.23,12.38A24.45,24.45,0,0,1,199.35,656.93Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><ellipse cx="106.87" cy="522.35" rx="15.47" ry="20.26" fill="#3f3d56"/><ellipse cx="106.87" cy="497.59" rx="15.47" ry="20.26" fill="#3f3d56"/><path d="M257.67,459a73.78,73.78,0,0,1-15.87,45.83,74.13,74.13,0,0,1-44,118.57c-1.78.36-3.59.64-5.42.86a74.89,74.89,0,0,1-17,.09q-2.82-.3-5.57-.83a73.3,73.3,0,0,1-23-8.41A738.54,738.54,0,0,1,112,531.32a73.79,73.79,0,0,1,13.29-26.45,74.19,74.19,0,0,1-12-69.61l56.28,18.89-52.78-27.42a74.43,74.43,0,0,1,8.45-13.52,74.13,74.13,0,1,1,122.43-82.95l-54.41,40,59-30.6a74.22,74.22,0,0,1-1.42,58.73l-44-.33,40.66,6.68a74.43,74.43,0,0,1-5.77,8.48A73.8,73.8,0,0,1,257.67,459Z" transform="translate(-77 -85.07)" fill="#5f4494"/><path d="M257.67,550.7a74.15,74.15,0,0,1-59.82,72.74c-1.78.36-3.59.64-5.42.86a74.89,74.89,0,0,1-17,.09q-2.82-.3-5.57-.83a73.3,73.3,0,0,1-23-8.41A738.54,738.54,0,0,1,112,531.32a73.79,73.79,0,0,1,13.29-26.45A73.83,73.83,0,0,1,109.42,459c0-8.32,142.32,33.22,132.38,45.83A73.78,73.78,0,0,1,257.67,550.7Z" transform="translate(-77 -85.07)" opacity="0.1"/></g><g opacity="0.1"><path d="M1091.9,637.65c-2.9,9.26-6,18.45-9.18,27.43a25.64,25.64,0,0,1-1.32-8.21C1081.4,647.94,1085.8,640.36,1091.9,637.65Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><path d="M1123,478.09c0,17.55-3.54,45.28-10,77a845.74,845.74,0,0,1-21.15,82.56c-2.9,9.26-6,18.45-9.18,27.43-3.65,10.2-7.5,20.12-11.53,29.61a74.41,74.41,0,0,1-32.91-115.77,74.48,74.48,0,0,1-12-69.76l56.28,18.93-52.78-27.48a74.67,74.67,0,0,1,8.45-13.55,74.4,74.4,0,0,1,29.12-114.25,127.55,127.55,0,0,1,48.75,63.93L1106.3,444l10.46-5.43a126.93,126.93,0,0,1,6.09,33.31l-2.94,0,3,.49C1123,474.26,1123,476.16,1123,478.09Z" transform="translate(-77 -85.07)" fill="#5f4494"/><path d="M1113.05,555.09a845.74,845.74,0,0,1-21.15,82.56c-2.9,9.26-6,18.45-9.18,27.43-3.65,10.2-7.5,20.12-11.53,29.61a74.41,74.41,0,0,1-32.91-115.77A74.1,74.1,0,0,1,1022.42,533C1022.42,528,1074.14,541.1,1113.05,555.09Z" transform="translate(-77 -85.07)" opacity="0.1"/></g><path d="M1122.87,472.35c0-.15,0-.31,0-.47a126.93,126.93,0,0,0-6.09-33.31c-.2-.61-.4-1.23-.61-1.83a127.55,127.55,0,0,0-48.75-63.93,126.8,126.8,0,0,0-166.16,20.54,179.4,179.4,0,0,0-10.11-35.47,569.6,569.6,0,0,1-100.63,3.75,406,406,0,0,0,63.8,23.17l-.78,2.9A409.71,409.71,0,0,1,782.22,361l-6.91-3.35,7.66.5a569.79,569.79,0,0,0,107-3.07A180.42,180.42,0,0,0,858.45,305c-57.56-5.8-114.67-17.88-168-41.83l1.23-2.73c51.91,23.33,107.54,35.32,163.7,41.22a179.76,179.76,0,0,0-285.73,30.37,246.89,246.89,0,0,0-61.24-138.9,576.62,576.62,0,0,1-94.77,28.71A573.15,573.15,0,0,1,265.5,233.63a406,406,0,0,0,63.8,23.17l-.78,2.9A409.71,409.71,0,0,1,257.22,233l-6.91-3.35,7.66.5a569.21,569.21,0,0,0,248.36-39.35q-4.45-4.87-9.16-9.52c-98.42,2-205.61,1-302.65-34.33A247.53,247.53,0,0,0,77,357.82c0,46.46,12.77,110.35,35,174.45a741.24,741.24,0,0,0,34.91,84c6.79,13.8,14,27.21,21.57,40.05h0a454.59,454.59,0,0,0,30.09,45q2.94,3.87,5.95,7.6A274.51,274.51,0,0,0,242,747.79h0q4.17,3.48,8.39,6.63a159.8,159.8,0,0,0,24,15c14.67,7.35,29.81,11.66,45.3,12.28,1.24.05,2.49.08,3.73.08v.51h672v-.51h.5a34,34,0,0,0,11.36-2c23.76-8.43,45.64-42.28,63.83-85.06,4-9.49,7.88-19.41,11.53-29.61,3.22-9,6.28-18.17,9.18-27.43a845.74,845.74,0,0,0,21.15-82.56c6.41-31.72,10-59.45,10-77C1123,476.16,1123,474.26,1122.87,472.35Z" transform="translate(-77 -85.07)" fill="#5f4494" opacity="0.1"/><path d="M411.06,752.86,430.2,741.6a46.13,46.13,0,0,0-9.79-11.71L384.3,741.12l28.3-16.63a46,46,0,0,0-68.1,40.35c0,25.4,20.59,26.28,46,26.28s46-.88,46-26.28a45.79,45.79,0,0,0-3.95-18.67Z" transform="translate(-77 -85.07)" fill="#5f4494"/><path d="M415.93,777.55a35.76,35.76,0,0,0-6.78-5.32c-3.48-2.31-7.07-4.67-11.17-5.45-3.6-.69-7.31-.11-11-.32a25.66,25.66,0,0,1-16.81-7.7c-2.61-2.7-4.67-6-7.81-8.09-3.39-2.22-7.69-2.7-11.71-2.15a29.07,29.07,0,0,0-3.46.71,45.85,45.85,0,0,0-2.72,15.61c0,25.4,20.59,26.28,46,26.28,12.33,0,23.52-.21,31.78-3.32l-1.38-2.58A36.4,36.4,0,0,0,415.93,777.55Z" transform="translate(-77 -85.07)" opacity="0.1"/><circle cx="547.34" cy="185.77" r="35.75" fill="#3f3d56"/><path d="M603.6,548.94c3.69,25.89-.81,52.29-7.82,77.48-1.31,4.69-2.72,9.42-5.17,13.63s-5.86,7.83-8.74,11.79c-6,8.26-9.52,18-12.81,27.64a779.65,779.65,0,0,0-22.82,81.32,5.57,5.57,0,0,0,0,3.47c.87,2,3.51,2.26,5.68,2.25l28.06-.15c1-1.92-.85-4-2-5.84-4-6.22-.16-14.3,3.37-20.81a223.74,223.74,0,0,0,19.78-50c1.92-7.33,3.48-14.82,6.6-21.73,3.77-8.38,9.68-15.59,14.48-23.43,5.58-9.11,9.65-19,13.69-28.93,5.64-13.78,11.33-27.73,13.55-42.45,2.09-13.82,1.06-27.9-.3-41.81a2.64,2.64,0,0,0-3.06-3l-37.65-1.94c-7.76-.4-9.6-2.1-8.42,5.52C600.84,537.64,602.78,543.18,603.6,548.94Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><path d="M603.6,548.94c3.69,25.89-.81,52.29-7.82,77.48-1.31,4.69-2.72,9.42-5.17,13.63s-5.86,7.83-8.74,11.79c-6,8.26-9.52,18-12.81,27.64a779.65,779.65,0,0,0-22.82,81.32,5.57,5.57,0,0,0,0,3.47c.87,2,3.51,2.26,5.68,2.25l28.06-.15c1-1.92-.85-4-2-5.84-4-6.22-.16-14.3,3.37-20.81a223.74,223.74,0,0,0,19.78-50c1.92-7.33,3.48-14.82,6.6-21.73,3.77-8.38,9.68-15.59,14.48-23.43,5.58-9.11,9.65-19,13.69-28.93,5.64-13.78,11.33-27.73,13.55-42.45,2.09-13.82,1.06-27.9-.3-41.81a2.64,2.64,0,0,0-3.06-3l-37.65-1.94c-7.76-.4-9.6-2.1-8.42,5.52C600.84,537.64,602.78,543.18,603.6,548.94Z" transform="translate(-77 -85.07)" opacity="0.1"/><path d="M611,486c-7.65,11-15.67,23.66-13.13,36.83,1.93,10,9.55,17.75,16.74,25,28.74,28.86,57,60.92,66.78,100.47,2.52,10.22,3.74,20.71,5.91,31,3.94,18.7,11,36.58,18,54.35L724.06,781a28.36,28.36,0,0,0,27.1-18c-2.46-.19-5.67-2.57-7.11-4.57-8-11.07-9.64-25.31-11.69-38.81-2.27-14.92-5.3-29.72-8.34-44.51l-13.44-65.44c-1.55-7.55-3.1-15.11-5.12-22.55-7.82-28.82-22.64-56-24.93-85.8-.34-4.38-.55-9.19-3.52-12.44-3.12-3.43-8.24-4-12.87-4.27C645.41,483.41,629.25,481.58,611,486Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><path d="M560.47,760.13a29.86,29.86,0,0,0-6.22-.8,12.92,12.92,0,0,0-10.16,5.55,25.25,25.25,0,0,0-2.73,6l-2.71,7.78c-.8,2.28-1.58,4.91-.39,7a7.42,7.42,0,0,0,3.64,2.81c6.56,2.92,14,3.08,21.1,3.78,6.94.68,13.82,1.9,20.67,3.18,2.36.45,4.71.9,7.1,1.14,5.34.54,10.72,0,16.06-.48l5.51-.53a19.84,19.84,0,0,0,5.42-1,6.83,6.83,0,0,0,4-3.59c1.36-3.37-1.56-7.36-5.13-8.06-1.45-.28-3-.15-4.42-.34a20.88,20.88,0,0,1-4.84-1.45c-7-2.77-14.17-5.57-20.37-9.93-1.72-1.21-3.52-2.9-3.33-5a10.19,10.19,0,0,1,.89-2.59,9.46,9.46,0,0,0,.08-6.69c-.34-.92-1-1.89-1.93-2-2.64-.32-2.32,3.53-2.71,5-.53,2-1.49,2.18-3.37,2C571.23,761.42,565.83,761.15,560.47,760.13Z" transform="translate(-77 -85.07)" fill="#f2f2f2"/><path d="M718.34,787a17.65,17.65,0,0,0,3.82,10.75,8.36,8.36,0,0,0,2.72,2.19,10.92,10.92,0,0,0,5,.79,40.05,40.05,0,0,0,13.89-2.81,39.7,39.7,0,0,1,4.8-1.81,53.88,53.88,0,0,1,6.24-.9c8.27-1.19,15.53-6.07,23.52-8.54a49.45,49.45,0,0,0,7-2.3c3.16-1.49,5.72-4,8.23-6.43a19.73,19.73,0,0,0,3.78-4.53c1.47-2.73,1.56-6,1.62-9.09a2.59,2.59,0,0,0-.24-1.41,2.1,2.1,0,0,0-.9-.71c-2.43-1.2-5.31-.6-8-.13-9.72,1.73-19.67,1.41-29.54,1.09a4.29,4.29,0,0,1-4.54-2.59l-3.75-6c-1.07-1.72-2.77-3.69-4.71-3.1-1.55.47-2.18,2.37-2.12,4s.56,3.25.25,4.84a6.61,6.61,0,0,1-3.2,4.16,20.44,20.44,0,0,1-5,1.92c-5.52,1.56-11.94,3.33-16.21,7.39C717.86,776.66,718.15,783.11,718.34,787Z" transform="translate(-77 -85.07)" fill="#f2f2f2"/><path d="M716.4,390.26a23.17,23.17,0,0,0,5.46-5.94,24.21,24.21,0,0,0,2.33-8.21l1.57-9.92c.87-5.47,1.89-11.26,5.54-15.43s10.92-5.66,14.63-1.54c1.62,1.79,2.26,4.25,2.66,6.64a48.34,48.34,0,0,1-11.82,40c-4.49,4.92-10,8.83-14.75,13.48-4.14,4-7.73,8.59-11.55,12.94A159.42,159.42,0,0,1,679,449.78c.14-7.44,1.09-15.42,0-22.81-.81-5.34-3-8.22,2.17-11.71C693.17,407.1,705.28,399.72,716.4,390.26Z" transform="translate(-77 -85.07)" fill="#fbbebe"/><path d="M615.56,317.08c-.39,5.32-2.6,10.76-7,13.83q18.69,6.54,36.87,14.42c-2.34-2.25-3.05-5.7-3.16-8.94-.31-8.47,2.62-16.8,6.9-24.1a5.85,5.85,0,0,0,1.13-3.18c-.14-2.36-2.94-3.45-5.24-4a128.86,128.86,0,0,0-23.92-3.47c-3.45-.11-7.54-1.2-6.76,3.19C615.12,308.93,615.87,312.93,615.56,317.08Z" transform="translate(-77 -85.07)" fill="#fbbebe"/><circle cx="562.66" cy="205.63" r="29.23" fill="#fbbebe"/><path d="M668.6,369.65a35.36,35.36,0,0,0-3.71-6.22c-5.3-7.61-10.74-15.21-17.54-21.51a109.19,109.19,0,0,0-16.65-12.23,37.79,37.79,0,0,0-10.42-5,40.77,40.77,0,0,0-6.69-.91l-7.59-.62a6.21,6.21,0,0,0-2,.06c-2.06.52-3,3.08-2.56,5.15s2,3.75,3.38,5.32c.34,15.49-6.55,30.77-7.48,46.24-1.63,27.05,14.88,52.21,16.2,79.28a8.55,8.55,0,0,1-.38,3.63c-.22.56-.55,1.07-.8,1.62-.78,1.7-.75,3.63-.89,5.5a27.94,27.94,0,0,1-8.23,17.62,12.23,12.23,0,0,0,4.64,3.54c3.19,1.39,7,1.51,10.39,2.48,8.84,2.58,17.9,5.18,27.09,4.63a23.9,23.9,0,0,0,2.09-7.87c1.3-.81,2.8.92,3,2.44s-.09,3.29,1,4.39,2.47.93,3.8.76c5.61-.71,11-2.6,16.5-3.87s11.38-1.88,16.73-.06c1.08-1.37.62-3.4-.26-4.9s-2.13-2.82-2.63-4.49a10.08,10.08,0,0,1-.32-2.95c0-8.55,1.76-17.19.09-25.58-.49-2.46-1.27-4.86-1.77-7.33-1-4.79-.85-9.73-.72-14.62s-.46-10.18-.56-15.14a48.29,48.29,0,0,0-.4-6.13c-.34-2.13-1-4.21-1.18-6.36-.54-5.46,1.66-10.88,1.33-16.36C681.51,381.84,671.84,377.32,668.6,369.65Z" transform="translate(-77 -85.07)" fill="#ff6f61"/><path d="M602.63,365.73c-7.08,18.78-10.54,38.7-14,58.48l-8,46.46c-2.27,13.13-4.55,26.34-4.46,39.66,0,3.74.24,7.55-.74,11.16-1.28,4.74-4.46,8.69-6.87,13a42.78,42.78,0,0,0-4.6,28.93c.82,4.15,3.06,8.86,7.27,9.34,3.46.38,6.45-2.37,8.47-5.21,4.64-6.51,6.94-14.37,9-22.11a500.11,500.11,0,0,0,13.87-77.09,75.06,75.06,0,0,1,1.39-9.8,69.54,69.54,0,0,1,3.38-9.76q4.59-11.38,9.19-22.76c7.07-17.53,14.18-35.14,23.89-51.36-9.6-2.76-19.59-6-29.19-8.73C608.46,365.12,605.49,365.61,602.63,365.73Z" transform="translate(-77 -85.07)" fill="#fbbebe"/><path d="M619.27,380c-6.72-1.45-13.67-1-20.53-1.17a4.43,4.43,0,0,1-2.76-.72c-1.39-1.19-.8-3.42-.1-5.11l3.32-8a11.64,11.64,0,0,1,2.66-4.42c1.69-1.5,4.07-1.87,6.31-2.14,7.29-.84,14.79-1.12,21.86.85s13.72,6.45,16.88,13.08c1.32,2.76,1.93,6.24.18,8.75-2.6,3.73-8.43,7.9-12.78,5.86C629.1,384.51,625.11,381.24,619.27,380Z" transform="translate(-77 -85.07)" fill="#ff6f61"/><path d="M655,245.3A29.52,29.52,0,0,0,638.7,250a35.75,35.75,0,0,0-35.1-8.22A20.43,20.43,0,1,0,580,265.42a35.75,35.75,0,1,0,68.62,20.09,32,32,0,0,0,6.41.65c14.1,0,25.54-9.15,25.54-20.43S669.08,245.3,655,245.3Z" transform="translate(-77 -85.07)" fill="#3f3d56"/><path d="M660.09,275.94a31.1,31.1,0,0,1-6.41-.65A35.57,35.57,0,0,1,649,285.58a32.11,32.11,0,0,0,6,.58c13.18,0,24-8,25.39-18.24C675.7,272.8,668.35,275.94,660.09,275.94Z" transform="translate(-77 -85.07)" opacity="0.1"/><path d="M619.23,301.48a35.8,35.8,0,0,1-34.18-46.28,20.43,20.43,0,0,1-16.89-20.12,20.09,20.09,0,0,1,.33-3.66,20.43,20.43,0,0,0,11.46,34,35.75,35.75,0,0,0,68.29,21.18A35.68,35.68,0,0,1,619.23,301.48Z" transform="translate(-77 -85.07)" opacity="0.1"/><rect x="747.57" y="360.8" width="0.67" height="5.54" rx="0.34" transform="translate(273.33 -451.9) rotate(35.51)" fill="#3a3768"/><rect x="733.02" y="344.55" width="0.38" height="1.82" rx="0.19" transform="translate(260.08 -446.73) rotate(35.51)" fill="#3a3768"/><rect x="730.67" y="347.15" width="0.42" height="3.17" rx="0.21" transform="translate(261.54 -444.76) rotate(35.51)" fill="#3a3768"/><rect x="728.19" y="350.63" width="0.4" height="3.2" rx="0.2" transform="translate(263.11 -442.66) rotate(35.51)" fill="#3a3768"/><rect x="722.83" y="343.97" width="22.48" height="45.69" rx="2.52" transform="translate(272.64 -443.25) rotate(35.51)" fill="#3a3768"/><rect x="722.83" y="343.97" width="22.48" height="45.69" rx="2.52" transform="translate(272.64 -443.25) rotate(35.51)" opacity="0.1"/><rect x="721.9" y="342.11" width="22.48" height="45.69" rx="2.52" transform="translate(271.39 -443.06) rotate(35.51)" fill="#3a3768"/><path d="M752.28,352l-2.09-1.5-.18.25a1.46,1.46,0,0,1-2,.35l-6.68-4.77a1.47,1.47,0,0,1-.34-2.05l.18-.25-2-1.4a1.78,1.78,0,0,0-2.49.41l-23.08,32.35a1.79,1.79,0,0,0,.41,2.49l13.14,9.37a1.78,1.78,0,0,0,2.49-.42l23.08-32.34A1.78,1.78,0,0,0,752.28,352Z" transform="translate(-77 -85.07)" fill="#5f4494"/><rect x="743.37" y="347.07" width="3.14" height="0.64" rx="0.32" transform="translate(263.38 -453.18) rotate(35.51)" fill="#e6e8ec"/><circle cx="669.9" cy="263.72" r="0.36" fill="#e6e8ec"/><path d="M747,99a67,67,0,0,0-67,67c0,37,70.2,159.54,70.2,159.54S814,203.05,814,166A67,67,0,0,0,747,99Zm0,111.68a35.1,35.1,0,1,1,35.1-35.1A35.09,35.09,0,0,1,747,210.71Z" transform="translate(-77 -85.07)" fill="#5f4494"/><path d="M747,99a67,67,0,0,0-67,67c0,37,70.2,159.54,70.2,159.54S814,203.05,814,166A67,67,0,0,0,747,99Zm0,111.68a35.1,35.1,0,1,1,35.1-35.1A35.09,35.09,0,0,1,747,210.71Z" transform="translate(-77 -85.07)" opacity="0.1"/><path d="M747,85.07a67,67,0,0,0-67,67c0,37,70.2,173.5,70.2,173.5S814,189.09,814,152.08A67,67,0,0,0,747,85.07Zm0,111.68a35.1,35.1,0,1,1,35.1-35.1A35.1,35.1,0,0,1,747,196.75Z" transform="translate(-77 -85.07)" fill="#5f4494"/></svg>'
                                }
                            }),
                            n.a.createElement(
                                "div",
                                { className: t.intro_text },
                                n.a.createElement("h3", null, "ABOUT"),
                                n.a.createElement(
                                    "p",
                                    null,
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas massa quis nibh tempus tristique. Donec gravida tempus blandit. Mauris nibh nibh, vehicula nec nisi eget, ullamcorper tincidunt nulla. Sed neque ante, maximus viverra elit vitae, eleifend pulvinar enim. Proin vitae vestibulum lorem, eget pulvinar ex. Donec porttitor viverra mauris sit amet imperdiet. Curabitur bibendum orci quis lorem suscipit dignissim. Quisque in nunc felis. Nam eleifend sagittis sem, vel convallis lacus."
                                )
                            )
                        )
                    )
                );
            }),
            k = e(3),
            j = x()({
                root: {
                    width: "52px",
                    height: "52px",
                    borderRadius: "52px",
                    background: "#5F4494",
                    textAlign: "center",
                    cursor: "pointer",
                    position: "relative",
                    boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)",
                    transition: "transform .155s ease",
                    "&:active": { transform: "scale(.95)" },
                    "& svg": {
                        top: "50%",
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%, -50%)",
                        width: "24px",
                        height: "auto"
                    }
                }
            })(function(a) {
                var t = a.classes,
                    e = a.children,
                    r = a.style,
                    l = a.onClick;
                return n.a.createElement("div", { style: r, onClick: l, className: t.root }, e);
            }),
            _ =
                Object.assign ||
                function(a) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                },
            S = (function() {
                return function(a, t) {
                    if (Array.isArray(a)) return a;
                    if (Symbol.iterator in Object(a))
                        return (function(a, t) {
                            var e = [],
                                r = !0,
                                n = !1,
                                l = void 0;
                            try {
                                for (
                                    var i, o = a[Symbol.iterator]();
                                    !(r = (i = o.next()).done) &&
                                    (e.push(i.value), !t || e.length !== t);
                                    r = !0
                                );
                            } catch (a) {
                                (n = !0), (l = a);
                            } finally {
                                try {
                                    !r && o.return && o.return();
                                } finally {
                                    if (n) throw l;
                                }
                            }
                            return e;
                        })(a, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            })(),
            L = {
                head: {
                    de_DE: "Romeo und Julia",
                    pl_PL: "Romeo i Julia",
                    en_US: "Romeo and Juliet"
                },
                author: {
                    de_DE: "William Shakespeare",
                    pl_PL: "William Shakespeare",
                    en_US: "William Shakespeare"
                },
                content: {
                    de_DE:
                        "O Romeo, Romeo, warum bist du Romeo? Verleugne deinen Vater und lehne deinen Namen ab. Oder wenn du nicht willst, sei nur meine Liebe geschworen Und ich werde kein Capulet mehr sein. „Das ist aber dein Name, der mein Feind ist: Du bist selbst, wenn auch kein Montague. Was ist Montague? Es ist weder Hand noch Fuß Weder Arm noch Gesicht noch irgendein anderer Teil Zu einem Mann gehören. O sei irgendein anderer Name. Was ist in einem Namen? Das, was wir eine Rose nennen Bei jedem anderen Namen würde es süß riechen; Also würde Romeo, würde er nicht Romeo rufen, Behalten Sie die Liebe, die er schuldet Ohne diesen Titel Romeo, mach deinen Namen, Und für diesen Namen, der kein Teil von dir ist, Nimm alles selbst.",
                    en_US:
                        "O Romeo, Romeo, wherefore art thou Romeo? Deny thy father and refuse thy name. Or if thou wilt not, be but sworn my love And I’ll no longer be a Capulet. ‘Tis but thy name that is my enemy: Thou art thyself, though not a Montague. What’s Montague? It is nor hand nor foot Nor arm nor face nor any other part Belonging to a man. O be some other name. What’s in a name? That which we call a rose By any other name would smell as sweet; So Romeo would, were he not Romeo call’d, Retain that dear perfection which he owes Without that title. Romeo, doff thy name, And for that name, which is no part of thee, Take all myself.",
                    pl_PL:
                        "O Romeo, Romeo, dlaczego jesteś Romeo? Zaprzyj się ojca twego i odmów imienia twego. Albo jeśli nie chcesz, bądź przysięgany mojej miłości I już nie będę Kapuletem. „Tis, ale twoje imię, które jest moim wrogiem: Ty sam jesteś, choć nie Montague. Co to jest Montague? Nie jest ani ręką, ani stopą Ani ramię, ani twarz, ani żadna inna część Należący do mężczyzny. O, bądź jakaś inna nazwa. Co jest w imieniu? To, co nazywamy różą Jakakolwiek inna nazwa pachniałaby słodko; Więc Romeo zrobiłby, gdyby nie Romeo, zadzwonił, Zachowaj tę drogocenną doskonałość, którą jest winien Bez tego tytułu. Romeo, zdejmij swoje imię, I dla tego imienia, które nie jest częścią ciebie, Weź wszystko sam."
                }
            },
            H = [
                { text: "English", flag: "us", language: "en_US" },
                { text: "German", flag: "de", language: "de_DE" },
                { text: "Polish", flag: "pl", language: "pl_PL" }
            ],
            R = function(a) {
                var t = a.classes,
                    e = a.setLanguage;
                return n.a.createElement(
                    "div",
                    { className: t.content },
                    n.a.createElement(
                        "div",
                        { className: t.flags },
                        H.map(function(a) {
                            return n.a.createElement(V, _({ setLanguage: e }, a));
                        })
                    ),
                    n.a.createElement(O, { classes: t })
                );
            },
            O = function(a) {
                var t = a.classes,
                    e = Object(r.useState)(!1),
                    l = S(e, 2),
                    i = l[0],
                    o = l[1],
                    c = m(L),
                    s = S(c, 1)[0],
                    f = n.a.createElement(
                        n.a.Fragment,
                        null,
                        n.a.createElement("h1", null, s.head),
                        n.a.createElement("p", null, s.author),
                        n.a.createElement("br", null),
                        n.a.createElement("p", { className: t.cardContent }, s.content),
                        n.a.createElement(
                            j,
                            {
                                onClick: function() {
                                    return o(!i);
                                },
                                style: { position: "absolute", right: "-20px", top: "-25px" }
                            },
                            n.a.createElement(k.FaCode, null)
                        )
                    ),
                    d = n.a.createElement(
                        n.a.Fragment,
                        null,
                        n.a.createElement(
                            w.a,
                            { language: "javascript" },
                            n.a.createElement(N, null)
                        ),
                        n.a.createElement(
                            j,
                            {
                                onClick: function() {
                                    return o(!i);
                                },
                                style: { position: "absolute", right: "-20px", top: "-25px" }
                            },
                            n.a.createElement(k.FaFileAlt, null)
                        )
                    );
                return n.a.createElement(
                    "div",
                    { className: t.card },
                    n.a.createElement("h4", { className: t.cardTitle }, "Examples"),
                    n.a.createElement("div", { className: t.cardContainer }, i ? d : f)
                );
            },
            N = function() {
                return n.a.createElement(
                    n.a.Fragment,
                    null,
                    '\nimport React from "react";\nimport { useLittera } from "react-littera";\n\nconst translations = {\n    title: {\n        de_DE: "Romeo und Julia",\n        pl_PL: "Romeo i Julia",\n        en_US: "Romeo and Juliet",\n    },\n    subtitle: {\n        de_DE: "William Shakespeare",\n        pl_PL: "William Shakespeare",\n        en_US: "William Shakespeare",\n    },\n    content: {\n        de_DE:\n            "O Romeo, Romeo, warum bist du Romeo? Verleugne deinen Vater und lehne deinen Namen ab. Oder wenn du nicht willst, sei nur meine Liebe geschworen Und ich werde kein Capulet mehr sein. „Das ist aber dein Name, der mein Feind ist: Du bist selbst, wenn auch kein Montague. Was ist Montague? Es ist weder Hand noch Fuß Weder Arm noch Gesicht noch irgendein anderer Teil Zu einem Mann gehören. O sei irgendein anderer Name. Was ist in einem Namen? Das, was wir eine Rose nennen Bei jedem anderen Namen würde es süß riechen; Also würde Romeo, würde er nicht Romeo rufen, Behalten Sie die Liebe, die er schuldet Ohne diesen Titel Romeo, mach deinen Namen, Und für diesen Namen, der kein Teil von dir ist, Nimm alles selbst.",\n        en_US:\n            "O Romeo, Romeo, wherefore art thou Romeo? Deny thy father and refuse thy name. Or if thou wilt not, be but sworn my love And I’ll no longer be a Capulet. ‘Tis but thy name that is my enemy: Thou art thyself, though not a Montague. What’s Montague? It is nor hand nor foot Nor arm nor face nor any other part Belonging to a man. O be some other name. What’s in a name? That which we call a rose By any other name would smell as sweet; So Romeo would, were he not Romeo call’d, Retain that dear perfection which he owes Without that title. Romeo, doff thy name, And for that name, which is no part of thee, Take all myself.",\n        pl_PL:\n            "O Romeo, Romeo, dlaczego jesteś Romeo? Zaprzyj się ojca twego i odmów imienia twego. Albo jeśli nie chcesz, bądź przysięgany mojej miłości I już nie będę Kapuletem. „Tis, ale twoje imię, które jest moim wrogiem: Ty sam jesteś, choć nie Montague. Co to jest Montague? Nie jest ani ręką, ani stopą Ani ramię, ani twarz, ani żadna inna część Należący do mężczyzny. O, bądź jakaś inna nazwa. Co jest w imieniu? To, co nazywamy różą Jakakolwiek inna nazwa pachniałaby słodko; Więc Romeo zrobiłby, gdyby nie Romeo, zadzwonił, Zachowaj tę drogocenną doskonałość, którą jest winien Bez tego tytułu. Romeo, zdejmij swoje imię, I dla tego imienia, które nie jest częścią ciebie, Weź wszystko sam.",\n    },\n};\n\nconst Card = () => {\n    const [ translated ] = useLittera(translations);\n\n    return (\n        <div>\n            <h3>{translated.title}</h3>\n            <p>{translated.subtitle}</p>\n            <br/>\n            <p>{translated.content}</p>\n        </div>\n    );\n}\n\nexport default Card;\n'
                );
            },
            V = x()({
                root: {
                    width: "52px",
                    height: "52px",
                    borderRadius: "52px",
                    margin: "2rem",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    transition: "all .155s ease",
                    transform: "scale(0.9)",
                    "&:hover": {
                        opacity: 1,
                        transform: "scale(1.1)",
                        boxShadow: "0px 0px 33px 6px rgba(158, 102, 255, 0.15)"
                    },
                    "&:active": { transform: "scale(0.98)" }
                },
                active: {
                    opacity: 1,
                    transform: "scale(1.30)",
                    boxShadow: "0px 0px 55px 9px rgba(158, 102, 255, 0.20)",
                    "&:hover": {
                        boxShadow: "0px 0px 66px 9px rgba(158, 102, 255, 0.25)",
                        transform: "scale(1.30)"
                    },
                    "&:active": { transform: "scale(1.28)" }
                },
                dimmed: { opacity: 0.4 },
                image: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%) scale(1.5)"
                }
            })(function(a) {
                var t = a.flag,
                    e = a.language,
                    r = a.classes,
                    l = a.setLanguage,
                    i = m(L),
                    o = S(i, 2),
                    c = (o[0], o[1]);
                return n.a.createElement(
                    "div",
                    {
                        className: r.root + " " + (c === e ? r.active : r.dimmed),
                        onClick: function() {
                            return l(e);
                        }
                    },
                    n.a.createElement("img", {
                        src: "https://www.countryflags.io/" + t + "/flat/64.png",
                        className: r.image
                    })
                );
            }),
            T = x()({
                root: { width: "100%", height: "auto", position: "relative", display: "block" },
                content: {
                    display: "flex",
                    width: "80%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    padding: "10vh 10%",
                    transition: "all 255ms ease"
                },
                card: {
                    display: "inline-block",
                    width: "60%",
                    height: "auto",
                    border: "8px dashed rgba(79, 56, 121, .3)",
                    borderRadius: "15px",
                    padding: "2.5rem 3.5rem",
                    color: "#fff",
                    position: "relative",
                    maxWidth: "750px",
                    "& h1": { marginBottom: 0 },
                    "& p": { marginTop: 0, opacity: ".7" },
                    "& .hljs": { background: "#1c1922" }
                },
                cardTitle: {
                    width: "254px",
                    textAlign: "center",
                    marginTop: "-90px",
                    fontSize: "54px",
                    marginBottom: "0",
                    marginLeft: "5px",
                    background: "#1C1922"
                },
                cardContainer: { padding: "1.5rem 2.5rem" },
                cardContent: {
                    marginTop: 0,
                    opacity: ".7",
                    padding: "1rem 1.2rem",
                    background: "rgba(95, 68, 148, .2)",
                    borderRadius: "15px"
                },
                flags: { display: "inline-block", paddingRight: "4%" }
            })(function(a) {
                var t = a.classes,
                    e = (a.children, Object(r.useState)("en_US")),
                    l = S(e, 2),
                    i = l[0],
                    o = l[1];
                return n.a.createElement(
                    p,
                    {
                        language: i,
                        preset: {},
                        setLanguage: function(a) {
                            return o(a);
                        }
                    },
                    n.a.createElement(
                        "div",
                        { className: t.root },
                        n.a.createElement(R, {
                            classes: t,
                            setLanguage: function(a) {
                                return o(a);
                            }
                        })
                    )
                );
            }),
            z = x()({ root: {}, timeSwitch: {} })(function(a) {
                var t = a.classes,
                    e = (a.children, a.switchTheme);
                return n.a.createElement(
                    n.a.Fragment,
                    null,
                    n.a.createElement(Z, null),
                    n.a.createElement(C, null),
                    n.a.createElement(T, null),
                    n.a.createElement(v, null),
                    n.a.createElement(E, null),
                    n.a.createElement(A, null),
                    n.a.createElement(
                        "button",
                        {
                            onClick: function() {
                                return e();
                            },
                            className: t.timeSwitch
                        },
                        "time switch"
                    )
                );
            }),
            P = (e(6),
            (function() {
                return function(a, t) {
                    if (Array.isArray(a)) return a;
                    if (Symbol.iterator in Object(a))
                        return (function(a, t) {
                            var e = [],
                                r = !0,
                                n = !1,
                                l = void 0;
                            try {
                                for (
                                    var i, o = a[Symbol.iterator]();
                                    !(r = (i = o.next()).done) &&
                                    (e.push(i.value), !t || e.length !== t);
                                    r = !0
                                );
                            } catch (a) {
                                (n = !0), (l = a);
                            } finally {
                                try {
                                    !r && o.return && o.return();
                                } finally {
                                    if (n) throw l;
                                }
                            }
                            return e;
                        })(a, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            })()),
            W = { "unique.hello": { de_DE: "Hallo", pl_PL: "Cześć", en_US: "Hello" } };
        Object(l.render)(
            n.a.createElement(function() {
                var a = Object(r.useState)("en_US"),
                    t = P(a, 2),
                    e = t[0],
                    l = t[1],
                    i = Object(r.useState)("dark"),
                    o = P(i, 2),
                    c = o[0],
                    s = o[1],
                    f = ["en_US", "de_DE", "pl_PL"],
                    d = { palette: { primary: "#5F4494", background: "#1c1922" } };
                Object(r.useEffect)(
                    function() {
                        (d =
                            "dark" === c
                                ? { palette: { primary: "#5F4494", background: "#1c1922" } }
                                : { palette: { primary: "#5F4494", background: "#eee" } }),
                            console.log(d);
                    },
                    [c]
                );
                return n.a.createElement(
                    b.ThemeProvider,
                    { theme: d },
                    n.a.createElement(
                        z,
                        {
                            switchTheme: function() {
                                return s("dark" === c ? "light" : "dark");
                            }
                        },
                        n.a.createElement(
                            p,
                            {
                                language: e,
                                preset: W,
                                setLanguage: function(a) {
                                    return l(a);
                                }
                            },
                            n.a.createElement(g, null),
                            n.a.createElement(h, {
                                onClick: function() {
                                    return l(f[f.indexOf(e) + 1] || f[0]);
                                }
                            })
                        )
                    )
                );
            }, null),
            document.getElementById("root")
        );
    }
]);
