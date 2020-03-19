// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(iView);
// 全局指令
// 用来配置某一页的title
// 如需使用，在页面的最外层div上添加指令：v-title="页面title"
Vue.directive('title', {
  inserted(el, binding) {
    document.title = binding.value;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
