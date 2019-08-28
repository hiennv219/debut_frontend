import LangdingPage from './landing/Index.vue';
import DebutIndex from './landing/DebutIndex.vue';
import Login from './landing/DebutIndex.vue';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: LangdingPage,
      name: 'LangdingPage',
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/debut',
      component: DebutIndex,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/test',
      component: DebutIndex,
    },
  ]
}
