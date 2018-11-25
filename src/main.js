// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化css
import './assets/styles/reset.css'
// 1px像素问题
import './assets/styles/border.css'
//移动端点击延迟问题
import fastClick from 'fastclick'
//引入iconfont
import './assets/styles/iconfont.css'

fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
