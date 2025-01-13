"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [88014], {
        88014: function(n, e, t) {
            function Diff() {}
            t.d(e, {
                NV: function() {
                    return diffWords
                }
            }), Diff.prototype = {
                diff: function(n, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = t.callback;
                    "function" == typeof t && (o = t, t = {}), this.options = t;
                    var i = this;

                    function done(n) {
                        return o ? (setTimeout(function() {
                            o(void 0, n)
                        }, 0), !0) : n
                    }
                    n = this.castInput(n), e = this.castInput(e), n = this.removeEmpty(this.tokenize(n));
                    var r = (e = this.removeEmpty(this.tokenize(e))).length,
                        u = n.length,
                        s = 1,
                        f = r + u;
                    t.maxEditLength && (f = Math.min(f, t.maxEditLength));
                    var c = [{
                            newPos: -1,
                            components: []
                        }],
                        a = this.extractCommon(c[0], e, n, 0);
                    if (c[0].newPos + 1 >= r && a + 1 >= u) return done([{
                        value: this.join(e),
                        count: e.length
                    }]);

                    function execEditLength() {
                        for (var t = -1 * s; t <= s; t += 2) {
                            var o = void 0,
                                f = c[t - 1],
                                a = c[t + 1],
                                p = (a ? a.newPos : 0) - t;
                            f && (c[t - 1] = void 0);
                            var l = f && f.newPos + 1 < r,
                                h = a && 0 <= p && p < u;
                            if (!l && !h) {
                                c[t] = void 0;
                                continue
                            }
                            if (!l || h && f.newPos < a.newPos ? (o = {
                                    newPos: a.newPos,
                                    components: a.components.slice(0)
                                }, i.pushComponent(o.components, void 0, !0)) : (o = f, o.newPos++, i.pushComponent(o.components, !0, void 0)), p = i.extractCommon(o, e, n, t), o.newPos + 1 >= r && p + 1 >= u) return done(function(n, e, t, o, i) {
                                for (var r = 0, u = e.length, s = 0, f = 0; r < u; r++) {
                                    var c = e[r];
                                    if (c.removed) {
                                        if (c.value = n.join(o.slice(f, f + c.count)), f += c.count, r && e[r - 1].added) {
                                            var a = e[r - 1];
                                            e[r - 1] = e[r], e[r] = a
                                        }
                                    } else {
                                        if (!c.added && i) {
                                            var p = t.slice(s, s + c.count);
                                            p = p.map(function(n, e) {
                                                var t = o[f + e];
                                                return t.length > n.length ? t : n
                                            }), c.value = n.join(p)
                                        } else c.value = n.join(t.slice(s, s + c.count));
                                        s += c.count, c.added || (f += c.count)
                                    }
                                }
                                var l = e[u - 1];
                                return u > 1 && "string" == typeof l.value && (l.added || l.removed) && n.equals("", l.value) && (e[u - 2].value += l.value, e.pop()), e
                            }(i, o.components, e, n, i.useLongestToken));
                            c[t] = o
                        }
                        s++
                    }
                    if (o) ! function exec() {
                        setTimeout(function() {
                            if (s > f) return o();
                            execEditLength() || exec()
                        }, 0)
                    }();
                    else
                        for (; s <= f;) {
                            var p = execEditLength();
                            if (p) return p
                        }
                },
                pushComponent: function(n, e, t) {
                    var o = n[n.length - 1];
                    o && o.added === e && o.removed === t ? n[n.length - 1] = {
                        count: o.count + 1,
                        added: e,
                        removed: t
                    } : n.push({
                        count: 1,
                        added: e,
                        removed: t
                    })
                },
                extractCommon: function(n, e, t, o) {
                    for (var i = e.length, r = t.length, u = n.newPos, s = u - o, f = 0; u + 1 < i && s + 1 < r && this.equals(e[u + 1], t[s + 1]);) u++, s++, f++;
                    return f && n.components.push({
                        count: f
                    }), n.newPos = u, s
                },
                equals: function(n, e) {
                    return this.options.comparator ? this.options.comparator(n, e) : n === e || this.options.ignoreCase && n.toLowerCase() === e.toLowerCase()
                },
                removeEmpty: function(n) {
                    for (var e = [], t = 0; t < n.length; t++) n[t] && e.push(n[t]);
                    return e
                },
                castInput: function(n) {
                    return n
                },
                tokenize: function(n) {
                    return n.split("")
                },
                join: function(n) {
                    return n.join("")
                }
            }, new Diff;
            var o = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
                i = /\S/,
                r = new Diff;

            function diffWords(n, e, t) {
                return t = function(n, e) {
                    if ("function" == typeof n) e.callback = n;
                    else if (n)
                        for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                    return e
                }(t, {
                    ignoreWhitespace: !0
                }), r.diff(n, e, t)
            }
            r.equals = function(n, e) {
                return this.options.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()), n === e || this.options.ignoreWhitespace && !i.test(n) && !i.test(e)
            }, r.tokenize = function(n) {
                for (var e = n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), t = 0; t < e.length - 1; t++) !e[t + 1] && e[t + 2] && o.test(e[t]) && o.test(e[t + 2]) && (e[t] += e[t + 2], e.splice(t + 1, 2), t--);
                return e
            };
            var u = new Diff;

            function _typeof(n) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(n)
            }
            u.tokenize = function(n) {
                var e = [],
                    t = n.split(/(\n|\r\n)/);
                t[t.length - 1] || t.pop();
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    o % 2 && !this.options.newlineIsToken ? e[e.length - 1] += i : (this.options.ignoreWhitespace && (i = i.trim()), e.push(i))
                }
                return e
            }, new Diff().tokenize = function(n) {
                return n.split(/(\S.+?[.!?])(?=\s+|$)/)
            }, new Diff().tokenize = function(n) {
                return n.split(/([{}:;,]|\s+)/)
            };
            var s = Object.prototype.toString,
                f = new Diff;
            f.useLongestToken = !0, f.tokenize = u.tokenize, f.castInput = function(n) {
                var e = this.options,
                    t = e.undefinedReplacement,
                    o = e.stringifyReplacer,
                    i = void 0 === o ? function(n, e) {
                        return void 0 === e ? t : e
                    } : o;
                return "string" == typeof n ? n : JSON.stringify(function canonicalize(n, e, t, o, i) {
                    for (e = e || [], t = t || [], o && (n = o(i, n)), r = 0; r < e.length; r += 1)
                        if (e[r] === n) return t[r];
                    if ("[object Array]" === s.call(n)) {
                        for (e.push(n), u = Array(n.length), t.push(u), r = 0; r < n.length; r += 1) u[r] = canonicalize(n[r], e, t, o, i);
                        return e.pop(), t.pop(), u
                    }
                    if (n && n.toJSON && (n = n.toJSON()), "object" === _typeof(n) && null !== n) {
                        e.push(n), u = {}, t.push(u);
                        var r, u, f, c = [];
                        for (f in n) n.hasOwnProperty(f) && c.push(f);
                        for (c.sort(), r = 0; r < c.length; r += 1) u[f = c[r]] = canonicalize(n[f], e, t, o, f);
                        e.pop(), t.pop()
                    } else u = n;
                    return u
                }(n, null, null, i), i, "  ")
            }, f.equals = function(n, e) {
                return Diff.prototype.equals.call(f, n.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"))
            };
            var c = new Diff;
            c.tokenize = function(n) {
                return n.slice()
            }, c.join = c.removeEmpty = function(n) {
                return n
            }
        }
    }
]);