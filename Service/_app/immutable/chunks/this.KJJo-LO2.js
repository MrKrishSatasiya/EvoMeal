import {
    S,
    T,
    b as h,
    V as k,
    W as c
} from "./runtime.B6eHkxRm.js";

function t(r, i) {
    return r === i || (r == null ? void 0 : r[c]) === i
}

function A(r = {}, i, a, q) {
    return S(() => {
        var f, s;
        return T(() => {
            f = s, s = [], h(() => {
                r !== a(...s) && (i(r, ...s), f && t(a(...f), r) && i(null, ...f))
            })
        }), () => {
            k(() => {
                s && t(a(...s), r) && i(null, ...s)
            })
        }
    }), r
}
export {
    A as b
};
//# sourceMappingURL=this.KJJo-LO2.js.map