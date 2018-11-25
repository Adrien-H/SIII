import Vue from 'vue'
import VueAuth from '@websanova/vue-auth'

Vue.use(VueAuth, {
  auth: {
    request (req, token) {
      this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
    },

    response (res) {
      if (res.data.token) {
        const token = res.data.token.split(/Bearer:?\s?/i);

        return token[token.length > 1 ? 1 : 0].trim();
      }
    }
  },
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  parseUserData (data) {
    return data || {}
  },
  loginData: {
    url: '/login',
    method: 'POST',
    redirect: '/',
    fetchUser: false
  },
  registerData: {
    url: '/register',
    method: 'POST',
    redirect: '/login'
  },
  fetchData: {
    url: '/users/me',
    method: 'GET',
    enabled: true
  },
  refreshData: {
    url: '/users/me',
    method: 'GET',
    enabled: true,
    interval: 30
  }
})
