"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6179, 6875], {
        6179: function(e, t, a) {
            a.r(t);
            var s = a(34583),
                l = a(76085),
                r = a.n(l),
                i = a(78754),
                o = a(78495);
            t.default = () => {
                let {
                    t: e
                } = (0, i.Z)("footer"), [t, a] = (0, o.useState)("light");
                return (0, o.useEffect)(() => {
                    let e = localStorage.getItem("theme");
                    "dark" !== e && ("theme" in localStorage && "system" !== e || !window.matchMedia("(prefers-color-scheme: dark)").matches) || a("dark")
                }, []), (0, s.jsx)("section", {
                    className: "body-font text-gray-600 dark:bg-slate-900",
                    children: (0, s.jsxs)("div", {
                        className: "container mx-auto px-5 py-24",
                        children: [(0, s.jsxs)("div", {
                            className: "lg:text-center",
                            children: [(0, s.jsx)("p", {
                                className: "mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",
                                children: e("Testimonials")
                            }), (0, s.jsx)("p", {
                                className: "flex lg:justify-center pt-3",
                                children: (0, s.jsx)("a", {
                                    href: "https://www.trustpilot.com/review/easy-peasy.ai",
                                    target: "_blank",
                                    rel: "noopener nofollow noreferrer",
                                    children: (0, s.jsx)(r(), {
                                        src: "/images/stars-5.svg",
                                        alt: "Our Trustpilot score",
                                        width: "200",
                                        height: "40"
                                    })
                                })
                            }), (0, s.jsx)("p", {
                                className: "mt-4 mb-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto",
                                children: e("Read the comments that people have made on public platforms.")
                            })]
                        }), (0, s.jsx)("div", {
                            className: "-m-4 mt-8 ",
                            children: "dark" === t ? (0, s.jsx)("iframe", {
                                id: "testimonialto-easy-peasy-ai-tag-all-dark-animated",
                                src: "https://embed-v2.testimonial.to/w/easy-peasy-ai?animated=on&theme=dark&shadowColor=0f172a&card=base&loadMore=on&initialCount=10&hideDate=on&tag=all&showMore=on",
                                frameBorder: "0",
                                width: "100%",
                                height: "800px",
                                loading: "lazy"
                            }) : (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)("iframe", {
                                    id: "testimonialto-easy-peasy-ai-tag-all-light-animated",
                                    src: "https://embed-v2.testimonial.to/w/easy-peasy-ai?theme=light&animated=on&card=base&loadMore=on&initialCount=10&hideDate=on&tag=all&showMore=on",
                                    frameBorder: "0",
                                    scrolling: "no",
                                    height: "800px",
                                    width: "100%",
                                    loading: "lazy"
                                })
                            })
                        })]
                    })
                })
            }
        }
    }
]);