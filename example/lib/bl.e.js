'use strict';
!function () {
    /**
     * @param {!Object} t
     * @param {!Object} n
     * @param {!NodeList} r
     * @return {?}
     */
    function e(t, n, r) {
        /**
         * @param {string} o
         * @param {?} u
         * @return {?}
         */
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) {
                        return a(o, true);
                    }
                    if (i) {
                        return i(o, true);
                    }
                    /** @type {!Error} */
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var u = n[o] = {
                    exports: {}
                };
                t[o][0].call(u.exports, function (e) {
                    return s(t[o][1][e] || e);
                }, u, u.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        var i = "function" == typeof require && require;
        /** @type {number} */
        var o = 0;
        for (; o < r.length; o++) {
            s(r[o]);
        }
        return s;
    }
    return e;
}()({
    1: [function ($, meta, n) {
        var self = $("./util");
        /**
         * @param {!Object} s
         * @return {?}
         */
        var fn = function (s) {
            return this.ver = "1.3.1", this._conf = self.ext({}, fn.dftCon), this.$a5 = {}, this.$a1 = [], this.hash = self.seq(), this.$a6(), this.setConfig(s), this;
        };
        fn.dftCon = {
            sample: 1,
            tag: ""
        };
        fn.prototype = {
            constructor: fn,
            $a2: function (saveNotifs) {
                return saveNotifs();
            },
            $a7: function () {
                var i = this._conf.page;
                return self.$a8(i, [], i + "");
            },
            setPage: function () {
            },
            setConfig: function (name) {
                self.$a9(name);
                this._conf = self.ext({}, this._conf, name);
            },
            $aa: function () {
            },
            $ab: function () {
                return {};
            },
            $a6: function () {
                this.session = self.uu();
                /** @type {number} */
                this.sBegin = Date.now();
            },
            getConfig: function (value) {
                return value ? this._conf[value] : self.ext({}, this._conf);
            },
            $ac: function (type) {
                return 1 === type || ("boolean" == typeof this.$a5[type] ? this.$a5[type] : (this.$a5[type] = self.pick(type), this.$a5[type]));
            },
            $a4: function () {
                var script;
                clearTimeout(this.$a3);
                /** @type {null} */
                this.$a3 = null;
                for (; script = this.$a1.pop();) {
                    this.$aa(script);
                }
                return this;
            },
            _lg: function (name, e, input) {
                var data = this._conf;
                return e && !data.disabled && data.pid ? input && !this.$ac(input) ? this : (e = self.ext({
                    t: name,
                    times: 1,
                    page: this.$a7(),
                    tag: data.tag || ""
                }, e, this.$ab(), {
                        pid: data.pid,
                        _v: this.ver,
                        sid: this.session,
                        sampling: input || 1,
                        z: self.seq()
                    }), function (ngModule, item) {
                        var message;
                        if ("error" === item.t && (message = ngModule.$a1[0]) && "error" === message.t && item.msg === message.msg) {
                            message.times++;
                        } else {
                            ngModule.$a1.unshift(item);
                            ngModule.$a2(function () {
                                ngModule.$a3 = self.delay(function () {
                                    ngModule.$a4();
                                }, "error" === item.t ? 3e3 : -1);
                            });
                        }
                    }(this, e)) : this;
            },
            custom: function (obj, prop) {
                if (!obj || "object" != typeof obj) {
                    return this;
                }
                /** @type {boolean} */
                var globUseGlobalStorage = false;
                var b = {};
                return self.each(obj, function (n, p) {
                    return !(globUseGlobalStorage = p && p.length <= 20) && self.warn("[retcode] invalid key: " + p), b["x-" + p] = n, globUseGlobalStorage;
                }), globUseGlobalStorage ? this._lg("custom", b, prop || 1) : this;
            }
        };
        /** @type {function(!Object): ?} */
        meta.exports = fn;
    }, {
        "./util": 11
    }],
    2: [function (require, module, n) {
        var $ = require("../util");
        var parent = require("../reporter");
        var btoa = require("../common/sender");
        var host = $.win;
        var doc = host.document;
        /** @type {!RegExp} */
        var UNWRAPPED_FUNC = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig)$/;
        /**
         * @param {!Object} args
         * @return {?}
         */
        var self = function (args) {
            var self = this;
            return parent.call(self, args), self._initialPage = args.page && $.$a8(args.page, [], args.page + "") || null, self._health = {
                errcount: 0,
                apisucc: 0,
                apifail: 0
            }, self.$ad = function (type, result) {
                if ("error" === type) {
                    self._health.errcount++;
                } else {
                    if ("api" === type) {
                        self._health[result.success ? "apisucc" : "apifail"]++;
                    }
                }
            }, self.$ae(), self.$af(), self.$ag(1e4), Object.defineProperty && host.addEventListener && Object.defineProperty(self, "pipe", {
                set: self.$ah
            }), self;
        };
        self.prototype = $.$ai(parent.prototype);
        $.ext(parent._root.dftCon, {
            uid: null,
            ignoreUrlPath: [{
                rule: /\/([a-z\-_]+)?\d{2,20}/g,
                target: "/$1**"
            }, /\/$/],
            ignoreApiPath: {
                rule: /(\w+)\/\d{2,}/g,
                target: "$1"
            },
            ignoreUrlCase: true,
            imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
            disableHook: false,
            autoSendPv: true,
            enableSPA: false,
            parseHash: function (hash) {
                return (hash ? $.$ak(hash.replace(/^#\/?/, "")) : "") || "[index]";
            },
            parseResponse: function (data) {
                if (!data || "object" != typeof data) {
                    return {};
                }
                var code = data.code;
                var response = data.msg || data.message || data.subMsg || data.errorMsg || data.ret || data.errorResponse || "";
                return "object" == typeof response && (code = code || response.code, response = response.msg || response.message || response.info || response.ret || JSON.stringify(response)), {
                    msg: response,
                    code: code,
                    success: true
                };
            }
        });
        $.ext(self.prototype, {
            constructor: self,
            _super: parent,
            $a2: function (saveNotifs) {
                var readyModel = this;
                if (readyModel.hasReady) {
                    return saveNotifs();
                }
                if ("complete" === doc.readyState) {
                    /** @type {boolean} */
                    readyModel.hasReady = true;
                    saveNotifs();
                } else {
                    $.on(host, "load", function () {
                        /** @type {boolean} */
                        readyModel.hasReady = true;
                        saveNotifs();
                    }, true);
                }
            },
            $a7: function (tryAnonymous) {
                var result = this._conf;
                var value = result.page;
                /** @type {!Location} */
                var url = location;
                /** @type {string} */
                var str = url.host + url.pathname;
                return value && !tryAnonymous ? $.$a8(value, [], value + "") : this._initialPage || $.$aj(result.ignoreUrlCase ? str.toLowerCase() : str, result.ignoreUrlPath);
            },
            setPage: function (id, url) {
                var self = this;
                var list = self.$al;
                if (false !== url) {
                    if (!id || id === list) {
                        return self;
                    }
                    /** @type {string} */
                    self.$al = id;
                    clearTimeout(self.$am);
                    self.$an(1);
                    self.$a6();
                    /** @type {number} */
                    self.$am = setTimeout(function () {
                        self.$ao();
                    }, 10);
                } else {
                    /** @type {string} */
                    self.$al = id;
                }
                return self._conf.page = id, self;
            },
            setConfig: function (style, force) {
                $.$a9(style);
                var original = this._conf;
                if (this._conf = $.ext({}, original, style), !force) {
                    /** @type {string} */
                    var name = "disableHook";
                    if (name in style && original[name] !== style[name]) {
                        if (style[name]) {
                            this.removeHook();
                        } else {
                            this.addHook();
                        }
                    }
                    if ((name = "enableSPA") in style && original[name] !== style[name]) {
                        this.$ap(style[name]);
                    }
                }
            },
            $aa: function (name) {
                btoa(name, this.getConfig("imgUrl"));
            },
            $ah: function (n) {
                var t = this;
                if (!n || !n.length) {
                    return t;
                }
                try {
                    if ("Array" === $.T(n[0])) {
                        return $.each(n, function (settings) {
                            return t.$ah(settings);
                        });
                    }
                    if ("Array" !== $.T(n)) {
                        return t;
                    }
                    var methodName = n.shift();
                    if (!UNWRAPPED_FUNC.test(methodName)) {
                        return t;
                    }
                    t[methodName].apply(t, n);
                } catch (e) {
                    return $.warn("[retcode] error in sendPipe", e), t;
                }
            },
            $aq: function () {
                var item = $.ext({}, this._health);
                /** @type {number} */
                item.healthy = item.errcount > 0 ? 0 : 1;
                /** @type {number} */
                var x_menu_item_current = Date.now() - this.sBegin;
                /** @type {number} */
                item.stay = x_menu_item_current;
                this._lg("health", item, 1);
                this._health = {
                    errcount: 0,
                    apisucc: 0,
                    apifail: 0
                };
            },
            createInstance: function (obj) {
                obj = $.ext({
                    pid: this._conf.pid
                }, obj);
                var duoshuo_token = this.__propt__.constructor(obj);
                return obj.page && duoshuo_token.$ao(), duoshuo_token;
            }
        });
        require("./handler")(self, host, doc);
        require("./fmp")(self, host, doc);
        require("./hook")(self, host);
        require("./hack")(self, host);
        self._super = parent;
        self._root = parent._root;
        /** @type {function(!Object): ?} */
        parent.Browser = self;
        /** @type {function(!Object): ?} */
        module.exports = self;
    }, {
        "../common/sender": 8,
        "../reporter": 10,
        "../util": 11,
        "./fmp": 3,
        "./hack": 4,
        "./handler": 5,
        "./hook": 6
    }],
    3: [function (context, mixin, n) {
        var that = context("../util");
        /** @type {number} */
        var duration = 500;
        /**
         * @param {!Function} module
         * @param {!Object} window
         * @param {(Document|Element)} n
         * @return {undefined}
         */
        mixin.exports = function (module, window, n) {
            /**
             * @param {!Element} item
             * @param {number} count
             * @param {boolean} error
             * @return {?}
             */
            function callback(item, count, error) {
                /** @type {number} */
                var b = 0;
                var method = item.tagName;
                if ("SCRIPT" !== method && "STYLE" !== method && "META" !== method && "HEAD" !== method) {
                    var step = item.children ? item.children.length : 0;
                    if (step > 0) {
                        var c = item.children;
                        /** @type {number} */
                        var index = step - 1;
                        for (; index >= 0; index--) {
                            b = b + callback(c[index], count + 1, b > 0);
                        }
                    }
                    if (b <= 0 && !error) {
                        if (!(item.getBoundingClientRect && item.getBoundingClientRect().top < minMarginTop)) {
                            return 0;
                        }
                    }
                    b = b + (1 + .5 * count);
                }
                return b;
            }
            /**
             * @param {!Array} arr
             * @return {?}
             */
            function prepend(arr) {
                /** @type {number} */
                var i = 1;
                for (; i < arr.length; i++) {
                    if (arr[i].score < arr[i - 1].score) {
                        return arr.splice(i, 1), prepend(arr);
                    }
                }
                return arr;
            }
            var minMarginTop = window.innerHeight || 0;
            /** @type {!Array} */
            var arr = [];
            /** @type {null} */
            var reverseIsSingle = null;
            /** @type {number} */
            var reverseValue = 0;
            that.ext(module.prototype, {
                $ag: function (timeout) {
                    var me = this;
                    if (!me._conf || !me._conf.useFmp) {
                        return null;
                    }
                    if (!window.MutationObserver) {
                        return that.warn("[retcode] first meaningful paint can not be retrieved"), me.$ar(), null;
                    }
                    that.on(window, "beforeunload", function () {
                        me.$as(0, true);
                    });
                    var OriginalMutationObserver = window.MutationObserver;
                    return (reverseIsSingle = new OriginalMutationObserver(function () {
                        !function (currentPriceNextPeriod) {
                            /** @type {number} */
                            var priceDiff = Date.now() - currentPriceNextPeriod;
                            var r = n.querySelector("body");
                            if (r) {
                                /** @type {number} */
                                var result = 0;
                                result = result + callback(r, 1, false);
                                arr.push({
                                    score: result,
                                    t: priceDiff
                                });
                            } else {
                                arr.push({
                                    score: 0,
                                    t: priceDiff
                                });
                            }
                        }(me._startTime);
                    })).observe(document, {
                        childList: true,
                        subtree: true
                    }), reverseValue = 1, me.$a2(function () {
                        me.$as(timeout);
                    }), reverseIsSingle;
                },
                $as: function (timeout, prevCaught) {
                    var req = this;
                    if (reverseIsSingle && reverseValue) {
                        if (prevCaught || !function (currentPriceNextPeriod, iterations) {
                            /** @type {number} */
                            var tooLessCounter = Date.now() - currentPriceNextPeriod;
                            return !(tooLessCounter > iterations || tooLessCounter - (arr && arr.length && arr[arr.length - 1].t || 0) > 2 * duration);
                        }(req._startTime, timeout)) {
                            reverseIsSingle.disconnect();
                            /** @type {number} */
                            reverseValue = 0;
                            arr = prepend(arr);
                            /** @type {null} */
                            var data = null;
                            /** @type {number} */
                            var i = 1;
                            for (; i < arr.length; i++) {
                                if (arr[i].t >= arr[i - 1].t) {
                                    /** @type {number} */
                                    var maxFrameLength = arr[i].score - arr[i - 1].score;
                                    if (!data || data.rate <= maxFrameLength) {
                                        data = {
                                            t: arr[i].t,
                                            rate: maxFrameLength
                                        };
                                    }
                                }
                            }
                            if (data && data.t > 0) {
                                req.$ar({
                                    fmp: data.t
                                });
                            } else {
                                req.$ar();
                            }
                        } else {
                            that.delay(function () {
                                req.$as(timeout);
                            }, duration);
                        }
                    }
                }
            });
        };
    }, {
        "../util": 11
    }],
    4: [function (fn, mixin, n) {
        /**
         * @param {!Function} config
         * @param {!Window} global
         * @return {undefined}
         */
        mixin.exports = function (config, global) {
            var o = fn("../util");
            var a = global.history || {};
            var doc = global.document;
            /**
             * @param {string} type
             * @param {!Object} data
             * @return {undefined}
             */
            var dispatchEvent = function (type, data) {
                var e;
                if (global.CustomEvent) {
                    /** @type {!CustomEvent} */
                    e = new CustomEvent(type, {
                        detail: data
                    });
                } else {
                    (e = doc.createEvent("HTMLEvents")).initEvent(type, false, true);
                    /** @type {!Object} */
                    e.detail = data;
                }
                global.dispatchEvent(e);
            };
            /**
             * @param {string} name
             * @return {undefined}
             */
            var expect = function (name) {
                var b = a[name];
                if ("function" == typeof b) {
                    /**
                     * @param {?} n
                     * @param {?} right
                     * @param {string} name
                     * @return {?}
                     */
                    a[name] = function (n, right, name) {
                        /** @type {string} */
                        var url = location.href;
                        var ret = b.call(a, n, right, name);
                        if (!name || "string" != typeof name) {
                            return ret;
                        }
                        if (name === url) {
                            return ret;
                        }
                        try {
                            /** @type {!Array<string>} */
                            var pair = url.split("#");
                            /** @type {!Array<string>} */
                            var node = name.split("#");
                            var correctedSlug = o.$ak(pair[0]);
                            var value = o.$ak(node[0]);
                            /** @type {string} */
                            var settingsWindowId = pair[1] && pair[1].replace(/^\/?(.*)/, "$1");
                            /** @type {string} */
                            var key = node[1] && node[1].replace(/^\/?(.*)/, "$1");
                            if (correctedSlug !== value) {
                                dispatchEvent("historystatechange", value);
                            } else {
                                if (settingsWindowId !== key) {
                                    dispatchEvent("historystatechange", key);
                                }
                            }
                        } catch (fileName) {
                            o.warn("[retcode] error in " + name + ": " + fileName);
                        }
                        return ret;
                    };
                    a[name].toString = o.$at(name);
                }
            };
            o.ext(config.prototype, {
                $au: function () {
                    return this.$av ? this : (expect("pushState"), expect("replaceState"), this.$av = true, this);
                }
            });
        };
    }, {
        "../util": 11
    }],
    5: [function (require, mixin, n) {
        /**
         * @param {!Function} config
         * @param {!Window} root
         * @param {!Object} options
         * @return {?}
         */
        mixin.exports = function (config, root, options) {
            var _ = require("../util");
            var mapIdToName = require("../common/perf");
            /** @type {null} */
            var _tmpl = null;
            var html = options.documentElement;
            var scaledGridCellHeight = root.innerWidth || html.clientWidth || options.body.clientWidth;
            var px = root.innerHeight || html.clientHeight || options.body.clientHeight;
            var data = root.navigator.connection;
            var params = {
                sr: screen.width + "x" + screen.height,
                vp: scaledGridCellHeight + "x" + px,
                ct: data ? data.effectiveType || data.type : ""
            };
            var attributes = {};
            /**
             * @param {string} a
             * @param {string} b
             * @param {number} n
             * @param {string} o
             * @param {string} t
             * @return {?}
             */
            var callback = function (a, b, n, o, t) {
                if (b === undefined) {
                    var pattern;
                    var customAttributes;
                    if (!attributes[a]) {
                        /** @type {!RegExp} */
                        pattern = new RegExp(a + "=([^;]+)");
                        try {
                            /** @type {(Array<string>|null)} */
                            customAttributes = pattern.exec(options.cookie);
                        } catch (facetName) {
                            return _.warn("[retcode] can not get cookie:", facetName), null;
                        }
                        if (customAttributes) {
                            /** @type {string} */
                            attributes[a] = customAttributes[1];
                        }
                    }
                    return attributes[a];
                }
                /** @type {string} */
                var s = a + "=" + b;
                if (o) {
                    /** @type {string} */
                    s = s + ("; domain=" + o);
                }
                if (t) {
                    /** @type {string} */
                    s = s + ("; path=" + t);
                }
                if (n) {
                    /** @type {string} */
                    s = s + ("; max-age=" + n);
                }
                try {
                    return options.cookie = s, !!options.cookie;
                } catch (facetName) {
                    return _.warn("[retcode] can not set cookie: ", facetName), false;
                }
            };
            /**
             * @param {?} that
             * @return {?}
             */
            var init = function (that) {
                var id = that._conf.uid || callback("_nk_") || callback("_bl_uid");
                if (!id) {
                    id = _.uu();
                    if (!callback("_bl_uid", id, 15552e3)) {
                        return null;
                    }
                }
                return id;
            };
            return _.ext(config.prototype, {
                activeErrHandler: function (addedRenderer) {
                    return _tmpl && !addedRenderer ? this : (_tmpl = this, this);
                },
                errorHandler: function (error) {
                    if (!error) {
                        return this;
                    }
                    var token = error.type;
                    return "error" === token ? this.error(error.error || {
                        message: error.message
                    }, error) : "unhandledrejection" === token && _.T(error.reason, "Error") && _.$aw(error.reason) && this.error(error.reason), this;
                },
                $ar: function (ext) {
                    var util = this;
                    util.$a2(function () {
                        var name = mapIdToName();
                        if (name) {
                            name.page = util.$a7(true);
                            if (ext) {
                                name = _.ext(name, ext);
                            }
                            util._lg("perf", name, util.getConfig("sample"));
                        }
                    });
                },
                $ao: function () {
                    var query = this;
                    query.$a2(function () {
                        var parent = function (obj) {
                            var ret = init(obj);
                            var e_total = root.devicePixelRatio || 1;
                            return {
                                uid: ret,
                                dt: options.title,
                                dl: location.href,
                                dr: options.referrer,
                                dpr: e_total.toFixed(2),
                                de: (options.characterSet || options.defaultCharset || "").toLowerCase(),
                                ul: html.lang
                            };
                        }(query);
                        if (parent && parent.uid) {
                            query._lg("pv", parent);
                        }
                    });
                },
                $ab: function () {
                    return params.uid = init(this), params;
                },
                $an: function (shouldAutoStop) {
                    /** @type {number} */
                    var e = Date.now();
                    if (e - this._lastUnload < 200) {
                        return this;
                    }
                    /** @type {number} */
                    this._lastUnload = e;
                    this.$aq(shouldAutoStop);
                    if (this.$ax) {
                        this._lg("speed", this.$ax);
                        /** @type {null} */
                        this.$ax = null;
                        clearTimeout(this.$ay);
                    }
                    this.$a4();
                },
                $ap: function (canCreateDiscussions) {
                    var self = this;
                    if (!canCreateDiscussions ^ self.$az) {
                        return self;
                    }
                    if (canCreateDiscussions) {
                        self.$au();
                        /**
                         * @param {boolean} hide
                         * @return {undefined}
                         */
                        self.$az = function (hide) {
                            var value = self._conf.parseHash(location.hash);
                            if (value) {
                                self.setPage(value, false !== hide);
                            }
                        };
                        /**
                         * @param {!Object} e
                         * @return {undefined}
                         */
                        self.$b0 = function (e) {
                            var value = self._conf.parseHash(e.detail);
                            if (value) {
                                self.setPage(value);
                            }
                        };
                        _.on(root, "hashchange", self.$az);
                        _.on(root, "historystatechange", self.$b0);
                        self.$az(false);
                    } else {
                        _.off(root, "hashchange", self.$az);
                        _.off(root, "historystatechange", self.$b0);
                        /** @type {null} */
                        self.$az = null;
                        /** @type {null} */
                        self.$b0 = null;
                    }
                },
                $ae: function () {
                    var me = this;
                    if (me.$b1) {
                        return me;
                    }
                    var conf = me._conf;
                    return _.on(root, "beforeunload", function () {
                        me.$an(0);
                    }), me.$ap(conf.enableSPA), me.activeErrHandler(false), me.$b1 = true, me;
                }
            }), _.on(root, "error", function (err) {
                if (_tmpl) {
                    _tmpl.errorHandler(err);
                }
            }).on(root, "unhandledrejection", function (err) {
                if (_tmpl) {
                    _tmpl.errorHandler(err);
                }
            }), config;
        }; 
    }, {
        "../common/perf": 7,
        "../util": 11
    }],
    6: [function (parse, mixin, n) {
        /**
         * @param {!Function} config
         * @param {!Object} params
         * @return {?}
         */
        mixin.exports = function (config, params) {
            var tree = parse("../util");
            /** @type {null} */
            var parent = null;
            /**
             * @param {!Object} self
             * @param {!Function} e
             * @param {!Object} data
             * @param {?} a
             * @param {?} n
             * @param {string} s
             * @param {number} callback
             * @return {?}
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
        };
    }, {
        "../util": 11
    }],
    7: [function (pointFromEvent, mixin, n) {
        var p = pointFromEvent("../util");
        /** @type {!Array} */
        var result = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"];
        /**
         * @return {?}
         */
        mixin.exports = function () {
            var options = p.win || {};
            var data = options.performance;
            if (!data || "object" != typeof data) {
                return null;
            }
            var a = {};
            var values = data.timing || {};
            /** @type {number} */
            var o = 1;
            if ("function" == typeof options.PerformanceNavigationTiming) {
                var inputValues = data.getEntriesByType("navigation")[0];
                if (inputValues) {
                    values = inputValues;
                    /** @type {number} */
                    o = 2;
                }
            }
            p.each({
                dns: [3, 2],
                tcp: [5, 4],
                ssl: [5, 17],
                ttfb: [7, 6],
                trans: [8, 7],
                dom: [10, 8],
                res: [14, 12],
                firstbyte: [7, 2],
                fpt: [8, 1],
                tti: [10, 1],
                ready: [12, 1],
                load: [14, 1]
            }, function (to_opt_r_msgids, KEY) {
                var width = values[result[to_opt_r_msgids[1]]];
                var height = values[result[to_opt_r_msgids[0]]];
                if (2 === to_opt_r_msgids || width > 0 && height > 0) {
                    /** @type {number} */
                    var d = Math.round(height - width);
                    if (d >= 0 && d < 36e5) {
                        /** @type {number} */
                        a[KEY] = d;
                    }
                }
            });
            var args = options.navigator.connection;
            var kermit = data.navigation || {};
            a.ct = args ? args.effectiveType || args.type : "";
            var e = args ? args.downlinkMax || args.bandwidth || -1 : -1;
            return e = e > 999 ? 999 : e, a.bandwidth = e, a.navtype = 1 === kermit.type ? "Reload" : "Other", 1 === o && values[result[16]] > 0 && values[result[1]] > 0 && (a.fpt = values[result[16]] - values[result[1]]), a;
        };
    }, {
        "../util": 11
    }],
    8: [function (uninterpolate, mixin, n) {
        var u = uninterpolate("../util");
        /** @type {(Window|{})} */
        var root = "object" == typeof window ? window : {};
        var fn = root.__oFetch_ || root.fetch;
        /** @type {(!Function|undefined)} */
        fn = "function" == typeof fn ? fn : undefined;
        /**
         * @param {!Object} type
         * @param {(Object|number)} e
         * @return {?}
         */
        mixin.exports = function (type, e) {
            /** @type {number} */
            var start = -1;
            if ("object" == typeof type) {
                start = type.z;
                type = u.serialize(type);
            }
            var name = e + type;
            if (fn) {
                return fn(name, {
                    method: "HEAD",
                    mode: "no-cors"
                })["catch"](u.noop);
            }
            if (root.document && root.document.createElement) {
                /** @type {string} */
                var i = "__request_hold_" + start;
                /** @type {!Image} */
                var c = root[i] = new Image;
                /** @type {function(): undefined} */
                c.onload = c.onerror = function () {
                    root[i] = undefined;
                };
                c.src = name;
                /** @type {null} */
                c = null;
            }
        };
    }, {
        "../util": 11
    }],
    9: [function (require, context, n) {
        /**
         * @param {?} value
         * @param {boolean} settings
         * @return {?}
         */
        function init(value, settings) {
            var that = result[name] = new Buffer(value);
            that.$ah(settings);
            var conf = that._conf;
            return false !== conf.autoSendPv && that.$ao(), conf && conf.useFmp || that.$ar(), result[type] = true, that;
        }
        /** @type {!Window} */
        var result = window;
        var Buffer = result.BrowserLogger = require("./biz.browser/clazz");
        var name = require("./util").key;
        /** @type {string} */
        var type = "__hasInitBlSdk";
        /**
         * @param {?} user
         * @param {boolean} key
         * @return {?}
         */
        Buffer.singleton = function (user, key) {
            return result[type] ? result[name] : init(user, key);
        };
        if ("object" == typeof window && !!window.navigator && result[name]) {
            Buffer.bl = function () {
                if (result[type]) {
                    return result[name];
                }
                var m = {};
                /** @type {!Array} */
                var i = [];
                return name in result && (m = result[name].config || {}, i = result[name].pipe || []), init(m, i);
            }(result.__hasInitBlSdk);
        }
        context.exports = Buffer;
    }, {
        "./biz.browser/clazz": 2,
        "./util": 11
    }],
    10: [function (require, context, n) {
        var $ = require("./util");
        var config = require("./base");
        /** @type {!Array} */
        var data = ["api", "success", "time", "code", "msg", "trace", "traceId"];
        /**
         * @param {string} s
         * @param {?} index
         * @return {?}
         */
        var callback = function (s, index) {
            var groups = s.split("::");
            return groups.length > 1 ? $.ext({
                group: groups[0],
                key: groups[1]
            }, index) : $.ext({
                group: "default_group",
                key: groups[0]
            }, index);
        };
        /**
         * @param {!Object} target
         * @return {?}
         */
        var me = function (target) {
            config.call(this, target);
            var value;
            try {
                /** @type {number} */
                value = "object" == typeof performance ? performance.timing.fetchStart : Date.now();
            } catch (n) {
                /** @type {number} */
                value = Date.now();
            }
            return this._startTime = value, this;
        };
        me.prototype = $.$ai(config.prototype);
        $.ext(config.dftCon, {
            startTime: null
        });
        $.ext(me.prototype, {
            constructor: me,
            _super: config,
            sum: function (key, value, array) {
                try {
                    return this._lg("sum", callback(key, {
                        val: value || 1
                    }), array);
                } catch (feedURL) {
                    $.warn("[retcode] can not get parseStatData: " + feedURL);
                }
            },
            avg: function (value, expr, inputs) {
                try {
                    return this._lg("avg", callback(value, {
                        val: expr || 0
                    }), inputs);
                } catch (feedURL) {
                    $.warn("[retcode] can not get parseStatData: " + feedURL);
                }
            },
            percent: function (number, total, value, i) {
                try {
                    return this._lg("percent", callback(number, {
                        subkey: total,
                        val: value || 0
                    }), i);
                } catch (feedURL) {
                    $.warn("[retcode] can not get parseStatData: " + feedURL);
                }
            },
            msg: function (message, title) {
                if (message && !(message.length > 180)) {
                    return this.custom({
                        msg: message
                    }, title);
                }
            },
            error: function (body, e) {
                if (!body || "object" != typeof body || "string" != typeof body.message) {
                    return $.warn("[retcode] invalid param e: " + body), this;
                }
                var cid = body.name || "CustomError";
                /** @type {string} */
                var m = body.message;
                var res = body.stack || "";
                e = e || {};
                res = res && res.substring(0, 1e3);
                var error = {
                    cate: cid,
                    msg: m.substring(0, 1e3),
                    stack: res,
                    file: e.filename || "",
                    line: e.lineno || "",
                    col: e.colno || ""
                };
                return this.$ad && this.$ad("error", error), this._lg("error", error, 1);
            },
            api: function (v, c, f, t, value) {
                return v ? (v = "string" == typeof v ? {
                    api: v,
                    success: c,
                    time: f,
                    code: t,
                    msg: value
                } : $.sub(v, data), $.$b2(v.api) ? (v.code = v.code || "", v.msg = v.msg || "", v.success = v.success ? 1 : 0, v.time = +v.time, !v.api || isNaN(v.time) ? ($.warn("[retcode] invalid time or api"), this) : (this.$ad && this.$ad("api", v), this._lg("api", v, v.success && this.getConfig("sample")))) : this) : ($.warn("[retcode] api is null"), this);
            },
            speed: function (type, i, txt) {
                var settings = this;
                var length = this.getConfig("startTime") || this._startTime;
                return /^s(\d|1[0])$/.test(type) ? (i = "number" != typeof i ? Date.now() - length : i >= length ? i - length : i, settings.$ax = settings.$ax || {}, settings.$ax[type] = i, clearTimeout(settings.$ay), settings.$ay = setTimeout(function () {
                    if (!txt) {
                        settings.$ax.page = settings.$a7(true);
                    }
                    settings._lg("speed", settings.$ax);
                    /** @type {null} */
                    settings.$ax = null;
                }, 5e3), settings) : ($.warn("[retcode] invalid point: " + type), settings);
            }
        });
        me._super = config;
        me._root = config;
        /** @type {function(!Object): ?} */
        config.Reporter = me;
        /** @type {function(!Object): ?} */
        context.exports = me;
    }, {
        "./base": 1,
        "./util": 11
    }],
    11: [function (canCreateDiscussions, module, n) {
        /** @type {function(): number} */
        Date.now = Date.now || function () {
            return (new Date).getTime();
        };
        /** @type {number} */
        var _code_count = Date.now();
        /**
         * @return {undefined}
         */
        var root = function () {
        };
        var Webcam = {
            noop: root,
            warn: function () {
                /** @type {!Function} */
                var parentNode = "object" == typeof console ? console.warn : root;
                try {
                    var options = {
                        warn: parentNode
                    };
                    options.warn.call(options);
                } catch (n) {
                    return root;
                }
                return parentNode;
            }(),
            key: "__bl",
            win: "object" == typeof window && window.document ? window : undefined,
            $ai: function (proto) {
                if (Object.create) {
                    return Object.create(proto);
                }
                /**
                 * @return {undefined}
                 */
                var Bridge = function () {
                };
                return Bridge.prototype = proto, new Bridge;
            },
            each: function (obj, iterator) {
                /** @type {number} */
                var i = 0;
                var r = obj.length;
                if (this.T(obj, "Array")) {
                    for (; i < r && false !== iterator.call(obj[i], obj[i], i); i++) {
                    }
                } else {
                    for (i in obj) {
                        if (false === iterator.call(obj[i], obj[i], i)) {
                            break;
                        }
                    }
                }
                return obj;
            },
            $a8: function (t, i, tstart) {
                if ("function" != typeof t) {
                    return tstart;
                }
                try {
                    return t.apply(this, i);
                } catch (r) {
                    return tstart;
                }
            },
            T: function (val, type) {
                /** @type {string} */
                var name = Object.prototype.toString.call(val).substring(8).replace("]", "");
                return type ? name === type : name;
            },
            $aj: function (t, n) {
                if (!t) {
                    return "";
                }
                if (!n) {
                    return t;
                }
                var lang = this;
                var type = lang.T(n);
                return "Function" === type ? lang.$a8(n, [t], t) : "Array" === type ? (this.each(n, function (o) {
                    t = lang.$aj(t, o);
                }), t) : "Object" === type ? t.replace(n.rule, n.target || "") : t.replace(n, "");
            },
            J: function (a) {
                if (!a || "string" != typeof a) {
                    return a;
                }
                /** @type {null} */
                var d = null;
                try {
                    /** @type {*} */
                    d = JSON.parse(a);
                } catch (n) {
                }
                return d;
            },
            pick: function (count) {
                return 1 === count || 1 === Math.ceil(Math.random() * count);
            },
            $a9: function (e) {
                if ("sample" in e) {
                    var time = e.sample;
                    var x = time;
                    if (time && /^\d+(\.\d+)?%$/.test(time)) {
                        /** @type {number} */
                        x = parseInt(100 / parseFloat(time));
                    }
                    if (0 < x && 1 > x) {
                        /** @type {number} */
                        x = parseInt(1 / x);
                    }
                    if (x >= 1 && x <= 100) {
                        e.sample = x;
                    } else {
                        delete e.sample;
                    }
                }
                return e;
            },
            on: function (element, type, data, isAppend) {
                return element.addEventListener ? element.addEventListener(type, function wrappedCallback(e) {
                    if (isAppend) {
                        element.removeEventListener(type, wrappedCallback, false);
                    }
                    data.call(this, e);
                }, false) : element.attachEvent && element.attachEvent("on" + type, function eventHandler(a) {
                    if (isAppend) {
                        element.detachEvent("on" + type, eventHandler);
                    }
                    data.call(this, a);
                }), this;
            },
            off: function (elem, event, handler) {
                return handler ? (elem.removeEventListener ? elem.removeEventListener(event, handler) : elem.detachEvent && elem.detachEvent(event, handler), this) : this;
            },
            delay: function (func, duration) {
                return -1 === duration ? (func(), null) : setTimeout(func, duration || 0);
            },
            ext: function (fn) {
                /** @type {number} */
                var i = 1;
                /** @type {number} */
                var argl = arguments.length;
                for (; i < argl; i++) {
                    var o = arguments[i];
                    var prop;
                    for (prop in o) {
                        if (Object.prototype.hasOwnProperty.call(o, prop)) {
                            fn[prop] = o[prop];
                        }
                    }
                }
                return fn;
            },
            sub: function (n, from) {
                var inputsToClear = {};
                return this.each(n, function (el, i) {
                    if (-1 !== from.indexOf(i)) {
                        inputsToClear[i] = el;
                    }
                }), inputsToClear;
            },
            uu: function () {
                var partPos;
                var right;
                /** @type {number} */
                var i = 20;
                /** @type {!Array} */
                var arr = new Array(i);
                /** @type {!Array<string>} */
                var objs = Date.now().toString(36).split("");
                for (; i-- > 0;) {
                    /** @type {string} */
                    right = (partPos = 36 * Math.random() | 0).toString(36);
                    /** @type {string} */
                    arr[i] = partPos % 3 ? right : right.toUpperCase();
                }
                /** @type {number} */
                var j = 0;
                for (; j < 8; j++) {
                    arr.splice(3 * j + 2, 0, objs[j]);
                }
                return arr.join("");
            },
            seq: function () {
                return (_code_count++).toString(36);
            },
            encode: function (data, utf8) {
                try {
                    /** @type {string} */
                    data = utf8 ? encodeURIComponent(data).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(data);
                } catch (n) {
                }
                return data;
            },
            serialize: function (params) {
                params = params || {};
                /** @type {!Array} */
                var drilldownLevelLabels = [];
                var i;
                for (i in params) {
                    if (Object.prototype.hasOwnProperty.call(params, i) && params[i] !== undefined) {
                        drilldownLevelLabels.push(i + "=" + this.encode(params[i], "msg" === i));
                    }
                }
                return drilldownLevelLabels.join("&");
            },
            $b2: function (data, force) {
                if (!data || "string" != typeof data) {
                    return false;
                }
                /** @type {boolean} */
                var ext = /arms-retcode[\w-]*\.aliyuncs/.test(data);
                return !ext && force && (ext = /(\.png)|(\.gif)|(alicdn\.com)/.test(data)), !ext;
            },
            $aw: function (importError) {
                return !(!importError || !importError.message) && !/failed[\w\s]+fetch/i.test(importError.message);
            },
            $ak: function (data) {
                return data && "string" == typeof data ? data.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
            },
            $at: function (type) {
                return function () {
                    return type + "() { [native code] }";
                };
            }
        };
        module.exports = Webcam;
    }, {}]
}, {}, [9]);
