//对axios二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

//创建axios实例
const request = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});
//请求拦截器
request.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});
//响应拦截器
request.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//导出
export default request;
