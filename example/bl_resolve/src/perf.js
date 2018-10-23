'use strict';
/*
 * Filename: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\perf.js
 * Path: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Tuesday, October 23rd 2018, 11:21:55 am
 * Author: Administrator
 * 
 * Copyright (c) 2018 Your Company
 */
/**
 * id: 7
 * name : perf
 */
 
// function (pointFromEvent, mixin, n) {}

var p = require('./util')

var result = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"];

var perf = function () {
    var options = p.win || {};
    var data = options.performance;
    if (!data || "object" != typeof data) {
        return null;
    }
    var a = {};
    var values = data.timing || {};
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




}



module.exports = perf;