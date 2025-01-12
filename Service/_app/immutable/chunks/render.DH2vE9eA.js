import {
    z as m,
    A as L,
    H,
    B as I,
    C as g,
    D as c,
    E as b,
    o as O,
    v as _,
    F as C,
    G as M,
    I as Y,
    J as x,
    K as S,
    L as V,
    M as $,
    t as j,
    p as k,
    m as w,
    N as z,
    i as B,
    c as F
} from "./runtime.B6eHkxRm.js";
import {
    a as G,
    r as N,
    b as J,
    h,
    i as K
} from "./svelte-head.Cog7lhpT.js";
import {
    b as P
} from "./disclose-version.lyO5itLq.js";
let E = !0;

function X(t) {
    E = t
}

function Z(t, e) {
    var r = e == null ? "" : typeof e == "object" ? e + "" : e;
    r !== (t.__t ? ? = t.nodeValue) && (t.__t = r, t.nodeValue = r == null ? "" : r + "")
}

function W(t, e) {
    return A(t, e)
}

function ee(t, e) {
    m(), e.intro = e.intro ? ? !1;
    const r = e.target,
        u = w,
        l = _;
    try {
        for (var a = L(r); a && (a.nodeType !== 8 || a.data !== H);) a = I(a);
        if (!a) throw g;
        c(!0), b(a), O();
        const i = A(t, { ...e,
            anchor: a
        });
        if (_ === null || _.nodeType !== 8 || _.data !== C) throw M(), g;
        return c(!1), i
    } catch (i) {
        if (i === g) return e.recover === !1 && Y(), m(), x(r), c(!1), W(t, e);
        throw i
    } finally {
        c(u), b(l), J()
    }
}
const d = new Map;

function A(t, {
    target: e,
    anchor: r,
    props: u = {},
    events: l,
    context: a,
    intro: i = !0
}) {
    m();
    var v = new Set,
        y = o => {
            for (var s = 0; s < o.length; s++) {
                var n = o[s];
                if (!v.has(n)) {
                    v.add(n);
                    var f = K(n);
                    e.addEventListener(n, h, {
                        passive: f
                    });
                    var T = d.get(n);
                    T === void 0 ? (document.addEventListener(n, h, {
                        passive: f
                    }), d.set(n, 1)) : d.set(n, T + 1)
                }
            }
        };
    y(S(G)), N.add(y);
    var p = void 0,
        D = V(() => {
            var o = r ? ? e.appendChild($());
            return j(() => {
                if (a) {
                    k({});
                    var s = F;
                    s.c = a
                }
                l && (u.$$events = l), w && P(o, null), E = i, p = t(o, u) || {}, E = !0, w && (z.nodes_end = _), a && B()
            }), () => {
                var f;
                for (var s of v) {
                    e.removeEventListener(s, h);
                    var n = d.get(s);
                    --n === 0 ? (document.removeEventListener(s, h), d.delete(s)) : d.set(s, n)
                }
                N.delete(y), o !== r && ((f = o.parentNode) == null || f.removeChild(o))
            }
        });
    return R.set(p, D), p
}
let R = new WeakMap;

function te(t, e) {
    const r = R.get(t);
    return r ? (R.delete(t), r(e)) : Promise.resolve()
}
export {
    E as a, X as b, ee as h, W as m, Z as s, te as u
};
//# sourceMappingURL=render.DH2vE9eA.js.map