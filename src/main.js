import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import vueWechatTitle from 'vue-wechat-title'
// import VueLazyload from 'vue-lazyload'
import store from './store'
import Vuex from 'vuex'

import 'common/stylus/reset.styl'
import 'common/stylus/swiper.styl'

fastclick.attach(document.body)

Vue.use(Vuex)
Vue.use(vueWechatTitle)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
