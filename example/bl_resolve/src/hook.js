'use strict';

/**
 * id: 6
 * module name: hook
 */
// function (parse, mixin, n) {}



var hook = function (config, params) {
    var tree = require('./util')
    var parent = null;
    /**
     * ??
     * @param {*} self 
     * @param {*} e 
     * @param {*} data 
     * @param {*} a 
     * @param {*} n 
     * @param {*} s 
     * @param {*} callback 
     */
    var fn = function (self, e, data, a, n, s, callback) {
        var idNode = tree.J(n) || null;
        var options = tree.$a8(e, [idNode, a], null);
        if (!options) {
            return false;
        }
        var x = options.code || s;
        var b = !("success" in options) || options.success;
        self.api(data, b, callback, x, options.msg);
    };
    /** @type {string} */
    var k = "fetch";
    /** @type {string} */
    var key = "__oFetch_";
    /** @type {string} */
    var i = "__oXMLHttpRequest_";
    /** @type {string} */
    var name = "XMLHttpRequest";

    return tree.ext(config.prototype, {
        removeHook: function (name, guid) {
            return parent && (guid || this === parent) ? (params[key] && (params[k] = params[key], delete params[key]), params[i] && (params[name] = params[i], delete params[i]), parent = null, this) : this;
        },
        addHook: function (path) {
            return !path && parent ? this : (parent || (function () {
                if ("function" == typeof params[k]) {
                    var v = params[k];
                    params[key] = v;
                    /**
                     * @param {!Object} data
                     * @param {!Object} req
                     * @return {?}
                     */
                    params[k] = function (data, req) {
                        var file = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                        var self = parent;
                        if (!self || !self.api) {
                            return v.apply(params, file);
                        }
                        if (req && ("HEAD" === req.method || "no-cors" === req.mode)) {
                            return v.apply(params, file);
                        }
                        /** @type {number} */
                        var newLineStartY = Date.now();
                        var node = self._conf;
                        var msg = (data && "string" != typeof data ? data.url : data) || "";
                        var arr = msg;
                        return msg = tree.$ak(msg), tree.$b2(msg, true) ? (msg = tree.$aj(msg, node.ignoreApiPath), v.apply(params, file).then(function (prefixTransliterations) {
                            if (!self || !self.api) {
                                return prefixTransliterations;
                            }
                            var res = prefixTransliterations.clone();
                            var obj = res.headers;
                            if (obj && "function" == typeof obj.get) {
                                var header = obj.get("content-type");
                                if (header && !/(text)|(json)/.test(header)) {
                                    return prefixTransliterations;
                                }
                            }
                            /** @type {number} */
                            var callback = Date.now() - newLineStartY;
                            return res.ok ? res.text().then(function (i) {
                                fn(self, node.parseResponse, msg, arr, i, res.status || 200, callback);
                            }) : self.api(msg, false, callback, res.status || 404, res.statusText), prefixTransliterations;
                        })["catch"](function (data) {
                            if (!self || !self.api) {
                                throw data;
                            }
                            /** @type {number} */
                            var parameters = Date.now() - newLineStartY;
                            throw self.api(msg, false, parameters, data.name || "Error", data.message), data;
                        })) : v.apply(params, file);
                    };
                    params[k].toString = tree.$at(k);
                }
            }(), function () {
                if ("function" == typeof params[name]) {
                    var p = params[name];
                    params[i] = p;
                    /**
                     * @param {?} b
                     * @return {?}
                     */
                    params[name] = function (b) {
                        var x = new p(b);
                        var self = parent;
                        if (!self || !self.api || !x.addEventListener) {
                            return x;
                        }
                        var s;
                        var data;
                        var type;
                        /** @type {function(): undefined} */
                        var r = x.send;
                        /** @type {function(?, string): undefined} */
                        var t = x.open;
                        var msg = self._conf;
                        return x.open = function (fileName, contentType) {
                            var testPath = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                            t.apply(x, testPath);
                            type = contentType || "";
                            data = (data = tree.$ak(type)) ? tree.$aj(data, msg.ignoreApiPath) : "";
                        }, x.send = function () {
                            /** @type {number} */
                            s = Date.now();
                            var primitives = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                            r.apply(x, primitives);
                        }, tree.on(x, "readystatechange", function () {
                            if (data && 4 === x.readyState) {
                                /** @type {number} */
                                var callback = Date.now() - s;
                                if (x.status >= 200 && x.status <= 299) {
                                    var cb = x.status || 200;
                                    if ("function" == typeof x.getResponseHeader) {
                                        var result = x.getResponseHeader("Content-Type");
                                        if (result && !/(text)|(json)/.test(result)) {
                                            return;
                                        }
                                    }
                                    if (x.responseType && "text" !== x.responseType) {
                                        self.api(data, true, callback, cb, "");
                                    } else {
                                        fn(self, msg.parseResponse, data, type, x.responseText, cb, callback);
                                    }
                                } else {
                                    self.api(data, false, callback, x.status || "FAILED", x.statusText);
                                }
                            }
                        }), x;
                    };
                    params[name].toString = tree.$at(name);
                }
            }()), parent = this, this);
        },
        $af: function () {
            return this.$b3 ? this : (this.getConfig("disableHook") || this.addHook(), this.$b3 = true, this);
        }
    }), config;


}


module.exports = hook