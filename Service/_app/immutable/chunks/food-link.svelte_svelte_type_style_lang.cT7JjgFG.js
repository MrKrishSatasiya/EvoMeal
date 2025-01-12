function Wt(t) {
    return t === parseFloat(t).toString()
}

function Y(t) {
    const e = Object.entries(t).filter(([n]) => !Wt(n)).map(([n, i]) => [i, n]);
    return new Map(e)
}
var bt = (t => (t[t["Desk job, light exercise"] = 1.2] = "Desk job, light exercise", t[t["Lightly active, workout 3-4 times/week"] = 1.375] = "Lightly active, workout 3-4 times/week", t[t["Active daily, frequent exercise"] = 1.55] = "Active daily, frequent exercise", t[t["Very Athletic"] = 1.725] = "Very Athletic", t[t["Extremely Athletic"] = 1.9] = "Extremely Athletic", t))(bt || {});
const _e = Y(bt);
var At = (t => (t[t.Low = 10] = "Low", t[t.Medium = 20] = "Medium", t[t.High = 30] = "High", t))(At || {});
const ve = Y(At);
var F = (t => (t.Male = "M", t.Female = "F", t["Non-Binary"] = "O", t))(F || {});
const we = Y(F);
var Rt = (t => (t["Lose fat"] = "L", t["Maintain weight"] = "M", t["Build muscle"] = "G", t))(Rt || {});
const xe = Y(Rt),
    Ht = ["calories", "carbs", "cholesterol", "fats", "fiber", "net_carbs", "proteins", "saturated_fats", "sodium", "sugar", "trans_fats"],
    be = {
        carbs: 4,
        fats: 9,
        proteins: 4
    },
    r = t => e => t,
    Vt = {
        ala_fatty_acid: {
            display_name: "Alpha Linolenic Acid (ALA)",
            daily_value: r(null),
            units: "g"
        },
        alanine: {
            display_name: "Alanine",
            daily_value: r(null),
            units: "g"
        },
        alcohol: {
            display_name: "Alcohol",
            daily_value: r(null),
            units: "g"
        },
        alpha_carotene: {
            display_name: "Alpha carotene",
            daily_value: r(null),
            units: "μg"
        },
        arginine: {
            display_name: "Arginine",
            daily_value: r(null),
            units: "g"
        },
        aspartic_acid: {
            display_name: "Aspartic acid",
            daily_value: r(null),
            units: "g"
        },
        beta_carotene: {
            display_name: "Beta carotene",
            daily_value: r(null),
            units: "μg"
        },
        betaine: {
            display_name: "Betaine",
            daily_value: r(null),
            units: "mg"
        },
        caffeine: {
            display_name: "Caffeine",
            daily_value: r(null),
            units: "mg"
        },
        calcium: {
            display_name: "Calcium",
            daily_value(t) {
                return t != null && t.age && (t.age > 70 || t.gender === F.Female && t.age > 50) ? 1200 : 1e3
            },
            units: "mg"
        },
        calories: {
            display_name: "Calories",
            daily_value: r(null),
            units: "kcal"
        },
        carbs: {
            display_name: "Carbs",
            daily_value: r(275),
            units: "g"
        },
        cholesterol: {
            display_name: "Cholesterol",
            daily_value: r(300),
            units: "mg"
        },
        choline: {
            display_name: "Choline",
            daily_value: r(550),
            units: "mg"
        },
        copper: {
            display_name: "Copper",
            daily_value: r(.9),
            units: "mg"
        },
        cystine: {
            display_name: "Cystine",
            daily_value: r(null),
            units: "g"
        },
        dha_fatty_acid: {
            display_name: "Docosahexaenoic Acid (DHA)",
            daily_value: r(null),
            units: "g"
        },
        dpa_fatty_acid: {
            display_name: "Docosapentaenoic Acid (DPA)",
            daily_value: r(null),
            units: "g"
        },
        epa_fatty_acid: {
            display_name: "Eicosapentaenoic Acid (EPA)",
            daily_value: r(null),
            units: "g"
        },
        fats: {
            display_name: "Fats",
            daily_value: r(78),
            units: "g"
        },
        fiber: {
            display_name: "Fiber",
            daily_value: r(28),
            units: "g"
        },
        fluoride: {
            display_name: "Fluoride",
            daily_value: r(null),
            units: "μg"
        },
        folate: {
            display_name: "Folate (B9)",
            daily_value: r(400),
            units: "μg"
        },
        fructose: {
            display_name: "Fructose",
            daily_value: r(null),
            units: "g"
        },
        galactose: {
            display_name: "Galactose",
            daily_value: r(null),
            units: "g"
        },
        glucose: {
            display_name: "Glucose",
            daily_value: r(null),
            units: "g"
        },
        glutamic_acid: {
            display_name: "Glutamic acid",
            daily_value: r(null),
            units: "g"
        },
        glycine: {
            display_name: "Glycine",
            daily_value: r(null),
            units: "g"
        },
        histidine: {
            display_name: "Histidine",
            daily_value: r(null),
            units: "g"
        },
        hydroxyproline: {
            display_name: "Hydroxyproline",
            daily_value: r(null),
            units: "g"
        },
        iron: {
            display_name: "Iron",
            daily_value(t) {
                return t != null && t.age && t.age <= 50 && t.gender === F.Female ? 18 : 8
            },
            units: "mg"
        },
        isoleucine: {
            display_name: "Isoleucine",
            daily_value: r(null),
            units: "g"
        },
        lactose: {
            display_name: "Lactose",
            daily_value: r(null),
            units: "g"
        },
        leucine: {
            display_name: "Leucine",
            daily_value: r(null),
            units: "g"
        },
        lycopene: {
            display_name: "Lycopene",
            daily_value: r(null),
            units: "μg"
        },
        lysine: {
            display_name: "Lysine",
            daily_value: r(null),
            units: "g"
        },
        magnesium: {
            display_name: "Magnesium",
            daily_value(t) {
                return t != null && t.age ? t.gender === F.Female ? t.age > 30 ? 320 : 310 : t.age > 30 ? 420 : 400 : 420
            },
            units: "mg"
        },
        maltose: {
            display_name: "Maltose",
            daily_value: r(null),
            units: "g"
        },
        manganese: {
            display_name: "Manganese",
            daily_value: r(2.3),
            units: "mg"
        },
        methionine: {
            display_name: "Methionine",
            daily_value: r(null),
            units: "g"
        },
        monounsaturated_fats: {
            display_name: "Monounsaturated fats",
            daily_value: r(null),
            units: "g"
        },
        net_carbs: {
            display_name: "Net carbs",
            daily_value: r(null),
            units: "g"
        },
        niacin: {
            display_name: "Niacin",
            daily_value: r(16),
            units: "mg"
        },
        pantothenic_acid: {
            display_name: "Pantothenic acid",
            daily_value: r(5),
            units: "mg"
        },
        phenylalanine: {
            display_name: "Phenylalanine",
            daily_value: r(null),
            units: "g"
        },
        phosphorus: {
            display_name: "Phosphorus",
            daily_value: r(700),
            units: "mg"
        },
        polyunsaturated_fats: {
            display_name: "Polyunsaturated fats",
            daily_value: r(null),
            units: "g"
        },
        potassium: {
            display_name: "Potassium",
            daily_value: r(4700),
            units: "mg"
        },
        proline: {
            display_name: "Proline",
            daily_value: r(null),
            units: "g"
        },
        proteins: {
            display_name: "Protein",
            daily_value: r(null),
            units: "g"
        },
        retinol: {
            display_name: "Retinol",
            daily_value: r(null),
            units: "μg"
        },
        riboflavin: {
            display_name: "Riboflavin (B2)",
            daily_value: r(1.3),
            units: "mg"
        },
        saturated_fats: {
            display_name: "Saturated fats",
            daily_value: r(20),
            units: "g"
        },
        selenium: {
            display_name: "Selenium",
            daily_value: r(55),
            units: "μg"
        },
        serine: {
            display_name: "Serine",
            daily_value: r(null),
            units: "g"
        },
        sodium: {
            display_name: "Sodium",
            daily_value: r(2300),
            units: "mg"
        },
        starch: {
            display_name: "Starch",
            daily_value: r(null),
            units: "g"
        },
        sucrose: {
            display_name: "Sucrose",
            daily_value: r(null),
            units: "g"
        },
        sugar: {
            display_name: "Sugar",
            daily_value: r(null),
            units: "g"
        },
        theobromine: {
            display_name: "Theobromine",
            daily_value: r(null),
            units: "mg"
        },
        thiamine: {
            display_name: "Thiamine",
            daily_value: r(1.2),
            units: "mg"
        },
        threonine: {
            display_name: "Threonine",
            daily_value: r(null),
            units: "g"
        },
        total_omega_3: {
            display_name: "Total omega 3",
            daily_value: r(null),
            units: "g"
        },
        total_omega_6: {
            display_name: "Total omega 6",
            daily_value: r(null),
            units: "g"
        },
        trans_fats: {
            display_name: "Trans fats",
            daily_value: r(null),
            units: "g"
        },
        tryptophan: {
            display_name: "Tryptophan",
            daily_value: r(null),
            units: "g"
        },
        tyrosine: {
            display_name: "Tyrosine",
            daily_value: r(null),
            units: "g"
        },
        valine: {
            display_name: "Valine",
            daily_value: r(null),
            units: "g"
        },
        vit_a: {
            display_name: "Vitamin A",
            daily_value(t) {
                return (t == null ? void 0 : t.gender) === F.Female ? 700 : 900
            },
            units: "μg"
        },
        vit_a_iu: {
            display_name: "Vitamin A IU",
            daily_value: r(null),
            units: "IU"
        },
        vit_b6: {
            display_name: "Vitamin B6",
            daily_value(t) {
                return t != null && t.age && t.age > 50 ? t.gender === F.Female ? 1.5 : 1.7 : 1.3
            },
            units: "mg"
        },
        vit_b12: {
            display_name: "Vitamin B12",
            daily_value: r(2.4),
            units: "μg"
        },
        vit_c: {
            display_name: "Vitamin C",
            daily_value: r(90),
            units: "mg"
        },
        vit_d: {
            display_name: "Vitamin D",
            daily_value(t) {
                return t != null && t.age && t.age > 70 ? 20 : 15
            },
            units: "μg"
        },
        vit_d_iu: {
            display_name: "Vitamin D IU",
            daily_value: r(null),
            units: "IU"
        },
        vit_d2: {
            display_name: "Vitamin D2",
            daily_value: r(null),
            units: "μg"
        },
        vit_d3: {
            display_name: "Vitamin D3",
            daily_value: r(null),
            units: "μg"
        },
        vit_e: {
            display_name: "Vitamin E",
            daily_value: r(15),
            units: "mg"
        },
        vit_k: {
            display_name: "Vitamin K",
            daily_value(t) {
                return (t == null ? void 0 : t.gender) === F.Female ? 90 : 120
            },
            units: "μg"
        },
        water: {
            display_name: "Water",
            daily_value: r(null),
            units: "g"
        },
        zinc: {
            display_name: "Zinc",
            daily_value(t) {
                return (t == null ? void 0 : t.gender) === F.Female ? 8 : 11
            },
            units: "mg"
        }
    },
    $t = (t, e) => t.includes(e);
Object.keys(Vt).filter(t => !$t(Ht, t));
const I = Math.min,
    T = Math.max,
    J = Math.round,
    Z = Math.floor,
    O = t => ({
        x: t,
        y: t
    }),
    zt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    jt = {
        start: "end",
        end: "start"
    };

function ht(t, e, n) {
    return T(t, I(e, n))
}

function tt(t, e) {
    return typeof t == "function" ? t(e) : t
}

function E(t) {
    return t.split("-")[0]
}

function et(t) {
    return t.split("-")[1]
}

function Ct(t) {
    return t === "x" ? "y" : "x"
}

function Ot(t) {
    return t === "y" ? "height" : "width"
}

function V(t) {
    return ["top", "bottom"].includes(E(t)) ? "y" : "x"
}

function St(t) {
    return Ct(V(t))
}

function Ut(t, e, n) {
    n === void 0 && (n = !1);
    const i = et(t),
        l = St(t),
        a = Ot(l);
    let s = l === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
    return e.reference[a] > e.floating[a] && (s = Q(s)), [s, Q(s)]
}

function qt(t) {
    const e = Q(t);
    return [ot(t), e, ot(e)]
}

function ot(t) {
    return t.replace(/start|end/g, e => jt[e])
}

function Xt(t, e, n) {
    const i = ["left", "right"],
        l = ["right", "left"],
        a = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (t) {
        case "top":
        case "bottom":
            return n ? e ? l : i : e ? i : l;
        case "left":
        case "right":
            return e ? a : s;
        default:
            return []
    }
}

function Kt(t, e, n, i) {
    const l = et(t);
    let a = Xt(E(t), n === "start", i);
    return l && (a = a.map(s => s + "-" + l), e && (a = a.concat(a.map(ot)))), a
}

function Q(t) {
    return t.replace(/left|right|bottom|top/g, e => zt[e])
}

function Zt(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}

function It(t) {
    return typeof t != "number" ? Zt(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}

function G(t) {
    const {
        x: e,
        y: n,
        width: i,
        height: l
    } = t;
    return {
        width: i,
        height: l,
        top: n,
        left: e,
        right: e + i,
        bottom: n + l,
        x: e,
        y: n
    }
}

function _t(t, e, n) {
    let {
        reference: i,
        floating: l
    } = t;
    const a = V(e),
        s = St(e),
        o = Ot(s),
        c = E(e),
        u = a === "y",
        m = i.x + i.width / 2 - l.width / 2,
        d = i.y + i.height / 2 - l.height / 2,
        y = i[o] / 2 - l[o] / 2;
    let f;
    switch (c) {
        case "top":
            f = {
                x: m,
                y: i.y - l.height
            };
            break;
        case "bottom":
            f = {
                x: m,
                y: i.y + i.height
            };
            break;
        case "right":
            f = {
                x: i.x + i.width,
                y: d
            };
            break;
        case "left":
            f = {
                x: i.x - l.width,
                y: d
            };
            break;
        default:
            f = {
                x: i.x,
                y: i.y
            }
    }
    switch (et(e)) {
        case "start":
            f[s] -= y * (n && u ? -1 : 1);
            break;
        case "end":
            f[s] += y * (n && u ? -1 : 1);
            break
    }
    return f
}
const Jt = async (t, e, n) => {
    const {
        placement: i = "bottom",
        strategy: l = "absolute",
        middleware: a = [],
        platform: s
    } = n, o = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
    let u = await s.getElementRects({
            reference: t,
            floating: e,
            strategy: l
        }),
        {
            x: m,
            y: d
        } = _t(u, i, c),
        y = i,
        f = {},
        p = 0;
    for (let h = 0; h < o.length; h++) {
        const {
            name: _,
            fn: g
        } = o[h], {
            x: v,
            y: w,
            data: b,
            reset: x
        } = await g({
            x: m,
            y: d,
            initialPlacement: i,
            placement: y,
            strategy: l,
            middlewareData: f,
            rects: u,
            platform: s,
            elements: {
                reference: t,
                floating: e
            }
        });
        m = v ? ? m, d = w ? ? d, f = { ...f,
            [_]: { ...f[_],
                ...b
            }
        }, x && p <= 50 && (p++, typeof x == "object" && (x.placement && (y = x.placement), x.rects && (u = x.rects === !0 ? await s.getElementRects({
            reference: t,
            floating: e,
            strategy: l
        }) : x.rects), {
            x: m,
            y: d
        } = _t(u, y, c)), h = -1)
    }
    return {
        x: m,
        y: d,
        placement: y,
        strategy: l,
        middlewareData: f
    }
};
async function Lt(t, e) {
    var n;
    e === void 0 && (e = {});
    const {
        x: i,
        y: l,
        platform: a,
        rects: s,
        elements: o,
        strategy: c
    } = t, {
        boundary: u = "clippingAncestors",
        rootBoundary: m = "viewport",
        elementContext: d = "floating",
        altBoundary: y = !1,
        padding: f = 0
    } = tt(e, t), p = It(f), _ = o[y ? d === "floating" ? "reference" : "floating" : d], g = G(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(_))) == null || n ? _ : _.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(o.floating)),
        boundary: u,
        rootBoundary: m,
        strategy: c
    })), v = d === "floating" ? {
        x: i,
        y: l,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(o.floating)), b = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, x = G(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: o,
        rect: v,
        offsetParent: w,
        strategy: c
    }) : v);
    return {
        top: (g.top - x.top + p.top) / b.y,
        bottom: (x.bottom - g.bottom + p.bottom) / b.y,
        left: (g.left - x.left + p.left) / b.x,
        right: (x.right - g.right + p.right) / b.x
    }
}
const Qt = function(t) {
    return t === void 0 && (t = {}), {
        name: "flip",
        options: t,
        async fn(e) {
            var n, i;
            const {
                placement: l,
                middlewareData: a,
                rects: s,
                initialPlacement: o,
                platform: c,
                elements: u
            } = e, {
                mainAxis: m = !0,
                crossAxis: d = !0,
                fallbackPlacements: y,
                fallbackStrategy: f = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: h = !0,
                ..._
            } = tt(t, e);
            if ((n = a.arrow) != null && n.alignmentOffset) return {};
            const g = E(l),
                v = V(o),
                w = E(o) === o,
                b = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
                x = y || (w || !h ? [Q(o)] : qt(o)),
                N = p !== "none";
            !y && N && x.push(...Kt(o, h, p, b));
            const Bt = [o, ...x],
                st = await Lt(e, _),
                K = [];
            let j = ((i = a.flip) == null ? void 0 : i.overflows) || [];
            if (m && K.push(st[g]), d) {
                const M = Ut(l, s, b);
                K.push(st[M[0]], st[M[1]])
            }
            if (j = [...j, {
                    placement: l,
                    overflows: K
                }], !K.every(M => M <= 0)) {
                var mt, yt;
                const M = (((mt = a.flip) == null ? void 0 : mt.index) || 0) + 1,
                    pt = Bt[M];
                if (pt) return {
                    data: {
                        index: M,
                        overflows: j
                    },
                    reset: {
                        placement: pt
                    }
                };
                let U = (yt = j.filter(W => W.overflows[0] <= 0).sort((W, P) => W.overflows[1] - P.overflows[1])[0]) == null ? void 0 : yt.placement;
                if (!U) switch (f) {
                    case "bestFit":
                        {
                            var gt;
                            const W = (gt = j.filter(P => {
                                if (N) {
                                    const k = V(P.placement);
                                    return k === v || k === "y"
                                }
                                return !0
                            }).map(P => [P.placement, P.overflows.filter(k => k > 0).reduce((k, Nt) => k + Nt, 0)]).sort((P, k) => P[1] - k[1])[0]) == null ? void 0 : gt[0];W && (U = W);
                            break
                        }
                    case "initialPlacement":
                        U = o;
                        break
                }
                if (l !== U) return {
                    reset: {
                        placement: U
                    }
                }
            }
            return {}
        }
    }
};
async function Gt(t, e) {
    const {
        placement: n,
        platform: i,
        elements: l
    } = t, a = await (i.isRTL == null ? void 0 : i.isRTL(l.floating)), s = E(n), o = et(n), c = V(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, m = a && c ? -1 : 1, d = tt(e, t);
    let {
        mainAxis: y,
        crossAxis: f,
        alignmentAxis: p
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return o && typeof p == "number" && (f = o === "end" ? p * -1 : p), c ? {
        x: f * m,
        y: y * u
    } : {
        x: y * u,
        y: f * m
    }
}
const Yt = function(t) {
        return t === void 0 && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
                var n, i;
                const {
                    x: l,
                    y: a,
                    placement: s,
                    middlewareData: o
                } = e, c = await Gt(e, t);
                return s === ((n = o.offset) == null ? void 0 : n.placement) && (i = o.arrow) != null && i.alignmentOffset ? {} : {
                    x: l + c.x,
                    y: a + c.y,
                    data: { ...c,
                        placement: s
                    }
                }
            }
        }
    },
    te = function(t) {
        return t === void 0 && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
                const {
                    x: n,
                    y: i,
                    placement: l
                } = e, {
                    mainAxis: a = !0,
                    crossAxis: s = !1,
                    limiter: o = {
                        fn: _ => {
                            let {
                                x: g,
                                y: v
                            } = _;
                            return {
                                x: g,
                                y: v
                            }
                        }
                    },
                    ...c
                } = tt(t, e), u = {
                    x: n,
                    y: i
                }, m = await Lt(e, c), d = V(E(l)), y = Ct(d);
                let f = u[y],
                    p = u[d];
                if (a) {
                    const _ = y === "y" ? "top" : "left",
                        g = y === "y" ? "bottom" : "right",
                        v = f + m[_],
                        w = f - m[g];
                    f = ht(v, f, w)
                }
                if (s) {
                    const _ = d === "y" ? "top" : "left",
                        g = d === "y" ? "bottom" : "right",
                        v = p + m[_],
                        w = p - m[g];
                    p = ht(v, p, w)
                }
                const h = o.fn({ ...e,
                    [y]: f,
                    [d]: p
                });
                return { ...h,
                    data: {
                        x: h.x - n,
                        y: h.y - i,
                        enabled: {
                            [y]: a,
                            [d]: s
                        }
                    }
                }
            }
        }
    };

function nt() {
    return typeof window < "u"
}

function z(t) {
    return Ft(t) ? (t.nodeName || "").toLowerCase() : "#document"
}

function A(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}

function L(t) {
    var e;
    return (e = (Ft(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}

function Ft(t) {
    return nt() ? t instanceof Node || t instanceof A(t).Node : !1
}

function R(t) {
    return nt() ? t instanceof Element || t instanceof A(t).Element : !1
}

function S(t) {
    return nt() ? t instanceof HTMLElement || t instanceof A(t).HTMLElement : !1
}

function vt(t) {
    return !nt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof A(t).ShadowRoot
}

function X(t) {
    const {
        overflow: e,
        overflowX: n,
        overflowY: i,
        display: l
    } = C(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(l)
}

function ee(t) {
    return ["table", "td", "th"].includes(z(t))
}

function it(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    })
}

function ct(t) {
    const e = ut(),
        n = R(t) ? C(t) : t;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(i => (n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some(i => (n.contain || "").includes(i))
}

function ne(t) {
    let e = D(t);
    for (; S(e) && !$(e);) {
        if (ct(e)) return e;
        if (it(e)) return null;
        e = D(e)
    }
    return null
}

function ut() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function $(t) {
    return ["html", "body", "#document"].includes(z(t))
}

function C(t) {
    return A(t).getComputedStyle(t)
}

function lt(t) {
    return R(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}

function D(t) {
    if (z(t) === "html") return t;
    const e = t.assignedSlot || t.parentNode || vt(t) && t.host || L(t);
    return vt(e) ? e.host : e
}

function Pt(t) {
    const e = D(t);
    return $(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : S(e) && X(e) ? e : Pt(e)
}

function q(t, e, n) {
    var i;
    e === void 0 && (e = []), n === void 0 && (n = !0);
    const l = Pt(t),
        a = l === ((i = t.ownerDocument) == null ? void 0 : i.body),
        s = A(l);
    if (a) {
        const o = rt(s);
        return e.concat(s, s.visualViewport || [], X(l) ? l : [], o && n ? q(o) : [])
    }
    return e.concat(l, q(l, [], n))
}

function rt(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}

function kt(t) {
    const e = C(t);
    let n = parseFloat(e.width) || 0,
        i = parseFloat(e.height) || 0;
    const l = S(t),
        a = l ? t.offsetWidth : n,
        s = l ? t.offsetHeight : i,
        o = J(n) !== a || J(i) !== s;
    return o && (n = a, i = s), {
        width: n,
        height: i,
        $: o
    }
}

function dt(t) {
    return R(t) ? t : t.contextElement
}

function H(t) {
    const e = dt(t);
    if (!S(e)) return O(1);
    const n = e.getBoundingClientRect(),
        {
            width: i,
            height: l,
            $: a
        } = kt(e);
    let s = (a ? J(n.width) : n.width) / i,
        o = (a ? J(n.height) : n.height) / l;
    return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), {
        x: s,
        y: o
    }
}
const ie = O(0);

function Dt(t) {
    const e = A(t);
    return !ut() || !e.visualViewport ? ie : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}

function le(t, e, n) {
    return e === void 0 && (e = !1), !n || e && n !== A(t) ? !1 : e
}

function B(t, e, n, i) {
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    const l = t.getBoundingClientRect(),
        a = dt(t);
    let s = O(1);
    e && (i ? R(i) && (s = H(i)) : s = H(t));
    const o = le(a, n, i) ? Dt(a) : O(0);
    let c = (l.left + o.x) / s.x,
        u = (l.top + o.y) / s.y,
        m = l.width / s.x,
        d = l.height / s.y;
    if (a) {
        const y = A(a),
            f = i && R(i) ? A(i) : i;
        let p = y,
            h = rt(p);
        for (; h && i && f !== p;) {
            const _ = H(h),
                g = h.getBoundingClientRect(),
                v = C(h),
                w = g.left + (h.clientLeft + parseFloat(v.paddingLeft)) * _.x,
                b = g.top + (h.clientTop + parseFloat(v.paddingTop)) * _.y;
            c *= _.x, u *= _.y, m *= _.x, d *= _.y, c += w, u += b, p = A(h), h = rt(p)
        }
    }
    return G({
        width: m,
        height: d,
        x: c,
        y: u
    })
}

function ft(t, e) {
    const n = lt(t).scrollLeft;
    return e ? e.left + n : B(L(t)).left + n
}

function Mt(t, e, n) {
    n === void 0 && (n = !1);
    const i = t.getBoundingClientRect(),
        l = i.left + e.scrollLeft - (n ? 0 : ft(t, i)),
        a = i.top + e.scrollTop;
    return {
        x: l,
        y: a
    }
}

function se(t) {
    let {
        elements: e,
        rect: n,
        offsetParent: i,
        strategy: l
    } = t;
    const a = l === "fixed",
        s = L(i),
        o = e ? it(e.floating) : !1;
    if (i === s || o && a) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = O(1);
    const m = O(0),
        d = S(i);
    if ((d || !d && !a) && ((z(i) !== "body" || X(s)) && (c = lt(i)), S(i))) {
        const f = B(i);
        u = H(i), m.x = f.x + i.clientLeft, m.y = f.y + i.clientTop
    }
    const y = s && !d && !a ? Mt(s, c, !0) : O(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + m.x + y.x,
        y: n.y * u.y - c.scrollTop * u.y + m.y + y.y
    }
}

function ae(t) {
    return Array.from(t.getClientRects())
}

function oe(t) {
    const e = L(t),
        n = lt(t),
        i = t.ownerDocument.body,
        l = T(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
        a = T(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
    let s = -n.scrollLeft + ft(t);
    const o = -n.scrollTop;
    return C(i).direction === "rtl" && (s += T(e.clientWidth, i.clientWidth) - l), {
        width: l,
        height: a,
        x: s,
        y: o
    }
}

function re(t, e) {
    const n = A(t),
        i = L(t),
        l = n.visualViewport;
    let a = i.clientWidth,
        s = i.clientHeight,
        o = 0,
        c = 0;
    if (l) {
        a = l.width, s = l.height;
        const u = ut();
        (!u || u && e === "fixed") && (o = l.offsetLeft, c = l.offsetTop)
    }
    return {
        width: a,
        height: s,
        x: o,
        y: c
    }
}

function ce(t, e) {
    const n = B(t, !0, e === "fixed"),
        i = n.top + t.clientTop,
        l = n.left + t.clientLeft,
        a = S(t) ? H(t) : O(1),
        s = t.clientWidth * a.x,
        o = t.clientHeight * a.y,
        c = l * a.x,
        u = i * a.y;
    return {
        width: s,
        height: o,
        x: c,
        y: u
    }
}

function wt(t, e, n) {
    let i;
    if (e === "viewport") i = re(t, n);
    else if (e === "document") i = oe(L(t));
    else if (R(e)) i = ce(e, n);
    else {
        const l = Dt(t);
        i = {
            x: e.x - l.x,
            y: e.y - l.y,
            width: e.width,
            height: e.height
        }
    }
    return G(i)
}

function Tt(t, e) {
    const n = D(t);
    return n === e || !R(n) || $(n) ? !1 : C(n).position === "fixed" || Tt(n, e)
}

function ue(t, e) {
    const n = e.get(t);
    if (n) return n;
    let i = q(t, [], !1).filter(o => R(o) && z(o) !== "body"),
        l = null;
    const a = C(t).position === "fixed";
    let s = a ? D(t) : t;
    for (; R(s) && !$(s);) {
        const o = C(s),
            c = ct(s);
        !c && o.position === "fixed" && (l = null), (a ? !c && !l : !c && o.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || X(s) && !c && Tt(t, s)) ? i = i.filter(m => m !== s) : l = o, s = D(s)
    }
    return e.set(t, i), i
}

function de(t) {
    let {
        element: e,
        boundary: n,
        rootBoundary: i,
        strategy: l
    } = t;
    const s = [...n === "clippingAncestors" ? it(e) ? [] : ue(e, this._c) : [].concat(n), i],
        o = s[0],
        c = s.reduce((u, m) => {
            const d = wt(e, m, l);
            return u.top = T(d.top, u.top), u.right = I(d.right, u.right), u.bottom = I(d.bottom, u.bottom), u.left = T(d.left, u.left), u
        }, wt(e, o, l));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function fe(t) {
    const {
        width: e,
        height: n
    } = kt(t);
    return {
        width: e,
        height: n
    }
}

function me(t, e, n) {
    const i = S(e),
        l = L(e),
        a = n === "fixed",
        s = B(t, !0, a, e);
    let o = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = O(0);
    if (i || !i && !a)
        if ((z(e) !== "body" || X(l)) && (o = lt(e)), i) {
            const y = B(e, !0, a, e);
            c.x = y.x + e.clientLeft, c.y = y.y + e.clientTop
        } else l && (c.x = ft(l));
    const u = l && !i && !a ? Mt(l, o) : O(0),
        m = s.left + o.scrollLeft - c.x - u.x,
        d = s.top + o.scrollTop - c.y - u.y;
    return {
        x: m,
        y: d,
        width: s.width,
        height: s.height
    }
}

function at(t) {
    return C(t).position === "static"
}

function xt(t, e) {
    if (!S(t) || C(t).position === "fixed") return null;
    if (e) return e(t);
    let n = t.offsetParent;
    return L(t) === n && (n = n.ownerDocument.body), n
}

function Et(t, e) {
    const n = A(t);
    if (it(t)) return n;
    if (!S(t)) {
        let l = D(t);
        for (; l && !$(l);) {
            if (R(l) && !at(l)) return l;
            l = D(l)
        }
        return n
    }
    let i = xt(t, e);
    for (; i && ee(i) && at(i);) i = xt(i, e);
    return i && $(i) && at(i) && !ct(i) ? n : i || ne(t) || n
}
const ye = async function(t) {
    const e = this.getOffsetParent || Et,
        n = this.getDimensions,
        i = await n(t.floating);
    return {
        reference: me(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: i.width,
            height: i.height
        }
    }
};

function ge(t) {
    return C(t).direction === "rtl"
}
const pe = {
    convertOffsetParentRelativeRectToViewportRelativeRect: se,
    getDocumentElement: L,
    getClippingRect: de,
    getOffsetParent: Et,
    getElementRects: ye,
    getClientRects: ae,
    getDimensions: fe,
    getScale: H,
    isElement: R,
    isRTL: ge
};

function he(t, e) {
    let n = null,
        i;
    const l = L(t);

    function a() {
        var o;
        clearTimeout(i), (o = n) == null || o.disconnect(), n = null
    }

    function s(o, c) {
        o === void 0 && (o = !1), c === void 0 && (c = 1), a();
        const {
            left: u,
            top: m,
            width: d,
            height: y
        } = t.getBoundingClientRect();
        if (o || e(), !d || !y) return;
        const f = Z(m),
            p = Z(l.clientWidth - (u + d)),
            h = Z(l.clientHeight - (m + y)),
            _ = Z(u),
            v = {
                rootMargin: -f + "px " + -p + "px " + -h + "px " + -_ + "px",
                threshold: T(0, I(1, c)) || 1
            };
        let w = !0;

        function b(x) {
            const N = x[0].intersectionRatio;
            if (N !== c) {
                if (!w) return s();
                N ? s(!1, N) : i = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            w = !1
        }
        try {
            n = new IntersectionObserver(b, { ...v,
                root: l.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(b, v)
        }
        n.observe(t)
    }
    return s(!0), a
}

function Ae(t, e, n, i) {
    i === void 0 && (i = {});
    const {
        ancestorScroll: l = !0,
        ancestorResize: a = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: o = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = i, u = dt(t), m = l || a ? [...u ? q(u) : [], ...q(e)] : [];
    m.forEach(g => {
        l && g.addEventListener("scroll", n, {
            passive: !0
        }), a && g.addEventListener("resize", n)
    });
    const d = u && o ? he(u, n) : null;
    let y = -1,
        f = null;
    s && (f = new ResizeObserver(g => {
        let [v] = g;
        v && v.target === u && f && (f.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
            var w;
            (w = f) == null || w.observe(e)
        })), n()
    }), u && !c && f.observe(u), f.observe(e));
    let p, h = c ? B(t) : null;
    c && _();

    function _() {
        const g = B(t);
        h && (g.x !== h.x || g.y !== h.y || g.width !== h.width || g.height !== h.height) && n(), h = g, p = requestAnimationFrame(_)
    }
    return n(), () => {
        var g;
        m.forEach(v => {
            l && v.removeEventListener("scroll", n), a && v.removeEventListener("resize", n)
        }), d == null || d(), (g = f) == null || g.disconnect(), f = null, c && cancelAnimationFrame(p)
    }
}
const Re = Yt,
    Ce = te,
    Oe = Qt,
    Se = (t, e, n) => {
        const i = new Map,
            l = {
                platform: pe,
                ...n
            },
            a = { ...l.platform,
                _c: i
            };
        return Jt(t, e, { ...l,
            platform: a
        })
    };
export {
    bt as A, At as B, Vt as D, be as M, Rt as W, Ae as a, ve as b, Se as c, _e as d, xe as e, Oe as f, we as g, Ht as h, Y as m, Re as o, Ce as s
};
//# sourceMappingURL=food-link.svelte_svelte_type_style_lang.cT7JjgFG.js.map