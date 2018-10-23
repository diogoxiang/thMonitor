'use strict';
/**
 * module name : hack 
 * id: 4
 */
// function (fn, mixin, n) {

var hack = function(config,global){

    var o  =require('./util');
    var a = global.history || {};
    var doc =global.document;    
    
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

 

}
 

module.exports = hack