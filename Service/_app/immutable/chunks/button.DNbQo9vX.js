import {
    a as o,
    t as l
} from "./disclose-version.lyO5itLq.js";
import {
    m as c,
    p as u,
    ae as _,
    i as f,
    y as p,
    ah as m,
    ai as y
} from "./runtime.B6eHkxRm.js";
import {
    s as b
} from "./snippet.CWXx-QH6.js";
import {
    a as v
} from "./attributes.BEKrBjrZ.js";
import {
    p as h,
    r as N
} from "./props.yNAbM6Ip.js";

function z(t, s) {
    var e = t.__className,
        a = g(s);
    c && t.className === a ? t.__className = a : (e !== a || c && t.className !== a) && (s == null ? t.removeAttribute("class") : t.className = a, t.__className = a)
}

function g(t) {
    return t ? ? ""
}

function B(t, s, e) {
    if (e) {
        if (t.classList.contains(s)) return;
        t.classList.add(s)
    } else {
        if (!t.classList.contains(s)) return;
        t.classList.remove(s)
    }
}
const L = "_interaction_11et8_1",
    S = {
        interaction: L
    },
    d = S.interaction,
    I = "_button_1l7k0_1",
    x = {
        button: I
    },
    C = `${x.button} ${d}`;
var $ = l("<a><!></a>");

function D(t, s) {
    u(s, !0);
    let e = h(s, "secondary", 3, !1),
        a = N(s, ["$$slots", "$$events", "$$legacy", "secondary", "children"]);
    var n = $();
    let r;
    var i = m(n);
    b(i, () => s.children ? ? p), y(n), _(() => {
        r = v(n, r, {
            class: C,
            ...a
        }), B(n, "secondary", e())
    }), o(t, n), f()
}
export {
    D as B, d as I, C as a, z as s, B as t
};
//# sourceMappingURL=button.DNbQo9vX.js.map