(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95405, 98651, 29453, 692, 13992], {
        78389: function(e, t, n) {
            e.exports = n(66042)
        },
        77668: function(e, t, n) {
            e.exports = n(22508)
        },
        65377: function(e, t, n) {
            "use strict";
            n.d(t, {
                S1: function() {
                    return off
                },
                ZT: function() {
                    return noop
                },
                jU: function() {
                    return r
                },
                on: function() {
                    return on
                }
            });
            var noop = function() {};

            function on(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                e && e.addEventListener && e.addEventListener.apply(e, t)
            }

            function off(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                e && e.removeEventListener && e.removeEventListener.apply(e, t)
            }
            var r = "undefined" != typeof window
        },
        70197: function(e, t, n) {
            "use strict";
            var r = n(78495),
                a = n(65377);
            t.Z = function(e, t, n) {
                if (!a.jU) return [t, a.ZT, a.ZT];
                if (!e) throw Error("useLocalStorage key may not be falsy");
                var i = n ? n.raw ? function(e) {
                        return e
                    } : n.deserializer : JSON.parse,
                    o = (0, r.useRef)(function(e) {
                        try {
                            var r = n ? n.raw ? String : n.serializer : JSON.stringify,
                                a = localStorage.getItem(e);
                            if (null !== a) return i(a);
                            return t && localStorage.setItem(e, r(t)), t
                        } catch (e) {
                            return t
                        }
                    }),
                    l = (0, r.useState)(function() {
                        return o.current(e)
                    }),
                    s = l[0],
                    u = l[1];
                (0, r.useLayoutEffect)(function() {
                    return u(o.current(e))
                }, [e]);
                var c = (0, r.useCallback)(function(t) {
                    try {
                        var r = "function" == typeof t ? t(s) : t;
                        if (void 0 === r) return;
                        var a = void 0;
                        a = n ? n.raw ? "string" == typeof r ? r : JSON.stringify(r) : n.serializer ? n.serializer(r) : JSON.stringify(r) : JSON.stringify(r), localStorage.setItem(e, a), u(i(a))
                    } catch (e) {}
                }, [e, u]);
                return [s, c, (0, r.useCallback)(function() {
                    try {
                        localStorage.removeItem(e), u(void 0)
                    } catch (e) {}
                }, [e, u])]
            }
        },
        48312: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(40251)
            }])
        },
        66042: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    noSSR: function() {
                        return noSSR
                    },
                    default: function() {
                        return dynamic
                    }
                });
            let r = n(38917),
                a = (n(78495), r._(n(35786)));

            function convertModule(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function noSSR(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function dynamic(e, t) {
                let n = a.default,
                    r = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: r
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = { ...r,
                    ...e
                }), r = { ...r,
                    ...t
                };
                let i = r.loader;
                return (r.loadableGenerated && (r = { ...r,
                    ...r.loadableGenerated
                }, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({ ...r,
                    loader: () => null != i ? i().then(convertModule) : Promise.resolve(convertModule(() => null))
                }) : (delete r.webpack, delete r.modules, noSSR(n, r))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16819: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let r = n(38917),
                a = r._(n(78495)),
                i = a.default.createContext(null)
        },
        35786: function(e, t, n) {
            "use strict";
            /**
            @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
             MIT License
             Permission is hereby granted, free of charge, to any person obtaining
            a copy of this software and associated documentation files (the
            "Software"), to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject to
            the following conditions:
             The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
            */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(38917),
                a = r._(n(78495)),
                i = n(16819),
                o = [],
                l = [],
                s = !1;

            function load(e) {
                let t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
                    throw n.loading = !1, n.error = e, e
                }), n
            }
            let LoadableSubscription = class LoadableSubscription {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            };

            function Loadable(e) {
                return function(e, t) {
                    let n = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        r = null;

                    function init() {
                        if (!r) {
                            let t = new LoadableSubscription(e, n);
                            r = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return r.promise()
                    }
                    if (!s) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e && l.push(t => {
                            for (let n of e)
                                if (t.includes(n)) return init()
                        })
                    }

                    function LoadableComponent(e, t) {
                        ! function() {
                            init();
                            let e = a.default.useContext(i.LoadableContext);
                            e && Array.isArray(n.modules) && n.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let o = a.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                        return a.default.useImperativeHandle(t, () => ({
                            retry: r.retry
                        }), []), a.default.useMemo(() => {
                            var t;
                            return o.loading || o.error ? a.default.createElement(n.loading, {
                                isLoading: o.loading,
                                pastDelay: o.pastDelay,
                                timedOut: o.timedOut,
                                error: o.error,
                                retry: r.retry
                            }) : o.loaded ? a.default.createElement((t = o.loaded) && t.default ? t.default : t, e) : null
                        }, [e, o])
                    }
                    return LoadableComponent.preload = () => init(), LoadableComponent.displayName = "LoadableComponent", a.default.forwardRef(LoadableComponent)
                }(load, e)
            }

            function flushInitializers(e, t) {
                let n = [];
                for (; e.length;) {
                    let r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then(() => {
                    if (e.length) return flushInitializers(e, t)
                })
            }
            Loadable.preloadAll = () => new Promise((e, t) => {
                flushInitializers(o).then(e, t)
            }), Loadable.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let res = () => (s = !0, t());
                flushInitializers(l, e).then(res, res)
            })), window.__NEXT_PRELOADREADY = Loadable.preloadReady;
            let u = Loadable
        },
        98651: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Seo
                }
            });
            var r = n(34583),
                a = n(77668),
                i = n.n(a),
                o = n(58214),
                l = n(29453);
            let s = {
                title: "Easy-Peasy.AI: The AI Content Assistant",
                siteName: "Easy-Peasy.AI",
                description: "",
                url: "https://easy-peasy.ai",
                type: "website",
                robots: "follow, index",
                image: ""
            };

            function Seo(e) {
                let t = (0, o.useRouter)(),
                    n = { ...s,
                        ...e
                    };
                n.title = e.templateTitle ? "".concat(e.templateTitle, " | ").concat(n.siteName) : n.title;
                let a = t.asPath.split("?")[0].replace(/\/$/, ""),
                    c = "".concat(n.url).concat("en" !== t.locale ? "/".concat(t.locale) : "").concat(a);
                return (0, r.jsxs)(i(), {
                    children: [(0, r.jsx)("title", {
                        children: n.title
                    }), (0, r.jsx)("meta", {
                        name: "robots",
                        content: n.robots
                    }), (0, r.jsx)("meta", {
                        content: n.description,
                        name: "description"
                    }), (0, r.jsx)("link", {
                        rel: "canonical",
                        href: c
                    }), (0, r.jsx)("meta", {
                        property: "og:type",
                        content: n.type
                    }), (0, r.jsx)("meta", {
                        property: "og:site_name",
                        content: n.siteName
                    }), (0, r.jsx)("meta", {
                        property: "og:description",
                        content: n.description
                    }), (0, r.jsx)("meta", {
                        property: "og:title",
                        content: n.title
                    }), (0, r.jsx)("meta", {
                        name: "image",
                        property: "og:image",
                        content: n.image
                    }), (0, r.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, r.jsx)("meta", {
                        name: "twitter:site",
                        content: "@easy_peasy_ai"
                    }), (0, r.jsx)("meta", {
                        name: "twitter:title",
                        content: n.title
                    }), (0, r.jsx)("meta", {
                        name: "twitter:description",
                        content: n.description
                    }), (0, r.jsx)("meta", {
                        name: "twitter:image",
                        content: n.image
                    }), n.date && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            property: "article:published_time",
                            content: n.date
                        }), (0, r.jsx)("meta", {
                            name: "publish_date",
                            property: "og:publish_date",
                            content: n.date
                        }), (0, r.jsx)("meta", {
                            name: "author",
                            property: "article:author",
                            content: "Theodorus Clarence"
                        })]
                    }), u.map(e => (0, r.jsx)("link", { ...e
                    }, e.href)), (0, r.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#ffffff"
                    }), (0, r.jsx)("meta", {
                        name: "msapplication-TileImage",
                        content: "/favicon/ms-icon-144x144.png"
                    }), (0, r.jsx)("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }), !c.includes("blog/") && !c.includes("images/") && l.V.map(e => "en" === e.value ? (0, r.jsx)("link", {
                        rel: "alternate",
                        href: "".concat(n.url).concat("/" === t.asPath ? "" : t.asPath),
                        hrefLang: "x-default"
                    }, e.value) : (0, r.jsx)("link", {
                        rel: "alternate",
                        href: "".concat(n.url, "/").concat(e.value).concat("/" === t.asPath ? "" : t.asPath),
                        hrefLang: e.value
                    }, e.value))]
                })
            }
            let u = [{
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/favicon/apple-icon-57x57.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/favicon/apple-icon-60x60.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/favicon/apple-icon-72x72.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/favicon/apple-icon-76x76.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/favicon/apple-icon-114x114.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicon/apple-icon-120x120.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/favicon/apple-icon-144x144.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicon/apple-icon-152x152.png"
            }, {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-icon-180x180.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/favicon/android-icon-192x192.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/favicon/favicon-96x96.png"
            }, {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }, {
                rel: "manifest",
                href: "/favicon/manifest.json"
            }]
        },
        29453: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return LanguageSelector
                },
                V: function() {
                    return c
                }
            });
            var r = n(34583),
                a = n(83321),
                i = n(80540),
                o = n(89842),
                l = n(58214),
                s = n(78754),
                u = n(48586);
            let c = [{
                name: "English",
                value: "en"
            }, {
                name: "日本語",
                value: "ja"
            }, {
                name: "Espa\xf1ol",
                value: "es"
            }, {
                name: "Fran\xe7ais",
                value: "fr"
            }, {
                name: "Italiano",
                value: "it"
            }, {
                name: "Deutsch",
                value: "de"
            }, {
                name: "Korean",
                value: "ko"
            }, {
                name: "简体中文",
                value: "zh"
            }, {
                name: "ไทย",
                value: "th"
            }, {
                name: "العربية",
                value: "ar"
            }, {
                name: "Portugu\xeas",
                value: "pt"
            }];

            function LanguageSelector(e) {
                let {
                    t,
                    lang: n
                } = (0, s.Z)("common"), d = (0, l.useRouter)();
                return (0, r.jsxs)(a.R, {
                    as: "div",
                    value: c.find(e => e.value === n),
                    onChange: e => {
                        o.Z.set("NEXT_LOCALE", e.value, {
                            expires: 365
                        }), d.push(d.asPath, d.asPath, {
                            locale: e.value
                        })
                    },
                    ...e,
                    children: [(0, r.jsx)(a.R.Label, {
                        className: "sr-only",
                        children: "Theme"
                    }), (0, r.jsx)(a.R.Button, {
                        className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                        children: (0, r.jsx)(i.Z, {
                            className: " h-4 w-4 fill-primary-400"
                        })
                    }), (0, r.jsx)(a.R.Options, {
                        className: "absolute left-1/2 top-full z-50 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                        children: c.map(e => (0, r.jsx)(a.R.Option, {
                            value: e,
                            className: t => {
                                let {
                                    active: r,
                                    selected: a
                                } = t;
                                return (0, u.Z)("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                    "text-primary-500": n === e.value,
                                    "text-slate-900 dark:text-white": r && n !== e.value,
                                    "text-slate-700 dark:text-slate-400": !r && n !== e.value,
                                    "bg-slate-100 dark:bg-slate-900/40": r
                                })
                            },
                            children: n => {
                                let {
                                    selected: a
                                } = n;
                                return (0, r.jsx)(r.Fragment, {
                                    children: (0, r.jsx)("div", {
                                        className: "ml-3",
                                        children: t(e.name)
                                    })
                                })
                            }
                        }, e.value))
                    })]
                })
            }
        },
        13969: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bc: function() {
                    return d
                },
                De: function() {
                    return r
                },
                E2: function() {
                    return m
                },
                EX: function() {
                    return x
                },
                FR: function() {
                    return b
                },
                HA: function() {
                    return u
                },
                Hv: function() {
                    return o
                },
                Ki: function() {
                    return c
                },
                Uy: function() {
                    return p
                },
                Y: function() {
                    return a
                },
                eu: function() {
                    return i
                },
                ht: function() {
                    return f
                },
                ns: function() {
                    return h
                },
                oZ: function() {
                    return l
                },
                xZ: function() {
                    return g
                },
                yL: function() {
                    return s
                }
            });
            let r = "price_1LnfByLgxGi7JA3GC49GOkRJ",
                a = !1,
                i = "price_1PuywMLgxGi7JA3G9F9qxCNr",
                o = ["price_1PqFiwLgxGi7JA3GBGrtEczG", "price_1PqFjlLgxGi7JA3GyHjJraPV", "price_1PqFjvLgxGi7JA3GqkIXCg96"],
                l = ["prod_QHeRbUODph0Qnk", "prod_PfsXrSTNjfI9RO", "prod_OlgfpT7JJNOYtw", "prod_MakjxDVwGdvoVK", "prod_NtlgdYiAMxIUwD", "prod_QskSrexOhYVHhJ", "prod_OqT3UM05zlYR3V"],
                s = ["prod_MakjxDVwGdvoVK", "prod_OlgfpT7JJNOYtw", "prod_NtlgdYiAMxIUwD", "prod_QskSrexOhYVHhJ", "prod_OqT3UM05zlYR3V", "prod_PVWIKnwi4YRVgm", "prod_PVVOGLWwc2Ih7r", "prod_PfsXrSTNjfI9RO"],
                u = ["free_tts", "prod_PgMnD7wruz8aUW", "prod_PgXHUmzjdFmuDS", "prod_Po6rCp6CXcKJJW"],
                c = !0,
                d = !1,
                f = "price_1MJ5PpLgxGi7JA3GO8um3Nux",
                p = "price_1MwNj4LgxGi7JA3GSJ7L0NDp",
                m = "price_1PYPf5LgxGi7JA3GuiSuCxJ8",
                h = 3,
                g = {
                    "Starter TTS": 2e3,
                    "TTS 250": 3e3,
                    "Pro TTS": 3e3,
                    "TTS Basic": 3e3,
                    "TTS Starter": 3e3,
                    Enterprise: 1e6,
                    Teams: 1e5,
                    "Teams 6 seats": 1e5,
                    "Teams 10 seats": 1e5,
                    "Teams 20 seats": 1e5,
                    "Teams 40 seats": 15e4,
                    "Teams 200": 2e5,
                    "Teams 300": 3e5,
                    "Unlimited 50": 5e4,
                    Unlimited: 1e5,
                    "Unlimited 200": 2e5,
                    "Unlimited 500": 5e5,
                    "Unlimited 1000": 1e6,
                    "Unlimited GPT-3.5": 25e3,
                    "Unlimited GPT4": 1 / 0,
                    Pro: 1e5,
                    "Pro 200": 2e5,
                    "Pro 300": 3e5,
                    "Pro 400": 4e5,
                    "Pro 500": 5e5,
                    "Pro 1000": 1e6,
                    "Pro Test": 25e3,
                    Starter: 25e3,
                    Basic: 1e4,
                    Free: 1e3,
                    "TTS Free": 3e3,
                    AppSumo: 15e3,
                    "Lifetime Pro": 1e5,
                    "Lifetime Pro 150": 15e4,
                    "Lifetime Pro 200": 2e5,
                    "Lifetime Pro 400": 4e5,
                    "Lifetime Starter": 2e4
                },
                b = {
                    "Starter TTS": 5,
                    "TTS 250": 5,
                    "Pro TTS": 5,
                    "TTS Basic": 5,
                    "TTS Starter": 5,
                    Enterprise: 1e3,
                    "Unlimited GPT4": 1 / 0,
                    Teams: 250,
                    "Teams 6 seats": 250,
                    "Teams 10 seats": 400,
                    "Teams 20 seats": 250,
                    "Teams 40 seats": 250,
                    "Teams 200": 500,
                    "Teams 300": 750,
                    Unlimited: 350,
                    "Unlimited 50": 250,
                    "Unlimited 200": 700,
                    "Unlimited 500": 2e3,
                    "Unlimited 1000": 5e3,
                    "Unlimited GPT-3.5": 150,
                    Pro: 350,
                    "Pro 200": 200,
                    "Pro 300": 300,
                    "Pro 400": 400,
                    "Pro 500": 1500,
                    "Pro 1000": 3e3,
                    "Pro Test": 250,
                    Starter: 150,
                    Basic: 25,
                    Free: 1,
                    "TTS Free": 5,
                    AppSumo: 150,
                    "Lifetime Pro": 100,
                    "Lifetime Pro 150": 150,
                    "Lifetime Pro 200": 200,
                    "Lifetime Pro 400": 900,
                    "Lifetime Starter": 50
                },
                x = {
                    "Starter TTS": 5e4,
                    "TTS 250": 25e4,
                    "Pro TTS": 6e4,
                    "TTS Basic": 3e4,
                    "TTS Starter": 6e4,
                    Enterprise: 3e4,
                    Teams: 3e4,
                    "Teams 6 seats": 3e4,
                    "Teams 10 seats": 3e4,
                    "Teams 20 seats": 3e4,
                    "Teams 40 seats": 3e4,
                    "Teams 200": 7e4,
                    "Teams 300": 1e5,
                    "Unlimited 50": 2e4,
                    Unlimited: 3e4,
                    "Unlimited 200": 6e4,
                    "Unlimited 500": 2e5,
                    "Unlimited 1000": 4e5,
                    "Unlimited GPT-3.5": 1e4,
                    "Unlimited GPT4": 2e4,
                    Pro: 2e4,
                    "Pro 200": 2e4,
                    "Pro 300": 3e4,
                    "Pro 400": 1e4,
                    "Pro 500": 5e4,
                    "Pro 1000": 1e5,
                    "Pro Test": 25e3,
                    Starter: 1e4,
                    Basic: 2500,
                    Free: 100,
                    "TTS Free": 1e3,
                    AppSumo: 15e3,
                    "Lifetime Pro": 1e4,
                    "Lifetime Pro 150": 15e3,
                    "Lifetime Pro 200": 2e4,
                    "Lifetime Pro 400": 4e4,
                    "Lifetime Starter": 2e4
                }
        },
        40251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return S
                },
                default: function() {
                    return HomePage
                }
            });
            var r = n(34583),
                a = n(78389),
                i = n.n(a),
                o = n(58214),
                l = n(78495),
                s = n(70197),
                u = n(55042),
                c = n(78754),
                d = n(98651),
                f = n(13969),
                p = n(25038);
            let m = i()(() => n.e(6875).then(n.bind(n, 6179)), {
                    loadableGenerated: {
                        webpack: () => [6179]
                    },
                    ssr: !1
                }),
                h = i()(() => Promise.all([n.e(48127), n.e(3177), n.e(91458), n.e(6255)]).then(n.bind(n, 91458)), {
                    loadableGenerated: {
                        webpack: () => [91458]
                    }
                }),
                g = i()(() => Promise.all([n.e(48127), n.e(28321), n.e(75942)]).then(n.bind(n, 28321)), {
                    loadableGenerated: {
                        webpack: () => [28321]
                    }
                }),
                b = i()(() => Promise.all([n.e(89317), n.e(92846)]).then(n.bind(n, 92846)), {
                    loadableGenerated: {
                        webpack: () => [92846]
                    }
                }),
                x = i()(() => n.e(3136).then(n.bind(n, 3136)), {
                    loadableGenerated: {
                        webpack: () => [3136]
                    }
                }),
                _ = i()(() => Promise.all([n.e(67466), n.e(45981), n.e(47321)]).then(n.bind(n, 47321)), {
                    loadableGenerated: {
                        webpack: () => [47321]
                    }
                }),
                T = i()(() => n.e(7203).then(n.bind(n, 5951)), {
                    loadableGenerated: {
                        webpack: () => [5951]
                    }
                }),
                y = i()(() => Promise.all([n.e(62007), n.e(95320)]).then(n.bind(n, 95320)), {
                    loadableGenerated: {
                        webpack: () => [95320]
                    }
                }),
                P = i()(() => n.e(84890).then(n.bind(n, 84890)), {
                    loadableGenerated: {
                        webpack: () => [84890]
                    }
                }),
                v = i()(() => Promise.all([n.e(62007), n.e(55508), n.e(41705)]).then(n.bind(n, 55508)), {
                    loadableGenerated: {
                        webpack: () => [55508]
                    }
                });
            var S = !0;

            function HomePage(e) {
                let {
                    products: t
                } = e, n = (0, p.e)(), a = (0, o.useRouter)(), {
                    from: i
                } = a.query, {
                    t: S,
                    lang: j
                } = (0, c.Z)("home"), [w, L] = (0, s.Z)("from", i);
                return (0, l.useEffect)(() => {
                    i && L(i)
                }, [i]), (0, l.useEffect)(() => {
                    let {
                        data: e
                    } = n.auth.onAuthStateChange((e, t) => {
                        console.log(e, t), "INITIAL_SESSION" === e || "SIGNED_IN" === e || "SIGNED_OUT" === e || "PASSWORD_RECOVERY" === e && a.push("/settings", "/settings", {
                            locale: j
                        })
                    });
                    return () => {
                        e.subscription.unsubscribe()
                    }
                }, [a, j]), (0, r.jsxs)("main", {
                    className: "dark:bg-slate-900",
                    children: [(0, r.jsx)(d.default, {
                        templateTitle: S("All-In-One AI Platform"),
                        title: S("All-In-One AI Platform"),
                        description: S("hero_text"),
                        image: "api/og-template?title=".concat(S("All-In-One AI Platform"))
                    }), (0, r.jsx)(h, {}), (0, r.jsx)(y, {}), (0, r.jsx)(g, {}), (0, r.jsx)(b, {}), (0, r.jsx)(v, {
                        isUpgrade: !0,
                        hideLowerPrices: !1,
                        products: t.filter(e => f.Ki || "Free" !== e.name)
                    }), (0, r.jsx)(P, {}), (0, r.jsx)(m, {}), (0, r.jsx)(x, {}), (0, r.jsx)(_, {}), (0, r.jsx)(T, {}), (0, r.jsx)(u.default, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [34396, 76085, 55176, 55042, 49774, 92888, 40179], function() {
            return e(e.s = 48312)
        }), _N_E = e.O()
    }
]);