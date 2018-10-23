'use strict';
/*
 * Filename: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\base.js
 * Path: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Monday, October 22nd 2018, 2:55:25 pm
 * Author: Diogo
 * 
 * Copyright (c) 2018 taiheiot.com
 */

//  id:1
import * as self from "./util"

// console.log(self);
/**
 * 基本方法
 * @param {} s 
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
    setPage: function () {},
    setConfig: function (name) {
        self.$a9(name);
        this._conf = self.ext({}, this._conf, name);
    },
    $aa: function () {},
    $ab: function () {
        return {};
    },
    /**
     * 增加session 及时间
     */
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
}

module.exports = fn;