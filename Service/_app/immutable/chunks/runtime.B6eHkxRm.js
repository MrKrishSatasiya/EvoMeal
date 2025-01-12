var Pn = Array.isArray,
    Fn = Array.from,
    Ln = Object.defineProperty,
    ct = Object.getOwnPropertyDescriptor,
    Zt = Object.getOwnPropertyDescriptors,
    Mn = Object.prototype,
    Hn = Array.prototype,
    zt = Object.getPrototypeOf;

function Yn(t) {
    return typeof t == "function"
}
const Un = () => {};

function jn(t) {
    return typeof(t == null ? void 0 : t.then) == "function"
}

function Bn(t) {
    return t()
}

function Et(t) {
    for (var n = 0; n < t.length; n++) t[n]()
}
const E = 2,
    yt = 4,
    Y = 8,
    ot = 16,
    T = 32,
    Z = 64,
    nt = 128,
    k = 256,
    G = 512,
    d = 1024,
    I = 2048,
    U = 4096,
    b = 8192,
    q = 16384,
    Jt = 32768,
    wt = 65536,
    Vn = 1 << 17,
    Qt = 1 << 19,
    Tt = 1 << 20,
    vt = Symbol("$state"),
    Gn = Symbol("legacy props"),
    Kn = Symbol("");

function mt(t) {
    return t === this.v
}

function tn(t, n) {
    return t != t ? n == n : t !== n || t !== null && typeof t == "object" || typeof t == "function"
}

function $n(t, n) {
    return t !== n
}

function At(t) {
    return !tn(t, this.v)
}

function nn(t) {
    throw new Error("https://svelte.dev/e/effect_in_teardown")
}

function en() {
    throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
}

function rn(t) {
    throw new Error("https://svelte.dev/e/effect_orphan")
}

function sn() {
    throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
}

function Wn() {
    throw new Error("https://svelte.dev/e/hydration_failed")
}

function Xn(t) {
    throw new Error("https://svelte.dev/e/props_invalid_value")
}

function Zn() {
    throw new Error("https://svelte.dev/e/state_descriptors_fixed")
}

function zn() {
    throw new Error("https://svelte.dev/e/state_prototype_fixed")
}

function an() {
    throw new Error("https://svelte.dev/e/state_unsafe_local_read")
}

function ln() {
    throw new Error("https://svelte.dev/e/state_unsafe_mutation")
}
let z = !1;

function Jn() {
    z = !0
}
const Qn = 1,
    te = 2,
    ne = 4,
    ee = 8,
    re = 16,
    se = 1,
    ae = 2,
    le = 4,
    oe = 8,
    ue = 16,
    ie = 1,
    fe = 2,
    _e = 4,
    ce = 1,
    ve = 2,
    on = "[",
    un = "[!",
    fn = "]",
    gt = {},
    pe = Symbol(),
    de = "http://www.w3.org/2000/svg";

function ut(t, n) {
    var e = {
        f: 0,
        v: t,
        reactions: null,
        equals: mt,
        version: 0
    };
    return e
}

function he(t) {
    return _n(ut(t))
}

function Ee(t, n = !1) {
    const e = ut(t);
    return n || (e.equals = At), z && i !== null && i.l !== null && (i.l.s ? ? = []).push(e), e
}

function _n(t) {
    return u !== null && u.f & E && (w === null ? Sn([t]) : w.push(t)), t
}

function ye(t, n) {
    return u !== null && _t() && u.f & (E | ot) && (w === null || !w.includes(t)) && ln(), cn(t, n)
}

function cn(t, n) {
    return t.equals(n) || (t.v = n, t.version = Bt(), xt(t, I), _t() && o !== null && o.f & d && !(o.f & T) && (v !== null && v.includes(t) ? (m(o, I), tt(o)) : x === null ? On([t]) : x.push(t))), n
}

function xt(t, n) {
    var e = t.reactions;
    if (e !== null)
        for (var r = _t(), s = e.length, a = 0; a < s; a++) {
            var l = e[a],
                _ = l.f;
            _ & I || !r && l === o || (m(l, n), _ & (d | k) && (_ & E ? xt(l, U) : tt(l)))
        }
}

function It(t) {
    console.warn("https://svelte.dev/e/hydration_mismatch")
}
let O = !1;

function we(t) {
    O = t
}
let y;

function F(t) {
    if (t === null) throw It(), gt;
    return y = t
}

function Te() {
    return F(N(y))
}

function me(t) {
    if (O) {
        if (N(y) !== null) throw It(), gt;
        y = t
    }
}

function Ae(t = 1) {
    if (O) {
        for (var n = t, e = y; n--;) e = N(e);
        y = e
    }
}

function ge() {
    for (var t = 0, n = y;;) {
        if (n.nodeType === 8) {
            var e = n.data;
            if (e === fn) {
                if (t === 0) return n;
                t -= 1
            } else(e === on || e === un) && (t += 1)
        }
        var r = N(n);
        n.remove(), n = r
    }
}
var pt, vn, St, Ot;

function xe() {
    if (pt === void 0) {
        pt = window, vn = document;
        var t = Element.prototype,
            n = Node.prototype;
        St = ct(n, "firstChild").get, Ot = ct(n, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0
    }
}

function et(t = "") {
    return document.createTextNode(t)
}

function rt(t) {
    return St.call(t)
}

function N(t) {
    return Ot.call(t)
}

function Ie(t, n) {
    if (!O) return rt(t);
    var e = rt(y);
    if (e === null) e = y.appendChild(et());
    else if (n && e.nodeType !== 3) {
        var r = et();
        return e == null || e.before(r), F(r), r
    }
    return F(e), e
}

function Se(t, n) {
    if (!O) {
        var e = rt(t);
        return e instanceof Comment && e.data === "" ? N(e) : e
    }
    return y
}

function Oe(t, n = 1, e = !1) {
    let r = O ? y : t;
    for (var s; n--;) s = r, r = N(r);
    if (!O) return r;
    var a = r == null ? void 0 : r.nodeType;
    if (e && a !== 3) {
        var l = et();
        return r === null ? s == null || s.after(l) : r.before(l), F(l), l
    }
    return F(r), r
}

function Re(t) {
    t.textContent = ""
}

function pn(t) {
    var n = E | I;
    o === null ? n |= k : o.f |= Tt;
    var e = u !== null && u.f & E ? u : null;
    const r = {
        children: null,
        ctx: i,
        deps: null,
        equals: mt,
        f: n,
        fn: t,
        reactions: null,
        v: null,
        version: 0,
        parent: e ? ? o
    };
    return e !== null && (e.children ? ? = []).push(r), r
}

function ke(t) {
    const n = pn(t);
    return n.equals = At, n
}

function Rt(t) {
    var n = t.children;
    if (n !== null) {
        t.children = null;
        for (var e = 0; e < n.length; e += 1) {
            var r = n[e];
            r.f & E ? it(r) : R(r)
        }
    }
}

function dn(t) {
    for (var n = t.parent; n !== null;) {
        if (!(n.f & E)) return n;
        n = n.parent
    }
    return null
}

function kt(t) {
    var n, e = o;
    X(dn(t));
    try {
        Rt(t), n = Vt(t)
    } finally {
        X(e)
    }
    return n
}

function Nt(t) {
    var n = kt(t),
        e = (g || t.f & k) && t.deps !== null ? U : d;
    m(t, e), t.equals(n) || (t.v = n, t.version = Bt())
}

function it(t) {
    Rt(t), H(t, 0), m(t, q), t.v = t.children = t.deps = t.ctx = t.reactions = null
}

function Dt(t) {
    o === null && u === null && rn(), u !== null && u.f & k && en(), ft && nn()
}

function hn(t, n) {
    var e = n.last;
    e === null ? n.last = n.first = t : (e.next = t, t.prev = e, n.last = t)
}

function P(t, n, e, r = !0) {
    var s = (t & Z) !== 0,
        a = o,
        l = {
            ctx: i,
            deps: null,
            deriveds: null,
            nodes_start: null,
            nodes_end: null,
            f: t | I,
            first: null,
            fn: n,
            last: null,
            next: null,
            parent: s ? null : a,
            prev: null,
            teardown: null,
            transitions: null,
            version: 0
        };
    if (e) {
        var _ = D;
        try {
            dt(!0), Q(l), l.f |= Jt
        } catch (f) {
            throw R(l), f
        } finally {
            dt(_)
        }
    } else n !== null && tt(l);
    var p = e && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & Tt) === 0;
    if (!p && !s && r && (a !== null && hn(l, a), u !== null && u.f & E)) {
        var A = u;
        (A.children ? ? = []).push(l)
    }
    return l
}

function Ne() {
    return u === null ? !1 : !g
}

function De(t) {
    const n = P(Y, null, !1);
    return m(n, d), n.teardown = t, n
}

function Ce(t) {
    Dt();
    var n = o !== null && (o.f & T) !== 0 && i !== null && !i.m;
    if (n) {
        var e = i;
        (e.e ? ? = []).push({
            fn: t,
            effect: o,
            reaction: u
        })
    } else {
        var r = Ct(t);
        return r
    }
}

function be(t) {
    return Dt(), En(t)
}

function qe(t) {
    const n = P(Z, t, !0);
    return (e = {}) => new Promise(r => {
        e.outro ? Tn(n, () => {
            R(n), r(void 0)
        }) : (R(n), r(void 0))
    })
}

function Ct(t) {
    return P(yt, t, !1)
}

function En(t) {
    return P(Y, t, !0)
}

function Pe(t) {
    return yn(t)
}

function yn(t, n = 0) {
    return P(Y | ot | n, t, !0)
}

function Fe(t, n = !0) {
    return P(Y | T, t, !0, n)
}

function bt(t) {
    var n = t.teardown;
    if (n !== null) {
        const e = ft,
            r = u;
        ht(!0), W(null);
        try {
            n.call(null)
        } finally {
            ht(e), W(r)
        }
    }
}

function qt(t) {
    var n = t.deriveds;
    if (n !== null) {
        t.deriveds = null;
        for (var e = 0; e < n.length; e += 1) it(n[e])
    }
}

function Pt(t, n = !1) {
    var e = t.first;
    for (t.first = t.last = null; e !== null;) {
        var r = e.next;
        R(e, n), e = r
    }
}

function wn(t) {
    for (var n = t.first; n !== null;) {
        var e = n.next;
        n.f & T || R(n), n = e
    }
}

function R(t, n = !0) {
    var e = !1;
    if ((n || t.f & Qt) && t.nodes_start !== null) {
        for (var r = t.nodes_start, s = t.nodes_end; r !== null;) {
            var a = r === s ? null : N(r);
            r.remove(), r = a
        }
        e = !0
    }
    Pt(t, n && !e), qt(t), H(t, 0), m(t, q);
    var l = t.transitions;
    if (l !== null)
        for (const p of l) p.stop();
    bt(t);
    var _ = t.parent;
    _ !== null && _.first !== null && Ft(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null
}

function Ft(t) {
    var n = t.parent,
        e = t.prev,
        r = t.next;
    e !== null && (e.next = r), r !== null && (r.prev = e), n !== null && (n.first === t && (n.first = r), n.last === t && (n.last = e))
}

function Tn(t, n) {
    var e = [];
    Lt(t, e, !0), mn(e, () => {
        R(t), n && n()
    })
}

function mn(t, n) {
    var e = t.length;
    if (e > 0) {
        var r = () => --e || n();
        for (var s of t) s.out(r)
    } else n()
}

function Lt(t, n, e) {
    if (!(t.f & b)) {
        if (t.f ^= b, t.transitions !== null)
            for (const l of t.transitions)(l.is_global || e) && n.push(l);
        for (var r = t.first; r !== null;) {
            var s = r.next,
                a = (r.f & wt) !== 0 || (r.f & T) !== 0;
            Lt(r, n, a ? e : !1), r = s
        }
    }
}

function Le(t) {
    Mt(t, !0)
}

function Mt(t, n) {
    if (t.f & b) {
        j(t) && Q(t), t.f ^= b;
        for (var e = t.first; e !== null;) {
            var r = e.next,
                s = (e.f & wt) !== 0 || (e.f & T) !== 0;
            Mt(e, s ? n : !1), e = r
        }
        if (t.transitions !== null)
            for (const a of t.transitions)(a.is_global || n) && a.in()
    }
}
const An = typeof requestIdleCallback > "u" ? t => setTimeout(t, 1) : requestIdleCallback;
let K = !1,
    $ = !1,
    st = [],
    at = [];

function Ht() {
    K = !1;
    const t = st.slice();
    st = [], Et(t)
}

function Yt() {
    $ = !1;
    const t = at.slice();
    at = [], Et(t)
}

function Me(t) {
    K || (K = !0, queueMicrotask(Ht)), st.push(t)
}

function He(t) {
    $ || ($ = !0, An(Yt)), at.push(t)
}

function gn() {
    K && Ht(), $ && Yt()
}

function xn(t) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}
const Ut = 0,
    In = 1;
let B = !1,
    V = Ut,
    L = !1,
    M = null,
    D = !1,
    ft = !1;

function dt(t) {
    D = t
}

function ht(t) {
    ft = t
}
let S = [],
    C = 0;
let u = null;

function W(t) {
    u = t
}
let o = null;

function X(t) {
    o = t
}
let w = null;

function Sn(t) {
    w = t
}
let v = null,
    h = 0,
    x = null;

function On(t) {
    x = t
}
let jt = 1,
    g = !1,
    i = null;

function Ye(t) {
    i = t
}

function Bt() {
    return ++jt
}

function _t() {
    return !z || i !== null && i.l === null
}

function j(t) {
    var l;
    var n = t.f;
    if (n & I) return !0;
    if (n & U) {
        var e = t.deps,
            r = (n & k) !== 0;
        if (e !== null) {
            var s;
            if (n & G) {
                for (s = 0; s < e.length; s++)(e[s].reactions ? ? = []).push(t);
                t.f ^= G
            }
            for (s = 0; s < e.length; s++) {
                var a = e[s];
                if (j(a) && Nt(a), r && o !== null && !g && !((l = a == null ? void 0 : a.reactions) != null && l.includes(t)) && (a.reactions ? ? = []).push(t), a.version > t.version) return !0
            }
        }(!r || o !== null && !g) && m(t, d)
    }
    return !1
}

function Rn(t, n) {
    for (var e = n; e !== null;) {
        if (e.f & nt) try {
            e.fn(t);
            return
        } catch {
            e.f ^= nt
        }
        e = e.parent
    }
    throw B = !1, t
}

function kn(t) {
    return (t.f & q) === 0 && (t.parent === null || (t.parent.f & nt) === 0)
}

function J(t, n, e, r) {
    if (B) {
        if (e === null && (B = !1), kn(n)) throw t;
        return
    }
    e !== null && (B = !0); {
        Rn(t, n);
        return
    }
}

function Vt(t) {
    var n = v,
        e = h,
        r = x,
        s = u,
        a = g,
        l = w,
        _ = i,
        p = t.f;
    v = null, h = 0, x = null, u = p & (T | Z) ? null : t, g = !D && (p & k) !== 0, w = null, i = t.ctx;
    try {
        var A = (0, t.fn)(),
            f = t.deps;
        if (v !== null) {
            var c;
            if (H(t, h), f !== null && h > 0)
                for (f.length = h + v.length, c = 0; c < v.length; c++) f[h + c] = v[c];
            else t.deps = f = v;
            if (!g)
                for (c = h; c < f.length; c++)(f[c].reactions ? ? = []).push(t)
        } else f !== null && h < f.length && (H(t, h), f.length = h);
        return A
    } finally {
        v = n, h = e, x = r, u = s, g = a, w = l, i = _
    }
}

function Nn(t, n) {
    let e = n.reactions;
    if (e !== null) {
        var r = e.indexOf(t);
        if (r !== -1) {
            var s = e.length - 1;
            s === 0 ? e = n.reactions = null : (e[r] = e[s], e.pop())
        }
    }
    e === null && n.f & E && (v === null || !v.includes(n)) && (m(n, U), n.f & (k | G) || (n.f ^= G), H(n, 0))
}

function H(t, n) {
    var e = t.deps;
    if (e !== null)
        for (var r = n; r < e.length; r++) Nn(t, e[r])
}

function Q(t) {
    var n = t.f;
    if (!(n & q)) {
        m(t, d);
        var e = o,
            r = i;
        o = t;
        try {
            n & ot ? wn(t) : Pt(t), qt(t), bt(t);
            var s = Vt(t);
            t.teardown = typeof s == "function" ? s : null, t.version = jt
        } catch (a) {
            J(a, t, e, r || t.ctx)
        } finally {
            o = e
        }
    }
}

function Gt() {
    if (C > 1e3) {
        C = 0;
        try {
            sn()
        } catch (t) {
            if (M !== null) J(t, M, null);
            else throw t
        }
    }
    C++
}

function Kt(t) {
    var n = t.length;
    if (n !== 0) {
        Gt();
        var e = D;
        D = !0;
        try {
            for (var r = 0; r < n; r++) {
                var s = t[r];
                s.f & d || (s.f ^= d);
                var a = [];
                $t(s, a), Dn(a)
            }
        } finally {
            D = e
        }
    }
}

function Dn(t) {
    var n = t.length;
    if (n !== 0)
        for (var e = 0; e < n; e++) {
            var r = t[e];
            if (!(r.f & (q | b))) try {
                j(r) && (Q(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Ft(r) : r.fn = null))
            } catch (s) {
                J(s, r, null, r.ctx)
            }
        }
}

function Cn() {
    if (L = !1, C > 1001) return;
    const t = S;
    S = [], Kt(t), L || (C = 0, M = null)
}

function tt(t) {
    V === Ut && (L || (L = !0, queueMicrotask(Cn))), M = t;
    for (var n = t; n.parent !== null;) {
        n = n.parent;
        var e = n.f;
        if (e & (Z | T)) {
            if (!(e & d)) return;
            n.f ^= d
        }
    }
    S.push(n)
}

function $t(t, n) {
    var e = t.first,
        r = [];
    t: for (; e !== null;) {
        var s = e.f,
            a = (s & T) !== 0,
            l = a && (s & d) !== 0,
            _ = e.next;
        if (!l && !(s & b))
            if (s & Y) {
                if (a) e.f ^= d;
                else try {
                    j(e) && Q(e)
                } catch (c) {
                    J(c, e, null, e.ctx)
                }
                var p = e.first;
                if (p !== null) {
                    e = p;
                    continue
                }
            } else s & yt && r.push(e);
        if (_ === null) {
            let c = e.parent;
            for (; c !== null;) {
                if (t === c) break t;
                var A = c.next;
                if (A !== null) {
                    e = A;
                    continue t
                }
                c = c.parent
            }
        }
        e = _
    }
    for (var f = 0; f < r.length; f++) p = r[f], n.push(p), $t(p, n)
}

function Wt(t) {
    var n = V,
        e = S;
    try {
        Gt();
        const s = [];
        V = In, S = s, L = !1, Kt(e);
        var r = t == null ? void 0 : t();
        return gn(), (S.length > 0 || s.length > 0) && Wt(), C = 0, M = null, r
    } finally {
        V = n, S = e
    }
}
async function Ue() {
    await Promise.resolve(), Wt()
}

function je(t) {
    var f;
    var n = t.f,
        e = (n & E) !== 0;
    if (e && n & q) {
        var r = kt(t);
        return it(t), r
    }
    if (u !== null) {
        w !== null && w.includes(t) && an();
        var s = u.deps;
        v === null && s !== null && s[h] === t ? h++ : v === null ? v = [t] : v.push(t), x !== null && o !== null && o.f & d && !(o.f & T) && x.includes(t) && (m(o, I), tt(o))
    } else if (e && t.deps === null)
        for (var a = t, l = a.parent, _ = a; l !== null;)
            if (l.f & E) {
                var p = l;
                _ = p, l = p.parent
            } else {
                var A = l;
                (f = A.deriveds) != null && f.includes(_) || (A.deriveds ? ? = []).push(_);
                break
            }
    return e && (a = t, j(a) && Nt(a)), t.v
}

function Be(t) {
    const n = u;
    try {
        return u = null, t()
    } finally {
        u = n
    }
}
const bn = ~(I | U | d);

function m(t, n) {
    t.f = t.f & bn | n
}

function Ve(t) {
    return Xt().get(t)
}

function Ge(t, n) {
    return Xt().set(t, n), n
}

function Xt(t) {
    return i === null && xn(), i.c ? ? = new Map(qn(i) || void 0)
}

function qn(t) {
    let n = t.p;
    for (; n !== null;) {
        const e = n.c;
        if (e !== null) return e;
        n = n.p
    }
    return null
}

function Ke(t, n = !1, e) {
    i = {
        p: i,
        c: null,
        e: null,
        m: !1,
        s: t,
        x: null,
        l: null
    }, z && !n && (i.l = {
        s: null,
        u: null,
        r1: [],
        r2: ut(!1)
    })
}

function $e(t) {
    const n = i;
    if (n !== null) {
        t !== void 0 && (n.x = t);
        const l = n.e;
        if (l !== null) {
            var e = o,
                r = u;
            n.e = null;
            try {
                for (var s = 0; s < l.length; s++) {
                    var a = l[s];
                    X(a.effect), W(a.reaction), Ct(a.fn)
                }
            } finally {
                X(e), W(r)
            }
        }
        i = n.p, n.m = !0
    }
    return t || {}
}

function We(t) {
    if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
        if (vt in t) lt(t);
        else if (!Array.isArray(t))
            for (let n in t) {
                const e = t[n];
                typeof e == "object" && e && vt in e && lt(e)
            }
    }
}

function lt(t, n = new Set) {
    if (typeof t == "object" && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
        n.add(t), t instanceof Date && t.getTime();
        for (let r in t) try {
            lt(t[r], n)
        } catch {}
        const e = zt(t);
        if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
            const r = Zt(e);
            for (let s in r) {
                const a = r[s].get;
                if (a) try {
                    a.call(t)
                } catch {}
            }
        }
    }
}
export {
    He as $, rt as A, N as B, gt as C, we as D, F as E, fn as F, It as G, on as H, Wn as I, Re as J, Fn as K, qe as L, et as M, o as N, wt as O, un as P, ge as Q, Le as R, Ct as S, En as T, pe as U, Me as V, vt as W, R as X, Kn as Y, zt as Z, Zt as _, Ce as a, ne as a0, Pn as a1, b as a2, Qn as a3, cn as a4, te as a5, Lt as a6, mn as a7, u as a8, ee as a9, Gn as aA, ke as aB, ue as aC, ce as aD, ve as aE, W as aF, Ln as aG, Qt as aH, he as aI, Ue as aJ, pt as aK, ot as aL, Jt as aM, ie as aN, Yn as aO, fe as aP, _e as aQ, Ge as aR, Ve as aS, Wt as aT, jn as aU, Ye as aV, Ne as aW, de as aX, Ee as aa, ut as ab, re as ac, Jn as ad, Pe as ae, vn as af, De as ag, Ie as ah, me as ai, Oe as aj, Mn as ak, Hn as al, Zn as am, ye as an, ct as ao, zn as ap, Xn as aq, Vn as ar, le as as, At as at, T as au, Z as av, X as aw, se as ax, ae as ay, oe as az, Be as b, i as c, Et as d, We as e, pn as f, je as g, Se as h, $e as i, _t as j, $n as k, yn as l, O as m, Ae as n, Te as o, Ke as p, Tn as q, Bn as r, tn as s, Fe as t, be as u, y as v, xn as w, z as x, Un as y, xe as z
};
//# sourceMappingURL=runtime.B6eHkxRm.js.map