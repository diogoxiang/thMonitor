! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.fundebug = t() : e.fundebug = t()
}(window, function () {

    return function (n) {

        var r = {}




        console.log(n[0](r));

    }([
        function (e, t) {
            var n = function () {
                var e = document.currentScript;
                if (!e) {
                    var t = document.scripts;
                    e = t[t.length - 1]
                }
                return e
            }();

            return e["apikey"] = n.getAttribute("apikey") || 1

        }
    ]);


});