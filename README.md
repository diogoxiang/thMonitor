# 前端监控-浏览器端

主要用于用户浏览器端的错误监控

## 浏览器端

    ```html
        <script>
            ....
        </script>
    ```
将以上代码复制到浏览器```</head>```上方。

## 打包发布

    ```js
        npm run build
    ```

## 说明

    ```js
    export interface config {
        client: string; // 项目上报id
        imgUrl: string; // 请求url
        level: Number; // 等级
        repeat: Number; // 重复上报次数
        ignore: Array<RegExp | Function>; // 过滤条件
    }
    ```