'use strict';
/*
 * Filename: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\fmp.js
 * Path: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Tuesday, October 23rd 2018, 9:49:51 am
 * Author: Diogo
 * 
 * Copyright (c) 2018 taiheiot.com
 */

// id: 3
//  require('util')   
// function (context, mixin, n) 

var that = require('./util')

var duration = 500;


/**
 * ???
 * @param {*} module 
 * @param {*} window 
 * @param {*} n 
 */
var fmp = function (module, window, n) {

    /**
     * ????
     */
    function callback(item, count, error) {
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
     * ???
     */
    function prepend(arr) {
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
        /**
         * 某类时间超时
         * @param {*} timeout 
         */
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
            return (reverseIsSingle = new OriginalMutationObserver(function () {
                ! function (currentPriceNextPeriod) {
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
                if (prevCaught || ! function (currentPriceNextPeriod, iterations) {
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
    })





}



module.exports = fmp;