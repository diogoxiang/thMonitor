'use strict';
/*
 * File: f:\Diogo\github.com\thMonitor\example\bl_resolve\src\core.js
 * Project: f:\Diogo\github.com\thMonitor\example\bl_resolve
 * Created Date: Tuesday October 23rd 2018
 * Author: Diogo
 * -----
 * Last Modified: Tuesday October 23rd 2018 2:02:55 pm
 * Modified By: the developer formerly known as Diogo at <Diogoxiang@qq.com>
 * -----
 * Copyright (c) 2018 taiheiot.com
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 * 
 * 23-10-18 2018    ABC	
 * 
 * 23-10-18 2018	ABC	
 */


/**
 * id: 9 
 * name : core
 * 引用:
 * function (require, context, n) {}
 */


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

var result = window;
var Buffer = result.BrowserLogger = require("./clazz");
var name = require("./util").key;
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
 
        var i = [];
        return name in result && (m = result[name].config || {}, i = result[name].pipe || []), init(m, i);
    }(result.__hasInitBlSdk);
}

module.exports= Buffer