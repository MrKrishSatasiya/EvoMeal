import {
    M as ee,
    l as ae,
    a0 as U,
    m as N,
    E as b,
    o as re,
    a1 as ne,
    K as z,
    P as ie,
    Q as F,
    D as k,
    v as R,
    a2 as H,
    R as G,
    t as W,
    q as fe,
    V as le,
    N as J,
    a3 as L,
    a4 as K,
    a5 as O,
    a6 as te,
    J as se,
    a7 as ue,
    X as ve,
    A as de,
    F as oe,
    a8 as _e,
    a9 as ce,
    aa as he,
    ab as P,
    ac as Ee,
    B as pe
} from "./runtime.B6eHkxRm.js";

function xe(l, e) {
    return e
}

function Ae(l, e, a, u) {
    for (var v = [], d = e.length, t = 0; t < d; t++) te(e[t].e, v, !0);
    var p = d > 0 && v.length === 0 && a !== null;
    if (p) {
        var _ = a.parentNode;
        se(_), _.append(a), u.clear(), C(l, e[0].prev, e[d - 1].next)
    }
    ue(v, () => {
        for (var T = 0; T < d; T++) {
            var o = e[T];
            p || (u.delete(o.k), C(l, o.prev, o.next)), ve(o.e, !p)
        }
    })
}

function Ce(l, e, a, u, v, d = null) {
    var t = l,
        p = {
            flags: e,
            items: new Map,
            first: null
        },
        _ = (e & U) !== 0;
    if (_) {
        var T = l;
        t = N ? b(de(T)) : T.appendChild(ee())
    }
    N && re();
    var o = null,
        I = !1;
    ae(() => {
        var m = a(),
            r = ne(m) ? m : m == null ? [] : z(m),
            i = r.length;
        if (I && i === 0) return;
        I = i === 0;
        let s = !1;
        if (N) {
            var g = t.data === ie;
            g !== (i === 0) && (t = F(), b(t), k(!1), s = !0)
        }
        if (N) {
            for (var c = null, h, E = 0; E < i; E++) {
                if (R.nodeType === 8 && R.data === oe) {
                    t = R, s = !0, k(!1);
                    break
                }
                var A = r[E],
                    n = u(A, E);
                h = Z(R, p, c, null, A, n, E, v, e), p.items.set(n, h), c = h
            }
            i > 0 && b(F())
        }
        if (!N) {
            var f = _e;
            Te(r, p, t, v, e, (f.f & H) !== 0, u)
        }
        d !== null && (i === 0 ? o ? G(o) : o = W(() => d(t)) : o !== null && fe(o, () => {
            o = null
        })), s && k(!0), a()
    }), N && (t = R)
}

function Te(l, e, a, u, v, d, t, p) {
    var V, q, B, X;
    var _ = (v & ce) !== 0,
        T = (v & (L | O)) !== 0,
        o = l.length,
        I = e.items,
        m = e.first,
        r = m,
        i, s = null,
        g, c = [],
        h = [],
        E, A, n, f;
    if (_)
        for (f = 0; f < o; f += 1) E = l[f], A = t(E, f), n = I.get(A), n !== void 0 && ((V = n.a) == null || V.measure(), (g ? ? = new Set).add(n));
    for (f = 0; f < o; f += 1) {
        if (E = l[f], A = t(E, f), n = I.get(A), n === void 0) {
            var $ = r ? r.e.nodes_start : a;
            s = Z($, e, s, s === null ? e.first : s.next, E, A, f, u, v), I.set(A, s), c = [], h = [], r = s.next;
            continue
        }
        if (T && Ie(n, E, f, v), n.e.f & H && (G(n.e), _ && ((q = n.a) == null || q.unfix(), (g ? ? = new Set).delete(n))), n !== r) {
            if (i !== void 0 && i.has(n)) {
                if (c.length < h.length) {
                    var D = h[0],
                        x;
                    s = D.prev;
                    var y = c[0],
                        M = c[c.length - 1];
                    for (x = 0; x < c.length; x += 1) Q(c[x], D, a);
                    for (x = 0; x < h.length; x += 1) i.delete(h[x]);
                    C(e, y.prev, M.next), C(e, s, y), C(e, M, D), r = D, s = M, f -= 1, c = [], h = []
                } else i.delete(n), Q(n, r, a), C(e, n.prev, n.next), C(e, n, s === null ? e.first : s.next), C(e, s, n), s = n;
                continue
            }
            for (c = [], h = []; r !== null && r.k !== A;)(d || !(r.e.f & H)) && (i ? ? = new Set).add(r), h.push(r), r = r.next;
            if (r === null) continue;
            n = r
        }
        c.push(n), s = n, r = n.next
    }
    if (r !== null || i !== void 0) {
        for (var w = i === void 0 ? [] : z(i); r !== null;)(d || !(r.e.f & H)) && w.push(r), r = r.next;
        var S = w.length;
        if (S > 0) {
            var j = v & U && o === 0 ? a : null;
            if (_) {
                for (f = 0; f < S; f += 1)(B = w[f].a) == null || B.measure();
                for (f = 0; f < S; f += 1)(X = w[f].a) == null || X.fix()
            }
            Ae(e, w, j, I)
        }
    }
    _ && le(() => {
        var Y;
        if (g !== void 0)
            for (n of g)(Y = n.a) == null || Y.apply()
    }), J.first = e.first && e.first.e, J.last = s && s.e
}

function Ie(l, e, a, u) {
    u & L && K(l.v, e), u & O ? K(l.i, a) : l.i = a
}

function Z(l, e, a, u, v, d, t, p, _, T) {
    var o = (_ & L) !== 0,
        I = (_ & Ee) === 0,
        m = o ? I ? he(v) : P(v) : v,
        r = _ & O ? P(t) : t,
        i = {
            i: r,
            v: m,
            k: d,
            a: null,
            e: null,
            prev: a,
            next: u
        };
    try {
        return i.e = W(() => p(l, m, r), N), i.e.prev = a && a.e, i.e.next = u && u.e, a === null ? e.first = i : (a.next = i, a.e.next = i.e), u !== null && (u.prev = i, u.e.prev = i.e), i
    } finally {}
}

function Q(l, e, a) {
    for (var u = l.next ? l.next.e.nodes_start : a, v = e ? e.e.nodes_start : a, d = l.e.nodes_start; d !== u;) {
        var t = pe(d);
        v.before(d), d = t
    }
}

function C(l, e, a) {
    e === null ? l.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e)
}
export {
    Ce as e, xe as i
};
//# sourceMappingURL=each.BRhQgEZK.js.map