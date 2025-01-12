import {
    V as S,
    aF as f,
    aw as d,
    a8 as A,
    N as L,
    ag as O,
    aG as B,
    a1 as C,
    M as H,
    l as P,
    aH as R,
    m as p,
    H as W,
    B as w,
    D as b,
    E as m,
    v as T,
    A as j
} from "./runtime.B6eHkxRm.js";

function Q(e) {
    return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture"
}
const F = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];

function Z(e) {
    return F.includes(e)
}
const q = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject"
};

function $(e) {
    return e = e.toLowerCase(), q[e] ? ? e
}
const G = ["touchstart", "touchmove"];

function ee(e) {
    return G.includes(e)
}
const z = ["textarea", "script", "style", "title"];

function te(e) {
    return z.includes(e)
}

function re(e, t) {
    if (t) {
        const r = document.body;
        e.autofocus = !0, S(() => {
            document.activeElement === r && e.focus()
        })
    }
}
let k = !1;

function U() {
    k || (k = !0, document.addEventListener("reset", e => {
        Promise.resolve().then(() => {
            var t;
            if (!e.defaultPrevented)
                for (const r of e.target.elements)(t = r.__on_r) == null || t.call(r)
        })
    }, {
        capture: !0
    }))
}

function x(e) {
    var t = A,
        r = L;
    f(null), d(null);
    try {
        return e()
    } finally {
        f(t), d(r)
    }
}

function ae(e, t, r, n = r) {
    e.addEventListener(t, () => x(r));
    const o = e.__on_r;
    o ? e.__on_r = () => {
        o(), n(!0)
    } : e.__on_r = () => n(!0), U()
}
const X = new Set,
    Y = new Set;

function N(e, t, r, n) {
    function o(a) {
        if (n.capture || J.call(t, a), !a.cancelBubble) return x(() => r.call(this, a))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? S(() => {
        t.addEventListener(e, o, n)
    }) : t.addEventListener(e, o, n), o
}

function ne(e, t, r, n = {}) {
    var o = N(t, e, r, n);
    return () => {
        e.removeEventListener(t, o, n)
    }
}

function oe(e, t, r, n, o) {
    var a = {
            capture: n,
            passive: o
        },
        s = N(e, t, r, a);
    (t === document.body || t === window || t === document) && O(() => {
        t.removeEventListener(e, s, a)
    })
}

function ie(e) {
    for (var t = 0; t < e.length; t++) X.add(e[t]);
    for (var r of Y) r(e)
}

function J(e) {
    var E;
    var t = this,
        r = t.ownerDocument,
        n = e.type,
        o = ((E = e.composedPath) == null ? void 0 : E.call(e)) || [],
        a = o[0] || e.target,
        s = 0,
        v = e.__root;
    if (v) {
        var _ = o.indexOf(v);
        if (_ !== -1 && (t === document || t === window)) {
            e.__root = t;
            return
        }
        var y = o.indexOf(t);
        if (y === -1) return;
        _ <= y && (s = _)
    }
    if (a = o[s] || e.target, a !== t) {
        B(e, "currentTarget", {
            configurable: !0,
            get() {
                return a || r
            }
        });
        var D = A,
            V = L;
        f(null), d(null);
        try {
            for (var u, g = []; a !== null;) {
                var h = a.assignedSlot || a.parentNode || a.host || null;
                try {
                    var c = a["__" + n];
                    if (c !== void 0 && !a.disabled)
                        if (C(c)) {
                            var [I, ...M] = c;
                            I.apply(a, [e, ...M])
                        } else c.call(a, e)
                } catch (l) {
                    u ? g.push(l) : u = l
                }
                if (e.cancelBubble || h === t || h === null) break;
                a = h
            }
            if (u) {
                for (let l of g) queueMicrotask(() => {
                    throw l
                });
                throw u
            }
        } finally {
            e.__root = t, delete e.currentTarget, f(D), d(V)
        }
    }
}
let i;

function se() {
    i = void 0
}

function ue(e) {
    let t = null,
        r = p;
    var n;
    if (p) {
        for (t = T, i === void 0 && (i = j(document.head)); i !== null && (i.nodeType !== 8 || i.data !== W);) i = w(i);
        i === null ? b(!1) : i = m(w(i))
    }
    p || (n = document.head.appendChild(H()));
    try {
        P(() => e(n), R)
    } finally {
        r && (b(!0), i = T, m(t))
    }
}
export {
    X as a, se as b, Q as c, N as d, ie as e, re as f, U as g, J as h, ee as i, Z as j, ue as k, ae as l, oe as m, $ as n, ne as o, te as p, Y as r
};
//# sourceMappingURL=svelte-head.Cog7lhpT.js.map