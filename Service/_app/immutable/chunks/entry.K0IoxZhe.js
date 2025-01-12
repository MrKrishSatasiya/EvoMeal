import {
    o as wt
} from "./index-client.DIHSGyyT.js";
import {
    y as pt,
    s as _e,
    aI as T,
    g as P,
    an as x,
    aJ as we
} from "./runtime.B6eHkxRm.js";
import {
    s as ve
} from "./utils.CIYfZ980.js";
import {
    a as be,
    b as L
} from "./paths.DL11_D3D.js";
import {
    H as it,
    S as St,
    R as Wt
} from "./control.CYgJF_JY.js";
new URL("sveltekit-internal://");

function Ae(t, e) {
    return t === "/" || e === "ignore" ? t : e === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : e === "always" && !t.endsWith("/") ? t + "/" : t
}

function Se(t) {
    return t.split("%25").map(decodeURI).join("%25")
}

function ke(t) {
    for (const e in t) t[e] = decodeURIComponent(t[e]);
    return t
}

function gt({
    href: t
}) {
    return t.split("#")[0]
}
const Ee = ["href", "pathname", "search", "toString", "toJSON"];

function Re(t, e, n) {
    const r = new URL(t);
    Object.defineProperty(r, "searchParams", {
        value: new Proxy(r.searchParams, {
            get(a, o) {
                if (o === "get" || o === "getAll" || o === "has") return s => (n(s), a[o](s));
                e();
                const i = Reflect.get(a, o);
                return typeof i == "function" ? i.bind(a) : i
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    for (const a of Ee) Object.defineProperty(r, a, {
        get() {
            return e(), t[a]
        },
        enumerable: !0,
        configurable: !0
    });
    return r
}
const Ie = "/__data.json",
    Ue = ".html__data.json";

function Le(t) {
    return t.endsWith(".html") ? t.replace(/\.html$/, Ue) : t.replace(/\/$/, "") + Ie
}

function Te(...t) {
    let e = 5381;
    for (const n of t)
        if (typeof n == "string") {
            let r = n.length;
            for (; r;) e = e * 33 ^ n.charCodeAt(--r)
        } else if (ArrayBuffer.isView(n)) {
        const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
        let a = r.length;
        for (; a;) e = e * 33 ^ r[--a]
    } else throw new TypeError("value must be a string or TypedArray");
    return (e >>> 0).toString(36)
}

function Pe(t) {
    const e = atob(t),
        n = new Uint8Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
    return n.buffer
}
const Yt = window.fetch;
window.fetch = (t, e) => ((t instanceof Request ? t.method : (e == null ? void 0 : e.method) || "GET") !== "GET" && K.delete(kt(t)), Yt(t, e));
const K = new Map;

function xe(t, e) {
    const n = kt(t, e),
        r = document.querySelector(n);
    if (r != null && r.textContent) {
        let {
            body: a,
            ...o
        } = JSON.parse(r.textContent);
        const i = r.getAttribute("data-ttl");
        return i && K.set(n, {
            body: a,
            init: o,
            ttl: 1e3 * Number(i)
        }), r.getAttribute("data-b64") !== null && (a = Pe(a)), Promise.resolve(new Response(a, o))
    }
    return window.fetch(t, e)
}

function Ce(t, e, n) {
    if (K.size > 0) {
        const r = kt(t, n),
            a = K.get(r);
        if (a) {
            if (performance.now() < a.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(n == null ? void 0 : n.cache)) return new Response(a.body, a.init);
            K.delete(r)
        }
    }
    return window.fetch(e, n)
}

function kt(t, e) {
    let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
    if (e != null && e.headers || e != null && e.body) {
        const a = [];
        e.headers && a.push([...new Headers(e.headers)].join(",")), e.body && (typeof e.body == "string" || ArrayBuffer.isView(e.body)) && a.push(e.body), r += `[data-hash="${Te(...a)}"]`
    }
    return r
}
const Ne = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Oe(t) {
    const e = [];
    return {
        pattern: t === "/" ? /^\/$/ : new RegExp(`^${$e(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return mt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return mt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ne.exec(c),[,h,y,u,g]=d;return e.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return mt(c)}).join("")}).join("")}/?$`),
        params: e
    }
}

function je(t) {
    return !/^\([^)]+\)$/.test(t)
}

function $e(t) {
    return t.slice(1).split("/").filter(je)
}

function De(t, e, n) {
    const r = {},
        a = t.slice(1),
        o = a.filter(s => s !== void 0);
    let i = 0;
    for (let s = 0; s < e.length; s += 1) {
        const c = e[s];
        let l = a[s - i];
        if (c.chained && c.rest && i && (l = a.slice(s - i, s + 1).filter(d => d).join("/"), i = 0), l === void 0) {
            c.rest && (r[c.name] = "");
            continue
        }
        if (!c.matcher || n[c.matcher](l)) {
            r[c.name] = l;
            const d = e[s + 1],
                h = a[s + 1];
            d && !d.rest && d.optional && h && c.chained && (i = 0), !d && !h && Object.keys(r).length === o.length && (i = 0);
            continue
        }
        if (c.optional && c.chained) {
            i++;
            continue
        }
        return
    }
    if (!i) return r
}

function mt(t) {
    return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function Fe({
    nodes: t,
    server_loads: e,
    dictionary: n,
    matchers: r
}) {
    const a = new Set(e);
    return Object.entries(n).map(([s, [c, l, d]]) => {
        const {
            pattern: h,
            params: y
        } = Oe(s), u = {
            id: s,
            exec: g => {
                const f = h.exec(g);
                if (f) return De(f, y, r)
            },
            errors: [1, ...d || []].map(g => t[g]),
            layouts: [0, ...l || []].map(i),
            leaf: o(c)
        };
        return u.errors.length = u.layouts.length = Math.max(u.errors.length, u.layouts.length), u
    });

    function o(s) {
        const c = s < 0;
        return c && (s = ~s), [c, t[s]]
    }

    function i(s) {
        return s === void 0 ? s : [a.has(s), t[s]]
    }
}

function zt(t, e = JSON.parse) {
    try {
        return e(sessionStorage[t])
    } catch {}
}

function Dt(t, e, n = JSON.stringify) {
    const r = n(e);
    try {
        sessionStorage[t] = r
    } catch {}
}
const V = [];

function Et(t, e = pt) {
    let n = null;
    const r = new Set;

    function a(s) {
        if (_e(t, s) && (t = s, n)) {
            const c = !V.length;
            for (const l of r) l[1](), V.push(l, t);
            if (c) {
                for (let l = 0; l < V.length; l += 2) V[l][0](V[l + 1]);
                V.length = 0
            }
        }
    }

    function o(s) {
        a(s(t))
    }

    function i(s, c = pt) {
        const l = [s, c];
        return r.add(l), r.size === 1 && (n = e(a, o) || pt), s(t), () => {
            r.delete(l), r.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: a,
        update: o,
        subscribe: i
    }
}

function An(t) {
    let e;
    return ve(t, n => e = n)(), e
}
const Ve = "1736291263586",
    Jt = "sveltekit:snapshot",
    Xt = "sveltekit:scroll",
    Rt = "sveltekit:states",
    Zt = "sveltekit:pageurl",
    $ = "sveltekit:history",
    G = "sveltekit:navigation",
    Q = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    X = location.origin;

function It(t) {
    if (t instanceof URL) return t;
    let e = document.baseURI;
    if (!e) {
        const n = document.getElementsByTagName("base");
        e = n.length ? n[0].href : document.URL
    }
    return new URL(t, e)
}

function Ut() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function B(t, e) {
    return t.getAttribute(`data-sveltekit-${e}`)
}
const Ft = { ...Q,
    "": Q.hover
};

function Qt(t) {
    let e = t.assignedSlot ? ? t.parentNode;
    return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e
}

function te(t, e) {
    for (; t && t !== e;) {
        if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
        t = Qt(t)
    }
}

function vt(t, e) {
    let n;
    try {
        n = new URL(t instanceof SVGAElement ? t.href.baseVal : t.href, document.baseURI)
    } catch {}
    const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
        a = !n || !!r || ct(n, e) || (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
        o = (n == null ? void 0 : n.origin) === X && t.hasAttribute("download");
    return {
        url: n,
        external: a,
        target: r,
        download: o
    }
}

function tt(t) {
    let e = null,
        n = null,
        r = null,
        a = null,
        o = null,
        i = null,
        s = t;
    for (; s && s !== document.documentElement;) r === null && (r = B(s, "preload-code")), a === null && (a = B(s, "preload-data")), e === null && (e = B(s, "keepfocus")), n === null && (n = B(s, "noscroll")), o === null && (o = B(s, "reload")), i === null && (i = B(s, "replacestate")), s = Qt(s);

    function c(l) {
        switch (l) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return
        }
    }
    return {
        preload_code: Ft[r ? ? "off"],
        preload_data: Ft[a ? ? "off"],
        keepfocus: c(e),
        noscroll: c(n),
        reload: c(o),
        replace_state: c(i)
    }
}

function Vt(t) {
    const e = Et(t);
    let n = !0;

    function r() {
        n = !0, e.update(i => i)
    }

    function a(i) {
        n = !1, e.set(i)
    }

    function o(i) {
        let s;
        return e.subscribe(c => {
            (s === void 0 || n && c !== s) && i(s = c)
        })
    }
    return {
        notify: r,
        set: a,
        subscribe: o
    }
}
const ee = {
    v: () => {}
};

function Be() {
    const {
        set: t,
        subscribe: e
    } = Et(!1);
    let n;
    async function r() {
        clearTimeout(n);
        try {
            const a = await fetch(`${be}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!a.ok) return !1;
            const i = (await a.json()).version !== Ve;
            return i && (t(!0), ee.v(), clearTimeout(n)), i
        } catch {
            return !1
        }
    }
    return {
        subscribe: e,
        check: r
    }
}

function ct(t, e) {
    return t.origin !== X || !t.pathname.startsWith(e)
}

function Bt(t) {
    const e = Ge(t),
        n = new ArrayBuffer(e.length),
        r = new DataView(n);
    for (let a = 0; a < n.byteLength; a++) r.setUint8(a, e.charCodeAt(a));
    return n
}
const qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function Ge(t) {
    t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
    let e = "",
        n = 0,
        r = 0;
    for (let a = 0; a < t.length; a++) n <<= 6, n |= qe.indexOf(t[a]), r += 6, r === 24 && (e += String.fromCharCode((n & 16711680) >> 16), e += String.fromCharCode((n & 65280) >> 8), e += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, e += String.fromCharCode(n)) : r === 18 && (n >>= 2, e += String.fromCharCode((n & 65280) >> 8), e += String.fromCharCode(n & 255)), e
}
const Me = -1,
    He = -2,
    Ke = -3,
    We = -4,
    Ye = -5,
    ze = -6;

function Je(t, e) {
    if (typeof t == "number") return a(t, !0);
    if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
    const n = t,
        r = Array(n.length);

    function a(o, i = !1) {
        if (o === Me) return;
        if (o === Ke) return NaN;
        if (o === We) return 1 / 0;
        if (o === Ye) return -1 / 0;
        if (o === ze) return -0;
        if (i) throw new Error("Invalid input");
        if (o in r) return r[o];
        const s = n[o];
        if (!s || typeof s != "object") r[o] = s;
        else if (Array.isArray(s))
            if (typeof s[0] == "string") {
                const c = s[0],
                    l = e == null ? void 0 : e[c];
                if (l) return r[o] = l(a(s[1]));
                switch (c) {
                    case "Date":
                        r[o] = new Date(s[1]);
                        break;
                    case "Set":
                        const d = new Set;
                        r[o] = d;
                        for (let u = 1; u < s.length; u += 1) d.add(a(s[u]));
                        break;
                    case "Map":
                        const h = new Map;
                        r[o] = h;
                        for (let u = 1; u < s.length; u += 2) h.set(a(s[u]), a(s[u + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(s[1], s[2]);
                        break;
                    case "Object":
                        r[o] = Object(s[1]);
                        break;
                    case "BigInt":
                        r[o] = BigInt(s[1]);
                        break;
                    case "null":
                        const y = Object.create(null);
                        r[o] = y;
                        for (let u = 1; u < s.length; u += 2) y[s[u]] = a(s[u + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array":
                        {
                            const u = globalThis[c],
                                g = s[1],
                                f = Bt(g),
                                p = new u(f);r[o] = p;
                            break
                        }
                    case "ArrayBuffer":
                        {
                            const u = s[1],
                                g = Bt(u);r[o] = g;
                            break
                        }
                    default:
                        throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(s.length);
                r[o] = c;
                for (let l = 0; l < s.length; l += 1) {
                    const d = s[l];
                    d !== He && (c[l] = a(d))
                }
            }
        else {
            const c = {};
            r[o] = c;
            for (const l in s) {
                const d = s[l];
                c[l] = a(d)
            }
        }
        return r[o]
    }
    return a(0)
}
const ne = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...ne];
const Xe = new Set([...ne]);
[...Xe];

function Ze(t) {
    return t.filter(e => e != null)
}
const Qe = "x-sveltekit-invalidated",
    tn = "x-sveltekit-trailing-slash";

function et(t) {
    return t instanceof it || t instanceof St ? t.status : 500
}

function en(t) {
    return t instanceof St ? t.text : "Internal Error"
}
let w, Y, yt;
const nn = wt.toString().includes("$$") || /function \w+\(\) \{\}/.test(wt.toString());
nn ? (w = {
    data: {},
    form: null,
    error: null,
    params: {},
    route: {
        id: null
    },
    state: {},
    status: -1,
    url: new URL("https://example.com")
}, Y = {
    current: null
}, yt = {
    current: !1
}) : (w = new class {#
    t = T({});
    get data() {
        return P(this.#t)
    }
    set data(e) {
        x(this.#t, e)
    }#
    e = T(null);
    get form() {
        return P(this.#e)
    }
    set form(e) {
        x(this.#e, e)
    }#
    n = T(null);
    get error() {
        return P(this.#n)
    }
    set error(e) {
        x(this.#n, e)
    }#
    r = T({});
    get params() {
        return P(this.#r)
    }
    set params(e) {
        x(this.#r, e)
    }#
    a = T({
        id: null
    });
    get route() {
        return P(this.#a)
    }
    set route(e) {
        x(this.#a, e)
    }#
    o = T({});
    get state() {
        return P(this.#o)
    }
    set state(e) {
        x(this.#o, e)
    }#
    s = T(-1);
    get status() {
        return P(this.#s)
    }
    set status(e) {
        x(this.#s, e)
    }#
    i = T(new URL("https://example.com"));
    get url() {
        return P(this.#i)
    }
    set url(e) {
        x(this.#i, e)
    }
}, Y = new class {#
    t = T(null);
    get current() {
        return P(this.#t)
    }
    set current(e) {
        x(this.#t, e)
    }
}, yt = new class {#
    t = T(!1);
    get current() {
        return P(this.#t)
    }
    set current(e) {
        x(this.#t, e)
    }
}, ee.v = () => yt.current = !0);

function rn(t) {
    Object.assign(w, t)
}
const an = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
    D = zt(Xt) ? ? {},
    z = zt(Jt) ? ? {},
    N = {
        url: Vt({}),
        page: Vt({}),
        navigating: Et(null),
        updated: Be()
    };

function Lt(t) {
    D[t] = Ut()
}

function on(t, e) {
    let n = t + 1;
    for (; D[n];) delete D[n], n += 1;
    for (n = e + 1; z[n];) delete z[n], n += 1
}

function M(t) {
    return location.href = t.href, new Promise(() => {})
}
async function re() {
    if ("serviceWorker" in navigator) {
        const t = await navigator.serviceWorker.getRegistration(L || "/");
        t && await t.update()
    }
}

function qt() {}
let lt, bt, nt, C, At, F;
const ae = [],
    rt = [];
let U = null;
const Tt = [],
    sn = [];
let j = [],
    _ = {
        branch: [],
        error: null,
        url: null
    },
    Pt = !1,
    at = !1,
    Gt = !0,
    J = !1,
    H = !1,
    oe = !1,
    xt = !1,
    ft, R, I, ot;
const W = new Set;
async function Rn(t, e, n) {
    var a, o, i, s;
    document.URL !== location.href && (location.href = location.href), F = t, await ((o = (a = t.hooks).init) == null ? void 0 : o.call(a)), lt = Fe(t), C = document.documentElement, At = e, bt = t.nodes[0], nt = t.nodes[1], bt(), nt(), R = (i = history.state) == null ? void 0 : i[$], I = (s = history.state) == null ? void 0 : s[G], R || (R = I = Date.now(), history.replaceState({ ...history.state,
        [$]: R,
        [G]: I
    }, ""));
    const r = D[R];
    r && (history.scrollRestoration = "manual", scrollTo(r.x, r.y)), n ? await gn(At, n) : hn(location.href, {
        replaceState: !0
    }), pn()
}

function cn() {
    ae.length = 0, xt = !1
}

function se(t) {
    rt.some(e => e == null ? void 0 : e.snapshot) && (z[t] = rt.map(e => {
        var n;
        return (n = e == null ? void 0 : e.snapshot) == null ? void 0 : n.capture()
    }))
}

function ie(t) {
    var e;
    (e = z[t]) == null || e.forEach((n, r) => {
        var a, o;
        (o = (a = rt[r]) == null ? void 0 : a.snapshot) == null || o.restore(n)
    })
}

function Mt() {
    Lt(R), Dt(Xt, D), se(I), Dt(Jt, z)
}
async function ce(t, e, n, r) {
    return Z({
        type: "goto",
        url: It(t),
        keepfocus: e.keepFocus,
        noscroll: e.noScroll,
        replace_state: e.replaceState,
        state: e.state,
        redirect_count: n,
        nav_token: r,
        accept: () => {
            e.invalidateAll && (xt = !0)
        }
    })
}
async function ln(t) {
    if (t.id !== (U == null ? void 0 : U.id)) {
        const e = {};
        W.add(e), U = {
            id: t.id,
            token: e,
            promise: fe({ ...t,
                preload: e
            }).then(n => (W.delete(e), n.type === "loaded" && n.state.error && (U = null), n))
        }
    }
    return U.promise
}
async function _t(t) {
    const e = lt.find(n => n.exec(ue(t)));
    e && await Promise.all([...e.layouts, e.leaf].map(n => n == null ? void 0 : n[1]()))
}

function le(t, e, n) {
    var o;
    _ = t.state;
    const r = document.querySelector("style[data-sveltekit]");
    r && r.remove(), Object.assign(w, t.props.page), ft = new F.root({
        target: e,
        props: { ...t.props,
            stores: N,
            components: rt
        },
        hydrate: n,
        sync: !1
    }), ie(I);
    const a = {
        from: null,
        to: {
            params: _.params,
            route: {
                id: ((o = _.route) == null ? void 0 : o.id) ? ? null
            },
            url: new URL(location.href)
        },
        willUnload: !1,
        type: "enter",
        complete: Promise.resolve()
    };
    j.forEach(i => i(a)), at = !0
}

function st({
    url: t,
    params: e,
    branch: n,
    status: r,
    error: a,
    route: o,
    form: i
}) {
    let s = "never";
    if (L && (t.pathname === L || t.pathname === L + "/")) s = "always";
    else
        for (const u of n)(u == null ? void 0 : u.slash) !== void 0 && (s = u.slash);
    t.pathname = Ae(t.pathname, s), t.search = t.search;
    const c = {
        type: "loaded",
        state: {
            url: t,
            params: e,
            branch: n,
            error: a,
            route: o
        },
        props: {
            constructors: Ze(n).map(u => u.node.component),
            page: w
        }
    };
    i !== void 0 && (c.props.form = i);
    let l = {},
        d = !w,
        h = 0;
    for (let u = 0; u < Math.max(n.length, _.branch.length); u += 1) {
        const g = n[u],
            f = _.branch[u];
        (g == null ? void 0 : g.data) !== (f == null ? void 0 : f.data) && (d = !0), g && (l = { ...l,
            ...g.data
        }, d && (c.props[`data_${h}`] = l), h += 1)
    }
    return (!_.url || t.href !== _.url.href || _.error !== a || i !== void 0 && i !== w.form || d) && (c.props.page = {
        error: a,
        params: e,
        route: {
            id: (o == null ? void 0 : o.id) ? ? null
        },
        state: {},
        status: r,
        url: new URL(t),
        form: i ? ? null,
        data: d ? l : w.data
    }), c
}
async function Ct({
    loader: t,
    parent: e,
    url: n,
    params: r,
    route: a,
    server_data_node: o
}) {
    var d, h, y;
    let i = null,
        s = !0;
    const c = {
            dependencies: new Set,
            params: new Set,
            parent: !1,
            route: !1,
            url: !1,
            search_params: new Set
        },
        l = await t();
    if ((d = l.universal) != null && d.load) {
        let u = function(...f) {
            for (const p of f) {
                const {
                    href: A
                } = new URL(p, n);
                c.dependencies.add(A)
            }
        };
        const g = {
            route: new Proxy(a, {
                get: (f, p) => (s && (c.route = !0), f[p])
            }),
            params: new Proxy(r, {
                get: (f, p) => (s && c.params.add(p), f[p])
            }),
            data: (o == null ? void 0 : o.data) ? ? null,
            url: Re(n, () => {
                s && (c.url = !0)
            }, f => {
                s && c.search_params.add(f)
            }),
            async fetch(f, p) {
                let A;
                f instanceof Request ? (A = f.url, p = {
                    body: f.method === "GET" || f.method === "HEAD" ? void 0 : await f.blob(),
                    cache: f.cache,
                    credentials: f.credentials,
                    headers: [...f.headers].length ? f.headers : void 0,
                    integrity: f.integrity,
                    keepalive: f.keepalive,
                    method: f.method,
                    mode: f.mode,
                    redirect: f.redirect,
                    referrer: f.referrer,
                    referrerPolicy: f.referrerPolicy,
                    signal: f.signal,
                    ...p
                }) : A = f;
                const k = new URL(A, n);
                return s && u(k.href), k.origin === n.origin && (A = k.href.slice(n.origin.length)), at ? Ce(A, k.href, p) : xe(A, p)
            },
            setHeaders: () => {},
            depends: u,
            parent() {
                return s && (c.parent = !0), e()
            },
            untrack(f) {
                s = !1;
                try {
                    return f()
                } finally {
                    s = !0
                }
            }
        };
        i = await l.universal.load.call(null, g) ? ? null
    }
    return {
        node: l,
        loader: t,
        server: o,
        universal: (h = l.universal) != null && h.load ? {
            type: "data",
            data: i,
            uses: c
        } : null,
        data: i ? ? (o == null ? void 0 : o.data) ? ? null,
        slash: ((y = l.universal) == null ? void 0 : y.trailingSlash) ? ? (o == null ? void 0 : o.slash)
    }
}

function Ht(t, e, n, r, a, o) {
    if (xt) return !0;
    if (!a) return !1;
    if (a.parent && t || a.route && e || a.url && n) return !0;
    for (const i of a.search_params)
        if (r.has(i)) return !0;
    for (const i of a.params)
        if (o[i] !== _.params[i]) return !0;
    for (const i of a.dependencies)
        if (ae.some(s => s(new URL(i)))) return !0;
    return !1
}

function Nt(t, e) {
    return (t == null ? void 0 : t.type) === "data" ? t : (t == null ? void 0 : t.type) === "skip" ? e ? ? null : null
}

function fn(t, e) {
    if (!t) return new Set(e.searchParams.keys());
    const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
    for (const r of n) {
        const a = t.searchParams.getAll(r),
            o = e.searchParams.getAll(r);
        a.every(i => o.includes(i)) && o.every(i => a.includes(i)) && n.delete(r)
    }
    return n
}

function Kt({
    error: t,
    url: e,
    route: n,
    params: r
}) {
    return {
        type: "loaded",
        state: {
            error: t,
            url: e,
            route: n,
            params: r,
            branch: []
        },
        props: {
            page: w,
            constructors: []
        }
    }
}
async function fe({
    id: t,
    invalidating: e,
    url: n,
    params: r,
    route: a,
    preload: o
}) {
    if ((U == null ? void 0 : U.id) === t) return W.delete(U.token), U.promise;
    const {
        errors: i,
        layouts: s,
        leaf: c
    } = a, l = [...s, c];
    i.forEach(m => m == null ? void 0 : m().catch(() => {})), l.forEach(m => m == null ? void 0 : m[1]().catch(() => {}));
    let d = null;
    const h = _.url ? t !== _.url.pathname + _.url.search : !1,
        y = _.route ? a.id !== _.route.id : !1,
        u = fn(_.url, n);
    let g = !1;
    const f = l.map((m, b) => {
        var O;
        const S = _.branch[b],
            E = !!(m != null && m[0]) && ((S == null ? void 0 : S.loader) !== m[1] || Ht(g, y, h, u, (O = S.server) == null ? void 0 : O.uses, r));
        return E && (g = !0), E
    });
    if (f.some(Boolean)) {
        try {
            d = await ge(n, f)
        } catch (m) {
            const b = await q(m, {
                url: n,
                params: r,
                route: {
                    id: t
                }
            });
            return W.has(o) ? Kt({
                error: b,
                url: n,
                params: r,
                route: a
            }) : ut({
                status: et(m),
                error: b,
                url: n,
                route: a
            })
        }
        if (d.type === "redirect") return d
    }
    const p = d == null ? void 0 : d.nodes;
    let A = !1;
    const k = l.map(async (m, b) => {
        var dt;
        if (!m) return;
        const S = _.branch[b],
            E = p == null ? void 0 : p[b];
        if ((!E || E.type === "skip") && m[1] === (S == null ? void 0 : S.loader) && !Ht(A, y, h, u, (dt = S.universal) == null ? void 0 : dt.uses, r)) return S;
        if (A = !0, (E == null ? void 0 : E.type) === "error") throw E;
        return Ct({
            loader: m[1],
            url: n,
            params: r,
            route: a,
            parent: async () => {
                var $t;
                const jt = {};
                for (let ht = 0; ht < b; ht += 1) Object.assign(jt, ($t = await k[ht]) == null ? void 0 : $t.data);
                return jt
            },
            server_data_node: Nt(E === void 0 && m[0] ? {
                type: "skip"
            } : E ? ? null, m[0] ? S == null ? void 0 : S.server : void 0)
        })
    });
    for (const m of k) m.catch(() => {});
    const v = [];
    for (let m = 0; m < l.length; m += 1)
        if (l[m]) try {
            v.push(await k[m])
        } catch (b) {
            if (b instanceof Wt) return {
                type: "redirect",
                location: b.location
            };
            if (W.has(o)) return Kt({
                error: await q(b, {
                    params: r,
                    url: n,
                    route: {
                        id: a.id
                    }
                }),
                url: n,
                params: r,
                route: a
            });
            let S = et(b),
                E;
            if (p != null && p.includes(b)) S = b.status ? ? S, E = b.error;
            else if (b instanceof it) E = b.body;
            else {
                if (await N.updated.check()) return await re(), await M(n);
                E = await q(b, {
                    params: r,
                    url: n,
                    route: {
                        id: a.id
                    }
                })
            }
            const O = await un(m, v, i);
            return O ? st({
                url: n,
                params: r,
                branch: v.slice(0, O.idx).concat(O.node),
                status: S,
                error: E,
                route: a
            }) : await he(n, {
                id: a.id
            }, E, S)
        } else v.push(void 0);
    return st({
        url: n,
        params: r,
        branch: v,
        status: 200,
        error: null,
        route: a,
        form: e ? void 0 : null
    })
}
async function un(t, e, n) {
    for (; t--;)
        if (n[t]) {
            let r = t;
            for (; !e[r];) r -= 1;
            try {
                return {
                    idx: r + 1,
                    node: {
                        node: await n[t](),
                        loader: n[t],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function ut({
    status: t,
    error: e,
    url: n,
    route: r
}) {
    const a = {};
    let o = null;
    if (F.server_loads[0] === 0) try {
        const l = await ge(n, [!0]);
        if (l.type !== "data" || l.nodes[0] && l.nodes[0].type !== "data") throw 0;
        o = l.nodes[0] ? ? null
    } catch {
        (n.origin !== X || n.pathname !== location.pathname || Pt) && await M(n)
    }
    const s = await Ct({
            loader: bt,
            url: n,
            params: a,
            route: r,
            parent: () => Promise.resolve({}),
            server_data_node: Nt(o)
        }),
        c = {
            node: await nt(),
            loader: nt,
            universal: null,
            server: null,
            data: null
        };
    return st({
        url: n,
        params: a,
        branch: [s, c],
        status: t,
        error: e,
        route: null
    })
}

function Ot(t, e) {
    if (!t || ct(t, L)) return;
    let n;
    try {
        n = F.hooks.reroute({
            url: new URL(t)
        }) ? ? t.pathname
    } catch {
        return
    }
    const r = ue(n);
    for (const a of lt) {
        const o = a.exec(r);
        if (o) return {
            id: t.pathname + t.search,
            invalidating: e,
            route: a,
            params: ke(o),
            url: t
        }
    }
}

function ue(t) {
    return Se(t.slice(L.length) || "/")
}

function de({
    url: t,
    type: e,
    intent: n,
    delta: r
}) {
    let a = !1;
    const o = ye(_, n, t, e);
    r !== void 0 && (o.navigation.delta = r);
    const i = { ...o.navigation,
        cancel: () => {
            a = !0, o.reject(new Error("navigation cancelled"))
        }
    };
    return J || Tt.forEach(s => s(i)), a ? null : o
}
async function Z({
    type: t,
    url: e,
    popped: n,
    keepfocus: r,
    noscroll: a,
    replace_state: o,
    state: i = {},
    redirect_count: s = 0,
    nav_token: c = {},
    accept: l = qt,
    block: d = qt
}) {
    const h = Ot(e, !1),
        y = de({
            url: e,
            type: t,
            delta: n == null ? void 0 : n.delta,
            intent: h
        });
    if (!y) {
        d();
        return
    }
    const u = R,
        g = I;
    l(), J = !0, at && N.navigating.set(Y.current = y.navigation), ot = c;
    let f = h && await fe(h);
    if (!f) {
        if (ct(e, L)) return await M(e);
        f = await he(e, {
            id: null
        }, await q(new St(404, "Not Found", `Not found: ${e.pathname}`), {
            url: e,
            params: {},
            route: {
                id: null
            }
        }), 404)
    }
    if (e = (h == null ? void 0 : h.url) || e, ot !== c) return y.reject(new Error("navigation aborted")), !1;
    if (f.type === "redirect")
        if (s >= 20) f = await ut({
            status: 500,
            error: await q(new Error("Redirect loop"), {
                url: e,
                params: {},
                route: {
                    id: null
                }
            }),
            url: e,
            route: {
                id: null
            }
        });
        else return ce(new URL(f.location, e).href, {}, s + 1, c), !1;
    else f.props.page.status >= 400 && await N.updated.check() && (await re(), await M(e));
    if (cn(), Lt(u), se(g), f.props.page.url.pathname !== e.pathname && (e.pathname = f.props.page.url.pathname), i = n ? n.state : i, !n) {
        const v = o ? 0 : 1,
            m = {
                [$]: R += v,
                [G]: I += v,
                [Rt]: i
            };
        (o ? history.replaceState : history.pushState).call(history, m, "", e), o || on(R, I)
    }
    if (U = null, f.props.page.state = i, at) {
        _ = f.state, f.props.page && (f.props.page.url = e);
        const v = (await Promise.all(sn.map(m => m(y.navigation)))).filter(m => typeof m == "function");
        if (v.length > 0) {
            let m = function() {
                j = j.filter(b => !v.includes(b))
            };
            v.push(m), j.push(...v)
        }
        ft.$set(f.props), rn(f.props.page), oe = !0
    } else le(f, At, !1);
    const {
        activeElement: p
    } = document;
    await we();
    const A = n ? n.scroll : a ? Ut() : null;
    if (Gt) {
        const v = e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
        A ? scrollTo(A.x, A.y) : v ? v.scrollIntoView() : scrollTo(0, 0)
    }
    const k = document.activeElement !== p && document.activeElement !== document.body;
    !r && !k && mn(), Gt = !0, f.props.page && Object.assign(w, f.props.page), J = !1, t === "popstate" && ie(I), y.fulfil(void 0), j.forEach(v => v(y.navigation)), N.navigating.set(Y.current = null)
}
async function he(t, e, n, r) {
    return t.origin === X && t.pathname === location.pathname && !Pt ? await ut({
        status: r,
        error: n,
        url: t,
        route: e
    }) : await M(t)
}

function dn() {
    let t;
    C.addEventListener("mousemove", o => {
        const i = o.target;
        clearTimeout(t), t = setTimeout(() => {
            r(i, 2)
        }, 20)
    });

    function e(o) {
        o.defaultPrevented || r(o.composedPath()[0], 1)
    }
    C.addEventListener("mousedown", e), C.addEventListener("touchstart", e, {
        passive: !0
    });
    const n = new IntersectionObserver(o => {
        for (const i of o) i.isIntersecting && (_t(i.target.href), n.unobserve(i.target))
    }, {
        threshold: 0
    });

    function r(o, i) {
        const s = te(o, C);
        if (!s) return;
        const {
            url: c,
            external: l,
            download: d
        } = vt(s, L);
        if (l || d) return;
        const h = tt(s),
            y = c && _.url.pathname + _.url.search === c.pathname + c.search;
        if (!h.reload && !y)
            if (i <= h.preload_data) {
                const u = Ot(c, !1);
                u && ln(u)
            } else i <= h.preload_code && _t(c.pathname)
    }

    function a() {
        n.disconnect();
        for (const o of C.querySelectorAll("a")) {
            const {
                url: i,
                external: s,
                download: c
            } = vt(o, L);
            if (s || c) continue;
            const l = tt(o);
            l.reload || (l.preload_code === Q.viewport && n.observe(o), l.preload_code === Q.eager && _t(i.pathname))
        }
    }
    j.push(a), a()
}

function q(t, e) {
    if (t instanceof it) return t.body;
    const n = et(t),
        r = en(t);
    return F.hooks.handleError({
        error: t,
        event: e,
        status: n,
        message: r
    }) ? ? {
        message: r
    }
}

function pe(t, e) {
    wt(() => (t.push(e), () => {
        const n = t.indexOf(e);
        t.splice(n, 1)
    }))
}

function In(t) {
    pe(j, t)
}

function Un(t) {
    pe(Tt, t)
}

function hn(t, e = {}) {
    return t = It(t), t.origin !== X ? Promise.reject(new Error("goto: invalid URL")) : ce(t, e, 0)
}

function Ln(t, e) {
    const n = {
        [$]: R,
        [G]: I,
        [Zt]: w.url.href,
        [Rt]: e
    };
    history.replaceState(n, "", It(t)), w.state = e, ft.$set({
        page: w
    })
}

function pn() {
    var e;
    history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
        let r = !1;
        if (Mt(), !J) {
            const a = ye(_, void 0, null, "leave"),
                o = { ...a.navigation,
                    cancel: () => {
                        r = !0, a.reject(new Error("navigation cancelled"))
                    }
                };
            Tt.forEach(i => i(o))
        }
        r ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
    }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && Mt()
    }), (e = navigator.connection) != null && e.saveData || dn(), C.addEventListener("click", async n => {
        if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
        const r = te(n.composedPath()[0], C);
        if (!r) return;
        const {
            url: a,
            external: o,
            target: i,
            download: s
        } = vt(r, L);
        if (!a) return;
        if (i === "_parent" || i === "_top") {
            if (window.parent !== window) return
        } else if (i && i !== "_self") return;
        const c = tt(r);
        if (!(r instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || s) return;
        const [d, h] = a.href.split("#"), y = d === gt(location);
        if (o || c.reload && (!y || !h)) {
            de({
                url: a,
                type: "link"
            }) ? J = !0 : n.preventDefault();
            return
        }
        if (h !== void 0 && y) {
            const [, u] = _.url.href.split("#");
            if (u === h) {
                if (n.preventDefault(), h === "" || h === "top" && r.ownerDocument.getElementById("top") === null) window.scrollTo({
                    top: 0
                });
                else {
                    const g = r.ownerDocument.getElementById(decodeURIComponent(h));
                    g && (g.scrollIntoView(), g.focus())
                }
                return
            }
            if (H = !0, Lt(R), t(a), !c.replace_state) return;
            H = !1
        }
        n.preventDefault(), await new Promise(u => {
            requestAnimationFrame(() => {
                setTimeout(u, 0)
            }), setTimeout(u, 100)
        }), Z({
            type: "link",
            url: a,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ? ? a.href === location.href
        })
    }), C.addEventListener("submit", n => {
        if (n.defaultPrevented) return;
        const r = HTMLFormElement.prototype.cloneNode.call(n.target),
            a = n.submitter;
        if (((a == null ? void 0 : a.formTarget) || r.target) === "_blank" || ((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
        const s = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || r.action);
        if (ct(s, L)) return;
        const c = n.target,
            l = tt(c);
        if (l.reload) return;
        n.preventDefault(), n.stopPropagation();
        const d = new FormData(c),
            h = a == null ? void 0 : a.getAttribute("name");
        h && d.append(h, (a == null ? void 0 : a.getAttribute("value")) ? ? ""), s.search = new URLSearchParams(d).toString(), Z({
            type: "form",
            url: s,
            keepfocus: l.keepfocus,
            noscroll: l.noscroll,
            replace_state: l.replace_state ? ? s.href === location.href
        })
    }), addEventListener("popstate", async n => {
        var r;
        if ((r = n.state) != null && r[$]) {
            const a = n.state[$];
            if (ot = {}, a === R) return;
            const o = D[a],
                i = n.state[Rt] ? ? {},
                s = new URL(n.state[Zt] ? ? location.href),
                c = n.state[G],
                l = gt(location) === gt(_.url);
            if (c === I && (oe || l)) {
                t(s), D[R] = Ut(), o && scrollTo(o.x, o.y), i !== w.state && (w.state = i, ft.$set({
                    page: w
                })), R = a;
                return
            }
            const h = a - R;
            await Z({
                type: "popstate",
                url: s,
                popped: {
                    state: i,
                    scroll: o,
                    delta: h
                },
                accept: () => {
                    R = a, I = c
                },
                block: () => {
                    history.go(-h)
                },
                nav_token: ot
            })
        } else if (!H) {
            const a = new URL(location.href);
            t(a)
        }
    }), addEventListener("hashchange", () => {
        H && (H = !1, history.replaceState({ ...history.state,
            [$]: ++R,
            [G]: I
        }, "", location.href))
    });
    for (const n of document.querySelectorAll("link")) an.has(n.rel) && (n.href = n.href);
    addEventListener("pageshow", n => {
        n.persisted && N.navigating.set(Y.current = null)
    });

    function t(n) {
        _.url = w.url = n, N.page.set({
            data: w.data,
            error: w.error,
            form: w.form,
            params: w.params,
            route: w.route,
            state: w.state,
            status: w.status,
            url: n
        }), N.page.notify()
    }
}
async function gn(t, {
    status: e = 200,
    error: n,
    node_ids: r,
    params: a,
    route: o,
    data: i,
    form: s
}) {
    Pt = !0;
    const c = new URL(location.href);
    ({
        params: a = {},
        route: o = {
            id: null
        }
    } = Ot(c, !1) || {});
    let l, d = !0;
    try {
        const h = r.map(async (g, f) => {
                const p = i[f];
                return p != null && p.uses && (p.uses = me(p.uses)), Ct({
                    loader: F.nodes[g],
                    url: c,
                    params: a,
                    route: o,
                    parent: async () => {
                        const A = {};
                        for (let k = 0; k < f; k += 1) Object.assign(A, (await h[k]).data);
                        return A
                    },
                    server_data_node: Nt(p)
                })
            }),
            y = await Promise.all(h),
            u = lt.find(({
                id: g
            }) => g === o.id);
        if (u) {
            const g = u.layouts;
            for (let f = 0; f < g.length; f++) g[f] || y.splice(f, 0, void 0)
        }
        l = st({
            url: c,
            params: a,
            branch: y,
            status: e,
            error: n,
            form: s,
            route: u ? ? null
        })
    } catch (h) {
        if (h instanceof Wt) {
            await M(new URL(h.location, location.href));
            return
        }
        l = await ut({
            status: et(h),
            error: await q(h, {
                url: c,
                params: a,
                route: o
            }),
            url: c,
            route: o
        }), t.textContent = "", d = !1
    }
    l.props.page && (l.props.page.state = {}), le(l, t, d)
}
async function ge(t, e) {
    var a;
    const n = new URL(t);
    n.pathname = Le(t.pathname), t.pathname.endsWith("/") && n.searchParams.append(tn, "1"), n.searchParams.append(Qe, e.map(o => o ? "1" : "0").join(""));
    const r = await Yt(n.href);
    if (!r.ok) {
        let o;
        throw (a = r.headers.get("content-type")) != null && a.includes("application/json") ? o = await r.json() : r.status === 404 ? o = "Not Found" : r.status === 500 && (o = "Internal Error"), new it(r.status, o)
    }
    return new Promise(async o => {
        var h;
        const i = new Map,
            s = r.body.getReader(),
            c = new TextDecoder;

        function l(y) {
            return Je(y, { ...F.decoders,
                Promise: u => new Promise((g, f) => {
                    i.set(u, {
                        fulfil: g,
                        reject: f
                    })
                })
            })
        }
        let d = "";
        for (;;) {
            const {
                done: y,
                value: u
            } = await s.read();
            if (y && !d) break;
            for (d += !u && d ? `
` : c.decode(u, {
                    stream: !0
                });;) {
                const g = d.indexOf(`
`);
                if (g === -1) break;
                const f = JSON.parse(d.slice(0, g));
                if (d = d.slice(g + 1), f.type === "redirect") return o(f);
                if (f.type === "data")(h = f.nodes) == null || h.forEach(p => {
                    (p == null ? void 0 : p.type) === "data" && (p.uses = me(p.uses), p.data = l(p.data))
                }), o(f);
                else if (f.type === "chunk") {
                    const {
                        id: p,
                        data: A,
                        error: k
                    } = f, v = i.get(p);
                    i.delete(p), k ? v.reject(l(k)) : v.fulfil(l(A))
                }
            }
        }
    })
}

function me(t) {
    return {
        dependencies: new Set((t == null ? void 0 : t.dependencies) ? ? []),
        params: new Set((t == null ? void 0 : t.params) ? ? []),
        parent: !!(t != null && t.parent),
        route: !!(t != null && t.route),
        url: !!(t != null && t.url),
        search_params: new Set((t == null ? void 0 : t.search_params) ? ? [])
    }
}

function mn() {
    const t = document.querySelector("[autofocus]");
    if (t) t.focus();
    else {
        const e = document.body,
            n = e.getAttribute("tabindex");
        e.tabIndex = -1, e.focus({
            preventScroll: !0,
            focusVisible: !1
        }), n !== null ? e.setAttribute("tabindex", n) : e.removeAttribute("tabindex");
        const r = getSelection();
        if (r && r.type !== "None") {
            const a = [];
            for (let o = 0; o < r.rangeCount; o += 1) a.push(r.getRangeAt(o));
            setTimeout(() => {
                if (r.rangeCount === a.length) {
                    for (let o = 0; o < r.rangeCount; o += 1) {
                        const i = a[o],
                            s = r.getRangeAt(o);
                        if (i.commonAncestorContainer !== s.commonAncestorContainer || i.startContainer !== s.startContainer || i.endContainer !== s.endContainer || i.startOffset !== s.startOffset || i.endOffset !== s.endOffset) return
                    }
                    r.removeAllRanges()
                }
            })
        }
    }
}

function ye(t, e, n, r) {
    var c, l;
    let a, o;
    const i = new Promise((d, h) => {
        a = d, o = h
    });
    return i.catch(() => {}), {
        navigation: {
            from: {
                params: t.params,
                route: {
                    id: ((c = t.route) == null ? void 0 : c.id) ? ? null
                },
                url: t.url
            },
            to: n && {
                params: (e == null ? void 0 : e.params) ? ? null,
                route: {
                    id: ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ? ? null
                },
                url: n
            },
            willUnload: !e,
            type: r,
            complete: i
        },
        fulfil: a,
        reject: o
    }
}
export {
    In as a, Un as b, An as c, Rn as d, hn as g, Y as n, w as p, Ln as r, N as s, yt as u, Et as w
};
//# sourceMappingURL=entry.K0IoxZhe.js.map