/*-=- Contents of scripts/core.bundle.js -=-*/

/*-=- Contents of scripts/lib/jquery.min.js -=-*/

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {}, p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        }, q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        }, _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(x(e), n)
            })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
            w = e.document,
            T = 0,
            C = 0,
            N = st(),
            k = st(),
            E = st(),
            S = !1,
            A = function(e, t) {
                return e === t ? (S = !0, 0) : 0
            }, j = typeof t,
            D = 1 << 31,
            L = {}.hasOwnProperty,
            H = [],
            q = H.pop,
            _ = H.push,
            M = H.push,
            O = H.slice,
            F = H.indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            W = R.replace("w", "w#"),
            $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
            I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
            z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            X = RegExp("^" + P + "*," + P + "*"),
            U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            V = RegExp(P + "*[+~]"),
            Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
            J = RegExp(I),
            G = RegExp("^" + W + "$"),
            Q = {
                ID: RegExp("^#(" + R + ")"),
                CLASS: RegExp("^\\.(" + R + ")"),
                TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + $),
                PSEUDO: RegExp("^" + I),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: RegExp("^(?:" + B + ")$", "i"),
                needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i,
            tt = /^h\d$/i,
            nt = /'|\\/g,
            rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
            it = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (l = t.nodeType) && 9 !== l) return [];
            if (h && !i) {
                if (o = Z.exec(e))
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s), !a || !a.parentNode) return n;
                            if (a.id === s) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                    } else {
                        if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                    }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--) c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x) try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }
            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"),
                r = e.length;
            while (r--) o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function(t) {
                return t = +t, lt(function(n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w,
                i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }), r.attributes = ut(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function(e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, A = d.compareDocumentPosition ? function(e, t) {
                if (e === t) return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function(e, t) {
                var r, i = 0,
                    o = e.parentNode,
                    a = t.parentNode,
                    s = [e],
                    l = [t];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a) return pt(e, t);
                r = e;
                while (r = r.parentNode) s.unshift(r);
                r = t;
                while (r = r.parentNode) l.unshift(r);
                while (s[i] === l[i]) i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function(e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (i) {}
            return at(t, f, null, [e]).length > 0
        }, at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()],
                a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++]) t === e[o] && (i = n.push(o));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += a(t);
            return n
        }, o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t),
                            a = o.length;
                        while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = [],
                        n = [],
                        r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        }, o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) o.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) o.pseudos[n] = dt(n);

        function gt() {}
        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir,
                o = n && "parentNode" === r,
                a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return e(t, n, i)
            } : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i) return l === !0
                            } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
            }
        }

        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [],
                s = 0,
                l = e.length,
                u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                var u, c, p, f = [],
                    d = [],
                    h = a.length,
                    g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !o && t ? g : xt(g, f, e, s, l),
                    y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length,
                a = o.relative[e[0].type],
                s = a || o.relative[" "],
                l = a ? 1 : 0,
                c = vt(function(e) {
                    return e === t
                }, s, !0),
                p = vt(function(e) {
                    return F.call(t, e) > -1
                }, s, !0),
                f = [
                    function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }
                ];
            for (; i > l; l++)
                if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                        for (r = ++l; i > r; r++)
                            if (o.relative[e[r].type]) break;
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0,
                r = t.length > 0,
                a = e.length > 0,
                s = function(s, l, c, p, d) {
                    var h, g, m, y = [],
                        v = 0,
                        b = "0",
                        x = s && [],
                        w = null != d,
                        C = u,
                        N = s || a && o.find.TAG("*", d && l.parentNode || l),
                        k = T += null == C ? 1 : Math.random() || .1;
                    for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                        if (a && h) {
                            g = 0;
                            while (m = e[g++])
                                if (m(h, l, c)) {
                                    p.push(h);
                                    break
                                }
                            w && (T = k, i = ++n)
                        }
                        r && ((h = !m && h) && v--, s && x.push(h))
                    }
                    if (v += b, r && b !== v) {
                        g = 0;
                        while (m = t[g++]) m(x, y, l, c);
                        if (s) {
                            if (v > 0)
                                while (b--) x[b] || y[b] || (y[b] = q.call(p));
                            y = xt(y)
                        }
                        M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                    }
                    return w && (T = k, u = C), x
                };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };

        function Nt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; i > r; r++) at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type]) break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }
        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            }, p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                ["notify", "progress", x.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !! d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !! r.style.cssFloat, t.checkOn = !! o.value, t.optSelected = u.selected, t.enctype = !! a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !! e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        }, Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Kt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {}, y = {}, v = {}, b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !! Rn && "withCredentials" in Rn, Rn = x.support.ajax = !! Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
                                else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Yn.exec(t),
                        o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                        a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {}, p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            }, a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {}, c = {}, p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);


/*-=- Contents of scripts/lib/jquery-migrate.min.js -=-*/

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
function(e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }

    function a(t, a, i, o) {
        if (Object.defineProperty) try {
            return Object.defineProperty(t, a, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return r(o), i
                },
                set: function(e) {
                    r(o), i = e
                }
            }), n
        } catch (s) {}
        e._definePropertyBroken = !0, t[a] = i
    }
    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
        i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {
        size: 1
    }).attr("size") && e.attrFn,
        s = e.attr,
        u = e.attrHooks.value && e.attrHooks.value.get || function() {
            return null
        }, c = e.attrHooks.value && e.attrHooks.value.set || function() {
            return n
        }, l = /^(?:input|button)$/i,
        d = /^[238]$/,
        p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
        var c = a.toLowerCase(),
            g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
            get: function(t, r) {
                var a, i = e.prop(t, r);
                return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function(t, n, r) {
                var a;
                return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
            }
        }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    }, e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        },
        set: function(e, t) {
            var a = (e.nodeName || "").toLowerCase();
            return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
        }
    };
    var g, h, v = e.fn.init,
        m = e.parseJSON,
        y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var b = e.fn.data;
    e.fn.data = function(t) {
        var a, i, o = this[0];
        return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i,
        w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function() {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, e.clean || (e.clean = function(t, a, i, o) {
        a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), i)
            for (c = function(e) {
                return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
            }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add,
        x = e.event.remove,
        k = e.event.trigger,
        N = e.fn.toggle,
        T = e.fn.live,
        M = e.fn.die,
        S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        C = RegExp("\\b(?:" + S + ")\\b"),
        H = /(?:^|\s)hover(\.\S+|)\b/,
        A = function(t) {
            return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
        };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
        e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
    }, e.event.remove = function(e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    }, e.fn.error = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments,
            i = t.guid || e.guid++,
            o = 0,
            s = function(n) {
                var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
            };
        for (s.guid = i; a.length > o;) a[o++].guid = i;
        return this.click(s)
    }, e.fn.live = function(t, n, a) {
        return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function(t, n) {
        return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, a) {
        return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
    }, e.each(S.split("|"), function(t, n) {
        e.event.special[n] = {
            setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                    e.event.trigger(n, null, t, !0)
                }), e._data(this, n, e.guid++)), !1
            },
            teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
            }
        }
    })
}(jQuery, window);

/*-=- Contents of scripts/lib/jquery-ui.min.js -=-*/

/*! jQuery UI - v1.10.1 - 2013-02-15
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
 * Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

(function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !! o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0,
        r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.10.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return typeof t == "number" ? this.each(function() {
                var r = this;
                setTimeout(function() {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            s = r.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        }
    })
})(jQuery);
(function(e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function(t, n, r) {
        var i, s, o, u, a = {}, f = t.split(".")[0];
        t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return
            }
            a[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }, i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }()
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function(n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    })
})(jQuery);
(function(e, t) {
    var n = !1;
    e(document).mouseup(function() {
        n = !1
    }), e.widget("ui.mouse", {
        version: "1.10.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which === 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(e, t) {
    function h(e, t, n) {
        return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
    }

    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }

    function d(t) {
        var n = t[0];
        return n.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(n) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : n.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: n.pageY,
                left: n.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var n, r = Math.max,
        i = Math.abs,
        s = Math.round,
        o = /left|center|right/,
        u = /top|center|bottom/,
        a = /[\+\-]\d+(\.[\d]+)?%?/,
        f = /^\w+/,
        l = /%$/,
        c = e.fn.position;
    e.position = {
        scrollbarWidth: function() {
            if (n !== t) return n;
            var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                o = s.children()[0];
            return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
        },
        getScrollInfo: function(t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x"),
                r = t.isWindow ? "" : t.element.css("overflow-y"),
                i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth() : 0,
                height: s ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var n = e(t || window),
                r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width() : n.outerWidth(),
                height: r ? n.height() : n.outerHeight()
            }
        }
    }, e.fn.position = function(t) {
        if (!t || !t.of) return c.apply(this, arguments);
        t = e.extend({}, t);
        var n, l, v, m, g, y, b = e(t.of),
            w = e.position.getWithinInfo(t.within),
            E = e.position.getScrollInfo(w),
            S = (t.collision || "flip").split(" "),
            x = {};
        return y = d(b), b[0].preventDefault && (t.at = "left top"), l = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function() {
            var e = (t[this] || "").split(" "),
                n, r;
            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), x[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
        }), S.length === 1 && (S[1] = S[0]), t.at[0] === "right" ? g.left += l : t.at[0] === "center" && (g.left += l / 2), t.at[1] === "bottom" ? g.top += v : t.at[1] === "center" && (g.top += v / 2), n = h(x.at, l, v), g.left += n[0], g.top += n[1], this.each(function() {
            var o, u, a = e(this),
                f = a.outerWidth(),
                c = a.outerHeight(),
                d = p(this, "marginLeft"),
                y = p(this, "marginTop"),
                T = f + d + p(this, "marginRight") + E.width,
                N = c + y + p(this, "marginBottom") + E.height,
                C = e.extend({}, g),
                k = h(x.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                marginLeft: d,
                marginTop: y
            }, e.each(["left", "top"], function(r, i) {
                e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
                    targetWidth: l,
                    targetHeight: v,
                    elemWidth: f,
                    elemHeight: c,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [n[0] + k[0], n[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: w,
                    elem: a
                })
            }), t.using && (u = function(e) {
                var n = m.left - C.left,
                    s = n + l - f,
                    o = m.top - C.top,
                    u = o + v - c,
                    h = {
                        target: {
                            element: b,
                            left: m.left,
                            top: m.top,
                            width: l,
                            height: v
                        },
                        element: {
                            element: a,
                            left: C.left,
                            top: C.top,
                            width: f,
                            height: c
                        },
                        horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                        vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                    };
                l < f && i(n + s) < l && (h.horizontal = "center"), v < c && i(o + u) < v && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
            }), a.offset(e.extend(C, {
                using: u
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function(e, t) {
                var n = t.within,
                    i = n.isWindow ? n.scrollLeft : n.offset.left,
                    s = n.width,
                    o = e.left - t.collisionPosition.marginLeft,
                    u = i - o,
                    a = o + t.collisionWidth - s - i,
                    f;
                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
            },
            top: function(e, t) {
                var n = t.within,
                    i = n.isWindow ? n.scrollTop : n.offset.top,
                    s = t.within.height,
                    o = e.top - t.collisionPosition.marginTop,
                    u = i - o,
                    a = o + t.collisionHeight - s - i,
                    f;
                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
            }
        },
        flip: {
            left: function(e, t) {
                var n = t.within,
                    r = n.offset.left + n.scrollLeft,
                    s = n.width,
                    o = n.isWindow ? n.scrollLeft : n.offset.left,
                    u = e.left - t.collisionPosition.marginLeft,
                    a = u - o,
                    f = u + t.collisionWidth - s - o,
                    l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                    c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                    h = -2 * t.offset[0],
                    p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - s - r;
                    if (p < 0 || p < i(a)) e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                    if (d > 0 || i(d) < f) e.left += l + c + h
                }
            },
            top: function(e, t) {
                var n = t.within,
                    r = n.offset.top + n.scrollTop,
                    s = n.height,
                    o = n.isWindow ? n.scrollTop : n.offset.top,
                    u = e.top - t.collisionPosition.marginTop,
                    a = u - o,
                    f = u + t.collisionHeight - s - o,
                    l = t.my[1] === "top",
                    c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                    h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                    p = -2 * t.offset[1],
                    d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function() {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
            u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r) t.style[s] = r[s];
        t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
    }()
})(jQuery);
(function(e, t) {
    var n = 0,
        r = {}, i = {};
    r.height = r.paddingTop = r.paddingBottom = r.borderTopWidth = r.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", {
        version: "1.10.1",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), !t.collapsible && (t.active === !1 || t.active == null) && (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e(),
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this.options.heightStyle !== "content" && e.css("height", "")
        },
        _setOption: function(e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            e === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), e === "collapsible" && !t && this.options.active === !1 && this._activate(0), e === "icons" && (this._destroyIcons(), t && this._createIcons()), e === "disabled" && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !! t)
        },
        _keydown: function(t) {
            if (t.altKey || t.ctrlKey) return;
            var n = e.ui.keyCode,
                r = this.headers.length,
                i = this.headers.index(t.target),
                s = !1;
            switch (t.keyCode) {
                case n.RIGHT:
                case n.DOWN:
                    s = this.headers[(i + 1) % r];
                    break;
                case n.LEFT:
                case n.UP:
                    s = this.headers[(i - 1 + r) % r];
                    break;
                case n.SPACE:
                case n.ENTER:
                    this._eventHandler(t);
                    break;
                case n.HOME:
                    s = this.headers[0];
                    break;
                case n.END:
                    s = this.headers[r - 1]
            }
            s && (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
        },
        _panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels();
            if (t.active === !1 && t.collapsible === !0 || !this.headers.length) t.active = !1, this.active = e();
            t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var t, r = this.options,
                i = r.heightStyle,
                s = this.element.parent(),
                o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++n);
            this.active = this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(t) {
                var n = e(this),
                    r = n.attr("id"),
                    i = n.next(),
                    s = i.attr("id");
                r || (r = o + "-header-" + t, n.attr("id", r)), s || (s = o + "-panel-" + t, i.attr("id", s)), n.attr("aria-controls", s), i.attr("aria-labelledby", r)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(r.event), i === "fill" ? (t = s.height(), this.element.siblings(":visible").each(function() {
                var n = e(this),
                    r = n.css("position");
                if (r === "absolute" || r === "fixed") return;
                t -= n.outerHeight(!0)
            }), this.headers.each(function() {
                t -= e(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : i === "auto" && (t = 0, this.headers.next().each(function() {
                t = Math.max(t, e(this).css("height", "").height())
            }).height(t))
        },
        _activate: function(t) {
            var n = this._findActive(t)[0];
            if (n === this.active[0]) return;
            n = n || this.active[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function(t) {
            return typeof t == "number" ? this.headers.eq(t) : e()
        },
        _setupEvents: function(t) {
            var n = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i[0] === r[0],
                o = s && n.collapsible,
                u = o ? e() : i.next(),
                a = r.next(),
                f = {
                    oldHeader: r,
                    oldPanel: a,
                    newHeader: o ? e() : i,
                    newPanel: u
                };
            t.preventDefault();
            if (s && !n.collapsible || this._trigger("beforeActivate", t, f) === !1) return;
            n.active = o ? !1 : this.headers.index(i), this.active = s ? e() : i, this._toggle(f), r.removeClass("ui-accordion-header-active ui-state-active"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), i.next().addClass("ui-accordion-content-active"))
        },
        _toggle: function(t) {
            var n = t.newPanel,
                r = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = r, this.options.animate ? this._animate(n, r, t) : (r.hide(), n.show(), this._toggleComplete(t)), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), r.prev().attr("aria-selected", "false"), n.length && r.length ? r.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function() {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), n.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(e, t, n) {
            var s, o, u, a = this,
                f = 0,
                l = e.length && (!t.length || e.index() < t.index()),
                c = this.options.animate || {}, h = l && c.down || c,
                p = function() {
                    a._toggleComplete(n)
                };
            typeof h == "number" && (u = h), typeof h == "string" && (o = h), o = o || h.easing || c.easing, u = u || h.duration || c.duration;
            if (!t.length) return e.animate(i, u, o, p);
            if (!e.length) return t.animate(r, u, o, p);
            s = e.show().outerHeight(), t.animate(r, {
                duration: u,
                easing: o,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(i, {
                duration: u,
                easing: o,
                complete: p,
                step: function(e, n) {
                    n.now = Math.round(e), n.prop !== "height" ? f += n.now : a.options.heightStyle !== "content" && (n.now = Math.round(s - t.outerHeight() - f), f = 0)
                }
            })
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    })
})(jQuery);
(function(e, t) {
    var n = 0;
    e.widget("ui.autocomplete", {
        version: "1.10.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var t, n, r, i = this.element[0].nodeName.toLowerCase(),
                s = i === "textarea",
                o = i === "input";
            this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(i) {
                    if (this.element.prop("readOnly")) {
                        t = !0, r = !0, n = !0;
                        return
                    }
                    t = !1, r = !1, n = !1;
                    var s = e.ui.keyCode;
                    switch (i.keyCode) {
                        case s.PAGE_UP:
                            t = !0, this._move("previousPage", i);
                            break;
                        case s.PAGE_DOWN:
                            t = !0, this._move("nextPage", i);
                            break;
                        case s.UP:
                            t = !0, this._keyEvent("previous", i);
                            break;
                        case s.DOWN:
                            t = !0, this._keyEvent("next", i);
                            break;
                        case s.ENTER:
                        case s.NUMPAD_ENTER:
                            this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                            break;
                        case s.TAB:
                            this.menu.active && this.menu.select(i);
                            break;
                        case s.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                            break;
                        default:
                            n = !0, this._searchTimeout(i)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1, r.preventDefault();
                        return
                    }
                    if (n) return;
                    var i = e.ui.keyCode;
                    switch (r.keyCode) {
                        case i.PAGE_UP:
                            this._move("previousPage", r);
                            break;
                        case i.PAGE_DOWN:
                            this._move("nextPage", r);
                            break;
                        case i.UP:
                            this._keyEvent("previous", r);
                            break;
                        case i.DOWN:
                            this._keyEvent("next", r)
                    }
                },
                input: function(e) {
                    if (r) {
                        r = !1, e.preventDefault();
                        return
                    }
                    this._searchTimeout(e)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching), this.close(e), this._change(e)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                input: e(),
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var n = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                        })
                    })
                },
                menufocus: function(t, n) {
                    if (this.isNewMenu) {
                        this.isNewMenu = !1;
                        if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                            this.menu.blur(), this.document.one("mousemove", function() {
                                e(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                    }
                    var r = n.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: r
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                },
                menuselect: function(e, t) {
                    var n = t.item.data("ui-autocomplete-item"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r, this.selectedItem = n
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this._appendTo()), e === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, n, r = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                r(e.ui.autocomplete.filter(t, n.term))
            }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function(t, i) {
                r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        i(e)
                    },
                    error: function() {
                        i([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            e = e != null ? e : this._value(), this.term = this._value();
            if (e.length < this.options.minLength) return this.close(t);
            if (this._trigger("search", t) === !1) return;
            return this._search(e)
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this,
                t = ++n;
            return function(r) {
                t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty();
            this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var r = this;
            e.each(n, function(e, n) {
                r._renderItemData(t, n)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, n) {
            return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                this._value(this.term), this.menu.blur();
                return
            }
            this.menu[e](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function(e) {
                return r.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) return;
            e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
        }
    })
})(jQuery);
(function(e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        u = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function() {
            var t = e(this).find(":ui-button");
            setTimeout(function() {
                t.button("refresh")
            }, 1)
        }, l = function(t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (n = n.replace(/'/g, "\\'"), r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        version: "1.10.1",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var t = this,
                u = this.options,
                a = this.type === "checkbox" || this.type === "radio",
                c = a ? "" : "ui-state-active",
                h = "ui-state-focus";
            u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                if (u.disabled) return;
                this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                if (u.disabled) return;
                e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function(e) {
                u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                t.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function() {
                t.buttonElement.removeClass(h)
            }), a && (this.element.bind("change" + this.eventNamespace, function() {
                if (s) return;
                t.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) {
                if (u.disabled) return;
                s = !1, r = e.pageX, i = e.pageY
            }).bind("mouseup" + this.eventNamespace, function(e) {
                if (u.disabled) return;
                if (r !== e.pageX || i !== e.pageY) s = !0
            })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u.disabled || s) return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (u.disabled || s) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function() {
                    n = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(t) {
                if (u.disabled) return !1;
                (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", u.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            this._super(e, t);
            if (e === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.10.1",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function() {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function(e, t) {
    function s() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = o(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function o(t) {
        var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(n, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(n, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(i.inline ? t.parent()[0] : i.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function u(t, n) {
        e.extend(t, n);
        for (var r in n) n[r] == null && (t[r] = n[r]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.10.1"
        }
    });
    var n = "datepicker",
        r = (new Date).getTime(),
        i;
    e.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return u(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, n) {
            var r, i, s;
            r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
        },
        _newInst: function(t, n) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? o(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, r) {
            var i = e(t);
            r.append = e([]), r.trigger = e([]);
            if (i.hasClass(this.markerClassName)) return;
            this._attachments(i, r), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), e.data(t, n, r), r.settings.disabled && this._disableDatepicker(t)
        },
        _attachments: function(t, n) {
            var r, i, s, o = this._get(n, "appendText"),
                u = this._get(n, "isRTL");
            n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);
            if (r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: i,
                title: i
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                src: s,
                alt: i,
                title: i
            }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            })
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, n, r, i, s = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) {
                    n = 0, r = 0;
                    for (i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
                    return r
                }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
            }
        },
        _inlineDatepicker: function(t, r) {
            var i = e(t);
            if (i.hasClass(this.markerClassName)) return;
            i.addClass(this.markerClassName).append(r.dpDiv), e.data(t, n, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(t, r, i, s, o) {
            var a, f, l, c, h, p = this._dialogInst;
            return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], n, p)), u(p.settings, s || {}), r = r && r.constructor === Date ? this._formatDate(p, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], n, p), this
        },
        _destroyDatepicker: function(t) {
            var r, i = e(t),
                s = e.data(t, n);
            if (!i.hasClass(this.markerClassName)) return;
            r = t.nodeName.toLowerCase(), e.removeData(t, n), r === "input" ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && i.removeClass(this.markerClassName).empty()
        },
        _enableDatepicker: function(t) {
            var r, i, s = e(t),
                o = e.data(t, n);
            if (!s.hasClass(this.markerClassName)) return;
            r = t.nodeName.toLowerCase();
            if (r === "input") t.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            });
            else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
            this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            })
        },
        _disableDatepicker: function(t) {
            var r, i, s = e(t),
                o = e.data(t, n);
            if (!s.hasClass(this.markerClassName)) return;
            r = t.nodeName.toLowerCase();
            if (r === "input") t.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            });
            else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
            this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, n)
            } catch (r) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(n, r, i) {
            var s, o, a, f, l = this._getInst(n);
            if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;
            s = r || {}, typeof r == "string" && (s = {}, s[r] = i), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), u(l.settings, s), a !== null && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)), f !== null && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l))
        },
        _changeDatepicker: function(e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function(e, t) {
            var n = this._getInst(e);
            return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
        },
        _doKeyDown: function(t) {
            var n, r, i, s = e.datepicker._getInst(t.target),
                o = !0,
                u = s.dpDiv.is(".ui-datepicker-rtl");
            s._keyEvent = !0;
            if (e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var n, r, i = e.datepicker._getInst(t.target);
            if (e.datepicker._get(i, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
        },
        _doKeyUp: function(t) {
            var n, r = e.datepicker._getInst(t.target);
            if (r.input.val() !== r.lastVal) try {
                n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
            } catch (i) {}
            return !0
        },
        _showDatepicker: function(t) {
            t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
            if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;
            var n, r, i, s, o, a, f;
            n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), i = r ? r.apply(t, [t, n]) : {};
            if (i === !1) return;
            u(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function() {
                return s |= e(this).css("position") === "fixed", !s
            }), o = {
                left: e.datepicker._pos[0],
                top: e.datepicker._pos[1]
            }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), e.datepicker._updateDatepicker(n), o = e.datepicker._checkOffset(n, o, s), n.dpDiv.css({
                position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                display: "none",
                left: o.left + "px",
                top: o.top + "px"
            }), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), n.input.is(":visible") && !n.input.is(":disabled") && n.input.focus(), e.datepicker._curInst = n)
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, i = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var n, r = this._getNumberOfMonths(t),
                s = r[1],
                o = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
            }, 0))
        },
        _getBorders: function(e) {
            var t = function(e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function(t, n, r) {
            var i = t.dpDiv.outerWidth(),
                s = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                u = t.input ? t.input.outerHeight() : 0,
                a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
            return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
        },
        _findPos: function(t) {
            var n, r = this._getInst(t),
                i = this._get(r, "isRTL");
            while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];
            return n = e(t).offset(), [n.left, n.top]
        },
        _hideDatepicker: function(t) {
            var r, i, s, o, u = this._curInst;
            if (!u || t && u !== e.data(t, n)) return;
            this._datepickerShowing && (r = this._get(u, "showAnim"), i = this._get(u, "duration"), s = function() {
                e.datepicker._tidyDialog(u)
            }, e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s) : u.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? i : null, s), r || s(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (!e.datepicker._curInst) return;
            var n = e(t.target),
                r = e.datepicker._getInst(n[0]);
            (n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
        },
        _adjustDate: function(t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            if (this._isDisabledDatepicker(i[0])) return;
            this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s)
        },
        _gotoToday: function(t) {
            var n, r = e(t),
                i = this._getInst(r[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
        },
        _selectMonthYear: function(t, n, r) {
            var i = e(t),
                s = this._getInst(i[0]);
            s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
        },
        _selectDay: function(t, n, r, i) {
            var s, o = e(t);
            if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;
            s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
        },
        _clearDate: function(t) {
            var n = e(t);
            this._selectDate(n, "")
        },
        _selectDate: function(t, n) {
            var r, i = e(t),
                s = this._getInst(i[0]);
            n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var n, r, i, s = this._get(t, "altField");
            s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
                e(this).val(i)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(e) {
            var t, n = new Date(e.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
        },
        parseDate: function(t, n, r) {
            if (t == null || n == null) throw "Invalid arguments";
            n = typeof n == "object" ? n.toString() : n + "";
            if (n === "") return null;
            var i, s, o, u = 0,
                a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (r ? r.dayNames : null) || this._defaults.dayNames,
                h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (r ? r.monthNames : null) || this._defaults.monthNames,
                d = -1,
                v = -1,
                m = -1,
                g = -1,
                y = !1,
                b, w = function(e) {
                    var n = i + 1 < t.length && t.charAt(i + 1) === e;
                    return n && i++, n
                }, E = function(e) {
                    var t = w(e),
                        r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
                        i = new RegExp("^\\d{1," + r + "}"),
                        s = n.substring(u).match(i);
                    if (!s) throw "Missing number at position " + u;
                    return u += s[0].length, parseInt(s[0], 10)
                }, S = function(t, r, i) {
                    var s = -1,
                        o = e.map(w(t) ? i : r, function(e, t) {
                            return [[t, e]]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    e.each(o, function(e, t) {
                        var r = t[1];
                        if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return s = t[0], u += r.length, !1
                    });
                    if (s !== -1) return s + 1;
                    throw "Unknown name at position " + u
                }, x = function() {
                    if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
                    u++
                };
            for (i = 0; i < t.length; i++)
                if (y) t.charAt(i) === "'" && !w("'") ? y = !1 : x();
                else switch (t.charAt(i)) {
                    case "d":
                        m = E("d");
                        break;
                    case "D":
                        S("D", l, c);
                        break;
                    case "o":
                        g = E("o");
                        break;
                    case "m":
                        v = E("m");
                        break;
                    case "M":
                        v = S("M", h, p);
                        break;
                    case "y":
                        d = E("y");
                        break;
                    case "@":
                        b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                        break;
                    case "!":
                        b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                        break;
                    case "'":
                        w("'") ? x() : y = !0;
                        break;
                    default:
                        x()
                }
                if (u < n.length) {
                    o = n.substr(u);
                    if (!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o
                }
            d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
            if (g > -1) {
                v = 1, m = g;
                do {
                    s = this._getDaysInMonth(d, v - 1);
                    if (m <= s) break;
                    v++, m -= s
                } while (!0)
            }
            b = this._daylightSavingAdjust(new Date(d, v - 1, m));
            if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function(e, t, n) {
            if (!t) return "";
            var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                u = (n ? n.monthNames : null) || this._defaults.monthNames,
                a = function(t) {
                    var n = r + 1 < e.length && e.charAt(r + 1) === t;
                    return n && r++, n
                }, f = function(e, t, n) {
                    var r = "" + t;
                    if (a(e))
                        while (r.length < n) r = "0" + r;
                    return r
                }, l = function(e, t, n, r) {
                    return a(e) ? r[t] : n[t]
                }, c = "",
                h = !1;
            if (t)
                for (r = 0; r < e.length; r++)
                    if (h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);
                    else switch (e.charAt(r)) {
                        case "d":
                            c += f("d", t.getDate(), 2);
                            break;
                        case "D":
                            c += l("D", t.getDay(), i, s);
                            break;
                        case "o":
                            c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            c += f("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            c += l("M", t.getMonth(), o, u);
                            break;
                        case "y":
                            c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            c += t.getTime();
                            break;
                        case "!":
                            c += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            a("'") ? c += "'" : h = !0;
                            break;
                        default:
                            c += e.charAt(r)
                    }
                    return c
        },
        _possibleChars: function(e) {
            var t, n = "",
                r = !1,
                i = function(n) {
                    var r = t + 1 < e.length && e.charAt(t + 1) === n;
                    return r && t++, r
                };
            for (t = 0; t < e.length; t++)
                if (r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        n += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        i("'") ? n += "'" : r = !0;
                        break;
                    default:
                        n += e.charAt(t)
                }
                return n
        },
        _get: function(e, n) {
            return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() === e.lastVal) return;
            var n = this._get(e, "dateFormat"),
                r = e.lastVal = e.input ? e.input.val() : null,
                i = this._getDefaultDate(e),
                s = i,
                o = this._getFormatConfig(e);
            try {
                s = this.parseDate(n, r, o) || i
            } catch (u) {
                r = t ? "" : r
            }
            e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, n, r) {
            var i = function(e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, s = function(n) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                    } catch (r) {}
                    var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date,
                        s = i.getFullYear(),
                        o = i.getMonth(),
                        u = i.getDate(),
                        a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        f = a.exec(n);
                    while (f) {
                        switch (f[2] || "d") {
                            case "d":
                            case "D":
                                u += parseInt(f[1], 10);
                                break;
                            case "w":
                            case "W":
                                u += parseInt(f[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                        }
                        f = a.exec(n)
                    }
                    return new Date(s, o, u)
                }, o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
            return o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var n = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, -n, "M")
                    },
                    next: function() {
                        window["DP_jQuery_" + r].datepicker._adjustDate(i, +n, "M")
                    },
                    hide: function() {
                        window["DP_jQuery_" + r].datepicker._hideDatepicker()
                    },
                    today: function() {
                        window["DP_jQuery_" + r].datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
                R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                U = this._get(e, "isRTL"),
                z = this._get(e, "showButtonPanel"),
                W = this._get(e, "hideIfNoPrevNext"),
                X = this._get(e, "navigationAsDateFormat"),
                V = this._getNumberOfMonths(e),
                $ = this._get(e, "showCurrentAtPos"),
                J = this._get(e, "stepMonths"),
                K = V[0] !== 1 || V[1] !== 1,
                Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(e, "min"),
                Y = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - $,
                et = e.drawYear;
            Z < 0 && (Z += 12, et--);
            if (Y) {
                t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;
                while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--)
            }
            e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;
            for (S = 0; S < V[0]; S++) {
                x = "", this.maxRows = 4;
                for (T = 0; T < V[1]; T++) {
                    N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";
                    if (K) {
                        k += "<div class='ui-datepicker-group";
                        if (V[1] > 1) switch (T) {
                            case 0:
                                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                                break;
                            case V[1] - 1:
                                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                                break;
                            default:
                                k += " ui-datepicker-group-middle", C = ""
                        }
                        k += "'>"
                    }
                    k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
                    for (E = 0; E < 7; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                    k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
                    for (H = 0; H < D; H++) {
                        k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
                        for (E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                        k += B + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
                }
                w += x
            }
            return w += f, e._keyEvent = !1, w
        },
        _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
            var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
                g = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                w = "";
            if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (l = 0; l < 12; l++)(!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                w += "</select>"
            }
            y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                        var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? h : t
                    }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            }
            return b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b
        },
        _adjustInstDate: function(e, t, n) {
            var r = e.drawYear + (n === "Y" ? t : 0),
                i = e.drawMonth + (n === "M" ? t : 0),
                s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var n = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                i = n && t < n ? n : t;
            return r && i > r ? r : i
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function(e, t, n, r) {
            var i = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var n, r, i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                o = null,
                u = null,
                a = this._get(e, "yearRange");
            return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, n, r) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
            typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
    }, e.datepicker = new s, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.1", window["DP_jQuery_" + r] = e
})(jQuery);
(function(e, t) {
    var n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, r = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        version: "1.10.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var n = this;
            if (!this._isOpen || this._trigger("beforeClose", t) === !1) return;
            this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                n._trigger("close", t)
            })
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, t) {
            var n = !! this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return n && !t && this._trigger("focus", e), n
        },
        open: function() {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._trigger("open")
        },
        _focusTabbable: function() {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function n() {
                var t = this.document[0].activeElement,
                    n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                n || this._focusTabbable()
            }
            t.preventDefault(), n.call(this), this._delay(n)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
                        t.preventDefault(), this.close(t);
                        return
                    }
                    if (t.keyCode !== e.ui.keyCode.TAB) return;
                    var n = this.uiDialog.find(":tabbable"),
                        r = n.filter(":first"),
                        i = n.filter(":last");
                    t.target !== i[0] && t.target !== this.uiDialog[0] || !! t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (i.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                n = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty();
            if (e.isEmptyObject(n) || e.isArray(n) && !n.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            e.each(n, function(n, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: n
                } : r, r = e.extend({
                    type: "button"
                }, r), i = r.click, r.click = function() {
                    i.apply(t.element[0], arguments)
                }, s = {
                    icons: r.icons,
                    text: r.showText
                }, delete r.icons, delete r.showText, e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function r(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var t = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, i) {
                    e(this).addClass("ui-dialog-dragging"), t._blockFrames(), t._trigger("dragStart", n, r(i))
                },
                drag: function(e, n) {
                    t._trigger("drag", e, r(n))
                },
                stop: function(i, s) {
                    n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), t._unblockFrames(), t._trigger("dragStop", i, r(s))
                }
            })
        },
        _makeResizable: function() {
            function o(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var t = this,
                n = this.options,
                r = n.resizable,
                i = this.uiDialog.css("position"),
                s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: s,
                start: function(n, r) {
                    e(this).addClass("ui-dialog-resizing"), t._blockFrames(), t._trigger("resizeStart", n, o(r))
                },
                resize: function(e, n) {
                    t._trigger("resize", e, o(n))
                },
                stop: function(r, i) {
                    n.height = e(this).height(), n.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), t._unblockFrames(), t._trigger("resizeStop", r, o(i))
                }
            }).css("position", i)
        },
        _minHeight: function() {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                s = !1,
                o = {};
            e.each(t, function(e, t) {
                i._setOption(e, t), e in n && (s = !0), e in r && (o[e] = t)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(e, t) {
            var n, r, i = this.uiDialog;
            e === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t);
            if (e === "disabled") return;
            this._super(e, t), e === "appendTo" && this.uiDialog.appendTo(this._appendTo()), e === "buttons" && this._createButtons(), e === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), e === "draggable" && (n = i.is(":data(ui-draggable)"), n && !t && i.draggable("destroy"), !n && t && this._makeDraggable()), e === "position" && this._position(), e === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), !r && t !== !1 && this._makeResizable()), e === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
        },
        _size: function() {
            var e, t, n, r = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), r.minWidth > r.width && (r.width = r.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: r.width
            }).outerHeight(), t = Math.max(0, r.minHeight - e), n = typeof r.maxHeight == "number" ? Math.max(0, r.maxHeight - e) : "none", r.height === "auto" ? this.element.css({
                minHeight: t,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, r.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _createOverlay: function() {
            if (!this.options.modal) return;
            e.ui.dialog.overlayInstances || this._delay(function() {
                e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(t) {
                    !e(t.target).closest(".ui-dialog").length && !e(t.target).closest(".ui-datepicker").length && (t.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())
                })
            }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                mousedown: "_keepFocus"
            }), e.ui.dialog.overlayInstances++
        },
        _destroyOverlay: function() {
            if (!this.options.modal) return;
            this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function() {
            var t = this.options.position,
                n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
                    +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                    at: n.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
        }
    })
})(jQuery);
(function(e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n, r = this,
                i = !1,
                s = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), n = this.element[0];
            while (n && (n = n.parentNode)) n === document && (i = !0);
            return !i && this.options.helper === "original" ? !1 : (this.options.revert === "invalid" && !s || this.options.revert === "valid" && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").addBack().each(function() {
                this === t.target && (n = !0)
            }), n
        },
        _createHelper: function(t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, r, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            if (i.containment === "document" || i.containment === "window") this.containment = [i.containment === "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : e(window).scrollLeft()) + e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : e(window).scrollTop()) + (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(i.containment) && i.containment.constructor !== Array) {
                n = e(i.containment), r = n[0];
                if (!r) return;
                t = e(r).css("overflow") !== "hidden", this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            } else i.containment.constructor === Array && (this.containment = i.containment)
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1,
                i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(i[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n, r, i, s, o = this.options,
                u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(u[0].tagName),
                f = t.pageX,
                l = t.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (f = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (l = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (f = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (l = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, f = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var r = e(this).data("ui-draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function() {
                var n = e.data(this, "ui-sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function(t, n) {
            var r = e(this).data("ui-draggable"),
                i = this;
            e.each(r.sortables, function() {
                var s = !1,
                    o = this;
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s
                })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                n = e(this).data("ui-draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var r = e(n.helper),
                i = e(this).data("ui-draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("ui-draggable"),
                r = n.options,
                i = !1;
            if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
                if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("ui-draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var n = e(this),
                    r = n.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function(t, n) {
            var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"),
                d = p.options,
                v = d.snapTolerance,
                m = n.offset.left,
                g = m + p.helperProportions.width,
                y = n.offset.top,
                b = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) {
                u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
                if (!(u - v < m && m < a + v && f - v < y && y < l + v || u - v < m && m < a + v && f - v < b && b < l + v || u - v < g && g < a + v && f - v < y && y < l + v || u - v < g && g < a + v && f - v < b && b < l + v)) {
                    p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                        snapItem: p.snapElements[c].item
                    })), p.snapElements[c].snapping = !1;
                    continue
                }
                d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                    top: f - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u - p.helperProportions.width
                }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                    top: f,
                    left: 0
                }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u
                }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width
                }).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[c].item
                })), p.snapElements[c].snapping = r || i || s || o || h
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t, n = this.data("ui-draggable").options,
                r = e.makeArray(e(n.stack)).sort(function(t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!r.length) return;
            t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(n) {
                e(this).css("zIndex", t + n)
            }), this.css("zIndex", t + r.length)
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var r = e(n.helper),
                i = e(this).data("ui-draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function(t, n) {
            var r = e(this).data("ui-draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
})(jQuery);
(function(e, t) {
    function n(e, t, n) {
        return e > t && e < t + n
    }
    e.widget("ui.droppable", {
        version: "1.10.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t = this.options,
                n = t.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            var t = 0,
                n = e.ui.ddmanager.droppables[this.options.scope];
            for (; t < n.length; t++) n[t] === this && n.splice(t, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, n) {
            t === "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function(t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function(t) {
            var n = e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] === this.element[0]) return;
            this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function(t, n) {
            var r = n || e.ui.ddmanager.current,
                i = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "ui-droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope === r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1)
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(e, t, r) {
        if (!t.offset) return !1;
        var i, s, o = (e.positionAbs || e.position.absolute).left,
            u = o + e.helperProportions.width,
            a = (e.positionAbs || e.position.absolute).top,
            f = a + e.helperProportions.height,
            l = t.offset.left,
            c = l + t.proportions.width,
            h = t.offset.top,
            p = h + t.proportions.height;
        switch (r) {
            case "fit":
                return l <= o && u <= c && h <= a && f <= p;
            case "intersect":
                return l < o + e.helperProportions.width / 2 && u - e.helperProportions.width / 2 < c && h < a + e.helperProportions.height / 2 && f - e.helperProportions.height / 2 < p;
            case "pointer":
                return i = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, s = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, n(s, h, t.proportions.height) && n(i, l, t.proportions.width);
            case "touch":
                return (a >= h && a <= p || f >= h && f <= p || a < h && f > p) && (o >= l && o <= c || u >= l && u <= c || o < l && u > c);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, n) {
            var r, i, s = e.ui.ddmanager.droppables[t.options.scope] || [],
                o = n ? n.type : null,
                u = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (r = 0; r < s.length; r++) {
                if (s[r].options.disabled || t && !s[r].accept.call(s[r].element[0], t.currentItem || t.element)) continue;
                for (i = 0; i < u.length; i++)
                    if (u[i] === s[r].element[0]) {
                        s[r].proportions.height = 0;
                        continue e
                    }
                s[r].visible = s[r].element.css("display") !== "none";
                if (!s[r].visible) continue;
                o === "mousedown" && s[r]._activate.call(s[r], n), s[r].offset = s[r].element.offset(), s[r].proportions = {
                    width: s[r].element[0].offsetWidth,
                    height: s[r].element[0].offsetHeight
                }
            }
        },
        drop: function(t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options) return;
                !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n))
            }), r
        },
        dragStart: function(t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function(t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) return;
                var r, i, s, o = e.ui.intersect(t, this, this.options.tolerance),
                    u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                if (!u) return;
                this.options.greedy && (i = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                    return e.data(this, "ui-droppable").options.scope === i
                }), s.length && (r = e.data(s[0], "ui-droppable"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, n)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, n), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, n))
            })
        },
        dragStop: function(t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
})(jQuery);
jQuery.effects || function(e, t) {
    var n = "ui-effects-";
    e.effects = {
        effect: {}
    },
    function(e, t) {
        function h(e, t, n) {
            var r = u[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }

        function p(t) {
            var n = s(),
                r = n._rgba = [];
            return t = t.toLowerCase(), c(i, function(e, i) {
                var s, u = i.re.exec(t),
                    a = u && i.parse(u),
                    f = i.space || "rgba";
                if (a) return s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1
            }), r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n) : l[t]
        }

        function d(e, t, n) {
            return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            r = /^([\-+])=\s*(\d+\.?\d*)/,
            i = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }],
            s = e.Color = function(t, n, r, i) {
                return new e.Color.fn.parse(t, n, r, i)
            }, o = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            }, u = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            }, a = s.support = {}, f = e("<p>")[0],
            l, c = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = f.style.backgroundColor.indexOf("rgba") > -1, c(o, function(e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), s.fn = e.extend(s.prototype, {
            parse: function(n, r, i, u) {
                if (n === t) return this._rgba = [null, null, null, null], this;
                if (n.jquery || n.nodeType) n = e(n).css(r), r = t;
                var a = this,
                    f = e.type(n),
                    d = this._rgba = [];
                r !== t && (n = [n, r, i, u], f = "array");
                if (f === "string") return this.parse(p(n) || l._default);
                if (f === "array") return c(o.rgba.props, function(e, t) {
                    d[t.idx] = h(n[t.idx], t)
                }), this;
                if (f === "object") return n instanceof s ? c(o, function(e, t) {
                    n[t.cache] && (a[t.cache] = n[t.cache].slice())
                }) : c(o, function(t, r) {
                    var i = r.cache;
                    c(r.props, function(e, t) {
                        if (!a[i] && r.to) {
                            if (e === "alpha" || n[e] == null) return;
                            a[i] = r.to(a._rgba)
                        }
                        a[i][t.idx] = h(n[e], t, !0)
                    }), a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])))
                }), this
            },
            is: function(e) {
                var t = s(e),
                    n = !0,
                    r = this;
                return c(o, function(e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function(e, t) {
                        if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                    })), n
                }), n
            },
            _space: function() {
                var e = [],
                    t = this;
                return c(o, function(n, r) {
                    t[r.cache] && e.push(n)
                }), e.pop()
            },
            transition: function(e, t) {
                var n = s(e),
                    r = n._space(),
                    i = o[r],
                    a = this.alpha() === 0 ? s("transparent") : this,
                    f = a[i.cache] || i.to(a._rgba),
                    l = f.slice();
                return n = n[i.cache], c(i.props, function(e, r) {
                    var i = r.idx,
                        s = f[i],
                        o = n[i],
                        a = u[r.type] || {};
                    if (o === null) return;
                    s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r))
                }), this[r](l)
            },
            blend: function(t) {
                if (this._rgba[3] === 1) return this;
                var n = this._rgba.slice(),
                    r = n.pop(),
                    i = s(t)._rgba;
                return s(e.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba(",
                    n = e.map(this._rgba, function(e, t) {
                        return e == null ? t > 2 ? 1 : 0 : e
                    });
                return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla(",
                    n = e.map(this.hsla(), function(e, t) {
                        return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                    });
                return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")"
            },
            toHexString: function(t) {
                var n = this._rgba.slice(),
                    r = n.pop();
                return t && n.push(~~(r * 255)), "#" + e.map(n, function(e) {
                    return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }), s.fn.parse.prototype = s.fn, o.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 255,
                n = e[1] / 255,
                r = e[2] / 255,
                i = e[3],
                s = Math.max(t, n, r),
                o = Math.min(t, n, r),
                u = s - o,
                a = s + o,
                f = a * .5,
                l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }, o.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 360,
                n = e[1],
                r = e[2],
                i = e[3],
                s = r <= .5 ? r * (1 + n) : r + n - r * n,
                o = 2 * r - s;
            return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
        }, c(o, function(n, i) {
            var o = i.props,
                u = i.cache,
                a = i.to,
                f = i.from;
            s.fn[n] = function(n) {
                a && !this[u] && (this[u] = a(this._rgba));
                if (n === t) return this[u].slice();
                var r, i = e.type(n),
                    l = i === "array" || i === "object" ? n : arguments,
                    p = this[u].slice();
                return c(o, function(e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    n == null && (n = p[t.idx]), p[t.idx] = h(n, t)
                }), f ? (r = s(f(p)), r[u] = p, r) : s(p)
            }, c(o, function(t, i) {
                if (s.fn[t]) return;
                s.fn[t] = function(s) {
                    var o = e.type(s),
                        u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n,
                        a = this[u](),
                        f = a[i.idx],
                        l;
                    return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = e.type(s)), s == null && i.empty ? this : (o === "string" && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[i.idx] = s, this[u](a)))
                }
            })
        }), s.hook = function(t) {
            var n = t.split(" ");
            c(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, r) {
                        var i, o, u = "";
                        if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
                            r = s(i || r);
                            if (!a.rgba && r._rgba[3] !== 1) {
                                o = n === "backgroundColor" ? t.parentNode : t;
                                while ((u === "" || u === "transparent") && o && o.style) try {
                                    u = e.css(o, "backgroundColor"), o = o.parentNode
                                } catch (f) {}
                                r = r.blend(u && u !== "transparent" ? u : "_default")
                            }
                            r = r.toRgbaString()
                        }
                        try {
                            t.style[n] = r
                        } catch (f) {}
                    }
                }, e.fx.step[n] = function(t) {
                    t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, s.hook(n), e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return c(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }), t
            }
        }, l = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function() {
        function i(t) {
            var n, r, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                s = {};
            if (i && i.length && i[0] && i[i[0]]) {
                r = i.length;
                while (r--) n = i[r], typeof i[n] == "string" && (s[e.camelCase(n)] = i[n])
            } else
                for (n in i) typeof i[n] == "string" && (s[n] = i[n]);
            return s
        }

        function s(t, n) {
            var i = {}, s, o;
            for (s in n) o = n[s], t[s] !== o && !r[s] && (e.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o);
            return i
        }
        var n = ["add", "remove", "toggle"],
            r = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }), e.effects.animateClass = function(t, r, o, u) {
            var a = e.speed(r, o, u);
            return this.queue(function() {
                var r = e(this),
                    o = r.attr("class") || "",
                    u, f = a.children ? r.find("*").addBack() : r;
                f = f.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: i(this)
                    }
                }), u = function() {
                    e.each(n, function(e, n) {
                        t[n] && r[n + "Class"](t[n])
                    })
                }, u(), f = f.map(function() {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), r.attr("class", o), f = f.map(function() {
                    var t = this,
                        n = e.Deferred(),
                        r = e.extend({}, a, {
                            queue: !1,
                            complete: function() {
                                n.resolve(t)
                            }
                        });
                    return this.el.animate(this.diff, r), n.promise()
                }), e.when.apply(e, f.get()).done(function() {
                    u(), e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }), a.complete.call(r[0])
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, r, i) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, r, i) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, r, i) {
                return arguments.length > 1 ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, r, i) : this._removeClass.apply(this, arguments)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, r, i, s, o) {
                return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                    add: n
                } : {
                    remove: n
                }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                    toggle: n
                }, r, i, s)
            },
            switchClass: function(t, n, r, i, s) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, r, i, s)
            }
        })
    }(),
    function() {
        function r(t, n, r, i) {
            e.isPlainObject(t) && (n = t, t = t.effect), t = {
                effect: t
            }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
            if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
            return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
        }

        function i(t) {
            return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t]
        }
        e.extend(e.effects, {
            version: "1.10.1",
            save: function(e, t) {
                for (var r = 0; r < t.length; r++) t[r] !== null && e.data(n + t[r], e[0].style[t[r]])
            },
            restore: function(e, r) {
                var i, s;
                for (s = 0; s < r.length; s++) r[s] !== null && (i = e.data(n + r[s]), i === t && (i = ""), e.css(r[s], i))
            },
            setMode: function(e, t) {
                return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function(e, t) {
                var n, r;
                switch (e[0]) {
                    case "top":
                        n = 0;
                        break;
                    case "middle":
                        n = .5;
                        break;
                    case "bottom":
                        n = 1;
                        break;
                    default:
                        n = e[0] / t.height
                }
                switch (e[1]) {
                    case "left":
                        r = 0;
                        break;
                    case "center":
                        r = .5;
                        break;
                    case "right":
                        r = 1;
                        break;
                    default:
                        r = e[1] / t.width
                }
                return {
                    x: r,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    i = {
                        width: t.width(),
                        height: t.height()
                    }, s = document.activeElement;
                try {
                    s.id
                } catch (o) {
                    s = document.body
                }
                return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(i), r.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
            },
            setTransition: function(t, n, r, i) {
                return i = i || {}, e.each(n, function(e, n) {
                    var s = t.cssUnit(n);
                    s[0] > 0 && (i[n] = s[0] * r + s[1])
                }), i
            }
        }), e.fn.extend({
            effect: function() {
                function o(n) {
                    function u() {
                        e.isFunction(i) && i.call(r[0]), e.isFunction(n) && n()
                    }
                    var r = e(this),
                        i = t.complete,
                        o = t.mode;
                    (r.is(":hidden") ? o === "hide" : o === "show") ? u() : s.call(r[0], t, u)
                }
                var t = r.apply(this, arguments),
                    n = t.mode,
                    i = t.queue,
                    s = e.effects.effect[t.effect];
                return e.fx.off || !s ? n ? this[n](t.duration, t.complete) : this.each(function() {
                    t.complete && t.complete.call(this)
                }) : i === !1 ? this.each(o) : this.queue(i || "fx", o)
            },
            _show: e.fn.show,
            show: function(e) {
                if (i(e)) return this._show.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (i(e)) return this._hide.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (i(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var n = r.apply(this, arguments);
                return n.mode = "toggle", this.effect.call(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t),
                    r = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                }), r
            }
        })
    }(),
    function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        }), e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    }()
}(jQuery);
(function(e, t) {
    var n = /up|down|vertical/,
        r = /up|left|vertical|horizontal/;
    e.effects.effect.blind = function(t, i) {
        var s = e(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            u = e.effects.setMode(s, t.mode || "hide"),
            a = t.direction || "up",
            f = n.test(a),
            l = f ? "height" : "width",
            c = f ? "top" : "left",
            h = r.test(a),
            p = {}, d = u === "show",
            v, m, g;
        s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), o) : e.effects.save(s, o), s.show(), v = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }), m = v[l](), g = parseFloat(v.css(c)) || 0, p[l] = d ? m : 0, h || (s.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
            position: "absolute"
        }), p[c] = d ? g : m + g), d && (v.css(l, 0), h || v.css(c, g + m)), v.animate(p, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                u === "hide" && s.hide(), e.effects.restore(s, o), e.effects.removeWrapper(s), i()
            }
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.bounce = function(t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "effect"),
            o = s === "hide",
            u = s === "show",
            a = t.direction || "up",
            f = t.distance,
            l = t.times || 5,
            c = l * 2 + (u || o ? 1 : 0),
            h = t.duration / c,
            p = t.easing,
            d = a === "up" || a === "down" ? "top" : "left",
            v = a === "up" || a === "left",
            m, g, y, b = r.queue(),
            w = b.length;
        (u || o) && i.push("opacity"), e.effects.save(r, i), r.show(), e.effects.createWrapper(r), f || (f = r[d === "top" ? "outerHeight" : "outerWidth"]() / 3), u && (y = {
                opacity: 1
            }, y[d] = 0, r.css("opacity", 0).css(d, v ? -f * 2 : f * 2).animate(y, h, p)), o && (f /= Math.pow(2, l - 1)), y = {}, y[d] = 0;
        for (m = 0; m < l; m++) g = {}, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p).animate(y, h, p), f = o ? f * 2 : f / 2;
        o && (g = {
            opacity: 0
        }, g[d] = (v ? "-=" : "+=") + f, r.animate(g, h, p)), r.queue(function() {
            o && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        }), w > 1 && b.splice.apply(b, [1, 0].concat(b.splice(w, c + 1))), r.dequeue()
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.clip = function(t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = t.direction || "vertical",
            a = u === "vertical",
            f = a ? "height" : "width",
            l = a ? "top" : "left",
            c = {}, h, p, d;
        e.effects.save(r, i), r.show(), h = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), p = r[0].tagName === "IMG" ? h : r, d = p[f](), o && (p.css(f, 0), p.css(l, d / 2)), c[f] = o ? d : 0, c[l] = o ? 0 : d / 2, p.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                o || r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.drop = function(t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = t.direction || "left",
            a = u === "up" || u === "down" ? "top" : "left",
            f = u === "up" || u === "left" ? "pos" : "neg",
            l = {
                opacity: o ? 1 : 0
            }, c;
        e.effects.save(r, i), r.show(), e.effects.createWrapper(r), c = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0) / 2, o && r.css("opacity", 0).css(a, f === "pos" ? -c : c), l[a] = (o ? f === "pos" ? "+=" : "-=" : f === "pos" ? "-=" : "+=") + c, r.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.explode = function(t, n) {
        function y() {
            c.push(this), c.length === r * i && b()
        }

        function b() {
            s.css({
                visibility: "visible"
            }), e(c).remove(), u || s.hide(), n()
        }
        var r = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
            i = r,
            s = e(this),
            o = e.effects.setMode(s, t.mode || "hide"),
            u = o === "show",
            a = s.show().css("visibility", "hidden").offset(),
            f = Math.ceil(s.outerWidth() / i),
            l = Math.ceil(s.outerHeight() / r),
            c = [],
            h, p, d, v, m, g;
        for (h = 0; h < r; h++) {
            v = a.top + h * l, g = h - (r - 1) / 2;
            for (p = 0; p < i; p++) d = a.left + p * f, m = p - (i - 1) / 2, s.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -p * f,
                top: -h * l
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: f,
                height: l,
                left: d + (u ? m * f : 0),
                top: v + (u ? g * l : 0),
                opacity: u ? 0 : 1
            }).animate({
                left: d + (u ? 0 : m * f),
                top: v + (u ? 0 : g * l),
                opacity: u ? 1 : 0
            }, t.duration || 500, t.easing, y)
        }
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.fade = function(t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "toggle");
        r.animate({
            opacity: i
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.fold = function(t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "hide"),
            o = s === "show",
            u = s === "hide",
            a = t.size || 15,
            f = /([0-9]+)%/.exec(a),
            l = !! t.horizFirst,
            c = o !== l,
            h = c ? ["width", "height"] : ["height", "width"],
            p = t.duration / 2,
            d, v, m = {}, g = {};
        e.effects.save(r, i), r.show(), d = e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), v = c ? [d.width(), d.height()] : [d.height(), d.width()], f && (a = parseInt(f[1], 10) / 100 * v[u ? 0 : 1]), o && d.css(l ? {
            height: 0,
            width: a
        } : {
            height: a,
            width: 0
        }), m[h[0]] = o ? v[0] : a, g[h[1]] = o ? v[1] : 0, d.animate(m, p, t.easing).animate(g, p, t.easing, function() {
            u && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.highlight = function(t, n) {
        var r = e(this),
            i = ["backgroundImage", "backgroundColor", "opacity"],
            s = e.effects.setMode(r, t.mode || "show"),
            o = {
                backgroundColor: r.css("backgroundColor")
            };
        s === "hide" && (o.opacity = 0), e.effects.save(r, i), r.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(), e.effects.restore(r, i), n()
            }
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.pulsate = function(t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "show"),
            s = i === "show",
            o = i === "hide",
            u = s || i === "hide",
            a = (t.times || 5) * 2 + (u ? 1 : 0),
            f = t.duration / a,
            l = 0,
            c = r.queue(),
            h = c.length,
            p;
        if (s || !r.is(":visible")) r.css("opacity", 0).show(), l = 1;
        for (p = 1; p < a; p++) r.animate({
            opacity: l
        }, f, t.easing), l = 1 - l;
        r.animate({
            opacity: l
        }, f, t.easing), r.queue(function() {
            o && r.hide(), n()
        }), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), r.dequeue()
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.puff = function(t, n) {
        var r = e(this),
            i = e.effects.setMode(r, t.mode || "hide"),
            s = i === "hide",
            o = parseInt(t.percent, 10) || 150,
            u = o / 100,
            a = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: i,
            complete: n,
            percent: s ? o : 100,
            from: s ? a : {
                height: a.height * u,
                width: a.width * u,
                outerHeight: a.outerHeight * u,
                outerWidth: a.outerWidth * u
            }
        }), r.effect(t)
    }, e.effects.effect.scale = function(t, n) {
        var r = e(this),
            i = e.extend(!0, {}, t),
            s = e.effects.setMode(r, t.mode || "effect"),
            o = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : s === "hide" ? 0 : 100),
            u = t.direction || "both",
            a = t.origin,
            f = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            }, l = {
                y: u !== "horizontal" ? o / 100 : 1,
                x: u !== "vertical" ? o / 100 : 1
            };
        i.effect = "size", i.queue = !1, i.complete = n, s !== "effect" && (i.origin = a || ["middle", "center"], i.restore = !0), i.from = t.from || (s === "show" ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : f), i.to = {
            height: f.height * l.y,
            width: f.width * l.x,
            outerHeight: f.outerHeight * l.y,
            outerWidth: f.outerWidth * l.x
        }, i.fade && (s === "show" && (i.from.opacity = 0, i.to.opacity = 1), s === "hide" && (i.from.opacity = 1, i.to.opacity = 0)), r.effect(i)
    }, e.effects.effect.size = function(t, n) {
        var r, i, s, o = e(this),
            u = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            f = ["width", "height", "overflow"],
            l = ["fontSize"],
            c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = e.effects.setMode(o, t.mode || "effect"),
            d = t.restore || p !== "effect",
            v = t.scale || "both",
            m = t.origin || ["middle", "center"],
            g = o.css("position"),
            y = d ? u : a,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        p === "show" && o.show(), r = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, t.mode === "toggle" && p === "show" ? (o.from = t.to || b, o.to = t.from || r) : (o.from = t.from || (p === "show" ? b : r), o.to = t.to || (p === "hide" ? b : r)), s = {
            from: {
                y: o.from.height / r.height,
                x: o.from.width / r.width
            },
            to: {
                y: o.to.height / r.height,
                x: o.to.width / r.width
            }
        };
        if (v === "box" || v === "both") s.from.y !== s.to.y && (y = y.concat(c), o.from = e.effects.setTransition(o, c, s.from.y, o.from), o.to = e.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(h), o.from = e.effects.setTransition(o, h, s.from.x, o.from), o.to = e.effects.setTransition(o, h, s.to.x, o.to));
        (v === "content" || v === "both") && s.from.y !== s.to.y && (y = y.concat(l).concat(f), o.from = e.effects.setTransition(o, l, s.from.y, o.from), o.to = e.effects.setTransition(o, l, s.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (i = e.effects.getBaseline(m, r), o.from.top = (r.outerHeight - o.outerHeight()) * i.y, o.from.left = (r.outerWidth - o.outerWidth()) * i.x, o.to.top = (r.outerHeight - o.to.outerHeight) * i.y, o.to.left = (r.outerWidth - o.to.outerWidth) * i.x), o.css(o.from);
        if (v === "content" || v === "both") c = c.concat(["marginTop", "marginBottom"]).concat(l), h = h.concat(["marginLeft", "marginRight"]), f = u.concat(c).concat(h), o.find("*[width]").each(function() {
            var n = e(this),
                r = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                };
            d && e.effects.save(n, f), n.from = {
                height: r.height * s.from.y,
                width: r.width * s.from.x,
                outerHeight: r.outerHeight * s.from.y,
                outerWidth: r.outerWidth * s.from.x
            }, n.to = {
                height: r.height * s.to.y,
                width: r.width * s.to.x,
                outerHeight: r.height * s.to.y,
                outerWidth: r.width * s.to.x
            }, s.from.y !== s.to.y && (n.from = e.effects.setTransition(n, c, s.from.y, n.from), n.to = e.effects.setTransition(n, c, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = e.effects.setTransition(n, h, s.from.x, n.from), n.to = e.effects.setTransition(n, h, s.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function() {
                d && e.effects.restore(n, f)
            })
        });
        o.animate(o.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                o.to.opacity === 0 && o.css("opacity", o.from.opacity), p === "hide" && o.hide(), e.effects.restore(o, y), d || (g === "static" ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function(e, t) {
                    o.css(t, function(t, n) {
                        var r = parseInt(n, 10),
                            i = e ? o.to.left : o.to.top;
                        return n === "auto" ? i + "px" : r + i + "px"
                    })
                })), e.effects.removeWrapper(o), n()
            }
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.shake = function(t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "height", "width"],
            s = e.effects.setMode(r, t.mode || "effect"),
            o = t.direction || "left",
            u = t.distance || 20,
            a = t.times || 3,
            f = a * 2 + 1,
            l = Math.round(t.duration / f),
            c = o === "up" || o === "down" ? "top" : "left",
            h = o === "up" || o === "left",
            p = {}, d = {}, v = {}, m, g = r.queue(),
            y = g.length;
        e.effects.save(r, i), r.show(), e.effects.createWrapper(r), p[c] = (h ? "-=" : "+=") + u, d[c] = (h ? "+=" : "-=") + u * 2, v[c] = (h ? "-=" : "+=") + u * 2, r.animate(p, l, t.easing);
        for (m = 1; m < a; m++) r.animate(d, l, t.easing).animate(v, l, t.easing);
        r.animate(d, l, t.easing).animate(p, l / 2, t.easing).queue(function() {
            s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
        }), y > 1 && g.splice.apply(g, [1, 0].concat(g.splice(y, f + 1))), r.dequeue()
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.slide = function(t, n) {
        var r = e(this),
            i = ["position", "top", "bottom", "left", "right", "width", "height"],
            s = e.effects.setMode(r, t.mode || "show"),
            o = s === "show",
            u = t.direction || "left",
            a = u === "up" || u === "down" ? "top" : "left",
            f = u === "up" || u === "left",
            l, c = {};
        e.effects.save(r, i), r.show(), l = t.distance || r[a === "top" ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), o && r.css(a, f ? isNaN(l) ? "-" + l : -l : l), c[a] = (o ? f ? "+=" : "-=" : f ? "-=" : "+=") + l, r.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                s === "hide" && r.hide(), e.effects.restore(r, i), e.effects.removeWrapper(r), n()
            }
        })
    }
})(jQuery);
(function(e, t) {
    e.effects.effect.transfer = function(t, n) {
        var r = e(this),
            i = e(t.to),
            s = i.css("position") === "fixed",
            o = e("body"),
            u = s ? o.scrollTop() : 0,
            a = s ? o.scrollLeft() : 0,
            f = i.offset(),
            l = {
                top: f.top - u,
                left: f.left - a,
                height: i.innerHeight(),
                width: i.innerWidth()
            }, c = r.offset(),
            h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                top: c.top - u,
                left: c.left - a,
                height: r.innerHeight(),
                width: r.innerWidth(),
                position: s ? "fixed" : "absolute"
            }).animate(l, t.duration, t.easing, function() {
                h.remove(), n()
            })
    }
})(jQuery);
(function(e, t) {
    e.widget("ui.menu", {
        version: "1.10.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !! this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                this.options.disabled && e.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-state-disabled > a": function(e) {
                    e.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(t) {
                    var n = e(t.target).closest(".ui-menu-item");
                    !this.mouseHandled && n.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(t), n.has(".ui-menu").length ? this.expand(t) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var n = e(t.currentTarget);
                    n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(e, t) {
                    var n = this.active || this.element.children(".ui-menu-item").eq(0);
                    t || this.focus(e, n)
                },
                blur: function(t) {
                    this._delay(function() {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            function a(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var n, r, i, s, o, u = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return o.test(e(this).children("a").text())
                    }), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return o.test(e(this).children("a").text())
                    })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            u && t.preventDefault()
        },
        _activate: function(e) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
        },
        refresh: function() {
            var t, n = this.options.icons.submenu,
                r = this.element.find(this.options.menus);
            r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = e(this),
                    r = t.prev("a"),
                    i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
            }), t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.children(":not(.ui-menu-item)").each(function() {
                var t = e(this);
                /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
            }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(e, t) {
            e === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
        },
        focus: function(e, t) {
            var n, r;
            this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var n, r, i, s, o, u;
            this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
        },
        blur: function(e, t) {
            t || clearTimeout(this.timer);
            if (!this.active) return;
            this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                item: this.active
            })
        },
        _startOpening: function(e) {
            clearTimeout(this.timer);
            if (e.attr("aria-hidden") !== "true") return;
            this.timer = this._delay(function() {
                this._close(), this._open(e)
            }, this.delay)
        },
        _open: function(t) {
            var n = e.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
        },
        collapseAll: function(t, n) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
            }, this.delay)
        },
        _close: function(e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function(e) {
            var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            t && t.length && (this._open(t.parent()), this._delay(function() {
                this.focus(e, t)
            }))
        },
        next: function(e) {
            this._move("next", "first", e)
        },
        previous: function(e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(e, t, n) {
            var r;
            this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
            if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
            this.focus(n, r)
        },
        nextPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isLastItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return n = e(this), n.offset().top - r - i < 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
        },
        previousPage: function(t) {
            var n, r, i;
            if (!this.active) {
                this.next(t);
                return
            }
            if (this.isFirstItem()) return;
            this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return n = e(this), n.offset().top - r + i > 0
            }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var n = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
        }
    })
})(jQuery);
(function(e, t) {
    e.widget("ui.progressbar", {
        version: "1.10.1",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(e) {
            if (e === t) return this.options.value;
            this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _constrainedValue: function(e) {
            return e === t && (e = this.options.value), this.indeterminate = e === !1, typeof e != "number" && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        },
        _setOptions: function(e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _setOption: function(e, t) {
            e === "max" && (t = Math.max(this.min, t)), this._super(e, t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value,
                n = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(n.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    })
})(jQuery);
(function(e, t) {
    function n(e) {
        return parseInt(e, 10) || 0
    }

    function r(e) {
        return !isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var t, n, r, i, s, o = this,
                u = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! u.aspectRatio,
                aspectRatio: u.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor === String) {
                this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {};
                for (n = 0; n < t.length; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({
                    zIndex: u.zIndex
                }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i)
            }
            this._renderAxis = function(t) {
                var n, r, i, s;
                t = t || this.element;
                for (n in this.handles) {
                    this.handles[n].constructor === String && (this.handles[n] = e(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize());
                    if (!e(this.handles[n]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se")
            }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                if (u.disabled) return;
                e(this).removeClass("ui-resizable-autohide"), o._handles.show()
            }).mouseleave(function() {
                if (u.disabled) return;
                o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, n = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var n, r, i = !1;
            for (n in this.handles) {
                r = e(this.handles[n])[0];
                if (r === t.target || e.contains(r, t.target)) i = !0
            }
            return !this.options.disabled && i
        },
        _mouseStart: function(t) {
            var r, i, s, o = this.options,
                u = this.element.position(),
                a = this.element;
            return this.resizing = !0, /absolute/.test(a.css("position")) ? a.css({
                position: "absolute",
                top: a.css("top"),
                left: a.css("left")
            }) : a.is(".ui-draggable") && a.css({
                position: "absolute",
                top: u.top,
                left: u.left
            }), this._renderProxy(), r = n(this.helper.css("left")), i = n(this.helper.css("top")), o.containment && (r += e(o.containment).scrollLeft() || 0, i += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: r,
                top: i
            }, this.size = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalPosition = {
                left: r,
                top: i
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof o.aspectRatio == "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s), a.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var n, r = this.helper,
                i = {}, s = this.originalMousePosition,
                o = this.axis,
                u = this.position.top,
                a = this.position.left,
                f = this.size.width,
                l = this.size.height,
                c = t.pageX - s.left || 0,
                h = t.pageY - s.top || 0,
                p = this._change[o];
            if (!p) return !1;
            n = p.apply(this, [t, c, h]), this._updateVirtualBoundaries(t.shiftKey);
            if (this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);
            return n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), this.position.top !== u && (i.top = this.position.top + "px"), this.position.left !== a && (i.left = this.position.left + "px"), this.size.width !== f && (i.width = this.size.width + "px"), this.size.height !== l && (i.height = this.size.height + "px"), r.css(i), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var n, r, i, s, o, u, a, f = this.options,
                l = this;
            return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                width: l.helper.width() - s,
                height: l.helper.height() - i
            }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                top: a,
                left: u
            })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(e) {
            var t, n, i, s, o, u = this.options;
            o = {
                minWidth: r(u.minWidth) ? u.minWidth : 0,
                maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
                minHeight: r(u.minHeight) ? u.minHeight : 0,
                maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity
            };
            if (this._aspectRatio || e) t = o.minHeight * this.aspectRatio, i = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), i > o.minHeight && (o.minHeight = i), n < o.maxWidth && (o.maxWidth = n), s < o.maxHeight && (o.maxHeight = s);
            this._vBoundaries = o
        },
        _updateCache: function(e) {
            this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function(e) {
            var t = this.position,
                n = this.size,
                i = this.axis;
            return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), i === "sw" && (e.left = t.left + (n.width - e.width), e.top = null), i === "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                n = this.axis,
                i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
                s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = r(e.width) && t.minWidth && t.minWidth > e.width,
                u = r(e.height) && t.minHeight && t.minHeight > e.height,
                a = this.originalPosition.left + this.originalSize.width,
                f = this.position.top + this.size.height,
                l = /sw|nw|w/.test(n),
                c = /nw|ne|n/.test(n);
            return o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight), o && l && (e.left = a - t.minWidth), i && l && (e.left = a - t.maxWidth), u && c && (e.top = f - t.minHeight), s && c && (e.top = f - t.maxHeight), !e.width && !e.height && !e.left && e.top ? e.top = null : !e.width && !e.height && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) return;
            var e, t, n, r, i, s = this.helper || this.element;
            for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                i = this._proportionallyResizeElements[e];
                if (!this.borderDif) {
                    this.borderDif = [], n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")], r = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                    for (t = 0; t < n.length; t++) this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0)
                }
                i.css({
                    height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function() {
            var t = this.element,
                n = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(e, t) {
                var n = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: n.width - t
                }
            },
            n: function(e, t, n) {
                var r = this.originalSize,
                    i = this.originalPosition;
                return {
                    top: i.top + n,
                    height: r.height - n
                }
            },
            s: function(e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function(t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function(t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function(t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function(t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function(t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t !== "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var n = e(this).data("ui-resizable"),
                r = n.options,
                i = n._proportionallyResizeElements,
                s = i.length && /textarea/i.test(i[0].nodeName),
                o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                u = s ? 0 : n.sizeDiff.width,
                a = {
                    width: n.size.width - u,
                    height: n.size.height - o
                }, f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(a, l && f ? {
                top: l,
                left: f
            } : {}), {
                duration: r.animateDuration,
                easing: r.animateEasing,
                step: function() {
                    var r = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    i && i.length && e(i[0]).css({
                        width: r.width,
                        height: r.height
                    }), n._updateCache(r), n._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, r, i, s, o, u, a, f = e(this).data("ui-resizable"),
                l = f.options,
                c = f.element,
                h = l.containment,
                p = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
            if (!p) return;
            f.containerElement = e(p), /document/.test(h) || h === document ? (f.containerOffset = {
                left: 0,
                top: 0
            }, f.containerPosition = {
                left: 0,
                top: 0
            }, f.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(p), r = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                r[e] = n(t.css("padding" + i))
            }), f.containerOffset = t.offset(), f.containerPosition = t.position(), f.containerSize = {
                height: t.innerHeight() - r[3],
                width: t.innerWidth() - r[1]
            }, i = f.containerOffset, s = f.containerSize.height, o = f.containerSize.width, u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, a = e.ui.hasScroll(p) ? p.scrollHeight : s, f.parentData = {
                element: p,
                left: i.left,
                top: i.top,
                width: u,
                height: a
            })
        },
        resize: function(t) {
            var n, r, i, s, o = e(this).data("ui-resizable"),
                u = o.options,
                a = o.containerOffset,
                f = o.position,
                l = o._aspectRatio || t.shiftKey,
                c = {
                    top: 0,
                    left: 0
                }, h = o.containerElement;
            h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? a.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s && (n -= o.parentData.left), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = t.containerOffset,
                i = t.containerPosition,
                s = t.containerElement,
                o = e(t.helper),
                u = o.offset(),
                a = o.outerWidth() - t.sizeDiff.width,
                f = o.outerHeight() - t.sizeDiff.height;
            t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
            }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = function(t) {
                    e(t).each(function() {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof n.alsoResize == "object" && !n.alsoResize.parentNode ? n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function(e) {
                r(e)
            }) : r(n.alsoResize)
        },
        resize: function(t, n) {
            var r = e(this).data("ui-resizable"),
                i = r.options,
                s = r.originalSize,
                o = r.originalPosition,
                u = {
                    height: r.size.height - s.height || 0,
                    width: r.size.width - s.width || 0,
                    top: r.position.top - o.top || 0,
                    left: r.position.left - o.left || 0
                }, a = function(t, r) {
                    e(t).each(function() {
                        var t = e(this),
                            i = e(this).data("ui-resizable-alsoresize"),
                            s = {}, o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(o, function(e, t) {
                            var n = (i[t] || 0) + (u[t] || 0);
                            n && n >= 0 && (s[t] = n || null)
                        }), t.css(s)
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
                a(e, t)
            }) : a(i.alsoResize)
        },
        stop: function() {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = t.size,
                i = t.originalSize,
                s = t.originalPosition,
                o = t.axis,
                u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
                a = u[0] || 1,
                f = u[1] || 1,
                l = Math.round((r.width - i.width) / a) * a,
                c = Math.round((r.height - i.height) / f) * f,
                h = i.width + l,
                p = i.height + c,
                d = n.maxWidth && n.maxWidth < h,
                v = n.maxHeight && n.maxHeight < p,
                m = n.minWidth && n.minWidth > h,
                g = n.minHeight && n.minHeight > p;
            n.grid = u, m && (h += a), g && (p += f), d && (h -= a), v && (p -= f), /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = s.top - c) : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = s.left - l) : (t.size.width = h, t.size.height = p, t.position.top = s.top - c, t.position.left = s.left - l)
        }
    })
})(jQuery);
(function(e, t) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, n = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                t = e(n.options.filter, n.element[0]), t.addClass("ui-selectee"), t.each(function() {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var n = this,
                r = this.options;
            this.opos = [t.pageX, t.pageY];
            if (this.options.disabled) return;
            this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var r = e.data(this, "selectable-item");
                r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }), e(t.target).parents().addBack().each(function() {
                var r, i = e.data(this, "selectable-item");
                if (i) return r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"), i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting"), i.unselecting = !r, i.selecting = r, i.selected = r, r ? n._trigger("selecting", t, {
                    selecting: i.element
                }) : n._trigger("unselecting", t, {
                    unselecting: i.element
                }), !1
            })
        },
        _mouseDrag: function(t) {
            this.dragged = !0;
            if (this.options.disabled) return;
            var n, r = this,
                i = this.options,
                s = this.opos[0],
                o = this.opos[1],
                u = t.pageX,
                a = t.pageY;
            return s > u && (n = u, u = s, s = n), o > a && (n = a, a = o, o = n), this.helper.css({
                left: s,
                top: o,
                width: u - s,
                height: a - o
            }), this.selectees.each(function() {
                var n = e.data(this, "selectable-item"),
                    f = !1;
                if (!n || n.element === r.element[0]) return;
                i.tolerance === "touch" ? f = !(n.left > u || n.right < s || n.top > a || n.bottom < o) : i.tolerance === "fit" && (f = n.left > s && n.right < u && n.top > o && n.bottom < a), f ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, r._trigger("selecting", t, {
                    selecting: n.element
                }))) : (n.selecting && ((t.metaKey || t.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), r._trigger("unselecting", t, {
                    unselecting: n.element
                }))), n.selected && !t.metaKey && !t.ctrlKey && !n.startselected && (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, r._trigger("unselecting", t, {
                    unselecting: n.element
                })))
            }), !1
        },
        _mouseStop: function(t) {
            var n = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function() {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    })
})(jQuery);
(function(e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var t, n, r = this.options,
                i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n));
            for (t = i.length; t < n; t++) o.push(s);
            this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function() {
            var t = this.options,
                n = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), !this.range || !this.range.length ? (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all") : this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }), this.range.addClass(n + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : this.range = e([])
        },
        _setupEvents: function() {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) i = n, s = e(this), o = t
            }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - s.width() / 2,
                top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: i
            }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), s !== !1 && this.value(n))
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
            }
        },
        value: function(e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return
            }
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },
        _setOption: function(t, n) {
            var r, i = 0;
            t === "range" && this.options.range === !0 && (n === "min" ? (this.options.value = this._values(0), this.options.values = null) : n === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (r = 0; r < i; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },
        _values: function(e) {
            var t, n, r;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
            if (this.options.values && this.options.values.length) {
                n = this.options.values.slice();
                for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
                return n
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t,
                r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var t, n, r, i, s, o = this.options.range,
                u = this.options,
                a = this,
                f = this._animateOff ? !1 : u.animate,
                l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    left: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                    bottom: n + "%"
                }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                width: n + "%"
            }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                height: n + "%"
            }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: u.animate
            }))
        },
        _handleEvents: {
            keydown: function(t) {
                var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        t.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                            if (r === !1) return
                        }
                }
                o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + o);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - o)
                }
                this._slide(t, u, s)
            },
            click: function(e) {
                e.preventDefault()
            },
            keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function(e, t) {
    function n(e, t, n) {
        return e > t && e < t + n
    }
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, n) {
            var r = null,
                i = !1,
                s = this;
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type === "static") return !1;
            this._refreshItems(t), e(t.target).parents().each(function() {
                if (e.data(this, s.widgetName + "-item") === s) return r = e(this), !1
            }), e.data(t.target, s.widgetName + "-item") === s && (r = e(t.target));
            if (!r) return !1;
            if (this.options.handle && !n) {
                e(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (i = !0)
                });
                if (!i) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(t, n, r) {
            var i, s = this.options;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r)
                for (i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            var n, r, i, s, o = this.options,
                u = !1;
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = u = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = u = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - e(document).scrollTop() < o.scrollSensitivity ? u = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (u = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)), t.pageX - e(document).scrollLeft() < o.scrollSensitivity ? u = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (u = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))), u !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n], i = r.item[0], s = this._intersectsWithPointer(r);
                if (!s) continue;
                if (r.instance !== this.currentContainer) continue;
                if (i !== this.currentItem[0] && this.placeholder[s === 1 ? "next" : "prev"]()[0] !== i && !e.contains(this.placeholder[0], i) && (this.options.type === "semi-dynamic" ? !e.contains(this.element[0], i) : !0)) {
                    this.direction = s === 1 ? "down" : "up";
                    if (this.options.tolerance !== "pointer" && !this._intersectsWithSides(r)) break;
                    this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, n) {
            if (!t) return;
            e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
            if (this.options.revert) {
                var r = this,
                    i = this.placeholder.offset();
                this.reverting = !0, e(this.helper).animate({
                    left: i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft),
                    top: i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function() {
                    r._clear(t)
                })
            } else this._clear(t, n);
            return !1
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function() {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left,
                c = r + f > u && r + f < a && t + l > s && t + l < o;
            return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function(e) {
            var t = this.options.axis === "x" || n(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                r = this.options.axis === "y" || n(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                i = t && r,
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return i ? this.floating ? o && o === "right" || s === "down" ? 2 : 1 : s && (s === "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var t = n(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                r = n(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                i = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? s === "right" && r || s === "left" && !r : i && (i === "down" && t || i === "up" && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e !== 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e !== 0 && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var n, r, i, s, o = [],
                u = [],
                a = this._connectWith();
            if (a && t)
                for (n = a.length - 1; n >= 0; n--) {
                    i = e(a[n]);
                    for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && u.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s])
                }
            u.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (n = u.length - 1; n >= 0; n--) u[n][0].each(function() {
                o.push(this)
            });
            return e(o)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var n, r, i, s, o, u, a, f, l = this.items,
                c = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                h = this._connectWith();
            if (h && this.ready)
                for (n = h.length - 1; n >= 0; n--) {
                    i = e(h[n]);
                    for (r = i.length - 1; r >= 0; r--) s = e.data(i[r], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([e.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                        item: this.currentItem
                    }) : e(s.options.items, s.element), s]), this.containers.push(s))
                }
            for (n = c.length - 1; n >= 0; n--) {
                o = c[n][1], u = c[n][0];
                for (r = 0, f = u.length; r < f; r++) a = e(u[r]), a.data(this.widgetName + "-item", o), l.push({
                    item: a,
                    instance: o,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, r, i, s;
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n];
                if (r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) continue;
                i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item, t || (r.width = i.outerWidth(), r.height = i.outerHeight()), s = i.offset(), r.left = s.left, r.top = s.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var n, r = t.options;
            if (!r.placeholder || r.placeholder.constructor === String) n = r.placeholder, r.placeholder = {
                element: function() {
                    var r = e(document.createElement(t.currentItem[0].nodeName)).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                    return n || (r.style.visibility = "hidden"), r
                },
                update: function(e, i) {
                    if (n && !r.forcePlaceholderSize) return;
                    i.height() || i.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), i.width() || i.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10))
                }
            };
            t.placeholder = e(r.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), r.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            var n, r, i, s, o, u, a, f, l, c = null,
                h = null;
            for (n = this.containers.length - 1; n >= 0; n--) {
                if (e.contains(this.currentItem[0], this.containers[n].element[0])) continue;
                if (this._intersectsWith(this.containers[n].containerCache)) {
                    if (c && e.contains(this.containers[n].element[0], c.element[0])) continue;
                    c = this.containers[n], h = n
                } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), this.containers[n].containerCache.over = 0)
            }
            if (!c) return;
            if (this.containers.length === 1) this.containers[h]._trigger("over", t, this._uiHash(this)), this.containers[h].containerCache.over = 1;
            else {
                i = 1e4, s = null, o = this.containers[h].floating ? "left" : "top", u = this.containers[h].floating ? "width" : "height", a = this.positionAbs[o] + this.offset.click[o];
                for (r = this.items.length - 1; r >= 0; r--) {
                    if (!e.contains(this.containers[h].element[0], this.items[r].item[0])) continue;
                    if (this.items[r].item[0] === this.currentItem[0]) continue;
                    f = this.items[r].item.offset()[o], l = !1, Math.abs(f - a) > Math.abs(f + this.items[r][u] - a) && (l = !0, f += this.items[r][u]), Math.abs(f - a) < i && (i = Math.abs(f - a), s = this.items[r], this.direction = l ? "up" : "down")
                }
                if (!s && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[h], s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[h].element, !0), this._trigger("change", t, this._uiHash()), this.containers[h]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[h]._trigger("over", t, this._uiHash(this)), this.containers[h].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            return r.parents("body").length || e(n.appendTo !== "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!r[0].style.width || n.forceHelperSize) && r.width(this.currentItem.width()), (!r[0].style.height || n.forceHelperSize) && r.height(this.currentItem.height()), r
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, r, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            if (i.containment === "document" || i.containment === "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            /^(document|window|parent)$/.test(i.containment) || (t = e(i.containment)[0], n = e(i.containment).offset(), r = e(t).css("overflow") !== "hidden", this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (r ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (r ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1,
                i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(i[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var n, r, i = this.options,
                s = t.pageX,
                o = t.pageY,
                u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(u[0].tagName);
            return this.cssPosition === "relative" && (this.scrollParent[0] === document || this.scrollParent[0] === this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - i.grid[1] : n + i.grid[1] : n, r = this.originalPageX + Math.round((s - this.originalPageX) / i.grid[0]) * i.grid[0], s = this.containment ? r - this.offset.click.left >= this.containment[0] && r - this.offset.click.left <= this.containment[2] ? r : r - this.offset.click.left >= this.containment[0] ? r - i.grid[0] : r + i.grid[0] : r)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this.counter;
            this._delay(function() {
                i === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(t, n) {
            this.reverting = !1;
            var r, i = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (r in this._storedCSS)
                    if (this._storedCSS[r] === "auto" || this._storedCSS[r] === "static") this._storedCSS[r] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && i.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !n && i.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (n || (i.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }), i.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), i.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (r = this.containers.length - 1; r >= 0; r--) n || i.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over && (i.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (r = 0; r < i.length; r++) i[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (r = 0; r < i.length; r++) i[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
})(jQuery);
(function(e) {
    function t(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.widget("ui.spinner", {
        version: "1.10.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = {}, n = this.element;
            return e.each(["min", "max", "step"], function(e, r) {
                var i = n.attr(r);
                i !== undefined && i.length && (t[r] = i)
            }), t
        },
        _events: {
            keydown: function(e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(e) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._refresh(), this.previous !== this.element.val() && this._trigger("change", e)
            },
            mousewheel: function(e, t) {
                if (!t) return;
                if (!this.spinning && !this._start(e)) return !1;
                this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                    this.spinning && this._stop(e)
                }, 100), e.preventDefault()
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n
                    }))
                }
                var n;
                n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, r.call(this)
                });
                if (this._start(t) === !1) return;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (!e(t.currentTarget).hasClass("ui-state-active")) return;
                if (this._start(t) === !1) return !1;
                this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(e.height() * .5) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function(t) {
            var n = this.options,
                r = e.ui.keyCode;
            switch (t.keyCode) {
                case r.UP:
                    return this._repeat(null, 1, t), !0;
                case r.DOWN:
                    return this._repeat(null, -1, t), !0;
                case r.PAGE_UP:
                    return this._repeat(null, n.page, t), !0;
                case r.PAGE_DOWN:
                    return this._repeat(null, -n.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function(e) {
            return !this.spinning && this._trigger("start", e) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(e, t, n) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, t, n)
            }, e), this._spin(t * this.options.step, n)
        },
        _spin: function(e, t) {
            var n = this.value() || 0;
            this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", t, {
                value: n
            }) !== !1) this._value(n), this.counter++
        },
        _increment: function(t) {
            var n = this.options.incremental;
            return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function(e) {
            var t = e.toString(),
                n = t.indexOf(".");
            return n === -1 ? 0 : t.length - n - 1
        },
        _adjustValue: function(e) {
            var t, n, r = this.options;
            return t = r.min !== null ? r.min : 0, n = e - t, n = Math.round(n / r.step) * r.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), r.max !== null && e > r.max ? r.max : r.min !== null && e < r.min ? r.min : e
        },
        _stop: function(e) {
            if (!this.spinning) return;
            clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)
        },
        _setOption: function(e, t) {
            if (e === "culture" || e === "numberFormat") {
                var n = this._parse(this.element.val());
                this.options[e] = t, this.element.val(this._format(n));
                return
            }(e === "max" || e === "min" || e === "step") && typeof t == "string" && (t = this._parse(t)), e === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), e === "disabled" && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: t(function(e) {
            this._super(e), this._value(this.element.val())
        }),
        _parse: function(e) {
            return typeof e == "string" && e !== "" && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), e === "" || isNaN(e) ? null : e
        },
        _format: function(e) {
            return e === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(e, t) {
            var n;
            e !== "" && (n = this._parse(e), n !== null && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(e) {
            this._stepUp(e)
        }),
        _stepUp: function(e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: t(function(e) {
            this._stepDown(e)
        }),
        _stepDown: function(e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: t(function(e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: t(function(e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function(e) {
            if (!arguments.length) return this._parse(this.element.val());
            t(this._value).call(this, e)
        },
        widget: function() {
            return this.uiSpinner
        }
    })
})(jQuery);
(function(e, t) {
    function i() {
        return ++n
    }

    function s(e) {
        return e.hash.length > 1 && decodeURIComponent(e.href.replace(r, "")) === decodeURIComponent(location.href.replace(r, ""))
    }
    var n = 0,
        r = /#.*$/;
    e.widget("ui.tabs", {
        version: "1.10.1",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var t = this,
                n = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), n.active = this._initialActive(), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return t.tabs.index(e)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(n.active) : this.active = e(), this._refresh(), this.active.length && this.load(n.active)
        },
        _initialActive: function() {
            var t = this.options.active,
                n = this.options.collapsible,
                r = location.hash.substring(1);
            if (t === null) {
                r && this.tabs.each(function(n, i) {
                    if (e(i).attr("aria-controls") === r) return t = n, !1
                }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active")));
                if (t === null || t === -1) t = this.tabs.length ? 0 : !1
            }
            return t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = n ? !1 : 0)), !n && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        },
        _tabKeydown: function(t) {
            var n = e(this.document[0].activeElement).closest("li"),
                r = this.tabs.index(n),
                i = !0;
            if (this._handlePageNav(t)) return;
            switch (t.keyCode) {
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                    r++;
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.LEFT:
                    i = !1, r--;
                    break;
                case e.ui.keyCode.END:
                    r = this.anchors.length - 1;
                    break;
                case e.ui.keyCode.HOME:
                    r = 0;
                    break;
                case e.ui.keyCode.SPACE:
                    t.preventDefault(), clearTimeout(this.activating), this._activate(r);
                    return;
                case e.ui.keyCode.ENTER:
                    t.preventDefault(), clearTimeout(this.activating), this._activate(r === this.options.active ? !1 : r);
                    return;
                default:
                    return
            }
            t.preventDefault(), clearTimeout(this.activating), r = this._focusNextTab(r, i), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(r).attr("aria-selected", "true"), this.activating = this._delay(function() {
                this.option("active", r)
            }, this.delay))
        },
        _panelKeydown: function(t) {
            if (this._handlePageNav(t)) return;
            t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(t) {
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        },
        _findNextTab: function(t, n) {
            function i() {
                return t > r && (t = 0), t < 0 && (t = r), t
            }
            var r = this.tabs.length - 1;
            while (e.inArray(i(), this.options.disabled) !== -1) t = n ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function(e, t) {
            if (e === "active") {
                this._activate(t);
                return
            }
            if (e === "disabled") {
                this._setupDisabled(t);
                return
            }
            this._super(e, t), e === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), !t && this.options.active === !1 && this._activate(0)), e === "event" && this._setupEvents(t), e === "heightStyle" && this._setupHeightStyle(t)
        },
        _tabId: function(e) {
            return e.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) {
                return n.index(e)
            }), this._processTabs(), t.active === !1 || !this.anchors.length ? (t.active = !1, this.active = e()) : this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function(n, r) {
                var i, o, u, a = e(r).uniqueId().attr("id"),
                    f = e(r).closest("li"),
                    l = f.attr("aria-controls");
                s(r) ? (i = r.hash, o = t.element.find(t._sanitizeSelector(i))) : (u = t._tabId(f), i = "#" + u, o = t.element.find(i), o.length || (o = t._createPanel(u), o.insertAfter(t.panels[n - 1] || t.tablist)), o.attr("aria-live", "polite")), o.length && (t.panels = t.panels.add(o)), l && f.data("ui-tabs-aria-controls", l), f.attr({
                    "aria-controls": i.substring(1),
                    "aria-labelledby": a
                }), o.attr("aria-labelledby", a)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var n = 0, r; r = this.tabs[n]; n++) t === !0 || e.inArray(n, t) !== -1 ? e(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function(t) {
            var n = {
                click: function(e) {
                    e.preventDefault()
                }
            };
            t && e.each(t.split(" "), function(e, t) {
                n[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var n, r = this.element.parent();
            t === "fill" ? (n = r.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    r = t.css("position");
                if (r === "absolute" || r === "fixed") return;
                n -= t.outerHeight(!0)
            }), this.element.children().not(this.panels).each(function() {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function() {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : t === "auto" && (n = 0, this.panels.each(function() {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        },
        _eventHandler: function(t) {
            var n = this.options,
                r = this.active,
                i = e(t.currentTarget),
                s = i.closest("li"),
                o = s[0] === r[0],
                u = o && n.collapsible,
                a = u ? e() : this._getPanelForTab(s),
                f = r.length ? this._getPanelForTab(r) : e(),
                l = {
                    oldTab: r,
                    oldPanel: f,
                    newTab: u ? e() : s,
                    newPanel: a
                };
            t.preventDefault();
            if (s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", t, l) === !1) return;
            n.active = u ? !1 : this.tabs.index(s), this.active = o ? e() : s, this.xhr && this.xhr.abort(), !f.length && !a.length && e.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, l)
        },
        _toggle: function(t, n) {
            function o() {
                r.running = !1, r._trigger("activate", t, n)
            }

            function u() {
                n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), i.length && r.options.show ? r._show(i, r.options.show, o) : (i.show(), o())
            }
            var r = this,
                i = n.newPanel,
                s = n.oldPanel;
            this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), u()
            }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), u()), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), n.oldTab.attr("aria-selected", "false"), i.length && s.length ? n.oldTab.attr("tabIndex", -1) : i.length && this.tabs.filter(function() {
                return e(this).attr("tabIndex") === 0
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), n.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var n, r = this._findActive(t);
            if (r[0] === this.active[0]) return;
            r.length || (r = this.active), n = r.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            })
        },
        _findActive: function(t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function(e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), this.options.heightStyle !== "content" && this.panels.css("height", "")
        },
        enable: function(n) {
            var r = this.options.disabled;
            if (r === !1) return;
            n === t ? r = !1 : (n = this._getIndex(n), e.isArray(r) ? r = e.map(r, function(e) {
                return e !== n ? e : null
            }) : r = e.map(this.tabs, function(e, t) {
                return t !== n ? t : null
            })), this._setupDisabled(r)
        },
        disable: function(n) {
            var r = this.options.disabled;
            if (r === !0) return;
            if (n === t) r = !0;
            else {
                n = this._getIndex(n);
                if (e.inArray(n, r) !== -1) return;
                e.isArray(r) ? r = e.merge([n], r).sort() : r = [n]
            }
            this._setupDisabled(r)
        },
        load: function(t, n) {
            t = this._getIndex(t);
            var r = this,
                i = this.tabs.eq(t),
                o = i.find(".ui-tabs-anchor"),
                u = this._getPanelForTab(i),
                a = {
                    tab: i,
                    panel: u
                };
            if (s(o[0])) return;
            this.xhr = e.ajax(this._ajaxSettings(o, n, a)), this.xhr && this.xhr.statusText !== "canceled" && (i.addClass("ui-tabs-loading"), u.attr("aria-busy", "true"), this.xhr.success(function(e) {
                setTimeout(function() {
                    u.html(e), r._trigger("load", n, a)
                }, 1)
            }).complete(function(e, t) {
                setTimeout(function() {
                    t === "abort" && r.panels.stop(!1, !0), i.removeClass("ui-tabs-loading"), u.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
                }, 1)
            }))
        },
        _ajaxSettings: function(t, n, r) {
            var i = this;
            return {
                url: t.attr("href"),
                beforeSend: function(t, s) {
                    return i._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: s
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    })
})(jQuery);
(function(e) {
    function n(t, n) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(r.join(" ")))
    }

    function r(t) {
        var n = t.data("ui-tooltip-id"),
            r = (t.attr("aria-describedby") || "").split(/\s+/),
            i = e.inArray(n, r);
        i !== -1 && r.splice(i, 1), t.removeData("ui-tooltip-id"), r = e.trim(r.join(" ")), r ? t.attr("aria-describedby", r) : t.removeAttr("aria-describedby")
    }
    var t = 0;
    e.widget("ui.tooltip", {
        version: "1.10.1",
        options: {
            content: function() {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(t, n) {
            var r = this;
            if (t === "disabled") {
                this[n ? "_disable" : "_enable"](), this.options[t] = n;
                return
            }
            this._super(t, n), t === "content" && e.each(this.tooltips, function(e, t) {
                r._updateContent(t)
            })
        },
        _disable: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function(t) {
            var n = this,
                r = e(t ? t.target : this.element).closest(this.options.items);
            if (!r.length || r.data("ui-tooltip-id")) return;
            r.attr("title") && r.data("ui-tooltip-title", r.attr("title")), r.data("ui-tooltip-open", !0), t && t.type === "mouseover" && r.parents().each(function() {
                var t = e(this),
                    r;
                t.data("ui-tooltip-open") && (r = e.Event("blur"), r.target = r.currentTarget = this, n.close(r, !0)), t.attr("title") && (t.uniqueId(), n.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                }, t.attr("title", ""))
            }), this._updateContent(r, t)
        },
        _updateContent: function(e, t) {
            var n, r = this.options.content,
                i = this,
                s = t ? t.type : null;
            if (typeof r == "string") return this._open(t, e, r);
            n = r.call(e[0], function(n) {
                if (!e.data("ui-tooltip-open")) return;
                i._delay(function() {
                    t && (t.type = s), this._open(t, e, n)
                })
            }), n && this._open(t, e, n)
        },
        _open: function(t, r, i) {
            function f(e) {
                a.of = e;
                if (s.is(":hidden")) return;
                s.position(a)
            }
            var s, o, u, a = e.extend({}, this.options.position);
            if (!i) return;
            s = this._find(r);
            if (s.length) {
                s.find(".ui-tooltip-content").html(i);
                return
            }
            r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title")), s = this._tooltip(r), n(r, s.attr("id")), s.find(".ui-tooltip-content").html(i), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                mousemove: f
            }), f(t)) : s.position(e.extend({
                of: r
            }, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (u = this.delayedShow = setInterval(function() {
                s.is(":visible") && (f(a.of), clearInterval(u))
            }, e.fx.interval)), this._trigger("open", t, {
                tooltip: s
            }), o = {
                keyup: function(t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var n = e.Event(t);
                        n.currentTarget = r[0], this.close(n, !0)
                    }
                },
                remove: function() {
                    this._removeTooltip(s)
                }
            };
            if (!t || t.type === "mouseover") o.mouseleave = "close";
            if (!t || t.type === "focusin") o.focusout = "close";
            this._on(!0, r, o)
        },
        close: function(t) {
            var n = this,
                i = e(t ? t.currentTarget : this.element),
                s = this._find(i);
            if (this.closing) return;
            clearInterval(this.delayedShow), i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), s.stop(!0), this._hide(s, this.options.hide, function() {
                n._removeTooltip(e(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && e.each(this.parents, function(t, r) {
                e(r.element).attr("title", r.title), delete n.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: s
            }), this.closing = !1
        },
        _tooltip: function(n) {
            var r = "ui-tooltip-" + t++,
                i = e("<div>").attr({
                    id: r,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = n, i
        },
        _find: function(t) {
            var n = t.data("ui-tooltip-id");
            return n ? e("#" + n) : e()
        },
        _removeTooltip: function(e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _destroy: function() {
            var t = this;
            e.each(this.tooltips, function(n, r) {
                var i = e.Event("blur");
                i.target = i.currentTarget = r[0], t.close(i, !0), e("#" + n).remove(), r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);

/*-=- Contents of scripts/lib/underscore.min.js -=-*/

(function() {
    var n = this,
        t = n._,
        r = {}, e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        d = e.filter,
        g = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        j = i.bind,
        w = function(n) {
            return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.4";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
            for (var u = 0, i = n.length; i > u; u++)
                if (t.call(e, n[u], u, n) === r) return
        } else
            for (var a in n)
                if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !! u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !! u)
    };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = w.isFunction(t);
        return w.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t, r) {
        return w.isEmpty(t) ? r ? null : [] : w[r ? "find" : "filter"](n, function(n) {
            for (var r in t)
                if (t[r] !== n[r]) return !1;
            return !0
        })
    }, w.findWhere = function(n, t) {
        return w.where(n, t, !0)
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var k = function(n) {
        return w.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = k(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var F = function(n, t, r, e) {
        var u = {}, i = k(t || w.identity);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    w.groupBy = function(n, t, r) {
        return F(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return F(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n, function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t) return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t) return u;
        return -1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n, n += r;
        return i
    }, w.bind = function(n, t) {
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        var r = o.call(arguments, 2);
        return function() {
            return n.apply(t, r.concat(o.call(arguments)))
        }
    }, w.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 === t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity),
        function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a = 0,
            o = function() {
                a = new Date, u = null, i = n.apply(r, e)
            };
        return function() {
            var c = new Date,
                l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    e = null, r || (u = n.apply(i, a))
                }, c = r && !e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ || function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {}, r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t) null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var I = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t)) return !1;
        switch (u) {
            case "[object String]":
                return n == t + "";
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t) return !1;
        for (var i = r.length; i--;)
            if (r[i] == n) return e[i] == t;
        r.push(n), e.push(t);
        var a = 0,
            o = !0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length)
                for (; a-- && (o = I(n[a], t[a], r, e)););
        } else {
            var c = n.constructor,
                f = t.constructor;
            if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
            for (var s in n)
                if (w.has(n, s) && (a++, !(o = w.has(t, s) && I(n[s], t[s], r, e)))) break;
            if (o) {
                for (s in t)
                    if (w.has(t, s) && !a--) break;
                o = !a
            }
        }
        return r.pop(), e.pop(), o
    };
    w.isEqual = function(n, t) {
        return I(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n) return !0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n)
            if (w.has(n, t)) return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n || !w.has(n, "callee"))
    }), "function" != typeof / . / && (w.isFunction = function(n) {
        return "function" == typeof n
    }), w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    }, w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return n === void 0
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = w.invert(M.escape);
    var S = {
        escape: RegExp("[" + w.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(M.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(S[n], function(t) {
                return M[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), D.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
        q = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            " ": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        var e;
        r = w.defaults({}, r, w.templateSettings);
        var u = RegExp([(r.escape || T).source, (r.interpolate || T).source, (r.evaluate || T).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(B, function(n) {
                return "\\" + q[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, w);
        var c = function(n) {
            return e.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var D = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], D.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return D.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);

/*-=- Contents of scripts/lib/jquery.ba-bbq.min.js -=-*/

/*!
 * jQuery BBQ: Back Button & Query Library - v1.3pre - 8/26/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($) {
    "use strict";

    function o(n) {
        return typeof n == "string"
    }

    function e(n) {
        var t = b.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(b.call(arguments)))
        }
    }

    function ct(n) {
        return n.replace(c, "$2")
    }

    function lt(n) {
        return n.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function et(i, u, e, s, a) {
        var p, v, y, b, d;
        return s !== n ? (y = e.match(i ? c : /^([^#?]*)\??([^#]*)(#?.*)/), d = y[3] || "", a === 2 && o(s) ? v = s.replace(i ? h : rt, "") : (b = t(y[2]), s = o(s) ? t[i ? r : f](s) : s, v = a === 2 ? s : a === 1 ? $.extend({}, s, b) : $.extend({}, b, s), v = k(v), i && (v = v.replace(ut, l))), p = y[1] + (i ? w : v || !y[1] ? "?" : "") + v + d) : p = u(e !== n ? e : location.href), p
    }

    function ot(i, e, s) {
        return e === n || typeof e == "boolean" ? (s = e, e = u[i ? r : f]()) : e = o(e) ? e.replace(i ? h : rt, "") : e, t(e, s)
    }

    function st(t, i, r, f) {
        return o(r) || typeof r == "object" || (f = r, r = i, i = n), this.each(function() {
            var e = $(this),
                n = i || nt()[(this.nodeName || "").toLowerCase()] || "",
                o = n && e.attr(n) || "";
            e.attr(n, u[t](o, r, f))
        })
    }
    var n, b = Array.prototype.slice,
        l = decodeURIComponent,
        u = $.param,
        k, i, t, a, v = $.bbq = $.bbq || {}, d, g, nt, tt = $.event.special,
        it = "hashchange",
        f = "querystring",
        r = "fragment",
        y = "elemUrlAttr",
        p = "href",
        s = "src",
        rt = /^.*\?|#.*$/g,
        h, c, ut, ft, w, ht = {};
    u[f] = e(et, 0, lt);
    u[r] = i = e(et, 1, ct);
    u.sorted = k = function(n, t) {
        var r = [],
            i = {};
        return $.each(u(n, t).split("&"), function(n, t) {
            var u = t.replace(/(?:%5B|=).*$/, ""),
                f = i[u];
            f || (f = i[u] = [], r.push(u));
            f.push(t)
        }), $.map(r.sort(), function(n) {
            return i[n]
        }).join("&")
    };
    i.noEscape = function(n) {
        n = n || "";
        var t = $.map(n.split(""), encodeURIComponent);
        ut = new RegExp(t.join("|"), "g")
    };
    i.noEscape(",/");
    i.ajaxCrawlable = function(t) {
        return t !== n && (t ? (h = /^.*(?:#!|#)/, c = /^([^#]*)(?:#!|#)?(.*)$/, w = "#!") : (h = /^.*#/, c = /^([^#]*)#?(.*)$/, w = "#"), ft = !! t), ft
    };
    i.ajaxCrawlable(0);
    $.deparam = t = function(t, i) {
        var r = {}, u = {
                "true": !0,
                "false": !1,
                "null": null
            };
        return $.each(t.replace(/\+/g, " ").split("&"), function(t, f) {
            var v = f.split("="),
                s = l(v[0]),
                e, a = r,
                c = 0,
                o = s.split("]["),
                h = o.length - 1;
            if (/\[/.test(o[0]) && /\]$/.test(o[h]) ? (o[h] = o[h].replace(/\]$/, ""), o = o.shift().split("[").concat(o), h = o.length - 1) : h = 0, v.length === 2)
                if (e = l(v[1]), i && (e = e && !isNaN(e) ? +e : e === "undefined" ? n : u[e] !== n ? u[e] : e), h)
                    for (; c <= h; c++) s = o[c] === "" ? a.length : o[c], a = a[s] = c < h ? a[s] || (o[c + 1] && isNaN(o[c + 1]) ? {} : []) : e;
                else $.isArray(r[s]) ? r[s].push(e) : r[s] = r[s] !== n ? [r[s], e] : e;
                else s && (r[s] = i ? n : "")
        }), r
    };
    t[f] = e(ot, 0);
    t[r] = a = e(ot, 1);
    $[y] || ($[y] = function(n) {
        return $.extend(ht, n)
    })({
        a: p,
        base: p,
        iframe: s,
        img: s,
        input: s,
        form: "action",
        link: p,
        script: s
    });
    nt = $[y];
    $.fn[f] = e(st, f);
    $.fn[r] = e(st, r);
    v.pushState = d = function(t, r) {
        o(t) && /^#/.test(t) && r === n && (r = 2);
        var u = t !== n,
            f = i(location.href, u ? t : {}, u ? r : 2);
        location.href = f
    };
    v.getState = g = function(t, i) {
        return t === n || typeof t == "boolean" ? a(t) : a(i)[t]
    };
    v.removeState = function(t) {
        var i = {};
        t !== n && (i = g(), $.each($.isArray(t) ? t : arguments, function(n, t) {
            delete i[t]
        }));
        d(i, 2)
    };
    tt[it] = $.extend(tt[it], {
        add: function(u) {
            function e(u) {
                var e = u[r] = i();
                u.getState = function(i, r) {
                    return i === n || typeof i == "boolean" ? t(e, i) : t(e, r)[i]
                };
                f.apply(this, arguments)
            }
            var f;
            if ($.isFunction(u)) return f = u, e;
            f = u.handler;
            u.handler = e
        }
    })
})(jQuery);
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($, n, t) {
    function r(n) {
        return n = n || location.href, "#" + n.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var i = "hashchange",
        u = document,
        f, o = $.event.special,
        s = u.documentMode,
        e = "on" + i in n && (s === t || s > 7);
    $.fn[i] = function(n) {
        return n ? this.bind(i, n) : this.trigger(i)
    };
    $.fn[i].delay = 50;
    o[i] = $.extend(o[i], {
        setup: function() {
            if (e) return !1;
            $(f.start)
        },
        teardown: function() {
            if (e) return !1;
            $(f.stop)
        }
    });
    f = function() {
        function l() {
            var u = r(),
                t = a(s);
            u !== s ? (c(s = u, t), $(n).trigger(i)) : t !== s && (location.href = location.href.replace(/#.*/, "") + t);
            o = setTimeout(l, $.fn[i].delay)
        }
        var f = {}, o, s = r(),
            h = function(n) {
                return n
            }, c = h,
            a = h;
        return f.start = function() {
            o || l()
        }, f.stop = function() {
            o && clearTimeout(o);
            o = t
        }, navigator.userAgent.match(/MSIE\s([\d.]+)/) && !e && function() {
            var n, t;
            f.start = function() {
                n || (t = $.fn[i].src, t = t && t + r(), n = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    t || c(r());
                    l()
                }).attr("src", t || "javascript:0").insertAfter("body")[0].contentWindow, u.onpropertychange = function() {
                    try {
                        event.propertyName === "title" && (n.document.title = u.title)
                    } catch (t) {}
                })
            };
            f.stop = h;
            a = function() {
                return r(n.location.href)
            };
            c = function(t, r) {
                var f = n.document,
                    e = $.fn[i].domain;
                t !== r && (f.title = u.title, f.open(), e && f.write('<script>document.domain="' + e + '"<\/script>'), f.close(), n.location.hash = t)
            }
        }(), f
    }()
})(jQuery, window);

/*-=- Contents of scripts/lib/jquery.ba-postmessage.min.js -=-*/

/*!
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($) {
    var t, o, h = 1,
        r = {}, n = {}, c = "subscription_",
        i = this,
        u = !1,
        f = "postMessage",
        e = "addEventListener",
        s = i[f];
    $[f] = function(n, t, i) {
        t && (n = typeof n == "string" ? n : $.param(n), i = i || parent, s ? i[f](n, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (i.location = t.replace(/#.*$/, "") + "#" + +new Date + h+++"&" + n))
    };
    $.receiveMessage = function() {
        function l(n) {
            i[e] ? i[e]("message", n, u) : i.attachEvent("onmessage", n)
        }

        function a(n) {
            i[e] ? i.removeEventListener("message", n, u) : i.detachEvent("onmessage", n)
        }

        function v() {
            for (var n in r) r.hasOwnProperty(n) && r[n].unsubscribe();
            r = {}
        }

        function y(t) {
            for (var i in n) n.hasOwnProperty(i) && n[i].callback(t)
        }

        function p() {
            for (var t in n) n.hasOwnProperty(t) && n[t].subscription.unsubscribe();
            n = {}
        }

        function w() {
            var t = 0,
                i;
            for (i in n) n.hasOwnProperty(i) && t++;
            return t
        }

        function f() {
            return c + h++
        }
        var h = 0;
        return function(i, e, h) {
            var c, b, k;
            return s ? i ? (k = function(n) {
                return typeof e == "string" && n.origin !== e || $.isFunction(e) && e(n.origin) === u ? u : (i(n), !0)
            }, l(k), c = f(), b = function() {
                var n = !1;
                return {
                    unsubscribe: function() {
                        n || (a(k), delete r[c], n = !0)
                    }
                }
            }(), r[c] = b, b) : (v(), null) : (t && clearInterval(t), t = null, i ? (h = typeof e == "number" ? e : typeof h == "number" ? h : 100, t = setInterval(function() {
                var n = document.location.hash,
                    t = /^#?\d+&/;
                n !== o && t.test(n) && (o = n, y({
                    data: n.replace(t, "")
                }))
            }, h), c = f(), b = function() {
                var i = !1;
                return {
                    unsubscribe: function() {
                        i || (delete n[c], w() === 0 && (t && clearInterval(t), t = null), i = !0)
                    }
                }
            }(), n[c] = {
                subscription: b,
                callback: i
            }, b) : (p(n), null))
        }
    }()
})(jQuery);

/*-=- Contents of scripts/lib/jquery.ajaxqueue.min.js -=-*/

(function(n) {
    "use strict";
    var i = n.ajax,
        u = {}, t = [],
        r = [],
        f = [];
    n.ajax = function(n) {
        var e, s, o;
        n = jQuery.extend(n, jQuery.extend({}, jQuery.ajaxSettings, n));
        e = n.port;
        switch (n.mode) {
            case "abort":
                return u[e] && u[e].abort(), u[e] = i.apply(this, arguments);
            case "queue":
                s = n.complete;
                n.complete = function() {
                    s && s.apply(this, arguments);
                    jQuery([i]).queue("ajax" + e).length > 0 ? jQuery([i]).dequeue("ajax" + e) : f[e] = !1
                };
                jQuery([i]).queue("ajax" + e, function() {
                    i(n)
                });
                jQuery([i]).queue("ajax" + e).length != 1 || f[e] || (f[e] = !0, jQuery([i]).dequeue("ajax" + e));
                return;
            case "sync":
                o = t.length;
                t[o] = {
                    error: n.error,
                    success: n.success,
                    complete: n.complete,
                    done: !1
                };
                r[o] = {
                    error: [],
                    success: [],
                    complete: []
                };
                n.error = function() {
                    r[o].error = arguments
                };
                n.success = function() {
                    r[o].success = arguments
                };
                n.complete = function() {
                    if (r[o].complete = arguments, t[o].done = !0, o == 0 || !t[o - 1])
                        for (var n = o; n < t.length && t[n].done; n++) t[n].error && t[n].error.apply(jQuery, r[n].error), t[n].success && t[n].success.apply(jQuery, r[n].success), t[n].complete && t[n].complete.apply(jQuery, r[n].complete), t[n] = null, r[n] = null
                }
        }
        return i.apply(this, arguments)
    }
})(jQuery);

/*-=- Contents of scripts/lib/jquery.uniform.min.js -=-*/

(function(n, t) {
    "use strict";

    function i(n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return n.prop ? n.prop.apply(n, t) : n.attr.apply(n, t)
    }

    function r(n, t, i) {
        var r, u;
        for (r in i) i.hasOwnProperty(r) && (u = r.replace(/ |$/g, t.eventNamespace), n.bind(r, i[r]))
    }

    function f(n, t, i) {
        r(n, i, {
            focus: function() {
                t.addClass(i.focusClass)
            },
            blur: function() {
                t.removeClass(i.focusClass);
                t.removeClass(i.activeClass)
            },
            mouseenter: function() {
                t.addClass(i.hoverClass)
            },
            mouseleave: function() {
                t.removeClass(i.hoverClass);
                t.removeClass(i.activeClass)
            },
            "mousedown touchbegin": function() {
                n.is(":disabled") || t.addClass(i.activeClass)
            },
            "mouseup touchend": function() {
                t.removeClass(i.activeClass)
            }
        })
    }

    function e(n, t) {
        n.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass)
    }

    function p(n, t, i) {
        i ? n.addClass(t) : n.removeClass(t)
    }

    function o(n, t, i) {
        var r = "checked",
            u = t.is(":" + r);
        t.prop ? t.prop(r, u) : u ? t.attr(r, r) : t.removeAttr(r);
        p(n, i.checkedClass, u)
    }

    function u(n, t, i) {
        p(n, i.disabledClass, t.is(":disabled"))
    }

    function a(n, t, i) {
        switch (i) {
            case "after":
                return n.after(t), n.next();
            case "before":
                return n.before(t), n.prev();
            case "wrap":
                return n.wrap(t), n.parent()
        }
        return null
    }

    function s(t, r, f) {
        var e, o, s;
        return f || (f = {}), f = n.extend({
            bind: {},
            divClass: null,
            divWrap: "wrap",
            spanClass: null,
            spanHtml: null,
            spanWrap: "wrap"
        }, f), e = n("<div />"), o = n("<span />"), r.autoHide && t.is(":hidden") && t.css("display") === "none" && e.hide(), f.divClass && e.addClass(f.divClass), f.spanClass && o.addClass(f.spanClass), s = i(t, "id"), r.useID && s && i(e, "id", r.idPrefix + "-" + s), f.spanHtml && o.html(f.spanHtml), e = a(t, e, f.divWrap), o = a(t, o, f.spanWrap), u(e, t, r), {
            div: e,
            span: o
        }
    }

    function it() {
        var u, t, i, r, f;
        return r = "rgb(120,2,153)", t = n('<div style="width:0;height:0;color:' + r + '">'), n("body").append(t), i = t.get(0), window.getComputedStyle && (f = window.getComputedStyle(i, "")), u = (f || i.currentStyle || i.style || {}).color, t.remove(), u.replace(/ /g, "") !== r
    }

    function rt(t) {
        return t ? n("<span />").text(t).html() : ""
    }

    function w(n) {
        var t;
        return n[0].multiple ? !0 : (t = i(n, "size"), !t || t <= 1) ? !1 : !0
    }

    function c() {
        return !1
    }

    function l(n, t) {
        var i = "none";
        r(n, t, {
            "selectstart dragstart mousedown": c
        });
        n.css({
            MozUserSelect: i,
            msUserSelect: i,
            webkitUserSelect: i,
            userSelect: i
        })
    }

    function b(n, t, i) {
        var r = n.val();
        r === "" ? r = i.fileDefaultHtml : (r = r.split(/[\/\\]+/), r = r[r.length - 1]);
        t.text(r)
    }

    function ut(n, t, i) {
        var r, u;
        for (r = [], n.each(function() {
            var n;
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (r.push({
                el: this,
                name: n,
                old: this.style[n]
            }), this.style[n] = t[n])
        }), i(); r.length;) u = r.pop(), u.el.style[u.name] = u.old
    }

    function k(n, t) {
        ut(n.parents().addBack().not(":visible"), {
            visibility: "hidden",
            display: "block",
            position: "absolute"
        }, t)
    }

    function d(n, t) {
        return function() {
            n.unwrap().unwrap().unbind(t.eventNamespace)
        }
    }
    var y = navigator.userAgent,
        h = y.match(/MSIE\s([\d.]+)/),
        tt = y.match(/Firefox\/([\d.]+)+/),
        v = !0,
        g = !1,
        nt = [{
            match: function(n) {
                return n.is("a, button, :submit, :reset, input[type='button']")
            },
            apply: function(n, t) {
                var o, c, a, y, v;
                return c = t.submitDefaultHtml, n.is(":reset") && (c = t.resetDefaultHtml), y = n.is("a, button") ? function() {
                    return n.html() || c
                } : function() {
                    return rt(i(n, "value")) || c
                }, a = s(n, t, {
                    divClass: t.buttonClass,
                    spanHtml: y()
                }), o = a.div, f(a.span, o, t), v = !1, r(o, t, {
                    "click touchend": function() {
                        var r, f, t, u;
                        v || (v = !0, n[0].dispatchEvent ? (r = document.createEvent("MouseEvents"), r.initEvent("click", !0, !0), f = n[0].dispatchEvent(r), (h || tt) && n.is("a") && f && (t = i(n, "target"), u = i(n, "href"), t && t !== "_self" ? window.open(u, t) : document.location.href = u)) : n.click(), v = !1)
                    }
                }), l(o, t), {
                    remove: function() {
                        return o.after(n), o.remove(), n.unbind(t.eventNamespace), n
                    },
                    update: function() {
                        e(o, t);
                        u(o, n, t);
                        a.span.html(y())
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is(":checkbox")
            },
            apply: function(n, t) {
                var c, h, i;
                return c = s(n, t, {
                    divClass: t.checkboxClass
                }), h = c.div, i = c.span, f(n, h, t), r(n, t, {
                    "click touchend": function() {
                        o(i, n, t)
                    }
                }), o(i, n, t), {
                    remove: d(n, t),
                    update: function() {
                        e(h, t);
                        i.removeClass(t.checkedClass);
                        o(i, n, t);
                        u(h, n, t)
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is(":file")
            },
            apply: function(t, o) {
                function w() {
                    b(t, c, o)
                }
                var y, v, c, p;
                return y = s(t, o, {
                    divClass: o.fileClass,
                    spanClass: o.fileButtonClass,
                    spanHtml: o.fileButtonHtml,
                    spanWrap: "after"
                }), v = y.div, p = y.span, c = n("<span />").html(o.fileDefaultHtml), c.addClass(o.filenameClass), c = a(t, c, "after"), i(t, "size") || i(t, "size", v.width() / 10), f(t, v, o), w(), h ? r(t, o, {
                    click: function() {
                        t.trigger("change");
                        setTimeout(w, 0)
                    }
                }) : r(t, o, {
                    change: w
                }), l(c, o), l(p, o), {
                    remove: function() {
                        return c.remove(), p.remove(), t.unwrap().unbind(o.eventNamespace)
                    },
                    update: function() {
                        e(v, o);
                        b(t, c, o);
                        u(v, t, o)
                    }
                }
            }
        }, {
            match: function(n) {
                if (n.is("input")) {
                    var t = (" " + i(n, "type") + " ").toLowerCase();
                    return " color date datetime datetime-local email month number password search tel text time url week ".indexOf(t) >= 0
                }
                return !1
            },
            apply: function(n) {
                var t = i(n, "type");
                return n.addClass(t), {
                    remove: function() {
                        n.removeClass(t)
                    },
                    update: c
                }
            }
        }, {
            match: function(n) {
                return n.is(":radio")
            },
            apply: function(t, h) {
                var l, c, a;
                return l = s(t, h, {
                    divClass: h.radioClass
                }), c = l.div, a = l.span, f(t, c, h), r(t, h, {
                    "click touchend": function() {
                        n.uniform.update(n(':radio[name="' + i(t, "name") + '"]'))
                    }
                }), o(a, t, h), {
                    remove: d(t, h),
                    update: function() {
                        e(c, h);
                        o(a, t, h);
                        u(c, t, h)
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is("select") && !w(n) ? !0 : !1
            },
            apply: function(t, i) {
                var c, h, o, a;
                return i.selectAutoWidth && k(t, function() {
                    a = t.width()
                }), c = s(t, i, {
                    divClass: i.selectClass,
                    spanHtml: (t.find(":selected:first") || t.find("option:first")).html(),
                    spanWrap: "before"
                }), h = c.div, o = c.span, i.selectAutoWidth ? k(t, function() {
                    var n;
                    n = o.outerWidth() - o.width();
                    h.width(a + n);
                    o.width(a)
                }) : h.addClass("fixedWidth"), f(t, h, i), r(t, i, {
                    change: function() {
                        o.html(t.find(":selected").html());
                        h.removeClass(i.activeClass)
                    },
                    "click touchend": function() {
                        var n = t.find(":selected").html();
                        o.html() !== n && t.trigger("change")
                    },
                    keyup: function() {
                        o.html(t.find(":selected").html())
                    }
                }), l(o, i), {
                    remove: function() {
                        return o.remove(), t.unwrap().unbind(i.eventNamespace), t
                    },
                    update: function() {
                        i.selectAutoWidth ? (n.uniform.restore(t), t.uniform(i)) : (e(h, i), o.html(t.find(":selected").html()), u(h, t, i))
                    }
                }
            }
        }, {
            match: function(n) {
                return n.is("select") && w(n) ? !0 : !1
            },
            apply: function(n, t) {
                return n.addClass(t.selectMultiClass), {
                    remove: function() {
                        n.removeClass(t.selectMultiClass)
                    },
                    update: c
                }
            }
        }, {
            match: function(n) {
                return n.is("textarea")
            },
            apply: function(n, t) {
                return n.addClass(t.textareaClass), {
                    remove: function() {
                        n.removeClass(t.textareaClass)
                    },
                    update: c
                }
            }
        }];
    h && parseFloat(h[1]) < 7 && (v = !1);
    n.uniform = {
        defaults: {
            activeClass: "active",
            autoHide: !0,
            buttonClass: "uni-button",
            checkboxClass: "checker",
            checkedClass: "checked",
            disabledClass: "disabled",
            eventNamespace: ".uniform",
            fileButtonClass: "action",
            fileButtonHtml: "Choose File",
            fileClass: "uploader",
            fileDefaultHtml: "No file selected",
            filenameClass: "filename",
            focusClass: "focus",
            hoverClass: "hover",
            idPrefix: "uniform",
            radioClass: "radio",
            resetDefaultHtml: "Reset",
            resetSelector: !1,
            selectAutoWidth: !0,
            selectClass: "selector",
            selectMultiClass: "uniform-multiselect",
            submitDefaultHtml: "Submit",
            textareaClass: "uniform",
            useID: !0
        },
        elements: []
    };
    n.fn.uniform = function(t) {
        var i = this;
        return (t = n.extend({}, n.uniform.defaults, t), g || (g = !0, it() && (v = !1)), !v) ? this : (t.resetSelector && n(t.resetSelector).mouseup(function() {
            window.setTimeout(function() {
                n.uniform.update(i)
            }, 10)
        }), this.each(function() {
            var i = n(this),
                r, u, f;
            if (i.data("uniformed")) {
                n.uniform.update(i);
                return
            }
            for (r = 0; r < nt.length; r = r + 1)
                if (u = nt[r], u.match(i, t)) {
                    f = u.apply(i, t);
                    i.data("uniformed", f);
                    n.uniform.elements.push(i.get(0));
                    return
                }
        }))
    };
    n.uniform.restore = n.fn.uniform.restore = function(i) {
        i === t && (i = n.uniform.elements);
        n(i).each(function() {
            var r = n(this),
                t, i;
            (i = r.data("uniformed"), i) && (i.remove(), t = n.inArray(this, n.uniform.elements), t >= 0 && n.uniform.elements.splice(t, 1), r.removeData("uniformed"))
        })
    };
    n.uniform.update = n.fn.uniform.update = function(i) {
        i === t && (i = n.uniform.elements);
        n(i).each(function() {
            var i = n(this),
                t;
            (t = i.data("uniformed"), t) && t.update(i, t.options)
        })
    }
})(jQuery);

/*-=- Contents of scripts/lib/jquery.placeheld.min.js -=-*/

(function(n) {
    "use strict";
    n.placeHeld = function(t, i) {
        var r = this;
        r.$el = n(t);
        r.el = t;
        r.$el.data("placeHeld", r);
        r.placeholderText = r.$el.attr("placeholder");
        r.init = function() {
            r.options = n.extend({}, n.placeHeld.defaultOptions, i);
            r.$el.bind("blur", r.holdPlace).bind("focus", r.releasePlace).triggerHandler("blur");
            r.$el.parents("form").bind("submit", r.clearPlace)
        };
        r.holdPlace = function() {
            var n = r.$el.val();
            n || r.$el.val(r.placeholderText).addClass(r.options.className)
        };
        r.releasePlace = function() {
            var n = r.$el.val();
            n == r.placeholderText && r.$el.val("").removeClass(r.options.className)
        };
        r.clearPlace = function() {
            var n = r.$el.val();
            n == r.placeholderText && r.$el.hasClass(r.options.className) && r.$el.val("")
        };
        r.init()
    };
    n.placeHeld.defaultOptions = {
        className: "placeheld"
    };
    n.fn.placeHeld = function(t) {
        if (!("placeholder" in n("<input>")[0])) return this.each(function() {
            new n.placeHeld(this, t)
        })
    }
})(jQuery);

/*-=- Contents of scripts/lib/jquery.cookie.min.js -=-*/

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(n) {
    typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
})(function(n) {
    "use strict";

    function u(n) {
        return n
    }

    function f(n) {
        return decodeURIComponent(n.replace(r, " "))
    }

    function i(n) {
        n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t.json ? JSON.parse(n) : n
        } catch (i) {}
    }
    var r = /\+/g,
        t = n.cookie = function(r, e, o) {
            var l, h, s, y;
            if (e !== undefined) return o = n.extend({}, t.defaults, o), typeof o.expires == "number" && (l = o.expires, h = o.expires = new Date, h.setDate(h.getDate() + l)), e = t.json ? JSON.stringify(e) : String(e), document.cookie = [encodeURIComponent(r), "=", t.raw ? e : encodeURIComponent(e), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("");
            var a = t.raw ? u : f,
                v = document.cookie.split("; "),
                c = r ? undefined : {};
            for (s = 0, y = v.length; s < y; s++) {
                var p = v[s].split("="),
                    w = a(p.shift()),
                    b = a(p.join("="));
                if (r && r === w) {
                    c = i(b);
                    break
                }
                r || (c[w] = i(b))
            }
            return c
        };
    t.defaults = {};
    n.removeCookie = function(t, i) {
        return n.cookie(t) !== undefined ? (n.cookie(t, "", n.extend(i, {
            expires: -1
        })), !0) : !1
    }
});

/*-=- Contents of scripts/lib/jquery.tmpl.min.js -=-*/

/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(n) {
    "use strict";

    function o(i, r, f, o) {
        var s = {
            data: o || o === 0 || o === !1 ? o : r ? r.data : {},
            _wrap: r ? r._wrap : null,
            tmpl: null,
            parent: r || null,
            nodes: [],
            calls: d,
            nest: g,
            wrap: nt,
            html: tt,
            update: it
        };
        return i && n.extend(s, i, {
            nodes: [],
            parent: r
        }), f && (s.tmpl = f, s._ctnt = s._ctnt || s.tmpl(n, s), s.key = ++e, (c.length ? u : t)[e] = s), s
    }

    function s(t, i, u) {
        var f, e = u ? n.map(u, function(n) {
                return typeof n == "string" ? t.key ? n.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + r + '="' + t.key + '" $2') : n : s(n, t, n._ctnt)
            }) : t;
        return i ? e : (e = e.join(""), e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(t, i, r, u) {
            f = n(r).get();
            b(f);
            i && (f = l(i).concat(f));
            u && (f = f.concat(l(u)))
        }), f ? f : l(e))
    }

    function l(t) {
        var i = document.createElement("div");
        return i.innerHTML = t, n.makeArray(i.childNodes)
    }

    function p(t) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + n.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(t, i, r, u, f, e, o) {
            var c = n.tmpl.tag[r],
                l, s, a;
            if (!c) throw "Unknown template tag: " + r;
            return l = c._default || [], e && !/\w$/.test(f) && (f += e, e = ""), f ? (f = h(f), o = o ? "," + h(o) + ")" : e ? ")" : "", s = e ? f.indexOf(".") > -1 ? f + h(e) : "(" + f + ").call($item" + o : f, a = e ? s : "(typeof(" + f + ")==='function'?(" + f + ").call($item):(" + f + "))") : a = s = l.$1 || "null", u = h(u), "');" + c[i ? "close" : "open"].split("$notnull_1").join(f ? "typeof(" + f + ")!=='undefined' && (" + f + ")!=null" : "true").split("$1a").join(a).split("$1").join(s).split("$2").join(u || l.$2 || "") + "__.push('"
        }) + "');}return __;")
    }

    function w(t, i) {
        t._wrap = s(t, !0, n.isArray(i) ? i : [v.test(i) ? i : n(i).html()]).join("")
    }

    function h(n) {
        return n ? n.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }

    function k(n) {
        var t = document.createElement("div");
        return t.appendChild(n.cloneNode(!0)), t.innerHTML
    }

    function b(f) {
        function p(f) {
            function p(n) {
                n = n + a;
                s = v[n] = v[n] || o(s, t[s.parent.key + a] || s.parent)
            }
            var y, h = f,
                c, s, l;
            if (l = f.getAttribute(r)) {
                while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(y = h.getAttribute(r)));
                y !== l && (h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(r) || 0 : 0, (s = t[l]) || (s = u[l], s = o(s, t[h] || u[h]), s.key = ++e, t[e] = s), i && p(l));
                f.removeAttribute(r)
            } else i && (s = n.data(f, "tmplItem")) && (p(s.key), t[s.key] = s, h = n.data(f.parentNode, "tmplItem"), h = h ? h.key : 0); if (s) {
                for (c = s; c && c.key != h;) c.nodes.push(f), c = c.parent;
                delete s._ctnt;
                delete s._wrap;
                n.data(f, "tmplItem", s)
            }
        }
        for (var a = "_" + i, c, l, v = {}, h, s = 0, y = f.length; s < y; s++)
            if ((c = f[s]).nodeType === 1) {
                for (l = c.getElementsByTagName("*"), h = l.length - 1; h >= 0; h--) p(l[h]);
                p(c)
            }
    }

    function d(n, t, i, r) {
        if (!n) return c.pop();
        c.push({
            _: n,
            tmpl: t,
            item: this,
            data: i,
            options: r
        })
    }

    function g(t, i, r) {
        return n.tmpl(n.template(t), i, r, this)
    }

    function nt(t, i) {
        var r = t.options || {};
        return r.wrapped = i, n.tmpl(n.template(t.tmpl), t.data, r, t.item)
    }

    function tt(t, i) {
        var r = this._wrap;
        return n.map(n(n.isArray(r) ? r.join("") : r).filter(t || "*"), function(n) {
            return i ? n.innerText || n.textContent : n.outerHTML || k(n)
        })
    }

    function it() {
        var t = this.nodes;
        n.tmpl(null, null, null, this).insertBefore(t[0]);
        n(t).remove()
    }
    var a = n.fn.domManip,
        r = "_tmplitem",
        v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        t = {}, u = {}, f, y = {
            key: 0,
            data: {}
        }, e = 0,
        i = 0,
        c = [];
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(r, u) {
        n.fn[r] = function(e) {
            var o = [],
                h = n(e),
                c, s, a, v, l = this.length === 1 && this[0].parentNode;
            if (f = t || {}, l && l.nodeType === 11 && l.childNodes.length === 1 && h.length === 1) h[u](this[0]), o = this;
            else {
                for (s = 0, a = h.length; s < a; s++) i = s, c = (s > 0 ? this.clone(!0) : this).get(), n(h[s])[u](c), o = o.concat(c);
                i = 0;
                o = this.pushStack(o, r, h.selector)
            }
            return v = f, f = null, n.tmpl.complete(v), o
        }
    });
    n.fn.extend({
        tmpl: function(t, i, r) {
            return n.tmpl(this[0], t, i, r)
        },
        tmplItem: function() {
            return n.tmplItem(this[0])
        },
        template: function(t) {
            return n.template(t, this[0])
        },
        domManip: function(r, u, e) {
            if (r[0] && n.isArray(r[0])) {
                for (var o = n.makeArray(arguments), s = r[0], l = s.length, h = 0, c; h < l && !(c = n.data(s[h++], "tmplItem")););
                c && i && (o[2] = function(t) {
                    n.tmpl.afterManip(this, t, e)
                });
                a.apply(this, o)
            } else a.apply(this, arguments);
            return i = 0, f || n.tmpl.complete(t), this
        }
    });
    n.extend({
        tmpl: function(i, r, f, e) {
            var h, c = !e;
            if (c) e = y, i = n.template[i] || n.template(null, i), u = {};
            else if (!i) return i = e.tmpl, t[e.key] = e, e.nodes = [], e.wrapped && w(e, e.wrapped), n(s(e, null, e.tmpl(n, e)));
            return i ? (typeof r == "function" && (r = r.call(e || {})), f && f.wrapped && w(f, f.wrapped), h = n.isArray(r) ? n.map(r, function(n) {
                return n ? o(f, e, i, n) : null
            }) : [o(f, e, i, r)], c ? n(s(e, null, h)) : h) : []
        },
        tmplItem: function(t) {
            var i;
            for (t instanceof n && (t = t[0]); t && t.nodeType === 1 && !(i = n.data(t, "tmplItem")) && (t = t.parentNode););
            return i || y
        },
        template: function(t, i) {
            return i ? (typeof i == "string" ? i = p(i) : i instanceof n && (i = i[0] || {}), i.nodeType && (i = n.data(i, "tmpl") || n.data(i, "tmpl", p(i.innerHTML))), typeof t == "string" ? n.template[t] = i : i) : t ? typeof t != "string" ? n.template(null, t) : n.template[t] || n.template(null, v.test(t) ? t : n(t)) : null
        },
        encode: function(n) {
            return ("" + n).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    n.extend(n.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            t = {}
        },
        afterManip: function(t, r, u) {
            var f = r.nodeType === 11 ? n.makeArray(r.childNodes) : r.nodeType === 1 ? [r] : [];
            u.call(t, r);
            b(f);
            i++
        }
    })
})(jQuery);

/*-=- Contents of scripts/lib/jquery.json.min.js -=-*/

/**
 * jQuery JSON plugin 2.4.0
 *
 * @author Brantley Harris, 2009-2011
 * @author Timo Tijhof, 2011-2012
 * @source This plugin is heavily influenced by MochiKit's serializeJSON, which is
 *         copyrighted 2005 by Bob Ippolito.
 * @source Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 *         website's http://www.json.org/json2.js, which proclaims:
 *         "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 *         I uphold.
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
(function(n) {
    "use strict";
    var t = /["\\\x00-\x1f\x7f-\x9f]/g,
        i = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, r = Object.prototype.hasOwnProperty;
    n.toJSON = typeof JSON == "object" && JSON.stringify ? JSON.stringify : function(t) {
        var e, u, a, v, i;
        if (t === null) return "null";
        if (i = n.type(t), i === "undefined") return undefined;
        if (i === "number" || i === "boolean") return String(t);
        if (i === "string") return n.quoteString(t);
        if (typeof t.toJSON == "function") return n.toJSON(t.toJSON());
        if (i === "date") {
            var o = t.getUTCMonth() + 1,
                s = t.getUTCDate(),
                y = t.getUTCFullYear(),
                h = t.getUTCHours(),
                c = t.getUTCMinutes(),
                l = t.getUTCSeconds(),
                f = t.getUTCMilliseconds();
            return o < 10 && (o = "0" + o), s < 10 && (s = "0" + s), h < 10 && (h = "0" + h), c < 10 && (c = "0" + c), l < 10 && (l = "0" + l), f < 100 && (f = "0" + f), f < 10 && (f = "0" + f), '"' + y + "-" + o + "-" + s + "T" + h + ":" + c + ":" + l + "." + f + 'Z"'
        }
        if (e = [], n.isArray(t)) {
            for (u = 0; u < t.length; u++) e.push(n.toJSON(t[u]) || "null");
            return "[" + e.join(",") + "]"
        }
        if (typeof t == "object") {
            for (u in t)
                if (r.call(t, u)) {
                    if (i = typeof u, i === "number") a = '"' + u + '"';
                    else if (i === "string") a = n.quoteString(u);
                    else continue;
                    i = typeof t[u];
                    i !== "function" && i !== "undefined" && (v = n.toJSON(t[u]), e.push(a + ":" + v))
                }
            return "{" + e.join(",") + "}"
        }
    };
    n.evalJSON = typeof JSON == "object" && JSON.parse ? JSON.parse : function(n) {
        return eval("(" + n + ")")
    };
    n.secureEvalJSON = typeof JSON == "object" && JSON.parse ? JSON.parse : function(n) {
        var t = n.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(t)) return eval("(" + n + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.");
    };
    n.quoteString = function(n) {
        return n.match(t) ? '"' + n.replace(t, function(n) {
            var t = i[n];
            return typeof t == "string" ? t : (t = n.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        }) + '"' : '"' + n + '"'
    }
})(jQuery);

/*-=- Contents of scripts/lib/jstorage.min.js -=-*/

(function() {
    function ut() {
        var u = !1,
            n;
        if ("localStorage" in window) try {
            window.localStorage.setItem("_tmptest", "tmpval");
            u = !0;
            window.localStorage.removeItem("_tmptest")
        } catch (f) {}
        if (u) try {
            window.localStorage && (i = window.localStorage, r = "localStorage", s = i.jStorage_update)
        } catch (e) {} else if ("globalStorage" in window) try {
            window.globalStorage && (i = window.globalStorage[window.location.hostname], r = "globalStorage", s = i.jStorage_update)
        } catch (o) {} else if (t = document.createElement("link"), t.addBehavior) {
            t.style.behavior = "url(#default#userData)";
            document.getElementsByTagName("head")[0].appendChild(t);
            try {
                t.load("jStorage")
            } catch (h) {
                t.setAttribute("jStorage", "{}");
                t.save("jStorage");
                t.load("jStorage")
            }
            n = "{}";
            try {
                n = t.getAttribute("jStorage")
            } catch (c) {}
            try {
                s = t.getAttribute("jStorage_update")
            } catch (a) {}
            i.jStorage = n;
            r = "userDataBehavior"
        } else {
            t = null;
            return
        }
        it();
        p();
        y("local");
        y("session");
        ft();
        rt();
        "addEventListener" in window && window.addEventListener("pageshow", function(n) {
            n.persisted && l()
        }, !1)
    }

    function y(t, i) {
        function l() {
            if (t == "session") try {
                o = u.parse(window.name || "{}")
            } catch (n) {
                o = {}
            }
        }

        function a() {
            t == "session" && (window.name = u.stringify(o))
        }
        var c = !1,
            s = 0,
            h, f, o = {}, v = Math.random();
        if (i || typeof window[t + "Storage"] == "undefined") {
            if (t == "local" && window.globalStorage) {
                localStorage = window.globalStorage[window.location.hostname];
                return
            }
            if (r == "userDataBehavior") {
                i && window[t + "Storage"] && window[t + "Storage"].parentNode && window[t + "Storage"].parentNode.removeChild(window[t + "Storage"]);
                f = document.createElement("button");
                document.getElementsByTagName("head")[0].appendChild(f);
                t == "local" ? o = n : t == "session" && l();
                for (h in o) o.hasOwnProperty(h) && h != "__jstorage_meta" && h != "length" && typeof o[h] != "undefined" && (h in f || s++, f[h] = o[h]);
                f.length = s;
                f.key = function(n) {
                    var i = 0,
                        t;
                    l();
                    for (t in o)
                        if (o.hasOwnProperty(t) && t != "__jstorage_meta" && t != "length" && typeof o[t] != "undefined") {
                            if (i == n) return t;
                            i++
                        }
                };
                f.getItem = function(n) {
                    return (l(), t == "session") ? o[n] : e.jStorage.get(n)
                };
                f.setItem = function(n, t) {
                    typeof t != "undefined" && (f[n] = (t || "").toString())
                };
                f.removeItem = function(n) {
                    if (t == "local") return e.jStorage.deleteKey(n);
                    f[n] = undefined;
                    c = !0;
                    n in f && f.removeAttribute(n);
                    c = !1
                };
                f.clear = function() {
                    if (t == "session") {
                        window.name = "";
                        y("session", !0);
                        return
                    }
                    e.jStorage.flush()
                };
                t == "local" && (d = function(n, t) {
                    n != "length" && (c = !0, typeof t == "undefined" ? n in f && (s--, f.removeAttribute(n)) : (n in f || s++, f[n] = (t || "").toString()), f.length = s, c = !1)
                });
                f.attachEvent("onpropertychange", function(n) {
                    if (n.propertyName != "length" && !c && n.propertyName != "length") {
                        if (t == "local") n.propertyName in o || typeof f[n.propertyName] == "undefined" || s++;
                        else if (t == "session") {
                            l();
                            typeof f[n.propertyName] == "undefined" || n.propertyName in o ? typeof f[n.propertyName] == "undefined" && n.propertyName in o ? (delete o[n.propertyName], s--) : o[n.propertyName] = f[n.propertyName] : (o[n.propertyName] = f[n.propertyName], s++);
                            a();
                            f.length = s;
                            return
                        }
                        e.jStorage.set(n.propertyName, f[n.propertyName]);
                        f.length = s
                    }
                });
                window[t + "Storage"] = f
            }
        }
    }

    function tt() {
        var n = "{}";
        if (r == "userDataBehavior") {
            t.load("jStorage");
            try {
                n = t.getAttribute("jStorage")
            } catch (u) {}
            try {
                s = t.getAttribute("jStorage_update")
            } catch (f) {}
            i.jStorage = n
        }
        it();
        p();
        rt()
    }

    function ft() {
        r == "localStorage" || r == "globalStorage" ? "addEventListener" in window ? window.addEventListener("storage", l, !1) : document.attachEvent("onstorage", l) : r == "userDataBehavior" && setInterval(l, 1e3)
    }

    function l() {
        var n;
        clearTimeout(g);
        g = setTimeout(function() {
            if (r == "localStorage" || r == "globalStorage") n = i.jStorage_update;
            else if (r == "userDataBehavior") {
                t.load("jStorage");
                try {
                    n = t.getAttribute("jStorage_update")
                } catch (u) {}
            }
            n && n != s && (s = n, et())
        }, 25)
    }

    function et() {
        var i = u.parse(u.stringify(n.__jstorage_meta.CRC32)),
            r, t, f, e;
        tt();
        r = u.parse(u.stringify(n.__jstorage_meta.CRC32));
        f = [];
        e = [];
        for (t in i)
            if (i.hasOwnProperty(t)) {
                if (!r[t]) {
                    e.push(t);
                    continue
                }
                i[t] != r[t] && String(i[t]).substr(0, 2) == "2." && f.push(t)
            }
        for (t in r) r.hasOwnProperty(t) && (i[t] || f.push(t));
        c(f, "updated");
        c(e, "deleted")
    }

    function c(n, t) {
        var u, i, e, r, o;
        if (n = [].concat(n || []), t == "flushed") {
            n = [];
            for (u in f) f.hasOwnProperty(u) && n.push(u);
            t = "deleted"
        }
        for (i = 0, e = n.length; i < e; i++)
            if (f[n[i]])
                for (r = 0, o = f[n[i]].length; r < o; r++) f[n[i]][r](n[i], t)
    }

    function a() {
        var n = (+new Date).toString();
        r == "localStorage" || r == "globalStorage" ? i.jStorage_update = n : r == "userDataBehavior" && (t.setAttribute("jStorage_update", n), t.save("jStorage"));
        l()
    }

    function it() {
        if (i.jStorage) try {
            n = u.parse(String(i.jStorage))
        } catch (t) {
            i.jStorage = "{}"
        } else i.jStorage = "{}";
        w = i.jStorage ? String(i.jStorage).length : 0;
        n.__jstorage_meta || (n.__jstorage_meta = {});
        n.__jstorage_meta.CRC32 || (n.__jstorage_meta.CRC32 = {})
    }

    function v() {
        st();
        try {
            i.jStorage = u.stringify(n);
            t && (t.setAttribute("jStorage", i.jStorage), t.save("jStorage"));
            w = i.jStorage ? String(i.jStorage).length : 0
        } catch (r) {}
    }

    function o(n) {
        if (!n || typeof n != "string" && typeof n != "number") throw new TypeError("Key name must be string or numeric");
        if (n == "__jstorage_meta") throw new TypeError("Reserved key name");
        return !0
    }

    function p() {
        var u, t, i, f, r = Infinity,
            e = !1,
            o = [];
        if (clearTimeout(nt), n.__jstorage_meta && typeof n.__jstorage_meta.TTL == "object") {
            u = +new Date;
            i = n.__jstorage_meta.TTL;
            f = n.__jstorage_meta.CRC32;
            for (t in i) i.hasOwnProperty(t) && (i[t] <= u ? (delete i[t], delete f[t], delete n[t], e = !0, o.push(t)) : i[t] < r && (r = i[t]));
            r != Infinity && (nt = setTimeout(p, r - u));
            e && (v(), a(), c(o, "deleted"))
        }
    }

    function rt() {
        var t, r, i;
        if (n.__jstorage_meta.PubSub) {
            for (r = b, i = len = n.__jstorage_meta.PubSub.length - 1; i >= 0; i--) t = n.__jstorage_meta.PubSub[i], t[0] > b && (r = t[0], ot(t[1], t[2]));
            b = r
        }
    }

    function ot(n, t) {
        if (h[n])
            for (var i = 0, r = h[n].length; i < r; i++) h[n][i](n, u.parse(u.stringify(t)))
    }

    function st() {
        var i, t, r;
        if (n.__jstorage_meta.PubSub) {
            for (i = +new Date - 2e3, t = 0, r = n.__jstorage_meta.PubSub.length; t < r; t++)
                if (n.__jstorage_meta.PubSub[t][0] <= i) {
                    n.__jstorage_meta.PubSub.splice(t, n.__jstorage_meta.PubSub.length - t);
                    break
                }
            n.__jstorage_meta.PubSub.length || delete n.__jstorage_meta.PubSub
        }
    }

    function ht(t, i) {
        n.__jstorage_meta || (n.__jstorage_meta = {});
        n.__jstorage_meta.PubSub || (n.__jstorage_meta.PubSub = []);
        n.__jstorage_meta.PubSub.unshift([+new Date, t, i]);
        v();
        a()
    }

    function ct(n, t) {
        for (var f = n.length, i = t ^ f, u = 0, r; f >= 4;) r = n.charCodeAt(u) & 255 | (n.charCodeAt(++u) & 255) << 8 | (n.charCodeAt(++u) & 255) << 16 | (n.charCodeAt(++u) & 255) << 24, r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16), r ^= r >>> 24, r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16), i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16) ^ r, f -= 4, ++u;
        switch (f) {
            case 3:
                i ^= (n.charCodeAt(u + 2) & 255) << 16;
            case 2:
                i ^= (n.charCodeAt(u + 1) & 255) << 8;
            case 1:
                i ^= n.charCodeAt(u) & 255;
                i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16)
        }
        return i ^= i >>> 13, i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16), i ^= i >>> 15, i >>> 0
    }
    var e = window.jQuery || window.$ || (window.$ = {}),
        u = {
            parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(n) {
                return String(n).evalJSON()
            } || e.parseJSON || e.evalJSON,
            stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || e.toJSON
        };
    if (!u.parse || !u.stringify) throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var n = {
        __jstorage_meta: {
            CRC32: {}
        }
    }, i = {
            jStorage: "{}"
        }, t = null,
        w = 0,
        r = !1,
        f = {}, g = !1,
        s = 0,
        h = {}, b = +new Date,
        nt, k = {
            isXML: function(n) {
                var t = (n ? n.ownerDocument || n : 0).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            },
            encode: function(n) {
                if (!this.isXML(n)) return !1;
                try {
                    return (new XMLSerializer).serializeToString(n)
                } catch (t) {
                    try {
                        return n.xml
                    } catch (i) {}
                }
                return !1
            },
            decode: function(n) {
                var i = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(n) {
                        var t = new ActiveXObject("Microsoft.XMLDOM");
                        return t.async = "false", t.loadXML(n), t
                    }, t;
                return i ? (t = i.call("DOMParser" in window && new DOMParser || window, n, "text/xml"), this.isXML(t) ? t : !1) : !1
            }
        }, d = function() {};
    e.jStorage = {
        version: "0.3.2",
        set: function(t, i, r) {
            if (o(t), r = r || {}, typeof i == "undefined") return this.deleteKey(t), i;
            if (k.isXML(i)) i = {
                _is_xml: !0,
                xml: k.encode(i)
            };
            else {
                if (typeof i == "function") return undefined;
                i && typeof i == "object" && (i = u.parse(u.stringify(i)))
            }
            return n[t] = i, n.__jstorage_meta.CRC32[t] = "2." + ct(u.stringify(i)), this.setTTL(t, r.TTL || 0), d(t, i), c(t, "updated"), i
        },
        get: function(t, i) {
            return (o(t), t in n) ? n[t] && typeof n[t] == "object" && n[t]._is_xml ? k.decode(n[t].xml) : n[t] : typeof i == "undefined" ? null : i
        },
        deleteKey: function(t) {
            return (o(t), t in n) ? (delete n[t], typeof n.__jstorage_meta.TTL == "object" && t in n.__jstorage_meta.TTL && delete n.__jstorage_meta.TTL[t], delete n.__jstorage_meta.CRC32[t], d(t, undefined), v(), a(), c(t, "deleted"), !0) : !1
        },
        setTTL: function(t, i) {
            var r = +new Date;
            return (o(t), i = Number(i) || 0, t in n) ? (n.__jstorage_meta.TTL || (n.__jstorage_meta.TTL = {}), i > 0 ? n.__jstorage_meta.TTL[t] = r + i : delete n.__jstorage_meta.TTL[t], v(), p(), a(), !0) : !1
        },
        getTTL: function(t) {
            var r = +new Date,
                i;
            return (o(t), t in n && n.__jstorage_meta.TTL && n.__jstorage_meta.TTL[t]) ? (i = n.__jstorage_meta.TTL[t] - r, i || 0) : 0
        },
        flush: function() {
            return n = {
                __jstorage_meta: {
                    CRC32: {}
                }
            }, y("local", !0), v(), a(), c(null, "flushed"), !0
        },
        storageObj: function() {
            function t() {}
            return t.prototype = n, new t
        },
        index: function() {
            var i = [],
                t;
            for (t in n) n.hasOwnProperty(t) && t != "__jstorage_meta" && i.push(t);
            return i
        },
        storageSize: function() {
            return w
        },
        currentBackend: function() {
            return r
        },
        storageAvailable: function() {
            return !!r
        },
        listenKeyChange: function(n, t) {
            o(n);
            f[n] || (f[n] = []);
            f[n].push(t)
        },
        stopListening: function(n, t) {
            if (o(n), f[n]) {
                if (!t) {
                    delete f[n];
                    return
                }
                for (var i = f[n].length - 1; i >= 0; i--) f[n][i] == t && f[n].splice(i, 1)
            }
        },
        subscribe: function(n, t) {
            if (n = (n || "").toString(), !n) throw new TypeError("Channel not defined");
            h[n] || (h[n] = []);
            h[n].push(t)
        },
        publish: function(n, t) {
            if (n = (n || "").toString(), !n) throw new TypeError("Channel not defined");
            ht(n, t)
        },
        reInit: function() {
            tt()
        }
    };
    ut()
})();

/*-=- Contents of scripts/plugins/jquery.bwin.messaging.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {}),
        function() {
            var t = n(n.bwin);
            n.bwin.subscribe = function() {
                t.on.apply(t, arguments)
            };
            n.bwin.unsubscribe = function() {
                t.off.apply(t, arguments)
            };
            n.bwin.publish = function() {
                t.triggerHandler.apply(t, arguments)
            }
        }()
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.returnurl.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.fn.bwin_returnurl = function() {
            this.on("submit", function() {
                n(this).find("input:hidden[name=returnUrl]").val(window.location)
            });
            return this
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.userstaterow.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.userstaterow = {};
        n.bwin.userstaterow.refresh = function(t) {
            var i = n("#auth-form-container"),
                r = i.find("form").first(),
                f = n("html").attr("lang") || "en",
                u = 'input:hidden[name="productArea"]';
            n.ajax({
                cache: !1,
                url: "/" + f + "/userstate",
                data: t,
                success: function(t) {
                    var e, f, o;
                    o = r.find(u).val();
                    f = n(t);
                    f.find(u).val(o);
                    i.html(f);
                    n("#return-url").val(window.location);
                    r.bwin_loginform();
                    n.cookie("pl-min") === "1" && n("#post-login-reminder").show();
                    e = i.find('input:hidden[name="__RequestVerificationToken"]').val();
                    n(document).trigger("bwin.userstate:update", e)
                }
            })
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.uniform.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.fn.bwin_uniform = function() {
            return this.not(".no-uniform").uniform()
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.loginform.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.fn.bwin_loginform = function() {
            var r;
            if (this.bwin_returnurl(), typeof window.Modernizr == "undefined") return this;
            if (!window.Modernizr.input.placeholder) {
                var u = navigator.userAgent.match(/MSIE\s([\d.]+)/),
                    f = this.find("input[name=username]").placeHeld(),
                    i = this.find("input[name=password]"),
                    e = i.attr("placeholder"),
                    t = n("<input>", {
                        id: "password"
                    }).attr({
                        type: "text",
                        placeholder: e
                    });
                i.hide().attr({
                    id: "password-hidden"
                });
                t.placeHeld();
                f.after(t);
                r = function() {
                    t.hide().attr({
                        id: "password-hidden"
                    })
                };
                t.focus(function() {
                    u || r();
                    i.attr({
                        id: "password"
                    }).show().focus();
                    u && r()
                });
                i.blur(function() {
                    n(this).val() === "" && (t.attr({
                        id: "password"
                    }).show(), n(this).hide().attr({
                        id: "password-hidden"
                    }))
                })
            }
            return this
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.antiforgery.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = n("form"),
            i = function(n) {
                return /__RequestVerificationToken/.test(n)
            }, r = function(n) {
                return !!n.__RequestVerificationToken
            };
        n.fn.bwin_antiforgery = function() {
            return t = this, this
        };
        n.bwin.antiforgery = {};
        n.bwin.antiforgery.getToken = function() {
            return t.find('input:hidden[name="__RequestVerificationToken"]').val()
        };
        n.bwin.antiforgery.appendToken = function(t) {
            var u = n.bwin.antiforgery.getToken(),
                e = "&__RequestVerificationToken=" + encodeURIComponent(u),
                f = {
                    __RequestVerificationToken: u
                };
            return t ? _(t).isString() && !i(t) ? t += e : _(t).isString() || r(t) || (t = n.extend(t, f)) : t = f, t
        }
    })
})(jQuery);

/*-=- Contents of scripts/lib/jquery.validate.min.js -=-*/

/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                n(t.target).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function() {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0,
                i = n(this[0].form).validate();
            return this.each(function() {
                t = t && i.element(this)
            }), t
        },
        removeAttrs: function(t) {
            var i = {}, r = this;
            return n.each(t.split(/\s/), function(n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }), i
        },
        rules: function(t, i) {
            var r = this[0],
                o, u, h;
            if (t) {
                var e = n.data(r.form, "validator").settings,
                    s = e.rules,
                    f = n.validator.staticRules(r);
                switch (t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (o = {}, n.each(i.split(/\s/), function(n, t) {
                            o[t] = f[t];
                            delete f[t]
                        }), o) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({
                required: h
            }, u)), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function(t, i) {
        return arguments.length === 1 ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(n, t) {
                (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function r(t) {
                    var i = n.data(this[0].form, "validator"),
                        r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var i, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                i = this.groups = {};
                n.each(this.settings.groups, function(t, r) {
                    typeof r == "string" && (r = r.split(/\s/));
                    n.each(r, function(n, r) {
                        i[r] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", r).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", r);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t = 0,
                    i;
                for (i in n) t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var r = n(t).attr("type"),
                    i = n(t).val();
                return r === "radio" || r === "checkbox" ? n("input[name='" + n(t).attr("name") + "']:checked").val() : typeof i == "string" ? i.replace(/\r/g, "") : i
            },
            check: function(t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var f = n(t).rules(),
                    e = !1,
                    s = this.elementValue(t),
                    i;
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), i === "dependency-mismatch") {
                            e = !0;
                            continue
                        }
                        if (e = !1, i === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!i) return this.formatAndAdd(t, u), !1
                    } catch (o) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", o);
                        throw o;
                    }
                }
                if (!e) return this.objectLength(f) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined) return arguments[n];
                return undefined
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function(t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}, r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function(t) {
            var u = {}, e = n(t),
                f = e[0].getAttribute("type"),
                r, i;
            for (r in n.validator.methods) r === "required" ? (i = e.get(0).getAttribute(r), i === "" && (i = !0), i = !! i) : i = e.attr(r), /min|max/.test(r) && (f === null || /number|range|text/.test(f)) && (i = Number(i)), i ? u[r] = i : f === r && f !== "range" && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function(t) {
            var i, r, u = {}, f = n(t);
            for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()), r !== undefined && (u[i] = r);
            return u
        },
        staticRules: function(t) {
            var i = {}, r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !! n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function(r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function(n, t) {
                var r, e;
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0,
                    i = 0,
                    u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return f % 10 == 0
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function(t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                    url: r
                } || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function(r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || r === "true";
                        e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                }, r)), "pending")
            }
        }
    });
    n.format = n.validator.format
})(jQuery),
function(n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
        var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
        return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
    })
}(jQuery),
function(n) {
    n.extend(n.fn, {
        validateDelegate: function(t, i, r) {
            return this.bind(i, function(i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}(jQuery);

/*-=- Contents of scripts/lib/jquery.validate.unobtrusive.min.js -=-*/

/*!
 ** Unobtrusive validation support library for jQuery and jQuery Validate
 ** Copyright (C) Microsoft Corporation. All rights reserved.
 */
(function(n) {
    "use strict";

    function r(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }

    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }

    function f(n) {
        return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }

    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }

    function o(n, t) {
        return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
    }

    function c(i, r) {
        var u = n(this).find("[data-valmsg-for='" + f(r[0].name) + "']"),
            e = u.attr("data-valmsg-replace"),
            o = e ? n.parseJSON(e) !== !1 : null;
        u.removeClass("field-validation-valid").addClass("field-validation-error");
        i.data("unobtrusiveContainer", u);
        o ? (u.empty(), i.removeClass("input-validation-error").appendTo(u)) : i.hide();
        t.onErrorCallback(i, u)
    }

    function l(i, r) {
        var f = n(this).find("[data-valmsg-summary=true]"),
            u = f.find("ul");
        u && u.length && r.errorList.length && (u.empty(), f.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(r.errorList, function() {
            n("<li />").html(this.message).appendTo(u)
        }));
        t.onErrorsCallback(i, r)
    }

    function a(i) {
        var r = i.data("unobtrusiveContainer"),
            u = r.attr("data-valmsg-replace"),
            f = u ? n.parseJSON(u) : null;
        r && (r.addClass("field-validation-valid").removeClass("field-validation-error"), i.removeData("unobtrusiveContainer"), f && r.empty());
        t.onSuccessCallback(i, r)
    }

    function v() {
        var t = n(this);
        t.data("validator").resetForm();
        t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
    }

    function s(t) {
        var i = n(t),
            r = i.data(u),
            f = n.proxy(v, t);
        return r || (r = {
            options: {
                errorClass: "input-validation-error",
                errorElement: "span",
                errorPlacement: n.proxy(c, t),
                invalidHandler: n.proxy(l, t),
                messages: {},
                rules: {},
                success: n.proxy(a, t)
            },
            attachValidation: function() {
                i.unbind("reset." + u, f).bind("reset." + u, f).validate(this.options)
            },
            validate: function() {
                return i.validate(), i.valid()
            }
        }, i.data(u, r)), r
    }
    var t = n.validator,
        i, u = "unobtrusiveValidation";
    t.onErrorCallback = n.noop;
    t.onErrorsCallback = n.noop;
    t.onSuccessCallback = n.noop;
    t.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var u = n(t),
                f = u.parents("form")[0],
                r, e, o;
            f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function() {
                var i = "data-val-" + this.name,
                    r = u.attr(i),
                    s = {};
                r !== undefined && (i += "-", n.each(this.params, function() {
                    s[this] = u.attr(i + this)
                }), this.adapt({
                    element: t,
                    form: f,
                    message: r,
                    params: s,
                    rules: e,
                    messages: o
                }))
            }), n.extend(e, {
                __dummy__: !0
            }), i || r.attachValidation())
        },
        parse: function(i) {
            var r = n(i).parents("form").addBack().add(n(i).find("form")).filter("form");
            n(i).find(":input[data-val=true]").each(function() {
                t.unobtrusive.parseElement(this, !0)
            });
            r.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    };
    i = t.unobtrusive.adapters;
    i.add = function(n, t, i) {
        return i || (i = t, t = []), this.push({
            name: n,
            params: t,
            adapt: i
        }), this
    };
    i.addBool = function(n, t) {
        return this.add(n, function(i) {
            r(i, t || n, !0)
        })
    };
    i.addMinMax = function(n, t, i, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min,
                e = n.params.max;
            f && e ? r(n, u, [f, e]) : f ? r(n, t, f) : e && r(n, i, e)
        })
    };
    i.addSingleVal = function(n, t, i) {
        return this.add(n, [t || "val"], function(u) {
            r(u, i || n, u.params[t])
        })
    };
    t.addMethod("__dummy__", function() {
        return !0
    });
    t.addMethod("regex", function(n, t, i) {
        var r;
        return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
    });
    t.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g), r = r && r.length >= i), r
    });
    i.addSingleVal("accept", "exts").addSingleVal("regex", "pattern");
    i.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    i.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    i.add("equalto", ["other"], function(t) {
        var i = e(t.element.name),
            u = t.params.other,
            s = o(u, i),
            h = n(t.form).find(":input[name='" + f(s) + "']")[0];
        r(t, "equalTo", h)
    });
    i.add("required", function(n) {
        (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && r(n, "required", !0)
    });
    i.add("remote", ["url", "type", "additionalfields"], function(t) {
        var i = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        }, u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function(r, e) {
            var s = o(e, u);
            i.data[s] = function() {
                return n(t.form).find(":input[name='" + f(s) + "']").val()
            }
        });
        r(t, "remote", i)
    });
    i.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && r(n, "minlength", n.params.min);
        n.params.nonalphamin && r(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && r(n, "regex", n.params.regex)
    });
    n(function() {
        t.unobtrusive.parse(document)
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.toggle.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = function(t) {
            t.toggleClass("ui-icon-triangle-1-e").toggleClass("ui-icon-triangle-1-s");
            n(this).children().last().toggle()
        }, i = function() {
                return n("<span>").addClass("ui-icon ui-icon-triangle-1-s")
            };
        n.fn.bwin_toggle = function() {
            return this.each(function() {
                var u = n(this).find("a.activeItem").length > 0,
                    r = i();
                u || t.call(this, r);
                n(this).addClass("toggle").prepend(r);
                n(this).find("a[href]").click(function(n) {
                    n.stopPropagation()
                });
                n(this).click(function() {
                    t.call(this, r)
                })
            }), this
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.dialog.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var f, e, o, s, h, c, r, t, u = "#dialog-overlay",
            i = "#dialog-box";
        f = function(t) {
            var r = n("<div>", {
                id: i.substr(1)
            }).css({
                top: t.top,
                left: t.left,
                width: t.width
            });
            return t.showCloseIcon && r.append(n("<span>", {
                id: "dialog-close"
            }).attr({
                unselectable: "on"
            }).addClass("ui-icon ui-icon-closethick").text("close")), r.append(n("<div>").html(t.body)).appendTo("body")
        };
        o = function(n) {
            var t = document.location.protocol + "//" + document.location.host;
            return n.length >= t.length && n.substring(0, t.length) === t
        };
        e = function(t, i) {
            var r = t.find("iframe");
            r.length === 1 && (t.addClass("dialog-has-iframe"), r.attr({
                width: i.width
            }), o(r.prop("src")) && r.load(function() {
                var i = n(this).contents(),
                    t = function() {
                        r.height(i.height())
                    };
                i.find("form").submit(function() {
                    if (navigator.userAgent.match(/MSIE\s([\d.]+)/)) {
                        var n = setInterval(function() {
                            t()
                        }, 50);
                        setTimeout(function() {
                            clearInterval(n)
                        }, 1e3)
                    } else t()
                });
                t()
            }))
        };
        s = function(r) {
            n(document).on("click", "#dialog-close", function() {
                return t(), r.cancel(), !1
            });
            if (r.closableViaOverlay) n(document).on("click", u, function() {
                return t(), r.cancel(), !1
            });
            n(i).find("div.uni-button").click(function(i) {
                return (i.stopPropagation(), r.closableViaButtons && t(), n(this).find(".confirm-button").length === 1) ? r.confirm(i) : n(this).find(".cancel-button").length === 1 ? r.cancel(i) : !1
            });
            var f = function(i) {
                i.keyCode === n.ui.keyCode.ESCAPE && (t(), r.cancel(), n(this).off("keyup", f))
            };
            n(document).on("keyup", f)
        };
        h = function(t) {
            if (t) {
                var f = n(i),
                    r, u;
                r = parseInt(t.width, 10);
                _.isNumber(r) && !isNaN(r) && f.width(r).find("iframe").width(r).prop("width", r);
                u = parseInt(t.height, 10);
                _.isNumber(u) && !isNaN(u) && f.height(u).find("iframe").height(u).prop("height", u)
            }
        };
        c = function(t) {
            t && n(i).css(t)
        };
        r = function() {
            return n(i).length !== 0
        };
        t = function() {
            n(u).remove();
            n(i).remove()
        };
        n.bwin.dialog = function(i) {
            r() && t();
            var c = {
                header: "",
                body: "",
                width: 475,
                top: Math.round(parseInt(n(window).height(), 10) / 6),
                left: Math.round((parseInt(n(window).width(), 10) - 475) / 2),
                confirm: n.noop,
                cancel: n.noop,
                showCloseIcon: !0,
                closableViaOverlay: !1,
                closableViaButtons: !0,
                cssClass: ""
            }, o = n.extend(c, i),
                h;
            n("<div>", {
                id: u.substr(1)
            }).addClass("ui-widget-overlay").appendTo("body");
            h = f(o);
            o.cssClass && h.addClass(o.cssClass);
            e(h, o);
            s(o)
        };
        n.bwin.dialog.close = t;
        n.bwin.dialog.isOpened = r;
        n.bwin.dialog.resize = h;
        n.bwin.dialog.position = c;
        n.bwin.dialog.iframeUrls = function() {
            var u = n(window).attr("src"),
                t = n.deparam.querystring(u)._layout,
                i, r;
            t && (i = (n("html").data("domain") || document.domain).replace(/\./, ".", "g"), r = new RegExp("^https?://[.a-z0-9-]+" + i + "/", "i"), n("a[href][target!=_top], form[action]").each(function() {
                var u, i, e, f;
                (u = this.tagName.toUpperCase() === "A" ? "href" : "action", i = this[u], r.test(i)) && (e = n.deparam.querystring(i)._layout, e || (this[u] = n.param.querystring(i, {
                    _layout: t
                })), this.tagName.toUpperCase() === "FORM" && this.method.toUpperCase() === "GET" && (f = n(this), f.find('input[name="_layout"]').length === 0 && n("<input>", {
                    type: "hidden",
                    name: "_layout",
                    value: t
                }).appendTo(f)))
            }))
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.signupbonus.min.js -=-*/

(function(n, t) {
    "use strict";
    n(function() {
        n.bwin = n.bwin || {};
        n.bwin.signupbonus = function() {
            var i = n("html").data() ? n("html").data().domain : t.location.host,
                r = function() {
                    n("#bonus-reminder").fadeIn().find("a").attr("href", n.cookie("bonus-min") || "#")
                };
            n.cookie("bonus-min") && r();
            n("#bonus-reminder a").click(function(t) {
                t.preventDefault();
                var i = n.cookie("bonus-min");
                i && !n("#bonus").is(":visible") && (n("#bonus-dialog-template").length ? n.bwin.signupbonus.showDialog() : n.get(i, function(t) {
                    n("body").append(t);
                    n.bwin.signupbonus.showDialog()
                }))
            });
            n.bwin.signupbonus.showDialog = function() {
                n.bwin.dialog({
                    body: n("#bonus-dialog-template").html(),
                    width: 336,
                    showCloseIcon: !1
                });
                n("#bonus-reminder").fadeOut();
                n.removeCookie("bonus-min", {
                    path: "/",
                    domain: i
                });
                n("#bonus #dialog-close").click(function(t) {
                    t.preventDefault();
                    n.bwin.dialog.close()
                });
                n("#bonus .remindme").click(function(t) {
                    var u = n("#bonus").data("url");
                    n.cookie("bonus-min", u, {
                        path: "/",
                        domain: i
                    });
                    r();
                    t.preventDefault();
                    n.bwin.dialog.close()
                });
                n("#bonus .tac-header").click(function(t) {
                    t.preventDefault();
                    var r = n(this).next(),
                        i = n(this).find(".ui-icon:first");
                    r.toggle();
                    r.is(":visible") ? (i.removeClass("ui-icon-triangle-1-e"), i.addClass("ui-icon-triangle-1-s")) : (i.removeClass("ui-icon-triangle-1-s"), i.addClass("ui-icon-triangle-1-e"))
                })
            }
        }
    })
})(jQuery, window);

/*-=- Contents of scripts/plugins/jquery.bwin.popup.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = null;
        n.bwin.popup = function() {
            n(document).on("click", "a[rel=popup]", function(i) {
                if ("open" in window) return i.preventDefault(), t = window.open(this.href, n(this).attr("target") || "popup", n(this).data("popupParams")), !1
            });
            n(document).on("click", "a[rel=popdown]", function(n) {
                return n.preventDefault(), opener.location = this.href, self.close(), opener.focus(), !1
            });
            n(document).on("click", "a[rel=popuplink]", function(n) {
                return n.preventDefault(), opener.location = this.href, opener.focus(), !1
            })
        };
        n.bwin.popup.getLastOpened = function() {
            return t
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.personalbutton.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var r = n("#flash"),
            t = r.find("ul.message-viewer").length !== 1 ? n("<ul>").addClass("message-viewer").appendTo(r) : r.find("ul.message-viewer"),
            i = n("#header").find("li.personal-button"),
            u = n("<div>").addClass("close").text(r.data("close-message"));
        n.bwin.personalbutton = function() {
            if (t.length === 1) {
                var f = t.find("li").length > 0;
                t.find("li").last().addClass("last").append(u);
                f && (i.addClass("active has-messages"), r.show(), n.bwin.personalbutton.adjust());
                i.on("click", function() {
                    return i.hasClass("has-messages") && (r.toggle(), r.is(":visible") ? n(this).hasClass("active") || n(this).addClass("active") : n(this).removeClass("active")), !1
                });
                r.on("click", ".message-viewer div.close", function() {
                    r.hide();
                    i.removeClass("active")
                })
            }
        };
        n.bwin.personalbutton.adjust = function() {
            i.length === 1 && t.position({
                my: "center top",
                at: "center bottom",
                of: i,
                offset: "0 -1"
            })
        };
        n.bwin.personalbutton.addMessage = function(f) {
            var e = n("<li>").addClass(f.type).data({
                rel: f.rel || ""
            }).html(f.text);
            t.prepend(e);
            t.find("li").last().hasClass("last") || t.find("li").last().addClass("last");
            t.find("li:last div.close").length === 0 && t.find("li").last().append(u);
            r.show();
            n.bwin.personalbutton.adjust();
            i.hasClass("active") || i.addClass("active");
            i.hasClass("has-messages") || i.addClass("has-messages")
        };
        n.bwin.personalbutton.replaceMessage = function(n) {
            var i = n.message,
                r = t.find('li[data-rel="' + i.rel + '"]').first();
            r.html(i.text);
            n.doAddCloseLink && r.append(u)
        };
        n.bwin.personalbutton.removeMessages = function(r) {
            var u = t.find("li");
            u.length > 0 && (r ? u.each(function() {
                var t = n(this).hasClass(r.type) && r.rel === n(this).data("rel");
                t || n(this).remove()
            }) : u.each(function() {
                n(this).remove()
            }), u = t.find("li"), u.length === 0 && i.hasClass("has-messages") && i.removeClass("has-messages"))
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.langswitch.min.js -=-*/

(function(n, t) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.langswitch = function() {
            var r = n(".language-switch"),
                u = r.find("ul>li"),
                i, f = "cultureName";
            u.length && !n("#" + f).length && (i = n('<select id="' + f + '" />'), n.each(u, function() {
                var r = n(this),
                    t = n("<option />"),
                    u = r.find("a[href]");
                t.text(r.text());
                u.length ? t.attr("value", u.attr("href")) : t.prop("selected", "selected");
                i.append(t)
            }), r.empty().append(i), i.bwin_uniform().bind("change", function() {
                var i = n(this).val();
                i && (t.location = i + t.location.hash)
            }))
        }
    })
})(jQuery, document);

/*-=- Contents of scripts/plugins/jquery.bwin.hover.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.fn.bwin_hover = function() {
            return this.each(function() {
                n(this).hover(function() {
                    n(this).addClass("hover")
                }, function() {
                    n(this).removeClass("hover")
                })
            }), this
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.tabs.min.js -=-*/

(function(n) {
    "use strict";
    n.widget("bwin.bwintabs", n.ui.tabs, {
        options: {
            navList: n("<ul/>").addClass("pm-tabs-nav"),
            anchorTpl: '<span class="tab-title"><%= title %><\/span>',
            active: 0
        },
        _create: function() {
            this._setupTabs();
            this.options.beforeActivate === null && (this.options.beforeActivate = this._tabSelect);
            this._super();
            n(this.element).show()
        },
        _setupTabs: function() {
            var t, i = n(this.element).children("section").first().addClass("pm-tabs-content");
            t = this._createNavigation();
            t.insertBefore(i)
        },
        _createNavigation: function() {
            var r = this,
                u = this.options,
                t = n(".pm-tabs-content").children().find("header:first"),
                i = this.options.navList;
            return t.each(function(f) {
                var o = "pm-tab-" + f,
                    s = n(this).children(":first-child").html(),
                    h = r._createAnchorHtml(u.anchorTpl, o, s),
                    e = n("<li/>");
                n(this).parent().attr("id", o);
                f === 0 && e.addClass("pm-tab-first");
                f === t.length - 1 && e.addClass("pm-tab-last");
                i.append(e.append(h));
                n(this).hide()
            }), i
        },
        _createAnchorHtml: function(t, i, r) {
            return n("<a/>", {
                html: _.template(t, {
                    title: r
                }),
                href: "#" + i
            })
        },
        _tabSelect: function(t, i) {
            var r = i.newTab.index(),
                u = n(this).find(".ui-tabs-nav li");
            u.removeClass("pm-tabs-after-active pm-tabs-before-active");
            r + 1 < u.length && u.eq(r + 1).addClass("pm-tabs-after-active");
            r - 1 >= 0 && u.eq(r - 1).addClass("pm-tabs-before-active")
        },
        rotation: null,
        rotate: function(n, t) {
            var i = this,
                u = this.options,
                r, f;
            return r = i._rotate || (i._rotate = function(t) {
                clearTimeout(i.rotation);
                i.rotation = setTimeout(function() {
                    var n = u.active;
                    i.select(++n < i.anchors.length ? n : 0)
                }, n);
                t && t.stopPropagation()
            }), f = i._unrotate || (i._unrotate = t ? function() {
                r()
            } : function(n) {
                n.clientX && i.rotate(null)
            }), n ? (this.element.bind("bwintabsshow", r), this.anchors.bind(u.event + ".tabs", f), r()) : (clearTimeout(i.rotation), this.element.unbind("bwintabsshow", r), this.anchors.unbind(u.event + ".tabs", f), delete this._rotate, delete this._unrotate), this
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.editdot.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = !1;
        n("<div>").attr("id", "edit-panel").appendTo(n("body"));
        n.bwin.editdot = function() {
            var i = n("#edit-panel");
            t || (t = !0, n("a.edit-dot").each(function(t, r) {
                var u = n(r),
                    f = u.next(),
                    e = f.find("a.close:first"),
                    o = f.find("a.edit:first");
                u.parent().show();
                u.on("click", function() {
                    var t = "#" + n(this).data("for-dialog"),
                        r = n(t).clone(!0).show();
                    i.hide().empty().append(r).slideDown("fast")
                });
                e.click(function(t) {
                    t.preventDefault();
                    n("#edit-panel").slideUp("fast")
                });
                o.click(function(n) {
                    n.preventDefault();
                    window.open(this.href, "content-editor")
                })
            }))
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.carousel.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.carousel = function() {
            var i, t, r = 3e3,
                u;
            u = function() {
                var t = n(".carousel-container .pc-image.active"),
                    i;
                t.length == 0 && (t = n(".carousel-container .pc-image:last"));
                i = t.next().length ? t.next() : n(".carousel-container .pc-image:first");
                t.addClass("last-active");
                i.css({
                    opacity: 0
                }).addClass("active").animate({
                    opacity: 1
                }, 1e3, function() {
                    t.removeClass("active last-active")
                })
            };
            n(".carousel-container .pc-image").length > 1 && (i = n(".carousel-container").attr("class"), t = i ? i.match(/image-speed-(\d+)/) : null, t != null && t[1] <= 1e4 && t[1] >= 1e3 && (r = t[1]), setInterval(u, r))
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.animateelementsopacity.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.animateElementsOpacity = function(t) {
            var e = n(t, '[class*="animate-element-opacity"]').css({
                opacity: 0
            }),
                r, u = n('[class*="animate-element-opacity"]').attr("class"),
                i, f = 1e3;
            i = u ? u.match(/animate-element-opacity-(\d+)/) : null;
            i != null && i[1] <= 1e4 && i[1] >= 100 && (f = i[1]);
            r = function(t, i, u) {
                n(t[i]).animate({
                    opacity: 1
                }, u, function() {
                    i += 1;
                    i <= t.length && r(t, i, u)
                })
            };
            r(e, 0, f)
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.flash.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.flash || (n.bwin.flash = {});
        n.bwin.flash.getVersion = function() {
            var n = /^,?(.+),?$/,
                t;
            try {
                try {
                    t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        t.AllowScriptAccess = "always"
                    } catch (i) {
                        return "6,0,0"
                    }
                } catch (i) {}
                return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(n)[1]
            } catch (i) {
                try {
                    if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(n)[1]
                } catch (i) {}
            }
            return "0,0,0"
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.tracking.omniture.min.js -=-*/

function s_gi(n, t, i) {
    var o = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?decodeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
        u = window,
        h = u.s_c_il,
        l = navigator,
        c = l.userAgent,
        s = l.appVersion,
        a = s.indexOf("MSIE "),
        v = c.indexOf("Netscape6/"),
        e, f, r;
    if (n && (n = n.toLowerCase(), h))
        for (f = 0; f < h.length; f++)
            if (r = h[f], !r._c || r._c == "s_c") {
                if (r.oun == n) return r;
                if (r.fs && r.sa && r.fs(r.oun, n)) return r.sa(n), r
            }
    return (u.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", u.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a"), u.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x"), u.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)"), u.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x"), u.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")"), u.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a"), u.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;"), o = s_d(o), a > 0 ? (e = parseInt(f = s.substring(a + 5)), e > 3 && (e = parseFloat(f))) : e = v > 0 ? parseFloat(c.substring(v + 10)) : parseFloat(s), e >= 5 && s.indexOf("Opera") < 0 && c.indexOf("Opera") < 0) ? (u.s_c = new Function("un", "pg", "ss", "var s=this;" + o), new s_c(n, t, i)) : (r = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(o) + ";return s"), r(n, t, i))
}(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.omniture = {
            name: "Omniture",
            track: function(t, i, r) {
                var o, e;
                window.s_ocatalyst = s_gi(r.Campaign);
                window.refco = r.CookieName;
                window.camp_len = 0;
                s_ocatalyst.cookieDomainPeriods = 3;
                s_ocatalyst.trackDownloadLinks = !0;
                s_ocatalyst.trackExternalLinks = !0;
                s_ocatalyst.trackInlineStats = !0;
                s_ocatalyst.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
                s_ocatalyst.linkInternalFilters = "javascript:," + r.InternalLinkDomains.join(",") + ",itsfogo.com";
                s_ocatalyst.linkLeaveQueryString = !1;
                s_ocatalyst.linkTrackVars = "None";
                s_ocatalyst.linkTrackEvents = "None";
                s_ocatalyst.thisHREF = document.location.href;
                s_ocatalyst.vistaCookieName = "sc_ccode";
                s_ocatalyst.KeywordToStack = "D";
                s_ocatalyst.formList = r.RegFormTracking ? "regFormPage" : "";
                s_ocatalyst.trackFormList = !0;
                s_ocatalyst.trackPageName = !0;
                s_ocatalyst.useCommerce = !0;
                s_ocatalyst.varUsed = "eVar3";
                s_ocatalyst.eventList = "event4,event5";
                s_ocatalyst.visitorNamespace = "bwin";
                s_ocatalyst.trackingServer = r.TrackingServer;
                s_ocatalyst.trackingServerSecure = r.TrackingServerSecure;
                r.VisitorMigrationKey && (s_ocatalyst.visitorMigrationKey = r.VisitorMigrationKey);
                r.VisitorMigrationServer && (s_ocatalyst.visitorMigrationServer = r.VisitorMigrationServer);
                s_ocatalyst.prop16 = n.bwin.flash.getVersion();
                s_ocatalyst.eVar16 = s_ocatalyst.prop16;
                try {
                    for (o in i) {
                        var s = i[o],
                            u = s[0],
                            f = s[1];
                        s_ocatalyst[u] = f
                    }
                    e = s_ocatalyst.t();
                    e && n(e)
                } finally {
                    for (f in i) u = i[f][0], delete s_ocatalyst[u]
                }
            }
        }
    })
})(jQuery);
s_getObjectID = function(n) {
    return n.href
};
s_ocatalyst = {};
s_ocatalyst.usePlugins = !0;
s_doPlugins = function(n) {
    var t = n.channelManager(!1);
    typeof t != "undefined" && t && t != -1 && t.keyword != "" && t.keyword.toLowerCase() != "n/a" && (n.paidORnatural = n.thisHREF.indexOf("SEM=1") > 0 ? "P" : "N", n.KeywordToStack = t.keyword != "" ? n.paidORnatural + ":" + t.keyword : n.KeywordToStack, n.eVar23 = n.crossVisitParticipation(n.KeywordToStack, "sc_kwdts", "30", "5", ">", "purchase"), (n.paidORnatural == "P" || n.paidORnatural == "N") && (n.eVar24 = n.paidORnatural + ":" + t.keyword));
    n.s_kwcid = n.getAndPersistValue(n.getQueryParam("s_kwcid"), n.vistaCookieName, 30);
    n.s_kwcid && n.s_kwcid != "" && (n.countryCode = n.s_kwcid && n.s_kwcid != "" ? n.prop17 : n.c_r(n.vistaCookieName), n.prop25 = n.getAndPersistValue(n.countryCode, n.vistaCookieName, 30));
    n.setupFormAnalysis();
    n.pageURL = n.manageQueryParam("s_kwcid", 1, 1)
};
s_ocatalyst.doPlugins = s_doPlugins;
s_ocatalyst.getAndPersistValue = new Function("v", "c", "e", "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
s_ocatalyst.___se = "{'Paid':{p:['SEM=1'],'Yahoo! - Austria':{kw:['p='],tl:['at.search.yahoo.com']},'Yahoo! - Spanish (US : Telemundo)':{kw:['p='],tl:['telemundo.yahoo.com','espanol.search.yahoo.com']},'Business.com':{kw:['query='],tl:['business.com/search']},'Yahoo! - Switzerland':{kw:['p='],tl:['ch.search.yahoo.com']},'Yahoo! - Finland':{kw:['p='],tl:['fi.search.yahoo.com']},'TheYellowPages':{kw:['search='],tl:['theyellowpages.com']},'Web-Search':{kw:['q='],tl:['www.web-search.com']},'WebCrawler':{kw:['searchText=','search='],tl:['www.webcrawler.com']},'Blue Window':{kw:['q=','qry='],tl:['search.bluewin.ch','search.bluewindow.ch']},'MSN - United Kingdom':{kw:['q='],tl:['uk.search.msn.com','msn.co.uk']},'AltaVista - Netherlands':{kw:['q='],tl:['nl.altavista.com']},'AltaVista - Spain':{kw:['q=','r='],tl:['es.altavista.com']},'AltaVista - Italy':{kw:['q=','r='],tl:['it.altavista.com']},'AltaVista - Canada':{kw:['q='],tl:['ca.altavista.com']},'AltaVista - Switzerland':{kw:['q=','r='],tl:['ch.altavista.com']},'AltaVista - France':{kw:['q=','r='],tl:['fr.altavista.com']},'AltaVista - United Kingdom':{kw:['q=','r='],tl:['uk.altavista.com']},'AltaVista - Sweden':{kw:['q=','r='],tl:['se.altavista.com']},'HotBot':{kw:['MT=','query='],tl:['hotbot.lycos.com']},'InfoSeek':{kw:['qt='],tl:['www.infoseek.com','infoseek.go.com']},'AltaVista - Norway':{kw:['q='],tl:['no.altavista.com']},'AltaVista - Denmark':{kw:['q='],tl:['dk.altavista.com']},'CNET Search.com':{kw:['q='],tl:['cnet.search.com']},'Go (Infoseek)':{kw:['qt='],tl:['infoseek.go.com']},'Live.com':{kw:['q='],tl:['search.live.com']},'AOL.com Search':{kw:['query='],tl:['search.aol.com','search.aol.ca']},'InfoSeek':{kw:['qt='],tl:['infoseek.co.uk']},'SmartPages.com':{kw:['QueryString='],tl:['smartpages.com']},'Excite - Germany':{kw:['search=','q='],tl:['www.excite.de']},'Excite - Dutch':{kw:['search='],tl:['nl.excite.com']},'Google - Australia':{kw:['q='],tl:['google.com.au']},'Google - Brasil':{kw:['q='],tl:['google.com.br']},'Lycos':{kw:['query='],tl:['www.lycos.com','search.lycos.com']},'Metacrawler - Germany':{kw:['qry='],tl:['216.15.219.34','216.15.192.226']},'MSN - Netherlands':{kw:['q='],tl:['search.msn.nl']},'MSN - Belgium':{kw:['q='],tl:['search.msn.be']},'MSN - Germany':{kw:['q='],tl:['search.msn.de']},'MSN - Austria':{kw:['q='],tl:['search.msn.at']},'MSN - Spain':{kw:['q='],tl:['search.msn.es']},'MSN - Italy':{kw:['q='],tl:['search.msn.it']},'MSN - France':{kw:['q='],tl:['search.msn.fr']},'MSN - Switzerland':{kw:['q='],tl:['search.msn.ch','fr.ch.msn.com']},'MSN - Sweden':{kw:['q='],tl:['search.msn.se']},'MSN - Norway':{kw:['q='],tl:['search.msn.no']},'MSN - Denmark':{kw:['q='],tl:['search.msn.dk']},'MSN - Ireland':{kw:['q='],tl:['search.msn.ie']},'AltaVista':{kw:['q=','r='],tl:['altavista.co']},'AltaVista - Germany':{kw:['q=','r='],tl:['altavista.de']},'AOL - Germany':{kw:['q='],tl:['suche.aol.de','suche.aolsvc.de']},'Google - United Kingdom':{kw:['q='],tl:['google.co.uk']},'Google - Yugoslavia':{kw:['q='],tl:['google.co.yu']},'Hotbot - United Kingdom':{kw:['query='],tl:['hotbot.co.uk']},'Netscape Search':{kw:['query=','search='],tl:['netscape.com']},'Yahoo! - Russia':{kw:['p='],tl:['ru.yahoo.com','ru.search.yahoo.com']},'Yahoo! - Denmark':{kw:['p='],tl:['dk.yahoo.com','dk.search.yahoo.com']},'Yahoo! - Germany':{kw:['p='],tl:['de.yahoo.com','de.search.yahoo.com']},'Yahoo! - UK and Ireland':{kw:['p='],tl:['uk.yahoo.com','uk.search.yahoo.com']},'Yahoo! - Sweden':{kw:['p='],tl:['se.yahoo.com','se.search.yahoo.com']},'Yahoo! - Spain':{kw:['p='],tl:['es.yahoo.com','es.search.yahoo.com']},'Yahoo! - Italy':{kw:['p='],tl:['it.yahoo.com','it.search.yahoo.com']},'Yahoo! - France':{kw:['p='],tl:['fr.yahoo.com','fr.search.yahoo.com']},'Yahoo! - Norway':{kw:['p='],tl:['no.yahoo.com','no.search.yahoo.com']},'Yahoo! - Netherlands':{kw:['p='],tl:['nl.yahoo.com','nl.search.yahoo.com']},'Yahoo! - New Zealand':{kw:['p='],tl:['nz.yahoo.com','nz.search.yahoo.com']},'Fireball':{kw:['q=','query='],tl:['fireball.de']},'InfoSeek - Germany':{kw:['qt=','query='],tl:['infoseek.de']},'Lycos - United Kingdom':{kw:['query='],tl:['lycos.co.uk']},'AOL - United Kingdom':{kw:['query='],tl:['aol.co.uk','search.aol.co.uk']},'Excite - France':{kw:['search=','q='],tl:['excite.fr']},'Excite.ch':{kw:['search=','q='],tl:['excite.ch']},'Google - Poland':{kw:['q='],tl:['google.pl']},'Google - Luxembourg':{kw:['q='],tl:['google.lu']},'Google - Slovakia':{kw:['q='],tl:['google.sk']},'Google - Russia':{kw:['q='],tl:['google.ru']},'Google - Denmark':{kw:['q='],tl:['google.dk']},'Google - Portugal':{kw:['q='],tl:['google.pt']},'Google - Romania':{kw:['q='],tl:['google.ro']},'Google - Finland':{kw:['q='],tl:['google.fi']},'Google - Latvia':{kw:['q='],tl:['google.lv']},'Google - Guernsey':{kw:['q='],tl:['google.gg']},'Google - Ireland':{kw:['q='],tl:['google.ie']},'Google - Sweden':{kw:['q='],tl:['google.se']},'Google - Lithuania':{kw:['q='],tl:['google.lt']},'Google - Spain':{kw:['q='],tl:['google.es']},'Google':{kw:['q='],tl:['google.co','googlesyndication.com']},'Google - Germany':{kw:['q='],tl:['google.de']},'Google - Switzerland':{kw:['q='],tl:['google.ch']},'Google - China':{kw:['q='],tl:['google.cn']},'Google - Netherlands':{kw:['q='],tl:['google.nl']},'Google - Austria':{kw:['q='],tl:['google.at']},'Google - Belgium':{kw:['q='],tl:['google.be']},'Google - Chile':{kw:['q='],tl:['google.cl']},'Google - France':{kw:['q='],tl:['google.fr']},'Google - Italy':{kw:['q='],tl:['google.it']},'Search.ch':{kw:['q='],tl:['search.ch']},'Yahoo!':{kw:['p='],tl:['yahoo.com','search.yahoo.com']},'Google - Norway':{kw:['q='],tl:['google.no']},'Google - Greece':{kw:['q='],tl:['google.gr']},'Yandex.ru':{kw:['text='],tl:['yandex.ru']},'Google - Hungary':{kw:['q='],tl:['google.hu']},'Google - Island':{kw:['q='],tl:['google.is']},'Google - Liechtenstein':{kw:['q='],tl:['google.li']},'Google - Kazakhstan':{kw:['q='],tl:['google.kz']},'Google - Croatia':{kw:['q='],tl:['google.hr']},'Google - Slovenia':{kw:['q='],tl:['google.si']},'Google - Bulgaria':{kw:['q='],tl:['google.bg']},'Google - Bosnia-Hercegovina':{kw:['q='],tl:['google.ba']},'MSN UK':{kw:['q='],tl:['msn.co.uk']},'Lycos - Italy':{kw:['query='],tl:['lycos.it']},'Lycos - France':{kw:['query='],tl:['lycos.fr']},'Lycos - Spain':{kw:['query='],tl:['lycos.es']},'Lycos - Netherlands':{kw:['query='],tl:['lycol.nl']},'Lycos - Germany':{kw:['query='],tl:['lycol.de','search.lycos.de']},'Ask Jeeves':{kw:['ask=','q='],tl:['ask.com','ask.co.uk']},'MSN':{kw:['q='],tl:['msn.com']},'AOL - France':{kw:['q='],tl:['aol.fr']},'Web.de':{kw:['su='],tl:['web.de']},'Microsoft Bing':{kw:['q='],tl:['bing.com']}}}";
s_ocatalyst.__se = new Function("var l={'~':'tl:[\\'','^': 'kw:[\\'','%': 'ahoo','|': '\\'],','>': '\\']}','*': '.com','$': 'search',';':'query','#':'land','`':'oogle','+':'http://www','<':'keyword'};var f=this.___se+'';var g='';for(var i=0;i<f.length;i++){if(l[f.substring(i,i+1)]&&typeof l[f.substring(i,i+1)]!='undefined'){g+=l[f.substring(i,i+1)];}else{g+=f.substring(i,i+1);}}return eval('('+g+')');");
s_ocatalyst.isEntry = new Function("var s=this;var l=s.linkInternalFilters,r=s.referrer||typeof s.referrer!='undefined'?s.referrer:document.referrer,p=l.indexOf(','),b=0,v='',I2=r.indexOf('?')>-1?r.indexOf('?'):r.length,r2=r.substring(0,I2);if(!r){return 1;}while(p=l.indexOf(',')){v=p>-1?l.substring(0,p):l;if(v=='.'||r2.indexOf(v)>-1){return 0;}if(p==-1){break;}b=p+1;l=l.substring(b,l.length);}return 1;");
s_ocatalyst.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}");
s_ocatalyst.channelManager = new Function("p", "f", "var dl='Direct Load',nr='No Referrer',ow='Other Websites';if(!this.p_fo('cm')) {return -1;}if(!this.isEntry()){return 0;}var s=this,r=s.referrer||typeof s.referrer!='undefined'?s.referrer:document.referrer,e,k,c,w,_b=0,url=s.pageURL?s.pageURL:s.wd.location,url=url+'',rf='';s.__se=s.__se();var br=0;var ob=new Object;ob.debug=function(m){if(f){f(m);}};ob.channel='';ob.keyword='';ob.partner='';ob.toString=function(ar){var str='';var x=0;for(x in ar){str+=ar[x]+':\\''+ob[ar[x]]+'\\',';}str='{'+str.substring(0,str.length-1)+'}';return str;};ob.referrer=r?r:nr;ob.getReferringDomain=function(){if(this.referrer==''){return '';}if(r&&typeof r!='undefined'){var end=r.indexOf('?') >-1?r.indexOf('?'):r.substring(r.length-1,r.length)=='/'?r.length-1:r.length;var start=r.indexOf('://')>-1?r.indexOf('://')+3:0;return r.substring(start,end);}else{return nr;}};ob.clear=function(ar){var x=0;for(x in ar){this[ar[x]]='';}this.referringDomain=this.getReferringDomain();};ob.referringDomain=ob.getReferringDomain();ob.campaignId=''; ob.isComplete=function(){var ar=['channel','keyword','partner','referrer','campaignId'];for(var i=0;i<ar.length;i++){if(!ob[ar[i]]){return 0;}}if(p&&s.c_r('cmm')==ob.toString(ar)){this.debug('Duplicate');this.clear(ar);return 1;}else if(p){s.c_w('cmm',ob.toString(ar));return 1;}return 1;};ob.matcher=function(u,x){if(!u){return false;}if(typeof s.__se[u].i!='undefined'&&(s.campaign||s.getQueryParam&&s.getQueryParam(ids[x]))){ob.campaignId=s.getQueryParam(ids[x]);return true;}else if(typeof s.__se[u].p!='undefined' &&(s.campaign||s.getQueryParam&&s.getQueryParam&&s.getQueryParam(ids[x].substring(0,ids[x].indexOf('='))))){var _ii=ids[x].substring(ids[x].indexOf('=') +1,ids[x].length);var _id=s.campaign||s.getQueryParam(ids[x].substring(0,ids[x].indexOf('=')));if (_ii==_id.substring(0,_ii.length)){ob.campaignId=_id;return true;}}else{return false;}};var ids='';var _p='';for(var i in s.__se){if(_p){break;}for(var j in s.__se[i]){if(!(j=='p' ||j=='i')){_p=i;}}}for(var u in s.__se[_p]){if(u!='i' &&u!='p'){for(var h=0;h<s.__se[_p][u].tl.length;h++){if(s.__se[_p][u].tl[h]&&typeof s.__se[_p][u].tl[h]=='string'){if(r.indexOf(s.__se[_p][u].tl[h])!=-1){ob.partner=u;br=1;break;}}if(br){break;}}}else {ids=s.__se[_p][u];}if(br){for(var i=0;i<s.__se[_p][ob.partner].kw.length;i++){if(s.__se[_p][u].kw[i]&&typeof s.__se[_p][u].kw[i]=='string') {var kwd=s.__se[_p][u].kw[i].substring(0,s.__se[_p][u].kw[i].length-1);ob.keyword=s.getQueryParam?s.getQueryParam(kwd,'', r):''; if(ob.keyword){break;}}}for(var x=0;x<ids.length;x++){if(ob.matcher(_p,x)){ob.channel=_p;if(!ob.keyword){ob.keyword='n/a'; }break;}};if(!ob.channel){ob.channel='Natural'; ob.campaignId='n/a'; }break;}}if(ob.isComplete()){return ob;}for(var _u in s.__se){if(_u==_p){continue;}for(var u in s.__se[_u]){ids=s.__se[_u][u];for(var x=0;x<ids.length;x++){if(ob.matcher(_u,x)){ob.channel=_u;ob.partner=_u;ob.keyword='n/a'; break;}}if(ob.isComplete()){return ob;}}}if(ob.isComplete()){return ob;}if(ob.referrer&&(ob.referrer!=nr)){ob.channel=ow;ob.partner=ow;ob.keyword='n/a'; ob.campaignId='n/a'; }if(ob.isComplete()){return ob;}ob.channel=dl;ob.partner=dl;ob.keyword='n/a'; ob.campaignId='n/a';return ob;");
s_ocatalyst.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
s_ocatalyst.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s_ocatalyst.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");
s_ocatalyst.setupFormAnalysis = new Function("var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s.wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.eventList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('','','','')}");
s_ocatalyst.sendFormEvent = new Function("t", "pn", "fn", "en", "var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s_ocatalyst.faol = new Function("e", "var s=s_c_il[" + s_ocatalyst._in + "],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd.event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.length>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name;tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.elements[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.onmousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toString():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s.wd.onunload;s.wd.onunload=s.fasl;}return r;");
s_ocatalyst.faos = new Function("e", "var s=s_c_il[" + s_ocatalyst._in + "],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.vu]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):true;");
s_ocatalyst.fasl = new Function("e", "var s=s_c_il[" + s_ocatalyst._in + "],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPageName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.pathname:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]='Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackVars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lte=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,',','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s.events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f.vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
s_ocatalyst.fam = new Function("e", "var s=s_c_il[" + s_ocatalyst._in + "],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLastChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this.form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e.which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOWN'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIMAGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fakd(e);");
s_ocatalyst.ee = new Function("e", "n", "return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s_ocatalyst.fage = new Function("e", "a", "var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");
s_ocatalyst.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
s_ocatalyst.setupDynamicObjectIDs = new Function("var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,false);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semaphore=1}");
s_ocatalyst.setOIDs = new Function("e", "var s=s_c_il[" + s_ocatalyst._in + "],b=s.eh(s.wd,'onload'),o='onclick',x='',l,u,c,i,a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0)x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this.s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");
s_ocatalyst.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "var s=this;var ay=s.split(ev,',');for(var u=0;u<ay.length;u++){if(s.events&&s.events.indexOf(ay[u])!=-1){s.c_w(cn,'');return '';}}if(!v||v=='')return '';var arry=new Array();var a=new Array();var c=s.c_r(cn);var g=0;var h=new Array();if(c&&c!='') arry=eval(c);var e=new Date();e.setFullYear(e.getFullYear()+5);if(arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v, new Date().getTime()];else arry[arry.length]=[v, new Date().getTime()];var data=s.join(arry,{delim:',',front:'[',back:']',wrap:'\\''});var start=arry.length-ct < 0?0:arry.length-ct;s.c_w(cn,data,e);for(var x=start;x<arry.length;x++){var diff=Math.round(new Date()-new Date(parseInt(arry[x][1])))/86400000;if(diff<ex){h[g]=arry[x][0];a[g++]=arry[x];}}var r=s.join(h,{delim:dl});return r;");
s_ocatalyst.manageQueryParam = new Function("p", "w", "e", "u", "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.location);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf('?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.length);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1,x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.substring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp){y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0;while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break;}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.rep(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}if(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if(qp)qs='?'+qp;return u+qs;");
s_ocatalyst.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s_ocatalyst.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
var s_code = "",
    s_objectID;

/*-=- Contents of scripts/plugins/jquery.bwin.tracking.netinsight.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = !1,
            i = "(function(){var w=document,r=window;function Q(value){return((typeof(value)===\"string\")&&(value!==\"\"));};function Bv(o){return(encodeURIComponent?encodeURIComponent(o):escape(o));};function hb(o){return(decodeURIComponent?decodeURIComponent(o):unescape(o));};function m(k,o,kT,DW){var G=\"\",I;G=k+'='+Bv(o)+\";\";if(DW){G+=\" domain=\"+DW+\";\";}if(kT>0){I=new Date();I.setTime(I.getTime()+(kT*1000));G+=\" expires=\"+I.toGMTString()+\";\";}G+=\" path=/\";w.cookie=G;};function l(k){var Bw,p,j,G;Bw=k+\"=\";G=w.cookie;if(G.length>0){j=G.indexOf(Bw);if(j!==-1){j+=Bw.length;p=G.indexOf(\";\",j);if(p===-1){p=G.length;}return hb(G.substring(j,p));};}return null;};function Mu(cQ){var L=\"\",H;for(H in cQ){if(Q(cQ[H])){if(L!==\"\"){L+=\";\";}L+=H+\"=\"+cQ[H];};}return L;};function eC(t){var Bj='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';if(t<62){return Bj.charAt(t);}return(eC(Math.floor(t/62))+Bj.charAt(t%62));};function FP(){var tT=\"\",Bd=new Date(),Uu;for(Uu=0;Uu<11;Uu+=1){tT+=eC(Math.round(Math.random()*61));}return(tT+\"-\"+eC(Bd.getTime()));};function GI(Z,fh){return(Z+(((Z==='')||((fh==='')||(fh.substring(0,1)==='&')))?'':'&')+fh);};function Fc(){var lO=new Date();return(lO.getTime()+'.'+Math.floor(Math.random()*1000));};function h(Z6,hJ){return(typeof(r[Z6])!==\"undefined\")?r[Z6]:hJ;};(function(){var GV=h('NTPT_GLBLCOOKIES',null),p6=h('NTPT_PGCOOKIES',null),Y4=h('NTPT_SET_IDCOOKIE',false),Y=h('NTPT_IDCOOKIE_NAME',\"SaneID\"),Yl=h('NTPT_IDCOOKIE_DOMAIN',null),fS=h('NTPT_IDCOOKIE_EXPIRE',155520000),or=h('NTPT_SET_SESSION_COOKIE',false),GL=h('NTPT_SESSION_COOKIE_NAME',\"NetInsightSessionID\"),cX=h('NTPT_SESSION_COOKIE_DOMAIN',null),c6=h('NTPT_HTTPSIMGSRC',''),pV=h('NTPT_PGREFTOP',h('NTPT_GLBLREFTOP',false)),xE=h('NTPT_NOINITIALTAG',false),hE=h('NTPT_MAXTAGWAIT',1.0),IC=NTPT_IMGSRC,c=NTPT_FLDS,bs=null,M=null,S=null,a=null,A=[],N={},z=new Array(10),q;for(q=0;q<z.length;q+=1){z[q]=null;}function v(k,Vz){if(typeof(Vz)!==\"undefined\"){A[k]=Vz.toString();}};function s3(k){A[k]='';};function dB(s){var Ek,e,f;if(Q(s)){Ek=s.split('&');for(f=0;f<Ek.length;f+=1){e=Ek[f].split('=');if(e.length===2){v(e[0],hb(e[1]));};};}};function zj(s){var _R='',H;dB(h('NTPT_GLBLEXTRA',''));if(!S){dB(h('NTPT_PGEXTRA',''));}dB(s);for(H in A){if(Q(A[H])){_R=GI(_R,H+'='+Bv(A[H]));};}return _R;};function Yq(){var H;N.A=[];for(H in A){if(Q(A[H])){N.A[H]=A[H];};}};function B4(){var H;A=[];for(H in N.A){if(Q(N.A[H])){A[H]=N.A[H];};}};function oN(P,i,W){if(z[P]!==null){z[P].onload=i;z[P].onerror=i;z[P].onabort=i;}return setTimeout(i,(W*1000));};function D6(g,R){if(!Q(g)){return;}q=((q+1)%z.length);if(z[q]===null){z[q]=new Image(1,1);}z[q].src=g+'?'+R;};function pa(s){var g,R;if((c6!=='')&&(w.location.protocol==='https:')){g=c6;}else{g=IC;}R=zj(s);D6(g,R);B4();};function kU(s){v('ets',Fc());pa(s);return true;};function mT(K){if(bs){clearTimeout(bs);bs=null;}if(S){var _=S;S=null;if(K){_.click();_.onclick=_.UK;}else{r.location.href=_.href;};}};function we(T,s,W){var C,K;if(!T||!T.href){return true;}if(S){return false;}S=T;if(c.lc){v('lc',T.href);}if(c.rf){if(!pV||!top||!top.document){v('rf',w.location);};}kU(s);if(W){C=W;}else{C=hE;}if(C>0){if(S.click){S.UK=S.onclick;S.onclick=null;K=true;}else{K=false;}bs=oN(q,function(){mT(K);},C);return false;}S=null;return true;};function xa(){if(M){clearTimeout(M);M=null;}if(a){var bp=a;a=null;bp.submit();bp.onsubmit=bp.TJ;}};function L8(D,s,W){var C;if(!D||!D.submit){return true;}if(a){return false;}a=D;kU(s);if(W){C=W;}else{C=hE;}if(C>0){D.TJ=D.onsubmit;D.onsubmit=null;M=oN(q,function(){xa();},C);return false;}a=null;return true;};function BY(){var Hf;if(pV&&top&&top.document){Hf=top.document.referrer;}else{Hf=w.referrer;}v('rf',Hf);};function Rd(){var B;if(navigator.language){B=navigator.language;}else if(navigator.userLanguage){B=navigator.userLanguage;}else{B='';}if(B.length>2){B=B.substring(0,2);}B=B.toLowerCase();v('ln',B);};function WQ(){var F,lO=new Date(),J=lO.getTimezoneOffset(),V;F='GMT';if(J!==0){if(J>0){F+=' -';}else{F+=' +';}J=Math.abs(J);V=Math.floor(J/60);J-=V*60;if(V<10){F+='0';}F+=V+':';if(J<10){F+='0';}F+=J;}v('tz',F);};function Ab(){var O=[],np=false,NR='ck',b,G,U,H;v('js','1');v('ts',Fc());if(c.lc){v('lc',w.location);}if(c.rf){BY();}if(self.screen){if(c.rs){v('rs',self.screen.width+'x'+self.screen.height);}if(c.cd){v('cd',self.screen.colorDepth);};}if(c.ln){Rd();}if(c.tz){WQ();}if(c.jv){v('jv',navigator.javaEnabled()?'1':'0');}if(or&&!l(GL)){m(GL,1,0,cX);if(c.iv&&l(GL)){v('iv','1');};}if(c.ck){if(GV){for(b=0;b<GV.length;b+=1){O[GV[b]]=\"\";};}if(p6){for(b=0;b<p6.length;b+=1){O[p6[b]]=\"\";};}for(H in O){if(typeof(O[H])===\"string\"){G=l(H);if(G){O[H]=G;};};}if(Y4){G=l(Y);if(G){O[Y]=G;np=true;};}U=Mu(O);if(U!==\"\"){v(NR,U);};}Yq();if(!xE){pa('');}s3('iv');Yq();if(Y4&&!np){G=l(Y);if(!G){G=FP();m(Y,G,fS,Yl);if(c.ck&&l(Y)){O[Y]=G;U=Mu(O);if(U!==\"\"){v(NR,U);Yq();};};};}};function B6(k,o){var Z,wr,b,C9;Z=w.location.search.substring(1);C9=k+\"=\"+o;wr=Z.split(\"&\");for(b=0;b<wr.length;b+=1){if(wr[b]===C9){return true;};}return false;};function vD(){var uY=h(\"NTPT_EM_COOKIE_PREFIX\",\"NetInsightEM\"),wG=uY+\"Session\",dz=uY,O_=h(\"NTPT_EM_COOKIE_TIMEOUT\",1800),Rr=\"emsgpcat\",iI=\"1\",Ks=\"1\";if(l(wG)||l(dz)||B6(Rr,iI)){m(wG,Ks,0,Yl);m(dz,Ks,O_,Yl);v(Rr,iI);return true;}return false;};function Yu(){if(c.gsme){return vD();}return true;};if(Yu()){r.ntptAddPair=function(X,d){return v(X,d);};r.ntptDropPair=function(X){return s3(X);};r.ntptEventTag=function(X){return kU(X);};r.ntptLinkTag=function(X,d,T5){return we(X,d,T5);};r.ntptSubmitTag=function(X,d,T5){return L8(X,d,T5);};Ab();}else{r.ntptAddPair=r.ntptDropPair=r.ntptEventTag=r.ntptLinkTag=r.ntptSubmitTag=function(){return true;};}}());}());",
            r = function() {
                if (!t) {
                    var n = document.createElement("script");
                    return n.setAttribute("type", "text/javascript"), n.text = i, document.body.appendChild(n), t = !0, !0
                }
                return !1
            };
        n.bwin.netinsight = {
            name: "NetInsight",
            track: function(t, i, u) {
                var e, o, f;
                window.NIBP = {};
                window.NI = {};
                e = n.bwin.flash.getVersion();
                NIBP.prop16 = e;
                NI.eVar16 = e;
                for (o in i) {
                    var s = i[o],
                        h = s[0],
                        c = s[1];
                    NIBP[h] = c;
                    NI[h] = c
                }
                NI.fe = u.Frontend;
                NI.chn = u.Channel;
                NI.sys = u.Sys;
                NI.prod = u.ProductName;
                window.NI_dm = document.domain;
                window.NTPT_IMGSRC = u.TrackingImageUrl;
                window.NTPT_HTTPSIMGSRC = u.HttpsTrackingImageUrl;
                window.NTPT_FLDS = {
                    lc: !0,
                    rf: !0,
                    rs: !0,
                    cd: !0,
                    ln: !0,
                    tz: !0,
                    jv: !0,
                    ck: !0,
                    iv: !0
                };
                window.NTPT_MAXTAGWAIT = 1;
                window.NTPT_GLBLEXTRA = "";
                window.NTPT_GLBLREFTOP = !1;
                window.NTPT_GLBLCOOKIES = [];
                window.NTPT_SET_IDCOOKIE = !0;
                window.NTPT_IDCOOKIE_NAME = u.CookieName;
                window.NTPT_IDCOOKIE_EXPIRE = 31556926;
                window.NTPT_IDCOOKIE_DOMAIN = NI_dm;
                f = {
                    dm: NI_dm
                };
                f = n.extend(f, NI);
                f = n.extend(f, NIBP);
                typeof window.cat != "undefined" && (f = n.extend(f, window.cat));
                window.NTPT_PGEXTRA = n.param(f);
                r() || window.ntptEventTag()
            }
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.tracking.gtm.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = !1,
            i = function(n) {
                if (!t) {
                    var i = document.createElement("script");
                    return i.setAttribute("type", "text/javascript"), i.text = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','" + n.DataLayerName + "','" + n.ContainerId + "');", document.body.appendChild(i), t = !0, !0
                }
                return !1
            }, r = function(n) {
                return window[n] = window[n] || [], window[n]
            }, u = function(n, t, i) {
                var f, u, e;
                try {
                    f = r(i);
                    u = {
                        id: n
                    };
                    for (e in t) {
                        var o = t[e],
                            s = o[0],
                            h = o[1];
                        u[s] = h
                    }
                    f.push(u)
                } catch (c) {}
            };
        n.bwin.gtm = {
            name: "GoogleTagManager",
            init: function(n) {
                i(n)
            },
            track: function(n, t, i) {
                u(n, t, i.DataLayerName)
            }
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.tracking.min.js -=-*/

(function(n, t) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var u = [n.bwin.omniture, n.bwin.netinsight, n.bwin.gtm],
            f = function(t) {
                var i = n("script[data-rel=" + t + "]");
                return i.length > 0 ? n.parseJSON(i.html()) : null
            }, i = function(n) {
                return f(n + "TrackingConfiguration")
            }, r = function(t) {
                var r = {
                    dataScope: null,
                    trackingData: null,
                    trackerProvider: function() {
                        var t = [],
                            r, n;
                        for (r in u) n = u[r], i(n.name) != null && t.push(n);
                        return t
                    }
                };
                return n.extend(r, t)
            }, e = function(t) {
                return t.trackingData ? n.parseJSON(t.trackingData) : f("TrackingData")
            };
        n.bwin.tracking = function(u) {
            function y() {
                return n("html").data().domain || document.domain.split(".").slice(-2).join(".")
            }

            function p(t) {
                document.cookie = ["trid=", n.param(t)].join("") + "; path=" + h + "; domain=" + c + ";"
            }

            function v() {
                n.removeCookie("trid", {
                    path: h,
                    domain: c
                })
            }
            var s, l, o, f, a, h, c;
            u = r(u);
            s = u.trackerProvider();
            for (l in s) o = s[l], o && o.init && o.init(i(o.name));
            f = e(u);
            f && f.length > 0 && (a = _.map(f, function(n) {
                return n.Group.substring(0, 1) !== "_" ? n.Id : t
            }), n.each(a, function(i, r) {
                r !== t && n.bwin.tracking.trackEvent(r, u, f)
            }));
            h = "/";
            c = y();
            v();
            n(document).on("click", ":button:enabled[data-trid], :submit:enabled[data-trid], a[data-trid]", function() {
                var i, r, u = n(this),
                    t = u.data().trid;
                if (t) {
                    n.cookie("trid") && v();
                    try {
                        t.zone || (r = function() {
                            var t = [];
                            return u.parents("*[data-trid-zone]").each(function(r, u) {
                                r === 0 && (i = n(u).data().tridZone);
                                t.push(n(u).data().tridZone)
                            }), t.reverse().join(">")
                        }(), i && (t.zone = i), r && (t.path = r));
                        p(t)
                    } catch (e) {}
                }
            });
            n(document).on("click", ":button:enabled[data-tracking-id], :submit:enabled[data-tracking-id], a[data-tracking-id]", function() {
                n.bwin.tracking.trackEvent(n(this).data("trackingId"), u, f)
            })
        };
        n.bwin.tracking.trackEventData = function(n, t) {
            var f, e, u;
            if (t = r(t), n && n.Values) {
                f = t.trackerProvider();
                for (e in f) u = f[e], u && u.track(n.Id, n.Values, i(u.name), t)
            }
        };
        n.bwin.tracking.trackEvent = function(t, i, u) {
            i = r(i);
            u || (u = e(i));
            var f = _.select(u, function(n) {
                return n.Id === t
            })[0];
            n.bwin.tracking.trackEventData(f, i)
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.affiliate.min.js -=-*/

(function(n) {
    "use strict";
    n.bwin || (n.bwin = {});
    var t = {}, i, r, u;
    i = function(n) {
        var i, r, t;
        return n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), i = "[\\?&]" + n + "=([^&#]*)", r = new RegExp(i, "i"), t = r.exec(window.location.search), t === null ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    };
    r = function() {
        for (var r = "", u = JSON.parse(n("[data-rel='trackerIds']").html() || "[]"), t = 0; t < u.length; t++)
            if (r = i(u[t]), r !== "") break;
        return r
    };
    u = {
        track: function() {
            var u, o, f, e;
            t.trackingUrl && (f = r(), e = i("zoneId"), u = {}, f.length !== 0 || e.length !== 0) && (f.length > 0 && (u.trackerId = f), e.length > 0 && (u.zoneId = e), o = t.trackingUrl + "?" + n.param(u), n("<img>", {
                src: o
            }))
        }
    };
    n.bwin.affiliate = function(i) {
        return t = n.extend({
            trackingUrl: ""
        }, i), n.extend(this, u)
    }
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.postlogin.min.js -=-*/

(function(n) {
    "use strict";
    n.bwin || (n.bwin = {});
    var u, f, e, i, o, r, s, t;
    u = function() {
        var i = n('<iframe name="' + escape(window.location) + '"/>');
        return i.attr({
            id: "postlogin-frame",
            src: t.url,
            width: 475,
            scrolling: "no",
            frameborder: 0,
            allowtransparency: !0
        }), i
    };
    e = function(i) {
        var u;
        n.bwin.dialog.isOpened() || (u = n("#postlogin-frame").show(), n.bwin.dialog({
            body: u,
            top: t.top,
            left: t.left,
            cancel: t.cancel,
            showCloseIcon: !1,
            closableViaOverlay: !1,
            closableViaButtons: !1
        }));
        r(i)
    };
    i = function() {
        n.bwin.dialog.close()
    };
    r = function(t) {
        n.bwin.dialog.resize(t)
    };
    o = function() {
        i()
    };
    s = function(t) {
        var u = n("#postlogin-frame"),
            i, r, f;
        i = u.attr("src").split("#");
        f = i[0];
        r = i.length > 1 && i[1] ? n.deparam(i[1]) : {};
        r.plmsg = n.param(t);
        u.attr("src", f + "#" + n.param(r))
    };
    f = function() {
        n(window).bind("hashchange", function() {
            var f, u;
            if ((t.isInitialized = !0, f = n.bbq.getState().dlg, f) && (u = n.deparam(unescape(f)) || {}, n.bbq.removeState("dlg"), u.action === "close" && i(), u.action === "minimize" && o(), u.action === "open" && e(u), u.action === "resize" && r(u), t.onMessageHandled)) t.onMessageHandled(u)
        })
    };
    n.bwin.postlogin = function(i) {
        var r = {
            url: "",
            top: Math.round(parseInt(n(window).height(), 10) / 6),
            left: Math.round((parseInt(n(window).width(), 10) - 475) / 2),
            cancel: n.noop,
            onMessageHandled: n.noop,
            isInitialized: !1
        };
        t = n.extend(r, i);
        t.url.length > 0 && (n.bbq.removeState("dlg"), u().hide().appendTo(n("body")), f())
    };
    n.bwin.postlogin.isInitialized = function() {
        return t.isInitialized
    };
    n.bwin.postlogin.send = s
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.sandbox.min.js -=-*/

(function(n, t, i) {
    "use strict";
    n.bwin || (n.bwin = {});
    var r, u, f, o, s, e, h, c, l, a = t.postMessage !== i,
        v = /^[0-9a-f]{32}$/i;
    s = function(n) {
        return u[n] === 1
    };
    f = function(n) {
        var t = document.createElement("a");
        return t.href = n, t.protocol + "//" + t.hostname
    };
    l = function(t) {
        n("#sandbox-spinner-" + t).remove();
        n("#sandbox-iframe-" + t).hide();
        n("#sandbox-" + t).show()
    };
    c = function(t) {
        n("#sandbox-spinner-" + t).remove();
        n("#sandbox-" + t).hide();
        n("#sandbox-iframe-" + t).show()
    };
    h = function(t, i) {
        var o, f, u, e = parseInt(i[".h"], 10);
        if (!isNaN(e) && !(e <= 0) && (o = r[t], o.height !== e) && (f = n("#sandbox-iframe-" + t), f.length)) {
            if (o.height <= 0) {
                if (u = n("#sandbox-" + t), !u.length) return;
                f.attr({
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0)
                }).css({
                    visibility: "visible",
                    position: "static",
                    left: "auto",
                    top: "auto"
                });
                n("#sandbox-spinner-" + t).remove();
                u.hide();
                u.parent().append(f)
            }
            o.height = e;
            f.height(e)
        }
    };
    o = function(t) {
        var i, u = n.deparam(t.data),
            f = u[".box"],
            o = u[".handlerName"];
        v.test(f) && e[o] && (i = r[f], i && i.domain === t.origin) && e[o](f, u)
    };
    e = {
        changeHeight: h,
        show: c,
        hide: l
    };
    n.bwin.initSandbox = function(e, h, c) {
        var l, v, y = f(h),
            p = c;
        r === i && (r = {}, u = {}, n.receiveMessage(o, s));
        l = n("#sandbox-" + e);
        v = n('<iframe name="sandbox:' + e + ":" + n("<div/>").text(t.location.href).html() + '"/>');
        v.attr({
            id: "sandbox-iframe-" + e,
            src: h,
            height: l.outerHeight(!0),
            width: l.outerWidth(!0),
            frameborder: "0",
            seamless: "seamless",
            allowTransparency: "true",
            scrolling: "no",
            marginheight: "0",
            marginwidth: "0",
            style: "border:0;overflow:hidden;visibility:hidden;position:absolute;left:-10000px;top:0"
        });
        r[e] = {
            id: e,
            url: h,
            domain: a ? y : i,
            height: 0
        };
        u[y] = 1;
        n("#sandbox-spinner-" + e).show();
        p > 0 && t.setTimeout(function() {
            var t = n("#sandbox-" + e),
                i = n("#sandbox-spinner-" + e),
                r = t.parent().find("#sandbox-iframe-" + e);
            i.remove();
            r.length || (n("#sandbox-iframe-" + e).remove(), t.show())
        }, p);
        n("body").append(v)
    },
    function() {
        function o(i) {
            i = n.extend({
                ".box": r
            }, i);
            n.postMessage(i, u, t.parent)
        }

        function s() {
            var t = n("body").outerHeight(!0);
            t !== e && (o({
                ".handlerName": "changeHeight",
                ".h": t
            }), e = t)
        }
        var r, u, e, i = t.name.match(/^sandbox:([0-9a-z]{32}):(https?:\/\/.+)$/i);
        i && (r = i[1], u = f(i[2]), s(), t.setInterval(s, 250), n.bwin.sandbox || (n.bwin.sandbox = {}), n.bwin.sandbox.fallback = function(n) {
            o({
                ".handlerName": n ? "hide" : "show"
            })
        })
    }()
})(jQuery, window);

/*-=- Contents of scripts/host.min.js -=-*/

(function(n) {
    "use strict";

    function t() {
        n(document).ajaxSuccess(function(t, i) {
            var r = i.getResponseHeader("x-bwin-tracking-data");
            r && n.bwin.tracking({
                trackingData: r
            })
        })
    }

    function i() {
        n(document).on("click", ".dialog-link", function(t) {
            var i = this.href,
                o = n.deparam.querystring(i),
                u = n('<iframe name="' + escape(window.location) + '"/>'),
                f = n(this),
                r = f.data("dialog-width"),
                e;
            return o._layout || (i = n.param.querystring(i, {
                _layout: "layouts\\emptydialoglayout"
            })), e = Math.round((parseInt(n(window).width(), 10) - r) / 2), u.attr({
                src: i,
                width: r,
                height: f.data("dialog-height"),
                scrolling: "no",
                frameborder: 0,
                allowtransparency: !0
            }), t.preventDefault(), n.bwin.dialog({
                left: e,
                width: r,
                body: u
            }), !1
        })
    }

    function r() {
        n.validator.methods.number = function(n, t) {
            return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:[\.,]\d+)?$/.test(n)
        };
        n.validator.methods.range = function(n, t, i) {
            var r = n.replace(",", ".");
            return this.optional(t) || r >= i[0] && r <= i[1]
        }
    }

    function u() {
        n.expr[":"].regex = function(t, i, r) {
            var u = r[3].split(","),
                f = /^(data|css):/,
                e = {
                    method: u[0].match(f) ? u[0].split(":")[0] : "attr",
                    property: u.shift().replace(f, "")
                }, o = new RegExp(u.join("").replace(/^\s+|\s+$/g, ""), "ig");
            return o.test(n(t)[e.method](e.property))
        }
    }

    function f() {
        n("#auth-form-container").find("form").bwin_loginform()
    }

    function e() {
        var i = n("#shortDatePattern").data("pattern"),
            t = n.datepicker.regional[""];
        t.currentText = "today";
        t.closeText = "close";
        n.datepicker.setDefaults(t);
        n.datepicker._gotoToday = function(t) {
            var i = this._getInst(n(t)[0]),
                r = this._formatDate(i, i.selectedDay, i.drawMonth, i.drawYear);
            i.input.val(r);
            this._setDate(i, new Date);
            this._updateAlternate(i);
            this._hideDatepicker()
        };
        n("#main").find(".datepicker").datepicker({
            showButtonPanel: !0,
            dateFormat: i,
            altField: ".datepicker-altfield",
            altFormat: "yy-mm-dd"
        });
        n("#main").find(".datepicker-birthdate").datepicker({
            defaultDate: "01/01/1992"
        });
        n("#ui-datepicker-div").hide()
    }

    function o() {
        n.uniform.defaults.selectAutoWidth = !1;
        n("input:submit, input:checkbox, input:radio, input:file, button, select").bwin_uniform()
    }

    function s() {
        n(".js .show").show();
        n(".js .hide").hide()
    }

    function h() {
        var i = n("#server-time").data("time"),
            t;
        i && (t = i, setInterval(function() {
            t += 1e3;
            n("#server-time").text(new Date(t + (new Date).getTimezoneOffset() * 6e4).toLocaleTimeString())
        }, 1e3))
    }

    function c() {
        var t = n("#wrong-device");
        t != null && t.find(".closethick").click(function() {
            var i = t.data().cookie || "",
                r;
            i.length > 0 && (r = n("html").data().domain || location.host, n.cookie(i, !1, {
                path: "/",
                domain: r
            }));
            t.slideUp()
        })
    }

    function l() {
        var t = n("#flash").find(".message-viewer .close").add(n("#header").find(".login-button")).add(n("#header").find(".logout-button"));
        t.bwin_hover()
    }

    function a() {
        n(document).ajaxError(function(n, t) {
            var i, r;
            (t.status === 401 || t.status === 403) && (i = t.getResponseHeader("x-bwin-location"), i && (r = i + (i.indexOf("?") == -1 ? "?" : "&") + "ReturnUrl=" + encodeURIComponent(location.href), location.assign(r)))
        })
    }
    n(function() {
        h();
        s();
        o();
        e();
        f();
        u();
        r();
        i();
        t();
        c();
        a();
        n.bwin.signupbonus();
        n.bwin.tracking();
        n.bwin.personalbutton();
        n.bwin.langswitch();
        n.bwin.editdot && n.bwin.editdot();
        l()
    })
})(jQuery);

/*-=- Contents of scripts/page-matrix.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        var i, r, t;
        r = n("#main").find(".pc-teaser").not(".no-toggle").find(".overlay").not(".no-rollover");
        n(r).mouseenter(function() {
            n(this).find("div.show").hide();
            n(this).find("div.hide").show()
        }).mouseleave(function() {
            n(this).find("div.hide").hide();
            n(this).find("div.show").show()
        });
        n("#main").find(".promo-button-teaser .hide, .big-teaser .hide").show();
        i = function(t) {
            t.toggleClass("ui-icon-triangle-1-e").toggleClass("ui-icon-triangle-1-s");
            n(this).toggle()
        };
        n(".pc-toggle-component").each(function() {
            var t, r;
            t = n(this).find("section:first");
            r = n("<span>").addClass("ui-icon ui-icon-triangle-1-s");
            t.length && i.call(t, r);
            n(this).find("header").addClass("toggle").prepend(r);
            n(this).find("header").click(function() {
                i.call(t, r)
            })
        });
        n(".pm-tabs").length && n(".pm-tabs").bwintabs();
        t = n("a.btn-s1, a.btn-s2, a.btn-s3, a.btn-l1, a.btn-l2, a.btn-l3, a.btn-t1, a.btn-t2, a.btn-t3");
        t.length && (n(t).bwin_uniform(), t.each(function() {
            var t = n(this).parents(".uni-button").wrap('<div class="' + n(this).attr("class") + '">'),
                i = t.parents('[class*="teaser-btn-"]').length,
                r = t.parents().hasClass("teaser-btn-middle");
            i && (n(t).parent().wrap('<div class="teaser-btn" />'), r && n(t).parent().addClass("middle"))
        }));
        n(".btn-l2, .btn-t2").addClass("btn-s2");
        n(".btn-l3, .btn-t3").addClass("btn-s3");
        n(".carousel-container").length && n.bwin.carousel();
        n('[class*="animate-element-opacity"]').length && n.bwin.animateElementsOpacity(".lp-small-box")
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.ajaxspinner.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.ajaxspinner = function() {
            var t = [];
            n(document).ajaxSend(function(i, r) {
                r.bwin_timeoutId = setTimeout(function() {
                    n("<div>", {
                        id: "ajax-overlay"
                    }).addClass("ui-widget-overlay").appendTo("body");
                    n("<div>", {
                        id: "ajax-spinner"
                    }).css({
                        top: parseInt(n(window).height(), 10) / 2 - 20,
                        left: parseInt(n(window).width(), 10) / 2 - 55
                    }).appendTo("body")
                }, 350);
                t.push(r.bwin_timeoutId)
            });
            n(document).ajaxComplete(function(i, r) {
                var u = r.bwin_timeoutId,
                    f = _(t).indexOf(u);
                _(t).include(u) && (clearTimeout(u), t.splice(f, 1));
                n.bwin.ajaxspinner.remove()
            })
        };
        n.bwin.ajaxspinner.remove = function() {
            n("#ajax-spinner").remove();
            n("#ajax-overlay").remove()
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.userstaterow.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.userstaterow = {};
        n.bwin.userstaterow.refresh = function(t) {
            var i = n("#auth-form-container"),
                r = i.find("form").first(),
                f = n("html").attr("lang") || "en",
                u = 'input:hidden[name="productArea"]';
            n.ajax({
                cache: !1,
                url: "/" + f + "/userstate",
                data: t,
                success: function(t) {
                    var e, f, o;
                    o = r.find(u).val();
                    f = n(t);
                    f.find(u).val(o);
                    i.html(f);
                    n("#return-url").val(window.location);
                    r.bwin_loginform();
                    n.cookie("pl-min") === "1" && n("#post-login-reminder").show();
                    e = i.find('input:hidden[name="__RequestVerificationToken"]').val();
                    n(document).trigger("bwin.userstate:update", e)
                }
            })
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.ajaxauth.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.ajaxauth = function() {
            n(document).ajaxError(function(t, i) {
                if (i.status === 401 || i.status === 403) {
                    var u = i.getResponseHeader("x-bwin-messages"),
                        r = n.parseJSON(u);
                    i.responseText && n("#main").html(i.responseText);
                    n.bwin.userstaterow.refresh();
                    n.bwin.personalbutton.removeMessages();
                    r && n.each(r, function(t, i) {
                        n.bwin.personalbutton.addMessage(i)
                    })
                }
            });
            n(document).ajaxSuccess(function(t, i, r) {
                var u = /security\/authentication\/state/i.test(r.url),
                    f = n("#betslip").find("span.auth-required").length > 0,
                    e = n("#auth-form-container").find("span.logout-button").length > 0;
                !u && f && e && n.bwin.userstaterow.refresh()
            })
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.dialog.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var f, e, o, s, h, c, r, t, u = "#dialog-overlay",
            i = "#dialog-box";
        f = function(t) {
            var r = n("<div>", {
                id: i.substr(1)
            }).css({
                top: t.top,
                left: t.left,
                width: t.width
            });
            return t.showCloseIcon && r.append(n("<span>", {
                id: "dialog-close"
            }).attr({
                unselectable: "on"
            }).addClass("ui-icon ui-icon-closethick").text("close")), r.append(n("<div>").html(t.body)).appendTo("body")
        };
        o = function(n) {
            var t = document.location.protocol + "//" + document.location.host;
            return n.length >= t.length && n.substring(0, t.length) === t
        };
        e = function(t, i) {
            var r = t.find("iframe");
            r.length === 1 && (t.addClass("dialog-has-iframe"), r.attr({
                width: i.width
            }), o(r.prop("src")) && r.load(function() {
                var i = n(this).contents(),
                    t = function() {
                        r.height(i.height())
                    };
                i.find("form").submit(function() {
                    if (navigator.userAgent.match(/MSIE\s([\d.]+)/)) {
                        var n = setInterval(function() {
                            t()
                        }, 50);
                        setTimeout(function() {
                            clearInterval(n)
                        }, 1e3)
                    } else t()
                });
                t()
            }))
        };
        s = function(r) {
            n(document).on("click", "#dialog-close", function() {
                return t(), r.cancel(), !1
            });
            if (r.closableViaOverlay) n(document).on("click", u, function() {
                return t(), r.cancel(), !1
            });
            n(i).find("div.uni-button").click(function(i) {
                return ;
                //return (i.stopPropagation(), r.closableViaButtons && t(), n(this).find(".confirm-button").length === 1) ? r.confirm(i) : n(this).find(".cancel-button").length === 1 ? r.cancel(i) : !1
            });
            var f = function(i) {
                i.keyCode === n.ui.keyCode.ESCAPE && (t(), r.cancel(), n(this).off("keyup", f))
            };
            n(document).on("keyup", f)
        };
        h = function(t) {
            if (t) {
                var f = n(i),
                    r, u;
                r = parseInt(t.width, 10);
                _.isNumber(r) && !isNaN(r) && f.width(r).find("iframe").width(r).prop("width", r);
                u = parseInt(t.height, 10);
                _.isNumber(u) && !isNaN(u) && f.height(u).find("iframe").height(u).prop("height", u)
            }
        };
        c = function(t) {
            t && n(i).css(t)
        };
        r = function() {
            return n(i).length !== 0
        };
        t = function() {
            n(u).remove();
            n(i).remove()
        };
        n.bwin.dialog = function(i) {
            r() && t();
            var c = {
                header: "",
                body: "",
                width: 475,
                top: Math.round(parseInt(n(window).height(), 10) / 6),
                left: Math.round((parseInt(n(window).width(), 10) - 475) / 2),
                confirm: n.noop,
                cancel: n.noop,
                showCloseIcon: !0,
                closableViaOverlay: !1,
                closableViaButtons: !0,
                cssClass: ""
            }, o = n.extend(c, i),
                h;
            n("<div>", {
                id: u.substr(1)
            }).addClass("ui-widget-overlay").appendTo("body");
            h = f(o);
            o.cssClass && h.addClass(o.cssClass);
            e(h, o);
            s(o)
        };
        n.bwin.dialog.close = t;
        n.bwin.dialog.isOpened = r;
        n.bwin.dialog.resize = h;
        n.bwin.dialog.position = c;
        n.bwin.dialog.iframeUrls = function() {
            var u = n(window).attr("src"),
                t = n.deparam.querystring(u)._layout,
                i, r;
            t && (i = (n("html").data("domain") || document.domain).replace(/\./, ".", "g"), r = new RegExp("^https?://[.a-z0-9-]+" + i + "/", "i"), n("a[href][target!=_top], form[action]").each(function() {
                var u, i, e, f;
                (u = this.tagName.toUpperCase() === "A" ? "href" : "action", i = this[u], r.test(i)) && (e = n.deparam.querystring(i)._layout, e || (this[u] = n.param.querystring(i, {
                    _layout: t
                })), this.tagName.toUpperCase() === "FORM" && this.method.toUpperCase() === "GET" && (f = n(this), f.find('input[name="_layout"]').length === 0 && n("<input>", {
                    type: "hidden",
                    name: "_layout",
                    value: t
                }).appendTo(f)))
            }))
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.personalbutton.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var r = n("#flash"),
            t = r.find("ul.message-viewer").length !== 1 ? n("<ul>").addClass("message-viewer").appendTo(r) : r.find("ul.message-viewer"),
            i = n("#header").find("li.personal-button"),
            u = n("<div>").addClass("close").text(r.data("close-message"));
        n.bwin.personalbutton = function() {
            if (t.length === 1) {
                var f = t.find("li").length > 0;
                t.find("li").last().addClass("last").append(u);
                f && (i.addClass("active has-messages"), r.show(), n.bwin.personalbutton.adjust());
                i.on("click", function() {
                    return i.hasClass("has-messages") && (r.toggle(), r.is(":visible") ? n(this).hasClass("active") || n(this).addClass("active") : n(this).removeClass("active")), !1
                });
                r.on("click", ".message-viewer div.close", function() {
                    r.hide();
                    i.removeClass("active")
                })
            }
        };
        n.bwin.personalbutton.adjust = function() {
            i.length === 1 && t.position({
                my: "center top",
                at: "center bottom",
                of: i,
                offset: "0 -1"
            })
        };
        n.bwin.personalbutton.addMessage = function(f) {
            var e = n("<li>").addClass(f.type).data({
                rel: f.rel || ""
            }).html(f.text);
            t.prepend(e);
            t.find("li").last().hasClass("last") || t.find("li").last().addClass("last");
            t.find("li:last div.close").length === 0 && t.find("li").last().append(u);
            r.show();
            n.bwin.personalbutton.adjust();
            i.hasClass("active") || i.addClass("active");
            i.hasClass("has-messages") || i.addClass("has-messages")
        };
        n.bwin.personalbutton.replaceMessage = function(n) {
            var i = n.message,
                r = t.find('li[data-rel="' + i.rel + '"]').first();
            r.html(i.text);
            n.doAddCloseLink && r.append(u)
        };
        n.bwin.personalbutton.removeMessages = function(r) {
            var u = t.find("li");
            u.length > 0 && (r ? u.each(function() {
                var t = n(this).hasClass(r.type) && r.rel === n(this).data("rel");
                t || n(this).remove()
            }) : u.each(function() {
                n(this).remove()
            }), u = t.find("li"), u.length === 0 && i.hasClass("has-messages") && i.removeClass("has-messages"))
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.popup.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = null;
        n.bwin.popup = function() {
            n(document).on("click", "a[rel=popup]", function(i) {
                if ("open" in window) return i.preventDefault(), t = window.open(this.href, n(this).attr("target") || "popup", n(this).data("popupParams")), !1
            });
            n(document).on("click", "a[rel=popdown]", function(n) {
                return n.preventDefault(), opener.location = this.href, self.close(), opener.focus(), !1
            });
            n(document).on("click", "a[rel=popuplink]", function(n) {
                return n.preventDefault(), opener.location = this.href, opener.focus(), !1
            })
        };
        n.bwin.popup.getLastOpened = function() {
            return t
        }
    })
})(jQuery);

/*-=- Contents of scripts/plugins/jquery.bwin.editdot.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        var t = !1;
        n("<div>").attr("id", "edit-panel").appendTo(n("body"));
        n.bwin.editdot = function() {
            var i = n("#edit-panel");
            t || (t = !0, n("a.edit-dot").each(function(t, r) {
                var u = n(r),
                    f = u.next(),
                    e = f.find("a.close:first"),
                    o = f.find("a.edit:first");
                u.parent().show();
                u.on("click", function() {
                    var t = "#" + n(this).data("for-dialog"),
                        r = n(t).clone(!0).show();
                    i.hide().empty().append(r).slideDown("fast")
                });
                e.click(function(t) {
                    t.preventDefault();
                    n("#edit-panel").slideUp("fast")
                });
                o.click(function(n) {
                    n.preventDefault();
                    window.open(this.href, "content-editor")
                })
            }))
        }
    })
})(jQuery);

/*-=- Contents of account/scripts/plugins/jquery.bwin.registration.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        function t(t) {
            var i;
            window.event ? i = window.event.keyCode : t && (i = t.which);
            n.browser.mozilla ? (i == 116 || t.ctrlKey && i == 82) && t.preventDefault && (t.preventDefault(), t.stopPropagation(), window.location.href = window.location.href) : n.browser.msie && (i == 116 || window.event.ctrlKey && i == 82) && (window.event.returnValue = !1, window.event.keyCode = 0, window.status = "Refresh is disabled", window.location.href = window.location.href)
        }
        n.bwin === undefined && (n.bwin = {});
        n.bwin.registration = function() {
            function t(n) {
                n != null && (i(), window.location.href = n)
            }

            function i() {
                setTimeout(function() {
                    n("<div>", {
                        id: "ajax-overlay"
                    }).addClass("ui-widget-overlay").appendTo("body");
                    n("<div>", {
                        id: "ajax-spinner"
                    }).css({
                        top: parseInt(n(window).height(), 10) / 2 - 20,
                        left: parseInt(n(window).width(), 10) / 2 - 55
                    }).appendTo("body")
                }, 350)
            }

            function r(n, t) {
                var f = n.match(/be/i) || n.match(/es/i),
                    r, e, u;
                if (f != null) {
                    var i = [{
                        label: "be",
                        ignoredPageLang: "fr"
                    }, {
                        label: "be",
                        ignoredPageLang: "nl"
                    }, {
                        label: "es",
                        ignoredPageLang: "es"
                    }],
                        o = t.split("/")[1].toLowerCase();
                    for (r = 0; r < i.length; r++)
                        if (i[r].label == f) {
                            for (e = !0, u = r; u < i.length; u++)
                                if (i[u].label == f && i[u].ignoredPageLang == o) {
                                    e = !1;
                                    break
                                }
                            if (e) return t.replace(o, "en");
                            break
                        }
                }
                return null
            }
            n.bwin.registration.strings = [];
            n.bwin.registration.handleAjax = function(t, i, r, u) {
                return n.ajax({
                    cache: !1,
                    global: !0,
                    type: "POST",
                    url: i,
                    data: n.bwin.antiforgery.appendToken(r)
                }).done(u).done(function(i) {
                    n(document).trigger(t, i)
                })
            };
            n.bwin.tooltip.addTooltip({
                id: "PersonalDetails",
                find: 'input[title][title!=""], select[title][title!=""]',
                startpoint: "right center",
                direction: "left center",
                offset: 10
            });
            n.bwin.tooltip.addTooltip({
                id: "Account-Section-Wrapper",
                find: 'input[title][title!=""]:not([id*="FreeBetCode"]), select[title][title!=""]',
                startpoint: "right center",
                direction: "left center",
                offset: 10
            });
            n.bwin.tooltip.addTooltip({
                id: "Confirmation",
                find: 'input:text[title][title!=""], select[title][title!=""]',
                startpoint: "right center",
                direction: "left center",
                offset: 10
            });
            n.bwin.tooltip.addTooltip({
                id: "Confirmation",
                find: 'input:checkbox[title][title!=""]',
                startpoint: "top center",
                direction: "bottom center",
                offset: 0
            });
            n("#registration-fieldset").find("input, select").focus(function() {
                if (n(this).attr("id").match("^Input_") && n(this).attr("id").match("_Password$")) n.bwin.password.buildPasswordtooltip(n(this));
                else if (n(this).hasClass("input-validation-error")) {
                    var t;
                    t = n(this).attr("val-errormsg");
                    n(this).qtip("option", {
                        "content.text": t,
                        "style.classes": "qtip-rounded qtip-shadow qtip-red-borders",
                        "position.adjust.x": 30
                    })
                }
            });
            n.validator.onErrorCallback = function(t, i) {
                if (i.hasClass("field-validation-error")) {
                    var r = n('[name="' + i.attr("data-valmsg-for") + '"]');
                    r.attr("val-errormsg", t.html());
                    i.attr("data-valmsg-for") === "Input.AgeData.DateOfBirth" && n('#customdatetime [name$="Year"]').attr("class", n("#customdatetime > input[type=hidden]").attr("class"))
                }
                t.removeClass("input-validation-error");
                i.find("span").remove()
            };
            n.validator.onSuccessCallback = function(t, i) {
                if (i.hasClass("field-validation-valid")) {
                    var r = n('[name="' + i.attr("data-valmsg-for") + '"]'),
                        u;
                    r.removeAttr("val-errormsg");
                    u = r.attr("oldtitle");
                    r.qtip("option", {
                        "content.text": u,
                        "style.classes": "qtip-rounded qtip-shadow"
                    });
                    t.removeClass("input-validation-error");
                    i.find("span").remove()
                }
            };
            n.validator.onErrorsCallback = function(t, i) {
                var f = "",
                    o, u, s, e, h, r;
                for (n(".validation-summary-errors li").prepend('<span class="icon Error">&#160;<\/span>'), n("#summary-panel").addClass("summaries witherrors"), r = 0; r < i.errorList.length; r += 1) o = n("#" + i.errorList[r].element.id).attr("data-val-errorcode"), o !== undefined && o !== "" && (f += o + ",");
                if (f.length > 0) f = f.slice(0, -1);
                else return; if (u = n.parseJSON(n("script[data-rel=TrackingData]").html()), u[0] !== undefined) {
                    for (u[0].EventType = 1, s = ["prop11", f], u[0].Values.push(s), s = ["eVar11", f], u[0].Values.push(s), r = 0; r < u[0].Values.length; r += 1) e = u[0].Values[r], e[0] === "pageName" && (e[1] = "Registration Client Check"), e[0] === "events" && (e[1] = "");
                    h = n("#MultipleRequiredMessage").val();
                    n.validator.summarizeRequiredFieldErrors(i, h);
                    n.bwin.tracking({
                        trackingData: JSON.stringify(u)
                    });
                    n("#summary-panel").show()
                }
            };
            n.bwin.registration.verificationUserActivity = function() {
                function r(n) {
                    var t = [37, 38, 39, 40, 13, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 27, 8, 9, 20, 16, 17, 91, 18, 93, 44, 145, 19, 144, 45, 36, 33, 34, 46, 35, 12],
                        i;
                    for (i in t)
                        if (n == t[i]) return !1;
                    return !0
                }

                function t() {
                    var t, r, e;
                    i || (i = !0, t = u(), f(t, "event29"), r = n.toJSON(t), e = {
                        trackingData: r
                    }, n.bwin.tracking(e))
                }

                function u() {
                    var t = n("script[data-rel='TrackingData']");
                    return n.parseJSON(t.html())
                }

                function f(n, t) {
                    for (var r, i = 0; i < n[0].Values.length; i++)
                        if (r = n[0].Values[i], r[0] == "events") {
                            r[1] = t;
                            break
                        }
                }
                n(".ui-widget-content-body .fieldContainer").keyup(function(n) {
                    r(n.keyCode) && t()
                });
                n(".ui-widget-content-body input:radio, .ui-widget-content-body input:checkbox").click(function() {
                    t()
                });
                n(".ui-widget-content-body select").change(function() {
                    t()
                });
                var i = !1
            };
            n.bwin.registration.transferDataBetweenLabels = function(i, u, f, e) {
                function s(t) {
                    t.length > 0 && h() != t && (o = t, n.bwin.registration.handleAjax("encodeInputModel", u, n("#registration-form").serialize(), c))
                }

                function h() {
                    return window.location.protocol + "//" + window.location.host
                }

                function c(i) {
                    var h, u, s;
                    i.length > 0 && (h = "?input=" + encodeURIComponent(i), u = r(o, f), f = u != null ? u : f, s = o + f + h, e != null && e instanceof n.bwin.registration.redirectModalDialog ? e.show(s) : t(s))
                }
                var o;
                n("#Input_AddressData_AddressCountryCode, #Input_AddressData_AddressState").change(function() {
                    var t = n(this).val();
                    n.bwin.registration.handleAjax("getHostFromCountry", i, {
                        countryCode: t
                    }, s)
                })
            };
            n.bwin.registration.redirectModalDialog = function(i) {
                function u(t) {
                    return n.parseJSON(n("<div>").html(t).html())
                }
                var r = u(i);
                n("#Input_AddressData_AddressCountryCode, #Input_AddressData_AddressState").change(function() {
                    var t = n(this).val();
                    n.each(r, function(i, r) {
                        i == t && n(".dialog-message").html(r)
                    })
                });
                this.show = function(i) {
                    var r = n("#redirect-modal-dialog").html();
                    n.bwin.dialog({
                        body: r,
                        confirm: function() {
                            t(i)
                        }
                    })
                }
            }
        };
        document.onkeydown = t
    })
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/bundles/portaltoolbox.bundle.js -=-*/

/*-=- Contents of portaltoolbox/scripts/plugins/3rdparty/jquery.qtip.min.js -=-*/

/*!
 * qTip2 - Pretty powerful tooltips - v2.0.1-22-
 * http://qtip2.com
 *
 * Copyright (c) 2013 Craig Michael Thompson
 * Released under the MIT, GPL licenses
 * http://jquery.org/license
 *
 * Date: Wed Feb 13 2013 06:10 GMT+0000
 * Plugins: svg ajax tips modal viewport imagemap ie6
 * Styles: basic css3
 */
(function(n, t, i) {
    (function(n) {
        "use strict";
        typeof define == "function" && define.amd ? define(["jquery"], n) : jQuery && !jQuery.fn.qtip && n(jQuery)
    })(function(r) {
        function pt(i) {
            b = {
                pageX: i.pageX,
                pageY: i.pageY,
                type: "mousemove",
                scrollX: n.pageXOffset || t.body.scrollLeft || t.documentElement.scrollLeft,
                scrollY: n.pageYOffset || t.body.scrollTop || t.documentElement.scrollTop
            }
        }

        function st(n) {
            var t = function(n) {
                return n === o || "object" != typeof n
            }, i = function(n) {
                    return !r.isFunction(n) && (!n && !n.attr || n.length < 1 || "object" == typeof n && !n.jquery && !n.then)
                };
            return !n || "object" != typeof n ? u : (t(n.metadata) && (n.metadata = {
                type: n.metadata
            }), "content" in n && ((t(n.content) || n.content.jquery) && (n.content = {
                text: n.content
            }), i(n.content.text || u) && (n.content.text = u), "title" in n.content && (t(n.content.title) && (n.content.title = {
                text: n.content.title
            }), i(n.content.title.text || u) && (n.content.title.text = u))), "position" in n && t(n.position) && (n.position = {
                my: n.position,
                at: n.position
            }), "show" in n && t(n.show) && (n.show = n.show.jquery ? {
                target: n.show
            } : n.show === f ? {
                ready: f
            } : {
                event: n.show
            }), "hide" in n && t(n.hide) && (n.hide = n.hide.jquery ? {
                target: n.hide
            } : {
                event: n.hide
            }), "style" in n && t(n.style) && (n.style = {
                classes: n.style
            }), r.each(e, function() {
                this.sanitize && this.sanitize(n)
            }), n)
        }

        function ui(v, w, k, d) {
            function ti(n) {
                for (var r = 0, u, t = w, i = n.split("."); t = t[i[r++]];) r < i.length && (u = t);
                return [u || w, i.pop()]
            }

            function at(n) {
                return ii.concat("").join(n ? "-" + n + " " : " ")
            }

            function ui() {
                var n = w.style.widget,
                    t = it.hasClass(ht);
                it.removeClass(ht);
                ht = n ? "ui-state-disabled" : "qtip-disabled";
                it.toggleClass(ht, t);
                it.toggleClass("ui-helper-reset " + at(), n).toggleClass(dt, w.style.def && !n);
                ut.content && ut.content.toggleClass(at("content"), n);
                ut.titlebar && ut.titlebar.toggleClass(at("header"), n);
                ut.button && ut.button.toggleClass(a + "-icon", !n)
            }

            function bt(n) {
                ut.title && (ut.titlebar.remove(), ut.titlebar = ut.title = ut.button = o, n !== u && tt.reposition())
            }

            function kt() {
                var n = w.content.title.button,
                    i = typeof n == "string",
                    t = i ? n : "Close tooltip";
                ut.button && ut.button.remove();
                ut.button = n.jquery ? n : r("<a />", {
                    "class": "qtip-close " + (w.style.widget ? "" : a + "-icon"),
                    title: t,
                    "aria-label": t
                }).prepend(r("<span />", {
                    "class": "ui-icon ui-icon-close",
                    html: "&times;"
                }));
                ut.button.appendTo(ut.titlebar || it).attr("role", "button").click(function(n) {
                    return it.hasClass(ht) || tt.hide(n), u
                })
            }

            function fi() {
                var n = lt + "-title";
                ut.titlebar && bt();
                ut.titlebar = r("<div />", {
                    "class": a + "-titlebar " + (w.style.widget ? at("header") : "")
                }).append(ut.title = r("<div />", {
                    id: n,
                    "class": a + "-title",
                    "aria-atomic": f
                })).insertBefore(ut.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(n) {
                    r(this).toggleClass("ui-state-active ui-state-focus", n.type.substr(-4) === "down")
                }).delegate(".qtip-close", "mouseover mouseout", function(n) {
                    r(this).toggleClass("ui-state-hover", n.type === "mouseover")
                });
                w.content.title.button && kt()
            }

            function hi(n) {
                var t = ut.button;
                if (!tt.rendered) return u;
                n ? kt() : t.remove()
            }

            function gt(n, t) {
                var i = ut.title;
                if (!tt.rendered || !n) return u;
                if (r.isFunction(n) && (n = n.call(v, ft.event, tt)), n !== u && (n || n === "")) n.jquery && n.length > 0 ? i.empty().append(n.css({
                    display: "block"
                })) : i.html(n);
                else return bt(u);
                t !== u && tt.rendered && it[0].offsetWidth > 0 && tt.reposition(ft.event)
            }

            function ei(n) {
                n && r.isFunction(n.done) && n.done(function(n) {
                    wt(n, null, u)
                })
            }

            function wt(n, t, f) {
                function o(n) {
                    function o(i) {
                        i && (delete f[i.src], clearTimeout(tt.timers.img[i.src]), r(i).unbind(et));
                        r.isEmptyObject(f) && (t !== u && tt.reposition(ft.event), n())
                    }
                    var s, f = {};
                    if ((s = e.find("img[src]:not([height]):not([width])")).length === 0) return o();
                    s.each(function(n, t) {
                        if (f[t.src] === i) {
                            var u = 0,
                                e = 3;
                            (function s() {
                                if (t.height || t.width || u > e) return o(t);
                                u += 1;
                                tt.timers.img[t.src] = setTimeout(s, 700)
                            })();
                            r(t).bind("error" + et + " load" + et, function() {
                                o(this)
                            });
                            f[t.src] = t
                        }
                    })
                }
                var e = ut.content;
                return !tt.rendered || !n ? u : (r.isFunction(n) && (n = n.call(v, ft.event, tt) || ""), f !== u && ei(w.content.deferred), n.jquery && n.length > 0 ? e.empty().append(n.css({
                    display: "block"
                })) : e.html(n), tt.rendered < 0 ? it.queue("fx", o) : (ni = 0, o(r.noop)), tt)
            }

            function oi() {
                function h(n) {
                    if (it.hasClass(ht)) return u;
                    clearTimeout(tt.timers.show);
                    clearTimeout(tt.timers.hide);
                    var t = function() {
                        tt.toggle(f, n)
                    };
                    w.show.delay > 0 ? tt.timers.show = setTimeout(t, w.show.delay) : t()
                }

                function l(n) {
                    if (it.hasClass(ht) || ct || ni) return u;
                    var t = r(n.relatedTarget),
                        f = t.closest(g)[0] === it[0],
                        e = t[0] === i.show[0];
                    if (clearTimeout(tt.timers.show), clearTimeout(tt.timers.hide), this !== t[0] && o.target === "mouse" && f || w.hide.fixed && /mouse(out|leave|move)/.test(n.type) && (f || e)) {
                        try {
                            n.preventDefault();
                            n.stopImmediatePropagation()
                        } catch (s) {}
                        return
                    }
                    w.hide.delay > 0 ? tt.timers.hide = setTimeout(function() {
                        tt.hide(n)
                    }, w.hide.delay) : tt.hide(n)
                }

                function a(n) {
                    if (it.hasClass(ht)) return u;
                    clearTimeout(tt.timers.inactive);
                    tt.timers.inactive = setTimeout(function() {
                        tt.hide(n)
                    }, w.hide.inactive)
                }

                function y(n) {
                    tt.rendered && it[0].offsetWidth > 0 && tt.reposition(n)
                }
                var o = w.position,
                    i = {
                        show: w.show.target,
                        hide: w.hide.target,
                        viewport: r(o.viewport),
                        document: r(t),
                        body: r(t.body),
                        window: r(n)
                    }, s = {
                        show: r.trim("" + w.show.event).split(" "),
                        hide: r.trim("" + w.hide.event).split(" ")
                    }, p = e.ie === 6;
                it.bind("mouseenter" + et + " mouseleave" + et, function(n) {
                    var t = n.type === "mouseenter";
                    t && tt.focus(n);
                    it.toggleClass(ri, t)
                });
                /mouse(out|leave)/i.test(w.hide.event) && w.hide.leave === "window" && i.document.bind("mouseout" + et + " blur" + et, function(n) {
                    /select|option/.test(n.target.nodeName) || n.relatedTarget || tt.hide(n)
                });
                w.hide.fixed ? (i.hide = i.hide.add(it), it.bind("mouseover" + et, function() {
                    it.hasClass(ht) || clearTimeout(tt.timers.hide)
                })) : /mouse(over|enter)/i.test(w.show.event) && i.hide.bind("mouseleave" + et, function() {
                    clearTimeout(tt.timers.show)
                });
                ("" + w.hide.event).indexOf("unfocus") > -1 && o.container.closest("html").bind("mousedown" + et + " touchstart" + et, function(n) {
                    var t = r(n.target),
                        i = tt.rendered && !it.hasClass(ht) && it[0].offsetWidth > 0,
                        u = t.parents(g).filter(it[0]).length > 0;
                    t[0] === v[0] || t[0] === it[0] || u || v.has(t[0]).length || !i || tt.hide(n)
                });
                "number" == typeof w.hide.inactive && (i.show.bind("qtip-" + k + "-inactive", a), r.each(c.inactiveEvents, function(n, t) {
                    i.hide.add(ut.tooltip).bind(t + et + "-inactive", a)
                }));
                r.each(s.hide, function(n, t) {
                    var u = r.inArray(t, s.show),
                        f = r(i.hide);
                    u > -1 && f.add(i.show).length === f.length || t === "unfocus" ? (i.show.bind(t + et, function(n) {
                        it[0].offsetWidth > 0 ? l(n) : h(n)
                    }), delete s.show[u]) : i.hide.bind(t + et, l)
                });
                r.each(s.show, function(n, t) {
                    i.show.bind(t + et, h)
                });
                "number" == typeof w.hide.distance && i.show.add(it).bind("mousemove" + et, function(n) {
                    var t = ft.origin || {}, i = w.hide.distance,
                        r = Math.abs;
                    (r(n.pageX - t.pageX) >= i || r(n.pageY - t.pageY) >= i) && tt.hide(n)
                });
                o.target === "mouse" && (i.show.bind("mousemove" + et, pt), o.adjust.mouse && (w.hide.event && (it.bind("mouseleave" + et, function(n) {
                    (n.relatedTarget || n.target) !== i.show[0] && tt.hide(n)
                }), ut.target.bind("mouseenter" + et + " mouseleave" + et, function(n) {
                    ft.onTarget = n.type === "mouseenter"
                })), i.document.bind("mousemove" + et, function(n) {
                    tt.rendered && ft.onTarget && !it.hasClass(ht) && it[0].offsetWidth > 0 && tt.reposition(n || b)
                })));
                (o.adjust.resize || i.viewport.length) && (r.event.special.resize ? i.viewport : i.window).bind("resize" + et, y);
                o.adjust.scroll && i.window.add(o.container).bind("scroll" + et, y)
            }

            function si() {
                var i = [w.show.target[0], w.hide.target[0], tt.rendered && ut.tooltip[0], w.position.container[0], w.position.viewport[0], w.position.container.closest("html")[0], n, t];
                tt.rendered ? r([]).pushStack(r.grep(i, function(n) {
                    return typeof n == "object"
                })).unbind(et) : w.show.target.unbind(et + "-create")
            }
            var tt = this,
                ci = t.body,
                lt = a + "-" + k,
                ct = 0,
                ni = 0,
                it = r(),
                et = ".qtip-" + k,
                ht = "qtip-disabled",
                ut, ft;
            tt.id = k;
            tt.rendered = u;
            tt.destroyed = u;
            tt.elements = ut = {
                target: v
            };
            tt.timers = {
                img: {}
            };
            tt.options = w;
            tt.checks = {};
            tt.plugins = {};
            tt.cache = ft = {
                event: {},
                target: r(),
                disabled: u,
                attr: d,
                onTarget: u,
                lastClass: ""
            };
            tt.checks.builtin = {
                "^id$": function(n, t, i) {
                    var o = i === f ? c.nextid : i,
                        e = a + "-" + o;
                    o !== u && o.length > 0 && !r("#" + e).length && (it[0].id = e, ut.content[0].id = e + "-content", ut.title[0].id = e + "-title")
                },
                "^content.text$": function() {
                    wt(w.content.text)
                },
                "^content.deferred$": function() {
                    ei(w.content.deferred)
                },
                "^content.title.text$": function(n, t, i) {
                    if (!i) return bt();
                    !ut.title && i && fi();
                    gt(i)
                },
                "^content.title.button$": function(n, t, i) {
                    hi(i)
                },
                "^position.(my|at)$": function(n, t, i) {
                    "string" == typeof i && (n[t] = new e.Corner(i))
                },
                "^position.container$": function(n, t, i) {
                    tt.rendered && it.appendTo(i)
                },
                "^show.ready$": function() {
                    tt.rendered ? tt.toggle(f) : tt.render(1)
                },
                "^style.classes$": function(n, t, i) {
                    it.attr("class", a + " qtip " + i)
                },
                "^style.width|height": function(n, t, i) {
                    it.css(t, i)
                },
                "^style.widget|content.title": ui,
                "^events.(render|show|move|hide|focus|blur)$": function(n, t, i) {
                    it[(r.isFunction(i) ? "" : "un") + "bind"]("tooltip" + t, i)
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    var n = w.position;
                    it.attr("tracking", n.target === "mouse" && n.adjust.mouse);
                    si();
                    oi()
                }
            };
            r.extend(tt, {
                _triggerEvent: function(n, t, i) {
                    var u = r.Event("tooltip" + n);
                    return u.originalEvent = (i ? r.extend({}, i) : o) || ft.event || o, it.trigger(u, [tt].concat(t || [])), !u.isDefaultPrevented()
                },
                render: function(n) {
                    if (tt.rendered) return tt;
                    var i = w.content.text,
                        t = w.content.title,
                        o = w.position;
                    return r.attr(v[0], "aria-describedby", lt), it = ut.tooltip = r("<div/>", {
                        id: lt,
                        "class": [a, dt, w.style.classes, a + "-pos-" + w.position.my.abbrev()].join(" "),
                        width: w.style.width || "",
                        height: w.style.height || "",
                        tracking: o.target === "mouse" && o.adjust.mouse,
                        role: "alert",
                        "aria-live": "polite",
                        "aria-atomic": u,
                        "aria-describedby": lt + "-content",
                        "aria-hidden": f
                    }).toggleClass(ht, ft.disabled).data("qtip", tt).appendTo(w.position.container).append(ut.content = r("<div />", {
                        "class": a + "-content",
                        id: lt + "-content",
                        "aria-atomic": f
                    })), tt.rendered = -1, ct = 1, t.text ? (fi(), r.isFunction(t.text) || gt(t.text, u)) : t.button && kt(), (!r.isFunction(i) || i.then) && wt(i, u), tt.rendered = f, ui(), r.each(w.events, function(n, t) {
                        r.isFunction(t) && it.bind(n === "toggle" ? "tooltipshow tooltiphide" : "tooltip" + n, t)
                    }), r.each(e, function() {
                        this.initialize === "render" && this(tt)
                    }), oi(), it.queue("fx", function(t) {
                        tt._triggerEvent("render");
                        ct = 0;
                        (w.show.ready || n) && tt.toggle(f, ft.event, u);
                        t()
                    }), tt
                },
                get: function(n) {
                    var t, i;
                    switch (n.toLowerCase()) {
                        case "dimensions":
                            t = {
                                height: it.outerHeight(u),
                                width: it.outerWidth(u)
                            };
                            break;
                        case "offset":
                            t = e.offset(it, w.position.container);
                            break;
                        default:
                            i = ti(n.toLowerCase());
                            t = i[0][i[1]];
                            t = t.precedance ? t.string() : t
                    }
                    return t
                },
                set: function(n, t) {
                    function c(n, t) {
                        var i, r, u;
                        for (i in e)
                            for (r in e[i])(u = new RegExp(r, "i").exec(n)) && (t.push(u), e[i][r].apply(tt, t))
                    }
                    var h = /^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,
                        i = u,
                        e = tt.checks,
                        s;
                    return "string" == typeof n ? (s = n, n = {}, n[s] = t) : n = r.extend(f, {}, n), r.each(n, function(t, u) {
                        var f = ti(t.toLowerCase()),
                            e;
                        e = f[0][f[1]];
                        f[0][f[1]] = "object" == typeof u && u.nodeType ? r(u) : u;
                        n[t] = [f[0], f[1], u, e];
                        i = h.test(t) || i
                    }), st(w), ct = 1, r.each(n, c), ct = 0, tt.rendered && it[0].offsetWidth > 0 && i && tt.reposition(w.position.target === "mouse" ? o : ft.event), tt
                },
                toggle: function(n, i) {
                    function c() {
                        n ? (e.ie && it[0].style.removeAttribute("filter"), it.css("overflow", ""), "string" == typeof o.autofocus && r(o.autofocus, it).focus(), o.target.trigger("qtip-" + k + "-inactive")) : it.css({
                            display: "",
                            visibility: "",
                            opacity: "",
                            left: "",
                            top: ""
                        });
                        tt._triggerEvent(n ? "visible" : "hidden")
                    }
                    if (i) {
                        if (/over|enter/.test(i.type) && /out|leave/.test(ft.event.type) && w.show.target.add(i.target).length === w.show.target.length && it.has(i.relatedTarget).length) return tt;
                        ft.event = r.extend({}, i)
                    }
                    if (!tt.rendered) return n ? tt.render(1) : tt;
                    var h = n ? "show" : "hide",
                        o = w[h],
                        p = w[n ? "hide" : "show"],
                        l = w.position,
                        s = w.content,
                        a = it[0].offsetWidth > 0,
                        v = n || o.target.length === 1,
                        y = !i || o.target.length < 2 || ft.target[0] === i.target;
                    return ((typeof n).search("boolean|number") && (n = !a), !it.is(":animated") && a === n && y) ? tt : tt._triggerEvent(h, [90]) ? (r.attr(it[0], "aria-hidden", !! !n), n ? (ft.origin = r.extend({}, b), tt.focus(i), r.isFunction(s.text) && wt(s.text, u), r.isFunction(s.title.text) && gt(s.title.text, u), !ot && l.target === "mouse" && l.adjust.mouse && (r(t).bind("mousemove.qtip", pt), ot = f), tt.reposition(i, arguments[2]), !o.solo || (typeof o.solo == "string" ? r(o.solo) : r(g, o.solo)).not(it).not(o.target).qtip("hide", r.Event("tooltipsolo"))) : (clearTimeout(tt.timers.show), delete ft.origin, ot && !r(g + '[tracking="true"]:visible', o.solo).not(it).length && (r(t).unbind("mousemove.qtip"), ot = u), tt.blur(i)), o.effect === u || v === u ? (it[h](), c.call(it)) : r.isFunction(o.effect) ? (it.stop(1, 1), o.effect.call(it, tt), it.queue("fx", function(n) {
                        c();
                        n()
                    })) : it.fadeTo(90, n ? 1 : 0, c), n && o.target.trigger("qtip-" + k + "-inactive"), tt) : tt
                },
                show: function(n) {
                    return tt.toggle(f, n)
                },
                hide: function(n) {
                    return tt.toggle(u, n)
                },
                focus: function(n) {
                    if (!tt.rendered) return tt;
                    var t = r(g),
                        u = parseInt(it[0].style.zIndex, 10),
                        i = c.zindex + t.length,
                        f = r.extend({}, n);
                    return it.hasClass(rt) || tt._triggerEvent("focus", [i], f) && (u !== i && (t.each(function() {
                        this.style.zIndex > u && (this.style.zIndex = this.style.zIndex - 1)
                    }), t.filter("." + rt).qtip("blur", f)), it.addClass(rt)[0].style.zIndex = i), tt
                },
                blur: function(n) {
                    return it.removeClass(rt), tt._triggerEvent("blur", [it.css("zIndex")], n), tt
                },
                reposition: function(i, f) {
                    if (!tt.rendered || ct) return tt;
                    ct = 1;
                    var c = w.position.target,
                        a = w.position,
                        et = a.my,
                        v = a.at,
                        d = a.adjust,
                        at = d.method.split(" "),
                        ht = it.outerWidth(u),
                        lt = it.outerHeight(u),
                        g = 0,
                        nt = 0,
                        vt = it.css("position"),
                        ot = a.viewport,
                        o = {
                            left: 0,
                            top: 0
                        }, yt = a.container,
                        pt = it[0].offsetWidth > 0,
                        wt = i && i.type === "scroll",
                        st = r(n),
                        k, rt;
                    if (r.isArray(c) && c.length === 2) v = {
                        x: l,
                        y: h
                    }, o = {
                        left: c[0],
                        top: c[1]
                    };
                    else if (c === "mouse" && (i && i.pageX || ft.event.pageX)) v = {
                        x: l,
                        y: h
                    }, i = b && b.pageX && (d.mouse || !i || !i.pageX) ? {
                        pageX: b.pageX,
                        pageY: b.pageY
                    } : (i && (i.type === "resize" || i.type === "scroll") ? ft.event : i && i.pageX && i.type === "mousemove" ? i : (!d.mouse || w.show.distance) && ft.origin && ft.origin.pageX ? ft.origin : i) || i || ft.event || b || {}, vt !== "static" && (o = yt.offset()), o = {
                        left: i.pageX - o.left,
                        top: i.pageY - o.top
                    }, d.mouse && wt && (o.left -= b.scrollX - st.scrollLeft(), o.top -= b.scrollY - st.scrollTop());
                    else {
                        if (c === "event" && i && i.target && i.type !== "scroll" && i.type !== "resize" ? ft.target = r(i.target) : c !== "event" && (ft.target = r(c.jquery ? c : ut.target)), c = ft.target, c = r(c).eq(0), c.length === 0) return tt;
                        c[0] === t || c[0] === n ? (g = e.iOS ? n.innerWidth : c.width(), nt = e.iOS ? n.innerHeight : c.height(), c[0] === n && (o = {
                            top: (ot || c).scrollTop(),
                            left: (ot || c).scrollLeft()
                        })) : e.imagemap && c.is("area") ? k = e.imagemap(tt, c, v, e.viewport ? at : u) : e.svg && c[0].ownerSVGElement ? k = e.svg(tt, c, v, e.viewport ? at : u) : (g = c.outerWidth(u), nt = c.outerHeight(u), o = e.offset(c, yt));
                        k && (g = k.width, nt = k.height, rt = k.offset, o = k.position);
                        (e.iOS > 3.1 && e.iOS < 4.1 || e.iOS >= 4.3 && e.iOS < 4.33 || !e.iOS && vt === "fixed") && (o.left -= st.scrollLeft(), o.top -= st.scrollTop());
                        o.left += v.x === p ? g : v.x === s ? g / 2 : 0;
                        o.top += v.y === y ? nt : v.y === s ? nt / 2 : 0
                    }
                    return (o.left += d.x + (et.x === p ? -ht : et.x === s ? -ht / 2 : 0), o.top += d.y + (et.y === y ? -lt : et.y === s ? -lt / 2 : 0), e.viewport ? (o.adjusted = e.viewport(tt, o, a, g, nt, ht, lt), rt && o.adjusted.left && (o.left += rt.left), rt && o.adjusted.top && (o.top += rt.top)) : o.adjusted = {
                        left: 0,
                        top: 0
                    }, !tt._triggerEvent("move", [o, ot.elem || ot], i)) ? tt : (delete o.adjusted, f === u || !pt || isNaN(o.left) || isNaN(o.top) || c === "mouse" || !r.isFunction(a.effect) ? it.css(o) : r.isFunction(a.effect) && (a.effect.call(it, tt, r.extend({}, o)), it.queue(function(n) {
                        r(this).css({
                            opacity: "",
                            height: ""
                        });
                        e.ie && this.style.removeAttribute("filter");
                        n()
                    })), ct = 0, tt)
                },
                disable: function(n) {
                    return "boolean" != typeof n && (n = !(it.hasClass(ht) || ft.disabled)), tt.rendered ? (it.toggleClass(ht, n), r.attr(it[0], "aria-disabled", n)) : ft.disabled = !! n, tt
                },
                enable: function() {
                    return tt.disable(u)
                },
                destroy: function(n) {
                    function t() {
                        var i = v[0],
                            n = r.attr(i, nt),
                            t = v.data("qtip");
                        tt.rendered && (r.each(tt.plugins, function(n) {
                            this.destroy && this.destroy();
                            delete tt.plugins[n]
                        }), it.stop(1, 0).find("*").remove().end().remove());
                        clearTimeout(tt.timers.show);
                        clearTimeout(tt.timers.hide);
                        si();
                        t && tt !== t || (v.removeData("qtip").removeAttr(vt), w.suppress && n && (v.attr("title", n), v.removeAttr(nt)), v.removeAttr("aria-describedby"));
                        v.unbind(".qtip-" + k);
                        delete yt[tt.id];
                        delete tt.options;
                        delete tt.elements;
                        delete tt.cache;
                        delete tt.timers;
                        delete tt.checks
                    }
                    if (!tt.destroyed) return tt.destroyed = f, n === f ? t() : (it.bind("tooltiphidden", t), tt.hide()), v
                }
            })
        }

        function fi(n, i, s) {
            var y, l, v, h, b, k = r(t.body),
                p = n[0] === t ? k : n,
                w = n.metadata ? n.metadata(s.metadata) : o,
                d = s.metadata.type === "html5" && w ? w[s.metadata.name] : o,
                a = n.data(s.metadata.name || "qtipopts");
            try {
                a = typeof a == "string" ? r.parseJSON(a) : a
            } catch (g) {}
            if (h = r.extend(f, {}, c.defaults, s, typeof a == "object" ? st(a) : o, st(d || w)), l = h.position, h.id = i, "boolean" == typeof h.content.text)
                if (v = n.attr(h.content.attr), h.content.attr !== u && v) h.content.text = v;
                else return u;
            if (l.container.length || (l.container = k), l.target === u && (l.target = p), h.show.target === u && (h.show.target = p), h.show.solo === f && (h.show.solo = l.container.closest("body")), h.hide.target === u && (h.hide.target = p), h.position.viewport === f && (h.position.viewport = l.container), l.container = l.container.eq(0), l.at = new e.Corner(l.at), l.my = new e.Corner(l.my), n.data("qtip"))
                if (h.overwrite) n.qtip("destroy");
                else if (h.overwrite === u) return u;
            n.attr(vt, !0);
            h.suppress && (b = n.attr("title")) && n.removeAttr("title").attr(nt, b).attr("title", "");
            y = new ui(n, h, i, !! v);
            n.data("qtip", y);
            n.one("remove.qtip-" + i + " removeqtip.qtip-" + i, function() {
                var n;
                (n = r(this).data("qtip")) && n.destroy()
            });
            return y
        }

        function ei(n) {
            var i = this,
                h = n.elements.tooltip,
                t = n.options.content.ajax,
                o = c.defaults.content.ajax,
                l = f,
                s = u,
                e;
            n.checks.ajax = {
                "^content.ajax": function(n, r, u) {
                    r === "ajax" && (t = u);
                    r === "once" ? i.init() : t && t.url ? i.load() : h.unbind(ht)
                }
            };
            r.extend(i, {
                init: function() {
                    return t && t.url && h.unbind(ht)[t.once ? "one" : "bind"]("tooltipshow" + ht, i.load), i
                },
                load: function(h) {
                    function p() {
                        var i;
                        n.destroyed || (l = u, y && (s = f, n.show(h.originalEvent)), (i = o.complete || t.complete) && r.isFunction(i) && i.apply(t.context || n, arguments))
                    }

                    function w(i, u, f) {
                        var e;
                        n.destroyed || (v && "string" == typeof i && (i = r("<div/>").append(i.replace(gt, "")).find(v)), (e = o.success || t.success) && r.isFunction(e) ? e.call(t.context || n, i, u, f) : n.set("content.text", i))
                    }

                    function b(t, i, r) {
                        n.destroyed || t.status === 0 || n.set("content.text", i + ": " + r)
                    }
                    if (s) {
                        s = u;
                        return
                    }
                    var a = t.url.lastIndexOf(" "),
                        c = t.url,
                        v, y = !t.loading && l;
                    if (y) try {
                        h.preventDefault()
                    } catch (k) {} else if (h && h.isDefaultPrevented()) return i;
                    e && e.abort && e.abort();
                    a > -1 && (v = c.substr(a), c = c.substr(0, a));
                    e = r.ajax(r.extend({
                        error: o.error || b,
                        context: n
                    }, t, {
                        url: c,
                        success: w,
                        complete: p
                    }))
                },
                destroy: function() {
                    e && e.abort && e.abort();
                    n.destroyed = f
                }
            });
            i.init()
        }

        function oi(n, t, i) {
            var u = Math.ceil(t / 2),
                f = Math.ceil(i / 2),
                r = {
                    bottomright: [
                        [0, 0],
                        [t, i],
                        [t, 0]
                    ],
                    bottomleft: [
                        [0, 0],
                        [t, 0],
                        [0, i]
                    ],
                    topright: [
                        [0, i],
                        [t, 0],
                        [t, i]
                    ],
                    topleft: [
                        [0, 0],
                        [0, i],
                        [t, i]
                    ],
                    topcenter: [
                        [0, i],
                        [u, 0],
                        [t, i]
                    ],
                    bottomcenter: [
                        [0, 0],
                        [t, 0],
                        [u, i]
                    ],
                    rightcenter: [
                        [0, 0],
                        [t, f],
                        [0, i]
                    ],
                    leftcenter: [
                        [t, 0],
                        [t, i],
                        [0, f]
                    ]
                };
            return r.lefttop = r.bottomright, r.righttop = r.bottomleft, r.leftbottom = r.topright, r.rightbottom = r.topleft, r[n.string()]
        }

        function si(n) {
            function et(n) {
                var t = nt.is(":visible");
                nt.show();
                n();
                nt.toggle(t)
            }

            function ht() {
                g.width = b.height;
                g.height = b.width
            }

            function lt() {
                g.width = b.width;
                g.height = b.height
            }

            function at(r, e, o) {
                if (c.tip) {
                    var a = t.corner.clone(),
                        g = o.adjusted,
                        ot = n.options.position.adjust.method.split(" "),
                        ft = ot[0],
                        et = ot[1] || ot[0],
                        nt = {
                            left: u,
                            top: u,
                            x: 0,
                            y: 0
                        }, d, it = {}, tt;
                    t.corner.fixed !== f && (ft === k && a.precedance === w && g.left && a.y !== s ? a.precedance = a.precedance === w ? v : w : ft !== k && g.left && (a.x = a.x === s ? g.left > 0 ? l : p : a.x === l ? p : l), et === k && a.precedance === v && g.top && a.x !== s ? a.precedance = a.precedance === v ? w : v : et !== k && g.top && (a.y = a.y === s ? g.top > 0 ? h : y : a.y === h ? y : h), a.string() !== rt.corner.string() && (rt.top !== g.top || rt.left !== g.left) && t.update(a, u));
                    d = t.position(a, g);
                    d[a.x] += ut(a, a.x);
                    d[a.y] += ut(a, a.y);
                    d.right !== i && (d.left = -d.right);
                    d.bottom !== i && (d.top = -d.bottom);
                    d.user = Math.max(0, b.offset);
                    (nt.left = ft === k && !! g.left) && (a.x === s ? it["margin-left"] = nt.x = d["margin-left"] - g.left : (tt = d.right !== i ? [g.left, -d.left] : [-g.left, d.left], (nt.x = Math.max(tt[0], tt[1])) > tt[0] && (o.left -= g.left, nt.left = u), it[d.right !== i ? p : l] = nt.x));
                    (nt.top = et === k && !! g.top) && (a.y === s ? it["margin-top"] = nt.y = d["margin-top"] - g.top : (tt = d.bottom !== i ? [g.top, -d.top] : [-g.top, d.top], (nt.y = Math.max(tt[0], tt[1])) > tt[0] && (o.top -= g.top, nt.top = u), it[d.bottom !== i ? y : h] = nt.y));
                    c.tip.css(it).toggle(!(nt.x && nt.y || a.x === s && nt.y || a.y === s && nt.x));
                    o.left -= d.left.charAt ? d.user : ft !== k || nt.top || !nt.left && !nt.top ? d.left : 0;
                    o.top -= d.top.charAt ? d.user : et !== k || nt.left || !nt.left && !nt.top ? d.top : 0;
                    rt.left = g.left;
                    rt.top = g.top;
                    rt.corner = a.clone()
                }
            }

            function vt() {
                var i = b.corner,
                    r = n.options.position,
                    s = r.at,
                    o = r.my.string ? r.my.string() : r.my;
                return i === u || o === u && s === u ? u : (i === f ? t.corner = new e.Corner(o) : i.string || (t.corner = new e.Corner(i), t.corner.fixed = f), rt.corner = new e.Corner(t.corner.string()), t.corner.string() !== "centercenter")
            }

            function ut(n, t, i) {
                t = t ? t : n[n.precedance];
                var f = c.titlebar && n.y === h,
                    e = f ? c.titlebar : nt,
                    o = "border-" + t + "-width",
                    r = function(n) {
                        return parseInt(n.css(o), 10)
                    }, u;
                return et(function() {
                    u = (i ? r(i) : r(c.content) || r(e) || r(nt)) || 0
                }), u
            }

            function yt(n) {
                var o = c.titlebar && n.y === h,
                    s = o ? c.titlebar : c.content,
                    u = "-moz-",
                    f = "-webkit-",
                    i = "border-radius-" + n.y + n.x,
                    r = "border-" + n.y + "-" + n.x + "-radius",
                    t = function(n) {
                        return parseInt(s.css(n), 10) || parseInt(nt.css(n), 10)
                    }, e;
                return et(function() {
                    e = t(r) || t(i) || t(u + r) || t(u + i) || t(f + r) || t(f + i) || 0
                }), e
            }

            function pt(n) {
                function i(n, t, i) {
                    var r = n.css(t) || y;
                    return i && r === n.css(i) ? u : k.test(r) ? u : r
                }
                var e = c.tip.css("cssText", ""),
                    a = n || t.corner,
                    k = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
                    l = "border-" + a[a.precedance] + "-color",
                    o = "background-color",
                    y = "transparent",
                    p = " !important",
                    v = c.titlebar,
                    d = v && (a.y === h || a.y === s && e.position().top + g.height / 2 + b.offset < v.outerHeight(f)),
                    w = d ? v : c.content;
                et(function() {
                    tt.fill = i(e, o) || i(w, o) || i(c.content, o) || i(nt, o) || e.css(o);
                    tt.border = i(e, l, "color") || i(w, l, "color") || i(c.content, l, "color") || i(nt, l, "color") || nt.css(l);
                    r("*", e).add(e).css("cssText", o + ":" + y + p + ";border:0" + p + ";")
                })
            }

            function ot(n) {
                var r = n.precedance === v,
                    h = g[r ? d : it],
                    f = g[r ? it : d],
                    c = n.string().indexOf(s) > -1,
                    l = h * (c ? .5 : 1),
                    i = Math.pow,
                    y = Math.round,
                    p, e, o, u = Math.sqrt(i(l, 2) + i(f, 2)),
                    t = [a / l * u, a / f * u];
                return t[2] = Math.sqrt(i(t[0], 2) - i(a, 2)), t[3] = Math.sqrt(i(t[1], 2) - i(a, 2)), p = u + t[2] + t[3] + (c ? 0 : t[0]), e = p / u, o = [y(e * f), y(e * h)], {
                    height: o[r ? 0 : 1],
                    width: o[r ? 1 : 0]
                }
            }

            function st(n, t, i) {
                return "<qvml:" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (i || "") + '" />'
            }
            var t = this,
                b = n.options.style.tip,
                c = n.elements,
                nt = c.tooltip,
                rt = {
                    top: 0,
                    left: 0
                }, g = {
                    width: b.width,
                    height: b.height
                }, tt = {}, a = b.border || 0;
            t.corner = o;
            t.mimic = o;
            t.border = a;
            t.offset = b.offset;
            t.size = g;
            n.checks.tip = {
                "^position.my|style.tip.(corner|mimic|border)$": function() {
                    t.init() || t.destroy();
                    n.reposition()
                },
                "^style.tip.(height|width)$": function() {
                    g = {
                        width: b.width,
                        height: b.height
                    };
                    t.create();
                    t.update();
                    n.reposition()
                },
                "^content.title.text|style.(classes|widget)$": function() {
                    c.tip && c.tip.length && t.update()
                }
            };
            r.extend(t, {
                init: function() {
                    var n = vt() && (ct || e.ie);
                    return n && (t.create(), t.update(), nt.unbind(ft).bind("tooltipmove" + ft, at)), n
                },
                create: function() {
                    var t = g.width,
                        i = g.height,
                        n;
                    c.tip && c.tip.remove();
                    c.tip = r("<div />", {
                        "class": "qtip-tip"
                    }).css({
                        width: t,
                        height: i
                    }).prependTo(nt);
                    ct ? r("<canvas />").appendTo(c.tip)[0].getContext("2d").save() : (n = st("shape", 'coordorigin="0,0"', "position:absolute;"), c.tip.html(n + n), r("*", c.tip).bind("click" + ft + " mousedown" + ft, function(n) {
                        n.stopPropagation()
                    }))
                },
                update: function(n, i) {
                    var bt = c.tip,
                        wt = bt.children(),
                        et = g.width,
                        at = g.height,
                        k = b.mimic,
                        yt = Math.round,
                        kt, d, it, vt, ft;
                    n || (n = rt.corner || t.corner);
                    k === u ? k = n : (k = new e.Corner(k), k.precedance = n.precedance, k.x === "inherit" ? k.x = n.x : k.y === "inherit" ? k.y = n.y : k.x === k.y && (k[n.precedance] = n[n.precedance]));
                    kt = k.precedance;
                    n.precedance === w ? ht() : lt();
                    c.tip.css({
                        width: et = g.width,
                        height: at = g.height
                    });
                    pt(n);
                    tt.border !== "transparent" ? (a = ut(n, o), b.border === 0 && a > 0 && (tt.fill = tt.border), t.border = a = b.border !== f ? b.border : a) : t.border = a = 0;
                    it = oi(k, et, at);
                    t.size = ft = ot(n);
                    bt.css(ft).css("line-height", ft.height + "px");
                    vt = n.precedance === v ? [yt(k.x === l ? a : k.x === p ? ft.width - et - a : (ft.width - et) / 2), yt(k.y === h ? ft.height - at : 0)] : [yt(k.x === l ? ft.width - et : 0), yt(k.y === h ? a : k.y === y ? ft.height - at - a : (ft.height - at) / 2)];
                    ct ? (wt.attr(ft), d = wt[0].getContext("2d"), d.restore(), d.save(), d.clearRect(0, 0, 3e3, 3e3), d.fillStyle = tt.fill, d.strokeStyle = tt.border, d.lineWidth = a * 2, d.lineJoin = "miter", d.miterLimit = 100, d.translate(vt[0], vt[1]), d.beginPath(), d.moveTo(it[0][0], it[0][1]), d.lineTo(it[1][0], it[1][1]), d.lineTo(it[2][0], it[2][1]), d.closePath(), a && (nt.css("background-clip") === "border-box" && (d.strokeStyle = tt.fill, d.stroke()), d.strokeStyle = tt.border, d.stroke()), d.fill()) : (it = "m" + it[0][0] + "," + it[0][1] + " l" + it[1][0] + "," + it[1][1] + " " + it[2][0] + "," + it[2][1] + " xe", vt[2] = a && /^(r|b)/i.test(n.string()) ? e.ie === 8 ? 2 : 1 : 0, wt.css({
                        coordsize: et + a + " " + (at + a),
                        antialias: "" + (k.string().indexOf(s) > -1),
                        left: vt[0],
                        top: vt[1],
                        width: et + a,
                        height: at + a
                    }).each(function(n) {
                        var t = r(this);
                        t[t.prop ? "prop" : "attr"]({
                            coordsize: et + a + " " + (at + a),
                            path: it,
                            fillcolor: tt.fill,
                            filled: !! n,
                            stroked: !n
                        }).toggle( !! (a || n));
                        n || t.html() !== "" || t.html(st("stroke", 'weight="' + a * 2 + 'px" color="' + tt.border + '" miterlimit="1000" joinstyle="miter"'))
                    }));
                    setTimeout(function() {
                        c.tip.css({
                            display: "inline-block",
                            visibility: "visible"
                        })
                    }, 1);
                    i !== u && t.position(n)
                },
                position: function(n) {
                    var a = c.tip,
                        i = {}, y = Math.max(0, b.offset),
                        f, e, o;
                    return b.corner === u || !a ? u : (n = n || t.corner, f = n.precedance, e = ot(n), o = [n.x, n.y], f === w && o.reverse(), r.each(o, function(t, r) {
                        var u, a, o;
                        r === s ? (u = f === v ? l : h, i[u] = "50%", i["margin-" + u] = -Math.round(e[f === v ? d : it] / 2) + y) : (u = ut(n, r), a = ut(n, r, c.content), o = yt(n), i[r] = t ? a : y + (o > u ? o : -u))
                    }), i[n[f]] -= e[f === w ? d : it], a.css({
                        top: "",
                        bottom: "",
                        left: "",
                        right: "",
                        margin: ""
                    }).css(i), i)
                },
                destroy: function() {
                    nt.unbind(ft);
                    c.tip && c.tip.find("*").remove().end().remove();
                    delete t.corner;
                    delete t.mimic;
                    delete t.size
                }
            });
            t.init()
        }

        function hi(n) {
            var i = this,
                l = n.options.show.modal,
                c = n.elements,
                o = c.tooltip,
                s = et + n.id,
                h;
            n.checks.modal = {
                "^show.modal.(on|blur)$": function() {
                    i.destroy();
                    i.init();
                    h.toggle(o.is(":visible"))
                }
            };
            r.extend(i, {
                init: function() {
                    return l.on ? (h = c.overlay = tt.elem, o.attr(kt, f).css("z-index", e.modal.zindex + r(at).length).bind("tooltipshow" + s + " tooltiphide" + s, function(n, t, u) {
                        var f = n.originalEvent;
                        if (n.target === o[0])
                            if (f && n.type === "tooltiphide" && /mouse(leave|enter)/.test(f.type) && r(f.relatedTarget).closest(h[0]).length) try {
                                n.preventDefault()
                            } catch (e) {} else f && (!f || f.solo) || i.toggle(n, n.type === "tooltipshow", u)
                    }).bind("tooltipfocus" + s, function(n, t) {
                        if (!n.isDefaultPrevented() && n.target === o[0]) {
                            var i = r(at),
                                u = e.modal.zindex + i.length,
                                f = parseInt(o[0].style.zIndex, 10);
                            h[0].style.zIndex = u - 1;
                            i.each(function() {
                                this.style.zIndex > f && (this.style.zIndex -= 1)
                            });
                            i.filter("." + rt).qtip("blur", n.originalEvent);
                            o.addClass(rt)[0].style.zIndex = u;
                            tt.update(t);
                            try {
                                n.preventDefault()
                            } catch (s) {}
                        }
                    }).bind("tooltiphide" + s, function(n) {
                        n.target === o[0] && r(at).filter(":visible").not(o).last().qtip("focus", n)
                    }), i) : i
                },
                toggle: function(t, r, u) {
                    return t && t.isDefaultPrevented() ? i : (tt.toggle(n, !! r, u), i)
                },
                destroy: function() {
                    r([t, o]).removeAttr(kt).unbind(s);
                    tt.toggle(n, u);
                    delete c.overlay
                }
            });
            i.init()
        }

        function ci(i) {
            var s = this,
                o = i.elements,
                c = i.options,
                e = o.tooltip,
                l = ".ie6-" + i.id,
                a = r("select, object").length < 1,
                h = 0,
                v = u,
                y;
            i.checks.ie6 = {
                "^content|style$": function() {
                    redraw()
                }
            };
            r.extend(s, {
                init: function() {
                    var u = r(n),
                        i;
                    a && (o.bgiframe = r('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"><\/iframe>'), o.bgiframe.appendTo(e), e.bind("tooltipmove" + l, s.adjustBGIFrame));
                    y = r("<div/>", {
                        id: "qtip-rcontainer"
                    }).appendTo(t.body);
                    s.redraw();
                    o.overlay && !v && (i = function() {
                        o.overlay[0].style.top = u.scrollTop() + "px"
                    }, u.bind("scroll.qtip-ie6, resize.qtip-ie6", i), i(), o.overlay.addClass("qtipmodal-ie6fix"), v = f)
                },
                adjustBGIFrame: function() {
                    var f = i.get("dimensions"),
                        r = i.plugins.tip,
                        u = o.tip,
                        t, n;
                    n = parseInt(e.css("border-left-width"), 10) || 0;
                    n = {
                        left: -n,
                        top: -n
                    };
                    r && u && (t = r.corner.precedance === "x" ? ["width", "left"] : ["height", "top"], n[t[1]] -= u[t[0]]());
                    o.bgiframe.css(n).css(f)
                },
                redraw: function() {
                    if (i.rendered < 1 || h) return s;
                    var u = c.style,
                        o = c.position.container,
                        f, n, t, r;
                    return h = 1, u.height && e.css(it, u.height), u.width ? e.css(d, u.width) : (e.css(d, "").appendTo(y), n = e.width(), n % 2 < 1 && (n += 1), t = e.css("max-width") || "", r = e.css("min-width") || "", f = (t + r).indexOf("%") > -1 ? o.width() / 100 : 0, t = (t.indexOf("%") > -1 ? f : 1) * parseInt(t, 10) || n, r = (r.indexOf("%") > -1 ? f : 1) * parseInt(r, 10) || 0, n = t + r ? Math.min(Math.max(n, r), t) : n, e.css(d, Math.round(n)).appendTo(o)), h = 0, s
                },
                destroy: function() {
                    a && o.bgiframe.remove();
                    e.unbind(l)
                }
            });
            s.init()
        }
        var f = !0,
            u = !1,
            o = null,
            w = "x",
            v = "y",
            d = "width",
            it = "height",
            h = "top",
            l = "left",
            y = "bottom",
            p = "right",
            s = "center",
            ti = "flipinvert",
            k = "shift",
            c, e, b, a = "qtip",
            vt = "data-hasqtip",
            yt = {}, ii = ["ui-widget", "ui-tooltip"],
            g = "div.qtip." + a,
            dt = a + "-default",
            rt = a + "-focus",
            ri = a + "-hover",
            ut = "_replacedByqTip",
            nt = "oldtitle",
            ot, wt, ht, gt, bt, ft, ct, ni;
        c = r.fn.qtip = function(n, t, e) {
            var s = ("" + n).toLowerCase(),
                a = o,
                v = r.makeArray(arguments).slice(1),
                h = v[v.length - 1],
                l = this[0] ? r.data(this[0], "qtip") : o;
            return !arguments.length && l || s === "api" ? l : "string" == typeof n ? (this.each(function() {
                var n = r.data(this, "qtip");
                if (!n) return f;
                if (h && h.timeStamp && (n.cache.event = h), (s === "option" || s === "options") && t)
                    if (r.isPlainObject(t) || e !== i) n.set(t, e);
                    else return a = n.get(t), u;
                    else n[s] && n[s].apply(n[s], v)
            }), a !== o ? a : this) : "object" == typeof n || !arguments.length ? (l = st(r.extend(f, {}, n)), c.bind.call(this, l, h)) : void 0
        };
        c.bind = function(n, t) {
            return this.each(function(o) {
                function p(n) {
                    function t() {
                        s.render(typeof n == "object" || h.show.ready);
                        y.show.add(y.hide).unbind(v)
                    }
                    if (s.cache.disabled) return u;
                    s.cache.event = r.extend({}, n);
                    s.cache.target = n ? r(n.target) : [i];
                    h.show.delay > 0 ? (clearTimeout(s.timers.show), s.timers.show = setTimeout(t, h.show.delay), a.show !== a.hide && y.hide.bind(a.hide, function() {
                        clearTimeout(s.timers.show)
                    })) : t()
                }
                var h, y, a, v, s, l;
                if (l = r.isArray(n.id) ? n.id[o] : n.id, l = !l || l === u || l.length < 1 || yt[l] ? c.nextid++ : yt[l] = l, v = ".qtip-" + l + "-create", s = fi(r(this), l, n), s === u) return f;
                h = s.options;
                r.each(e, function() {
                    this.initialize === "initialize" && this(s)
                });
                y = {
                    show: h.show.target,
                    hide: h.hide.target
                };
                a = {
                    show: r.trim("" + h.show.event).replace(/ /g, v + " ") + v,
                    hide: r.trim("" + h.hide.event).replace(/ /g, v + " ") + v
                };
                /mouse(over|enter)/i.test(a.show) && !/mouse(out|leave)/i.test(a.hide) && (a.hide += " mouseleave" + v);
                y.show.bind("mousemove" + v, function(n) {
                    pt(n);
                    s.cache.onTarget = f
                });
                y.show.bind(a.show, p);
                (h.show.ready || h.prerender) && p(t)
            })
        };
        e = c.plugins = {
            Corner: function(n) {
                n = ("" + n).replace(/([A-Z])/, " $1").replace(/middle/gi, s).toLowerCase();
                this.x = (n.match(/left|right/i) || n.match(/center/) || ["inherit"])[0].toLowerCase();
                this.y = (n.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase();
                var t = n.charAt(0);
                this.precedance = t === "t" || t === "b" ? v : w;
                this.string = function() {
                    return this.precedance === v ? this.y + this.x : this.x + this.y
                };
                this.abbrev = function() {
                    var n = this.x.substr(0, 1),
                        t = this.y.substr(0, 1);
                    return n === t ? n : this.precedance === v ? t + n : n + t
                };
                this.invertx = function(n) {
                    this.x = this.x === l ? p : this.x === p ? l : n || this.x
                };
                this.inverty = function(n) {
                    this.y = this.y === h ? y : this.y === y ? h : n || this.y
                };
                this.clone = function() {
                    return {
                        x: this.x,
                        y: this.y,
                        precedance: this.precedance,
                        string: this.string,
                        abbrev: this.abbrev,
                        clone: this.clone,
                        invertx: this.invertx,
                        inverty: this.inverty
                    }
                }
            },
            offset: function(n, i) {
                function a(n, t) {
                    f.left += t * n.scrollLeft();
                    f.top += t * n.scrollTop()
                }
                var f = n.offset(),
                    h = n.closest("body"),
                    l = e.ie && t.compatMode !== "CSS1Compat",
                    u = i,
                    o, s, c;
                if (u) {
                    do u.css("position") !== "static" && (s = u.position(), f.left -= s.left + (parseInt(u.css("borderLeftWidth"), 10) || 0) + (parseInt(u.css("marginLeft"), 10) || 0), f.top -= s.top + (parseInt(u.css("borderTopWidth"), 10) || 0) + (parseInt(u.css("marginTop"), 10) || 0), o || (c = u.css("overflow")) === "hidden" || c === "visible" || (o = u)); while ((u = r(u[0].offsetParent)).length);
                    (o && o[0] !== h[0] || l) && a(o || h, 1)
                }
                return f
            },
            ie: function() {
                for (var n = 3, i = t.createElement("div"); i.innerHTML = "<!--[if gt IE " + ++n + "]><i><\/i><![endif]-->";)
                    if (!i.getElementsByTagName("i")[0]) break;
                return n > 4 ? n : u
            }(),
            iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || u,
            fn: {
                attr: function(n, t) {
                    if (this.length) {
                        var u = this[0],
                            f = "title",
                            i = r.data(u, "qtip");
                        if (n === f && i && "object" == typeof i && i.options.suppress) return arguments.length < 2 ? r.attr(u, nt) : (i && i.options.content.attr === f && i.cache.attr && i.set("content.text", t), this.attr(nt, t))
                    }
                    return r.fn["attr" + ut].apply(this, arguments)
                },
                clone: function(n) {
                    var i = r([]),
                        t = r.fn["clone" + ut].apply(this, arguments);
                    return n || t.filter("[" + nt + "]").attr("title", function() {
                        return r.attr(this, nt)
                    }).removeAttr(nt), t
                }
            }
        };
        r.each(e.fn, function(n, t) {
            if (!t || r.fn[n + ut]) return f;
            var i = r.fn[n + ut] = r.fn[n];
            r.fn[n] = function() {
                return t.apply(this, arguments) || i.apply(this, arguments)
            }
        });
        r.ui || (r["cleanData" + ut] = r.cleanData, r.cleanData = function(n) {
            for (var u = 0, t;
                (t = n[u]) !== i && t.getAttribute(vt); u++) try {
                r(t).triggerHandler("removeqtip")
            } catch (f) {}
            r["cleanData" + ut](n)
        });
        c.version = "2.0.1-22-";
        c.nextid = 0;
        c.inactiveEvents = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" ");
        c.zindex = 15e3;
        c.defaults = {
            prerender: u,
            id: u,
            overwrite: f,
            suppress: f,
            content: {
                text: f,
                attr: "title",
                deferred: u,
                title: {
                    text: u,
                    button: u
                }
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: u,
                container: u,
                viewport: u,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: f,
                    scroll: f,
                    resize: f,
                    method: "flipinvert flipinvert"
                },
                effect: function(n, t) {
                    r(this).animate(t, {
                        duration: 200,
                        queue: u
                    })
                }
            },
            show: {
                target: u,
                event: "mouseenter",
                effect: f,
                delay: 90,
                solo: u,
                ready: u,
                autofocus: u
            },
            hide: {
                target: u,
                event: "mouseleave",
                effect: f,
                delay: 0,
                fixed: u,
                inactive: u,
                leave: "window",
                distance: u
            },
            style: {
                classes: "",
                widget: u,
                width: u,
                height: u,
                def: f
            },
            events: {
                render: o,
                move: o,
                show: o,
                hide: o,
                toggle: o,
                visible: o,
                hidden: o,
                focus: o,
                blur: o
            }
        };
        e.svg = function(n, i) {
            for (var l = r(t), f = i[0], u = {
                    width: 0,
                    height: 0,
                    position: {
                        top: 1e10,
                        left: 1e10
                    }
                }, s, h, c, e, o; !f.getBBox;) f = f.parentNode;
            if (f.getBBox && f.parentNode) {
                if (s = f.getBBox(), h = f.getScreenCTM(), c = f.farthestViewportElement || f, !c.createSVGPoint) return u;
                e = c.createSVGPoint();
                e.x = s.x;
                e.y = s.y;
                o = e.matrixTransform(h);
                u.position.left = o.x;
                u.position.top = o.y;
                e.x += s.width;
                e.y += s.height;
                o = e.matrixTransform(h);
                u.width = o.x - u.position.left;
                u.height = o.y - u.position.top;
                u.position.left += l.scrollLeft();
                u.position.top += l.scrollTop()
            }
            return u
        };
        ht = ".qtip-ajax";
        gt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        wt = e.ajax = function(n) {
            var t = n.plugins.ajax;
            return "object" == typeof t ? t : n.plugins.ajax = new ei(n)
        };
        wt.initialize = "render";
        wt.sanitize = function(n) {
            var i = n.content,
                t;
            i && "ajax" in i && (t = i.ajax, typeof t != "object" && (t = n.content.ajax = {
                url: t
            }), "boolean" != typeof t.once && t.once && (t.once = !! t.once))
        };
        r.extend(f, c.defaults, {
            content: {
                ajax: {
                    loading: f,
                    once: f
                }
            }
        });
        ft = ".qtip-tip";
        ct = !! t.createElement("canvas").getContext;
        bt = e.tip = function(n) {
            var t = n.plugins.tip;
            return "object" == typeof t ? t : n.plugins.tip = new si(n)
        };
        bt.initialize = "render";
        bt.sanitize = function(n) {
            var i = n.style,
                t;
            i && "tip" in i && (t = n.style.tip, typeof t != "object" && (n.style.tip = {
                corner: t
            }), /string|boolean/i.test(typeof t.corner) || (t.corner = f), typeof t.width != "number" && delete t.width, typeof t.height != "number" && delete t.height, typeof t.border != "number" && t.border !== f && delete t.border, typeof t.offset != "number" && delete t.offset)
        };
        r.extend(f, c.defaults, {
            style: {
                tip: {
                    corner: f,
                    mimic: u,
                    width: 6,
                    height: 6,
                    border: f,
                    offset: 0
                }
            }
        });
        var lt, tt, kt = "is-modal-qtip",
            at = g + "[" + kt + "]",
            et = ".qtipmodal";
        tt = function() {
            function v(n) {
                if (r.expr[":"].focusable) return r.expr[":"].focusable;
                var e = !isNaN(r.attr(n, "tabindex")),
                    t = n.nodeName.toLowerCase(),
                    i, u, f;
                return "area" === t ? (i = n.parentNode, u = i.name, !n.href || !u || i.nodeName.toLowerCase() !== "map") ? !1 : (f = r("img[usemap=#" + u + "]")[0], !! f && f.is(":visible")) : /input|select|textarea|button|object/.test(t) ? !n.disabled : "a" === t ? n.href || e : e
            }

            function l(n) {
                h.length < 1 && n.length ? n.not("body").blur() : h.first().focus()
            }

            function y(n) {
                if (i.is(":visible")) {
                    var t = r(n.target),
                        f = e.elements.tooltip,
                        o = t.closest(g),
                        s;
                    s = o.length < 1 ? u : parseInt(o[0].style.zIndex, 10) > parseInt(f[0].style.zIndex, 10);
                    s || t.closest(g)[0] === f[0] || l(t);
                    a = n.target === h[h.length - 1]
                }
            }
            var s = this,
                h = {}, e, a, c, i;
            r.extend(s, {
                init: function() {
                    function f() {
                        var n = r(this);
                        i.css({
                            height: n.height(),
                            width: n.width()
                        })
                    }
                    return i = s.elem = r("<div />", {
                        id: "qtip-overlay",
                        html: "<div><\/div>",
                        mousedown: function() {
                            return u
                        }
                    }).hide(), r(n).bind("resize" + et, f), f(), r(t.body).bind("focusin" + et, y), r(t).bind("keydown" + et, function(n) {
                        e && e.options.show.modal.escape && n.keyCode === 27 && e.hide(n)
                    }), i.bind("click" + et, function(n) {
                        e && e.options.show.modal.blur && e.hide(n)
                    }), s
                },
                update: function(n) {
                    e = n;
                    h = n.options.show.modal.stealfocus !== u ? n.elements.tooltip.find("*").filter(function() {
                        return v(this)
                    }) : []
                },
                toggle: function(n, h, a) {
                    var d = r(t.body),
                        w = n.elements.tooltip,
                        v = n.options.show.modal,
                        y = v.effect,
                        b = h ? "show" : "hide",
                        k = i.is(":visible"),
                        p = r(at).filter(":visible:not(:animated)").not(w);
                    return (s.update(n), h && v.stealfocus !== u && l(r(":focus")), i.toggleClass("blurs", v.blur), h && i.css({
                        left: 0,
                        top: 0
                    }).appendTo(t.body), i.is(":animated") && k === h && c !== u || !h && p.length) ? s : (i.stop(f, u), r.isFunction(y) ? y.call(i, h) : y === u ? i[b]() : i.fadeTo(parseInt(a, 10) || 90, h ? 1 : 0, function() {
                        h || i.hide()
                    }), h || i.queue(function(n) {
                        i.css({
                            left: "",
                            top: ""
                        });
                        p.length || i.detach();
                        n()
                    }), c = h, e.destroyed && (e = o), s)
                }
            });
            s.init()
        };
        tt = new tt;
        lt = e.modal = function(n) {
            var t = n.plugins.modal;
            return "object" == typeof t ? t : n.plugins.modal = new hi(n)
        };
        lt.sanitize = function(n) {
            n.show && (typeof n.show.modal != "object" ? n.show.modal = {
                on: !! n.show.modal
            } : typeof n.show.modal.on == "undefined" && (n.show.modal.on = f))
        };
        lt.zindex = c.zindex - 200;
        lt.initialize = "render";
        r.extend(f, c.defaults, {
            show: {
                modal: {
                    on: u,
                    effect: f,
                    blur: f,
                    stealfocus: f,
                    escape: f
                }
            }
        });
        e.viewport = function(i, r, u, f, e, o, c) {
            function vt(n, t, i, u, f, e, o, h, c) {
                var a = r[f],
                    l = rt[n],
                    d = yt[n],
                    ut = i === k,
                    it = -nt.offset[f] + b.offset[f] + b["scroll" + f],
                    ft = l === f ? c : l === e ? -c : -c / 2,
                    ot = d === f ? h : d === e ? -h : -h / 2,
                    et = g && g.size ? g.size[o] || 0 : 0,
                    y = g && g.corner && g.corner.precedance === n && !ut ? et : 0,
                    w = it - a + y,
                    p = a + c - b[o] - it + y,
                    v = ft - (rt.precedance === n || l === rt[t] ? ot : 0) - (d === s ? h / 2 : 0);
                return ut ? (y = g && g.corner && g.corner.precedance === t ? et : 0, v = (l === f ? 1 : -1) * ft - y, r[f] += w > 0 ? w : p > 0 ? -p : 0, r[f] = Math.max(-nt.offset[f] + b.offset[f] + (y && g.corner[n] === s ? g.offset : 0), a - v, Math.min(Math.max(-nt.offset[f] + b.offset[f] + b[o], a + v), r[f]))) : (u *= i === ti ? 2 : 0, w > 0 && (l !== f || p > 0) ? (r[f] -= v + u, tt["invert" + n](f)) : p > 0 && (l !== e || w > 0) && (r[f] -= (l === s ? -v : v) + u, tt["invert" + n](e)), r[f] < it && -r[f] > p && (r[f] = a, tt = rt.clone())), r[f] - a
            }
            var ct = u.target,
                lt = i.elements.tooltip,
                rt = u.my,
                yt = u.at,
                ut = u.adjust,
                ft = ut.method.split(" "),
                et = ft[0],
                ot = ft[1] || ft[0],
                b = u.viewport,
                nt = u.container,
                pt = i.cache,
                g = i.plugins.tip,
                st = {
                    left: 0,
                    top: 0
                }, ht, tt, at;
            return !b.jquery || ct[0] === n || ct[0] === t.body || ut.method === "none" ? st : (ht = lt.css("position") === "fixed", b = {
                elem: b,
                height: b[(b[0] === n ? "h" : "outerH") + "eight"](),
                width: b[(b[0] === n ? "w" : "outerW") + "idth"](),
                scrollleft: ht ? 0 : b.scrollLeft(),
                scrolltop: ht ? 0 : b.scrollTop(),
                offset: b.offset() || {
                    left: 0,
                    top: 0
                }
            }, nt = {
                elem: nt,
                scrollLeft: nt.scrollLeft(),
                scrollTop: nt.scrollTop(),
                offset: nt.offset() || {
                    left: 0,
                    top: 0
                }
            }, (et !== "shift" || ot !== "shift") && (tt = rt.clone()), st = {
                left: et !== "none" ? vt(w, v, et, ut.x, l, p, d, f, o) : 0,
                top: ot !== "none" ? vt(v, w, ot, ut.y, h, y, it, e, c) : 0
            }, tt && pt.lastClass !== (at = a + "-pos-" + tt.abbrev()) && lt.removeClass(i.cache.lastClass).addClass(i.cache.lastClass = at), st)
        };
        e.imagemap = function(n, t, i, u) {
            function g(n, t, i) {
                for (var o = 0, r = 1, u = 1, c = 0, a = 0, f = n.width, e = n.height; f > 0 && e > 0 && r > 0 && u > 0;)
                    for (f = Math.floor(f / 2), e = Math.floor(e / 2), i.x === l ? r = f : i.x === p ? r = n.width - f : r += Math.floor(f / 2), i.y === h ? u = e : i.y === y ? u = n.height - e : u += Math.floor(e / 2), o = t.length; o--;) {
                        if (t.length < 2) break;
                        c = t[o][0] - n.position.left;
                        a = t[o][1] - n.position.top;
                        (i.x === l && c >= r || i.x === p && c <= r || i.x === s && (c < r || c > n.width - r) || i.y === h && a >= u || i.y === y && a <= u || i.y === s && (a < u || a > n.height - u)) && t.splice(o, 1)
                    }
                return {
                    left: t[0][0],
                    top: t[0][1]
                }
            }
            t.jquery || (t = r(t));
            var k = n.cache.areas = {}, d = (t[0].shape || t.attr("shape")).toLowerCase(),
                w = t[0].coords || t.attr("coords"),
                a = w.split(","),
                e = [],
                v = r('img[usemap="#' + t.parent("map").attr("name") + '"]'),
                b = v.offset(),
                f = {
                    width: 0,
                    height: 0,
                    position: {
                        top: 1e10,
                        right: 0,
                        bottom: 0,
                        left: 1e10
                    }
                }, c = 0,
                o = 0;
            if (b.left += Math.ceil((v.outerWidth() - v.width()) / 2), b.top += Math.ceil((v.outerHeight() - v.height()) / 2), d === "poly")
                for (c = a.length; c--;) o = [parseInt(a[--c], 10), parseInt(a[c + 1], 10)], o[0] > f.position.right && (f.position.right = o[0]), o[0] < f.position.left && (f.position.left = o[0]), o[1] > f.position.bottom && (f.position.bottom = o[1]), o[1] < f.position.top && (f.position.top = o[1]), e.push(o);
            else
                for (c = -1; c++ < a.length;) e.push(parseInt(a[c], 10));
            switch (d) {
                case "rect":
                    f = {
                        width: Math.abs(e[2] - e[0]),
                        height: Math.abs(e[3] - e[1]),
                        position: {
                            left: Math.min(e[0], e[2]),
                            top: Math.min(e[1], e[3])
                        }
                    };
                    break;
                case "circle":
                    f = {
                        width: e[2] + 2,
                        height: e[2] + 2,
                        position: {
                            left: e[0],
                            top: e[1]
                        }
                    };
                    break;
                case "poly":
                    f.width = Math.abs(f.position.right - f.position.left);
                    f.height = Math.abs(f.position.bottom - f.position.top);
                    i.abbrev() === "c" ? f.position = {
                        left: f.position.left + f.width / 2,
                        top: f.position.top + f.height / 2
                    } : (k[i + w] || (f.position = g(f, e.slice(), i), u && (u[0] === "flip" || u[1] === "flip") && (f.offset = g(f, e.slice(), {
                        x: i.x === l ? p : i.x === p ? l : s,
                        y: i.y === h ? y : i.y === y ? h : s
                    }), f.offset.left -= f.position.left, f.offset.top -= f.position.top), k[i + w] = f), f = k[i + w]);
                    f.width = f.height = 0
            }
            return f.position.left += b.left, f.position.top += b.top, f
        };
        ni = e.ie6 = function(n) {
            var t = n.plugins.ie6;
            return e.ie !== 6 ? u : "object" == typeof t ? t : n.plugins.ie6 = new ci(n)
        };
        ni.initialize = "render"
    })
})(window, document);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.captcha.min.js -=-*/

(function(n) {
    "use strict";
    n.bwin === undefined && (n.bwin = {});
    n.bwin.captcha === undefined && (n.bwin.captcha = {});
    var i, t, r = function(n, t) {
            var i = n.match(/^.*\//);
            return i.length < 1 ? n + "/" + t : i[0] + t
        };
    n.bwin.captcha.init = function() {
        var f = n("a.captcha-refresh-link"),
            e = n("#Captcha_Input_Answer"),
            r, u;
        f.length !== 0 && (r = f.attr("data-refresh-url"), r) && ((u = r.match(/(^.*)\//), u.length < 1) || (i = u[1], t = r.substring(u[0].length), f.click(function(t) {
            e.val("");
            e.focus();
            n.bwin.captcha.refresh(t)
        }).show()))
    };
    n.bwin.captcha.refresh = function(u) {
        u.preventDefault();
        u.stopPropagation();
        n.ajax({
            global: !1,
            type: "POST",
            url: i,
            data: n.bwin.antiforgery.appendToken({
                id: t
            }),
            success: function(i) {
                t = i;
                n(".captcha-model").each(function() {
                    n(this).find(".captcha-guid").val(t);
                    var i = n(this).find(".captcha-image"),
                        u = r(i.attr("src"), t);
                    i.attr("src", u)
                })
            }
        })
    }
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.clientvalidation.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        function t(t) {
            return n("<div/>").html(t).text()
        }
        n.bwin === undefined && (n.bwin = {});
        n.bwin.clientvalidation = function(t, i) {
            (typeof i == "undefined" || i === null) && (i = {
                find: 'input[title][title!=""], select[title][title!=""], textarea[title][title!=""]',
                startpoint: "right center",
                direction: "left center",
                offset: 10
            });
            n.bwin.tooltip.addTooltip({
                id: t,
                find: i.find,
                startpoint: i.startpoint,
                direction: i.direction,
                offset: i.offset,
                target: i.target
            });
            n("#" + t).find("input, select").focus(function() {
                var t, i;
                n(this).hasClass("input-validation-error") ? (t = n(this).attr("val-errormsg"), n(this).qtip("option", {
                    "content.text": t,
                    "style.classes": "qtip-rounded qtip-shadow qtip-red-borders",
                    "position.adjust.x": 35
                })) : (i = n(this).attr("oldtitle"), n(this).qtip("option", {
                    "content.text": i,
                    "style.classes": "qtip-rounded qtip-shadow"
                }))
            });
            n.validator.onErrorCallback = function(t, i) {
                if (i.hasClass("field-validation-error")) {
                    var r = n('[name="' + i.attr("data-valmsg-for") + '"]');
                    r.attr("val-errormsg", t.html())
                }
                t.removeClass("input-validation-error");
                i.find("span").remove()
            }
        };
        n.bwin.clientvalidation.checkRestrictedContent = function(n, t) {
            for (var r, i = 0; i < t.length; i += 1)
                if (r = new RegExp(t[i], "i"), n.search(r) > -1) return !1;
            return !0
        };
        n.validator.summarizeRequiredFieldErrors = function(i, r) {
            for (var e = [], f, u = 0; u < i.errorList.length; u += 1) i.errorList[u].message !== undefined && i.errorList[u].message !== "" && (f = n("#" + i.errorList[u].element.id).attr("data-val-required"), (f === undefined || f === "") && (f = n("#" + i.errorList[u].element.id).attr("data-val-requiredif")), f !== undefined && f !== "" && i.errorList[u].message === f && e.push(t(f)));
            e.length > n.validator.maximumRequiredMessages && (n.each(e, function(t, i) {
                n('.validation-summary-errors li:contains("' + i + '")').remove()
            }), n(".validation-summary-errors ul").append('<li><span class="icon Error">&#160;<\/span>' + r + "<\/li>"))
        };
        n.validator.maximumRequiredMessages = 4
    });
    n.validator.defaults.ignore = ":hidden:not([class*='.validate-hidden'])"
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.clientvalidators.min.js -=-*/

(function(n) {
    "use strict";
    n.bwin === undefined && (n.bwin = {});
    n.bwin.clientvalidators = function() {
        function t(n, t) {
            return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
        }

        function i(t) {
            var i = n(t).attr("id"),
                r = n(t).parent().find("#" + i + "_CountryCode").val(),
                u = n(t).parent().find("#" + i + "_Number").val();
            return r + u
        }

        function r() {
            this.patternToRegEx = function(n) {
                var t = "^" + n + "$";
                return t = t.replace(/n/g, "\\d"), t = t.replace(/a/g, "[A-Z]"), t = t.replace(/c/g, "[A-Z0-9]"), new RegExp(t)
            };
            this.ibanToBigNumber = function(n) {
                var t, i;
                for (n = n.substr(4) + n.substr(0, 4), t = 0; t < n.length; t++) i = n.charCodeAt(t), i > 57 && (n = n.replace(n.charAt(t), String(i - 55)));
                return n
            };
            this.bigNumberMod97 = function(n) {
                for (var i = "", t = 0; t < n.length; t += 7) i = String(parseFloat(i + n.substr(t, 7)) % 97);
                return i
            }
        }
        n.validator.addMethod("jqphoneregex", function(n, t, r) {
            var f = i(t),
                u = new RegExp(r).exec(f);
            return u && u.index === 0 && u[0].length === f.length
        }, "number didn't match regular expression");
        n.validator.unobtrusive.adapters.add("phoneregex", ["pattern"], function(n) {
            n.rules.jqphoneregex = n.params.pattern;
            n.message && (n.messages.jqphoneregex = n.message)
        });
        n.validator.unobtrusive.adapters.add("equaltoproperty", ["other"], function(i) {
            var r = i.element.name.substr(0, i.element.name.lastIndexOf(".") + 1),
                u = i.params.other,
                f = t(u, r),
                e = n(i.form).find(":input[name='" + f + "']")[0];
            i.rules.equalTo = e;
            i.message && (i.messages.equalTo = i.message)
        });
        n.validator.addMethod("requiredif", function(t, i, r) {
            if (t.length > 0) return !0;
            for (var c = i.name.substr(0, i.name.indexOf(".") + 1).replace(".", "_"), f = r[0].split("#"), e, o, s, h, u = 0; u < f.length; u++)
                if (e = f[u].split("=")[0], o = f[u].split("=")[1], h = "[id^=" + c + "][id$=_" + e + "]", s = n(n(h)[0]).val(), n.inArray(s, o.split(",")) < 0) return !0;
            return !1
        }, " value is required");
        n.validator.unobtrusive.adapters.add("requiredif", ["dependencymap"], function(n) {
            n.rules.requiredif = [n.params.dependencymap];
            n.message && (n.messages.requiredif = n.message)
        });
        n.validator.addMethod("maxage", function(n, t, i) {
            if (this.optional(t)) return !0;
            var f = t.value.split("/"),
                r = new Date(parseInt(f[2]), parseInt(f[1]) - 1, parseInt(f[0])),
                u = new Date,
                e = u.getFullYear() - r.getFullYear();
            return (u.getMonth() < r.getMonth() || u.getMonth() == r.getMonth() && u.getDate() < r.getDate()) && e--, e < parseInt(i[0])
        }, "date is too old.");
        n.validator.unobtrusive.adapters.add("maxage", ["data"], function(n) {
            n.rules.maxage = [n.params.data];
            n.message && (n.messages.maxage = n.message)
        });
        n.validator.addMethod("restrictedfieldvalues", function(t, i, r) {
            if (this.optional(i)) return !0;
            var o = [],
                s, f, h, e, c, l, u;
            if (r[0] != null)
                for (s = n.parseJSON(r[0]), f = 0; f < s.length; f++) o.push(s[f]);
            for (h = r[1].split("#"), e = 0; e < h.length; e++) c = h[e], l = "input[id$='_" + c + "']", u = n(l).val(), u !== "undefined" && (c == "EmailAddress" && (u = u.split("@")[0]), u !== undefined && u.length > 2 && o.push(u));
            return n.bwin.clientvalidation.checkRestrictedContent(t, o)
        }, "field cannot contain restricted values.");
        n.validator.unobtrusive.adapters.add("restrictedfieldvalues", ["restrictedwords", "restrictedfields"], function(n) {
            n.rules.restrictedfieldvalues = [n.params.restrictedwords, n.params.restrictedfields];
            n.message && (n.messages.restrictedfieldvalues = n.message)
        });
        n.validator.addMethod("requirecheckboxes", function(t, i, r) {
            for (var o = r[0] === undefined || r[0] === null ? 1 : parseInt(r[0]), f = n("input[name='" + i.name + "']"), e = 0, u = 0; u < f.length; u++) f[u].checked && e++;
            return e >= o
        }, " at least one checkbox is required");
        n.validator.unobtrusive.adapters.add("requirecheckboxes", ["mincount"], function(n) {
            n.rules.requirecheckboxes = [n.params.mincount];
            n.message && (n.messages.requirecheckboxes = n.message)
        });
        n.validator.addMethod("lessOrEqualTo", function(n, t, i) {
            if (!n || !i || !i.value) return !0;
            if (isNaN(n) || isNaN(i.value)) return !1;
            try {
                var r = parseFloat(n),
                    u = parseFloat(i.value)
            } catch (f) {
                return !1
            }
            return r <= u
        });
        n.validator.unobtrusive.adapters.add("lessorequalto", ["other"], function(t) {
            function i(n, t, i) {
                n.rules[t] = i;
                n.message && (n.messages[t] = n.message)
            }

            function r(n) {
                return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
            }

            function u(n) {
                return n.substr(0, n.lastIndexOf(".") + 1)
            }

            function f(n, t) {
                return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
            }
            var e = u(t.element.name),
                o = t.params.other,
                s = f(o, e),
                h = n(t.form).find(":input[name='" + r(s) + "']")[0];
            i(t, "lessOrEqualTo", h)
        });
        n.validator.addMethod("iban", function(t, i, u) {
            var h = n.parseJSON(u[0]),
                c = n.parseJSON(u[1]),
                f = t.toUpperCase().replace(/\s+/g, ""),
                s;
            if (!/^[A-Z][A-Z]\d\d[A-Z0-9]+$/.test(f) || (s = f.substr(2, 2), c.indexOf(s) == 0)) return !1;
            var l = f.substr(0, 2),
                e = h[l],
                o = new r;
            return e && (e.length != f.length || !o.patternToRegEx(e).test(f)) ? !1 : (f = o.ibanToBigNumber(f), o.bigNumberMod97(f) == 1)
        }, "IBAN is invalid");
        n.validator.unobtrusive.adapters.add("iban", ["countrypatterns", "unallowednumbers"], function(n) {
            n.rules.iban = [n.params.countrypatterns, n.params.unallowednumbers];
            n.message && (n.messages.iban = n.message)
        });
        n.validator.addMethod("minage", function(n, t) {
            var i, r, u;
            return this.optional(t) ? !0 : (i = n.split("/"), r = new Date(i[2], parseInt(i[1]) - 1, i[0]), r.setYear(r.getFullYear() + 18), u = new Date, r <= u)
        }, "date is too young.");
        n.validator.unobtrusive.adapters.add("minage", ["data"], function(n) {
            n.rules.minage = [n.params.data];
            n.message && (n.messages.minage = n.message)
        })
    }
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.tooltip.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin === undefined && (n.bwin = {});
        n.bwin.tooltip = function() {};
        n.bwin.tooltip.makeTooltip = function(t) {
            return {
                content: {
                    text: t.msg
                },
                position: {
                    my: t.direction,
                    at: t.startpoint,
                    adjust: {
                        x: t.offset
                    },
                    container: n("#tooltips"),
                    target: t.target !== undefined ? n(t.target) : undefined
                },
                show: {
                    event: t.showEvent,
                    solo: !0
                },
                hide: {
                    event: t.hideEvent
                },
                style: {
                    tip: {
                        width: 11,
                        height: 8
                    },
                    classes: "qtip-rounded " + t.css
                }
            }
        };
        n.bwin.tooltip.addTooltip = function(t) {
            var i = n.bwin.tooltip.makeTooltip({
                msg: !1,
                startpoint: t.startpoint,
                direction: t.direction,
                offset: t.offset,
                showEvent: t.showEvent !== undefined ? t.showEvent : "focus",
                hideEvent: t.hideEvent !== undefined ? t.hideEvent : "blur",
                target: t.target
            });
            n("#" + t.id).find(t.find).qtip(i)
        };
        n.bwin.tooltip.setSuccessTooltipCss = function(n, t) {
            t && t !== "dependency-mismatch" ? n.addClass("Success").removeClass("Error").removeClass("Information") : n.addClass("Error").removeClass("Success").removeClass("Information")
        }
    })
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.validationattributes.min.js -=-*/

(function(n) {
    "use strict";

    function t(n) {
        var u, t, i, r, f;
        return u = n, t = n.charAt(n.length - 1), t = t.toUpperCase(), i = u.substring(0, 8), i = parseInt(i, 10), r = i % 23, f = "TRWAGMYFPDXBNJZSQVHLCKE", t == f.substring(r, r + 1) ? !0 : !1
    }

    function i(n) {
        var i, r, u, f;
        if (i = n.charAt(0), i = i.toUpperCase(), !i.match("^[TXYZ]{1}")) return !1;
        if (i.match("^[XYZ]{1}")) {
            r = "";
            switch (i) {
                case "X":
                    r = "0";
                    break;
                case "Y":
                    r = "1";
                    break;
                case "Z":
                    r = "2"
            }
            return u = r + n.substring(1), t(u)
        }
        return i.match("^[T]{1}") && (f = n.charAt(n.length - 1), f.match("[a-zA-Z]")) ? !0 : !1
    }
    n.bwin === undefined && (n.bwin = {});
    n.bwin.validationattributes = function() {
        n.bwin.oneTimeCheck = [];
        n.validator.addMethod("jqisvaliddate", function(n, t, i) {
            if (t.value.length == 0) return i.toLowerCase() === "false";
            var r = t.value.split("/"),
                u = new Date(parseInt(r[2]), parseInt(r[1]) - 1, parseInt(r[0]));
            return parseInt(r[1]) - 1 == u.getMonth() && parseInt(r[0]) == u.getDate() && parseInt(r[2]) == u.getFullYear()
        }, "wrong date time");
        n.validator.unobtrusive.adapters.add("isvaliddate", ["required"], function(n) {
            n.rules.jqisvaliddate = n.params.required;
            n.message && (n.messages.jqisvaliddate = n.message)
        });
        n.validator.addMethod("jqvaluelist", function(t, i, r) {
            if (this.optional(i)) return !0;
            var u = r.split(",");
            return n.inArray(t, u) !== -1
        }, "value not found in list of valid values");
        n.validator.unobtrusive.adapters.add("valuelist", ["valid"], function(n) {
            n.rules.jqvaluelist = n.params.valid;
            n.message && (n.messages.jqvaluelist = n.message)
        });
        n.validator.addMethod("jqmustbe", function(t, i, r) {
            var u = "false";
            return n(i).is(":checked") && (u = "true"), u.toLowerCase() === r.toLowerCase()
        }, "boolean value was not valid");
        n.validator.unobtrusive.adapters.add("mustbe", ["valid"], function(n) {
            n.rules.jqmustbe = n.params.valid;
            n.message && (n.messages.jqmustbe = n.message)
        });
        n.validator.addMethod("jqonetimeclientcheck", function(t, i) {
            var r = n(i).data("val-onetimeclientcheck-skip");
            return r ? (i.checked === !0 && (i.checked = !1, n.uniform.update(i)), !0) : n(i).is(":checked") ? !0 : !1
        }, "boolean value was not valid");
        n.validator.unobtrusive.adapters.add("onetimeclientcheck", ["name"], function(t) {
            t.rules.jqonetimeclientcheck = t.params.name;
            t.message && (t.messages.jqonetimeclientcheck = t.message);
            n.bwin.oneTimeCheck[t.params.name] = 0
        });
        n.validator.addMethod("jqregexlist", function(t, i) {
            var f = this.optional(i),
                e, r, u;
            return f ? f : (e = n(i.attributes).filter(function() {
                if (this.name.indexOf("regexlist-pattern") != -1) return this
            }), r = !0, n.each(e, function() {
                r && (u = new RegExp(this.value).exec(t), r = u && u.index === 0 && u[0].length === t.length)
            }), r)
        }, "value does not match list of regular expressions.");
        n.validator.unobtrusive.adapters.add("regexlist", [], function(n) {
            n.rules.jqregexlist = [];
            n.message && (n.messages.jqregexlist = n.message)
        })
    };
    n.validator.addMethod("jqspanishdni", function(n, r) {
        var u = r.value.charAt(0);
        return u.match("[txyzTXYZ]") ? i(r.value) : t(r.value)
    }, "Nie/nif value was not valid");
    n.validator.unobtrusive.adapters.add("spanishdni", [], function(n) {
        n.rules.jqspanishdni = [];
        n.message && (n.messages.jqspanishdni = n.message)
    })
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.password.min.js -=-*/

(function(n) {
    "use strict";
    n.bwin === undefined && (n.bwin = {});
    n.bwin.password === undefined && (n.bwin.password = {});
    n.bwin.password.buildPasswordtooltip = function(t) {
        var i, r, u, f, e, o, s, h, c, l, a, v, y;
        i = n("<div />").append(t.attr("oldtitle"));
        r = r = t.val();
        r === undefined || r === "" ? (n("#requirement-StringLength", i).addClass("Information").removeClass("Error").removeClass("Success"), n("#requirement-RegularExpressionList", i).addClass("Information").removeClass("Error").removeClass("Success"), n("#requirement-RestrictedFieldValues", i).addClass("Information").removeClass("Error").removeClass("Success")) : (u = n.validator.prototype, f = t[0], e = t.attr("data-val-length-min"), h = n.validator.methods.minlength.call(u, r, f, e), h && (e = t.attr("data-val-length-max"), h = n.validator.methods.maxlength.call(u, r, f, e)), c = n.validator.methods.jqregexlist.call(u, r, f), l = n("#requirement-StringLength", i), n.bwin.tooltip.setSuccessTooltipCss(l, h), a = n("#requirement-RegularExpressionList", i), n.bwin.tooltip.setSuccessTooltipCss(a, c), o = t.attr("data-val-restrictedfieldvalues-restrictedwords"), s = t.attr("data-val-restrictedfieldvalues-restrictedfields"), (o !== null && n.parseJSON(o).length > 0 || s !== null && s.length > 0) && (v = n.validator.methods.restrictedfieldvalues.call(u, r, f, [o, s]), y = n("#requirement-RestrictedFieldValues", i), n.bwin.tooltip.setSuccessTooltipCss(y, v)));
        t.attr("oldtitle", n(i).html());
        t.qtip("option", {
            "content.text": n(i).html(),
            "style.classes": "qtip-rounded qtip-shadow",
            "position.adjust.x": t.hasClass("input-validation-error") ? 30 : 10
        })
    };
    n.bwin.password.change = function(t, i, r, u) {
        function h() {
            for (var n in u)
                if (u[n] != "" && r.val().indexOf(u[n]) > -1) return n;
            return "Some error occured"
        }

        function s(t, i) {
            for (var u, r = t.length - 1; r >= 0; r--) u = t[r], n(u).html().indexOf(i) > -1 && n(u).remove();
            l()
        }

        function c() {
            for (var n in u)
                if (n == e) return !0;
            return !1
        }

        function l() {
            var t = n(".validation-summary-errors ul li");
            t.length == 0 && n("#summary-panel").hide()
        }

        function a(t) {
            n("#summary-panel").show();
            n("#summary-panel ul").append("<li><span class='icon Error'>&#160;<\/span>" + t + "<\/li>")
        }
        var e, o, f;
        n(".validation-summary-errors ul li").length > 0 && n(".summary-panel-messages").length > 0 && n(".summary-panel-messages").remove();
        i.hasClass("field-validation-error") && (e = t.html(), o = c(), o ? (f = h(), t.text(f), r.attr("data-val-restrictedfieldvalues", f), r.attr("val-errormsg", f), s(n("#change-password-form div li"), e), s(n("#change-password-form div li"), f), a(f)) : r.attr("val-errormsg", t.html()));
        t.removeClass("input-validation-error");
        i.find("span").remove()
    }
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/plugins/jquery.bwin.bracketreplacer.min.js -=-*/

(function(n) {
    n.bwin.bracketreplacer = function() {
        function t() {
            (n("#ajax-spinner").length > 0 || n("#ajax-overlay").length > 0) && n.bwin.ajaxspinner.remove()
        }
        n.fn.hasBrackets = function() {
            return this.each(function() {
                return n(this).val() != null && n(this).val() != "" && n(this).val().match(/[\<\>]+/g)
            })
        };
        n.fn.removeBrackets = function() {
            return this.each(function() {
                n(this).val(n(this).val().replace(/[\<\>]+/g, ""))
            })
        };
        n("form").submit(function() {
            n("form input[type!=radio][type!=password], form textarea").each(function(i, r) {
                n(r).hasBrackets() && (t(), n(r).removeBrackets())
            })
        })
    }
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/app/portaltoolbox-main.min.js -=-*/

(function(n) {
    n.bwin.validationattributes();
    n.bwin.clientvalidators();
    n(function() {
        n.bwin.bracketreplacer()
    })
})(jQuery);

/*-=- Contents of account/scripts/app/registration-main.min.js -=-*/

(function(n) {
    n(function() {
        n.bwin.ajaxspinner();
        n.bwin.ajaxauth();
        n.bwin.popup();
        n.bwin.editdot()
    })
})(jQuery);

/*-=- Contents of portaltoolbox/scripts/app/singleclick.min.js -=-*/

$(document).ready(function() {
    "use strict";
    $("a.singleclickspinner").one("click", function() {
        $.bwin.blockingspinner()
    });
    $("form input[type=submit]").on("click", function(n) {
        n.target.disabled || $(this).closest("form").validate().checkForm() && $.bwin.blockingspinner()
    })
}),
function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.blockingspinner = function() {
            n("<div>", {
                id: "ajax-overlay"
            }).addClass("ui-widget-overlay").appendTo("body");
            n("<div>", {
                id: "ajax-spinner"
            }).css({
                top: parseInt(n(window).height(), 10) / 2 - 20,
                left: parseInt(n(window).width(), 10) / 2 - 55
            }).appendTo("body")
        }
    })
}(jQuery);

/*-=- Contents of portaltoolbox/scripts/app/maxlength.min.js -=-*/

$(document).ready(function() {
    "use strict";
    $("input[data-val-length-max]").each(function() {
        var n = $(this),
            t = n.data();
        n.attr("maxlength", t.valLengthMax)
    })
});

/*-=- Contents of portaltoolbox/scripts/app/submitdisabled.min.js -=-*/

(function(n) {
    "use strict";
    n(function() {
        n.bwin || (n.bwin = {});
        n.bwin.addHiddenInput = function(t, i) {
            var r = i.attr("name"),
                u = i.val();
            t.find('input[name="' + r + '"][type="hidden"]').length == 0 && n("<input>").attr({
                type: "hidden",
                name: r,
                value: u
            }).appendTo(t)
        }
    })
})(jQuery);
$(document).ready(function() {
    "use strict";
    $("form").on("submit", function() {
        var n = $(this),
            t = n.attr("data-submitdisabledvalue");
        typeof t != "undefined" && t !== !1 ? n.find(":input[disabled]").each(function() {
            $.bwin.addHiddenInput(n, $(this))
        }) : n.find("[data-submitdisabledvalue][disabled]").each(function() {
            $.bwin.addHiddenInput(n, $(this))
        })
    })
});
