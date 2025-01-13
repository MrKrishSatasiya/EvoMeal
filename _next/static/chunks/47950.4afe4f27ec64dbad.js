"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47950], {
        47950: function(e, t, s) {
            s.r(t), s.d(t, {
                default: function() {
                    return OtherFeatures
                }
            });
            var r = s(34583),
                a = s(75336),
                l = s(51976),
                n = s.n(l),
                i = s(78754),
                c = s(48586);

            function OtherFeatures(e) {
                let {
                    presets: t
                } = e, {
                    t: s
                } = (0, i.Z)("tools");
                return (0, r.jsx)("div", {
                    className: "relative bg-white py-16 dark:bg-slate-900 sm:py-24 lg:py-32",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8",
                        children: [(0, r.jsx)("h2", {
                            className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",
                            children: s("Check out these other templates")
                        }), (0, r.jsx)("div", {
                            className: "mt-12",
                            children: (0, r.jsx)("div", {
                                className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
                                children: t.map((e, t) => (0, r.jsx)("div", {
                                    className: "cursor-pointer pt-6",
                                    children: (0, r.jsx)(n(), {
                                        href: e.isAbsoluteURL ? e.landingPageSlug || e.slug : "/templates/".concat(e.slug),
                                        passHref: !0,
                                        legacyBehavior: !0,
                                        children: (0, r.jsx)("div", {
                                            className: "flow-root rounded-lg bg-gray-50 px-6 pb-8 dark:bg-slate-800",
                                            children: (0, r.jsxs)("div", {
                                                className: "-mt-6",
                                                children: [(0, r.jsx)("div", {
                                                    children: (0, r.jsx)("span", {
                                                        className: (0, c.Z)(e.iconBackground, e.iconForeground, "inline-flex rounded-lg p-3 dark:bg-slate-700"),
                                                        children: (0, r.jsx)(a.Z, {
                                                            className: "h-6 w-6 ",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                }), (0, r.jsx)("p", {
                                                    className: "mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-slate-200",
                                                    children: s(e.title)
                                                }), (0, r.jsx)("p", {
                                                    className: "mt-5 text-base text-gray-500 dark:text-slate-400",
                                                    children: s(e.description)
                                                })]
                                            })
                                        })
                                    })
                                }, t))
                            })
                        })]
                    })
                })
            }
        },
        75336: function(e, t, s) {
            var r = s(78495);
            let a = r.forwardRef(function(e, t) {
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                }))
            });
            t.Z = a
        }
    }
]);