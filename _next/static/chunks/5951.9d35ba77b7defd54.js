"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5951, 7203], {
        5951: function(e, t, s) {
            s.r(t);
            var a = s(34583),
                i = s(76085),
                l = s.n(i),
                r = s(51976),
                n = s.n(r),
                g = s(78754);
            s(78495), t.default = e => {
                let {
                    preset: t = ""
                } = e, {
                    t: s
                } = (0, g.Z)("footer");
                return (0, a.jsx)("div", {
                    className: "bg-white dark:bg-slate-800",
                    children: (0, a.jsx)("div", {
                        className: "mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8",
                        children: (0, a.jsxs)("div", {
                            className: "relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0",
                            children: [(0, a.jsxs)("svg", {
                                viewBox: "0 0 1024 1024",
                                className: "absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0",
                                "aria-hidden": "true",
                                children: [(0, a.jsx)("circle", {
                                    cx: 512,
                                    cy: 512,
                                    r: 512,
                                    fill: "url(#759c1415-0410-454c-8f7c-9a820de03641)",
                                    fillOpacity: "0.7"
                                }), (0, a.jsx)("defs", {
                                    children: (0, a.jsxs)("radialGradient", {
                                        id: "759c1415-0410-454c-8f7c-9a820de03641",
                                        children: [(0, a.jsx)("stop", {
                                            stopColor: "#7775D6"
                                        }), (0, a.jsx)("stop", {
                                            offset: 1,
                                            stopColor: "#E935C1"
                                        })]
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left",
                                children: [(0, a.jsxs)("h2", {
                                    className: "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                                    children: [s("Create Faster With AI"), (0, a.jsx)("br", {}), s("Try it Risk-Free.")]
                                }), (0, a.jsx)("p", {
                                    className: "mt-6 text-lg leading-8 text-gray-300",
                                    children: s("Stop wasting time and start creating high-quality content immediately with power of generative AI.")
                                }), (0, a.jsx)("div", {
                                    className: "mt-10 flex items-center justify-center gap-x-6 lg:justify-start",
                                    children: (0, a.jsx)(n(), {
                                        href: t ? "/login?preset=".concat(t) : "/login#auth-sign-up",
                                        className: "rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                        children: s("Get started for free")
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "relative mt-16 h-80 lg:mt-8",
                                children: (0, a.jsx)(l(), {
                                    className: "absolute left-0 top-0 w-[47rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10",
                                    src: "ai-images" === t ? "/images/ai-images-new.jpg" : "tts" === t ? "/images/text-to-speech.png" : "audios" === t ? "/images/ai-transcription.jpg" : "chat" === t ? "/images/cta-image4.png" : "templates" === t ? "/images/presets3.jpg" : "bots" === t ? "/images/bot-management.jpg" : .5 > Math.random() ? "/images/cta-image3.png" : "/images/cta-image4.png",
                                    alt: "App screenshot",
                                    width: 1824,
                                    height: 1080
                                })
                            })]
                        })
                    })
                })
            }
        }
    }
]);