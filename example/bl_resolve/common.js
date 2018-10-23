'use strict';
! function () {
    // console.log("object");
    function init(t, n, r) {
        // console.log(t);
        // console.log(n);
        // console.log(r)

        function s(o, u) {

            if (!n[o]) {

                // 当为空的时候跳过
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
                }, u, u.exports, init, t, n, r);


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

    return init
}()({
    1: [
        function ($, meta, n) {
            
            console.log(meta);
           
            var fn = function (s) {
                console.log(s);
            }
            fn.dftCon = {
                sample: 1,
                tag: ""
            }

            meta.exports = fn

        }
    ],
    2: [
        function (require, module, n) {
            var self = function () {
                console.log("2");
            }

            module.exports = self;
        }
    ],
    3: [
        function (require, module, n) {

            var $ = require("./util")
            var ba = require("./base")

            // console.log($.dftCon);
            ba(2)
            
            console.log(this);

            var self = function () {
                console.log("3");
            }

            module.exports = self;
        }, {
            "./util": 1,
            "./base": 2,
        }
    ]
}, {}, [3]);