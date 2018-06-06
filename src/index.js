import error from './gather/error';
import { stringfy } from './utils/index';
import { extend } from './utils/index';

let config = {
    client: '',
    imgUrl: '',
    level: '0',
    repeat: '5', // 重复上报次数(对于同一个 js错误超过多少次不上报),
    version: '0.0.1',
}

config = extend(config, window['ERROR_CONFIG']);
error(config);
