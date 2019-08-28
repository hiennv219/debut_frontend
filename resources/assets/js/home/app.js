/**
* First we will load all of this project's JavaScript dependencies which
* includes Vue and other libraries. It is a great starting point when
* building robust, powerful web applications using Vue and Laravel.
*/
import 'common/bootstrap';
import Vue from 'vue';
import VueBroadcast from 'common/VueBroadcast';
import VueRouter from 'vue-router';
import Routers from './routes';
import GlobalSocket from './GlobalSocket';

import AuthenticationUtils from 'common/AuthenticationUtils';

import VeeValidate, { Validator } from 'vee-validate';
// import VTooltip from 'v-tooltip';
// import VueLoading from 'vue-loading-template';
// import FullScreen from 'vue-fullscreen';
// import Toasted from 'vue-toasted';
// import VueQrcode from '@chenfengyuan/vue-qrcode';
// import VModal from 'vue-js-modal';
import vClickOutside from 'v-click-outside';
// import ClickOutside from './directives/click_outside.js';


import store from '../common/store';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VueBroadcast);



// Vue.component(VueQrcode.name, VueQrcode);
// Vue.use(VeeValidate);
// Vue.use(VTooltip);
// Vue.use(Toasted);
// Vue.use(VModal);
// Vue.use(VueQrcode);
// Vue.use(FullScreen);
// Vue.use(VueLoading);
// Vue.directive('click-outside', ClickOutside);
Vue.use(vClickOutside);

const router = new VueRouter(Routers);
const i18n = window.i18n;

window.isAuthenticated = AuthenticationUtils.isAuthenticated();
window.GlobalSocket = new GlobalSocket();

router.beforeEach((to, from, next) => {
  document.title = 'Debut';
  // if (to) {
  //   path = to.name;
  // }
  const isAuthenticated = window.app.$store ? window.app.$store.state.isAuthenticated : window.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    window.location.href = '/login';
    return;
  }
  if (to.meta.requiresGuest && window.isAuthenticated) {
    window.location.href = '/';
    return;
  }
  return next();
});

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
