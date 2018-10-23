'use strict';
// id: 08
// function (uninterpolate, mixin, n) {}

var u = require('./util')

var root = "object" == typeof window ? window : {};
var fn = root.__oFetch_ || root.fetch;
 
fn = "function" == typeof fn ? fn : undefined;


var sender = function(type,e){
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
      
          var i = "__request_hold_" + start;
     
          var c = root[i] = new Image;
      
          c.onload = c.onerror = function () {
              root[i] = undefined;
          };
          c.src = name;
  
          c = null;
      }


}


module.exports = sender