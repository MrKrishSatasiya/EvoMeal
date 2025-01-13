"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99245, 93895, 56417, 29453, 13992], {
        93895: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return FlyOutMenuItem
                }
            });
            var r = a(34583),
                n = a(16980),
                i = a(88738),
                s = a(40095),
                l = a(20149),
                o = a(57338),
                d = a(4575),
                c = a(80601),
                m = a(90339),
                g = a(51976),
                h = a.n(g),
                x = a(78754),
                u = a(78495),
                p = a(35878),
                f = a(82608),
                v = a(89750);

            function FlyOutMenuItem() {
                let {
                    t: e,
                    lang: t
                } = (0, x.Z)("footer"), a = (0, u.useRef)(null), g = [{
                    name: "Chat with MARKy",
                    href: "/marky-chatbot",
                    icon: s.Z,
                    description: e("Easily create content by just chatting with AI."),
                    badge: "GPT-4 & Claude 3"
                }, {
                    name: "AI Text-to-Speech",
                    href: "/text-to-speech",
                    icon: l.Z,
                    description: e("Convert text into clear, natural sounding speech across 40+ languages")
                }, {
                    name: "AI Art & Images",
                    href: "/ai-image-generator",
                    icon: p.Jh6,
                    description: e("Create stunning images and art with AI")
                }, {
                    name: "AI Transcription",
                    href: "/ai-transcription",
                    icon: f._5g,
                    description: e("Transcribe and summarize audios. Generate titles, descriptions and show notes.")
                }, {
                    name: "Bots",
                    href: "/chatbots",
                    icon: p.iNY,
                    description: e("Build no-code AI Bots by training on your own data. Embed on any website or share via URL")
                }, {
                    name: "AI Interior Design Generator",
                    href: "/ai-interior-design-generator",
                    icon: f.VlK,
                    description: e("Brainstorm interior design ideas at a fraction of the cost of hiring an interior designer.")
                }, {
                    name: "One Click Article Generation",
                    href: "/templates/blog-post",
                    icon: v.Sdv,
                    description: e("Generate SEO-friendly articles with one click.")
                }, {
                    name: "AI Headshot Generator",
                    href: "/ai-headshot-generator",
                    icon: o.Z,
                    description: e("Generate professional headshots with AI.")
                }, {
                    name: "Content Templates",
                    href: "/templates",
                    icon: d.Z,
                    description: e("Use pre-built templates to create content faster.")
                }, {
                    name: "Brand Voice",
                    href: "/voices",
                    icon: c.Z,
                    description: e("Train AI to speak like you. Personalize your content.")
                }];
                return (0, r.jsx)(n.J, {
                    className: " relative inline-flex",
                    children: s => {
                        let {
                            open: l
                        } = s;
                        return (0, r.jsxs)("div", {
                            className: "relative ",
                            onMouseEnter: e => {
                                var t;
                                let {
                                    target: r
                                } = e;
                                return l ? "" : null == a ? void 0 : null === (t = a.current) || void 0 === t ? void 0 : t.click()
                            },
                            onMouseLeave: e => {
                                var t;
                                let {
                                    target: r
                                } = e;
                                return l ? null == a ? void 0 : null === (t = a.current) || void 0 === t ? void 0 : t.click() : ""
                            },
                            children: [(0, r.jsxs)(n.J.Button, {
                                ref: a,
                                className: "inline-flex items-center gap-x-1 font-medium leading-8 text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                children: [(0, r.jsx)("span", {
                                    children: e("Solutions")
                                }), (0, r.jsx)(m.Z, {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true"
                                })]
                            }), (0, r.jsx)(i.u, {
                                as: u.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0, r.jsx)(n.J.Panel, {
                                    className: "absolute left-1/2 z-50 flex   w-screen max-w-max -translate-x-1/2 px-4",
                                    children: (0, r.jsxs)("div", {
                                        className: "w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-800 lg:max-w-3xl",
                                        children: [(0, r.jsx)("div", {
                                            className: "grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2",
                                            children: g.map(a => (0, r.jsxs)("div", {
                                                className: "group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 hover:dark:bg-slate-700",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-slate-200",
                                                    children: (0, r.jsx)(a.icon, {
                                                        className: "h-6 w-6 text-primary-600 group-hover:text-primary-500",
                                                        "aria-hidden": "true"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsxs)(h(), {
                                                        href: a.href,
                                                        className: "font-semibold text-gray-900 dark:text-slate-200 ",
                                                        children: [e(a.name), a.badge && "en" === t && (0, r.jsx)("span", {
                                                            className: "ml-2 hidden rounded-full bg-primary-500 px-1.5 py-0.5 text-xs text-white 2xl:inline",
                                                            children: a.badge
                                                        }), (0, r.jsx)("span", {
                                                            className: "absolute inset-0"
                                                        })]
                                                    }), (0, r.jsx)("p", {
                                                        className: "mt-1 text-gray-600 dark:text-slate-400",
                                                        children: a.description
                                                    })]
                                                })]
                                            }, a.name))
                                        }), (0, r.jsxs)("div", {
                                            className: "bg-gray-50 px-8 py-6 dark:bg-slate-900/40",
                                            children: [(0, r.jsxs)(h(), {
                                                href: "/b2b",
                                                className: "flex items-center gap-x-3",
                                                children: [(0, r.jsx)("h3", {
                                                    className: "text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200",
                                                    children: e("B2B Solutions")
                                                }), (0, r.jsx)("p", {
                                                    className: "rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600",
                                                    children: "New"
                                                })]
                                            }), (0, r.jsx)("p", {
                                                className: "mt-2 text-sm leading-6 text-gray-600 dark:text-slate-400",
                                                children: e("Empower your entire team with even more advanced tools.")
                                            })]
                                        })]
                                    })
                                })
                            })]
                        })
                    }
                })
            }
        },
        45878: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return FlyOutMenuItemAITools
                }
            });
            var r = a(34583),
                n = a(16980),
                i = a(88738),
                s = a(90339),
                l = a(51976),
                o = a.n(l),
                d = a(78754),
                c = a(78495),
                m = a(57553),
                g = a(56417);

            function FlyOutMenuItemAITools() {
                let {
                    t: e
                } = (0, d.Z)("footer"), t = (0, c.useRef)(null);
                return (0, r.jsx)(n.J, {
                    className: " relative inline-flex",
                    children: a => {
                        let {
                            open: l
                        } = a;
                        return (0, r.jsxs)("div", {
                            className: "relative ",
                            onMouseEnter: e => {
                                var a;
                                let {
                                    target: r
                                } = e;
                                return l ? "" : null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.click()
                            },
                            onMouseLeave: e => {
                                var a;
                                let {
                                    target: r
                                } = e;
                                return l ? null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.click() : ""
                            },
                            children: [(0, r.jsxs)(n.J.Button, {
                                ref: t,
                                className: "inline-flex items-center gap-x-1 leading-8 font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                children: [(0, r.jsx)("span", {
                                    children: e("Templates")
                                }), (0, r.jsx)(s.Z, {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true"
                                })]
                            }), (0, r.jsx)(i.u, {
                                as: c.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0, r.jsx)(n.J.Panel, {
                                    className: "absolute flex left-1/2 z-50   w-screen max-w-max -translate-x-1/2 px-4",
                                    children: (0, r.jsxs)("div", {
                                        className: "w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-slate-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-5xl",
                                        children: [(0, r.jsx)("div", {
                                            className: "grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2 xl:grid-cols-3",
                                            children: m.m.slice(0, 15).map(t => (0, r.jsxs)("div", {
                                                className: "group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 hover:dark:bg-slate-700",
                                                children: [(0, r.jsx)("div", {
                                                    className: "mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-200 group-hover:bg-white",
                                                    children: (0, r.jsx)(t.icon, {
                                                        className: "h-6 w-6 text-primary-600 group-hover:text-primary-500",
                                                        "aria-hidden": "true"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    children: [(0, r.jsxs)(o(), {
                                                        href: "/templates/".concat(t.slug.replace("/", "")),
                                                        className: "font-semibold text-gray-900 dark:text-slate-200 ",
                                                        children: [e(t.title), (0, r.jsx)("span", {
                                                            className: "absolute inset-0"
                                                        })]
                                                    }), (0, r.jsx)("p", {
                                                        className: "mt-1 text-gray-600 dark:text-slate-400",
                                                        children: e(t.description)
                                                    })]
                                                })]
                                            }, t.title))
                                        }), (0, r.jsx)("div", {
                                            className: "bg-gray-50 px-8 py-6 dark:bg-slate-900/40",
                                            children: (0, r.jsx)(g.default, {
                                                href: "/templates",
                                                variant: "dark",
                                                children: e("See all 200+ templates")
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    }
                })
            }
        },
        75512: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return FlyOutMenuItem
                }
            });
            var r = a(34583),
                n = a(16980),
                i = a(88738),
                s = a(90339),
                l = a(76085),
                o = a.n(l),
                d = a(51976),
                c = a.n(d),
                m = a(78754),
                g = a(78495);
            let h = [{
                slug: "oil-painting",
                name: "Oil Painting"
            }, {
                slug: "realistic-photo",
                name: "Realistic Photo"
            }, {
                slug: "cyberpunk",
                name: "Cyberpunk"
            }, {
                slug: "watercolor",
                name: "Watercolor"
            }, {
                slug: "pencil-drawing",
                name: "Pencil drawing"
            }, {
                slug: "cartoon",
                name: "Cartoon"
            }, {
                slug: "disney",
                name: "Disney"
            }, {
                slug: "pixar",
                name: "Pixar"
            }, {
                slug: "mascot",
                name: "Mascot"
            }];

            function FlyOutMenuItem() {
                let {
                    t: e
                } = (0, m.Z)("footer"), t = (0, g.useRef)(null), a = [{
                    name: "AI Image Generator",
                    href: "/ai-image-generator"
                }, {
                    name: "AI Interior Design Generator",
                    href: "/ai-interior-design-generator"
                }, {
                    name: "Headshots",
                    href: "/ai-headshot-generator"
                }, {
                    name: "Photo Studio",
                    href: "/ai-photo-generator"
                }, {
                    name: "Free AI Image Upscaler",
                    href: "/free-tools/upscale-image"
                }, {
                    name: "T-Shirt Design Maker",
                    href: "/ai-image-generator/t-shirt-design"
                }, {
                    name: "Logo Maker",
                    href: "/ai-image-generator/logo"
                }, {
                    name: "Art Prompt Generator",
                    href: "/templates/art-prompt-generator"
                }], l = [{
                    id: 1,
                    title: "AI Dog",
                    imageUrl: "https://api.easy-peasy.ai/storage/v1/object/public/images/0414632f-2607-4fc6-89c1-1f892acb70a5/38cfddb5-7bea-49bd-b67f-dd8068964bd1.png",
                    link: "/ai-image-generator/images/ai-dog-enhancing-life-smart-canine-companions"
                }, {
                    id: 2,
                    title: "Marina Bay Sands, Singapore",
                    imageUrl: "https://api.easy-peasy.ai/storage/v1/object/public/images/564a45be-4e5d-487c-b654-4a9205bab792/c6ccf51b-54ce-48ca-8b21-964519b5890a.png",
                    link: "/ai-image-generator/images/marina-bay-sands-singapore-architectural-marvel-urban-sophistication"
                }, {
                    id: 3,
                    title: "Tiger Prowling in Forest",
                    imageUrl: "https://api.easy-peasy.ai/storage/v1/object/public/images/1de4a307-14e8-4a21-ac10-6a554f139599/1ffd7199-27f9-4049-950c-e4fe6b67216b.png",
                    link: "/ai-image-generator/images/majestic-tiger-prowling-verdant-forest-wildlife-safari"
                }, {
                    id: 4,
                    title: "Mythical Dragon Dance",
                    imageUrl: "https://api.easy-peasy.ai/storage/v1/object/public/images/13f34517-84e8-415d-884a-a10ef3e9f119/c62e5e3b-41da-440f-860a-0100ee71a24e.png",
                    link: "/ai-image-generator/images/mythical-dragon-dance-chinatown-chinese-new-year-celebrations"
                }];
                return (0, r.jsx)(n.J, {
                    className: " relative inline-flex",
                    children: d => {
                        let {
                            open: m
                        } = d;
                        return (0, r.jsxs)("div", {
                            className: "relative ",
                            onMouseEnter: e => {
                                var a;
                                let {
                                    target: r
                                } = e;
                                return m ? "" : null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.click()
                            },
                            onMouseLeave: e => {
                                var a;
                                let {
                                    target: r
                                } = e;
                                return m ? null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.click() : ""
                            },
                            children: [(0, r.jsxs)(n.J.Button, {
                                ref: t,
                                className: "inline-flex items-center gap-x-1 font-medium leading-8 text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                children: [(0, r.jsx)("span", {
                                    children: e("AI Images")
                                }), (0, r.jsx)(s.Z, {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true"
                                })]
                            }), (0, r.jsx)(i.u, {
                                as: g.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0, r.jsx)(n.J.Panel, {
                                    className: "absolute left-1/2 z-50 flex   w-screen max-w-max -translate-x-1/2 px-4",
                                    children: (0, r.jsxs)("div", {
                                        className: " mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 overflow-hidden rounded-3xl bg-white px-6 py-10 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:bg-slate-800 lg:grid-cols-2 lg:px-8 ",
                                        children: [(0, r.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-x-6 sm:gap-x-8",
                                            children: [(0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("h3", {
                                                    className: "text-sm font-medium leading-6 text-gray-500",
                                                    children: e("Tools")
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-6 flow-root",
                                                    children: (0, r.jsx)("div", {
                                                        className: "-my-2",
                                                        children: a.map(t => (0, r.jsx)(c(), {
                                                            href: t.href,
                                                            className: "flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-700 hover:text-primary-600 dark:text-slate-300",
                                                            children: e(t.name)
                                                        }, t.name))
                                                    })
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("h3", {
                                                    className: "text-sm font-medium leading-6 text-gray-500",
                                                    children: e("Supported Styles")
                                                }), (0, r.jsx)("div", {
                                                    className: "mt-6 flow-root",
                                                    children: (0, r.jsxs)("div", {
                                                        className: "-my-2",
                                                        children: [h.slice(0, 12).map(t => (0, r.jsx)(c(), {
                                                            href: "/ai-image-generator/".concat(t.slug),
                                                            className: "flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-700 hover:text-primary-600 dark:text-slate-300",
                                                            children: e(t.name)
                                                        }, t.name)), (0, r.jsxs)(c(), {
                                                            href: "/ai-image-generator",
                                                            className: "flex gap-x-4 py-2 text-sm font-semibold leading-6 text-primary-600",
                                                            children: [e("See all"), " →"]
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }), (0, r.jsx)("div", {
                                            className: "grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2",
                                            children: l.map(e => (0, r.jsx)("article", {
                                                className: "relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch",
                                                children: (0, r.jsx)("div", {
                                                    className: "relative flex-none",
                                                    children: (0, r.jsxs)(c(), {
                                                        href: e.link,
                                                        children: [(0, r.jsx)(o(), {
                                                            className: " w-full rounded-lg bg-gray-100 object-cover  sm:h-32 lg:h-auto",
                                                            src: e.imageUrl,
                                                            alt: e.title,
                                                            width: 175,
                                                            height: 175
                                                        }), (0, r.jsx)("div", {
                                                            className: "absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10"
                                                        })]
                                                    })
                                                })
                                            }, e.id))
                                        })]
                                    })
                                })
                            })]
                        })
                    }
                })
            }
        },
        42984: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return FlyoutSimpleMenuItem
                }
            });
            var r = a(34583),
                n = a(16980),
                i = a(88738),
                s = a(90339),
                l = a(51976),
                o = a.n(l),
                d = a(78754),
                c = a(78495);
            let m = [{
                name: "Blog",
                href: "/blog"
            }, {
                name: "Guide",
                href: "/guide"
            }, {
                name: "Pricing",
                href: "/#pricing"
            }, {
                name: "What's New",
                href: "/changelog"
            }, {
                name: "Affiliate Program",
                href: "/affiliates"
            }];

            function FlyoutSimpleMenuItem() {
                let {
                    t: e
                } = (0, d.Z)("footer"), t = (0, c.useRef)(null);
                return (0, r.jsx)(n.J, {
                    className: "relative inline-flex",
                    children: a => {
                        let {
                            open: l
                        } = a;
                        return (0, r.jsxs)("div", {
                            className: "relative ",
                            onMouseEnter: e => {
                                var a;
                                let {
                                    target: r
                                } = e;
                                return l ? "" : null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.click()
                            },
                            onMouseLeave: e => {
                                var a;
                                let {
                                    target: r
                                } = e;
                                return l ? null == t ? void 0 : null === (a = t.current) || void 0 === a ? void 0 : a.click() : ""
                            },
                            children: [(0, r.jsxs)(n.J.Button, {
                                ref: t,
                                className: "inline-flex items-center gap-x-1 leading-8 font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                children: [(0, r.jsx)("span", {
                                    children: e("Resources")
                                }), (0, r.jsx)(s.Z, {
                                    className: "h-5 w-5",
                                    "aria-hidden": "true"
                                })]
                            }), (0, r.jsx)(i.u, {
                                as: c.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0, r.jsx)(n.J.Panel, {
                                    className: "absolute left-1/2 z-50  flex w-screen max-w-min -translate-x-1/2 px-4",
                                    children: (0, r.jsx)("div", {
                                        className: "w-56 shrink rounded-xl bg-white dark:bg-slate-800 p-4 text-sm font-semibold leading-6 text-gray-900 dark:text-slate-200 shadow-lg ring-1 ring-gray-900/5",
                                        children: m.map(t => (0, r.jsx)(o(), {
                                            href: t.href,
                                            className: "block p-2 hover:text-indigo-600",
                                            children: e(t.name)
                                        }, t.name))
                                    })
                                })
                            })]
                        })
                    }
                })
            }
        },
        99245: function(e, t, a) {
            var r = a(34583),
                n = a(76085),
                i = a.n(n),
                s = a(51976),
                l = a.n(s),
                o = a(78754),
                d = a(78495),
                c = a(48586),
                m = a(29453),
                g = a(17187),
                h = a(75512),
                x = a(93895),
                u = a(45878),
                p = a(42984),
                f = a(56417);
            t.Z = () => {
                let {
                    t: e,
                    lang: t
                } = (0, o.Z)("common"), [a, n] = (0, d.useState)(!1);
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("div", {
                        className: "relative px-4 pt-6 sm:px-6 2xl:px-8",
                        children: (0, r.jsxs)("nav", {
                            className: "relative flex items-center justify-between sm:h-10 xl:justify-start",
                            "aria-label": "Global",
                            children: [(0, r.jsx)("div", {
                                className: "flex flex-shrink-0 flex-grow items-center",
                                children: (0, r.jsxs)("div", {
                                    className: "flex w-full items-center justify-between xl:w-auto",
                                    children: [(0, r.jsx)(l(), {
                                        href: "/",
                                        passHref: !0,
                                        children: (0, r.jsx)(i(), {
                                            src: "/images/marky.png",
                                            width: "250",
                                            height: "36",
                                            priority: !0,
                                            className: "text-2xl font-extrabold text-primary-700",
                                            alt: "Easy-Peasy.ai logo"
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "-mr-2 flex items-center xl:hidden",
                                        children: (0, r.jsxs)("button", {
                                            type: "button",
                                            className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800 dark:text-slate-200",
                                            "aria-expanded": "false",
                                            onClick: () => n(!a),
                                            children: [(0, r.jsx)("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }), (0, r.jsx)("svg", {
                                                className: "h-6 w-6",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                className: "hidden xl:block xl:space-x-6 2xl:ml-10 2xl:space-x-8",
                                children: [(0, r.jsx)(x.default, {}), (0, r.jsx)(u.default, {}), (0, r.jsx)(l(), {
                                    href: "/chatbots",
                                    className: "font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                    children: e("Bots")
                                }), (0, r.jsxs)(l(), {
                                    href: "/ai-video-generator",
                                    className: "relative font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                    children: [e("AI Videos"), (0, r.jsx)("span", {
                                        className: "absolute -right-8 -top-5 ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800",
                                        children: e("New")
                                    })]
                                }), (0, r.jsxs)(l(), {
                                    href: "/ai-photo-generator",
                                    className: "relative hidden font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700 min-[1800px]:inline",
                                    children: [e("Photo Studio"), (0, r.jsx)("span", {
                                        className: "absolute -right-8 -top-5 ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800",
                                        children: e("New")
                                    })]
                                }), (0, r.jsxs)(l(), {
                                    href: "/ai-headshot-generator",
                                    className: "relative hidden font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700 min-[1800px]:inline",
                                    children: [e("Headshots"), (0, r.jsx)("span", {
                                        className: "absolute -right-8 -top-5 ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800",
                                        children: e("New")
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "inline-flex",
                                    children: (0, r.jsx)(h.default, {})
                                }), (0, r.jsx)(l(), {
                                    href: "/ai-transcription",
                                    className: "hidden font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700 min-[1800px]:inline",
                                    children: e("AI Transcription")
                                }), (0, r.jsx)(l(), {
                                    href: "/text-to-speech",
                                    className: "font-medium text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-700",
                                    children: e("AI Voice")
                                }), (0, r.jsx)(p.default, {}), (0, r.jsxs)("div", {
                                    className: "inline-flex align-middle",
                                    children: [(0, r.jsx)(m.$, {
                                        className: "relative mr-3"
                                    }), (0, r.jsx)(g.Y, {
                                        className: " relative"
                                    })]
                                }), (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)(l(), {
                                        href: "/login",
                                        className: "font-medium text-primary-600 hover:text-primary-500",
                                        children: e("Log in")
                                    }), (0, r.jsx)(f.default, {
                                        variant: "dark",
                                        href: "/login#auth-sign-up",
                                        children: (0, r.jsx)("span", {
                                            children: e("Sign up")
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: (0, c.Z)(a ? "" : "hidden", " absolute inset-x-0 top-0 z-[999] origin-top-right transform p-2 transition xl:hidden"),
                        children: (0, r.jsxs)("div", {
                            className: "overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-slate-900",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center justify-between px-5 pt-4",
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsxs)("div", {
                                        className: "inline-flex align-middle",
                                        children: [(0, r.jsx)("span", {
                                            className: " text-gray-500",
                                            children: e("Settings")
                                        }), (0, r.jsx)(m.$, {
                                            className: "relative ml-2 mr-3"
                                        }), (0, r.jsx)(g.Y, {
                                            className: " relative"
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "-mr-2",
                                    children: (0, r.jsxs)("button", {
                                        onClick: () => n(!a),
                                        type: "button",
                                        className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800 dark:text-slate-200",
                                        children: [(0, r.jsx)("span", {
                                            className: "sr-only",
                                            children: e("Close main menu")
                                        }), (0, r.jsx)("svg", {
                                            className: "h-6 w-6",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            "aria-hidden": "true",
                                            children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M6 18L18 6M6 6l12 12"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: " space-y-1 px-2 pb-3 pt-2",
                                children: [(0, r.jsx)(l(), {
                                    href: "/templates",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("Templates")
                                }), (0, r.jsx)(l(), {
                                    href: "/marky-chatbot",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("Chat with AI")
                                }), (0, r.jsx)(l(), {
                                    href: "/ai-image-generator",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("AI Images")
                                }), (0, r.jsx)(l(), {
                                    href: "/ai-video-generator",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("AI Videos")
                                }), (0, r.jsx)(l(), {
                                    href: "/chatbots",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("Bots")
                                }), (0, r.jsx)(l(), {
                                    href: "/ai-transcription",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("AI Transcription")
                                }), (0, r.jsx)(l(), {
                                    href: "/text-to-speech",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("AI Text-to-Speech")
                                }), (0, r.jsxs)(l(), {
                                    href: "/ai-photo-generator",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: ["AI ", e("Photo Studio")]
                                }), (0, r.jsx)(l(), {
                                    href: "/ai-headshot-generator",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("AI Headshots Generator")
                                }), (0, r.jsx)(l(), {
                                    href: "/ai-interior-design-generator",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("AI Interior Design Generator")
                                }), (0, r.jsx)(l(), {
                                    href: "/voices",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("Brand Voice")
                                }), (0, r.jsx)(l(), {
                                    href: "/guide",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("Guide")
                                }), (0, r.jsx)(l(), {
                                    href: "/b2b",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("B2B Solutions")
                                }), (0, r.jsx)(l(), {
                                    href: "/changelog",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("What's New")
                                }), (0, r.jsx)(l(), {
                                    href: "/#contact-us",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700 ",
                                    children: e("Contact Us")
                                }), (0, r.jsxs)(l(), {
                                    href: "/ai-video-generator",
                                    className: "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-slate-200 dark:hover:bg-slate-700",
                                    children: [e("AI Videos"), " ", (0, r.jsx)("span", {
                                        className: "ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800",
                                        children: e("New")
                                    })]
                                })]
                            }), (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l(), {
                                    href: "/login",
                                    className: "block w-full bg-gray-50 px-5 py-3 text-center font-medium text-primary-700 hover:bg-gray-100 dark:bg-slate-800",
                                    children: e("Log in")
                                }), (0, r.jsx)(f.default, {
                                    className: "block w-full text-center",
                                    variant: "dark",
                                    href: "/login#auth-sign-up",
                                    children: e("Sign up for free")
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        29453: function(e, t, a) {
            a.d(t, {
                $: function() {
                    return LanguageSelector
                },
                V: function() {
                    return c
                }
            });
            var r = a(34583),
                n = a(83321),
                i = a(80540),
                s = a(89842),
                l = a(58214),
                o = a(78754),
                d = a(48586);
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
                    lang: a
                } = (0, o.Z)("common"), m = (0, l.useRouter)();
                return (0, r.jsxs)(n.R, {
                    as: "div",
                    value: c.find(e => e.value === a),
                    onChange: e => {
                        s.Z.set("NEXT_LOCALE", e.value, {
                            expires: 365
                        }), m.push(m.asPath, m.asPath, {
                            locale: e.value
                        })
                    },
                    ...e,
                    children: [(0, r.jsx)(n.R.Label, {
                        className: "sr-only",
                        children: "Theme"
                    }), (0, r.jsx)(n.R.Button, {
                        className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                        children: (0, r.jsx)(i.Z, {
                            className: " h-4 w-4 fill-primary-400"
                        })
                    }), (0, r.jsx)(n.R.Options, {
                        className: "absolute left-1/2 top-full z-50 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                        children: c.map(e => (0, r.jsx)(n.R.Option, {
                            value: e,
                            className: t => {
                                let {
                                    active: r,
                                    selected: n
                                } = t;
                                return (0, d.Z)("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                    "text-primary-500": a === e.value,
                                    "text-slate-900 dark:text-white": r && a !== e.value,
                                    "text-slate-700 dark:text-slate-400": !r && a !== e.value,
                                    "bg-slate-100 dark:bg-slate-900/40": r
                                })
                            },
                            children: a => {
                                let {
                                    selected: n
                                } = a;
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
        17187: function(e, t, a) {
            a.d(t, {
                Y: function() {
                    return ThemeSelector
                }
            });
            var r = a(34583),
                n = a(83321),
                i = a(78754),
                s = a(78495),
                l = a(48586);
            let o = [{
                name: "Light",
                value: "light",
                icon: LightIcon
            }, {
                name: "Dark",
                value: "dark",
                icon: DarkIcon
            }, {
                name: "System",
                value: "system",
                icon: function(e) {
                    return (0, r.jsx)("svg", {
                        "aria-hidden": "true",
                        viewBox: "0 0 16 16",
                        ...e,
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                        })
                    })
                }
            }];

            function LightIcon(e) {
                return (0, r.jsx)("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
                    })
                })
            }

            function DarkIcon(e) {
                return (0, r.jsx)("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
                    })
                })
            }

            function ThemeSelector(e) {
                let {
                    t
                } = (0, i.Z)("common"), [a, d] = (0, s.useState)();
                return (0, s.useEffect)(() => {
                    a ? document.documentElement.setAttribute("data-theme", a.value) : d(o.find(e => e.value === document.documentElement.getAttribute("data-theme")))
                }, [a]), (0, r.jsxs)(n.R, {
                    as: "div",
                    value: a,
                    onChange: d,
                    ...e,
                    children: [(0, r.jsx)(n.R.Label, {
                        className: "sr-only",
                        children: "Theme"
                    }), (0, r.jsxs)(n.R.Button, {
                        className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                        "aria-label": null == a ? void 0 : a.name,
                        children: [(0, r.jsx)(LightIcon, {
                            className: "[[data-theme=light]_&]:block hidden h-4 w-4 fill-primary-400"
                        }), (0, r.jsx)(DarkIcon, {
                            className: "[[data-theme=dark]_&]:block hidden h-4 w-4 fill-primary-400"
                        }), (0, r.jsx)(LightIcon, {
                            className: "[:not(.dark)[data-theme=system]_&]:block hidden h-4 w-4 fill-slate-400"
                        }), (0, r.jsx)(DarkIcon, {
                            className: "[.dark[data-theme=system]_&]:block hidden h-4 w-4 fill-slate-400"
                        })]
                    }), (0, r.jsx)(n.R.Options, {
                        className: "absolute z-50 top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                        children: o.map(e => (0, r.jsx)(n.R.Option, {
                            value: e,
                            className: e => {
                                let {
                                    active: t,
                                    selected: a
                                } = e;
                                return (0, l.Z)("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                    "text-primary-500": a,
                                    "text-slate-900 dark:text-white": t && !a,
                                    "text-slate-700 dark:text-slate-400": !t && !a,
                                    "bg-slate-100 dark:bg-slate-900/40": t
                                })
                            },
                            children: a => {
                                let {
                                    selected: n
                                } = a;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        className: "rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                                        children: (0, r.jsx)(e.icon, {
                                            className: (0, l.Z)("h-4 w-4", n ? "fill-primary-400 dark:fill-primary-400" : "fill-slate-400")
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "ml-3",
                                        children: t(e.name)
                                    })]
                                })
                            }
                        }, e.value))
                    })]
                })
            }
        },
        56417: function(e, t, a) {
            a.r(t);
            var r, n, i = a(34583),
                s = a(78495),
                l = a(48586),
                o = a(90725);
            (r = n || (n = {}))[r.primary = 0] = "primary", r[r.outline = 1] = "outline", r[r.ghost = 2] = "ghost", r[r.light = 3] = "light", r[r.dark = 4] = "dark";
            let d = s.forwardRef((e, t) => {
                let {
                    children: a,
                    className: r,
                    variant: n = "primary",
                    isDarkBg: s = !1,
                    ...d
                } = e;
                return (0, i.jsx)(o.Z, {
                    ref: t,
                    ...d,
                    className: (0, l.Z)("inline-flex items-center rounded px-4 py-2 font-semibold", "focus:outline-none focus-visible:ring focus-visible:ring-primary-500", "shadow-sm", "transition-colors duration-75", ["primary" === n && ["bg-primary-500 text-white", "border border-primary-600", "hover:bg-primary-600 hover:text-white", "active:bg-primary-500", "disabled:bg-primary-400 disabled:hover:bg-primary-400"], "outline" === n && ["text-primary-500", "border border-primary-500", "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100", s && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"], "ghost" === n && ["text-primary-500", "shadow-none", "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100", s && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"], "light" === n && ["bg-white text-dark", "border border-gray-300", "hover:bg-gray-100 hover:text-dark", "active:bg-white/80 disabled:bg-gray-200", "inline-flex items-center rounded-md px-4 py-2 font-medium", "focus:outline-none focus-visible:ring focus-visible:ring-primary-500", "shadow-sm sm:text-sm", "transition-colors duration-75"], "dark" === n && ["bg-gradient-to-r from-purple-600 to-indigo-600 text-white", "border border-transparent bg-origin-border text-base", "hover:from-purple-700 hover:to-indigo-700", "active:bg-primary-500", "disabled:opacity-90 disabled:hover:opacity-100"]], "disabled:cursor-not-allowed", r),
                    children: a
                })
            });
            t.default = d
        },
        90725: function(e, t, a) {
            var r = a(34583),
                n = a(51976),
                i = a.n(n),
                s = a(78495),
                l = a(48586);
            let o = s.forwardRef((e, t) => {
                let {
                    children: a,
                    href: n,
                    openNewTab: s,
                    className: o,
                    nextLinkProps: d,
                    ...c
                } = e, m = void 0 !== s ? s : n && !n.startsWith("/") && !n.startsWith("#");
                return m ? (0, r.jsx)("a", {
                    ref: t,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: n,
                    ...c,
                    className: (0, l.Z)("cursor-newtab", o),
                    children: a
                }) : (0, r.jsx)(i(), {
                    href: n,
                    ref: t,
                    className: o,
                    ...c,
                    ...d,
                    children: a
                })
            });
            t.Z = o
        },
        57553: function(e, t, a) {
            a.d(t, {
                m: function() {
                    return c
                }
            });
            var r = a(1968),
                n = a(88330),
                i = a(78495);
            let s = i.forwardRef(function(e, t) {
                return i.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: t
                }, e), i.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                }))
            });
            var l = a(35878),
                o = a(89750),
                d = a(81643);
            let c = [{
                title: "Custom Generator",
                slug: "custom-generator",
                description: "Generate custom text for any purpose.",
                icon: l.iNY
            }, {
                title: "Instagram Post Caption",
                slug: "instagram-post-caption",
                description: "Generate a caption for an Instagram post",
                icon: d.Adh
            }, {
                title: "Paragraph Writer",
                slug: "paragraph-writer",
                description: "Generate paragraphs with the click of a button!",
                icon: l.AAJ
            }, {
                title: "Headline Generator",
                slug: "headline-generator",
                description: "Make your headlines pop with our headline generator!",
                icon: l.YHB
            }, {
                title: "Write like a native speaker",
                slug: "native-speaker",
                description: "Clear, concise and authentic writing that gets your message across effectively.",
                icon: d.axq
            }, {
                title: "Content Rewriter",
                slug: "content-rewriter",
                description: "Make your content shine with our easy-to-use content rewriter",
                icon: l.L5z
            }, {
                title: "Writing Enhancer",
                slug: "writing-enhancer",
                description: "Improve your writing with our AI-powered tool",
                icon: r.Z
            }, {
                title: "SEO Title and Meta Descriptions",
                slug: "seo-title-meta-descriptions",
                description: "Get your website to the top of the search engines!",
                icon: l.ldW
            }, {
                title: "Facebook Post Generator",
                slug: "facebook-post-generator",
                description: "Easily create unique, high-quality posts for your Facebook page - with just one click!",
                icon: l.Am9
            }, {
                title: "Response Generator",
                slug: "reply-to-messsage",
                description: "Reply to WhatsApp, Slack or any other message",
                icon: d.D4C
            }, {
                title: "Reply To Email",
                description: "Make your email replies more efficient",
                slug: "reply-to-email",
                icon: d.dMd
            }, {
                title: "Email Generation",
                slug: "email-generation",
                useOpenAI: !0,
                description: "Turn a sentence into an email",
                icon: n.Z
            }, {
                title: "LinkedIn Post Generator",
                slug: "linkedin-post-generator",
                description: "Get more out of LinkedIn with the LinkedIn Post Generator!",
                icon: o.h6E
            }, {
                title: "Content Idea Generator",
                slug: "content-idea-generator",
                description: "Get inspiration for your next piece of content by generating a huge variety of content ideas",
                icon: s
            }, {
                title: "Sentence Generator",
                slug: "sentence-generator",
                description: "Generate sentences with the click of a button!",
                icon: l.iNY
            }]
        },
        88330: function(e, t, a) {
            var r = a(78495);
            let n = r.forwardRef(function(e, t) {
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
                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                }))
            });
            t.Z = n
        },
        1968: function(e, t, a) {
            var r = a(78495);
            let n = r.forwardRef(function(e, t) {
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
                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                }))
            });
            t.Z = n
        }
    }
]);