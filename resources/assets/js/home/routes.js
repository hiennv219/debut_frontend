import LangdingPage from './landing/Index.vue';
import DebutIndex from './landing/DebutIndex.vue';
import Login from './landing/DebutIndex.vue';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LangdingPage,
    },
    {
      path: '/login',
      component: Login,
    },
  ]
}
