import error from './gather/error';
import {
    stringfy,
    extend
} from './utils/index';

// 监控ajax
// require("./api/ajaxhook")(window);
import ajaxhook from './api/apihook';

// 初始化
ajaxhook(window)

window.hookAjax(
    // hook functions and callbacks of XMLHttpRequest object
    {
        onreadystatechange: function (xhr) {
            console.log("onreadystatechange called: %O", xhr)
            //return true
        },
        onload: function (xhr) {
            console.log("onload called: %O", xhr)
            xhr.responseText = "hook" + xhr.responseText;
            //return true;
        },
        open: function (arg, xhr) {
            console.log("open called: method:%s,url:%s,async:%s", arg[0], arg[1], arg[2],
                xhr)
            arg[1] += "?hook_tag=1";
            //统一添加请求头

        },
        send: function (arg, xhr) {
            console.log("send called: %O", arg[0])
            xhr.setRequestHeader("_custom_header_", "ajaxhook")
        },
        setRequestHeader: function (arg, xhr) {
            console.log("setRequestHeader called!", arg)
        },

        // hook attributes of XMLHttpRequest object
        timeout: {
            setter: function (v, xhr) {
                //timeout shouldn't exceed 10s
                return Math.max(v, 1000);
            }
        }
    }
);



// console.log(object);

let config = {
    client: '',
    imgUrl: '',
    level: '0',
    repeat: '5', // 重复上报次数(对于同一个错误超过多少次不上报),
    version: '0.0.1',
}


config = extend(config, window['ERROR_CONFIG']);
error(config);
