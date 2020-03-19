/*
* axios的配置页面，具体配置方法可参考：https://www.kancloud.cn/yunye/axios/234845
* */

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'


// axios 配置
axios.defaults.baseURL = process.env.API_ROOT;


// 请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前，可以在这里处理数据或增加token等
  return config
}, (error) => {
  return Promise.reject(error)
});


// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// GET请求的例子
export const GET = params => {
  return axios.get(
    `/`,
    {
      params: params
    }).then(
      res => res
    )
};
// POST请求的例子
export const POST = params => {
  return axios.post(
    `/`,
    params
  ).then(
    res => res
  )
};
