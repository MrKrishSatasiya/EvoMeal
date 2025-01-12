import {
    S as M,
    b as x,
    T as L,
    e as q,
    s as z,
    O as P,
    aL as U,
    aM as W,
    aN as B,
    N as C,
    aO as j,
    V as G,
    y as b,
    aP as K,
    aQ as Q,
    aF as O,
    aw as S,
    a8 as V
} from "./runtime.B6eHkxRm.js";
import {
    a as D
} from "./render.DH2vE9eA.js";

function ia(r, a, t) {
    M(() => {
        var i = x(() => a(r, t == null ? void 0 : t()) || {});
        if (t && (i != null && i.update)) {
            var n = !1,
                e = {};
            L(() => {
                var f = t();
                q(f), n && z(e, f) && (e = f, i.update(f))
            }), n = !0
        }
        if (i != null && i.destroy) return () => i.destroy()
    })
}
const H = () => performance.now(),
    l = {
        tick: r => requestAnimationFrame(r),
        now: () => H(),
        tasks: new Set
    };

function I() {
    const r = l.now();
    l.tasks.forEach(a => {
        a.c(r) || (l.tasks.delete(a), a.f())
    }), l.tasks.size !== 0 && l.tick(I)
}

function J(r) {
    let a;
    return l.tasks.size === 0 && l.tick(I), {
        promise: new Promise(t => {
            l.tasks.add(a = {
                c: r,
                f: t
            })
        }),
        abort() {
            l.tasks.delete(a)
        }
    }
}

function T(r, a) {
    r.dispatchEvent(new CustomEvent(a))
}

function X(r) {
    if (r === "float") return "cssFloat";
    if (r === "offset") return "cssOffset";
    if (r.startsWith("--")) return r;
    const a = r.split("-");
    return a.length === 1 ? a[0] : a[0] + a.slice(1).map(t => t[0].toUpperCase() + t.slice(1)).join("")
}

function A(r) {
    const a = {},
        t = r.split(";");
    for (const i of t) {
        const [n, e] = i.split(":");
        if (!n || e === void 0) break;
        const f = X(n.trim());
        a[f] = e.trim()
    }
    return a
}
const Y = r => r;

function ea(r, a, t, i) {
    var n = (r & B) !== 0,
        e = (r & K) !== 0,
        f = n && e,
        $ = (r & Q) !== 0,
        y = f ? "both" : n ? "in" : "out",
        u, o = a.inert,
        d, c;

    function m() {
        var v = V,
            w = C;
        O(null), S(null);
        try {
            return u ? ? = t()(a, (i == null ? void 0 : i()) ? ? {}, {
                direction: y
            })
        } finally {
            O(v), S(w)
        }
    }
    var h = {
            is_global: $,
            in () {
                var v;
                if (a.inert = o, !n) {
                    c == null || c.abort(), (v = c == null ? void 0 : c.reset) == null || v.call(c);
                    return
                }
                e || d == null || d.abort(), T(a, "introstart"), d = E(a, m(), c, 1, () => {
                    T(a, "introend"), d == null || d.abort(), d = u = void 0
                })
            },
            out(v) {
                if (!e) {
                    v == null || v(), u = void 0;
                    return
                }
                a.inert = !0, T(a, "outrostart"), c = E(a, m(), d, 0, () => {
                    T(a, "outroend"), v == null || v()
                })
            },
            stop: () => {
                d == null || d.abort(), c == null || c.abort()
            }
        },
        p = C;
    if ((p.transitions ? ? = []).push(h), n && D) {
        var _ = $;
        if (!_) {
            for (var s = p.parent; s && s.f & P;)
                for (;
                    (s = s.parent) && !(s.f & U););
            _ = !s || (s.f & W) !== 0
        }
        _ && M(() => {
            x(() => h.in())
        })
    }
}

function E(r, a, t, i, n) {
    var e = i === 1;
    if (j(a)) {
        var f, $ = !1;
        return G(() => {
            if (!$) {
                var _ = a({
                    direction: e ? "in" : "out"
                });
                f = E(r, _, t, i, n)
            }
        }), {
            abort: () => {
                $ = !0, f == null || f.abort()
            },
            deactivate: () => f.deactivate(),
            reset: () => f.reset(),
            t: () => f.t()
        }
    }
    if (t == null || t.deactivate(), !(a != null && a.duration)) return n(), {
        abort: b,
        deactivate: b,
        reset: b,
        t: () => i
    };
    const {
        delay: y = 0,
        css: u,
        tick: o,
        easing: d = Y
    } = a;
    var c = [];
    if (e && t === void 0 && (o && o(0, 1), u)) {
        var m = A(u(0, 1));
        c.push(m, m)
    }
    var h = () => 1 - i,
        p = r.animate(c, {
            duration: y
        });
    return p.onfinish = () => {
        var _ = (t == null ? void 0 : t.t()) ? ? 1 - i;
        t == null || t.abort();
        var s = i - _,
            v = a.duration * Math.abs(s),
            w = [];
        if (v > 0) {
            if (u)
                for (var g = Math.ceil(v / 16.666666666666668), N = 0; N <= g; N += 1) {
                    var k = _ + s * d(N / g),
                        R = u(k, 1 - k);
                    w.push(A(R))
                }
            h = () => {
                var F = p.currentTime;
                return _ + s * d(F / v)
            }, o && J(() => {
                if (p.playState !== "running") return !1;
                var F = h();
                return o(F, 1 - F), !0
            })
        }
        p = r.animate(w, {
            duration: v,
            fill: "forwards"
        }), p.onfinish = () => {
            h = () => i, o == null || o(i, 1 - i), n()
        }
    }, {
        abort: () => {
            p && (p.cancel(), p.effect = null, p.onfinish = b)
        },
        deactivate: () => {
            n = b
        },
        reset: () => {
            i === 0 && (o == null || o(1, 0))
        },
        t: () => h()
    }
}

function sa(r, a = 0) {
    if (a === 0 && r > .5) return Math.round(r);
    const t = a || 1;
    return Math.round(r * Math.pow(10, t)) / Math.pow(10, t)
}
const Z = r => r;

function aa(r) {
    const a = r - 1;
    return a * a * a + 1
}

function na(r, {
    delay: a = 0,
    duration: t = 400,
    easing: i = Z
} = {}) {
    const n = +getComputedStyle(r).opacity;
    return {
        delay: a,
        duration: t,
        easing: i,
        css: e => `opacity: ${e*n}`
    }
}

function oa(r, {
    delay: a = 0,
    duration: t = 400,
    easing: i = aa,
    axis: n = "y"
} = {}) {
    const e = getComputedStyle(r),
        f = +e.opacity,
        $ = n === "y" ? "height" : "width",
        y = parseFloat(e[$]),
        u = n === "y" ? ["top", "bottom"] : ["left", "right"],
        o = u.map(s => `${s[0].toUpperCase()}${s.slice(1)}`),
        d = parseFloat(e[`padding${o[0]}`]),
        c = parseFloat(e[`padding${o[1]}`]),
        m = parseFloat(e[`margin${o[0]}`]),
        h = parseFloat(e[`margin${o[1]}`]),
        p = parseFloat(e[`border${o[0]}Width`]),
        _ = parseFloat(e[`border${o[1]}Width`]);
    return {
        delay: a,
        duration: t,
        easing: i,
        css: s => `overflow: hidden;opacity: ${Math.min(s*20,1)*f};${$}: ${s*y}px;padding-${u[0]}: ${s*d}px;padding-${u[1]}: ${s*c}px;margin-${u[0]}: ${s*m}px;margin-${u[1]}: ${s*h}px;border-${u[0]}-width: ${s*p}px;border-${u[1]}-width: ${s*_}px;`
    }
}
export {
    ia as a, sa as b, na as f, J as l, l as r, oa as s, ea as t
};
//# sourceMappingURL=page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js.map