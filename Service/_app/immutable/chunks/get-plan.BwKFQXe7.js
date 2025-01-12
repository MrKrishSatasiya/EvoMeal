import {
    w as f
} from "./entry.K0IoxZhe.js";
import {
    c as p,
    D as I
} from "./index.svelte_svelte_type_style_lang.SD9Dwx4t.js";

function S(e) {
    const s = {};
    return {
        getItem(t) {
            try {
                return e().getItem(t)
            } catch {
                return s[t]
            }
        },
        setItem(t, r) {
            try {
                e().setItem(t, r)
            } catch {
                s[t] = r
            }
        }
    }
}
const a = S(() => sessionStorage);

function b(e, s) {
    let t;
    const r = a.getItem(e);
    try {
        t = JSON.parse(r ? ? "")
    } catch {
        t = p(s)
    }
    const o = f(t);

    function u(n) {
        o.set(n);
        const c = JSON.stringify(n);
        a.setItem(e, c)
    }

    function g(n) {
        o.update(c => {
            const i = n(c),
                m = JSON.stringify(i);
            return a.setItem(e, m), i
        })
    }
    return {
        set: u,
        subscribe: o.subscribe,
        update: g
    }
}
const h = "homepage:plan:2024-03-08";

function d() {
    return b(h, I)
}
export {
    d as g, b as s
};
//# sourceMappingURL=get-plan.BwKFQXe7.js.map