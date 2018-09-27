import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'homepage',
    components: {
      default: () => ({ component: import('../components/pages/Homepage.vue') })
    }
  }, {
    path: '/reservation',
    name: 'reservation',
    components: {
      default: () => ({ component: import('../components/pages/Reservation.vue') })
    }
  }, {
    path: '*',
    redirect: '/'
  }]
})