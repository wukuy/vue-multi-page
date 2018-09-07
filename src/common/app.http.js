import Axios from 'axios';
import config from './app.config.js'

class Http {
    constructor(opt) {
        opt.params = opt.data;

        this.instance = Axios.create({
            baseURL: config.host + config.api,
        });

        this.setInterceptors();
        return this.instance(opt);
    }

    setInterceptors() {
        // 添加请求拦截器
        this.instance.interceptors.request.use(function (config) {
            console.log('开始请求');
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        this.instance.interceptors.response.use(function (response) {
            console.log('结束请求');
            // 对响应数据做点什么
            return response.data;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
}

module.exports = async function (opt) {
    let result = await new Http(opt);

    if (result.code === '0' && !opt.rawData) {
        result = result.data
    }

    return result;
}