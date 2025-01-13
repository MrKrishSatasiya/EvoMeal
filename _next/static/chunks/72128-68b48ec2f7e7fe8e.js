"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [72128], {
        65377: function(e, r, n) {
            n.d(r, {
                S1: function() {
                    return off
                },
                ZT: function() {
                    return noop
                },
                jU: function() {
                    return o
                },
                on: function() {
                    return on
                }
            });
            var noop = function() {};

            function on(e) {
                for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                e && e.addEventListener && e.addEventListener.apply(e, r)
            }

            function off(e) {
                for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                e && e.removeEventListener && e.removeEventListener.apply(e, r)
            }
            var o = "undefined" != typeof window
        },
        70197: function(e, r, n) {
            var o = n(78495),
                i = n(65377);
            r.Z = function(e, r, n) {
                if (!i.jU) return [r, i.ZT, i.ZT];
                if (!e) throw Error("useLocalStorage key may not be falsy");
                var a = n ? n.raw ? function(e) {
                        return e
                    } : n.deserializer : JSON.parse,
                    c = (0, o.useRef)(function(e) {
                        try {
                            var o = n ? n.raw ? String : n.serializer : JSON.stringify,
                                i = localStorage.getItem(e);
                            if (null !== i) return a(i);
                            return r && localStorage.setItem(e, o(r)), r
                        } catch (e) {
                            return r
                        }
                    }),
                    s = (0, o.useState)(function() {
                        return c.current(e)
                    }),
                    d = s[0],
                    f = s[1];
                (0, o.useLayoutEffect)(function() {
                    return f(c.current(e))
                }, [e]);
                var p = (0, o.useCallback)(function(r) {
                    try {
                        var o = "function" == typeof r ? r(d) : r;
                        if (void 0 === o) return;
                        var i = void 0;
                        i = n ? n.raw ? "string" == typeof o ? o : JSON.stringify(o) : n.serializer ? n.serializer(o) : JSON.stringify(o) : JSON.stringify(o), localStorage.setItem(e, i), f(a(i))
                    } catch (e) {}
                }, [e, f]);
                return [d, p, (0, o.useCallback)(function() {
                    try {
                        localStorage.removeItem(e), f(void 0)
                    } catch (e) {}
                }, [e, f])]
            }
        },
        29371: function(e, r, n) {
            n.d(r, {
                d: function() {
                    return p
                },
                f: function() {
                    return k
                }
            });
            var o = n(78495),
                i = n(44609),
                a = n(92085),
                c = n(64291),
                s = n(54623),
                d = n(52820);
            let f = (0, o.createContext)(null);

            function k() {
                let [e, r] = (0, o.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, o.useMemo)(() => function(e) {
                    let n = (0, d.z)(e => (r(r => [...r, e]), () => r(r => {
                            let n = r.slice(),
                                o = n.indexOf(e);
                            return -1 !== o && n.splice(o, 1), n
                        }))),
                        i = (0, o.useMemo)(() => ({
                            register: n,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        }), [n, e.slot, e.name, e.props]);
                    return o.createElement(f.Provider, {
                        value: i
                    }, e.children)
                }, [r])]
            }
            let p = (0, a.yV)(function(e, r) {
                let n = function u() {
                        let e = (0, o.useContext)(f);
                        if (null === e) {
                            let e = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(e, u), e
                        }
                        return e
                    }(),
                    d = `headlessui-description-${(0,i.M)()}`,
                    p = (0, s.T)(r);
                (0, c.e)(() => n.register(d), [d, n.register]);
                let v = {
                    ref: p,
                    ...n.props,
                    id: d
                };
                return (0, a.sY)({
                    ourProps: v,
                    theirProps: e,
                    slot: n.slot || {},
                    defaultTag: "p",
                    name: n.name || "Description"
                })
            })
        },
        91654: function(e, r, n) {
            n.d(r, {
                V: function() {
                    return er
                }
            });
            var o, i, a, c, s = n(78495),
                d = n(3455),
                f = n(92085),
                p = n(54623),
                v = n(17925),
                g = n(46022),
                h = n(44609),
                E = n(75028),
                y = n(87425),
                w = n(36600),
                b = n(52820),
                T = n(32642),
                C = n(12864),
                P = n(92657),
                R = n(27296),
                S = n(8969);

            function m(e, r) {
                let n = (0, s.useRef)([]),
                    o = (0, b.z)(e);
                (0, s.useEffect)(() => {
                    let e = [...n.current];
                    for (let [i, a] of r.entries())
                        if (n.current[i] !== a) {
                            let i = o(r, e);
                            return n.current = r, i
                        }
                }, [o, ...r])
            }
            var D = ((o = D || {})[o.None = 1] = "None", o[o.InitialFocus = 2] = "InitialFocus", o[o.TabLock = 4] = "TabLock", o[o.FocusLock = 8] = "FocusLock", o[o.RestoreFocus = 16] = "RestoreFocus", o[o.All = 30] = "All", o);
            let O = Object.assign((0, f.yV)(function(e, r) {
                let n = (0, s.useRef)(null),
                    o = (0, p.T)(n, r),
                    {
                        initialFocus: i,
                        containers: a,
                        features: c = 30,
                        ...v
                    } = e;
                (0, E.H)() || (c = 1);
                let g = (0, P.i)(n);
                ! function({
                    ownerDocument: e
                }, r) {
                    let n = (0, s.useRef)(null);
                    (0, R.O)(null == e ? void 0 : e.defaultView, "focusout", e => {
                        !r || n.current || (n.current = e.target)
                    }, !0), m(() => {
                        r || ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, w.C5)(n.current), n.current = null)
                    }, [r]);
                    let o = (0, s.useRef)(!1);
                    (0, s.useEffect)(() => (o.current = !1, () => {
                        o.current = !0, (0, S.Y)(() => {
                            o.current && ((0, w.C5)(n.current), n.current = null)
                        })
                    }), [])
                }({
                    ownerDocument: g
                }, !!(16 & c));
                let h = function({
                    ownerDocument: e,
                    container: r,
                    initialFocus: n
                }, o) {
                    let i = (0, s.useRef)(null),
                        a = (0, C.t)();
                    return m(() => {
                        if (!o) return;
                        let c = r.current;
                        c && (0, S.Y)(() => {
                            if (!a.current) return;
                            let r = null == e ? void 0 : e.activeElement;
                            if (null != n && n.current) {
                                if ((null == n ? void 0 : n.current) === r) {
                                    i.current = r;
                                    return
                                }
                            } else if (c.contains(r)) {
                                i.current = r;
                                return
                            }
                            null != n && n.current ? (0, w.C5)(n.current) : (0, w.jA)(c, w.TO.First) === w.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = null == e ? void 0 : e.activeElement
                        })
                    }, [o]), i
                }({
                    ownerDocument: g,
                    container: n,
                    initialFocus: i
                }, !!(2 & c));
                ! function({
                    ownerDocument: e,
                    container: r,
                    containers: n,
                    previousActiveElement: o
                }, i) {
                    let a = (0, C.t)();
                    (0, R.O)(null == e ? void 0 : e.defaultView, "focus", e => {
                        if (!i || !a.current) return;
                        let c = new Set(null == n ? void 0 : n.current);
                        c.add(r);
                        let s = o.current;
                        if (!s) return;
                        let d = e.target;
                        d && d instanceof HTMLElement ? function(e, r) {
                            var n;
                            for (let o of e)
                                if (null != (n = o.current) && n.contains(r)) return !0;
                            return !1
                        }(c, d) ? (o.current = d, (0, w.C5)(d)) : (e.preventDefault(), e.stopPropagation(), (0, w.C5)(s)) : (0, w.C5)(o.current)
                    }, !0)
                }({
                    ownerDocument: g,
                    container: n,
                    containers: a,
                    previousActiveElement: h
                }, !!(8 & c));
                let D = (0, T.l)(),
                    O = (0, b.z)(() => {
                        let e = n.current;
                        e && (0, d.E)(D.current, {
                            [T.N.Forwards]: () => (0, w.jA)(e, w.TO.First),
                            [T.N.Backwards]: () => (0, w.jA)(e, w.TO.Last)
                        })
                    });
                return s.createElement(s.Fragment, null, !!(4 & c) && s.createElement(y._, {
                    as: "button",
                    type: "button",
                    onFocus: O,
                    features: y.A.Focusable
                }), (0, f.sY)({
                    ourProps: {
                        ref: o
                    },
                    theirProps: v,
                    defaultTag: "div",
                    name: "FocusTrap"
                }), !!(4 & c) && s.createElement(y._, {
                    as: "button",
                    type: "button",
                    onFocus: O,
                    features: y.A.Focusable
                }))
            }), {
                features: D
            });
            var A = n(97918),
                M = n(64291);
            let x = new Set,
                F = new Map;

            function u(e) {
                e.setAttribute("aria-hidden", "true"), e.inert = !0
            }

            function l(e) {
                let r = F.get(e);
                r && (null === r["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert)
            }
            var _ = n(80297);
            let Y = (0, s.createContext)(!1);

            function portal_force_root_P(e) {
                return s.createElement(Y.Provider, {
                    value: e.force
                }, e.children)
            }
            var I = n(80080);
            let N = s.Fragment,
                z = (0, f.yV)(function(e, r) {
                    let n = (0, s.useRef)(null),
                        o = (0, p.T)((0, p.h)(e => {
                            n.current = e
                        }), r),
                        i = (0, P.i)(n),
                        a = function(e) {
                            let r = (0, s.useContext)(Y),
                                n = (0, s.useContext)(j),
                                o = (0, P.i)(e),
                                [i, a] = (0, s.useState)(() => {
                                    if (!r && null !== n || I.s) return null;
                                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === o) return null;
                                    let i = o.createElement("div");
                                    return i.setAttribute("id", "headlessui-portal-root"), o.body.appendChild(i)
                                });
                            return (0, s.useEffect)(() => {
                                null !== i && (null != o && o.body.contains(i) || null == o || o.body.appendChild(i))
                            }, [i, o]), (0, s.useEffect)(() => {
                                r || null !== n && a(n.current)
                            }, [n, a, r]), i
                        }(n),
                        [c] = (0, s.useState)(() => {
                            var e;
                            return I.s ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
                        }),
                        d = (0, E.H)(),
                        v = (0, s.useRef)(!1);
                    return (0, M.e)(() => {
                        if (v.current = !1, !(!a || !c)) return a.contains(c) || (c.setAttribute("data-headlessui-portal", ""), a.appendChild(c)), () => {
                            v.current = !0, (0, S.Y)(() => {
                                var e;
                                v.current && a && c && (a.removeChild(c), a.childNodes.length <= 0 && (null == (e = a.parentElement) || e.removeChild(a)))
                            })
                        }
                    }, [a, c]), d && a && c ? (0, _.createPortal)((0, f.sY)({
                        ourProps: {
                            ref: o
                        },
                        theirProps: e,
                        defaultTag: N,
                        name: "Portal"
                    }), c) : null
                }),
                V = s.Fragment,
                j = (0, s.createContext)(null),
                $ = Object.assign(z, {
                    Group: (0, f.yV)(function(e, r) {
                        let {
                            target: n,
                            ...o
                        } = e, i = {
                            ref: (0, p.T)(r)
                        };
                        return s.createElement(j.Provider, {
                            value: n
                        }, (0, f.sY)({
                            ourProps: i,
                            theirProps: o,
                            defaultTag: V,
                            name: "Popover.Group"
                        }))
                    })
                });
            var B = n(29371),
                H = n(52918);
            let Z = (0, s.createContext)(() => {});
            Z.displayName = "StackContext";
            var J = ((i = J || {})[i.Add = 0] = "Add", i[i.Remove = 1] = "Remove", i);

            function stack_context_M({
                children: e,
                onUpdate: r,
                type: n,
                element: o,
                enabled: i
            }) {
                let a = (0, s.useContext)(Z),
                    c = (0, b.z)((...e) => {
                        null == r || r(...e), a(...e)
                    });
                return (0, M.e)(() => {
                    let e = void 0 === i || !0 === i;
                    return e && c(0, n, o), () => {
                        e && c(1, n, o)
                    }
                }, [c, n, o, i]), s.createElement(Z.Provider, {
                    value: c
                }, e)
            }
            var W = n(67593),
                U = n(89020),
                q = ((a = q || {})[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a),
                G = ((c = G || {})[c.SetTitleId = 0] = "SetTitleId", c);
            let K = {
                    0: (e, r) => e.titleId === r.id ? e : { ...e,
                        titleId: r.id
                    }
                },
                Q = (0, s.createContext)(null);

            function L(e) {
                let r = (0, s.useContext)(Q);
                if (null === r) {
                    let r = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(r, L), r
                }
                return r
            }

            function ve(e, r) {
                return (0, d.E)(r.type, K, e, r)
            }
            Q.displayName = "DialogContext";
            let X = f.AN.RenderStrategy | f.AN.Static,
                ee = (0, f.yV)(function(e, r) {
                    var n;
                    let {
                        open: o,
                        onClose: i,
                        initialFocus: a,
                        __demoMode: c = !1,
                        ...g
                    } = e, [w, T] = (0, s.useState)(0), C = (0, H.oJ)();
                    void 0 === o && null !== C && (o = (0, d.E)(C, {
                        [H.ZM.Open]: !0,
                        [H.ZM.Closed]: !1
                    }));
                    let S = (0, s.useRef)(new Set),
                        D = (0, s.useRef)(null),
                        _ = (0, p.T)(D, r),
                        Y = (0, s.useRef)(null),
                        I = (0, P.i)(D),
                        N = e.hasOwnProperty("open") || null !== C,
                        z = e.hasOwnProperty("onClose");
                    if (!N && !z) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!N) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!z) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof o) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
                    if ("function" != typeof i) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);
                    let V = o ? 0 : 1,
                        [j, Z] = (0, s.useReducer)(ve, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, s.createRef)()
                        }),
                        q = (0, b.z)(() => i(!1)),
                        G = (0, b.z)(e => Z({
                            type: 0,
                            id: e
                        })),
                        K = !!(0, E.H)() && !c && 0 === V,
                        ee = w > 1,
                        et = null !== (0, s.useContext)(Q),
                        er = ee ? "parent" : "leaf";
                    (function(e, r = !0) {
                        (0, M.e)(() => {
                            if (!r || !e.current) return;
                            let n = e.current,
                                o = (0, A.r)(n);
                            if (o) {
                                for (let e of (x.add(n), F.keys())) e.contains(n) && (l(e), F.delete(e));
                                return o.querySelectorAll("body > *").forEach(e => {
                                    if (e instanceof HTMLElement) {
                                        for (let r of x)
                                            if (e.contains(r)) return;
                                        1 === x.size && (F.set(e, {
                                            "aria-hidden": e.getAttribute("aria-hidden"),
                                            inert: e.inert
                                        }), u(e))
                                    }
                                }), () => {
                                    if (x.delete(n), x.size > 0) o.querySelectorAll("body > *").forEach(e => {
                                        if (e instanceof HTMLElement && !F.has(e)) {
                                            for (let r of x)
                                                if (e.contains(r)) return;
                                            F.set(e, {
                                                "aria-hidden": e.getAttribute("aria-hidden"),
                                                inert: e.inert
                                            }), u(e)
                                        }
                                    });
                                    else
                                        for (let e of F.keys()) l(e), F.delete(e)
                                }
                            }
                        }, [r])
                    })(D, !!ee && K), (0, W.O)(() => {
                        var e, r;
                        return [...Array.from(null != (e = null == I ? void 0 : I.querySelectorAll("body > *, [data-headlessui-portal]")) ? e : []).filter(e => !(!(e instanceof HTMLElement) || e.contains(Y.current) || j.panelRef.current && e.contains(j.panelRef.current))), null != (r = j.panelRef.current) ? r : D.current]
                    }, q, K && !ee), (0, R.O)(null == I ? void 0 : I.defaultView, "keydown", e => {
                        e.defaultPrevented || e.key === v.R.Escape && 0 === V && (ee || (e.preventDefault(), e.stopPropagation(), q()))
                    }), n = 0 === V && !et, (0, s.useEffect)(() => {
                        var e;
                        if (!n || !I) return;
                        let r = (0, U.k)();

                        function t(e, n, o) {
                            let i = e.style.getPropertyValue(n);
                            return Object.assign(e.style, {
                                [n]: o
                            }), r.add(() => {
                                Object.assign(e.style, {
                                    [n]: i
                                })
                            })
                        }
                        let o = I.documentElement,
                            i = (null != (e = I.defaultView) ? e : window).innerWidth - o.clientWidth;
                        if (t(o, "overflow", "hidden"), i > 0) {
                            let e = o.clientWidth - o.offsetWidth;
                            t(o, "paddingRight", `${i-e}px`)
                        }
                        if (/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0) {
                            let e = window.pageYOffset;
                            t(o, "position", "fixed"), t(o, "marginTop", `-${e}px`), t(o, "width", "100%"), r.add(() => window.scrollTo(0, e))
                        }
                        return r.dispose
                    }, [I, n]), (0, s.useEffect)(() => {
                        if (0 !== V || !D.current) return;
                        let e = new IntersectionObserver(e => {
                            for (let r of e) 0 === r.boundingClientRect.x && 0 === r.boundingClientRect.y && 0 === r.boundingClientRect.width && 0 === r.boundingClientRect.height && q()
                        });
                        return e.observe(D.current), () => e.disconnect()
                    }, [V, D, q]);
                    let [en, eo] = (0, B.f)(), el = `headlessui-dialog-${(0,h.M)()}`, ei = (0, s.useMemo)(() => [{
                        dialogState: V,
                        close: q,
                        setTitleId: G
                    }, j], [V, j, q, G]), ea = (0, s.useMemo)(() => ({
                        open: 0 === V
                    }), [V]), eu = {
                        ref: _,
                        id: el,
                        role: "dialog",
                        "aria-modal": 0 === V || void 0,
                        "aria-labelledby": j.titleId,
                        "aria-describedby": en
                    };
                    return s.createElement(stack_context_M, {
                        type: "Dialog",
                        enabled: 0 === V,
                        element: D,
                        onUpdate: (0, b.z)((e, r, n) => {
                            "Dialog" === r && (0, d.E)(e, {
                                [J.Add]() {
                                    S.current.add(n), T(e => e + 1)
                                },
                                [J.Remove]() {
                                    S.current.add(n), T(e => e - 1)
                                }
                            })
                        })
                    }, s.createElement(portal_force_root_P, {
                        force: !0
                    }, s.createElement($, null, s.createElement(Q.Provider, {
                        value: ei
                    }, s.createElement($.Group, {
                        target: D
                    }, s.createElement(portal_force_root_P, {
                        force: !1
                    }, s.createElement(eo, {
                        slot: ea,
                        name: "Dialog.Description"
                    }, s.createElement(O, {
                        initialFocus: a,
                        containers: S,
                        features: K ? (0, d.E)(er, {
                            parent: O.features.RestoreFocus,
                            leaf: O.features.All & ~O.features.FocusLock
                        }) : O.features.None
                    }, (0, f.sY)({
                        ourProps: eu,
                        theirProps: g,
                        slot: ea,
                        defaultTag: "div",
                        features: X,
                        visible: 0 === V,
                        name: "Dialog"
                    })))))))), s.createElement(y._, {
                        features: y.A.Hidden,
                        ref: Y
                    }))
                }),
                et = (0, f.yV)(function(e, r) {
                    let [{
                        dialogState: n,
                        close: o
                    }] = L("Dialog.Overlay"), i = (0, p.T)(r), a = `headlessui-dialog-overlay-${(0,h.M)()}`, c = (0, b.z)(e => {
                        if (e.target === e.currentTarget) {
                            if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                            e.preventDefault(), e.stopPropagation(), o()
                        }
                    }), d = (0, s.useMemo)(() => ({
                        open: 0 === n
                    }), [n]);
                    return (0, f.sY)({
                        ourProps: {
                            ref: i,
                            id: a,
                            "aria-hidden": !0,
                            onClick: c
                        },
                        theirProps: e,
                        slot: d,
                        defaultTag: "div",
                        name: "Dialog.Overlay"
                    })
                }),
                er = Object.assign(ee, {
                    Backdrop: (0, f.yV)(function(e, r) {
                        let [{
                            dialogState: n
                        }, o] = L("Dialog.Backdrop"), i = (0, p.T)(r), a = `headlessui-dialog-backdrop-${(0,h.M)()}`;
                        (0, s.useEffect)(() => {
                            if (null === o.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                        }, [o.panelRef]);
                        let c = (0, s.useMemo)(() => ({
                            open: 0 === n
                        }), [n]);
                        return s.createElement(portal_force_root_P, {
                            force: !0
                        }, s.createElement($, null, (0, f.sY)({
                            ourProps: {
                                ref: i,
                                id: a,
                                "aria-hidden": !0
                            },
                            theirProps: e,
                            slot: c,
                            defaultTag: "div",
                            name: "Dialog.Backdrop"
                        })))
                    }),
                    Panel: (0, f.yV)(function(e, r) {
                        let [{
                            dialogState: n
                        }, o] = L("Dialog.Panel"), i = (0, p.T)(r, o.panelRef), a = `headlessui-dialog-panel-${(0,h.M)()}`, c = (0, s.useMemo)(() => ({
                            open: 0 === n
                        }), [n]), d = (0, b.z)(e => {
                            e.stopPropagation()
                        });
                        return (0, f.sY)({
                            ourProps: {
                                ref: i,
                                id: a,
                                onClick: d
                            },
                            theirProps: e,
                            slot: c,
                            defaultTag: "div",
                            name: "Dialog.Panel"
                        })
                    }),
                    Overlay: et,
                    Title: (0, f.yV)(function(e, r) {
                        let [{
                            dialogState: n,
                            setTitleId: o
                        }] = L("Dialog.Title"), i = `headlessui-dialog-title-${(0,h.M)()}`, a = (0, p.T)(r);
                        (0, s.useEffect)(() => (o(i), () => o(null)), [i, o]);
                        let c = (0, s.useMemo)(() => ({
                            open: 0 === n
                        }), [n]);
                        return (0, f.sY)({
                            ourProps: {
                                ref: a,
                                id: i
                            },
                            theirProps: e,
                            slot: c,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    }),
                    Description: B.d
                })
        },
        56747: function(e, r, n) {
            var o = n(78495);
            let i = o.forwardRef(function(e, r) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    ref: r
                }, e), o.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12"
                }))
            });
            r.Z = i
        },
        48618: function(e, r, n) {
            var o = n(78495);
            let i = o.forwardRef(function(e, r) {
                return o.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: r
                }, e), o.createElement("path", {
                    fillRule: "evenodd",
                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                }))
            });
            r.Z = i
        }
    }
]);