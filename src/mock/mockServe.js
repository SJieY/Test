import Mock from "mockjs";

import banner from "./banner";
import floor from "./floors";

// 配置拦截ajax请求的相应，拦截的是get请求
// 第一个参数：拦截的url地址
// 第二个参数：拦截的请求方式
// 第三个参数：拦截的数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });