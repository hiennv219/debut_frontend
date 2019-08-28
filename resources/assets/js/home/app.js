/**
* First we will load all of this project's JavaScript dependencies which
* includes Vue and other libraries. It is a great starting point when
* building robust, powerful web applications using Vue and Laravel.
*/
import 'common/bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Routers from './routes';
import VeeValidate, { Validator } from 'vee-validate';
import VTooltip from 'v-tooltip';
import Toasted from 'vue-toasted';

import store from '../common/store';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VTooltip);

const router = new VueRouter(Routers);
const i18n = window.i18n;

Vue.use(VeeValidate);
Vue.use(VTooltip);
Vue.use(Toasted);

window.app = new Vue({
  i18n,
  router,
  store,
  render (createElement) {
   return createElement(App);
  },
  created () {
  },
}).$mount('#app');
