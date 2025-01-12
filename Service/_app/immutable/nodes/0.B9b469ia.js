import {
    w as W
} from "../chunks/whitelist-query-params.BGukQ1sC.js";
import {
    c as R,
    a as _,
    t as b,
    e as J
} from "../chunks/disclose-version.lyO5itLq.js";
import {
    p as E,
    h as F,
    i as I,
    aj as g,
    ah as a,
    ai as e,
    ae as B,
    g as p,
    aI as Q,
    an as Y,
    n as Z,
    y as U
} from "../chunks/runtime.B6eHkxRm.js";
import {
    e as $,
    k as K
} from "../chunks/svelte-head.Cog7lhpT.js";
import {
    s as z
} from "../chunks/snippet.CWXx-QH6.js";
import {
    s as d
} from "../chunks/attributes.BEKrBjrZ.js";
import "../chunks/row.DyTlJJ4r.js";
import {
    n as X,
    p as N
} from "../chunks/client.BK1FkeFH.js";
import "../chunks/legacy.BRi200Dj.js";
import {
    t as O,
    f as j
} from "../chunks/page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js";
import {
    i as ee
} from "../chunks/if.Bf6hnlR_.js";
import {
    i as D
} from "../chunks/lifecycle.B3SD0zJQ.js";
import {
    b as ae,
    a as te
} from "../chunks/entry.K0IoxZhe.js";
import {
    s as L
} from "../chunks/render.DH2vE9eA.js";
import {
    e as C,
    i as G
} from "../chunks/each.BRhQgEZK.js";
import {
    h as H
} from "../chunks/html.h6Bcc72m.js";
import {
    A as se,
    G as re
} from "../chunks/google-play-badge.50bf66JS.js";
import {
    a as T
} from "../chunks/public.CsyzgY3c.js";
import {
    B as oe,
    t as le
} from "../chunks/button.DNbQo9vX.js";
import {
    a as ie
} from "../chunks/props.yNAbM6Ip.js";

function ne({
    url: l
}) {
    return {
        canonical_url: W(l, {}),
        nav_links: [
            ["How It Works", "/how-it-works"],
            ["Browse Foods", "/food/browse"],
            ["Supported Diets", "/diet-plan"],
            ["For Professionals", "/professionals"]
        ]
    }
}
const Ke = Object.freeze(Object.defineProperty({
    __proto__: null,
    load: ne
}, Symbol.toStringTag, {
    value: "Module"
}));
var ce = b('<div role="progressbar" class="svelte-n7mqkg"></div>');

function ve(l, s) {
    E(s, !1), D();
    var t = R(),
        i = F(t); {
        var n = o => {
            var c = ce();
            O(1, c, () => j, () => ({
                delay: 250,
                duration: 150
            })), O(2, c, () => j, () => ({
                duration: 150
            })), _(o, c)
        };
        ee(i, o => {
            X.to && o(n)
        })
    }
    _(l, t), I()
}
const me = `<svg viewBox="0 0 24 24" class="feather feather-facebook">\r
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />\r
</svg>\r
`,
    pe = `<svg viewBox="0 0 24 24" class="feather feather-instagram">\r
<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />\r
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />\r
<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />\r
</svg>\r
`,
    he = `<svg viewBox="0 0 24 24" class="feather feather-mail">\r
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />\r
<polyline points="22,6 12,13 2,6" />\r
</svg>\r
`,
    ue = `<svg viewBox="0 0 24 24" class="feather feather-twitter">\r
<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />\r
</svg>\r
`;
var fe = b('<li class="svelte-1pq9u9i"><a class="svelte-1pq9u9i"><img class="svelte-1pq9u9i"></a></li>'),
    de = b('<li class="svelte-1pq9u9i"><a> </a></li>'),
    ge = b('<li class="svelte-1pq9u9i"><a class="svelte-1pq9u9i"><!> </a></li>'),
    _e = b('<div class="footer svelte-1pq9u9i"><ul class="social svelte-1pq9u9i"></ul> <div class="links svelte-1pq9u9i"><ul class="svelte-1pq9u9i"></ul></div> <ul class="social svelte-1pq9u9i"><!> <li class="svelte-1pq9u9i"></li></ul></div>');

function ke(l, s) {
    E(s, !1);
    const t = [
            [se, "Get our iOS app from the App Store", "https://itunes.apple.com/us/app/eat-this-much/id981637806?mt=8"],
            [re, "Get our Android app on Google Play", "https://play.google.com/store/apps/details?id=com.eatthismuch"]
        ],
        i = [
            ["Meal Planning Blog", "https://blog.eatthismuch.com/"],
            ["Calorie Calculator", "/calculator"],
            ["Nutrient Glossary", "/glossary"],
            ["Gift Codes", `${T}/account/subscription/send-gift`],
            ["Press", "/press"],
            ["For Affiliates", "/affiliate-program"],
            ["Privacy", "/privacy-policy"],
            ["DMCA", "/copyright"],
            ["Terms of Service", "/terms"]
        ],
        n = [
            ["Facebook", me, "https://www.facebook.com/EatThisMuch"],
            ["Instagram", pe, "https://www.instagram.com/eatthismuch/"],
            ["Twitter", ue, "https://twitter.com/EatThisMuch"],
            ["Email", he, "mailto:support@eatthismuch.com"]
        ],
        o = new Date().getFullYear();
    D();
    var c = _e(),
        M = a(c);
    C(M, 5, () => t, G, (k, v) => {
        let A = () => p(v)[0],
            m = () => p(v)[1],
            u = () => p(v)[2];
        var r = fe(),
            f = a(r),
            x = a(f);
        e(f), e(r), B(() => {
            d(f, "href", u()), d(x, "alt", m()), d(x, "src", A())
        }), _(k, r)
    }), e(M);
    var h = g(M, 2),
        P = a(h);
    C(P, 5, () => i, G, (k, v) => {
        let A = () => p(v)[0],
            m = () => p(v)[1];
        var u = de(),
            r = a(u);
        B(() => d(r, "rel", m().startsWith("https://") ? "external" : null));
        var f = a(r, !0);
        e(r), e(u), B(() => {
            d(r, "href", m()), L(f, A())
        }), _(k, u)
    }), e(P), e(h);
    var w = g(h, 2),
        y = a(w);
    C(y, 1, () => n, G, (k, v) => {
        let A = () => p(v)[0],
            m = () => p(v)[1],
            u = () => p(v)[2];
        var r = ge(),
            f = a(r);
        B(() => d(f, "rel", u().startsWith("https://") ? "external" : null));
        var x = a(f);
        H(x, m);
        var S = g(x);
        e(f), e(r), B(() => {
            d(f, "href", u()), L(S, ` ${A()??""}`)
        }), _(k, r)
    });
    var q = g(y, 2);
    q.textContent = `©${o??""} Eat This Much Inc.`, e(w), e(c), _(l, c), I()
}
const we = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    ye = "" + new URL("../assets/logo.pBB2RZ6y.png",
        import.meta.url).href,
    xe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    be = "" + new URL("../assets/mobile-logo.CmJv38Jj.png",
        import.meta.url).href;

function Be(l, s) {
    l.target.tagName === "A" && s(!1)
}
var Me = (l, s, t) => s(!p(t)),
    Pe = b('<li class="svelte-mikcfs"><a class="svelte-mikcfs"> </a></li>'),
    qe = b('<div class="main-nav svelte-mikcfs"><a class="logo svelte-mikcfs" href="/"><img alt="Eat This Much" class="desktop svelte-mikcfs" height="137" width="160"> <img alt="Eat This Much" class="mobile svelte-mikcfs" height="100" width="479"></a> <button aria-label="Open Menu" class="svelte-mikcfs"><!></button>  <div class="menu svelte-mikcfs"><ul class="svelte-mikcfs"></ul> <div class="log-in svelte-mikcfs"><!> <p class="svelte-mikcfs"><a rel="external" class="svelte-mikcfs">Already a member? Sign in</a></p></div></div></div>');

function Ae(l, s) {
    let t = Q(!1);

    function i(m) {
        Y(t, ie(m)), document.body.classList.toggle("menu-open", m)
    }
    var n = qe(),
        o = a(n),
        c = a(o);
    d(c, "src", ye);
    var M = g(c, 2);
    d(M, "src", be), e(o);
    var h = g(o, 2);
    h.__click = [Me, i, t];
    var P = a(h);
    H(P, () => p(t) ? we : xe), e(h);
    var w = g(h, 2);
    w.__click = [Be, i];
    var y = a(w);
    C(y, 21, () => s.links, G, (m, u) => {
        let r = () => p(u)[0],
            f = () => p(u)[1];
        var x = Pe(),
            S = a(x),
            V = a(S, !0);
        e(S), e(x), B(() => {
            d(S, "href", f()), L(V, r())
        }), _(m, x)
    }), e(y);
    var q = g(y, 2),
        k = a(q);
    oe(k, {
        href: `${T}/registration`,
        rel: "external",
        children: (m, u) => {
            Z();
            var r = J("Sign Up");
            _(m, r)
        },
        $$slots: {
            default: !0
        }
    });
    var v = g(k, 2),
        A = a(v);
    d(A, "href", `${T}/login`), e(v), e(q), e(w), e(n), B(() => le(w, "open", p(t))), _(l, n)
}
$(["click"]);
var Se = b('<!> <nav class="svelte-oma1la"><div class="svelte-oma1la"><!></div></nav> <div class="body svelte-oma1la"><main class="svelte-oma1la"><!></main></div> <footer class="svelte-oma1la"><div class="svelte-oma1la"><!></div></footer>', 1);

function Ce(l, s) {
    E(s, !0);
    let t;
    ae(() => {
        t = getComputedStyle(document.documentElement).scrollBehavior, document.documentElement.style.scrollBehavior = "auto"
    }), te(() => {
        t && (document.documentElement.style.scrollBehavior = t)
    });
    var i = Se(),
        n = F(i);
    ve(n, {});
    var o = g(n, 2),
        c = a(o),
        M = a(c);
    Ae(M, {
        get links() {
            return s.links
        }
    }), e(c), e(o);
    var h = g(o, 2),
        P = a(h),
        w = a(P);
    z(w, () => s.children ? ? U), e(P), e(h);
    var y = g(h, 2),
        q = a(y),
        k = a(q);
    ke(k, {}), e(q), e(y), _(l, i), I()
}
var Ge = b('<link rel="canonical">');

function Xe(l, s) {
    E(s, !0), K(t => {
        var i = Ge();
        B(() => d(i, "href", N.data.canonical_url)), _(t, i)
    }), Ce(l, {
        get links() {
            return N.data.nav_links
        },
        children: (t, i) => {
            var n = R(),
                o = F(n);
            z(o, () => s.children ? ? U), _(t, n)
        },
        $$slots: {
            default: !0
        }
    }), I()
}
export {
    Xe as component, Ke as universal
};
//# sourceMappingURL=0.B9b469ia.js.map