// @ts-nocheck
var _0x1172 = ["target", "join", "exports", "ifReportHttpError", "sendHttpErrorToFundebug", "test", "fundebugHttpRecorded", "fundebugTemp", "indexOf", "onerror", "href", "getTime", "function", "silentConsole", "silent", "silentbehavior", "silentPerformance", "getAttribute", "defineProperty", "getConfig", "fetchSequence", "revideo", "name", "type", "userAgent", "push", "object", "location", "message"];
! function (t, e) {
    ! function (e) {
        for (; --e;) t.push(t.shift())
    }(++e)
}(_0x1172, 279);
var _0x3a2d = function (e, t) {
    return _0x1172[e -= 0]
};
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.fundebug = t() : e.fundebug = t()
}(window, function () {
    return function (n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }

        
        return o.m = n, o.c = r, o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function (t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object[_0x3a2d("0x0")](n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function (e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0)
    }([
        function (e, t, n) {
            var r = n(1),
                o = n(7),
                i = n(9),
                a = n(10),
                u = n(12),
                s = n(14),
                c = n(15),
                l = n(16),
                f = n(17),
                d = n(18),
                p = n(19),
                m = n(20),
                y = n(21),
                g = n(22),
                v = y[_0x3a2d("0x1")]();
            r(v, g), o(v, g), i(v, g), a(v, g), u(v, g), s(v, g), c(v, g), l(v, g), f(v, g), d(v, g), p(v, g), m(v, g), window.fundebug = v, e.exports = v
        },
        function (e, t, n) {
            var i = n(2);
            e.exports = function (r, o) {
                "addEventListener" in window && window.addEventListener("unhandledrejection", function (e) {
                    try {
                        var t = {
                            type: "unhandledrejection",
                            name: "unhandledrejection",
                            message: e.reason
                        };
                        i(t, r, o)
                    } catch (n) {}
                })
            }
        },
        function (e, t, n) {
            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var s = n(3),
                c = n(4),
                l = n(5),
                f = n(6),
                d = "https://web.fundebug.net/event/";

            function r(e, t, n) {
                var r = t.apikey;
                if (c.verifyApiKey(r) && t.maxEventNumber && !t.silent && !l(t.silentDev)) {
                    var o;
                    t.maxEventNumber -= 1, o = t.revideo && t.revideo[_0x3a2d("0x2")] && t[_0x3a2d("0x3")].fetchSequence();
                    var i, a = n.getBreadcrumbs();
                    t.silentPerformance || (i = f.getPerformance());
                    var u = {
                        notifierVersion: "1.9.0",
                        userAgent: window.navigator.userAgent,
                        locale: window.navigator.language || window.navigator.userLanguage,
                        url: window.location.href,
                        title: document.title,
                        appVersion: t.appversion,
                        apiKey: t.apikey,
                        releaseStage: t.releasestage,
                        metaData: e.metaData || t.metaData,
                        user: e.user || t.user,
                        name: e[_0x3a2d("0x4")],
                        time: (new Date).getTime(),
                        message: e.message,
                        fileName: e.fileName,
                        lineNumber: e.lineNumber,
                        columnNumber: e.columnNumber,
                        stacktrace: e.stacktrace,
                        type: e[_0x3a2d("0x5")],
                        severity: e.severity,
                        target: e.target,
                        req: e.req,
                        res: e.res,
                        httpTimeout: e.httpTimeout,
                        breadcrumbs: a,
                        redo: o,
                        performance: i
                    };
                    u.userAgent && u[_0x3a2d("0x6")].match(/Googlebot/) || (t.callback && t.callback(u), s.isFiltered(u, t.filters) || c.isSampled(t.sampleRate) && function (e) {
                        var t = function (e) {
                            var t;
                            try {
                                t = p(e)
                            } catch (n) {
                                delete e.metaData;
                                try {
                                    t = p(e)
                                } catch (r) {
                                    return
                                }
                            }
                            return t
                        }(u);
                        if (t)
                            if (window.XMLHttpRequest && window.atob) {
                                var n = new XMLHttpRequest;
                                n.sendByFundebug = !0, n.open("POST", d), n.setRequestHeader("Content-Type", "application/json"), n.send(t)
                            } else {
                                (new Image).src = d + "?event=" + encodeURIComponent(t)
                            }
                    }())
                }
            }

            function p(e) {
                if ("undefined" != typeof JSON) return JSON.stringify(e);
                if (e instanceof Array) {
                    for (var t = [], n = 0; n < e.length; n++) t[_0x3a2d("0x7")](p(e[n]));
                    return "[" + t.join(",") + "]"
                }
                var r = [];
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var i = '"' + o + '":',
                            a = e[o];
                        a && (_0x3a2d("0x8") === u(a) ? i += p(a) : "number" == typeof a ? i += a : i = i + '"' + a.replace(/\n/g, "\\n") + '"', r.push(i))
                    }
                return "{" + r.join(",") + "}"
            }
            e.exports = function (e, t, n) {
                t.revideo ? setTimeout(function () {
                    r(e, t, n)
                }, 1e3) : r(e, t, n)
            }
        },
        function (e, t) {
            function r(e, t) {
                if (!e) return !1;
                if (!t) return !1;
                if (Object.keys && !Object.keys(t).length) return !1;
                for (var n in t)
                    if (t.hasOwnProperty(n))
                        if (t[n].constructor === RegExp) {
                            if (!t[n].test(e[n])) return !1
                        } else if (t[n].constructor === Object) {
                    if (!r(e[n], t[n])) return !1
                } else {
                    if (t[n].constructor !== String || "inexistence" !== t[n]) return !1;
                    if (e.hasOwnProperty(n)) return !1
                }
                return !0
            }
            t.isFiltered = function (e, t) {
                if (!t || !t.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (r(e, t[n])) return !0;
                return !1
            }
        },
        function (e, t) {
            t.isSampled = function (e) {
                return !e && 0 !== e || (e = parseFloat(e), !!isNaN(e) || Math.random() <= e)
            }, t.verifyApiKey = function (e, t) {
                return e ? !!e.match(/^[0-9a-z]{64}$/i) || (t || console.error("Fundebug: apikey格式错误"), !1) : (t || console.error("Fundebug: 请配置apikey"), !1)
            }
        },
        function (e, t) {
            e.exports = function (e) {
                return !(!e || !(t = window[_0x3a2d("0x9")].href) || !/^http:\/\/localhost/.test(t) && !/^http:\/\/(\d{1,3}\.){3}\d{1,3}/.test(t));
                var t
            }
        },
        function (e, t) {
            t.getPerformance = function () {
                if ("performance" in window) {
                    if ("getEntriesByType" in performance) var e = {
                        navigation: performance.getEntriesByType("navigation")
                    };
                    return e
                }
            }
        },
        function (e, t, n) {
            var l = n(2),
                f = n(8);
            e.exports = function (s, c) {
                window.onerror = function (e, t, n, r, o) {
                    var i;
                    void 0 === r && window.event && (r = window.event.errorCharacter), i = t && t !== window.location.href ? t : null;
                    var a = f(o),
                        u = {
                            message: e,
                            lineNumber: n,
                            columnNumber: r,
                            fileName: i || a && a.fileName,
                            name: a && a.name || "uncaught error",
                            stacktrace: o && o.stack || function () {
                                var e, t, n = [];
                                try {
                                    t = arguments.callee.caller.caller
                                } catch (o) {
                                    t = ""
                                }
                                for (; t && n.length < 10;) {
                                    var r = t.toString().match(/function\s*([\w\_$]+)?\s*\(/i);
                                    e = r && r[1] || "[anonymous]", n.push(e), t = t.caller
                                }
                                return "generated-stack:\n" + n.join("\n")
                            }(),
                            severity: "error",
                            type: "uncaught"
                        };
                    return l(u, s, c), !1
                }
            }
        },
        function (e, t) {
            e.exports = function (e) {
                if (!e) return null;
                var t = {};
                return window.XMLHttpRequest ? t = {
                    name: e.name,
                    message: e.message,
                    fileName: e.fileName || e.sourceURL,
                    lineNumber: e.lineNumber || e.line,
                    columnNumber: e.columnNumber || e.column
                } : t.message = e[_0x3a2d("0xa")], t
            }
        },
        function (e, t, n) {
            var s = n(2);
            e.exports = function (a, u) {
                window.addEventListener && window.addEventListener("error", function (e) {
                    try {
                        if (a.silentResource || e.message) return;
                        var t, n = (t = e.target ? e[_0x3a2d("0xb")] : e.srcElement) && t.outerHTML;
                        n && 200 < n.length && (n = n.slice(0, 200));
                        var r = {
                            type: "resourceError",
                            target: {
                                outerHTML: n,
                                src: t && t.src,
                                tagName: t && t.tagName,
                                id: t && t.id,
                                className: t && t.className,
                                name: t && t.name,
                                type: t && t.type,
                                XPath: function (e) {
                                    for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
                                        var n, r = 0,
                                            o = !1;
                                        for (n = e.previousSibling; n; n = n.previousSibling) n.nodeType != Node.DOCUMENT_TYPE_NODE && n.nodeName == e.nodeName && ++r;
                                        for (n = e.nextSibling; n && !o; n = n.nextSibling) n.nodeName == e.nodeName && (o = !0);
                                        var i = (e.prefix ? e.prefix + ":" : "") + e.localName,
                                            a = r || o ? "[" + (r + 1) + "]" : "";
                                        t.splice(0, 0, i + a)
                                    }
                                    return t.length ? "/" + t.join("/") : null
                                }(t),
                                selector: function (e) {
                                    for (var t = []; e.parentNode;) {
                                        if (e.id) {
                                            t.unshift("#" + e.id);
                                            break
                                        }
                                        if (e == e.ownerDocument.documentElement) t.unshift(e.tagName);
                                        else {
                                            for (var n = 1, r = e; r.previousElementSibling; r = r.previousElementSibling, n++);
                                            t.unshift(e.tagName + ":nth-child(" + n + ")")
                                        }
                                        e = e.parentNode
                                    }
                                    return t[_0x3a2d("0xc")](" > ")
                                }(t),
                                timeStamp: e.timeStamp
                            }
                        };
                        if (t.src === window.location.href) return;
                        if (t.src && t.src.match(/.*\/(.*)$/) && !t.src.match(/.*\/(.*)$/)[1]) return;
                        if (r.target.src && window.XMLHttpRequest) {
                            var o = new XMLHttpRequest;
                            o.sendByFundebug = !0, o.open("HEAD", r.target.src), o.send(), o.onload = function (e) {
                                200 !== e.target.status && (r.target.status = e.target.status, r.target.statusText = e.target.statusText), s(r, a, u)
                            }
                        }
                    } catch (i) {}
                }, !0)
            }
        },
        function (e, t, n) {
            var f = n(11);
            e[_0x3a2d("0xd")] = function (c, l) {
                if (window.fetch) {
                    var t = window.fetch;
                    window.fetch = function (e, u) {
                        var s = (new Date).getTime();
                        return t.apply(this, arguments).then(function (e) {
                            return function (e) {
                                try {
                                    var t = (new Date).getTime() - s,
                                        n = u && u.method || "GET",
                                        r = e.url,
                                        o = e.status,
                                        i = e.statusText;
                                    ! function (e, t, n, r, o) {
                                        if (!c.silentHttp && (f.ifReportHttpError(n, t) || f.ifReportHttpTimout(o, c.httpTimeout))) {
                                            var i, a = {
                                                    method: e,
                                                    url: t
                                                },
                                                u = {
                                                    status: n,
                                                    statusText: r,
                                                    elapsedTime: o
                                                };
                                            i = f[_0x3a2d("0xe")](n, t) ? "httpError" : "httpTimeout", f[_0x3a2d("0xf")](i, a, u, c, l)
                                        }
                                    }(n, r, o, i, t),
                                    function (e, t, n, r, o, i) {
                                        if (!c.silentBehavior) {
                                            var a = {
                                                type: "fetch",
                                                page: {
                                                    url: window[_0x3a2d("0x9")].href,
                                                    title: document.title
                                                },
                                                detail: {
                                                    method: e,
                                                    url: t,
                                                    status: n,
                                                    statusText: r
                                                },
                                                elapsedTime: o,
                                                time: i
                                            };
                                            l.addBreadcrumb(a)
                                        }
                                    }(n, r, o, i, t, s)
                                } catch (a) {}
                            }(e), e
                        })
                    }
                }
            }
        },
        function (e, t, n) {
            var a = n(2);
            t.ifReportHttpTimout = function (e, t) {
                return "number" == typeof t && t < e
            }, t.ifReportHttpError = function (e, t) {
                return !(0 === e && /^file:\/\/\//.test(t) || /^2\d\d$/ [_0x3a2d("0x10")](e))
            }, t.sendHttpErrorToFundebug = function (e, t, n, r, o) {
                var i = {
                    type: e,
                    req: t,
                    res: n
                };
                "number" == typeof r.httpTimeout && (i.httpTimeout = r.httpTimeout), a(i, r, o)
            }
        },
        function (e, t, n) {
            var m = n(13),
                y = n(11);
            e.exports = function (d, p) {
                if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
                    var r = XMLHttpRequest.prototype.open;
                    XMLHttpRequest.prototype.open = function (e, t) {
                        try {
                            this.fundebugTemp = {
                                method: e,
                                url: t,
                                startTime: (new Date).getTime()
                            }
                        } catch (n) {}
                        r && r.apply(this, arguments)
                    };
                    var o = XMLHttpRequest.prototype.send;
                    XMLHttpRequest.prototype.send = function (e) {
                        try {
                            if (!this.sendByFundebug) {
                                var t = this;
                                t.fundebugTemp[_0x3a2d("0x11")] = !1;
                                var n = t.onloadend;
                                t.onloadend = function () {
                                    ! function (e, t) {
                                        try {
                                            var n, r = (new Date).getTime(),
                                                o = e.fundebugTemp.startTime,
                                                i = r - o,
                                                a = e.fundebugTemp.method,
                                                u = e.responseURL || e.fundebugTemp.url,
                                                s = e.status,
                                                c = e.statusText,
                                                l = e.response;
                                            d.setHttpBody && (n = m.copyWithoutPrivacy(t)), e[_0x3a2d("0x12")].fundebugHttpRecorded || (function (e, t, n, r, o, i, a) {
                                                if (!d.silentHttp && (y.ifReportHttpError(r, t) || y.ifReportHttpTimout(a, d.httpTimeout))) {
                                                    var u, s = {
                                                            method: e,
                                                            url: t,
                                                            body: n
                                                        },
                                                        c = {
                                                            status: r,
                                                            statusText: o,
                                                            response: i,
                                                            elapsedTime: a
                                                        };
                                                    u = y.ifReportHttpError(r, t) ? "httpError" : "httpTimeout", y.sendHttpErrorToFundebug(u, s, c, d, p)
                                                }
                                            }(a, u, n, s, c, l, i), function (e, t, n, r, o, i) {
                                                if (!d.silentBehavior) {
                                                    var a = {
                                                        type: "XMLHttpRequest",
                                                        page: {
                                                            url: window.location.href
                                                        },
                                                        detail: {
                                                            method: e,
                                                            url: t,
                                                            status: n,
                                                            statusText: r
                                                        },
                                                        elapsedTime: o,
                                                        time: i
                                                    };
                                                    p.addBreadcrumb(a)
                                                }
                                            }(a, u, s, c, i, o), e.fundebugTemp.fundebugHttpRecorded = !0)
                                        } catch (f) {}
                                    }(t, e), n && n.apply(this, arguments)
                                }
                            }
                        } catch (r) {}
                        o && o.apply(this, arguments)
                    }
                }
            }
        },
        function (e, t) {
            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            t.copyWithoutPrivacy = function (e) {
                try {
                    var t = e;
                    return "string" == typeof e && (t = JSON.parse(e)).password && (t.password = "Fundebug: deleted for protectiong privary"), t
                } catch (n) {
                    return e
                }
            }, t.copyWithoutCircle = function (e) {
                return e && "object" === s(e) && function (e) {
                    try {
                        JSON.stringify(e)
                    } catch (t) {
                        return -1 !== t.message.indexOf("Converting circular structure to JSON") || -1 !== t.message.indexOf("JSON.stringify cannot serialize cyclic structures") || -1 !== t.message.indexOf("cyclic object value") || -1 !== t.message[_0x3a2d("0x13")]("Circular reference in value argument not supported") || -1 !== t.message[_0x3a2d("0x13")]("循环引用")
                    }
                    return !1
                }(e) ? "entries" in Object ? function u(e, i) {
                    try {
                        var a = {};
                        return Object.entries(e).forEach(function (e) {
                            var t = function o(e, t) {
                                    return function (e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function (e, t) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n[_0x3a2d("0x7")](a.value), !t || n.length !== t); r = !0);
                                        } catch (s) {
                                            o = !0, i = s
                                        } finally {
                                            try {
                                                r || null == u["return"] || u["return"]()
                                            } finally {
                                                if (o) throw i
                                            }
                                        }
                                        return n
                                    }(e, t) || function () {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                    }()
                                }(e, 2),
                                n = t[0],
                                r = t[1];
                            _0x3a2d("0x8") === s(r) && null !== r ? i.has(r) ? a[n] = "property removed because of circular structure" : 10 < i.size ? a[n] = "property removed to avoid deep recursion" : (i.add(r), a[n] = u(r, i)) : a[n] = r
                        }), a
                    } catch (t) {
                        return e
                    }
                }(e, new Set([e])) : {} : e
            }
        },
        function (e, t, n) {
            var a = n(2);
            e.exports = function (o, i) {
                try {
                    if (o.silentWebsocket) return;
                    if (!("WebSocket" in window)) return;
                    var t = Object.getOwnPropertyDescriptor(WebSocket.prototype, "onerror");
                    if (!t) return;
                    if (!t.configurable) return;
                    Object.defineProperty(WebSocket.prototype, "onerror", {
                        set: function () {
                            if (o.silentWebsocket) return t.set.apply(this, arguments);
                            try {
                                var r = arguments[0];
                                return t.set.apply(this, [
                                    function (e) {
                                        try {
                                            var t = {
                                                type: "websocketError",
                                                target: {
                                                    type: _0x3a2d("0x14"),
                                                    url: e.target.url,
                                                    timeStamp: e.timeStamp
                                                }
                                            };
                                            a(t, o, i), "function" == typeof r && r.apply(this, arguments)
                                        } catch (n) {
                                            "function" == typeof r && r.apply(this, arguments)
                                        }
                                    }
                                ])
                            } catch (e) {
                                return t.set.apply(this, arguments)
                            }
                        }
                    })
                } catch (e) {}
            }
        },
        function (e, t, n) {
            var a = n(2),
                u = n(8);
            e.exports = function (o, i) {
                o.notifyError = function (e, t) {
                    if (e) {
                        window.console && console.error(e);
                        var n = u(e),
                            r = {
                                name: n.name || t && t.name || "caught error",
                                message: n.message || t && t.message,
                                stacktrace: e.stack,
                                fileName: n.fileName,
                                lineNumber: n.lineNumber,
                                columnNumber: n.columnNumber,
                                severity: t && t.severity || "error",
                                type: "caught",
                                user: t && t.user,
                                metaData: t && t.metaData
                            };
                        a(r, o, i)
                    }
                }
            }
        },
        function (e, t, n) {
            var u = n(2),
                s = n(4);
            e.exports = function (i, a) {
                i.notify = function (e, t, n) {
                    if (e) {
                        var r = {
                                name: e || n && n.name,
                                message: t || n && n.message,
                                severity: n && n.message || "warning",
                                stacktrace: function () {
                                    var e;
                                    try {
                                        throw new Error("")
                                    } catch (t) {
                                        e = t.stack
                                    }
                                    return e ? e = "generated-stack:\n" + (e = (e = e.replace(/(.*?)fundebug(.*?)\.js(.*)\n?/gm, "")).replace(/^Error\n/g, "")) : void 0
                                }(),
                                type: "notification",
                                user: n && n.user,
                                metaData: n && n.metaData
                            },
                            o = i.apikey;
                        return s.verifyApiKey(o, !0) ? (u(r, i, a), "fundebug.com" === location.host || "www.fundebug.com" === location.host ? "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!" : "请查看邮箱以及Fundebug控制台!") : o ? "apikey格式错误" : "请配置apikey"
                    }
                }
            }
        },
        function (e, t, n) {
            var a = n(2),
                u = n(4);
            e.exports = function (o, i) {
                o.test = function (e, t) {
                    var n = {
                            name: e || "Test",
                            message: t || "Hello, Fundebug!",
                            severity: "test",
                            type: "test"
                        },
                        r = o.apikey;
                    return u.verifyApiKey(r, !0) ? (a(n, o, i), "fundebug.com" === location.host || "www.fundebug.com" === location.host ? "亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!" : "请查看邮箱以及Fundebug控制台!") : r ? "apikey格式错误" : "请配置apikey"
                }
            }
        },
        function (e, t) {
            e.exports = function (o, i) {
                function e(e) {
                    var t, n = (t = e[_0x3a2d("0xb")] ? e.target : e.srcElement) && t.outerHTML;
                    n && 200 < n.length && (n = n.slice(0, 200));
                    var r = {
                        type: "click",
                        page: {
                            url: window[_0x3a2d("0x9")].href,
                            title: document.title
                        },
                        detail: {
                            outerHTML: n,
                            tagName: t && t.tagName,
                            id: t && t.id,
                            className: t && t.className,
                            name: t && t.name
                        },
                        time: (new Date).getTime()
                    };
                    i.addBreadcrumb(r, o.silentBehavior)
                }
                window.addEventListener ? window.addEventListener("click", e, !0) : document.attachEvent("onclick", e)
            }
        },
        function (e, t) {
            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            e[_0x3a2d("0xd")] = function (r, o) {
                var i = {
                    url: window.location.href
                };
                document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
                    i = {
                        url: window.location.href,
                        title: document.title
                    }
                }) : document.attachEvent("onreadystatechange", function () {
                    i = {
                        url: window.location.href,
                        title: document.title
                    }
                });
                var t = window.onpopstate;
                s(t) && (window.onpopstate = function () {
                    var e = {
                        url: window.location[_0x3a2d("0x15")]
                    };
                    if (i.title || (i.title = document.title), i.url !== e.url && u(i, e), t) return t.apply(this, arguments)
                });
                var n = window.history.pushState;
                n && (window.history.pushState = function () {
                    i = {
                        url: window.location.href,
                        title: document.title
                    };
                    var e = {};
                    if (3 === arguments.length && (e.url = arguments[2]), i.url !== e.url && u(i, e), n) return n.apply(this, arguments)
                });
                var a = window.onhashchange;

                function u(e, t) {
                    var n = {
                        type: "navigation",
                        detail: {
                            from: e,
                            to: i = t
                        },
                        time: (new Date)[_0x3a2d("0x16")]()
                    };
                    JSON.stringify(n, null, 4), o.addBreadcrumb(n, r.silentBehavior)
                }
                s(window.onhashchange) && (window.onhashchange = function () {
                    var e = {
                        url: window.location.href,
                        title: document.title
                    };
                    if (i.url !== e.url && u(i, e), a) return a.apply(this, arguments)
                })
            }
        },
        function (e, t, n) {
            var s = n(13);
            e.exports = function (a, u) {
                function e(o) {
                    var i = console[o];
                    console[o] = function () {
                        try {
                            var e = {
                                type: "console",
                                page: {
                                    url: window.location.href,
                                    title: document.title
                                },
                                detail: {
                                    level: o,
                                    arguments: (t = arguments, t[0] instanceof Error ? [].slice.apply(t).join(" ") : s.copyWithoutCircle(t))
                                },
                                time: (new Date).getTime()
                            };
                            a.silentConsole || u.addBreadcrumb(e, a.silentBehavior)
                        } catch (r) {}
                        var t;
                        if (_0x3a2d("0x17") == typeof i)
                            if (i.apply) i.apply(console, arguments);
                            else {
                                var n = Array.prototype.slice.apply(arguments).join(" ");
                                i(n)
                            }
                    }
                }
                for (var t = ["log", "warn", "debug", "info"], n = {}, r = 0; r < t.length; r++) window.console && (n[t[r]] = console[t[r]], a.silentConsole || e(t[r]));
                document.addEventListener && document.addEventListener("DOMContentLoaded", function () {
                    for (var e = 0; e < t.length; e++) window.console && a[_0x3a2d("0x18")] && n[t[e]] && (console[t[e]] = n[t[e]])
                })
            }
        },
        function (e, t) {
            var n = function () {
                var e = document.currentScript;
                if (!e) {
                    var t = document.scripts;
                    e = t[t.length - 1]
                }
                return e
            }();
            t.getConfig = function () {
                var e = {};
                return e[_0x3a2d("0x19")] = n.getAttribute("silent") || !1, "false" === e.silent && (e.silent = !1), e.maxEventNumber = n.getAttribute("maxEventNumber") || n.getAttribute("maxeventnumber") || 10, e.setHttpBody = n.getAttribute("setHttpBody") || n.getAttribute("sethttpbody") || !1, "false" === e.setHttpBody && (e.setHttpBody = !1), e.silentResource = n.getAttribute("silentResource") || n.getAttribute("silentresource") || !1, "false" === e.silentResource && (e.silentResource = !1), e.silentWebsocket = n.getAttribute("silentWebsocket") || n.getAttribute("silentWebsocket") || !1, "false" === e.silentWebsocket && (e.silentWebsocket = !1), e.silentHttp = n.getAttribute("silentHttp") || n.getAttribute("silenthttp") || !1, "false" === e.silentHttp && (e.silentHttp = !1), e.silentConsole = n.getAttribute("silentConsole") || n.getAttribute("silentconsole") || !1, "false" === e.silentConsole && (e.silentConsole = !1), e.sampleRate = n.getAttribute("sampleRate") || n.getAttribute("samplerate"), e.silentBehavior = n.getAttribute("silentBehavior") || n.getAttribute(_0x3a2d("0x1a")) || !1, "false" === e.silentBehavior && (e.silentBehavior = !1), e.silentPerformance = n.getAttribute(_0x3a2d("0x1b")) || n.getAttribute("silentperformance") || !1, "false" === e.silentPerformance && (e.silentPerformance = !1), e.silentDev = n.getAttribute("silentDev") || n.getAttribute("silentdev") || !1, "false" === e.silentDev && (e.silentDev = !1), e.apikey = n[_0x3a2d("0x1c")]("apikey"), e.appversion = n.getAttribute("appversion"), e.releasestage = n.getAttribute("releasestage"), e
            }
        },
        function (e, t) {
            var n = [],
                r = 0;
            t.addBreadcrumb = function (e, t) {
                t || (n[r] = e, 20 == ++r && (r = 0))
            }, t.getBreadcrumbs = function () {
                return n
            }
        }
    ])
});