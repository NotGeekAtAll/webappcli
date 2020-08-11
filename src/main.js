import Vue from 'vue'
import App from './App.vue'

import './style/index.less'

// vant 样式
// import 'vant/lib/index.css';

import router from './router'
import ajax from './utils/ajax'

Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
