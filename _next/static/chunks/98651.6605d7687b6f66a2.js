(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98651, 29453, 692, 13992], {
        77668: function(e, t, a) {
            e.exports = a(22508)
        },
        98651: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return Seo
                }
            });
            var n = a(34583),
                i = a(77668),
                l = a.n(i),
                o = a(58214),
                s = a(29453);
            let r = {
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
                    a = { ...r,
                        ...e
                    };
                a.title = e.templateTitle ? "".concat(e.templateTitle, " | ").concat(a.siteName) : a.title;
                let i = t.asPath.split("?")[0].replace(/\/$/, ""),
                    p = "".concat(a.url).concat("en" !== t.locale ? "/".concat(t.locale) : "").concat(i);
                return (0, n.jsxs)(l(), {
                    children: [(0, n.jsx)("title", {
                        children: a.title
                    }), (0, n.jsx)("meta", {
                        name: "robots",
                        content: a.robots
                    }), (0, n.jsx)("meta", {
                        content: a.description,
                        name: "description"
                    }), (0, n.jsx)("link", {
                        rel: "canonical",
                        href: p
                    }), (0, n.jsx)("meta", {
                        property: "og:type",
                        content: a.type
                    }), (0, n.jsx)("meta", {
                        property: "og:site_name",
                        content: a.siteName
                    }), (0, n.jsx)("meta", {
                        property: "og:description",
                        content: a.description
                    }), (0, n.jsx)("meta", {
                        property: "og:title",
                        content: a.title
                    }), (0, n.jsx)("meta", {
                        name: "image",
                        property: "og:image",
                        content: a.image
                    }), (0, n.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, n.jsx)("meta", {
                        name: "twitter:site",
                        content: "@easy_peasy_ai"
                    }), (0, n.jsx)("meta", {
                        name: "twitter:title",
                        content: a.title
                    }), (0, n.jsx)("meta", {
                        name: "twitter:description",
                        content: a.description
                    }), (0, n.jsx)("meta", {
                        name: "twitter:image",
                        content: a.image
                    }), a.date && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("meta", {
                            property: "article:published_time",
                            content: a.date
                        }), (0, n.jsx)("meta", {
                            name: "publish_date",
                            property: "og:publish_date",
                            content: a.date
                        }), (0, n.jsx)("meta", {
                            name: "author",
                            property: "article:author",
                            content: "Theodorus Clarence"
                        })]
                    }), c.map(e => (0, n.jsx)("link", { ...e
                    }, e.href)), (0, n.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#ffffff"
                    }), (0, n.jsx)("meta", {
                        name: "msapplication-TileImage",
                        content: "/favicon/ms-icon-144x144.png"
                    }), (0, n.jsx)("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }), !p.includes("blog/") && !p.includes("images/") && s.V.map(e => "en" === e.value ? (0, n.jsx)("link", {
                        rel: "alternate",
                        href: "".concat(a.url).concat("/" === t.asPath ? "" : t.asPath),
                        hrefLang: "x-default"
                    }, e.value) : (0, n.jsx)("link", {
                        rel: "alternate",
                        href: "".concat(a.url, "/").concat(e.value).concat("/" === t.asPath ? "" : t.asPath),
                        hrefLang: e.value
                    }, e.value))]
                })
            }
            let c = [{
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
        29453: function(e, t, a) {
            "use strict";
            a.d(t, {
                $: function() {
                    return LanguageSelector
                },
                V: function() {
                    return p
                }
            });
            var n = a(34583),
                i = a(83321),
                l = a(80540),
                o = a(89842),
                s = a(58214),
                r = a(78754),
                c = a(48586);
            let p = [{
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
                    lang: a
                } = (0, r.Z)("common"), m = (0, s.useRouter)();
                return (0, n.jsxs)(i.R, {
                    as: "div",
                    value: p.find(e => e.value === a),
                    onChange: e => {
                        o.Z.set("NEXT_LOCALE", e.value, {
                            expires: 365
                        }), m.push(m.asPath, m.asPath, {
                            locale: e.value
                        })
                    },
                    ...e,
                    children: [(0, n.jsx)(i.R.Label, {
                        className: "sr-only",
                        children: "Theme"
                    }), (0, n.jsx)(i.R.Button, {
                        className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                        children: (0, n.jsx)(l.Z, {
                            className: " h-4 w-4 fill-primary-400"
                        })
                    }), (0, n.jsx)(i.R.Options, {
                        className: "absolute left-1/2 top-full z-50 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                        children: p.map(e => (0, n.jsx)(i.R.Option, {
                            value: e,
                            className: t => {
                                let {
                                    active: n,
                                    selected: i
                                } = t;
                                return (0, c.Z)("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                    "text-primary-500": a === e.value,
                                    "text-slate-900 dark:text-white": n && a !== e.value,
                                    "text-slate-700 dark:text-slate-400": !n && a !== e.value,
                                    "bg-slate-100 dark:bg-slate-900/40": n
                                })
                            },
                            children: a => {
                                let {
                                    selected: i
                                } = a;
                                return (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsx)("div", {
                                        className: "ml-3",
                                        children: t(e.name)
                                    })
                                })
                            }
                        }, e.value))
                    })]
                })
            }
        }
    }
]);