(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8221], {
        78389: function(e, t, r) {
            e.exports = r(66042)
        },
        63308: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/templates/[slug]", function() {
                return r(1835)
            }])
        },
        66042: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    noSSR: function() {
                        return noSSR
                    },
                    default: function() {
                        return dynamic
                    }
                });
            let a = r(38917),
                i = (r(78495), a._(r(35786)));

            function convertModule(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function noSSR(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function dynamic(e, t) {
                let r = i.default,
                    a = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: r,
                                pastDelay: a
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? a.loader = () => e : "function" == typeof e ? a.loader = e : "object" == typeof e && (a = { ...a,
                    ...e
                }), a = { ...a,
                    ...t
                };
                let l = a.loader;
                return (a.loadableGenerated && (a = { ...a,
                    ...a.loadableGenerated
                }, delete a.loadableGenerated), "boolean" != typeof a.ssr || a.ssr) ? r({ ...a,
                    loader: () => null != l ? l().then(convertModule) : Promise.resolve(convertModule(() => null))
                }) : (delete a.webpack, delete a.modules, noSSR(r, a))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        16819: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let a = r(38917),
                i = a._(r(78495)),
                l = i.default.createContext(null)
        },
        35786: function(e, t, r) {
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
                    return d
                }
            });
            let a = r(38917),
                i = a._(r(78495)),
                l = r(16819),
                s = [],
                n = [],
                o = !1;

            function load(e) {
                let t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then(e => (r.loading = !1, r.loaded = e, e)).catch(e => {
                    throw r.loading = !1, r.error = e, e
                }), r
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
                    let r = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        a = null;

                    function init() {
                        if (!a) {
                            let t = new LoadableSubscription(e, r);
                            a = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return a.promise()
                    }
                    if (!o) {
                        let e = r.webpack ? r.webpack() : r.modules;
                        e && n.push(t => {
                            for (let r of e)
                                if (t.includes(r)) return init()
                        })
                    }

                    function LoadableComponent(e, t) {
                        ! function() {
                            init();
                            let e = i.default.useContext(l.LoadableContext);
                            e && Array.isArray(r.modules) && r.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let s = i.default.useSyncExternalStore(a.subscribe, a.getCurrentValue, a.getCurrentValue);
                        return i.default.useImperativeHandle(t, () => ({
                            retry: a.retry
                        }), []), i.default.useMemo(() => {
                            var t;
                            return s.loading || s.error ? i.default.createElement(r.loading, {
                                isLoading: s.loading,
                                pastDelay: s.pastDelay,
                                timedOut: s.timedOut,
                                error: s.error,
                                retry: a.retry
                            }) : s.loaded ? i.default.createElement((t = s.loaded) && t.default ? t.default : t, e) : null
                        }, [e, s])
                    }
                    return LoadableComponent.preload = () => init(), LoadableComponent.displayName = "LoadableComponent", i.default.forwardRef(LoadableComponent)
                }(load, e)
            }

            function flushInitializers(e, t) {
                let r = [];
                for (; e.length;) {
                    let a = e.pop();
                    r.push(a(t))
                }
                return Promise.all(r).then(() => {
                    if (e.length) return flushInitializers(e, t)
                })
            }
            Loadable.preloadAll = () => new Promise((e, t) => {
                flushInitializers(s).then(e, t)
            }), Loadable.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let res = () => (o = !0, t());
                flushInitializers(n, e).then(res, res)
            })), window.__NEXT_PRELOADREADY = Loadable.preloadReady;
            let d = Loadable
        },
        13969: function(e, t, r) {
            "use strict";
            r.d(t, {
                Bc: function() {
                    return c
                },
                De: function() {
                    return a
                },
                E2: function() {
                    return f
                },
                EX: function() {
                    return _
                },
                FR: function() {
                    return b
                },
                HA: function() {
                    return d
                },
                Hv: function() {
                    return s
                },
                Ki: function() {
                    return u
                },
                Uy: function() {
                    return p
                },
                Y: function() {
                    return i
                },
                eu: function() {
                    return l
                },
                ht: function() {
                    return m
                },
                ns: function() {
                    return x
                },
                oZ: function() {
                    return n
                },
                xZ: function() {
                    return h
                },
                yL: function() {
                    return o
                }
            });
            let a = "price_1LnfByLgxGi7JA3GC49GOkRJ",
                i = !1,
                l = "price_1PuywMLgxGi7JA3G9F9qxCNr",
                s = ["price_1PqFiwLgxGi7JA3GBGrtEczG", "price_1PqFjlLgxGi7JA3GyHjJraPV", "price_1PqFjvLgxGi7JA3GqkIXCg96"],
                n = ["prod_QHeRbUODph0Qnk", "prod_PfsXrSTNjfI9RO", "prod_OlgfpT7JJNOYtw", "prod_MakjxDVwGdvoVK", "prod_NtlgdYiAMxIUwD", "prod_QskSrexOhYVHhJ", "prod_OqT3UM05zlYR3V"],
                o = ["prod_MakjxDVwGdvoVK", "prod_OlgfpT7JJNOYtw", "prod_NtlgdYiAMxIUwD", "prod_QskSrexOhYVHhJ", "prod_OqT3UM05zlYR3V", "prod_PVWIKnwi4YRVgm", "prod_PVVOGLWwc2Ih7r", "prod_PfsXrSTNjfI9RO"],
                d = ["free_tts", "prod_PgMnD7wruz8aUW", "prod_PgXHUmzjdFmuDS", "prod_Po6rCp6CXcKJJW"],
                u = !0,
                c = !1,
                m = "price_1MJ5PpLgxGi7JA3GO8um3Nux",
                p = "price_1MwNj4LgxGi7JA3GSJ7L0NDp",
                f = "price_1PYPf5LgxGi7JA3GuiSuCxJ8",
                x = 3,
                h = {
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
                _ = {
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
        1835: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return P
                }
            });
            var a = r(34583),
                i = r(78389),
                l = r.n(i),
                s = r(51976),
                n = r.n(s),
                o = r(78495),
                d = r(58214),
                u = r(78754),
                c = r(13969),
                m = r(32551);
            let p = l()(() => r.e(70685).then(r.bind(r, 70685)), {
                    loadableGenerated: {
                        webpack: () => [70685]
                    }
                }),
                f = l()(() => Promise.all([r.e(76085), r.e(5951)]).then(r.bind(r, 5951)), {
                    loadableGenerated: {
                        webpack: () => [5951]
                    }
                }),
                x = l()(() => Promise.all([r.e(34396), r.e(76085), r.e(55042)]).then(r.bind(r, 55042)), {
                    loadableGenerated: {
                        webpack: () => [55042]
                    }
                }),
                h = l()(() => r.e(47950).then(r.bind(r, 47950)), {
                    loadableGenerated: {
                        webpack: () => [47950]
                    }
                }),
                b = l()(() => Promise.all([r.e(86399), r.e(88014), r.e(75475)]).then(r.bind(r, 75475)), {
                    loadableGenerated: {
                        webpack: () => [75475]
                    }
                }),
                _ = l()(() => Promise.all([r.e(55176), r.e(98651)]).then(r.bind(r, 98651)), {
                    loadableGenerated: {
                        webpack: () => [98651]
                    }
                }),
                g = l()(() => Promise.all([r.e(34396), r.e(48127), r.e(89317), r.e(76085), r.e(55176), r.e(54918), r.e(62007), r.e(99245), r.e(49575)]).then(r.bind(r, 49575)), {
                    loadableGenerated: {
                        webpack: () => [49575]
                    }
                }),
                T = l()(() => Promise.all([r.e(76085), r.e(6179)]).then(r.bind(r, 6179)), {
                    loadableGenerated: {
                        webpack: () => [6179]
                    },
                    ssr: !1
                }),
                y = l()(() => Promise.all([r.e(86399), r.e(27910), r.e(30260)]).then(r.bind(r, 68890)), {
                    loadableGenerated: {
                        webpack: () => [68890]
                    }
                });
            var P = !0;
            t.default = e => {
                let {
                    completions: t = [],
                    preset: r,
                    locale: i = "en",
                    otherPresets: l
                } = e, s = (0, d.useRouter)(), {
                    t: P,
                    lang: w
                } = (0, u.Z)("tools"), {
                    user: S
                } = (0, m.aF)();
                return ((0, o.useEffect)(() => {
                    let e = JSON.parse(localStorage.getItem("favourites") || "[]");
                    e.includes(r.slug) || localStorage.setItem("favourites", JSON.stringify([...e, r.slug])), r.isAbsoluteURL && s.push(r.landingPageSlug)
                }, [r]), S && s.push("/presets/".concat(r.slug), "/presets/".concat(r.slug), {
                    locale: w
                }), r) ? (0, a.jsxs)("main", {
                    className: "bg-gray-100 dark:bg-slate-900",
                    children: [(0, a.jsx)(_, {
                        templateTitle: "en" === w ? "".concat(r.isFree ? "Free " : "").concat(r.title.includes("AI") ? "" : "AI ").concat(P(r.title)) : P(r.title),
                        description: "en" === w ? "".concat(P(r.description)).concat(r.isFree ? " Use it for Free." : "") : P(r.description),
                        image: "api/og-template?title=".concat(P(r.title), "&description=").concat(P(r.description))
                    }), (0, a.jsx)("div", {
                        className: "relative overflow-hidden bg-white dark:bg-slate-900",
                        children: (0, a.jsx)("div", {
                            className: "mx-auto",
                            children: (0, a.jsx)("div", {
                                className: "relative z-10 bg-white dark:bg-slate-900  lg:w-full ",
                                children: (0, a.jsx)(g, {
                                    preset: r
                                })
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: "bg-gray-100 px-5 py-20 dark:bg-slate-900",
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8",
                            children: [(0, a.jsx)("span", {
                                className: "text-lg font-semibold text-indigo-600",
                                children: P("Save hours of your time")
                            }), (0, a.jsx)("p", {
                                className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",
                                children: P("Harness AI to dramatically speed up your content creation")
                            }), (0, a.jsx)("p", {
                                className: "mx-auto mb-5 mt-5 max-w-prose text-xl text-gray-500 dark:text-slate-400",
                                children: P("Our AI-powered tool can generate high-quality, tailored content in seconds, not hours. Boost your productivity and focus on what really matters.")
                            })]
                        })
                    }), (0, a.jsxs)("section", {
                        className: "bg-white dark:bg-slate-800",
                        children: [(0, a.jsx)("div", {
                            className: "mx-auto max-w-md px-4 py-5 text-center sm:max-w-3xl sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8",
                            children: (0, a.jsx)("h2", {
                                className: "mt-2 text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl",
                                children: "en" === w ? "How to use the ".concat(r.title) : P("It's easy to get started")
                            })
                        }), (0, a.jsx)("div", {
                            className: "flex justify-center px-5 pt-10",
                            children: (0, a.jsx)(p, {
                                preset: r
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "relative mx-auto max-w-4xl md:px-8 xl:px-0",
                        children: [(0, a.jsx)("div", {
                            className: "pb-16 pt-10",
                            children: (0, a.jsxs)("div", {
                                className: "px-4 sm:px-6 md:px-0",
                                children: [(0, a.jsx)("div", {
                                    className: "mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8",
                                    children: "en" === w ? (0, a.jsxs)("h2", {
                                        className: "mb-2text-3xl text-h2 primary-600 mt-2 font-bold tracking-tight sm:text-4xl",
                                        children: [P(null == r ? void 0 : r.title).replace("Generator", ""), " Templates & Examples"]
                                    }) : (0, a.jsx)("h2", {
                                        className: "mb-2text-3xl text-h2 primary-600 mt-2 font-bold tracking-tight sm:text-4xl",
                                        children: P("Generated text by AI")
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "mt-5",
                                    children: (0, a.jsx)("ul", {
                                        className: "space-y-4",
                                        children: t.filter(e => null !== e.completion && "string" == typeof e.completion).map(e => (0, a.jsx)(b, {
                                            caption: {
                                                id: Number(e.id),
                                                text: e.completion,
                                                preset: e.preset || void 0
                                            },
                                            completion: {
                                                id: Number(e.id),
                                                completion: e.completion,
                                                preset: e.preset || "",
                                                user_prompt: e.user_prompt || "",
                                                request_body: e.request_body,
                                                prompt: "",
                                                user_id: "",
                                                response_data: {
                                                    usage: {
                                                        prompt_tokens: 0,
                                                        completion_tokens: 0,
                                                        total_tokens: 0
                                                    }
                                                },
                                                request: {
                                                    model: "",
                                                    messages: [],
                                                    temperature: 0,
                                                    max_tokens: 0
                                                }
                                            }
                                        }, e.id))
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "mb-16 sm:flex sm:justify-center",
                            children: (0, a.jsx)("div", {
                                className: "rounded-md shadow",
                                children: (0, a.jsx)(n(), {
                                    href: c.Ki ? "/login?preset=".concat(r.slug) : "/#pricing",
                                    className: "flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 md:px-10 md:py-4 md:text-lg",
                                    children: P(r.onlyForPaidPlans ? "Get started" : "Try it yourself for free")
                                })
                            })
                        })]
                    }), "en" === w && (0, a.jsx)(y, {}), (0, a.jsx)(h, {
                        presets: l
                    }), (0, a.jsx)(T, {}), (0, a.jsx)(f, {
                        preset: "templates"
                    }), (0, a.jsx)(x, {})]
                }) : null
            }
        }
    },
    function(e) {
        e.O(0, [49774, 92888, 40179], function() {
            return e(e.s = 63308)
        }), _N_E = e.O()
    }
]);