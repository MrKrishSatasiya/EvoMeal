import {
    y as b,
    b as e
} from "./runtime.B6eHkxRm.js";

function o(u, n, r) {
    if (u == null) return n(void 0), b;
    const s = e(() => u.subscribe(n, r));
    return s.unsubscribe ? () => s.unsubscribe() : s
}
export {
    o as s
};
//# sourceMappingURL=utils.CIYfZ980.js.map