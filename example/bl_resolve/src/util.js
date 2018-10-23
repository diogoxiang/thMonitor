'use strict';
/*
 * Filename: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\util.js
 * Path: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Monday, October 22nd 2018, 10:34:05 am
 * Author: Diogo
 * 
 * Copyright (c) 2018 taiheiot.com
 */

//  id :  11
// 扩展 Date
Date.now = Date.now || function () {
    return (new Date).getTime();
};

// get time 
var _code_count = Date.now();

// define root
var root = function () {};


var Webcam = {
    noop: root,
    /**
     * define warn
     */
    warn: function () {
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
    // 创建一个具有指定原型且可选择性地包含指定属性的对象。
    $ai: function (proto) {
        if (Object.create) {
            return Object.create(proto);
        }
        /**
         * @return {undefined}
         */
        var Bridge = function () {};
        return Bridge.prototype = proto, new Bridge;
    },
    // each for obj
    each: function (obj, iterator) {
        /** @type {number} */
        var i = 0;
        var r = obj.length;
        if (this.T(obj, "Array")) {
            for (; i < r && false !== iterator.call(obj[i], obj[i], i); i++) {}
        } else {
            for (i in obj) {
                if (false === iterator.call(obj[i], obj[i], i)) {
                    break;
                }
            }
        }
        return obj;

    },
    // 返回 tstart 
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
    /**
     * 主要用于判断 val 类型是否 与type 相同
     */
    T: function (val, type) {
        /** @type {string} */
        var name = Object.prototype.toString.call(val).substring(8).replace("]", "");
        return type ? name === type : name;
    },
    /**
     * ??
     */
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
    /**
     * string to JSON 转换  
     * @param {*} a 
     */
    J: function (a) {
        if (!a || "string" != typeof a) {
            return a;
        }
        var d = null;
        try {
            d = JSON.parse(a);
        } catch (n) {}
        return d;
    },
    /**
     * count === 1
     */
    pick: function (count) {
        return 1 === count || 1 === Math.ceil(Math.random() * count);
    },
    /**
     * ???
     */
    $a9: function (e) {
        if ("sample" in e) {
            var time = e.sample;
            var x = time;
            if (time && /^\d+(\.\d+)?%$/.test(time)) {

                x = parseInt(100 / parseFloat(time));
            }
            if (0 < x && 1 > x) {
                x = parseInt(1 / x);
            }
            if (x >= 1 && x <= 100) {
                e.sample = x;
            } else {
                // 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释
                delete e.sample;
            }
        }
        return e;
    },
    /**
     * 监听事件 bind eventListener
     */
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
    /**
     * 移除监听事件
     * @param {*} elem 
     * @param {*} event 
     * @param {*} handler 
     */
    off: function (elem, event, handler) {
        return handler ? (elem.removeEventListener ? elem.removeEventListener(event, handler) : elem.detachEvent && elem.detachEvent(event, handler), this) : this;
    },
    /**
     * 延迟
     */
    delay: function (func, duration) {
        return -1 === duration ? (func(), null) : setTimeout(func, duration || 0);
    },
    /**
     * 扩展方法 或是 属性
     * @param {*} fn 
     */
    ext: function (fn) {

        var i = 1;

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
    /**
     * 判断是否存在 
     */
    sub: function (n, from) {
        var inputsToClear = {};
        return this.each(n, function (el, i) {
            if (-1 !== from.indexOf(i)) {
                inputsToClear[i] = el;
            }
        }), inputsToClear;
    },
    /**
     * 生成 uuid
     */
    uu: function () {
        var partPos;
        var right;
        var i = 20;
        var arr = new Array(i);
        //转换成 36 进制
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
    /**
     * 当前时间撮转换为 36 进制
     */
    seq: function () {
        return (_code_count++).toString(36);
    },
    /**
     * encode 并转换() 括号
     * @param {*} data 
     * @param {*} utf8 
     */
    encode: function (data, utf8) {
        try {
            /** @type {string} */
            data = utf8 ? encodeURIComponent(data).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(data);
        } catch (n) {}
        return data;
    },
    /**
     * 序列化
     */
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
    /**
     * 用于判断是否是 aliyuncs 的ext 
     */
    $b2: function (data, force) {
        if (!data || "string" != typeof data) {
            return false;
        }
        /** @type {boolean} */
        var ext = /arms-retcode[\w-]*\.aliyuncs/.test(data);
        return !ext && force && (ext = /(\.png)|(\.gif)|(alicdn\.com)/.test(data)), !ext;
    },
    /**
     * importError 错误 
     */
    $aw: function (importError) {
        return !(!importError || !importError.message) && !/failed[\w\s]+fetch/i.test(importError.message);
    },
    /**
     * ????
     */
    $ak: function (data) {
        return data && "string" == typeof data ? data.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
    },
    /**
     * ?????
     * @param {*} type 
     */
    $at: function (type) {
        return function () {
            return type + "() { [native code] }";
        };
    }


}
module.exports = Webcam;