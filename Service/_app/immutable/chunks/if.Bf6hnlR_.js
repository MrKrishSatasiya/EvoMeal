import {
    l as y,
    m as n,
    o as A,
    O as I,
    P as N,
    Q as R,
    E as p,
    D as o,
    R as _,
    t as u,
    q as h,
    v as g,
    U as D
} from "./runtime.B6eHkxRm.js";

function k(d, v, m = !1) {
    n && A();
    var e = d,
        a = null,
        s = null,
        f = D,
        E = m ? I : 0,
        r = !1;
    const T = (l, t = !0) => {
            r = !0, i(t, l)
        },
        i = (l, t) => {
            if (f === (f = l)) return;
            let c = !1;
            if (n) {
                const b = e.data === N;
                !!f === b && (e = R(), p(e), o(!1), c = !0)
            }
            f ? (a ? _(a) : t && (a = u(() => t(e))), s && h(s, () => {
                s = null
            })) : (s ? _(s) : t && (s = u(() => t(e))), a && h(a, () => {
                a = null
            })), c && o(!0)
        };
    y(() => {
        r = !1, v(T), r || i(null, null)
    }, E), n && (e = g)
}
export {
    k as i
};
//# sourceMappingURL=if.Bf6hnlR_.js.map