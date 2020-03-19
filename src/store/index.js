/*
*这里是Vuex的配置，具体的使用说明，可参考网站如下：
* VueJS中学习使用Vuex详解：https://segmentfault.com/a/1190000015782272
* Vuex官方文档：https://vuex.vuejs.org/zh/
* */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {//要设置的全局访问的state对象

};
const getters = {//实时监听state值的变化(最新状态)

};
const mutations = {//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);

};
const actions = {//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性

};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
