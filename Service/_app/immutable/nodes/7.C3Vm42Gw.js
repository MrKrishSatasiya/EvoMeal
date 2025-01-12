import {
    p as re
} from "../chunks/ajax.4OqS7_lL.js";
import {
    b as oe,
    c as D,
    d as le
} from "../chunks/index.svelte_svelte_type_style_lang.SD9Dwx4t.js";
import {
    g as Z,
    s as ie
} from "../chunks/get-plan.BwKFQXe7.js";
import {
    a as v,
    t as h,
    e as S
} from "../chunks/disclose-version.lyO5itLq.js";
import "../chunks/legacy.BRi200Dj.js";
import "../chunks/page-loading.svelte_svelte_type_style_lang.DhZuzNLL.js";
import "../chunks/client.BK1FkeFH.js";
import "../chunks/food-link.svelte_svelte_type_style_lang.cT7JjgFG.js";
import "../chunks/row.DyTlJJ4r.js";
import {
    a as Q,
    c as ne,
    P as ce,
    s as pe,
    R as ue
} from "../chunks/preferences.BkY79i0B.js";
import {
    p as C,
    h as U,
    g as m,
    aj as i,
    i as x,
    f as ve,
    ah as c,
    ai as l,
    ae as A,
    aI as G,
    an as M,
    aJ as me,
    n as y,
    y as X
} from "../chunks/runtime.B6eHkxRm.js";
import {
    P as de
} from "../chunks/page-title.DeBS9nwz.js";
import {
    i as he
} from "../chunks/if.Bf6hnlR_.js";
import {
    p as fe,
    s as ge,
    a as R,
    c as Y,
    d as F,
    m as _e
} from "../chunks/props.yNAbM6Ip.js";
import {
    b as we
} from "../chunks/this.KJJo-LO2.js";
import {
    M as ye,
    D as be,
    F as ke,
    S as $e
} from "../chunks/index.CDCF3V9p.js";
import "../chunks/index.g5YcAAdQ.js";
import {
    s as _,
    r as Re,
    b as Le,
    h as B
} from "../chunks/attributes.BEKrBjrZ.js";
import {
    a as J
} from "../chunks/public.CsyzgY3c.js";
import {
    r as Pe
} from "../chunks/entry.K0IoxZhe.js";
import {
    s as q
} from "../chunks/render.DH2vE9eA.js";
import {
    e as N,
    i as W
} from "../chunks/each.BRhQgEZK.js";
import {
    h as Ue
} from "../chunks/html.h6Bcc72m.js";
import {
    s as Ie,
    I as Te,
    B as ee
} from "../chunks/button.DNbQo9vX.js";
import {
    e as Se
} from "../chunks/svelte-head.Cog7lhpT.js";
import {
    a as Ee
} from "../chunks/input.DAFvKaP_.js";
import {
    A as Ae,
    G as Me
} from "../chunks/google-play-badge.50bf66JS.js";
import {
    s as ae
} from "../chunks/snippet.CWXx-QH6.js";
const Ce = !1;
async function xe({
    fetch: u,
    setHeaders: a,
    url: e
}) {
    if (a({
            Vary: "Cookie"
        }), e.searchParams.has("a") || e.searchParams.has("ref")) {
        const s = Object.fromEntries(e.searchParams);
        await re(u, "/api/save-referrer/", s)
    }
    if (e.searchParams.has("cals")) {
        const s = e.searchParams.get("cals") ? ? "",
            r = parseFloat(s);
        r && Z().update(o => {
            const t = o.days[0].nutrition_profile;
            return t.calories !== r && (o.days[0].meals = oe(o.days[0].meals.length), o.days[0].nutrition_profile = Q({ ...t,
                calories: r
            }, t)), o
        })
    }
}
const mt = Object.freeze(Object.defineProperty({
    __proto__: null,
    load: xe,
    prerender: Ce
}, Symbol.toStringTag, {
    value: "Module"
}));
var Be = h('<ul class="svelte-6s6k0e"><!></ul> <p class="svelte-6s6k0e"><small>Want to set specific macro targets? <a rel="external">Create a free account!</a></small></p>', 1);

function ze(u, a) {
    C(a, !0);
    let e = ve(() => a.form.days[0].nutrition_profile);
    var s = Be(),
        r = U(s),
        p = c(r);
    ye(p, {
        get nutrition() {
            return m(e)
        },
        get plan() {
            return a.form
        }
    }), l(r);
    var o = i(r, 2),
        t = c(o),
        n = i(c(t));
    _(n, "href", `${J}/registration`), l(t), l(o), v(u, s), x()
}

function je(u, a, e) {
    a.ondiet(e().swole_user.preset_diet)
}
var qe = h('<li><label class="svelte-1gki2rv"><input type="radio" class="svelte-1gki2rv"> <span><span class="icon svelte-1gki2rv"><!></span> <span class="name svelte-1gki2rv"> </span></span></label></li>'),
    De = h('<fieldset><legend class="svelte-1gki2rv">Preferred Diet</legend> <ul class="svelte-1gki2rv"></ul></fieldset>');

function Ge(u, a) {
    C(a, !0);
    const e = [];
    let s = fe(a, "form", 15);
    var r = De(),
        p = i(c(r), 2);
    N(p, 21, () => be, W, (o, t) => {
        var n = qe(),
            g = c(n),
            d = c(g);
        Re(d);
        var f;
        d.__change = [je, a, s];
        var k = i(d, 2);
        Ie(k, `preset ${Te} svelte-1gki2rv`);
        var w = c(k),
            $ = c(w);
        Ue($, () => m(t).icon), l(w);
        var L = i(w, 2),
            E = c(L, !0);
        l(L), l(k), l(g), l(n), A(() => {
            f !== (f = m(t).value) && (d.value = (d.__value = m(t).value) == null ? "" : m(t).value), q(E, m(t).name)
        }), Ee(e, [], d, () => (m(t).value, s().swole_user.preset_diet), P => s(s().swole_user.preset_diet = P, !0)), v(o, n)
    }), l(p), l(r), v(u, r), x()
}
Se(["change"]);
const Fe = "homepage:show-plan:2024-10-16";
var Ne = h("<!> <!> <!> <!>", 1),
    We = h('<section id="create" class="svelte-1m3dzlo"><h2>Create your meal plan right here in seconds</h2> <div class="settings svelte-1m3dzlo"><!></div></section> <!>', 1);

function Oe(u, a) {
    C(a, !0);
    const e = ge(),
        s = () => Y(p, "$plan", e),
        r = () => Y(o, "$show_plan", e),
        p = Z(),
        o = ie(Fe, !1);
    let t = G(R(D(s()))),
        n = G(void 0);
    ne();
    let g = G(R(D(s().days[0].nutrition_profile)));

    function d(b) {
        M(g, R(le[b])), m(t).swole_user = pe(m(t).swole_user, b), m(t).days[0].nutrition_profile = Q(m(t).days[0].nutrition_profile, m(g))
    }
    async function f() {
        var b, I;
        F(p, R(D(m(t)))), F(o, !0), Pe("/", {}), await me(), await ((b = m(n)) == null ? void 0 : b.reset()), (I = m(n)) == null || I.scrollIntoView()
    }
    var k = We(),
        w = U(k),
        $ = i(c(w), 2),
        L = c($);
    ke(L, {
        onSubmit: f,
        children: (b, I) => {
            var O = Ne(),
                H = U(O);
            Ge(H, {
                ondiet: d,
                get form() {
                    return m(t)
                },
                set form(T) {
                    M(t, R(T))
                }
            });
            var K = i(H, 2);
            ce(K, {
                get original_targets() {
                    return m(g)
                },
                get form() {
                    return m(t)
                },
                set form(T) {
                    M(t, R(T))
                }
            });
            var V = i(K, 2);
            ze(V, {
                get form() {
                    return m(t)
                },
                set form(T) {
                    M(t, R(T))
                }
            });
            var te = i(V, 2);
            $e(te, {
                children: (T, ja) => {
                    y();
                    var se = S("Generate");
                    v(T, se)
                },
                $$slots: {
                    default: !0
                }
            }), v(b, O)
        },
        $$slots: {
            default: !0
        }
    }), l($), l(w);
    var E = i(w, 2); {
        var P = b => {
            we(ue(b, {
                get plan() {
                    return _e(), s()
                },
                set plan(I) {
                    F(p, R(I))
                }
            }), I => M(n, R(I)), () => m(n))
        };
        he(E, b => {
            r() && b(P)
        })
    }
    v(u, k), x()
}
const He = "" + new URL("../assets/plane.BgKEmdsH.avif",
        import.meta.url).href,
    Ke = "" + new URL("../assets/plane.srfVEkqf.webp",
        import.meta.url).href,
    Ve = "" + new URL("../assets/left-clouds.C30YzA8c.avif",
        import.meta.url).href,
    Ye = "" + new URL("../assets/left-clouds.BSBCj9x5.webp",
        import.meta.url).href,
    Ze = "" + new URL("../assets/right-clouds.Dqe4VV7f.avif",
        import.meta.url).href,
    Qe = "" + new URL("../assets/right-clouds.C7_rUylq.webp",
        import.meta.url).href;
var Xe = h(`<picture><source type="image/avif"> <img alt="" id="hero-left-clouds" class="svelte-1dkjhf1"></picture> <picture><source type="image/avif"> <img alt="" id="hero-right-clouds" class="svelte-1dkjhf1"></picture> <section class="svelte-1dkjhf1"><h1 class="svelte-1dkjhf1">Put your diet on <em class="svelte-1dkjhf1">autopilot.</em></h1> <p>Eat This Much creates personalized meal plans based on your food
    preferences, budget, and schedule. Reach your diet and nutritional goals
    with our calorie calculator, weekly meal plans, grocery lists and more.</p> <picture><source type="image/avif"> <img alt="" id="hero-plane" class="svelte-1dkjhf1"></picture></section>`, 1);

function Je(u) {
    var a = Xe(),
        e = U(a),
        s = c(e);
    _(s, "src", Ve);
    var r = i(s, 2);
    _(r, "src", Ye), l(e);
    var p = i(e, 2),
        o = c(p);
    _(o, "src", Ze);
    var t = i(o, 2);
    _(t, "src", Qe), l(p);
    var n = i(p, 2),
        g = i(c(n), 4),
        d = c(g);
    _(d, "src", He);
    var f = i(d, 2);
    _(f, "src", Ke), l(g), l(n), v(u, a)
}
var ea = h('<meter class="svelte-gpo2en"></meter>');

function aa(u, a) {
    var e = ea();
    _(e, "max", 5), A(() => Le(e, a.rating)), v(u, e)
}
var ta = h('<article class="svelte-19l4ls"><a class="app-store-link svelte-19l4ls"><img loading="lazy" class="svelte-19l4ls"></a> <div class="stars svelte-19l4ls"><div class="number svelte-19l4ls"> </div> <!></div> <div class="reviews svelte-19l4ls"> </div></article>'),
    sa = h('<div class="app-store-ratings svelte-19l4ls"></div>');

function ra(u) {
    const a = [{
        score: 4.7,
        num_reviews: "21,000",
        src: Ae,
        label: "Get our iOS app from the App Store",
        href: "https://itunes.apple.com/us/app/eat-this-much/id981637806?mt=8"
    }, {
        score: 4.6,
        num_reviews: "9,000",
        src: Me,
        label: "Get our Android app on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.eatthismuch"
    }];
    var e = sa();
    N(e, 5, () => a, W, (s, r) => {
        let p = () => m(r).score,
            o = () => m(r).num_reviews,
            t = () => m(r).src,
            n = () => m(r).label,
            g = () => m(r).href;
        var d = ta(),
            f = c(d),
            k = c(f);
        l(f);
        var w = i(f, 2),
            $ = c(w),
            L = c($, !0);
        l($);
        var E = i($, 2);
        aa(E, {
            get rating() {
                return p()
            }
        }), l(w);
        var P = i(w, 2),
            b = c(P);
        l(P), l(d), A(() => {
            _(f, "href", g()), _(k, "alt", n()), _(k, "src", t()), q(L, p()), q(b, `Over ${o()??""} reviews`)
        }), B(k), v(s, d)
    }), l(e), v(u, e)
}
const oa = "" + new URL("../assets/cnn_underscored.B6IlvIqw.png",
        import.meta.url).href,
    la = "" + new URL("../assets/lifehacker.Bxep0fzh.svg",
        import.meta.url).href,
    ia = "" + new URL("../assets/the_guardian.B_W4u-y6.svg",
        import.meta.url).href,
    na = "" + new URL("../assets/healthline.c4Tyy7oS.svg",
        import.meta.url).href,
    ca = "" + new URL("../assets/washington-post.Dui4Tcyr.svg",
        import.meta.url).href;
var pa = h('<li class="svelte-80uplv"><a target="_blank"><img loading="lazy" class="svelte-80uplv"></a></li>'),
    ua = h('<ul class="svelte-80uplv"></ul> <p class="svelte-80uplv">Named <a target="_blank" title="Best Meal Planning Apps" href="https://www.cnn.com/cnn-underscored/reviews/best-meal-planning-apps">Best Meal Planning App of 2024</a> by CNN</p>', 1);

function va(u) {
    const a = [{
        source: "CNN Underscored",
        href: "https://www.cnn.com/cnn-underscored/reviews/best-meal-planning-apps",
        image: oa
    }, {
        source: "Life Hacker",
        href: "http://lifehacker.com/eat-this-much-automatically-builds-meal-plans-and-menus-1180298912",
        image: la
    }, {
        source: "Washington Post",
        href: "http://www.washingtonpost.com/lifestyle/wellness/meal-planning-site-eat-this-much-plays-part-of-virtual-nutritionist/2013/09/03/0950a0ce-0e62-11e3-85b6-d27422650fd5_story.html",
        image: ca
    }, {
        source: "Healthline",
        href: "https://www.healthline.com/nutrition/best-meal-planning-apps#eatthismuch",
        image: na
    }, {
        source: "The Guardian",
        href: "https://www.theguardian.com/lifeandstyle/2015/oct/10/eat-this-much-app-review",
        image: ia
    }];
    var e = ua(),
        s = U(e);
    N(s, 5, () => a, W, (r, p) => {
        let o = () => m(p).source,
            t = () => m(p).href,
            n = () => m(p).image;
        var g = pa(),
            d = c(g),
            f = c(d);
        l(d), l(g), A(() => {
            _(d, "href", t()), _(f, "alt", o()), _(f, "src", n())
        }), B(f), v(r, g)
    }), l(s), y(2), v(u, e)
}
const ma = "" + new URL("../assets/ios-app-eatthismuch.C4RTd9d9.webp",
        import.meta.url).href,
    da = "" + new URL("../assets/etm-pro-logo.BvrzBska.webp",
        import.meta.url).href;
var ha = h('<div class="wrapper svelte-ci479a"><div class="svelte-ci479a"><hgroup><h2 class="svelte-ci479a"><img alt="Eat This Much Pro" class="svelte-ci479a"></h2> <p>For Health & Fitness Professionals</p></hgroup> <p>Powerful, fast meal planning to level up your business.</p> <p class="sign-up"><!></p></div> <img class="action-shot svelte-ci479a" alt="" loading="lazy"></div>');

function fa(u) {
    var a = ha(),
        e = c(a),
        s = c(e),
        r = c(s),
        p = c(r);
    _(p, "src", da), l(r), y(2), l(s);
    var o = i(s, 4),
        t = c(o);
    ee(t, {
        href: "/professionals",
        children: (g, d) => {
            y();
            var f = S("Learn More");
            v(g, f)
        },
        $$slots: {
            default: !0
        }
    }), l(o), l(e);
    var n = i(e, 2);
    _(n, "src", ma), l(a), B(n), v(u, a)
}
const ga = "" + new URL("../assets/calendar._bGyM3Pl.webp",
        import.meta.url).href,
    _a = "" + new URL("../assets/eating-style.DmTW8uG5.webp",
        import.meta.url).href;
var wa = h('<section class="svelte-1qo6vcf"><img alt="" loading="lazy" class="svelte-1qo6vcf"> <div><h3 class="svelte-1qo6vcf"> </h3> <p class="svelte-1qo6vcf"><!></p></div></section>');

function z(u, a) {
    C(a, !0);
    var e = wa(),
        s = c(e),
        r = i(s, 2),
        p = c(r),
        o = c(p, !0);
    l(p);
    var t = i(p, 2),
        n = c(t);
    ae(n, () => a.children ? ? X), l(t), l(r), l(e), A(() => {
        _(s, "src", a.image), q(o, a.title)
    }), B(s), v(u, e), x()
}
const ya = "" + new URL("../assets/food-waste.BIZiPL4p.webp",
        import.meta.url).href,
    ba = "" + new URL("../assets/shopping-cart.BXoevBOX.webp",
        import.meta.url).href;
var ka = h('<div class="grid svelte-10shpl8"><!> <!> <!> <!></div>');

function $a(u) {
    var a = ka(),
        e = c(a);
    z(e, {
        title: "Follow any eating style or create your own",
        image: _a,
        children: (o, t) => {
            y();
            var n = S(`You can customize popular eating styles like vegan and paleo to match your
    needs and preferences.`);
            v(o, n)
        },
        $$slots: {
            default: !0
        }
    });
    var s = i(e, 2);
    z(s, {
        title: "Reduce food waste",
        image: ya,
        children: (o, t) => {
            y();
            var n = S(`Planning ahead means less produce going bad in the fridge. Add what you
    already own to the virtual pantry and our algorithms will use it up with
    priority.`);
            v(o, n)
        },
        $$slots: {
            default: !0
        }
    });
    var r = i(s, 2);
    z(r, {
        title: "Take the anxiety out of picking what to eat",
        image: ga,
        children: (o, t) => {
            y();
            var n = S(`Make the important decisions ahead of time and on your own schedule. Then
    there's nothing to worry about when it's time to eat.`);
            v(o, n)
        },
        $$slots: {
            default: !0
        }
    });
    var p = i(r, 2);
    z(p, {
        title: "Automatic grocery lists",
        image: ba,
        children: (o, t) => {
            y();
            var n = S(`No more skipping meals because you're missing ingredients. Review your meals
    for the week and the grocery list automatically updates. Then get it
    delivered with our Instacart or AmazonFresh integration.`);
            v(o, n)
        },
        $$slots: {
            default: !0
        }
    }), l(a), v(u, a)
}
const Ra = "" + new URL("../assets/ben.DZNp_DCH.webp",
        import.meta.url).href,
    La = "" + new URL("../assets/meg.BqjUQaKE.webp",
        import.meta.url).href,
    Pa = "" + new URL("../assets/sam.MLdjftEP.webp",
        import.meta.url).href,
    Ua = "" + new URL("../assets/sama.CYTEZ1-Q.webp",
        import.meta.url).href;
var Ia = h('<section class="svelte-1p3k59t"><img alt="" loading="lazy" class="svelte-1p3k59t"> <blockquote><!></blockquote></section>');

function j(u, a) {
    C(a, !0);
    var e = Ia(),
        s = c(e),
        r = i(s, 2),
        p = c(r);
    ae(p, () => a.children ? ? X), l(r), l(e), A(() => _(s, "src", a.src)), B(s), v(u, e), x()
}
var Ta = h(`<p class="svelte-1eafr3s">"Eat This Much not only helps me hit my macros, but also makes sure I'm not
    eating the same bland thing every day. I've lost 35 lbs over the past year,
    and with ETM, I'm eating and performing better than ever."</p> <cite>Sam Konowich <a href="https://www.instagram.com/samkonthemankon/" target="_blank">@samkonthemankon</a></cite>`, 1),
    Sa = h(`<p class="svelte-1eafr3s">"I found out about Eat This Much and lost 32 lbs in 6 months! Now I'm a fit
    over 50 female in amazing condition, and this site is what I refer to
    several times a day to ensure I eat properly and manage my macros."</p> <cite>Meg M., awesome ETM user</cite>`, 1),
    Ea = h(`<p class="svelte-1eafr3s">"After being diagnosed with sleep apnea and high blood pressure, I picked up
    this app and followed the nutrition plan religiously. Since then I've lost
    over 40lbs. I still have 20lbs or so to go before I get to where I really
    want to be, but I'm thankful for the life this all has helped me achieve."</p> <cite>Sam A., awesome ETM user</cite>`, 1),
    Aa = h(`<p class="svelte-1eafr3s">"I started tracking my weight in April when I was 184lbs. In May I signed up
    for Eat This Much and immediately appreciated being able to just cook the
    menu and not worry about what to have for dinner. By November I was down to
    155lbs and I still use Eat This Much today!"</p> <cite>Ben Kutil, <a href="https://benkutil.com/" target="_blank">Product designer</a></cite>`, 1),
    Ma = h(`<!> <!> <!> <!> <p class="svelte-1eafr3s"><small class="svelte-1eafr3s"><i>Disclaimer:</i> These are real testimonials, but we're required to tell you
    that results aren't guaranteed. Eat This Much is a tool for planning your meals,
    and your success will depend on adhering to your planned meals and nutrition
    goals. Only you can make yourself improve your diet, but we'll be here to help.</small></p> <p class="svelte-1eafr3s"><small class="svelte-1eafr3s">Eat This Much is not a substitute for professional medical advice. You
    should consult with a medical professional before making significant changes
    to your diet.</small></p>`, 1);

function Ca(u) {
    var a = Ma(),
        e = U(a);
    j(e, {
        src: Pa,
        children: (o, t) => {
            var n = Ta();
            y(2), v(o, n)
        },
        $$slots: {
            default: !0
        }
    });
    var s = i(e, 2);
    j(s, {
        src: La,
        children: (o, t) => {
            var n = Sa();
            y(2), v(o, n)
        },
        $$slots: {
            default: !0
        }
    });
    var r = i(s, 2);
    j(r, {
        src: Ua,
        children: (o, t) => {
            var n = Ea();
            y(2), v(o, n)
        },
        $$slots: {
            default: !0
        }
    });
    var p = i(r, 2);
    j(p, {
        src: Ra,
        children: (o, t) => {
            var n = Aa();
            y(2), v(o, n)
        },
        $$slots: {
            default: !0
        }
    }), y(4), v(u, a)
}
var xa = h('<section class="svelte-17s2p23"><h2 class="svelte-17s2p23">Available on Web, iOS, and Android</h2> <!></section> <section id="as-seen-in" class="svelte-17s2p23"><h2 class="svelte-17s2p23">As Seen In</h2> <!></section> <section class="svelte-17s2p23"><h2 class="svelte-17s2p23">Eating smart has never been easier</h2> <!> <p class="sign-up svelte-17s2p23"><!></p></section> <section data-color-scheme="dark" class="svelte-17s2p23"><div class="svelte-17s2p23"><h2 class="svelte-17s2p23">What Our Users Say</h2> <!></div></section> <section class="svelte-17s2p23"><!></section>', 1);

function Ba(u) {
    var a = xa(),
        e = U(a),
        s = i(c(e), 2);
    ra(s), l(e);
    var r = i(e, 2),
        p = i(c(r), 2);
    va(p), l(r);
    var o = i(r, 2),
        t = i(c(o), 2);
    $a(t);
    var n = i(t, 2),
        g = c(n);
    ee(g, {
        href: `${J}/registration`,
        rel: "external",
        children: (L, E) => {
            y();
            var P = S("Create a free account →");
            v(L, P)
        },
        $$slots: {
            default: !0
        }
    }), l(n), l(o);
    var d = i(o, 2),
        f = c(d),
        k = i(c(f), 2);
    Ca(k), l(f), l(d);
    var w = i(d, 2),
        $ = c(w);
    fa($), l(w), v(u, a)
}
var za = h("<!> <!> <!> <!>", 1);

function dt(u) {
    var a = za(),
        e = U(a);
    de(e, {
        title: "The Automatic Meal Planner",
        description: "Eat This Much creates personalized meal plans tailored to your preferences, budget, and schedule. Achieve your dietary goals with our calorie calculator, weekly plans, and grocery lists. Start planning your meals in seconds."
    });
    var s = i(e, 2);
    Je(s);
    var r = i(s, 2);
    Oe(r, {});
    var p = i(r, 2);
    Ba(p), v(u, a)
}
export {
    dt as component, mt as universal
};
//# sourceMappingURL=7.C3Vm42Gw.js.map