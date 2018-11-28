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


### Error types
Besides the generic Error constructor, there are seven other core error constructors in JavaScript. For client-side exceptions, see Exception handling statements.

- EvalError
Creates an instance representing an error that occurs regarding the global function eval().
- InternalError 
Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".
- RangeError
Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
- ReferenceError 引用错误,一般由参数未定义引起
Creates an instance representing an error that occurs when de-referencing an invalid reference.
- SyntaxError 语法错误
Creates an instance representing a syntax error that occurs while parsing code in eval().
- TypeError
Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- URIError
Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.



POST http://api.cashtoutiao.com/frontend/collection/check?userId=124570239&loginId=730f70c3f4694abdae27ab47b720c2f3 HTTP/1.1 User-Agent: Dalvik/2.1.0 (Linux; U; Android 8.0.0; MI 6 MIUI/V10.0.2.0.OCACNFH) hsp Content-Type: application/encrypted-json Accept: application/encrypted-json Host: api.cashtoutiao.com Connection: Keep-Alive Accept-Encoding: gzip Content-Length: 128  ���ڟ�a���"�"^�H�����ul�}� ����j7��|�[$AG3�&�'+}�=MO/�֍��tn���F��W�m���f���P	8����UӁA/^�I2�3�5"����ɭ��� HTTP/1.1 200 OK Server: Apache-Coyote/1.1 Content-Type: application/encrypted-json;charset=UTF-8 Transfer-Encoding: chunked Date: Fri, 26 Oct 2018 08:10:54 GMT  20 ����a�'�����RE5�6�qH7�pa��Sd 0
