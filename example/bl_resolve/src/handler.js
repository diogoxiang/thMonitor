'use strict';
/**
 * id:5
 * module name : handler
 */
// function (require, mixin, n) {}

var handler = function (config, root, options) {
    var _ = require("./util")
    var mapIdToName = require("./perf");
    var _tmpl = null;
    var html = options.documentElement;
    var scaledGridCellHeight = root.innerWidth || html.clientWidth || options.body.clientWidth;
    var px = root.innerHeight || html.clientHeight || options.body.clientHeight;
    var data = root.navigator.connection;
    var params = {
        sr: screen.width + "x" + screen.height,
        vp: scaledGridCellHeight + "x" + px,
        ct: data ? data.effectiveType || data.type : ""
    };
    var attributes = {};

    /**
     * callback
     * @param {*} a 
     * @param {*} b 
     * @param {*} n 
     * @param {*} o 
     * @param {*} t 
     */
    var callback = function (a, b, n, o, t) {
        if (b === undefined) {
            var pattern;
            var customAttributes;
            if (!attributes[a]) {
                /** @type {!RegExp} */
                pattern = new RegExp(a + "=([^;]+)");
                try {
                    /** @type {(Array<string>|null)} */
                    customAttributes = pattern.exec(options.cookie);
                } catch (facetName) {
                    return _.warn("[retcode] can not get cookie:", facetName), null;
                }
                if (customAttributes) {
                    /** @type {string} */
                    attributes[a] = customAttributes[1];
                }
            }
            return attributes[a];
        }
        /** @type {string} */
        var s = a + "=" + b;
        if (o) {
            /** @type {string} */
            s = s + ("; domain=" + o);
        }
        if (t) {
            /** @type {string} */
            s = s + ("; path=" + t);
        }
        if (n) {
            /** @type {string} */
            s = s + ("; max-age=" + n);
        }
        try {
            return options.cookie = s, !!options.cookie;
        } catch (facetName) {
            return _.warn("[retcode] can not set cookie: ", facetName), false;
        }
    }

    var init = function (that) {
        var id = that._conf.uid || callback("_nk_") || callback("_bl_uid");
        if (!id) {
            id = _.uu();
            if (!callback("_bl_uid", id, 15552e3)) {
                return null;
            }
        }
        return id;
    }

    return _.ext(config.prototype, {
        activeErrHandler: function (addedRenderer) {
            return _tmpl && !addedRenderer ? this : (_tmpl = this, this);
        },
        errorHandler: function (error) {
            if (!error) {
                return this;
            }
            var token = error.type;
            return "error" === token ? this.error(error.error || {
                message: error.message
            }, error) : "unhandledrejection" === token && _.T(error.reason, "Error") && _.$aw(error.reason) && this.error(error.reason), this;
        },
        $ar: function (ext) {
            var util = this;
            util.$a2(function () {
                var name = mapIdToName();
                if (name) {
                    name.page = util.$a7(true);
                    if (ext) {
                        name = _.ext(name, ext);
                    }
                    util._lg("perf", name, util.getConfig("sample"));
                }
            });
        },
         $ao: function () {
             var query = this;
             query.$a2(function () {
                 var parent = function (obj) {
                     var ret = init(obj);
                     var e_total = root.devicePixelRatio || 1;
                     return {
                         uid: ret,
                         dt: options.title,
                         dl: location.href,
                         dr: options.referrer,
                         dpr: e_total.toFixed(2),
                         de: (options.characterSet || options.defaultCharset || "").toLowerCase(),
                         ul: html.lang
                     };
                 }(query);
                 if (parent && parent.uid) {
                     query._lg("pv", parent);
                 }
             });
         },
          $ab: function () {
              return params.uid = init(this), params;
          },
          $an: function (shouldAutoStop) {
              /** @type {number} */
              var e = Date.now();
              if (e - this._lastUnload < 200) {
                  return this;
              }
              /** @type {number} */
              this._lastUnload = e;
              this.$aq(shouldAutoStop);
              if (this.$ax) {
                  this._lg("speed", this.$ax);
                  /** @type {null} */
                  this.$ax = null;
                  clearTimeout(this.$ay);
              }
              this.$a4();
          },
          $ap: function (canCreateDiscussions) {
              var self = this;
              if (!canCreateDiscussions ^ self.$az) {
                  return self;
              }
              if (canCreateDiscussions) {
                  self.$au();
                  /**
                   * @param {boolean} hide
                   * @return {undefined}
                   */
                  self.$az = function (hide) {
                      var value = self._conf.parseHash(location.hash);
                      if (value) {
                          self.setPage(value, false !== hide);
                      }
                  };
                  /**
                   * @param {!Object} e
                   * @return {undefined}
                   */
                  self.$b0 = function (e) {
                      var value = self._conf.parseHash(e.detail);
                      if (value) {
                          self.setPage(value);
                      }
                  };
                  _.on(root, "hashchange", self.$az);
                  _.on(root, "historystatechange", self.$b0);
                  self.$az(false);
              } else {
                  _.off(root, "hashchange", self.$az);
                  _.off(root, "historystatechange", self.$b0);
                  /** @type {null} */
                  self.$az = null;
                  /** @type {null} */
                  self.$b0 = null;
              }
          },
           $ae: function () {
               var me = this;
               if (me.$b1) {
                   return me;
               }
               var conf = me._conf;
               return _.on(root, "beforeunload", function () {
                   me.$an(0);
               }), me.$ap(conf.enableSPA), me.activeErrHandler(false), me.$b1 = true, me;
           }


    }), _.on(root, "error", function (err) {
        if (_tmpl) {
            _tmpl.errorHandler(err);
        }
    }).on(root, "unhandledrejection", function (err) {
        if (_tmpl) {
            _tmpl.errorHandler(err);
        }
    }), config;



}



module.exports = handler