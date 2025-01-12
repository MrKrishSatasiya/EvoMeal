import {
    a as l,
    t as h,
    c as A
} from "./disclose-version.lyO5itLq.js";
import {
    p,
    ae as c,
    i as B,
    g as X,
    f as j,
    ah as m,
    ai as f,
    aj as _,
    y as q,
    h as I
} from "./runtime.B6eHkxRm.js";
import {
    s as N
} from "./render.DH2vE9eA.js";
import {
    i as T
} from "./if.Bf6hnlR_.js";
import {
    s as k
} from "./snippet.CWXx-QH6.js";
import {
    h as H,
    s as d
} from "./attributes.BEKrBjrZ.js";
import {
    t as R
} from "./button.DNbQo9vX.js";
import {
    p as x
} from "./props.yNAbM6Ip.js";
import {
    b as K
} from "./public.CsyzgY3c.js";
import "./food-link.svelte_svelte_type_style_lang.cT7JjgFG.js";
const sa = 0;
var W = (e => (e.BRANDED_FOOD = "b", e.CUSTOM_FOOD = "c", e.NUTRITIONIX_BRANDED_FOOD = "nb", e.NUTRITIONIX_RESTAURANT_FOOD = "nr", e.RECIPE = "r", e.RESTAURANT_FOOD = "s", e.TRACKING = "tc", e.USDA_FOOD = "u", e.USDA_BRANDED_FOOD = "ub", e))(W || {});
const D = "" + new URL("../assets/missing_thumbnail.BbdnfBW3.svg",
    import.meta.url).href;

function J(e, a) {
    var t;
    const o = ((t = e.images) == null ? void 0 : t[0]) ? ? {
            image: e.placeholder_image,
            thumbnail: e.icon_thumbnail_svg
        },
        s = a ? o.image : o.thumbnail;
    return s ? K + s : D
}
var Q = h('<img class="svelte-1no711w">');

function V(e, a) {
    p(a, !0);
    let o = x(a, "full", 3, !1),
        s = j(() => J(a.food, o()));
    var t = Q();
    c(() => {
        var r;
        d(t, "alt", o() && ((r = a.food.images) != null && r[0]) ? a.food.food_name : ""), d(t, "loading", o() ? "eager" : "lazy"), d(t, "src", X(s)), R(t, "full", o())
    }), H(t), l(e, t), B()
}

function Y(e, a) {
    const o = a ? `?a=${a.scaled_amount}:${a.units}` : "";
    return e.public_url + o
}
var Z = h('<span class="description svelte-k5vk40"> </span>'),
    S = h('<div class="food svelte-k5vk40"><a class="svelte-k5vk40"><span class="image svelte-k5vk40"><!></span> <!></a> <!></div>');

function ra(e, a) {
    p(a, !0);
    let o = x(a, "amount", 3, null);
    var s = S(),
        t = m(s);
    c(() => d(t, "href", Y(a.food, o())));
    var r = m(t),
        y = m(r);
    V(y, {
        get food() {
            return a.food
        }
    }), f(r);
    var b = _(r),
        G = _(b);
    k(G, () => a.source ? ? q), f(t);
    var F = _(t, 2); {
        var P = i => {
                var n = A(),
                    v = I(n);
                k(v, () => a.children), l(i, n)
            },
            U = i => {
                var n = A(),
                    v = I(n); {
                    var w = u => {
                        var g = Z(),
                            z = m(g, !0);
                        f(g), c(() => N(z, a.food.description)), l(u, g)
                    };
                    T(v, u => {
                        a.food.description && u(w)
                    }, !0)
                }
                l(i, n)
            };
        T(F, i => {
            a.children ? i(P) : i(U, !1)
        })
    }
    f(s), c(() => {
        R(s, "center", !a.children && !a.food.description), N(b, ` ${a.food.food_name??""} `)
    }), l(e, s), B()
}
export {
    W as F, sa as G, ra as a, V as b
};
//# sourceMappingURL=food-link.DDaCNxho.js.map