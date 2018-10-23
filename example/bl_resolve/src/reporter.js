'use strict';
 /*
 * File: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\reporter.js
 * Project: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Monday October 22nd 2018
 * Author: Diogo
 * -----
 * Last Modified: Monday October 22nd 2018 3:18:03 pm
 * Modified By: the developer formerly known as Diogo at <Diogoxiang@qq.com>
 * -----
 * Copyright (c) 2018 taiheiot.com
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

//  id :10 
// function (require, context, n) {} 引用


import * as $ from './util'
import * as config from './base'

var data = ["api", "success", "time", "code", "msg", "trace", "traceId"];


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

config.Reporter = me;

module.exports = me;