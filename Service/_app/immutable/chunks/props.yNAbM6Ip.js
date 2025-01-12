import {
    W as x,
    ak as G,
    al as $,
    ab as m,
    am as H,
    an as g,
    ao as D,
    U as v,
    g as y,
    N as B,
    ap as V,
    Z as W,
    a1 as J,
    ag as Q,
    aa as z,
    y as U,
    aq as X,
    ar as p,
    as as k,
    at as ee,
    b as j,
    au as re,
    av as ne,
    aw as F,
    ax as te,
    x as ae,
    ay as ie,
    az as se,
    aA as ue,
    f as K,
    aB as fe,
    aC as le
} from "./runtime.B6eHkxRm.js";
import {
    s as de
} from "./utils.CIYfZ980.js";

function O(e, n = null, _) {
    if (typeof e != "object" || e === null || x in e) return e;
    const l = W(e);
    if (l !== G && l !== $) return e;
    var s = new Map,
        c = J(e),
        P = m(0);
    c && s.set("length", m(e.length));
    var w;
    return new Proxy(e, {
        defineProperty(u, r, t) {
            (!("value" in t) || t.configurable === !1 || t.enumerable === !1 || t.writable === !1) && H();
            var i = s.get(r);
            return i === void 0 ? (i = m(t.value), s.set(r, i)) : g(i, O(t.value, w)), !0
        },
        deleteProperty(u, r) {
            var t = s.get(r);
            if (t === void 0) r in u && s.set(r, m(v));
            else {
                if (c && typeof r == "string") {
                    var i = s.get("length"),
                        a = Number(r);
                    Number.isInteger(a) && a < i.v && g(i, a)
                }
                g(t, v), M(P)
            }
            return !0
        },
        get(u, r, t) {
            var o;
            if (r === x) return e;
            var i = s.get(r),
                a = r in u;
            if (i === void 0 && (!a || (o = D(u, r)) != null && o.writable) && (i = m(O(a ? u[r] : v, w)), s.set(r, i)), i !== void 0) {
                var f = y(i);
                return f === v ? void 0 : f
            }
            return Reflect.get(u, r, t)
        },
        getOwnPropertyDescriptor(u, r) {
            var t = Reflect.getOwnPropertyDescriptor(u, r);
            if (t && "value" in t) {
                var i = s.get(r);
                i && (t.value = y(i))
            } else if (t === void 0) {
                var a = s.get(r),
                    f = a == null ? void 0 : a.v;
                if (a !== void 0 && f !== v) return {
                    enumerable: !0,
                    configurable: !0,
                    value: f,
                    writable: !0
                }
            }
            return t
        },
        has(u, r) {
            var f;
            if (r === x) return !0;
            var t = s.get(r),
                i = t !== void 0 && t.v !== v || Reflect.has(u, r);
            if (t !== void 0 || B !== null && (!i || (f = D(u, r)) != null && f.writable)) {
                t === void 0 && (t = m(i ? O(u[r], w) : v), s.set(r, t));
                var a = y(t);
                if (a === v) return !1
            }
            return i
        },
        set(u, r, t, i) {
            var R;
            var a = s.get(r),
                f = r in u;
            if (c && r === "length")
                for (var o = t; o < a.v; o += 1) {
                    var I = s.get(o + "");
                    I !== void 0 ? g(I, v) : o in u && (I = m(v), s.set(o + "", I))
                }
            a === void 0 ? (!f || (R = D(u, r)) != null && R.writable) && (a = m(void 0), g(a, O(t, w)), s.set(r, a)) : (f = a.v !== v, g(a, O(t, w)));
            var b = Reflect.getOwnPropertyDescriptor(u, r);
            if (b != null && b.set && b.set.call(i, t), !f) {
                if (c && typeof r == "string") {
                    var E = s.get("length"),
                        S = Number(r);
                    Number.isInteger(S) && S >= E.v && g(E, S + 1)
                }
                M(P)
            }
            return !0
        },
        ownKeys(u) {
            y(P);
            var r = Reflect.ownKeys(u).filter(a => {
                var f = s.get(a);
                return f === void 0 || f.v !== v
            });
            for (var [t, i] of s) i.v !== v && !(t in u) && r.push(t);
            return r
        },
        setPrototypeOf() {
            V()
        }
    })
}

function M(e, n = 1) {
    g(e, e.v + n)
}

function Y(e) {
    return e !== null && typeof e == "object" && x in e ? e[x] : e
}

function be(e, n) {
    return Object.is(Y(e), Y(n))
}
let N = !1;

function ge(e, n, _) {
    const l = _[n] ? ? = {
        store: null,
        source: z(void 0),
        unsubscribe: U
    };
    if (l.store !== e)
        if (l.unsubscribe(), l.store = e ? ? null, e == null) l.source.v = void 0, l.unsubscribe = U;
        else {
            var s = !0;
            l.unsubscribe = de(e, c => {
                s ? l.source.v = c : g(l.source, c)
            }), s = !1
        }
    return y(l.source)
}

function ye(e, n) {
    return e.set(n), n
}

function me() {
    const e = {};
    return Q(() => {
        for (var n in e) e[n].unsubscribe()
    }), e
}

function Pe(e, n, _) {
    return e.set(_), n
}

function we() {
    N = !0
}

function _e(e) {
    var n = N;
    try {
        return N = !1, [e(), N]
    } finally {
        N = n
    }
}
const ve = {
    get(e, n) {
        if (!e.exclude.includes(n)) return e.props[n]
    },
    set(e, n) {
        return !1
    },
    getOwnPropertyDescriptor(e, n) {
        if (!e.exclude.includes(n) && n in e.props) return {
            enumerable: !0,
            configurable: !0,
            value: e.props[n]
        }
    },
    has(e, n) {
        return e.exclude.includes(n) ? !1 : n in e.props
    },
    ownKeys(e) {
        return Reflect.ownKeys(e.props).filter(n => !e.exclude.includes(n))
    }
};

function Ie(e, n, _) {
    return new Proxy({
        props: e,
        exclude: n
    }, ve)
}

function Z(e) {
    for (var n = B, _ = B; n !== null && !(n.f & (re | ne));) n = n.parent;
    try {
        return F(n), e()
    } finally {
        F(_)
    }
}

function Re(e, n, _, l) {
    var q;
    var s = (_ & te) !== 0,
        c = !ae || (_ & ie) !== 0,
        P = (_ & se) !== 0,
        w = (_ & le) !== 0,
        u = !1,
        r;
    P ? [r, u] = _e(() => e[n]) : r = e[n];
    var t = x in e || ue in e,
        i = ((q = D(e, n)) == null ? void 0 : q.set) ? ? (t && P && n in e ? d => e[n] = d : void 0),
        a = l,
        f = !0,
        o = !1,
        I = () => (o = !0, f && (f = !1, w ? a = j(l) : a = l), a);
    r === void 0 && l !== void 0 && (i && c && X(), r = I(), i && i(r));
    var b;
    if (c) b = () => {
        var d = e[n];
        return d === void 0 ? I() : (f = !0, o = !1, d)
    };
    else {
        var E = Z(() => (s ? K : fe)(() => e[n]));
        E.f |= p, b = () => {
            var d = y(E);
            return d !== void 0 && (a = void 0), d === void 0 ? a : d
        }
    }
    if (!(_ & k)) return b;
    if (i) {
        var S = e.$$legacy;
        return function(d, h) {
            return arguments.length > 0 ? ((!c || !h || S || u) && i(h ? b() : d), d) : b()
        }
    }
    var R = !1,
        C = !1,
        T = z(r),
        A = Z(() => K(() => {
            var d = b(),
                h = y(T);
            return R ? (R = !1, C = !0, h) : (C = !1, T.v = d)
        }));
    return s || (A.equals = ee),
        function(d, h) {
            if (arguments.length > 0) {
                const L = h ? y(A) : c && P ? O(d) : d;
                return A.equals(L) || (R = !0, g(T, L), o && a !== void 0 && (a = L), j(() => y(A))), d
            }
            return y(A)
        }
}
export {
    O as a, Pe as b, ge as c, ye as d, be as i, we as m, Re as p, Ie as r, me as s
};
//# sourceMappingURL=props.yNAbM6Ip.js.map