import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'
// Vue.config.productionTip = false

fastclick.attach(document.body)
/* eslint-disable no-new */

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
