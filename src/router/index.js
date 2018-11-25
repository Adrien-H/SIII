import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'homepage',
    components: {
      default: () => ({ component: import('../pages/Homepage.vue') })
    }
  }, {
    path: '/login',
    name: 'login',
    components: {
      default: resolve => require(['../pages/Login.vue'], resolve)
    }
  }, {
    path: '/reservation',
    name: 'reservation',
    components: {
      default: () => ({ component: import('../pages/Reservation.vue') })
    }
  }, {
    path: '*',
    redirect: '/'
  }]
})

Vue.router = router

export default router