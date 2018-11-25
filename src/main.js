import Vue from 'vue'

import router from './router'
import store from './store'

import './plugins/toast'
import './plugins/axios'
import './plugins/vue-auth'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(require('./App.vue').default)
})
