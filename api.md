# 上报的功能的一些说明


## 参数分类:
resourceError
scriptError
ajaxError


## 上报的参数定义
  
  因有些参数 可能取不到, 或是 相对出现的 情况, 需要注意

```js 
        let reportMsg={
            client: `gv4fwjroys@da32d0d534010e7`, // 用来定义是 监控的所属项目及活动或是单品  规则是 如: '吉林@单品'
            object:`gv4fwjroys@da32d0d534010e7`, // 活动配置的Key   ,当没有活动的时候 就是跟 client 一致
            version: 0.0.1, // 前端上报JS,的版本号
            key:`1543371097193@EMxrJAYB`, // 随时间搓生成的 key 主要用来区分当次上报的 
            pageId: ``,  // 可以配置指定页面 的ID   可能为 null
            target:"resourceError", //  自定义的错误类型 scriptError / resourceError / ajaxError
            type: `error`, //  系统定义的错误类型 如未知的类型

            // 错误信息资料  也有可能为空 或是 null, 有些是相对出现的
            errorInfo:"resourceError = error", // 错误信息整合
            errorDoc: `http://localhost:9000/example/sd.jpg`, // 错误的内容
            page:"http://localhost:9000/example/",  // 错误的页面
            loadErrDoc:"http://localhost:9000/example/", // 错误页的文档 html js
            loadErrMsg: `<img src="sd.jpg" alt="">`,   // 错误的内容 

            msg: `Uncaught ReferenceError: jj is not defined`, //错误console
            errorDetail: `Uncaught ReferenceError: jj is not defined`, // 错误 detail
            errorLin: `10`, // 行 
            errorRow: `13`, // 列
            stack: `ReferenceError: jj is not defined    at http://localhost:9000/example/s.js:10:13`, //错误 stack  

            // 开启ajax 请求返回的错误, 配置不开启这个也有可能为空

            ajaxReturnCode:`201`, // 返回的请求的 Status Code
            ajaxReturnMsg:"", // 返回的Msg信息




            userToken:"", // 可能为空
            performanceMsg:'', // 用户打开页面的 渲染时间集
            tagName: `IMG`,// 错误的内容信息 可能为 null
            id: `null`,// 错误的内容信息 可能为 null
            className: `null`,// 错误的内容信息 可能为 null
            path: `/html/body/img`,// 错误的内容信息 可能为 null
            selector: `HTML > BODY:nth-child(2) > IMG:nth-child(4)`,// 错误的内容信息 可能为 null
            errorKey: `1500g840>`,// 这条错误的 KEY
            ua: `Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like GeckoChrome/69.0.3497.100 Safari/537.36`, // UA 信息
            wechatVersion: null, // 微信版本号  可能为 null
            protocol: `HTTP`, // 请求协议  可能为 null
            resolution: `1920*1080`, //用户的 分辨率  可能为 null
            netType: `null`,  // 网络  可能为 null
            operationTime: `2018-11-28T02:11:37.192Z`  // 时间, 可转换成时间搓

        }
```