import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'homepage',
    components: {
      default: () => ({ component: import('../pages/Homepage.vue') })
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