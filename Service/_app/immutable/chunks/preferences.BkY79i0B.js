import {
    a as x,
    t as C,
    e as Y,
    c as W
} from "./disclose-version.lyO5itLq.js";
import {
    ab as D,
    g as i,
    an as M,
    aR as le,
    aS as ie,
    p as T,
    ah as _,
    h as I,
    aj as w,
    ae as L,
    ai as h,
    i as R,
    f as B,
    y as X,
    aI as k,
    n as A
} from "./runtime.B6eHkxRm.js";
import {
    i as z
} from "./if.Bf6hnlR_.js";
import {
    s as ce
} from "./attributes.BEKrBjrZ.js";
import {
    p as O,
    a as ue
} from "./props.yNAbM6Ip.js";
import {
    b as J
} from "./this.KJJo-LO2.js";
import {
    s as fe,
    B as Q
} from "./button.DNbQo9vX.js";
import {
    e as G,
    i as de
} from "./each.BRhQgEZK.js";
import {
    o as pe
} from "./index-client.DIHSGyyT.js";
import {
    L as ve,
    N as me
} from "./loading.DgNyjRFt.js";
import "./legacy.BRi200Dj.js";
import {
    b as Z
} from "./page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js";
import "./client.BK1FkeFH.js";
import {
    s as F
} from "./render.DH2vE9eA.js";
import {
    M as he
} from "./macro-dot.Bmm4L3t_.js";
import {
    N as _e,
    f as ge
} from "./food-amount.DUTIaASS.js";
import {
    T as be,
    R as H,
    c as ye,
    a as xe,
    b as we,
    P as je
} from "./index.svelte_svelte_type_style_lang.SD9Dwx4t.js";
import {
    D as Ce
} from "./food-link.svelte_svelte_type_style_lang.cT7JjgFG.js";
import {
    i as U,
    S as $e
} from "./row.DyTlJJ4r.js";
import {
    p as K,
    g as Me
} from "./ajax.4OqS7_lL.js";
import {
    a as Ee
} from "./food-link.DDaCNxho.js";
import {
    s as ee
} from "./snippet.CWXx-QH6.js";
import {
    a as Pe
} from "./public.CsyzgY3c.js";
import "./index.g5YcAAdQ.js";
class Te extends Map {#
    e = new Map;#
    t = D(0);#
    r = D(0);
    constructor(e) {
        if (super(), e) {
            for (var [t, r] of e) super.set(t, r);
            this.#r.v = super.size
        }
    }
    has(e) {
        var t = this.#e,
            r = t.get(e);
        if (r === void 0) {
            var s = super.get(e);
            if (s !== void 0) r = D(0), t.set(e, r);
            else return i(this.#t), !1
        }
        return i(r), !0
    }
    forEach(e, t) {
        this.#s(), super.forEach(e, t)
    }
    get(e) {
        var t = this.#e,
            r = t.get(e);
        if (r === void 0) {
            var s = super.get(e);
            if (s !== void 0) r = D(0), t.set(e, r);
            else {
                i(this.#t);
                return
            }
        }
        return i(r), super.get(e)
    }
    set(e, t) {
        var n;
        var r = this.#e,
            s = r.get(e),
            u = super.get(e),
            d = super.set(e, t),
            f = this.#t;
        if (s === void 0) r.set(e, D(0)), M(this.#r, super.size), U(f);
        else if (u !== t) {
            U(s);
            var a = f.reactions === null ? null : new Set(f.reactions),
                o = a === null || !((n = s.reactions) != null && n.every(l => a.has(l)));
            o && U(f)
        }
        return d
    }
    delete(e) {
        var t = this.#e,
            r = t.get(e),
            s = super.delete(e);
        return r !== void 0 && (t.delete(e), M(this.#r, super.size), M(r, -1), U(this.#t)), s
    }
    clear() {
        if (super.size !== 0) {
            super.clear();
            var e = this.#e;
            M(this.#r, 0);
            for (var t of e.values()) M(t, -1);
            U(this.#t), e.clear()
        }
    }#
    s() {
        i(this.#t);
        var e = this.#e;
        if (this.#r.v !== e.size)
            for (var t of super.keys()) e.has(t) || e.set(t, D(0));
        for (var [, r] of this.#e) i(r)
    }
    keys() {
        return i(this.#t), super.keys()
    }
    values() {
        return this.#s(), super.values()
    }
    entries() {
        return this.#s(), super.entries()
    }[Symbol.iterator]() {
        return this.entries()
    }
    get size() {
        return i(this.#r), super.size
    }
}
let Re = -1;

function N(c) {
    return { ...c,
        resource_uri: Re--
    }
}

function te(c, e) {
    return c.days[0].meals = c.days[0].meals.map((t, r) => ({ ...t,
        foods: e.meals[r].foods.map(N)
    })), c
}
async function re(c, e, t = 10) {
    const r = () => K(c, `/g/generate/day-json/?num_results=${t}`, e);
    let s;
    return t === 1 ? s = [(await r()).results] : s = (await r()).results, s.map(u => ({
        meals: u.meals.map(f => ({
            foods: f.foods.map(N)
        }))
    }))
}
const se = Symbol();

function bt(c = new Te) {
    const e = new Map;

    function t(a) {
        const o = c.get(a);
        if (!o) throw new TypeError;
        return o
    }

    function r(a) {
        const o = a.days[0].meals.flatMap(n => n.foods);
        return o.length ? o.every(n => c.has(n.food)) : !1
    }
    async function s(a, o) {
        if (c.has(o)) return c.get(o);
        if (e.has(o)) return e.get(o); {
            const n = (async () => {
                const l = await Me(a, o);
                return c.set(o, l), e.delete(o), l
            })();
            return e.set(o, n), n
        }
    }
    async function u(a, ...o) {
        const n = o.map(l => s(a, l));
        return Promise.all(n)
    }
    async function d(a, ...o) {
        const n = o.flatMap(l => l.foods).map(l => l.food);
        return u(a, ...n)
    }
    const f = {
        get: t,
        isLoaded: r,
        prefetch: u,
        prefetchMeals: d
    };
    return le(se, f), f
}

function V() {
    const c = ie(se);
    if (!c) throw new TypeError;
    return c
}
var qe = C('<div><dt><!> </dt> <dd class="svelte-71miva"> <!></dd></div>'),
    Se = C('<dl class="svelte-71miva"></dl>'),
    De = C("<!> ", 1),
    Le = C('<div class="calorie-count svelte-71miva"><!></div>');

function ae(c, e) {
    T(e, !0);
    const t = ["calories", "carbs", "net_carbs", "proteins", "fats", "fiber", "sodium", "cholesterol"],
        r = V(),
        s = B(() => {
            const f = Object.fromEntries(t.map(a => [a, 0]));
            for (const a of e.food_objects) {
                const o = r.get(a.food);
                for (const n of t) f[n] += o[n] * a.scaled_amount
            }
            return f
        });
    var u = Le(),
        d = _(u);
    be(d, {
        tooltip: a => {
            var o = Se();
            G(o, 21, () => t, de, (n, l) => {
                var p = qe();
                const g = B(() => {
                    const {
                        display_name: $,
                        units: P
                    } = Ce[i(l)];
                    return {
                        display_name: $,
                        units: P
                    }
                });
                var b = _(p),
                    j = _(b); {
                    var v = $ => {
                        he($, {
                            get type() {
                                return i(l)
                            }
                        })
                    };
                    z(j, $ => {
                        (i(l) === "carbs" || i(l) === "fats" || i(l) === "proteins") && $(v)
                    })
                }
                var m = w(j);
                h(b);
                var y = w(b, 2),
                    E = _(y, !0);
                L(() => F(E, Z(i(s)[i(l)])));
                var q = w(E); {
                    var S = $ => {
                        var P = Y();
                        L(() => F(P, i(g).units)), x($, P)
                    };
                    z(q, $ => {
                        i(l) !== "calories" && $(S)
                    })
                }
                h(y), h(p), L(() => {
                    fe(p, `${i(l)??""} svelte-71miva`), F(m, ` ${i(g).display_name??""}`)
                }), x(n, p)
            }), h(o), x(a, o)
        },
        children: (a, o) => {
            var n = De(),
                l = I(n);
            _e(l, {
                inline: !0,
                get nutrition() {
                    return i(s)
                },
                use_net_carbs: !1
            });
            var p = w(l);
            L(() => F(p, ` ${Z(i(s).calories)??""} Calories`)), x(a, n)
        },
        $$slots: {
            tooltip: !0,
            default: !0
        }
    }), h(u), x(c, u), R()
}
var Fe = C('<p class="svelte-u63x5w"> </p>'),
    Ie = C('<li class="svelte-u63x5w"><!> <div class="action svelte-u63x5w"><!></div></li>');

function ze(c, e) {
    T(e, !0);
    let t = O(e, "food_object", 15);
    const r = V();
    let s = B(() => r.get(t().food)),
        u = -1,
        d;
    async function f() {
        d || (d = (await K(fetch, "/g/generate/foodobject-json/", { ...e.plan,
            meal_json_id: e.meal.resource_uri,
            food_json_id: t().resource_uri
        })).results), u = (u + 1) % d.length;
        const p = d[u];
        await r.prefetch(fetch, p.food), t(Object.assign(t(), N(p)))
    }
    var a = Ie(),
        o = _(a);
    Ee(o, {
        get amount() {
            return t()
        },
        get food() {
            return i(s)
        },
        children: (p, g) => {
            var b = Fe(),
                j = _(b, !0);
            L(() => F(j, ge(i(s), t()))), h(b), x(p, b)
        },
        $$slots: {
            default: !0
        }
    });
    var n = w(o, 2),
        l = _(n);
    H(l, {
        label: "Generate Food",
        onclick: f
    }), h(n), h(a), x(c, a), R()
}
var Oe = C('<section class="svelte-bdns86"><header class="svelte-bdns86"><!></header> <!></section>');

function oe(c, e) {
    T(e, !0);
    var t = Oe(),
        r = _(t),
        s = _(r);
    ee(s, () => e.header ? ? X), h(r);
    var u = w(r, 2);
    ee(u, () => e.children ? ? X), h(t), x(c, t), R()
}
var Ue = C("<hgroup><h4> </h4> <!></hgroup> <!>", 1),
    Ae = C('<ul class="svelte-1cjrqa0"></ul>');

function Be(c, e) {
    T(e, !0);
    let t = O(e, "meal", 15);
    const r = V();
    let s = -1,
        u;
    async function d() {
        u || (u = (await K(fetch, "/g/generate/meal-json/", { ...e.plan,
            meal_json_id: t().resource_uri
        })).results), s = (s + 1) % u.length;
        const f = u[s];
        await r.prefetchMeals(fetch, f), t(t().foods = ye(f.foods.map(N)), !0)
    }
    oe(c, {
        header: a => {
            var o = Ue(),
                n = I(o),
                l = _(n),
                p = _(l, !0);
            h(l);
            var g = w(l, 2);
            ae(g, {
                get food_objects() {
                    return t().foods
                }
            }), h(n);
            var b = w(n, 2);
            H(b, {
                label: "Regenerate Meal",
                onclick: d
            }), L(() => F(p, t().meal_type.title)), x(a, o)
        },
        children: (a, o) => {
            var n = Ae();
            G(n, 22, () => t().foods, p => p, (p, g, b) => {
                ze(p, {
                    get meal() {
                        return t()
                    },
                    get plan() {
                        return e.plan
                    },
                    get food_object() {
                        return t().foods[i(b)]
                    },
                    set food_object(j) {
                        t(t().foods[i(b)] = j, !0)
                    }
                })
            }), h(n), x(a, n)
        },
        $$slots: {
            header: !0,
            default: !0
        }
    }), R()
}
var Ne = C(`<hgroup class="svelte-1acfswh"><h3>Today's Meal Plan</h3> <!></hgroup> <!>`, 1);

function Ve(c, e) {
    T(e, !0);
    const t = V();
    let r = O(e, "plan", 15),
        s = k(!t.isLoaded(r())),
        u = {},
        d = -1,
        f = null;
    async function a() {
        let n = u = {};
        f || (f = await re(fetch, r())), d = (d + 1) % f.length, await t.prefetchMeals(fetch, ...f[d].meals), n === u && (r(te(r(), f[d])), M(s, !1))
    }
    async function o() {
        M(s, !0), d = -1, f = null, await a()
    }
    return pe(async () => {
        if (i(s)) {
            if (!r().days[0].meals[0].foods.length) {
                const [n] = await re(fetch, r(), 1);
                r(te(r(), n))
            }
            await t.prefetchMeals(fetch, ...r().days[0].meals), M(s, !1)
        }
    }), oe(c, {
        header: l => {
            var p = Ne(),
                g = I(p),
                b = w(_(g), 2); {
                var j = y => {
                    var E = B(() => r().days[0].meals.flatMap(q => q.foods));
                    ae(y, {
                        get food_objects() {
                            return i(E)
                        }
                    })
                };
                z(b, y => {
                    i(s) || y(j)
                })
            }
            h(g);
            var v = w(g, 2); {
                var m = y => {
                    H(y, {
                        label: "Regenerate Day",
                        onclick: a
                    })
                };
                z(v, y => {
                    i(s) || y(m)
                })
            }
            x(l, p)
        },
        children: (l, p) => {
            var g = W(),
                b = I(g); {
                var j = m => {
                        ve(m)
                    },
                    v = m => {
                        var y = W(),
                            E = I(y);
                        G(E, 18, () => r().days[0].meals, S => S, (S, $, P) => {
                            Be(S, {
                                get plan() {
                                    return r()
                                },
                                get meal() {
                                    return r().days[0].meals[i(P)]
                                },
                                set meal(ne) {
                                    r(r().days[0].meals[i(P)] = ne, !0)
                                }
                            })
                        }), x(m, y)
                    };
                z(b, m => {
                    i(s) ? m(j) : m(v, !1)
                })
            }
            x(l, g)
        },
        $$slots: {
            header: !0,
            default: !0
        }
    }), R({
        reset: o
    })
}
const Ye = "" + new URL("../assets/celebrate-orange.Bn7mVXrb.png",
    import.meta.url).href;
var ke = C(`<h3 class="svelte-pdxivr"><abbr title="Total Daily Energy Expenditure" class="svelte-pdxivr">TDEE</abbr> Calculator</h3> <p>Unsure of your calorie goals? Use our calorie calculator to help set
        your targets.</p> <p><!></p>`, 1),
    Ge = C(`<section class="svelte-pdxivr"><!> <aside class="svelte-pdxivr"><!> <h3 class="svelte-pdxivr">Ready for more?</h3> <p>With a free account, you can customize your preferences, track your
      intake, create recipes, and much more.</p> <p><!></p> <img alt="" class="svelte-pdxivr"></aside></section>`);

function yt(c, e) {
    T(e, !0);
    let t = O(e, "calculator", 3, !1),
        r = O(e, "plan", 15),
        s = k(void 0),
        u = k(void 0);

    function d() {
        var v;
        (v = i(s)) == null || v.scrollIntoView()
    }
    async function f() {
        var v;
        await ((v = i(u)) == null ? void 0 : v.reset())
    }
    var a = Ge(),
        o = _(a);
    J(Ve(o, {
        get plan() {
            return r()
        },
        set plan(v) {
            r(v)
        }
    }), v => M(u, ue(v)), () => i(u));
    var n = w(o, 2),
        l = _(n); {
        var p = v => {
            var m = ke(),
                y = w(I(m), 4),
                E = _(y);
            Q(E, {
                get href() {
                    return `/calculator?diet=${r().swole_user.preset_diet??""}`
                },
                secondary: !0,
                children: (q, S) => {
                    A();
                    var $ = Y("Calorie Calculator");
                    x(q, $)
                },
                $$slots: {
                    default: !0
                }
            }), h(y), x(v, m)
        };
        z(l, v => {
            t() && v(p)
        })
    }
    var g = w(l, 6),
        b = _(g);
    Q(b, {
        href: `${Pe}/registration`,
        rel: "external",
        children: (v, m) => {
            A();
            var y = Y("Register");
            x(v, y)
        },
        $$slots: {
            default: !0
        }
    }), h(g);
    var j = w(g, 2);
    return ce(j, "src", Ye), h(n), h(a), J(a, v => M(s, v), () => i(s)), x(c, a), R({
        scrollIntoView: d,
        reset: f
    })
}

function xt(c, e, t) {
    return { ...c,
        exclusions: t ? ? null,
        preset_diet: e,
        use_net_carbs: e === je.KETO
    }
}

function He(c, e) {
    const t = c.calories / e.calories,
        s = Object.fromEntries(["min_carbs", "max_carbs", "min_fats", "max_fats", "min_proteins", "max_proteins"].map(u => {
            const d = e[u] * t;
            return [u, d]
        }));
    return { ...c,
        ...s
    }
}

function wt(c, e) {
    T(e, !0);
    let t = O(e, "form", 15),
        r = B(() => t().days[0].nutrition_profile),
        s = new Map(Object.keys(xe).map(m => [parseInt(m, 10), m]));

    function u(m) {
        t(t().days[0].meals = we(m), !0)
    }

    function d(m) {
        m.currentTarget.reportValidity()
    }

    function f(m) {
        m.currentTarget.checkValidity() && t(t().days[0].nutrition_profile = He(i(r), e.original_targets), !0)
    }
    var a = Ke(),
        o = _(a),
        n = _(o),
        l = w(_(n), 2),
        p = _(l);
    me(p, {
        max: 1e4,
        min: 100,
        required: !0,
        step: 1,
        onblur: d,
        oninput: f,
        get value() {
            return i(r).calories
        },
        set value(m) {
            i(r).calories = m
        }
    }), A(), h(l), h(n), A(2), h(o);
    var g = w(o, 2),
        b = w(_(g), 2),
        j = _(b),
        v = _(j);
    $e(v, {
        options: s,
        get value() {
            return t().days[0].meals.length
        },
        onchange: u
    }), A(), h(j), h(b), h(g), h(a), x(c, a), R()
}
export {
    ae as C, wt as P, yt as R, Te as S, He as a, te as b, bt as c, re as g, xt as s
};
//# sourceMappingURL=preferences.BkY79i0B.js.map