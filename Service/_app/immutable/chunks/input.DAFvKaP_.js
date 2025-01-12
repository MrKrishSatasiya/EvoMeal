import {
    j as x,
    m as h,
    b as S,
    T as k,
    ag as w,
    V as m
} from "./runtime.B6eHkxRm.js";
import {
    l as b
} from "./svelte-head.Cog7lhpT.js";
import {
    i as y
} from "./props.yNAbM6Ip.js";

function j(e, v, a = v) {
    var s = x();
    b(e, "input", l => {
        var f = l ? e.defaultValue : e.value;
        if (f = n(e) ? u(f) : f, a(f), s && f !== (f = v())) {
            var c = e.selectionStart,
                o = e.selectionEnd;
            e.value = f ? ? "", o !== null && (e.selectionStart = c, e.selectionEnd = Math.min(o, e.value.length))
        }
    }), (h && e.defaultValue !== e.value || S(v) == null && e.value) && a(n(e) ? u(e.value) : e.value), k(() => {
        var l = v();
        n(e) && l === u(e.value) || e.type === "date" && !l && !e.value || l !== e.value && (e.value = l ? ? "")
    })
}
const _ = new Set;

function q(e, v, a, s, l = s) {
    var f = a.getAttribute("type") === "checkbox",
        c = e;
    let o = !1;
    if (v !== null)
        for (var i of v) c = c[i] ? ? = [];
    c.push(a), b(a, "change", () => {
        var r = a.__value;
        f && (r = t(c, r, a.checked)), l(r)
    }, () => l(f ? [] : null)), k(() => {
        var r = s();
        if (h && a.defaultChecked !== a.checked) {
            o = !0;
            return
        }
        f ? (r = r || [], a.checked = r.includes(a.__value)) : a.checked = y(a.__value, r)
    }), w(() => {
        var r = c.indexOf(a);
        r !== -1 && c.splice(r, 1)
    }), _.has(c) || (_.add(c), m(() => {
        c.sort((r, d) => r.compareDocumentPosition(d) === 4 ? -1 : 1), _.delete(c)
    })), m(() => {
        if (o) {
            var r;
            if (f) r = t(c, r, a.checked);
            else {
                var d = c.find(g => g.checked);
                r = d == null ? void 0 : d.__value
            }
            l(r)
        }
    })
}

function t(e, v, a) {
    for (var s = new Set, l = 0; l < e.length; l += 1) e[l].checked && s.add(e[l].__value);
    return a || s.delete(v), Array.from(s)
}

function n(e) {
    var v = e.type;
    return v === "number" || v === "range"
}

function u(e) {
    return e === "" ? null : +e
}
export {
    q as a, j as b
};
//# sourceMappingURL=input.DAFvKaP_.js.map