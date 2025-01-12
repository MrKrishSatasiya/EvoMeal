import {
    m as Y,
    A as q,
    B as X,
    W as Z,
    a as C,
    c as F,
    o as P,
    s as E,
    f as I
} from "./food-link.svelte_svelte_type_style_lang.cT7JjgFG.js";
import {
    a as h,
    t as A
} from "./disclose-version.lyO5itLq.js";
import {
    p as j,
    an as f,
    h as O,
    ah as v,
    ai as b,
    g as l,
    aj as U,
    i as z,
    aI as w,
    ae as $
} from "./runtime.B6eHkxRm.js";
import {
    m as M,
    e as S
} from "./svelte-head.Cog7lhpT.js";
import {
    i as R
} from "./if.Bf6hnlR_.js";
import {
    s as B
} from "./snippet.CWXx-QH6.js";
import {
    a as L,
    t as V,
    f as H
} from "./page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js";
import {
    b as ee
} from "./this.KJJo-LO2.js";
import {
    M as te
} from "./row.DyTlJJ4r.js";
import {
    b as ae
} from "./entry.K0IoxZhe.js";
import {
    h as re
} from "./html.h6Bcc72m.js";
import {
    s as ie
} from "./attributes.BEKrBjrZ.js";

function Me(e) {
    switch (typeof e) {
        case "function":
            return structuredClone(e);
        case "object":
            return e instanceof Map || e instanceof Set ? structuredClone(e) : JSON.parse(JSON.stringify(e));
        default:
            return e
    }
}
var G = (e => (e[e.Balanced = 0] = "Balanced", e[e.Variety = 1] = "Variety", e[e.Macros = 2] = "Macros", e[e.Groceries = 3] = "Groceries", e))(G || {});
Y(G);
var o = (e => (e.ANYTHING = "anything", e.KETO = "atkins / ketogenic", e.MEDITERRANEAN = "mediterranean", e.PALEO = "paleo", e.VEGAN = "vegan", e.VEGETARIAN = "vegetarian", e))(o || {}),
    D = (e => (e[e["No limit"] = 0] = "No limit", e[e.Low = 5] = "Low", e[e.Medium = 15] = "Medium", e[e.High = 25] = "High", e))(D || {});
Y(D);
var k = (e => (e.IMPERIAL = "I", e.METRIC = "M", e))(k || {});
const se = {
        [o.ANYTHING]: {
            calories: 1800,
            min_carbs: 90,
            max_carbs: 225,
            min_fats: 40,
            max_fats: 100,
            min_proteins: 90,
            max_proteins: 225
        },
        [o.KETO]: {
            calories: 1800,
            min_carbs: 0,
            max_carbs: 40.5,
            min_fats: 120,
            max_fats: 170,
            min_proteins: 67.5,
            max_proteins: 135
        },
        [o.PALEO]: {
            calories: 1800,
            min_carbs: 45,
            max_carbs: 135,
            min_fats: 40,
            max_fats: 140,
            min_proteins: 45,
            max_proteins: 157.5
        },
        [o.MEDITERRANEAN]: {
            calories: 1800,
            min_carbs: 45,
            max_carbs: 180,
            min_fats: 40,
            max_fats: 140,
            min_proteins: 45,
            max_proteins: 180
        },
        [o.VEGETARIAN]: {
            calories: 1800,
            min_carbs: 45,
            max_carbs: 180,
            min_fats: 40,
            max_fats: 200,
            min_proteins: 45,
            max_proteins: 450
        },
        [o.VEGAN]: {
            calories: 1800,
            min_carbs: 45,
            max_carbs: 450,
            min_fats: 40,
            max_fats: 200,
            min_proteins: 45,
            max_proteins: 450
        }
    },
    u = {
        title: "Breakfast",
        size_slider: 100,
        family_scale: 1,
        takeout: !1,
        macro_focus: "",
        min_preptime: 0,
        max_preptime: 30,
        min_cooktime: 0,
        max_cooktime: 30,
        max_totaltime: 30,
        num_foods_per_meal: 0,
        preferred_food_types: 1,
        complexity: 2,
        override_complexity: !1,
        only_use_recurring: !1,
        deleted: !1,
        resource_uri: -151003403
    },
    p = {
        title: "Lunch",
        size_slider: 100,
        family_scale: 1,
        takeout: !1,
        macro_focus: "",
        min_preptime: 0,
        max_preptime: 30,
        min_cooktime: 0,
        max_cooktime: 0,
        max_totaltime: 30,
        num_foods_per_meal: 0,
        preferred_food_types: 2,
        complexity: 2,
        override_complexity: !1,
        only_use_recurring: !1,
        deleted: !1,
        resource_uri: -514388703
    },
    c = {
        title: "Dinner",
        size_slider: 125,
        family_scale: 1,
        takeout: !1,
        macro_focus: "",
        min_preptime: 0,
        max_preptime: 30,
        min_cooktime: 1,
        max_cooktime: 30,
        max_totaltime: 30,
        num_foods_per_meal: 0,
        preferred_food_types: 3,
        complexity: 2,
        override_complexity: !1,
        only_use_recurring: !1,
        deleted: !1,
        resource_uri: -400353522
    },
    _ = {
        title: "Snack",
        size_slider: 50,
        family_scale: 1,
        takeout: !1,
        macro_focus: "",
        min_preptime: 0,
        max_preptime: 30,
        min_cooktime: 0,
        max_cooktime: 0,
        max_totaltime: 15,
        num_foods_per_meal: 0,
        preferred_food_types: 4,
        complexity: 1,
        override_complexity: !1,
        only_use_recurring: !1,
        deleted: !1,
        resource_uri: -107430814
    },
    K = {
        1: [c],
        2: [u, c],
        3: [u, p, c],
        4: [u, p, _, c],
        5: [u, _, p, _, c],
        6: [u, _, p, _, c, _]
    };

function oe(e) {
    if (!ne(e)) throw new TypeError;
    return K[e].map((s, r) => ({
        resource_uri: -1 * r,
        meal_number: r,
        foods: [],
        meal_type: s
    }))
}

function ne(e) {
    return e in K
}
const Be = {
        days: [{
            resource_uri: -696373604,
            nutrition_profile: { ...se[o.ANYTHING],
                fiber: 25,
                macro_scheme: "grams",
                title: "My Nutrition Targets",
                resource_uri: -591775990
            },
            meals: oe(3)
        }],
        swole_user: {
            activity_level: q["Desk job, light exercise"],
            age: null,
            bodyfat: X.Medium,
            exclusions: null,
            use_net_carbs: !1,
            weight: null,
            weight_goal_weekly_rate: 1,
            goal: Z["Maintain weight"],
            height: null,
            preset_diet: o.ANYTHING,
            units: navigator.languages[0].toLowerCase() === "en-us" ? k.IMPERIAL : k.METRIC,
            generator_focus: 0,
            use_partial_servings: !1
        },
        diet_json_id: -696373604
    },
    le = new te("(any-hover: hover) and (min-width: 30em)");
var me = A('<aside class="tooltip svelte-g6z4dj"><!></aside>'),
    ce = A('<div class="tooltip-target svelte-g6z4dj" role="tooltip"><!></div> <!>', 1);

function Le(e, s) {
    j(s, !0);
    let r = w(void 0),
        i = w(!1);
    ae(() => f(i, !1));

    function d(t) {
        const a = document.createRange();
        return a.selectNodeContents(t), a.getBoundingClientRect()
    }

    function T() {
        le.current && f(i, !0)
    }

    function g(t) {
        async function a() {
            const n = await F({
                getBoundingClientRect() {
                    if (!l(r)) throw new TypeError;
                    return d(l(r))
                }
            }, t, {
                placement: "right-start",
                middleware: [P({
                    mainAxis: 10,
                    crossAxis: -20
                }), E({
                    padding: 5
                }), I({
                    fallbackAxisSideDirection: "start"
                })]
            });
            t.style.left = `${n.x}px`, t.style.top = `${n.y}px`
        }
        if (l(r)) return {
            destroy: C(l(r), t, a)
        }
    }

    function y(t) {
        var a;
        return t.setAttribute("popover", "manual"), (a = t.showPopover) == null || a.call(t), {
            destroy: () => {
                var n;
                return (n = t.hidePopover) == null ? void 0 : n.call(t)
            }
        }
    }
    var N = ce(),
        m = O(N),
        J = v(m);
    B(J, () => s.children), b(m), ee(m, t => f(r, t), () => l(r));
    var W = U(m, 2); {
        var Q = t => {
            var a = me(),
                n = v(a);
            B(n, () => s.tooltip), b(a), L(a, x => y == null ? void 0 : y(x)), L(a, x => g == null ? void 0 : g(x)), V(1, a, () => H, () => ({
                delay: 250,
                duration: 150
            })), V(2, a, () => H, () => ({
                duration: 50
            })), h(t, a)
        };
        R(W, t => {
            l(i) && t(Q)
        })
    }
    M("mouseenter", m, T), M("mouseleave", m, () => f(i, !1)), h(e, N), z()
}
const _e = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>';
async function fe(e, s, r) {
    const i = e.currentTarget;
    f(s, !0);
    try {
        await r.onclick()
    } finally {
        i.addEventListener("animationiteration", () => f(s, !1), {
            once: !0
        })
    }
}
var ue = A('<button type="button" class="svelte-ltus36"><!></button>');

function Ve(e, s) {
    j(s, !0);
    let r = w(!1);
    var i = ue();
    i.__click = [fe, r, s];
    var d = v(i);
    re(d, () => _e), b(i), $(() => {
        ie(i, "aria-label", s.label), i.disabled = l(r)
    }), h(e, i), z()
}
S(["click"]);
export {
    Be as D, k as M, o as P, Ve as R, Le as T, K as a, oe as b, Me as c, se as d
};
//# sourceMappingURL=index.svelte_svelte_type_style_lang.SD9Dwx4t.js.map