import {
    Y as h,
    Z as T,
    m as v,
    _ as C,
    $ as E
} from "./runtime.B6eHkxRm.js";
import {
    c as I,
    d as R,
    e as S,
    f as V,
    n as q,
    g as B,
    j as G
} from "./svelte-head.Cog7lhpT.js";

function D(s) {
    if (v) {
        var r = !1,
            i = () => {
                if (!r) {
                    if (r = !0, s.hasAttribute("value")) {
                        var f = s.value;
                        g(s, "value", null), s.value = f
                    }
                    if (s.hasAttribute("checked")) {
                        var o = s.checked;
                        g(s, "checked", null), s.checked = o
                    }
                }
            };
        s.__on_r = i, E(i), B()
    }
}

function F(s, r) {
    var i = s.__attributes ? ? = {};
    i.value === (i.value = r ? ? void 0) || s.value === r && (r !== 0 || s.nodeName !== "PROGRESS") || (s.value = r)
}

function K(s, r) {
    var i = s.__attributes ? ? = {};
    i.checked !== (i.checked = r ? ? void 0) && (s.checked = r)
}

function M(s, r) {
    r ? s.hasAttribute("selected") || s.setAttribute("selected", "") : s.removeAttribute("selected")
}

function g(s, r, i, f) {
    var o = s.__attributes ? ? = {};
    v && (o[r] = s.getAttribute(r), r === "src" || r === "srcset" || r === "href" && s.nodeName === "LINK") || o[r] !== (o[r] = i) && (r === "style" && "__styles" in s && (s.__styles = {}), r === "loading" && (s[h] = i), i == null ? s.removeAttribute(r) : typeof i != "string" && $(s).includes(r) ? s[r] = i : s.setAttribute(r, i))
}

function Z(s, r, i, f, o = !1, d = !1, P = !1) {
    var l = r || {},
        y = s.tagName === "OPTION";
    for (var p in r) p in i || (i[p] = null);
    f !== void 0 && (i.class = i.class ? i.class + " " + f : f);
    var O = $(s),
        w = s.__attributes ? ? = {};
    for (const e in i) {
        let a = i[e];
        if (y && e === "value" && a == null) {
            s.value = s.__value = "", l[e] = a;
            continue
        }
        var A = l[e];
        if (a !== A) {
            l[e] = a;
            var k = e[0] + e[1];
            if (k !== "$$") {
                if (k === "on") {
                    const u = {},
                        _ = "$$" + e;
                    let c = e.slice(2);
                    var n = G(c);
                    if (I(c) && (c = c.slice(0, -7), u.capture = !0), !n && A) {
                        if (a != null) continue;
                        s.removeEventListener(c, l[_], u), l[_] = null
                    }
                    if (a != null)
                        if (n) s[`__${c}`] = a, S([c]);
                        else {
                            let z = function(L) {
                                l[e].call(this, L)
                            };
                            l[_] = R(c, s, z, u)
                        }
                    else n && (s[`__${c}`] = void 0)
                } else if (e === "style" && a != null) s.style.cssText = a + "";
                else if (e === "autofocus") V(s, !!a);
                else if (e === "__value" || e === "value" && a != null) s.value = s[e] = s.__value = a;
                else if (e === "selected" && y) M(s, a);
                else {
                    var t = e;
                    o || (t = q(t));
                    var b = t === "defaultValue" || t === "defaultChecked";
                    if (a == null && !d && !b)
                        if (w[e] = null, t === "value" || t === "checked") {
                            let u = s;
                            if (t === "value") {
                                let _ = u.defaultValue;
                                u.removeAttribute(t), u.defaultValue = _
                            } else {
                                let _ = u.defaultChecked;
                                u.removeAttribute(t), u.defaultChecked = _
                            }
                        } else s.removeAttribute(e);
                    else b || O.includes(t) && (d || typeof a != "string") ? s[t] = a : typeof a != "function" && (v && (t === "src" || t === "href" || t === "srcset") || g(s, t, a))
                }
                e === "style" && "__styles" in s && (s.__styles = {})
            }
        }
    }
    return l
}
var N = new Map;

function $(s) {
    var r = N.get(s.nodeName);
    if (r) return r;
    N.set(s.nodeName, r = []);
    for (var i, f = s, o = Element.prototype; o !== f;) {
        i = C(f);
        for (var d in i) i[d].set && r.push(d);
        f = T(f)
    }
    return r
}

function H(s) {
    if (!v && s.loading === "lazy") {
        var r = s.src;
        s[h] = null, s.loading = "eager", s.removeAttribute("src"), requestAnimationFrame(() => {
            s[h] !== "eager" && (s.loading = "lazy"), s.src = r
        })
    }
}
export {
    Z as a, F as b, K as c, H as h, D as r, g as s
};
//# sourceMappingURL=attributes.BEKrBjrZ.js.map