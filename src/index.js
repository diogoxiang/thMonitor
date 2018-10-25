import error from './gather/error';
import {
    stringfy,
    extend
} from './utils/index';

// 监控ajax
// import hookAjax from "./utils/ajax"

let config = {
    client: '',
    imgUrl: '',
    level: '0',
    repeat: '5', // 重复上报次数(对于同一个错误超过多少次不上报),
    version: '0.0.1',
}


config = extend(config, window['ERROR_CONFIG']);
error(config);
