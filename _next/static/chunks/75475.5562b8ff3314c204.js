"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [75475], {
        63753: function(e, l, a) {
            a.r(l), a.d(l, {
                default: function() {
                    return x
                }
            });
            var r = a(34583),
                t = a(8929),
                s = a(78495),
                n = a(89793),
                i = a(34858),
                o = a(78754),
                d = a(54091),
                c = a(94684);
            let CodeBlock = e => {
                    let {
                        language: l,
                        value: a
                    } = e, {
                        t
                    } = (0, o.Z)("common"), [n, i] = (0, s.useState)(t("Copy")), [m, u] = (0, s.useState)(() => {
                        let e = localStorage.getItem("theme");
                        return "dark" !== e && ("theme" in localStorage && "system" !== e || !window.matchMedia("(prefers-color-scheme: dark)").matches) ? "light" : "dark"
                    });
                    return (0, r.jsxs)("div", {
                        className: "relative text-[16px]",
                        children: [(0, r.jsx)(d.Z, {
                            language: l,
                            style: "light" === m ? c.Yn : c.pJ,
                            customStyle: {
                                backgroundColor: "dark" === m ? "#293449" : "auto"
                            },
                            children: a
                        }), (0, r.jsx)("button", {
                            className: "absolute right-2 top-2 rounded bg-primary-500 px-2 py-1 text-sm text-white hover:bg-primary-700 focus:outline-none",
                            onClick: () => {
                                navigator.clipboard.writeText(a).then(() => {
                                    i(t("Copied!")), setTimeout(() => {
                                        i(t("Copy"))
                                    }, 2e3)
                                })
                            },
                            children: n
                        })]
                    })
                },
                m = (0, s.memo)(e => {
                    let {
                        children: l
                    } = e;
                    return (0, r.jsx)("ul", {
                        className: "list-outside list-disc space-y-2 pl-5 marker:text-primary-600",
                        children: l
                    })
                });
            m.displayName = "CustomList";
            let u = (0, s.memo)(e => {
                let {
                    children: l
                } = e;
                return (0, r.jsx)("li", {
                    children: (0, r.jsx)("p", {
                        className: "my-0",
                        children: l
                    })
                })
            });
            u.displayName = "CustomListItem";
            let p = (0, s.memo)(e => {
                let {
                    href: l,
                    children: a
                } = e;
                return (0, r.jsx)("a", {
                    href: l,
                    className: "text-primary-600 underline hover:no-underline",
                    target: "_blank",
                    rel: "noreferrer",
                    children: a
                })
            });
            p.displayName = "CustomLink";
            let downloadImage = async e => {
                    try {
                        let l = await fetch(e),
                            a = await l.blob(),
                            r = window.URL.createObjectURL(a),
                            t = document.createElement("a");
                        t.href = r, t.download = "image.".concat(e.split(".").pop() || "png"), document.body.appendChild(t), t.click(), document.body.removeChild(t), window.URL.revokeObjectURL(r)
                    } catch (l) {
                        console.error("Error downloading image:", l), window.open(e, "_blank")
                    }
                },
                h = (0, s.memo)(e => {
                    let {
                        src: l,
                        alt: a,
                        onImageEdit: n
                    } = e, i = (0, s.useCallback)(async e => {
                        e.preventDefault(), l && await downloadImage(l)
                    }, [l]);
                    return (0, r.jsxs)("div", {
                        className: "relative inline-block",
                        children: [(0, r.jsx)("img", {
                            src: l,
                            alt: a,
                            className: "h-auto max-w-full rounded-lg"
                        }), l && (0, r.jsx)("div", {
                            className: "absolute right-2 top-2 flex space-x-2",
                            children: (0, r.jsx)("a", {
                                href: l,
                                download: "image.".concat(l.split(".").pop() || "png"),
                                className: "rounded-full bg-white/80 p-2 shadow-sm hover:bg-white",
                                title: "Download image",
                                onClick: i,
                                children: (0, r.jsx)(t.Z, {
                                    className: "h-5 w-5 text-gray-700"
                                })
                            })
                        })]
                    })
                });
            h.displayName = "ImageWithDownload";
            let g = (0, s.memo)(e => {
                let {
                    message: l,
                    onImageEdit: a,
                    inline: t = !1
                } = e, o = (0, s.useMemo)(() => ({
                    code(e) {
                        let {
                            node: l,
                            inline: a,
                            className: t,
                            children: s,
                            ...n
                        } = e, i = /language-(\w+)/.exec(t || "");
                        return !a && i ? (0, r.jsx)(CodeBlock, {
                            language: i[1],
                            value: String(s).replace(/\n$/, ""),
                            ...n
                        }, Math.random()) : (0, r.jsx)("code", {
                            className: t,
                            ...n,
                            children: s
                        })
                    },
                    img: e => {
                        let {
                            src: l,
                            alt: t
                        } = e;
                        return (0, r.jsx)(h, {
                            src: l,
                            alt: t,
                            onImageEdit: a
                        })
                    },
                    ul: m,
                    ol: m,
                    li: u,
                    a: p
                }), [a]);
                return t ? (0, r.jsx)(n.D, {
                    remarkPlugins: [i.Z],
                    components: o,
                    unwrapDisallowed: !0,
                    disallowedElements: ["p", "div"],
                    children: l
                }) : (0, r.jsx)("div", {
                    className: "",
                    children: (0, r.jsx)(n.D, {
                        remarkPlugins: [i.Z],
                        components: o,
                        children: l
                    })
                })
            }, (e, l) => e.message === l.message);
            g.displayName = "MarkdownBlock";
            var x = g
        },
        75475: function(e, l, a) {
            a.r(l);
            var r = a(34583),
                t = a(88014),
                s = a(78754),
                n = a(78495),
                i = a(63753);
            let handleNewLines = e => {
                let l = e.split("\n");
                return l.map((e, a) => (0, r.jsxs)(n.Fragment, {
                    children: [e, a !== l.length - 1 && (0, r.jsx)("br", {})]
                }, a))
            };
            l.default = e => {
                let {
                    caption: l,
                    completion: a
                } = e, {
                    t: n
                } = (0, s.Z)("tools"), o = (null == a ? void 0 : a.preset) === "grammar-corrector" || (null == l ? void 0 : l.preset) === "grammar-corrector" || (null == a ? void 0 : a.preset) === "paraphrasing-tool" || (null == l ? void 0 : l.preset) === "paraphrasing-tool" || (null == a ? void 0 : a.preset) === "native-speaker" || (null == l ? void 0 : l.preset) === "native-speaker";
                return (0, r.jsx)("li", {
                    className: "messages relative bg-white px-4 py-6 shadow dark:bg-slate-800 sm:rounded-lg sm:p-6",
                    children: (0, r.jsxs)("article", {
                        "aria-labelledby": "caption-title-" + l.id,
                        children: [((null == a ? void 0 : a.request_body) || (null == a ? void 0 : a.user_prompt)) && (0, r.jsxs)("div", {
                            className: "mb-7 mt-3",
                            children: [(0, r.jsx)("div", {
                                children: (0, r.jsx)("b", {
                                    className: "text-primary-700",
                                    children: n("INPUT")
                                })
                            }), (0, r.jsx)(i.default, {
                                message: (null == a ? void 0 : a.request_body) ? (null == a ? void 0 : a.request_body).keywords : null == a ? void 0 : a.user_prompt
                            })]
                        }), (0, r.jsx)("div", {
                            children: (0, r.jsx)("b", {
                                className: "text-primary-700",
                                children: n("OUTPUT")
                            })
                        }), (0, r.jsx)("div", {
                            className: "message text-md mt-2 space-y-4 text-gray-700 dark:text-slate-400",
                            children: o ? (0, r.jsx)(r.Fragment, {
                                children: ((e, l) => {
                                    if (!l) return e;
                                    let a = t.NV(l, e),
                                        s = a.map((e, l) => e.added ? (0, r.jsx)("span", {
                                            className: "bg-green-100 dark:bg-green-900",
                                            children: handleNewLines(e.value)
                                        }, l) : e.removed ? (0, r.jsx)("span", {
                                            className: "bg-red-100 dark:bg-red-900",
                                            children: handleNewLines(e.value)
                                        }, l) : (0, r.jsx)("span", {
                                            children: handleNewLines(e.value)
                                        }, l));
                                    return (0, r.jsx)(r.Fragment, {
                                        children: s
                                    })
                                })(l.text, (null == l ? void 0 : l.prompt) || (null == a ? void 0 : a.user_prompt) || (null == a ? void 0 : a.request_body).keywords)
                            }) : (0, r.jsx)(i.default, {
                                message: l.text.replace(/\n/g, "  \n").trim()
                            })
                        })]
                    })
                }, l.id)
            }
        }
    }
]);