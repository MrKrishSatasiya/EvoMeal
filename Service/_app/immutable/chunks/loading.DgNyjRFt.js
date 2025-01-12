import {
    c as w,
    a as i,
    t as p,
    n as _
} from "./disclose-version.lyO5itLq.js";
import {
    p as z,
    h as B,
    i as C,
    ah as b,
    ai as g,
    ae as v,
    S as O,
    aj as R
} from "./runtime.B6eHkxRm.js";
import {
    s as S
} from "./render.DH2vE9eA.js";
import {
    i as V
} from "./if.Bf6hnlR_.js";
import {
    a as A
} from "./page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js";
import {
    r as D,
    s as y,
    a as E
} from "./attributes.BEKrBjrZ.js";
import {
    b as F
} from "./input.DAFvKaP_.js";
import {
    p as s,
    r as G
} from "./props.yNAbM6Ip.js";
import {
    g as H,
    c as I
} from "./row.DyTlJJ4r.js";
import "./legacy.BRi200Dj.js";
import {
    e as J,
    i as K
} from "./each.BRhQgEZK.js";
var M = p("<span> </span>"),
    P = p("<input>");

function ie(m, e) {
    z(e, !0);
    let o = s(e, "error", 3, ""),
        n = s(e, "min", 3, 0),
        c = s(e, "required", 3, !0),
        r = s(e, "value", 15),
        u = s(e, "id", 19, () => e.name),
        x = G(e, ["$$slots", "$$events", "$$legacy", "error", "label", "name", "min", "required", "step", "value", "id"]);
    const q = H();
    var f = w(),
        h = B(f); {
        var L = t => {
                var a = M(),
                    l = b(a, !0);
                g(a), v(() => {
                    y(a, "id", u()), S(l, r())
                }), i(t, a)
            },
            N = t => {
                var a = P();
                D(a);
                let l;
                O(() => F(a, r)), A(a, (j, k) => {
                    var d;
                    return (d = I) == null ? void 0 : d(j, k)
                }, o), v(() => l = E(a, l, {
                    type: "number",
                    "aria-label": e.label,
                    name: e.name,
                    id: u(),
                    min: n(),
                    step: e.step ? ? "any",
                    required: c(),
                    ...x
                }, "svelte-1usyn2z")), i(t, a)
            };
        V(h, t => {
            q ? t(L) : t(N, !1)
        })
    }
    i(m, f), C()
}
var Q = _('<circle class="pellet svelte-1dfmvuq" cy="50" r="10"></circle>'),
    T = _('<svg viewBox="0 0 300 100" aria-label="Loading..." class="svelte-1dfmvuq"><circle class="pacman svelte-1dfmvuq" cx="50" cy="50" r="25"></circle><!></svg>');

function le(m) {
    var e = T(),
        o = R(b(e));
    J(o, 0, () => [100, 150, 200, 250, 300], K, (n, c) => {
        var r = Q();
        v(() => y(r, "cx", c)), i(n, r)
    }), g(e), i(m, e)
}
export {
    le as L, ie as N
};
//# sourceMappingURL=loading.DgNyjRFt.js.map