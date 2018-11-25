import Vue from 'vue'

import router from './router'
import store from './store'

import i18n from './plugins/i18n'

import './plugins/toast'
import './plugins/axios'
import './plugins/auth'
import './plugins/mapbox-gl'

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(require('./App.vue').default)
})
