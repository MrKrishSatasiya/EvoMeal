"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96493], {
        40071: function(e, t, a) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = a(78495),
                s = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                i = n.useState,
                l = n.useEffect,
                o = n.useLayoutEffect,
                c = n.useDebugValue;

            function r(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var a = t();
                    return !s(e, a)
                } catch (e) {
                    return !0
                }
            }
            var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var a = t(),
                    n = i({
                        inst: {
                            value: a,
                            getSnapshot: t
                        }
                    }),
                    s = n[0].inst,
                    d = n[1];
                return o(function() {
                    s.value = a, s.getSnapshot = t, r(s) && d({
                        inst: s
                    })
                }, [e, a, t]), l(function() {
                    return r(s) && d({
                        inst: s
                    }), e(function() {
                        r(s) && d({
                            inst: s
                        })
                    })
                }, [e]), c(a), a
            };
            t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d
        },
        86192: function(e, t, a) {
            e.exports = a(40071)
        },
        63753: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a(34583),
                s = a(8929),
                i = a(78495),
                l = a(89793),
                o = a(34858),
                c = a(78754),
                d = a(54091),
                u = a(94684);
            let CodeBlock = e => {
                    let {
                        language: t,
                        value: a
                    } = e, {
                        t: s
                    } = (0, c.Z)("common"), [l, o] = (0, i.useState)(s("Copy")), [m, h] = (0, i.useState)(() => {
                        let e = localStorage.getItem("theme");
                        return "dark" !== e && ("theme" in localStorage && "system" !== e || !window.matchMedia("(prefers-color-scheme: dark)").matches) ? "light" : "dark"
                    });
                    return (0, n.jsxs)("div", {
                        className: "relative text-[16px]",
                        children: [(0, n.jsx)(d.Z, {
                            language: t,
                            style: "light" === m ? u.Yn : u.pJ,
                            customStyle: {
                                backgroundColor: "dark" === m ? "#293449" : "auto"
                            },
                            children: a
                        }), (0, n.jsx)("button", {
                            className: "absolute right-2 top-2 rounded bg-primary-500 px-2 py-1 text-sm text-white hover:bg-primary-700 focus:outline-none",
                            onClick: () => {
                                navigator.clipboard.writeText(a).then(() => {
                                    o(s("Copied!")), setTimeout(() => {
                                        o(s("Copy"))
                                    }, 2e3)
                                })
                            },
                            children: l
                        })]
                    })
                },
                m = (0, i.memo)(e => {
                    let {
                        children: t
                    } = e;
                    return (0, n.jsx)("ul", {
                        className: "list-outside list-disc space-y-2 pl-5 marker:text-primary-600",
                        children: t
                    })
                });
            m.displayName = "CustomList";
            let h = (0, i.memo)(e => {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("li", {
                    children: (0, n.jsx)("p", {
                        className: "my-0",
                        children: t
                    })
                })
            });
            h.displayName = "CustomListItem";
            let p = (0, i.memo)(e => {
                let {
                    href: t,
                    children: a
                } = e;
                return (0, n.jsx)("a", {
                    href: t,
                    className: "text-primary-600 underline hover:no-underline",
                    target: "_blank",
                    rel: "noreferrer",
                    children: a
                })
            });
            p.displayName = "CustomLink";
            let downloadImage = async e => {
                    try {
                        let t = await fetch(e),
                            a = await t.blob(),
                            n = window.URL.createObjectURL(a),
                            s = document.createElement("a");
                        s.href = n, s.download = "image.".concat(e.split(".").pop() || "png"), document.body.appendChild(s), s.click(), document.body.removeChild(s), window.URL.revokeObjectURL(n)
                    } catch (t) {
                        console.error("Error downloading image:", t), window.open(e, "_blank")
                    }
                },
                x = (0, i.memo)(e => {
                    let {
                        src: t,
                        alt: a,
                        onImageEdit: l
                    } = e, o = (0, i.useCallback)(async e => {
                        e.preventDefault(), t && await downloadImage(t)
                    }, [t]);
                    return (0, n.jsxs)("div", {
                        className: "relative inline-block",
                        children: [(0, n.jsx)("img", {
                            src: t,
                            alt: a,
                            className: "h-auto max-w-full rounded-lg"
                        }), t && (0, n.jsx)("div", {
                            className: "absolute right-2 top-2 flex space-x-2",
                            children: (0, n.jsx)("a", {
                                href: t,
                                download: "image.".concat(t.split(".").pop() || "png"),
                                className: "rounded-full bg-white/80 p-2 shadow-sm hover:bg-white",
                                title: "Download image",
                                onClick: o,
                                children: (0, n.jsx)(s.Z, {
                                    className: "h-5 w-5 text-gray-700"
                                })
                            })
                        })]
                    })
                });
            x.displayName = "ImageWithDownload";
            let g = (0, i.memo)(e => {
                let {
                    message: t,
                    onImageEdit: a,
                    inline: s = !1
                } = e, c = (0, i.useMemo)(() => ({
                    code(e) {
                        let {
                            node: t,
                            inline: a,
                            className: s,
                            children: i,
                            ...l
                        } = e, o = /language-(\w+)/.exec(s || "");
                        return !a && o ? (0, n.jsx)(CodeBlock, {
                            language: o[1],
                            value: String(i).replace(/\n$/, ""),
                            ...l
                        }, Math.random()) : (0, n.jsx)("code", {
                            className: s,
                            ...l,
                            children: i
                        })
                    },
                    img: e => {
                        let {
                            src: t,
                            alt: s
                        } = e;
                        return (0, n.jsx)(x, {
                            src: t,
                            alt: s,
                            onImageEdit: a
                        })
                    },
                    ul: m,
                    ol: m,
                    li: h,
                    a: p
                }), [a]);
                return s ? (0, n.jsx)(l.D, {
                    remarkPlugins: [o.Z],
                    components: c,
                    unwrapDisallowed: !0,
                    disallowedElements: ["p", "div"],
                    children: t
                }) : (0, n.jsx)("div", {
                    className: "",
                    children: (0, n.jsx)(l.D, {
                        remarkPlugins: [o.Z],
                        components: c,
                        children: t
                    })
                })
            }, (e, t) => e.message === t.message);
            g.displayName = "MarkdownBlock";
            var f = g
        },
        61951: function(e, t, a) {
            var n = a(34583),
                s = a(78754),
                i = a(78495),
                l = a(70197),
                o = a(13969),
                c = a(25038),
                d = a(32551),
                u = a(75822),
                m = a(48893);
            t.Z = (0, i.memo)(e => {
                let {
                    isVisible: t = !1,
                    isTTS: a = !1,
                    isImages: h = !1,
                    onClose: p = () => {}
                } = e, x = (0, c.e)(), [g, f] = (0, i.useState)(t), [v, b] = (0, i.useState)([]), [y, w] = (0, l.Z)("country", "US"), {
                    isFreePlan: j
                } = (0, d.aF)(), {
                    t: k
                } = (0, s.Z)("pricing");
                (0, i.useEffect)(() => {
                    if (a) getProductsWithPricesInArray(o.HA).then(e => {
                        b(e)
                    });
                    else {
                        let e = o.oZ.filter(e => "prod_OqT3UM05zlYR3V" !== e);
                        getProductsWithPricesInArray(e).then(e => {
                            b(e)
                        })
                    }
                }, []);
                let getProductsWithPricesInArray = async e => {
                    let {
                        data: t,
                        error: a
                    } = await x.from("products").select("*, prices(*)").in("id", e).eq("prices.active", !0).order("metadata->index").order("unit_amount", {
                        foreignTable: "prices"
                    });
                    if (a) throw console.log(a.message), a;
                    return t || []
                };
                return (0, n.jsx)(u.Z, {
                    showModal: g,
                    onClose: () => {
                        f(!1), p()
                    },
                    className: "my-8 w-[90%] overflow-y-auto sm:my-16 sm:max-w-[88%] 2xl:max-w-6xl",
                    children: (0, n.jsx)(m.Z, {
                        products: v.filter(e => {
                            var t;
                            return !(null === (t = e.name) || void 0 === t ? void 0 : t.includes("Free"))
                        }),
                        isUpgrade: !0
                    })
                })
            })
        },
        31979: function(e, t, a) {
            var n = a(34583),
                s = a(10298),
                i = a(88014),
                l = a(78754),
                o = a(78495),
                c = a(36407),
                d = a(63753);
            let handleNewLines = e => {
                let t = e.split("\n");
                return t.map((e, a) => (0, n.jsxs)(o.Fragment, {
                    children: [e, a !== t.length - 1 && (0, n.jsx)("br", {})]
                }, a))
            };
            t.Z = e => {
                let {
                    caption: t,
                    completion: a
                } = e, {
                    t: u
                } = (0, l.Z)("common"), [m, h] = (0, o.useState)(!1), p = (null == a ? void 0 : a.preset) === "grammar-corrector" || (null == t ? void 0 : t.preset) === "grammar-corrector" || (null == a ? void 0 : a.preset) === "paraphrasing-tool" || (null == t ? void 0 : t.preset) === "paraphrasing-tool" || (null == a ? void 0 : a.preset) === "native-speaker" || (null == t ? void 0 : t.preset) === "native-speaker";
                return (0, n.jsx)("li", {
                    className: "messages relative bg-white px-4 py-6 shadow dark:bg-slate-800 sm:rounded-lg sm:p-6",
                    children: (0, n.jsxs)("article", {
                        "aria-labelledby": "caption-title-" + t.id,
                        children: [(0, n.jsx)("div", {
                            className: "message text-md mt-2 space-y-4 text-gray-700 dark:text-slate-400",
                            children: p ? (0, n.jsx)(n.Fragment, {
                                children: ((e, t) => {
                                    if (!t) return e;
                                    let a = i.NV(t, e),
                                        s = a.map((e, t) => e.added ? (0, n.jsx)("span", {
                                            className: "bg-green-100 dark:bg-green-900",
                                            children: handleNewLines(e.value)
                                        }, t) : e.removed ? (0, n.jsx)("span", {
                                            className: "bg-red-100 dark:bg-red-900",
                                            children: handleNewLines(e.value)
                                        }, t) : (0, n.jsx)("span", {
                                            children: handleNewLines(e.value)
                                        }, t));
                                    return (0, n.jsx)(n.Fragment, {
                                        children: s
                                    })
                                })(t.text, (null == t ? void 0 : t.prompt) || (null == a ? void 0 : a.user_prompt))
                            }) : (0, n.jsx)(d.default, {
                                message: t.text.replace(/\n/g, "  \n").trim()
                            })
                        }), (0, n.jsx)("div", {
                            className: "flex justify-end mt-5",
                            children: (0, n.jsx)("span", {
                                className: "inline-flex items-center text-sm",
                                children: (0, n.jsxs)("button", {
                                    type: "button",
                                    className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500 dark:text-slate-500 hover:dark:text-slate-300",
                                    onClick: () => {
                                        (0, c.T)(t.text).then(() => {
                                            h(!0), setTimeout(() => {
                                                h(!1)
                                            }, 1500)
                                        }).catch(e => {
                                            console.log(e)
                                        })
                                    },
                                    children: [(0, n.jsx)(s.Z, {
                                        className: "h-5 w-5",
                                        "aria-hidden": "true"
                                    }), (0, n.jsx)("span", {
                                        className: "font-medium text-gray-900 dark:text-slate-500 hover:dark:text-slate-300",
                                        children: u(m ? "Copied!" : "Copy")
                                    })]
                                })
                            })
                        })]
                    })
                }, t.id)
            }
        },
        92583: function(e, t, a) {
            a.a(e, async function(e, n) {
                try {
                    a.r(t);
                    var s = a(34583),
                        i = a(75336),
                        l = a(56747),
                        o = a(41705),
                        c = a(84611),
                        d = a(58214),
                        u = a(78754),
                        m = a(78495),
                        h = a(42840),
                        p = a(53060),
                        x = a(70197),
                        g = a(61140),
                        f = a(48586),
                        v = a(13969),
                        b = a(25907),
                        y = a(6045),
                        w = a(31411),
                        j = a(77959),
                        k = a(29868),
                        N = a(421),
                        C = a(1339),
                        S = a(56417),
                        Z = a(16950),
                        R = a(61951),
                        M = a(31979),
                        E = e([g]);
                    g = (E.then ? (await E)() : E)[0];
                    let O = (0, g.iw)("cl100k_base");
                    t.default = e => {
                        var t;
                        let {
                            preset: a
                        } = e, {
                            t: n,
                            lang: g
                        } = (0, u.Z)("tools"), [E, T] = (0, m.useState)((null == a ? void 0 : a.outputs) || 1), [L, P] = (0, m.useState)((null == a ? void 0 : a.outputs) || 5), [D, U] = (0, x.Z)("language", (0, w.v)(g) || "English"), [A, I] = (0, m.useState)([]), V = (0, m.useRef)(null), [G, B] = (0, m.useState)(!1), [_, z] = (0, x.Z)("generatedCaptions-".concat(null == a ? void 0 : a.slug, "-").concat(new Date().toISOString().split("T")[0]), 0), [H, W] = (0, m.useState)(() => {
                            var e;
                            let t = new Map;
                            return null == a || null === (e = a.fields) || void 0 === e || e.forEach(e => {
                                "length" === e.name ? t.set(e.name, "Long") : t.set(e.name, e.initialValue || "")
                            }), t
                        }), q = (0, d.useRouter)(), {
                            slug: K
                        } = q.query, Y = { ...a,
                            fields: [...null == a ? void 0 : a.fields, {
                                label: "Use advanced AI model?",
                                name: "shouldUseGPT4",
                                type: "checkbox",
                                placeholder: "example: true",
                                initialValue: !1
                            }]
                        }, $ = (0, c.D)(e => y.ZP.post("/api/public-generate", e), {
                            retry: 2
                        });
                        async function submit(e) {
                            if (e.preventDefault(), Number(_) >= 1) {
                                p.Am.error(() => (0, s.jsxs)("div", {
                                    children: [n("You have reached the maximum number of free generations. Please create a free account to generate more."), (0, s.jsx)(S.default, {
                                        className: "mt-5",
                                        variant: "dark",
                                        href: "/login#auth-sign-up",
                                        children: n("Sign up for free")
                                    })]
                                }));
                                return
                            }
                            try {
                                H.set("preset", K), H.set("outputs", E), H.set("language", D);
                                let e = await $.mutateAsync(Object.fromEntries(H));
                                z(Number(_) + E), I(t => [...e.data.map(e => ({ ...e,
                                    prompt: H.get("keywords"),
                                    preset: K
                                })), ...t]), V.current && V.current.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (e) {
                                var t, a;
                                (null == e ? void 0 : null === (a = e.response) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.error) ? (p.Am.error(e.response.data.error), e.response.data.error.includes("Daily limit reached") && B(!0)) : p.Am.error("Something went wrong. Please try again later. If the error persists please contact us at support@easy-peasy.ai or via chat.")
                            }
                        }
                        return (0, s.jsxs)("div", {
                            className: "m-auto mb-10 w-full max-w-3xl",
                            children: [G && (0, s.jsx)(R.Z, {
                                isVisible: G,
                                onClose: () => B(!1)
                            }), (0, s.jsxs)("form", {
                                onSubmit: submit,
                                className: "mx-auto w-full max-w-3xl space-y-8 divide-y divide-gray-200 bg-white text-left shadow dark:divide-slate-200/5  dark:bg-slate-800 sm:overflow-hidden sm:rounded-md",
                                children: [(0, s.jsx)("div", {
                                    className: "space-y-8 divide-y divide-gray-200 px-4 py-5 dark:divide-slate-200/5 sm:p-6",
                                    children: (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("div", {
                                            className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-6 text-left sm:grid-cols-6",
                                            children: null == Y ? void 0 : null === (t = Y.fields) || void 0 === t ? void 0 : t.map(e => (0, s.jsxs)("div", {
                                                className: "relative sm:col-span-6",
                                                children: ["shouldUseGPT4" === e.name ? (0, s.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    onClick: () => {
                                                        B(!0)
                                                    },
                                                    children: [(0, s.jsxs)("label", {
                                                        htmlFor: e.name,
                                                        className: "mr-1 flex text-sm font-medium text-gray-700 dark:text-slate-400",
                                                        children: [(0, s.jsx)(i.Z, {
                                                            className: "mr-1 h-5 w-5 text-primary-500"
                                                        }), n(e.label), " ", (0, s.jsx)("span", {
                                                            className: "ml-1 rounded-full bg-primary-500 px-1.5 py-0.5 align-middle text-xs text-white",
                                                            children: n("Best Results")
                                                        })]
                                                    }), (0, s.jsx)("span", {
                                                        className: "mt-2 text-xs text-gray-500",
                                                        children: n("Enable this feature to leverage our cutting-edge AI technology for superior performance and more accurate results! Powered by GPT-4.")
                                                    })]
                                                }) : (0, s.jsxs)("label", {
                                                    htmlFor: e.name,
                                                    className: "flex text-sm font-medium text-gray-700 dark:text-slate-400",
                                                    children: [n(e.label), e.enableMicrophone && (0, s.jsx)(Z.Z, {
                                                        setTranscription: t => {
                                                            W(a => new Map(a.set(e.name, a.get(e.name) + t)))
                                                        }
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: (0, f.Z)("radio" !== e.type && "checkbox" !== e.type && "file" !== e.type ? "rounded-md shadow-sm" : "", " mt-1 flex"),
                                                    children: ["textarea" === e.type && (0, s.jsxs)(s.Fragment, {
                                                        children: [(0, s.jsx)(h.Z, {
                                                            rows: 4,
                                                            name: e.name,
                                                            maxRows: 25,
                                                            minRows: e.minRows || 4,
                                                            id: e.name,
                                                            className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white sm:text-sm",
                                                            placeholder: "en" === g ? n(e.placeholder) : "",
                                                            value: H.get(e.name),
                                                            onChange: t => {
                                                                let a = Number(e.limit) / 5,
                                                                    n = O.encode(t.target.value);
                                                                void 0 === e.limit || n.length <= Number(a) ? W(a => new Map(a.set(e.name, t.target.value))) : W(t => new Map(t.set(e.name, new TextDecoder().decode(O.decode(n.slice(0, a))))))
                                                            }
                                                        }), e.limit && (0, s.jsxs)("span", {
                                                            className: "absolute right-0 top-0 text-xs text-gray-400 dark:text-slate-600",
                                                            children: [5 * O.encode(H.get(e.name) || "").length, "/", e.limit]
                                                        })]
                                                    }), ("text" === e.type || "brand_voice" === e.type) && (0, s.jsx)("input", {
                                                        type: "text",
                                                        value: H.get(e.name),
                                                        name: e.name,
                                                        id: e.name,
                                                        onChange: t => W(a => new Map(a.set(e.name, t.target.value))),
                                                        placeholder: "en" === g ? n(e.placeholder) : "",
                                                        className: "block w-full min-w-0 flex-1 rounded border-gray-300 focus:border-primary-500 focus:ring-primary-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white sm:text-sm"
                                                    }), "select" === e.type && (0, s.jsx)(k.Z, {
                                                        onChange: t => W(a => new Map(a.set(e.name, t))),
                                                        label: e.name,
                                                        options: e.options,
                                                        value: H.get(e.name)
                                                    }), "checkbox" === e.type && (0, s.jsx)(N.default, {
                                                        initialValue: e.initialValue,
                                                        cannotBeToggled: "shouldUseGPT4" === e.name,
                                                        onChange: t => {
                                                            if ("shouldUseGPT4" === e.name) {
                                                                B(!0);
                                                                return
                                                            }
                                                            W(a => new Map(a.set(e.name, t)))
                                                        }
                                                    }), "radio" === e.type && (0, s.jsx)(j.Z, {
                                                        options: e.radioOptions,
                                                        onChange: t => W(a => new Map(a.set(e.name, t)))
                                                    })]
                                                })]
                                            }, e.name))
                                        }), (0, s.jsx)("div", {
                                            className: "my-3 w-fit max-w-[450px] rounded bg-indigo-500/10 px-3 py-3 text-sm text-primary-600 ring-1 ring-inset ring-indigo-500/20",
                                            children: (0, s.jsxs)("div", {
                                                children: [(0, s.jsx)("h6", {
                                                    className: "mb-1 font-semibold",
                                                    children: n("Get access to more features by upgrading your plan.")
                                                }), (0, s.jsxs)("div", {
                                                    className: "mt-2 flex w-full items-start justify-start",
                                                    children: [(0, s.jsxs)("ul", {
                                                        className: "flex w-1/2 flex-wrap items-center text-xs",
                                                        children: [(0, s.jsxs)("li", {
                                                            className: "mr-4 flex items-center space-x-1",
                                                            children: [(0, s.jsx)(o.Z, {
                                                                className: "h-5 w-5 flex-shrink-0 text-green-500",
                                                                "aria-hidden": "true"
                                                            }), (0, s.jsx)("span", {
                                                                children: n("Superior performance")
                                                            })]
                                                        }), (0, s.jsxs)("li", {
                                                            className: "mr-4 flex   items-center space-x-1",
                                                            children: [(0, s.jsx)(o.Z, {
                                                                className: "h-5 w-5 flex-shrink-0 text-green-500",
                                                                "aria-hidden": "true"
                                                            }), (0, s.jsx)("span", {
                                                                children: n("More customization options")
                                                            })]
                                                        })]
                                                    }), (0, s.jsxs)("ul", {
                                                        className: "mb-3 flex w-1/2 flex-wrap items-center text-xs",
                                                        children: [(0, s.jsxs)("li", {
                                                            className: "mr-4 flex  items-center space-x-1",
                                                            children: [(0, s.jsx)(o.Z, {
                                                                className: "h-5 w-5 flex-shrink-0 text-green-500",
                                                                "aria-hidden": "true"
                                                            }), (0, s.jsx)("span", {
                                                                children: n("Unlimited generations")
                                                            })]
                                                        }), (0, s.jsxs)("li", {
                                                            className: "mr-4 flex   items-center space-x-1",
                                                            children: [(0, s.jsx)(o.Z, {
                                                                className: "h-5 w-5 flex-shrink-0 text-green-500",
                                                                "aria-hidden": "true"
                                                            }), (0, s.jsx)("span", {
                                                                children: n("Faster generation")
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, s.jsx)("a", {
                                                    className: "mt-2 cursor-pointer font-semibold text-primary-500 underline hover:text-primary-600",
                                                    onClick: () => B(!0),
                                                    children: n("Upgrade")
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "bg-gray-50 px-4 py-3 text-right dark:bg-slate-900/50 sm:px-6 lg:flex lg:justify-between",
                                    children: [(0, s.jsx)("div", {
                                        className: "hidden lg:block",
                                        children: (0, s.jsxs)(C.Z, {
                                            variant: "light",
                                            onClick: () => {
                                                var e;
                                                console.log("clearInputs");
                                                let t = new Map;
                                                null == a || null === (e = a.fields) || void 0 === e || e.forEach(e => {
                                                    "length" === e.name ? t.set(e.name, H.get(e.name)) : t.set(e.name, "")
                                                }), W(t)
                                            },
                                            children: [(0, s.jsx)(l.Z, {
                                                className: "h-4 w-4"
                                            }), " ", (0, s.jsx)("span", {
                                                children: n("Clear inputs")
                                            })]
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-wrap sm:flex-nowrap sm:justify-end ",
                                        children: [(null == a ? void 0 : a.outputs) !== 1 && (0, s.jsxs)("div", {
                                            className: "mr-5 flex items-center",
                                            children: [(0, s.jsx)("label", {
                                                htmlFor: "outputs",
                                                className: "mr-2 flex-nowrap text-sm font-medium text-gray-400 ",
                                                children: n("outputs")
                                            }), (0, s.jsx)("select", {
                                                id: "outputs",
                                                name: "outputs",
                                                className: "block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-slate-400 sm:text-sm",
                                                value: E,
                                                onChange: e => T(Number(e.target.value)),
                                                children: Array.from(Array(L).keys()).map(e => (0, s.jsx)("option", {
                                                    value: e + 1,
                                                    children: e + 1
                                                }, e))
                                            })]
                                        }), (null == a ? void 0 : a.hideLanguageSelector) !== !0 && (0, s.jsxs)("div", {
                                            className: "mr-5 flex items-center",
                                            children: [(0, s.jsx)("label", {
                                                htmlFor: "language",
                                                className: "mr-2 hidden flex-nowrap text-sm font-medium text-gray-400 sm:block",
                                                children: n("language")
                                            }), (0, s.jsx)("select", {
                                                id: "language",
                                                name: "language",
                                                className: "block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-slate-400 sm:text-sm",
                                                defaultValue: "en",
                                                value: D,
                                                onChange: e => {
                                                    let t = e.target.value;
                                                    U(t), "English" !== t ? (T(1), P(1)) : P((null == a ? void 0 : a.outputs) || 5)
                                                },
                                                children: Object.entries(b.M).map(e => {
                                                    let [t, a] = e;
                                                    return (0, s.jsx)("option", {
                                                        value: a,
                                                        children: n(a)
                                                    }, t)
                                                })
                                            })]
                                        }), Number(_) >= 1 ? (0, s.jsx)(C.Z, {
                                            className: "mt-3 w-full justify-center text-center sm:mt-0 sm:w-auto",
                                            variant: "dark",
                                            onClick: () => B(!0),
                                            children: (0, s.jsx)("span", {
                                                children: n("Upgrade")
                                            })
                                        }) : (0, s.jsx)(C.Z, {
                                            className: "mt-3 w-full justify-center text-center sm:mt-0 sm:w-auto",
                                            type: "submit",
                                            isLoading: $.isLoading,
                                            disabled: $.isLoading || "" === H.get("keywords"),
                                            variant: "dark",
                                            children: (0, s.jsxs)("span", {
                                                children: ["\uD83E\uDD16 ", n("Generate")]
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "relative mt-5 max-w-3xl sm:col-span-6",
                                ref: V,
                                children: [Number(_) >= 1 && (0, s.jsx)("div", {
                                    className: "my-5 font-medium text-primary-500",
                                    children: n(v.Y ? "You have reached the maximum number of free generations. Please create a free account to generate more." : "You have reached the maximum number of free generations. Please upgrade to generate more.")
                                }), A.length > 0 && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsxs)("h3", {
                                        className: "block text-lg font-medium text-gray-700 dark:text-slate-400",
                                        children: [n("Generated Outputs"), " ", (0, s.jsxs)("span", {
                                            className: "text-gray-500 dark:text-slate-500",
                                            children: ["[", _, "/", 1, " ", n("Free Generations per day"), "]"]
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "mt-5 text-left",
                                        children: (0, s.jsx)("ul", {
                                            className: "space-y-4",
                                            children: A.map(e => (0, s.jsx)(M.Z, {
                                                caption: e
                                            }, e.id))
                                        })
                                    })]
                                })]
                            })]
                        })
                    }, n()
                } catch (e) {
                    n(e)
                }
            })
        },
        21759: function(e, t, a) {
            var n = a(34583);
            a(78495), t.Z = e => {
                let {
                    className: t = "-ml-1 mr-3 h-8 animate-spin text-primary-500"
                } = e;
                return (0, n.jsxs)("svg", {
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0, n.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                })
            }
        },
        75822: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return Modal
                }
            });
            var n = a(34583),
                s = a(88738),
                i = a(91654),
                l = a(48618),
                o = a(78495),
                c = a(48586);

            function Modal(e) {
                let {
                    showModal: t,
                    onClose: a,
                    children: d,
                    className: u,
                    doNotCloseOnOverlayClick: m = !1
                } = e, [h, p] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    p(t)
                }, [t]), (0, n.jsx)(s.u.Root, {
                    show: h,
                    as: o.Fragment,
                    children: (0, n.jsxs)(i.V, {
                        as: "div",
                        className: "relative z-[100]",
                        onClose: m ? () => {} : () => {
                            p(!1), a()
                        },
                        children: [(0, n.jsx)(s.u.Child, {
                            as: o.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, n.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), (0, n.jsx)("div", {
                            className: "fixed inset-0 z-50 overflow-y-auto",
                            children: (0, n.jsx)("div", {
                                className: "flex min-h-full items-end justify-center text-center sm:items-center sm:p-0",
                                children: (0, n.jsx)(s.u.Child, {
                                    as: o.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                                    children: (0, n.jsxs)(i.V.Panel, {
                                        className: (0, c.Z)("relative min-h-[full] w-[90%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-slate-900 sm:w-full sm:max-w-2xl", u),
                                        children: [(0, n.jsx)("div", {
                                            className: "absolute right-0 top-0  z-50 block pr-4 pt-4",
                                            children: (0, n.jsxs)("button", {
                                                type: "button",
                                                className: "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-slate-700",
                                                onClick: () => {
                                                    p(!1), a()
                                                },
                                                children: [(0, n.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }), (0, n.jsx)(l.Z, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "",
                                            children: d
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
        },
        77959: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return RadioCards
                }
            });
            var n = a(34583),
                s = a(49513),
                i = a(78754),
                l = a(78495),
                o = a(48586);

            function RadioCards(e) {
                let {
                    options: t,
                    onChange: a
                } = e, c = t.find(e => e.checked), {
                    t: d
                } = (0, i.Z)("tools"), [u, m] = (0, l.useState)(c);
                return (0, n.jsx)("div", {
                    children: (0, n.jsx)(s.E, {
                        value: u,
                        onChange: e => {
                            e.checked = !0, m(e), a(e.name)
                        },
                        className: "mt-2",
                        children: (0, n.jsx)("div", {
                            className: "grid grid-cols-3 gap-3 sm:grid-cols-3",
                            children: t.map(e => (0, n.jsx)(s.E.Option, {
                                value: e,
                                className: t => {
                                    let {
                                        active: a,
                                        checked: n
                                    } = t;
                                    return (0, o.Z)(a ? "ring-1 ring-primary-500 ring-offset-1" : "", (null == u ? void 0 : u.checked) && (null == u ? void 0 : u.name) === e.name ? "border-transparent bg-primary-600 text-white hover:bg-primary-700 dark:text-slate-300" : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-white/5 dark:bg-slate-700/50 dark:text-slate-400", "flex cursor-pointer items-center justify-center rounded-md border px-1 py-1 text-sm font-medium  sm:flex-1")
                                },
                                children: (0, n.jsx)(s.E.Label, {
                                    as: "span",
                                    children: d(e.name)
                                })
                            }, e.name))
                        })
                    })
                })
            }
        },
        29868: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return Select
                }
            });
            var n = a(34583),
                s = a(78754),
                i = a(78495),
                l = a(48586);

            function Select(e) {
                let {
                    options: t,
                    label: a,
                    value: o = "",
                    className: c = "",
                    disabled: d = !1,
                    disabledOptions: u = [],
                    onChange: m,
                    placeholder: h
                } = e, {
                    t: p
                } = (0, s.Z)("common"), [x, g] = (0, i.useState)(o);
                (0, i.useEffect)(() => {
                    g(o)
                }, [o]);
                let getOptionKey = e => "string" == typeof e ? e : e.value,
                    getOptionValue = e => "string" == typeof e ? e : e.value,
                    getOptionLabel = e => "string" == typeof e ? p(e) : p(e.label),
                    isOptionDisabled = e => u.includes(getOptionValue(e));
                return (0, n.jsxs)("select", {
                    id: a,
                    name: a,
                    disabled: d,
                    className: (0, l.Z)("mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white sm:text-sm", c),
                    onChange: e => {
                        m(e.target.value), g(e.target.value)
                    },
                    value: x,
                    children: [(0, n.jsx)("option", {
                        value: "",
                        disabled: !0,
                        selected: !0,
                        hidden: !0,
                        children: h || p("Select an option")
                    }), t.map(e => (0, n.jsx)("option", {
                        value: getOptionValue(e),
                        disabled: isOptionDisabled(e),
                        children: getOptionLabel(e)
                    }, getOptionKey(e)))]
                })
            }
        },
        421: function(e, t, a) {
            a.r(t);
            var n = a(34583),
                s = a(32001),
                i = a(78495),
                l = a(48586);
            t.default = (0, i.memo)(function(e) {
                let {
                    initialValue: t,
                    onChange: a,
                    disabled: o = !1,
                    isSmall: c = !1,
                    cannotBeToggled: d = !1
                } = e, [u, m] = (0, i.useState)(t);
                return (0, i.useEffect)(() => {
                    m(t)
                }, [t]), (0, n.jsxs)(s.r, {
                    checked: u,
                    onChange: () => {
                        a && a(!u), d || o || m(!u)
                    },
                    className: (0, l.Z)(u ? "bg-primary-600" : "bg-gray-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2", c && "h-4 w-7", o && "cursor-not-allowed opacity-50"),
                    children: [(0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Use setting"
                    }), (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        className: (0, l.Z)(u ? c ? "translate-x-3" : "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out", c && "h-3 w-3")
                    })]
                })
            })
        },
        16950: function(e, t, a) {
            var n = a(34583),
                s = a(20149),
                i = a(24286),
                l = a(78754),
                o = a(78495),
                c = a(78389),
                d = a.n(c),
                u = a(79231),
                m = a(75822);
            let h = d()(() => Promise.all([a.e(51595), a.e(813)]).then(a.bind(a, 813)), {
                ssr: !1
            });
            t.Z = (0, o.memo)(e => {
                let {
                    setTranscription: t
                } = e, {
                    t: a
                } = (0, l.Z)("tools"), [c, d] = (0, o.useState)(!1), [p, x] = (0, o.useState)(!1), g = (0, u.z)(), [f, v] = (0, o.useState)(!0), [b, y] = (0, o.useState)(!1);
                if (!f) return null;
                let handleAudioReady = async e => {
                    let a = new FormData;
                    a.append("audio", e), x(!0);
                    let n = await fetch("/api/transcribe", {
                        method: "POST",
                        body: a
                    });
                    if (n.ok) {
                        let e = await n.json();
                        console.log(e), t(e.transcription), x(!1), d(!1), g.track("Audio Transcribed", {
                            transcription: e.transcription,
                            page: window.location.pathname
                        }), y(!1)
                    } else console.error("Error transcribing audio"), x(!1), d(!1), y(!1)
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(m.Z, {
                        showModal: b,
                        onClose: () => y(!1),
                        className: "p-20",
                        children: (0, n.jsx)(h, {
                            onAudioAvailable: handleAudioReady,
                            isLoading: p,
                            maxRecordDuration: 600,
                            startRecordingImmediately: !0
                        })
                    }), c ? (0, n.jsxs)("button", {
                        className: "",
                        onClick: () => y(!1),
                        children: [(0, n.jsx)("span", {
                            className: "relative",
                            children: (0, n.jsx)("span", {
                                className: "absolute left-1 inline-flex h-4 w-4 animate-ping rounded-full bg-red-400 opacity-75"
                            })
                        }), (0, n.jsx)(i.Z, {
                            className: "h-5 w-5 rounded-md text-gray-500 hover:bg-gray-100 disabled:hover:bg-transparent dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:disabled:hover:bg-transparent"
                        })]
                    }) : (0, n.jsxs)("button", {
                        onClick: e => {
                            e.preventDefault(), y(!0)
                        },
                        className: "group ml-2 flex items-start justify-start space-x-2 text-gray-500 hover:text-red-500",
                        children: [(0, n.jsx)(s.Z, {
                            className: "h-5 w-5 rounded-md  disabled:hover:bg-transparent  dark:hover:text-gray-400 dark:disabled:hover:bg-transparent"
                        }), a("Dictate")]
                    })]
                })
            })
        },
        25907: function(e, t, a) {
            a.d(t, {
                M: function() {
                    return n
                }
            });
            let n = {
                en_US: "English",
                en_GB: "English (UK)",
                ar: "Arabic",
                bn: "Bengali",
                bg: "Bulgarian",
                zh: "Chinese",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                et: "Estonian",
                fi: "Finnish",
                fr: "French",
                ka: "Georgian",
                de: "German",
                el: "Greek",
                he: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                id: "Indonesian",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                ms: "Malay",
                ma: "Maltese",
                no: "Norwegian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sv: "Swedish",
                ta: "Tamil",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese"
            }
        },
        36407: function(e, t, a) {
            a.d(t, {
                T: function() {
                    return copyTextToClipboard
                }
            });
            async function copyTextToClipboard(e) {
                return (e = e.replace(/^\s+|\s+$/g, ""), "clipboard" in navigator) ? await navigator.clipboard.writeText(e) : document.execCommand("copy", !0, e)
            }
        },
        6045: function(e, t, a) {
            var n = a(67466),
                s = a(53060);
            let i = n.Z.create({
                headers: {
                    "Content-Type": "application/json"
                }
            });
            i.interceptors.response.use(function(e) {
                return e
            }, function(e) {
                var t, a;
                return e.response && e.response.request && e.response.request.responseURL && (e.response.request.responseURL.includes("/api/generate") || e.response.request.responseURL.includes("/api/room-gpt")) || ((null == e ? void 0 : null === (a = e.response) || void 0 === a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.error) && e.response.data.error ? s.Am.error(e.response.data.error) : s.Am.error("Something went wrong. Please try again later. If the error persists please contact us at support@easy-peasy.ai or via chat.")), Promise.reject(e)
            }), t.ZP = i
        },
        31411: function(e, t, a) {
            a.d(t, {
                v: function() {
                    return getLanguageName
                }
            });
            let n = [{
                    name: "Arabic",
                    code: "ar"
                }, {
                    name: "Bengali",
                    code: "bn"
                }, {
                    name: "Bulgarian",
                    code: "bg"
                }, {
                    name: "Chinese",
                    code: "zh"
                }, {
                    name: "Croatian",
                    code: "hr"
                }, {
                    name: "Czech",
                    code: "cs"
                }, {
                    name: "Danish",
                    code: "da"
                }, {
                    name: "Dutch",
                    code: "nl"
                }, {
                    name: "English",
                    code: "en"
                }, {
                    name: "Estonian",
                    code: "et"
                }, {
                    name: "Filipino",
                    code: "tl"
                }, {
                    name: "Icelandic",
                    code: "is"
                }, {
                    name: "Kazakh",
                    code: "kk"
                }, {
                    name: "Latvian",
                    code: "lv"
                }, {
                    name: "Lithuanian",
                    code: "lt"
                }, {
                    name: "Tamil",
                    code: "ta"
                }, {
                    name: "Finnish",
                    code: "fi"
                }, {
                    name: "French",
                    code: "fr"
                }, {
                    name: "German",
                    code: "de"
                }, {
                    name: "Greek",
                    code: "el"
                }, {
                    name: "Hebrew",
                    code: "he"
                }, {
                    name: "Hindi",
                    code: "hi"
                }, {
                    name: "Hungarian",
                    code: "hu"
                }, {
                    name: "Indonesian",
                    code: "id"
                }, {
                    name: "Italian",
                    code: "it"
                }, {
                    name: "Japanese",
                    code: "ja"
                }, {
                    name: "Korean",
                    code: "ko"
                }, {
                    name: "Malay",
                    code: "ms"
                }, {
                    name: "Norwegian",
                    code: "no"
                }, {
                    name: "Polish",
                    code: "pl"
                }, {
                    name: "Portuguese",
                    code: "pt"
                }, {
                    name: "Romanian",
                    code: "ro"
                }, {
                    name: "Russian",
                    code: "ru"
                }, {
                    name: "Serbian",
                    code: "sr"
                }, {
                    name: "Slovak",
                    code: "sk"
                }, {
                    name: "Slovenian",
                    code: "sl"
                }, {
                    name: "Spanish",
                    code: "es"
                }, {
                    name: "Swedish",
                    code: "sv"
                }, {
                    name: "Thai",
                    code: "th"
                }, {
                    name: "Turkish",
                    code: "tr"
                }, {
                    name: "Ukrainian",
                    code: "uk"
                }, {
                    name: "Vietnamese",
                    code: "vi"
                }],
                getLanguageName = e => {
                    let t = n.find(t => t.code === e);
                    return t ? t.name : ""
                }
        },
        10065: function(e, t, a) {
            a.d(t, {
                B: function() {
                    return F
                }
            });
            var n = a(78495),
                s = a(64291),
                i = a(97918);

            function F({
                container: e,
                accept: t,
                walk: a,
                enabled: l = !0
            }) {
                let o = (0, n.useRef)(t),
                    c = (0, n.useRef)(a);
                (0, n.useEffect)(() => {
                    o.current = t, c.current = a
                }, [t, a]), (0, s.e)(() => {
                    if (!e || !l) return;
                    let t = (0, i.r)(e);
                    if (!t) return;
                    let a = o.current,
                        n = c.current,
                        s = Object.assign(e => a(e), {
                            acceptNode: a
                        }),
                        d = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
                    for (; d.nextNode();) n(d.currentNode)
                }, [e, l, o, c])
            }
        },
        10298: function(e, t, a) {
            var n = a(78495);
            let s = n.forwardRef(function(e, t) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), n.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                }))
            });
            t.Z = s
        },
        84611: function(e, t, a) {
            a.d(t, {
                D: function() {
                    return useMutation
                }
            });
            var n = a(78495),
                s = a(33066),
                i = a(33253),
                l = a(69079),
                o = a(62476),
                c = a(38075);
            let MutationObserver = class MutationObserver extends c.l {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    let t = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, i.VS)(t, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    })
                }
                onUnsubscribe() {
                    if (!this.listeners.length) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : (0, l.R)(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    o.V.batch(() => {
                        if (this.mutateOptions) {
                            var t, a, n, s, i, l, o, c;
                            e.onSuccess ? (null == (t = (a = this.mutateOptions).onSuccess) || t.call(a, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (s = this.mutateOptions).onSettled) || n.call(s, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (i = (l = this.mutateOptions).onError) || i.call(l, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (o = (c = this.mutateOptions).onSettled) || o.call(c, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(e => {
                            e(this.currentResult)
                        })
                    })
                }
            };
            var d = a(31464),
                u = a(39217);

            function useMutation(e, t, a) {
                let l = (0, i.lV)(e, t, a),
                    c = (0, d.NL)({
                        context: l.context
                    }),
                    [m] = n.useState(() => new MutationObserver(c, l));
                n.useEffect(() => {
                    m.setOptions(l)
                }, [m, l]);
                let h = (0, s.$)(n.useCallback(e => m.subscribe(o.V.batchCalls(e)), [m]), () => m.getCurrentResult(), () => m.getCurrentResult()),
                    p = n.useCallback((e, t) => {
                        m.mutate(e, t).catch(noop)
                    }, [m]);
                if (h.error && (0, u.L)(m.options.useErrorBoundary, [h.error])) throw h.error;
                return { ...h,
                    mutate: p,
                    mutateAsync: h.mutate
                }
            }

            function noop() {}
        },
        33066: function(e, t, a) {
            a.d(t, {
                $: function() {
                    return s
                }
            });
            var n = a(86192);
            let s = n.useSyncExternalStore
        },
        39217: function(e, t, a) {
            a.d(t, {
                L: function() {
                    return shouldThrowError
                }
            });

            function shouldThrowError(e, t) {
                return "function" == typeof e ? e(...t) : !!e
            }
        }
    }
]);