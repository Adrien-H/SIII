import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

Vue.use(VueAxios, axios)