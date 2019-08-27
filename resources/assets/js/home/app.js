 /**
  * First we will load all of this project's JavaScript dependencies which
  * includes Vue and other libraries. It is a great starting point when
  * building robust, powerful web applications using Vue and Laravel.
  */
 import 'common/bootstrap';
 import Vue from 'vue';
 import VueRouter from 'vue-router';
 import Routers from './routes';

 import AppPage from './components/AppPage.vue';

 Vue.use(VueRouter);

 const router = new VueRouter(Routers);

 window.app = new Vue({
   router,
   render (createElement) {
     return createElement(AppPage);
   },
   created () {
   },
 }).$mount('#app');
