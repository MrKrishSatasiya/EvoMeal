import {
    M as c,
    A as i,
    N as m,
    aD as p,
    aE as T,
    m as f,
    v as d,
    E as w,
    o as N
} from "./runtime.B6eHkxRm.js";

function h(r) {
    var t = document.createElement("template");
    return t.innerHTML = r, t.content
}

function n(r, t) {
    var e = m;
    e.nodes_start === null && (e.nodes_start = r, e.nodes_end = t)
}

function C(r, t) {
    var e = (t & p) !== 0,
        l = (t & T) !== 0,
        s, _ = !r.startsWith("<!>");
    return () => {
        if (f) return n(d, null), d;
        s === void 0 && (s = h(_ ? r : "<!>" + r), e || (s = i(s)));
        var a = l ? document.importNode(s, !0) : s.cloneNode(!0);
        if (e) {
            var v = i(a),
                o = a.lastChild;
            n(v, o)
        } else n(a, a);
        return a
    }
}

function x(r, t, e = "svg") {
    var l = !r.startsWith("<!>"),
        s = (t & p) !== 0,
        _ = `<${e}>${l?r:"<!>"+r}</${e}>`,
        a;
    return () => {
        if (f) return n(d, null), d;
        if (!a) {
            var v = h(_),
                o = i(v);
            if (s)
                for (a = document.createDocumentFragment(); i(o);) a.appendChild(i(o));
            else a = i(o)
        }
        var u = a.cloneNode(!0);
        if (s) {
            var E = i(u),
                g = u.lastChild;
            n(E, g)
        } else n(u, u);
        return u
    }
}

function A(r = "") {
    if (!f) {
        var t = c(r + "");
        return n(t, t), t
    }
    var e = d;
    return e.nodeType !== 3 && (e.before(e = c()), w(e)), n(e, e), e
}

function D() {
    if (f) return n(d, null), d;
    var r = document.createDocumentFragment(),
        t = document.createComment(""),
        e = c();
    return r.append(t, e), n(t, e), r
}

function L(r, t) {
    if (f) {
        m.nodes_end = d, N();
        return
    }
    r !== null && r.before(t)
}
const y = "5";
typeof window < "u" && (window.__svelte || = {
    v: new Set
}).v.add(y);
export {
    L as a, n as b, D as c, h as d, A as e, x as n, C as t
};
//# sourceMappingURL=disclose-version.lyO5itLq.js.map