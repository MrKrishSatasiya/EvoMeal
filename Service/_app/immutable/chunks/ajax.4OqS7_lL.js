import {
    e as f
} from "./index.g5YcAAdQ.js";
import {
    P as p
} from "./public.CsyzgY3c.js";
async function E(t, r) {
    return o(t, "GET", r)
}
async function S(t, r) {
    try {
        return await E(t, r)
    } catch (e) {
        if (e instanceof a && e.code === 404) f(404);
        else throw e
    }
}
async function h(t, r, e) {
    return o(t, "POST", r, e)
}
async function o(t, r, e, n) {
    const i = e.includes("?") ? "&" : "?",
        c = `${e}${i}HTTP_BACKEND_VERSION=${p}`,
        s = await t(c, {
            body: n ? JSON.stringify(n) : void 0,
            headers: {
                "content-type": "application/json"
            },
            method: r
        });
    if (!s.ok) throw new a({
        code: s.status,
        method: r,
        url: e
    });
    if (s.status === 204) return null;
    if (s.headers.get("Api-Response-Version")) {
        const {
            data: u
        } = await s.json();
        return u
    } else return s.json()
}
class a extends Error {
    code;
    constructor({
        code: r,
        method: e,
        url: n
    }) {
        super(`ServerError ${r}: ${e} ${n}`), this.code = r, this.name = "ServerError"
    }
}
export {
    S as a, E as g, h as p
};
//# sourceMappingURL=ajax.4OqS7_lL.js.map