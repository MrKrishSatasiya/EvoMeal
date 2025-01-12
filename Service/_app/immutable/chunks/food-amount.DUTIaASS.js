import {
    a as P,
    n as z
} from "./disclose-version.lyO5itLq.js";
import {
    ab as U,
    T as H,
    an as C,
    g as o,
    p as k,
    h as J,
    aj as L,
    ae as E,
    i as q,
    ah as O,
    ai as A,
    f as u
} from "./runtime.B6eHkxRm.js";
import {
    e as K,
    i as Q
} from "./each.BRhQgEZK.js";
import {
    s as I
} from "./attributes.BEKrBjrZ.js";
import {
    t as V
} from "./button.DNbQo9vX.js";
import {
    p as X
} from "./props.yNAbM6Ip.js";
import {
    M as w
} from "./food-link.svelte_svelte_type_style_lang.cT7JjgFG.js";
import {
    s as N
} from "./render.DH2vE9eA.js";
import {
    i as Y
} from "./if.Bf6hnlR_.js";
import {
    r as Z,
    l as $,
    b as D
} from "./page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js";
import {
    M as tt
} from "./index.svelte_svelte_type_style_lang.SD9Dwx4t.js";
import {
    F as et,
    G as R
} from "./food-link.DDaCNxho.js";

function rt(e) {
    return e
}

function nt(e) {
    return -.5 * (Math.cos(Math.PI * e) - 1)
}

function F(e) {
    return Object.prototype.toString.call(e) === "[object Date]"
}

function j(e, t) {
    if (e === t || e !== e) return () => e;
    const r = typeof e;
    if (r !== typeof t || Array.isArray(e) !== Array.isArray(t)) throw new Error("Cannot interpolate values of different type");
    if (Array.isArray(e)) {
        const n = t.map((a, s) => j(e[s], a));
        return a => n.map(s => s(a))
    }
    if (r === "object") {
        if (!e || !t) throw new Error("Object cannot be null");
        if (F(e) && F(t)) {
            const s = e.getTime(),
                i = t.getTime() - s;
            return d => new Date(s + d * i)
        }
        const n = Object.keys(t),
            a = {};
        return n.forEach(s => {
            a[s] = j(e[s], t[s])
        }), s => {
            const c = {};
            return n.forEach(i => {
                c[i] = a[i](s)
            }), c
        }
    }
    if (r === "number") {
        const n = t - e;
        return a => e + a * n
    }
    throw new Error(`Cannot interpolate ${r} values`)
}
class T {#
    t = U(void 0);#
    e = U(void 0);#
    n;#
    r = null;
    constructor(t, r = {}) {
        this.#t.v = this.#e.v = t, this.#n = r
    }
    static of (t, r) {
        const n = new T(t(), r);
        return H(() => {
            n.set(t())
        }), n
    }
    set(t, r) {
        C(this.#e, t);
        let n = this.#t.v,
            a = this.#r,
            s = !1,
            {
                delay: c = 0,
                duration: i = 400,
                easing: d = rt,
                interpolate: g = j
            } = { ...this.#n,
                ...r
            };
        const f = Z.now() + c;
        let p;
        return this.#r = $(b => {
            if (b < f) return !0;
            s || (s = !0, p = g(n, t), typeof i == "function" && (i = i(n, t)), a == null || a.abort());
            const l = b - f;
            return l > i ? (C(this.#t, t), !1) : (C(this.#t, p(d(l / i))), !0)
        }), this.#r.promise
    }
    get current() {
        return o(this.#t)
    }
    get target() {
        return o(this.#e)
    }
    set target(t) {
        this.set(t)
    }
}
var st = z('<text class="svelte-oeegzn"><tspan x="0" class="svelte-oeegzn"> </tspan> <tspan x="0" dy="1.2em" class="svelte-oeegzn"> </tspan></text>'),
    at = z('<path class="svelte-oeegzn"></path><!>', 1);

function ot(e, t) {
    k(t, !0);
    const r = Math.PI / 180,
        n = -180,
        a = {
            duration: 300,
            easing: nt
        },
        s = T.of(() => t.start, a),
        c = T.of(() => t.width, a);

    function i(h, m) {
        const y = (h * 360 + n) * r;
        return {
            x: Math.cos(y) * m,
            y: Math.sin(y) * m
        }
    }
    const d = u(() => i(s.current, t.radius)),
        g = u(() => i(s.current + c.current / 2, t.radius * .6)),
        f = u(() => i(s.current + c.current, t.radius)),
        p = u(() => Math.round(c.current)),
        b = u(() => `
M ${o(d).x},${o(d).y}
A ${t.radius} ${t.radius} 0 ${o(p)} 1 ${o(f).x} ${o(f).y}
L 0 0
z
`);
    var l = at(),
        _ = J(l),
        v = L(_); {
        var M = h => {
            var m = st(),
                x = O(m),
                y = O(x, !0);
            A(x);
            var S = L(x, 2),
                W = O(S);
            E(() => N(W, `${Math.round(c.current*100)??""}%`)), A(S), A(m), E(() => {
                I(m, "transform", `translate(${o(g).x??""} ${o(g).y??""})`), N(y, t.label)
            }), P(h, m)
        };
        Y(v, h => {
            t.label && !t.inline && c.current > .09 && h(M)
        })
    }
    E(() => {
        I(_, "fill", t.color), I(_, "d", o(b))
    }), P(e, l), q()
}
var it = z('<svg class="svelte-zh5dbf"></svg>');

function It(e, t) {
    k(t, !0);
    let r = X(t, "inline", 3, !1);
    const n = 1,
        a = 10,
        s = -1 * (a + n),
        c = 2 * (a + n);
    let i = u(() => t.use_net_carbs ? t.nutrition.net_carbs : t.nutrition.carbs),
        d = u(() => t.nutrition.fats),
        g = u(() => t.nutrition.proteins),
        f = u(() => o(d) * w.fats + o(i) * w.carbs + o(g) * w.proteins),
        p = u(() => o(f) ? [{
            label: "Fat",
            percent: o(d) * w.fats / o(f),
            color: "var(--fats-color)"
        }, {
            label: "Carbs",
            percent: o(i) * w.carbs / o(f),
            color: "var(--carbs-color)"
        }, {
            label: "Protein",
            percent: o(g) * w.proteins / o(f),
            color: "var(--proteins-color)"
        }] : [{
            label: null,
            percent: 1 / 3,
            color: "var(--fats-color)"
        }, {
            label: null,
            percent: 1 / 3,
            color: "var(--carbs-color)"
        }, {
            label: null,
            percent: 1 / 3,
            color: "var(--proteins-color)"
        }]);

    function b(_, v) {
        return _.slice(0, v).reduce((h, m) => h + m.percent, 0)
    }
    var l = it();
    I(l, "viewBox", `${s} ${s} ${c} ${c}`), K(l, 21, () => o(p), Q, (_, v, M) => {
        var h = u(() => b(o(p), M));
        ot(_, {
            get color() {
                return o(v).color
            },
            get inline() {
                return r()
            },
            get label() {
                return o(v).label
            },
            radius: a,
            get start() {
                return o(h)
            },
            get width() {
                return o(v).percent
            }
        })
    }), A(l), E(() => V(l, "inline", r())), P(e, l), q()
}
const ct = ["0", "⅓", "⅔", "1"],
    lt = ["0", "¹⁄₁₆", "⅛", "³⁄₁₆", "¼", "⁵⁄₁₆", "⅜", "⁷⁄₁₆", "½", "⁹⁄₁₆", "⅝", "¹¹⁄₁₆", "¾", "¹³⁄₁₆", "⅞", "¹⁵⁄₁₆", "1"];

function G(e, t, r) {
    const n = Math.round(e * t);
    return {
        distance: Math.abs(e - n / t),
        character: r[n]
    }
}

function B(e) {
    const t = e % 1;
    if (!t) return e;
    const r = Math.floor(e),
        n = G(t, 3, ct),
        a = G(t, 16, lt),
        s = n.distance < a.distance ? n.character : a.character;
    return s === "0" ? r || t.toPrecision(1) : s === "1" ? r + 1 : r === 0 ? s : `${r} ${s}`
}

function ut(e) {
    return "model" in e && e.model === et.RECIPE
}

function Rt(e, t, r) {
    var n;
    if (!t) return R;
    if (r = r ? ? t.default_units, (e == null ? void 0 : e.units) === tt.METRIC && t.accurate_grams && !ut(t)) {
        const a = ((n = t.weights[r]) == null ? void 0 : n.description) || "";
        if (ht.some(s => a.match(s))) return R
    }
    return r
}

function Tt(e, t) {
    const r = e.weights[t.units];
    if (!r || t.units === R) return ft(e, t);
    const n = t.scaled_amount * r.amount,
        a = r.description === "serving" && n > 1 ? "servings" : r.description;
    return `${B(n)} ${a}`
}

function ft(e, t) {
    const r = e.weights[R],
        n = t.scaled_amount * r.amount;
    return n > 1e3 ? `${D(n/1e3,2)}kg` : n > 1 ? `${D(n)}g` : `${n.toPrecision(1)}g`
}

function Ct(e, t) {
    const r = e.weights[t.units],
        n = t.scaled_amount * r.amount,
        a = e.food_name.toLowerCase();
    let s = `${B(n)} ${r.description}`;
    return dt.includes(r.description) ? (s += ` ${a}`, n !== 1 && !a.endsWith("s") && (s += "s")) : s += ` of ${a}`, s
}
const dt = ["extra small", "small", "medium", "large", "extra large", "jumbo"],
    ht = ["cup", "ounce", "oz", "tablespoon", "tbsp", "teaspoon", "tsp", "lb", "lbs"].map(e => new RegExp(`\\b${e}\\b`));
export {
    It as N, Rt as d, Tt as f, ft as g, ut as i, Ct as s
};
//# sourceMappingURL=food-amount.DUTIaASS.js.map