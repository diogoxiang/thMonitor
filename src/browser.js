/**
 * 这个是用于添加到html上的代码
 */
!(function (metaWindow, selector, d, wId) {
    if (!metaWindow[wId]) {
        metaWindow[wId] = {};
    }
    metaWindow['_error_storage_'] = [];
    metaWindow.ERROR_CONFIG = {
        client: "gv4fwjroys@da32d0d534010e7",
        imgUrl: "https://yz2-s-stg.taiheiot.com/cloud2.member.api/member/userInfo/errorMessage.do?",
        disableHook: true
    };
    function errorhandler() {
        metaWindow._error_storage_ && metaWindow._error_storage_.push([].slice.call(arguments));
    }
    metaWindow.addEventListener && metaWindow.addEventListener("error", errorhandler, true);
    with (selector) {
        with (body) {
            with (insertBefore(createElement("script"), firstChild)) {
                setAttribute("crossorigin", "", src = d);
            }
        }
    }
})(window, document, "./build/thmonitor.js", "__th");