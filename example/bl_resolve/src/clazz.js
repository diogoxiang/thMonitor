'use strict';
/*
 * File: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\clazz.js
 * Project: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Monday October 22nd 2018
 * Author: Diogo
 * -----
 * Last Modified: Monday October 22nd 2018 2:06:44 pm
 * Modified By: the developer formerly known as Diogo at <Diogoxiang@qq.com>
 * -----
 * Copyright (c) 2018 taiheiot.com
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
/**
 * id: 2
 * name :clazz
 *{
     "./sender": 8,
     "./reporter": 10,
     "./util": 11,
     "./fmp": 3,
     "./hack": 4,
     "./handler": 5,
     "./hook": 6
 }
 * 
 * function (require, module, n) {}
 * 
 */

var $ = require("./util");
var parent = require("./reporter");
var btoa = require("./sender");
var host = $.win;
var doc = host.document;
/** @type {!RegExp} */
var UNWRAPPED_FUNC = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig)$/;


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

// 相应的配置文件
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
    imgUrl: "https://arms-retcode.aliyuncs.com/r.png?", // 记录的地址
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
parent.Browser = self;
module.exports = self;