 
'use strict';
window.FrontJS = function (window, doc, t) {
    /**
     * @param {!Object} a
     * @return {?}
     */
    function fn(a) {
        if (!a.message) {
            return true;
        }
        var facade = assert.composeScriptErrorData(e, a.message, a.filename, a.lineno, a.colno, a.error);
        if (assert.checkCrossOrigin(a.filename, options.exclude) && options.behaviour & HTML_SKIP_HTML) {
            callback(e, facade);
        }
    }
    /**
     * @param {!Object} message
     * @return {?}
     */
    function main(message) {
        var t = message.target.tagName;
        var key = message.target.src || message.target.href;
        if (!(assert.checkCrossOrigin(key, options.exclude) && options.behaviour & HTML_SAFELINK && key)) {
            return true;
        }
        if ("load" === message.type) {
            var metricStats = assert.getResourceTimingData(key);
            if (assert.checkCrossOrigin(key, options.origin)) {
                var r = assert.composeResourceErrorData(g, t, key);
                callback(View, r, metricStats);
            } else {
                if (metricStats) {
                    r = assert.composeResourceErrorData(r2, t, key);
                    callback(View, r, metricStats);
                }
            }
        } else {
            if ("error" === message.type) {
                r = assert.composeResourceErrorData(lang, t, key);
                callback(View, r);
            }
        }
    }
    /**
     * @param {!Object} message
     * @return {?}
     */
    function init(message) {
        var node = message.target;
        if (!(assert.checkCrossOrigin(node.tracker._request_url, options.exclude) && options.behaviour & HTML_ALLOW_ELEMENT_WHITELIST)) {
            return true;
        }
        if ("readystatechange" === message.type) {
            /** @type {!Array} */
            var readyStates = ["_time_init", "_time_open", "_time_send", "_time_load", "_time_done"];
            if (readyStates[node.readyState] && (node.tracker[readyStates[node.readyState]] = assert.getTime()), 4 === node.readyState) {
                node.tracker._status = node.status;
                var message = assert.calculateTrackerTiming(node.tracker);
                var previousBR = assert.getResourceTimingData(node.tracker._request_url);
                if (assert.checkCrossOrigin(node.tracker._request_url, options.origin)) {
                    var result = assert.composeXHRErrorData(bb, node.tracker._request_url, {
                        status: node.tracker._status
                    }, message);
                    callback(v, result, previousBR);
                }
                if (message.send || message.load || message.total || node.tracker._status) {
                    result = node.tracker._status >= 200 && node.tracker._status < 300 ? assert.composeXHRErrorData(unsigned, node.tracker._request_url, {
                        status: node.tracker._status
                    }, message) : assert.composeXHRErrorData(div, node.tracker._request_url, {
                        status: node.tracker._status
                    }, message);
                    callback(v, result, previousBR);
                }
            }
        } else {
            if ("error" === message.type) {
                node.tracker._status = node.status;
                result = assert.composeXHRErrorData(div, node.tracker._request_url, {
                    status: node.tracker._status
                }, message);
                callback(v, result);
            } else {
                if ("timeout" === message.type) {
                    node.tracker._status = node.status;
                    result = assert.composeXHRErrorData(excelFormat, node.tracker._request_url, {
                        status: node.tracker._status
                    }, message);
                    callback(v, result);
                }
            }
        }
    }
    /**
     * @param {number} val
     * @param {!Array} name
     * @param {!Object} obj
     * @return {undefined}
     */
    function callback(val, name, obj) {
        /** @type {boolean} */
        var result = false;
        var data = assert.composeTrackerData(val, name);
        if (data.currentURL = assert.getCurrentURL(), data.refererURL = assert.getRefererURL(), data.viewPort = assert.getViewPortSize(), data.userAgent = assert.getUserAgent(), data.clientID = assert.getClientID(), data.sessionID = assert.getSessionID(), val === str ? (data.messageID = key, result = true) : data.messageID = assert.getGUID(), data.token = options.token, data.version = value, data.userData = options.userData, obj) {
            var i;
            for (i in data.data.detail = data.data.detail || {}, obj) {
                data.data.detail[i] = obj[i];
            }
        }
        setTimeout(function () {
            complete(data, result);
        }, 0);
    }
    /**
     * @param {string} r
     * @param {number} n
     * @return {undefined}
     */
    function complete(r, n) {
        if (r && range.push(r), n && range.length) {
            var self = new window.XMLHttpRequest;
            self.open("POST", n, true);
            self.send(window.JSON.stringify(range));
            /** @type {!Array} */
            range = [];
            window.clearTimeout(showAboveTimeout);
        }
    }
    /** @type {string} */
    var n = "https://collecter.frontjs.com/";
    /** @type {string} */
    var o = "https://static.frontjs.com/dist/current/tracker.min.js";
    /** @type {string} */
    var value = "0.1.10";
    /** @type {number} */
    var timeout = 5e3;
    /** @type {number} */
    var HTML_SKIP_HTML = 1;
    /** @type {number} */
    var HTML_SAFELINK = 2;
    /** @type {number} */
    var HTML_ALLOW_ELEMENT_WHITELIST = 4;
    /** @type {number} */
    var HTML_ESCAPE = 8;
    /** @type {number} */
    var e = 256;
    /** @type {number} */
    var View = 512;
    /** @type {number} */
    var lang = 513;
    /** @type {number} */
    var g = 514;
    /** @type {number} */
    var r2 = 515;
    /** @type {number} */
    var v = 768;
    /** @type {number} */
    var div = 769;
    /** @type {number} */
    var excelFormat = 770;
    /** @type {number} */
    var unsigned = 771;
    /** @type {number} */
    var bb = 772;
    /** @type {number} */
    var str = 1024;
    /**
     * @param {number} e
     * @param {string} url
     * @return {undefined}
     */
    var fetch = function (e, url) {
        url = url || "";
        var progt = {
            1001: "Invalid token",
            1002: "Invalid behaviour settings",
            1003: "Invalid origin settings",
            1004: "Invalid exclude settings",
            1005: "Invalid user data",
            4E3: "Bad configuration! Fail to start!",
            4001: "FrontJS is already defined, Fail to start!"
        };
        if (progt[e]) {
            console.warn(["Error(frontjs):", progt[e], "(CODE" + e + ")", "See https://www.frontjs.com/doc/view/errcode/#" + encodeURIComponent(url)].join(" "));
        }
    };

    if (window.FrontJS) {
        return fetch(4001), window.FrontJS;
    }
    /**
     * @param {number} fromString
     * @return {?}
     */
    var getValue = function (fromString) {
        return fromString && fromString.match(/^\w{32}$/) ? 0 : 1;
    };
    /**
     * @param {number} statuses
     * @return {?}
     */
    var sortStatuses = function (statuses) {
        return statuses <= (HTML_SKIP_HTML | HTML_SAFELINK | HTML_ALLOW_ELEMENT_WHITELIST | HTML_ESCAPE) ? 0 : 1;
    };
    /**
     * @param {number} r
     * @return {?}
     */
    var f = function (r) {
        r = r || [];
        /** @type {number} */
        var i = 0;
        for (; i < r.length; i++) {
            if ("string" == typeof r[i]) {} else {
                if (!r[i].test) {
                    return r[i];
                }
            }
        }
        return 0;
    };
    /**
     * @param {!Object} prefix
     * @return {?}
     */
    var resolve = function (prefix) {
        var p;
        for (p in prefix = prefix || {}) {
            if ("object" == typeof prefix[p]) {
                return p;
            }
        }
        return 0;
    };

    var assert = {
        KVArrayCopy: function (options) {
            var processedOptions = {};
            var name;
            for (name in options) {
                processedOptions[name] = options[name];
            }
            return processedOptions;
        },
        uriArrayCopy: function (items) {
            items = items || [];
            /** @type {!Array} */
            var children = [];
            /** @type {number} */
            var i = 0;
            for (; i < items.length; i++) {
                if ("string" == typeof items[i]) {
                    children.push(items[i]);
                } else {
                    children.push(new RegExp(items[i].source, items[i].flag));
                }
            }
            return children;
        },
        getTime: function () {
            return (new Date).getTime();
        },
        getGUID: function () {
            /** @type {!Array} */
            var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            var id = assert.getTime().toString(16);
            /** @type {string} */
            id = "0" + id;
            for (; id.length < 16;) {
                /** @type {string} */
                id = "f" + id;
            }
            for (; id.length < 32;) {
                /** @type {string} */
                id = id + chars[Math.floor(16 * Math.random())];
            }
            return id;
        },
        stringifyParameter: function (args) {
            /** @type {!Array} */
            var rs = [];
            if (args && args.length) {
                /** @type {number} */
                var i = 0;
                for (; i < args.length; i++) {
                    if (null === args[i]) {
                        rs.push("null");
                    } else {
                        if (void 0 === args[i]) {
                            rs.push("undefined");
                        } else {
                            if (args[i] instanceof Array && "string" == typeof args[i].toString()) {
                                rs.push("[" + args[i].toString() + "]");
                            } else {
                                if ("object" == typeof args[i]) {
                                    /** @type {!Array} */
                                    var shadowStrings = [];
                                    var key;
                                    for (key in args[i]) {
                                        /** @type {string} */
                                        var str = "";
                                        if (str = str + (key + ": "), null === args[i][key]) {
                                            /** @type {string} */
                                            str = str + "null";
                                        } else {
                                            if (void 0 === args[i][key]) {
                                                /** @type {string} */
                                                str = str + "undefined";
                                            } else {
                                                switch (typeof args[i][key]) {
                                                    case "object":
                                                        if (args[i][key] instanceof Array && "string" == typeof args[i][key].toString()) {
                                                            /** @type {string} */
                                                            str = str + ("[" + args[i][key].toString() + "]");
                                                        } else {
                                                            if ("string" == typeof args[i][key].valueOf()) {
                                                                str = str + args[i][key].toString();
                                                            } else {
                                                                if ("string" == typeof args[i][key].toString()) {
                                                                    str = str + args[i][key].toString();
                                                                } else {
                                                                    /** @type {string} */
                                                                    str = str + "[object]";
                                                                }
                                                            }
                                                        }
                                                        break;
                                                    case "function":
                                                        /** @type {string} */
                                                        str = str + "[function]";
                                                        break;
                                                    default:
                                                        str = str + args[i][key].toString();
                                                }
                                            }
                                        }
                                        shadowStrings.push(str);
                                    }
                                    rs.push("{" + shadowStrings.join(", ") + "}");
                                } else {
                                    if ("string" == typeof args[i].valueOf()) {
                                        rs.push(args[i].valueOf());
                                    } else {
                                        if ("string" == typeof args[i].toString()) {
                                            rs.push(args[i].toString());
                                        } else {
                                            rs.push("[object]");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return rs.join(", ");
            }
            return "[object]";
        },
        addSlashes: function (string) {
            return string.replace(/(\.|\\|\/|\||\+|\$|\^)/g, "\\$1");
        },
        filterTrace: function (value) {
            /** @type {!RegExp} */
            var r = new RegExp("((?!\n).)*" + assert.addSlashes(o) + ".*\n", "g");
            return value.replace(r, "");
        },
        getUserAgent: function () {
            return window.navigator.userAgent;
        },
        getCurrentURL: function () {
            return window.location.href;
        },
        getRefererURL: function () {
            return doc.referrer;
        },
        getViewPortSize: function () {
            return {
                w: window.innerWidth,
                h: window.innerHeight,
                r: window.devicePixelRatio
            };
        },
        getClientID: function () {
            return window.localStorage ? (window.localStorage.getItem("frontjs:client:id") || window.localStorage.setItem("frontjs:client:id", assert.getGUID()), window.localStorage.getItem("frontjs:client:id")) : assert.getGUID();
        },
        getSessionID: function () {
            return window.sessionStorage ? (window.sessionStorage.getItem("frontjs:session:id") || window.sessionStorage.setItem("frontjs:session:id", assert.getGUID()), window.sessionStorage.getItem("frontjs:session:id")) : assert.getGUID();
        },
        checkCrossOrigin: function (target, path) {
            if (path) {
                target = target || "";
                /** @type {boolean} */
                var tp = false;
                /** @type {number} */
                var i = 0;
                for (; i < path.length; i++) {
                    if ("" !== path[i] && target.match(path[i])) {
                        /** @type {number} */
                        tp = tp | true;
                    }
                }
                return !tp;
            }
            return false;
        },
        checkTimingSlow: function (a, b) {
            return !!b && (a.send > b.sned && b.sned > 0 || a.load > b.load && b.load > 0 || a.total > b.total && b.total > 0);
        },
        calculateTrackerTiming: function (media) {
            if (media._time_done && media._time_load && media._time_send && media._time_done) {
                /** @type {number} */
                var upper = media._time_send - media._time_open;
                /** @type {number} */
                var nextIndex = media._time_load - media._time_send;
                /** @type {number} */
                var length = media._time_done - media._time_open;
                return {
                    send: upper = upper < 0 ? null : upper,
                    load: nextIndex = nextIndex < 0 ? null : nextIndex,
                    total: length = length < 0 ? null : length
                };
            }
            return {
                send: 0,
                load: 0,
                total: 0
            };
        },
        getResourceTimingData: function (r) {
            /** @type {(Array<PerformanceEntry>|null)} */
            var rl = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("resource");
            if (!rl) {
                return null;
            }
            /** @type {number} */
            var i = rl.length - 1;
            for (; i >= 0; i--) {
                if (r.length && rl[i].name.length && rl[i].name.substring(rl[i].name.length - r.length) === r) {
                    var self = {};
                    if (self.dns = rl[i].domainLookupEnd - rl[i].domainLookupStart, self.connect = rl[i].connectEnd - rl[i].connectStart, self.request = rl[i].responseStart - rl[i].requestStart, self.response = rl[i].responseEnd - rl[i].responseStart, self.dns >= 0 && self.connect >= 0 && self.request >= 0 && self.response >= 0) {
                        return self;
                    }
                }
                return null;
            }
        },
        composeTrackerData: function (v, _) {
            return {
                type: v,
                data: _
            };
        },
        composeScriptErrorData: function (images, error, url, data, index, value) {
            return value = value && value.stack ? value.stack.toString() : "", {
                message: images,
                detail: {
                    err: error,
                    file: url,
                    line: data,
                    column: index,
                    trace: value = assert.filterTrace(value)
                }
            };
        },
        composeXHRErrorData: function (name, path, result, value) {
            return {
                message: name,
                detail: {
                    requestURL: path,
                    responseData: result,
                    timing: value
                }
            };
        },
        composeResourceErrorData: function (name, tag, filePath) {
            return {
                message: name,
                detail: {
                    tagname: tag,
                    resourceURL: filePath
                }
            };
        },
        composePerformaceData: function (response, data) {
            return {
                message: response,
                detail: data
            };
        }
    };

    var options = function (item) {
        var node = {};
        /** @type {boolean} */
        var a = true;
        if (getValue(item.token) ? (fetch(1001), a = a & false) : node.token = item.token.toString(), sortStatuses(item.behaviour) ? (fetch(1002), a = a & false) : (node.behaviour = parseInt(item.behaviour), node.behaviour || (node.behaviour = HTML_SKIP_HTML | HTML_SAFELINK | HTML_ALLOW_ELEMENT_WHITELIST | HTML_ESCAPE)), f(item.origin)) {
            var url = f(item.behaviour);
            fetch(1003, url);
            /** @type {number} */
            a = a & false;
        } else {
            node.origin = assert.uriArrayCopy(item.origin);
            node.origin.push(window.location.origin);
            node.origin.push(/^((?!:\/\/).)*$/);
            node.origin.push(o);
            node.origin.push(n);
        }
        return f(item.exclude) ? (url = f(item.exclude), fetch(1004, url), a = a & false) : (node.exclude = assert.uriArrayCopy(item.exclude), node.exclude.push(o), node.exclude.push(n)), resolve(item.userData) ? (url = resolve(item.userData), fetch(1005, url), a = a & false) : node.userData = assert.KVArrayCopy(item.userData), !!a && node;
    }(t);


    if (!options) {
        return fetch(4E3), false;
    }
    var XMLHttpRequest = window.XMLHttpRequest;
    if (window.XMLHttpRequest = function () {
            var self = new XMLHttpRequest;
            return self._tracker_open = self.open, self.tracker = {
                _time_init: 0,
                _time_open: 0,
                _time_send: 0,
                _time_load: 0,
                _time_done: 0,
                _request_method: "",
                _request_url: "",
                _status: ""
            }, self.addEventListener("error", init), self.addEventListener("timeout", init), self.addEventListener("readystatechange", init), self.open = function (key, index, data, instance, query) {
                return self.tracker._request_method = key, self.tracker._request_url = index, self.tracker._time_open = assert.getTime(), self._tracker_open(key, index, false !== data, instance, query);
            }, self;
        }, window.console) {
        /** @type {function(this:Console, ...*): undefined} */
        var log = window.console.log;
        /** @type {function(this:Console, ...*): undefined} */
        var logger = window.console.warn;
        /** @type {function(this:Console, ...*): undefined} */
        var fn = window.console.error;
        /**
         * @return {?}
         */
        window.console.log = function () {
            /** @type {!Array<?>} */
            var row = [].slice.call(arguments);
            if (!row.length) {
                return true;
            }
            var container = assert.composeScriptErrorData(257, assert.stringifyParameter(row).substr(0, 1E3), "via console.log", 0, 0, new Error(assert.stringifyParameter(row).substr(0, 1E3)));
            if (options.behaviour & HTML_SKIP_HTML) {
                callback(e, container);
            }
            log.apply(window.console, row);
        };
        /**
         * @return {?}
         */
        window.console.warn = function () {
            /** @type {!Array<?>} */
            var arg = [].slice.call(arguments);
            if (!arg.length) {
                return true;
            }
            var container = assert.composeScriptErrorData(258, assert.stringifyParameter(arg).substr(0, 1E3), "via console.warn", 0, 0, new Error(assert.stringifyParameter(arg).substr(0, 1E3)));
            if (options.behaviour & HTML_SKIP_HTML) {
                callback(e, container);
            }
            logger.apply(window.console, arg);
        };
        /**
         * @return {?}
         */
        window.console.error = function () {
            /** @type {!Array<?>} */
            var arg = [].slice.call(arguments);
            if (!arg.length) {
                return true;
            }
            var container = assert.composeScriptErrorData(259, assert.stringifyParameter(arg).substr(0, 1E3), "via console.error", 0, 0, new Error(assert.stringifyParameter(arg).substr(0, 1E3)));
            if (options.behaviour & HTML_SKIP_HTML) {
                callback(e, container);
            }
            fn.apply(window.console, arg);
        };
    }
    if (window.fetch) {
        /** @type {function(this:Window, (Request|string), !RequestInit=): !Promise<Response>} */
        var fetch = window.fetch;
        /**
         * @param {(Request|string)=} p0
         * @param {!RequestInit=} p1
         * @return {!Promise<Response>}
         */
        window.fetch = function () {
            /** @type {!Array<?>} */
            var params = [].slice.call(arguments);
            var lastSum = assert.getTime();
            /** @type {!Promise<Response>} */
            var resultOrPromise = fetch.apply(window, params);
            return resultOrPromise.then(function (tres) {
                /** @type {number} */
                var num = assert.getTime() - lastSum;
                if (assert.checkCrossOrigin(params[0], options.origin)) {
                    var d = assert.composeXHRErrorData(bb, params[0], {
                        status: tres.status
                    }, {
                        send: num,
                        load: null,
                        total: num
                    });
                    callback(v, d);
                }
                if (tres.ok) {
                    d = assert.composeXHRErrorData(unsigned, params[0], {
                        status: tres.status
                    }, {
                        send: num,
                        load: null,
                        total: num
                    });
                    callback(v, d);
                } else {
                    d = assert.composeXHRErrorData(div, params[0], {
                        status: tres.status
                    }, {
                        send: num,
                        load: null,
                        total: num
                    });
                    callback(v, d);
                }
            }), resultOrPromise;
        };
    }
    var key = assert.getGUID();
    /** @type {!Array} */
    var range = [];
    /** @type {null} */
    var showAboveTimeout = null;
    showAboveTimeout = function add() {
        showAboveTimeout = window.setTimeout(function () {
            complete(null, true);
            add();
        }, timeout);
    }();

    window.addEventListener("beforeunload", function (canCreateDiscussions) {
        if (window.performance && window.performance.timing && options.behaviour & HTML_ESCAPE) {
            var options = {};
            /** @type {number} */
            options.dns = window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart;
            /** @type {number} */
            options.connect = window.performance.timing.connectEnd - window.performance.timing.connectStart;
            /** @type {number} */
            options.request = window.performance.timing.responseStart - window.performance.timing.requestStart;
            /** @type {number} */
            options.response = window.performance.timing.responseEnd - window.performance.timing.responseStart;
            /** @type {number} */
            options.dom = window.performance.timing.domInteractive - window.performance.timing.domLoading;
            /** @type {number} */
            options.domContent = window.performance.timing.domComplete - window.performance.timing.domInteractive;
            /** @type {number} */
            options.load = window.performance.timing.domComplete - window.performance.timing.domainLookupStart;
            /** @type {number} */
            options.view = (new Date).getTime() - window.performance.timing.domComplete;
            /** @type {(null|number)} */
            options.dns = options.dns < 0 ? null : options.dns;
            /** @type {(null|number)} */
            options.connect = options.connect < 0 ? null : options.connect;
            /** @type {(null|number)} */
            options.request = options.request < 0 ? null : options.request;
            /** @type {(null|number)} */
            options.response = options.response < 0 ? null : options.response;
            /** @type {(null|number)} */
            options.dom = options.dom < 0 ? null : options.dom;
            /** @type {(null|number)} */
            options.domContent = options.domContent < 0 ? null : options.domContent;
            /** @type {(null|number)} */
            options.load = options.load < 0 ? null : options.load;
            /** @type {(null|number)} */
            options.view = options.view < 0 ? null : options.view;
            var parser2 = assert.composePerformaceData(str, options);
            callback(str, parser2);
        }
    }, true);
    
    window.addEventListener("load", function (canCreateDiscussions) {
        if (window.performance && window.performance.timing && options.behaviour & HTML_ESCAPE) {
            var data = {};
            /** @type {number} */
            data.dns = window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart;
            /** @type {number} */
            data.connect = window.performance.timing.connectEnd - window.performance.timing.connectStart;
            /** @type {number} */
            data.request = window.performance.timing.responseStart - window.performance.timing.requestStart;
            /** @type {number} */
            data.response = window.performance.timing.responseEnd - window.performance.timing.responseStart;
            /** @type {number} */
            data.dom = window.performance.timing.domInteractive - window.performance.timing.domLoading;
            /** @type {number} */
            data.domContent = window.performance.timing.domComplete - window.performance.timing.domInteractive;
            /** @type {number} */
            data.load = window.performance.timing.domComplete - window.performance.timing.domainLookupStart;
            /** @type {(null|number)} */
            data.dns = data.dns < 0 ? null : data.dns;
            /** @type {(null|number)} */
            data.connect = data.connect < 0 ? null : data.connect;
            /** @type {(null|number)} */
            data.request = data.request < 0 ? null : data.request;
            /** @type {(null|number)} */
            data.response = data.response < 0 ? null : data.response;
            /** @type {(null|number)} */
            data.dom = data.dom < 0 ? null : data.dom;
            /** @type {(null|number)} */
            data.domContent = data.domContent < 0 ? null : data.domContent;
            /** @type {(null|number)} */
            data.load = data.load < 0 ? null : data.load;
            var res = assert.composePerformaceData(str, data);
            callback(str, res);
        }
    }, true);

    window.addEventListener("error", fn, true);
    doc.addEventListener("error", main, true);
    doc.addEventListener("load", main, true);
    
    var opts = function (data) {
        /**
         * @param {!Object} err
         * @return {?}
         */
        function handleError(err) {
            return err.message || (err = new Error(err)), err.error = err, err.filename = err.filename ? err.filename : "", err.filename += " via frontJS try - catch API", err.lineno = err.lineno ? err.lineno : 0, err.colno = err.colno ? err.colno : 0, fn(err), null;
        }
        return {
            try: function () {
                var origHandler = arguments[0];
                var _this = arguments[1];
                try {
                    return origHandler.apply(_this, [].slice.call(arguments, 2));
                } catch (err) {
                    return handleError(err);
                }
            },
            catch: handleError,
            composedTry: function (fn, applyTo) {
                return function () {
                    try {
                        return fn.apply(applyTo, [].slice.call(arguments));
                    } catch (err) {
                        return handleError(err);
                    }
                };
            },
            addUserData: function (name, block) {
                return data.userData[name] = block, true;
            },
            removeUserData: function (name) {
                return delete data.userData[name], true;
            }
        };
    }(options);


    return {
        C: {
            SCRIPT: HTML_SKIP_HTML,
            RESOURCE: HTML_SAFELINK,
            XHR: HTML_ALLOW_ELEMENT_WHITELIST,
            PERFOMACE: HTML_ESCAPE
        },
        V: value,
        try: opts.try,
        catch: opts.catch,
        composedTry: opts.composedTry,
        addUserData: opts.addUserData,
        removeUserData: opts.removeUserData
    };
}(window, document, window.frontjsConfig);
