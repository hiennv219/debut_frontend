import BasePage from './components/BasePage.vue';
import LangdingPage from './pages/landing/Index.vue';
import DebutIndex from './pages/landing/DebutIndex.vue';
import Login from './pages/auth/Login.vue';
import Register from './pages/auth/Register.vue';
import PrivateSpaceIndex from './pages/private/Index.vue';
import GoogleAuthenticator from './pages/account/GoogleAuthenticator.vue';

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasePage,
      name: 'BasePage',
      children: [
        {
          path: '/',
          component: LangdingPage,
          name: 'LangdingPage',
        },
        {
          path: '/login',
          component: Login,
          name: 'Login'
        },
        {
          path: '/register',
          component: Register,
          name: 'Register'
        },
        {
          path: '/homie',
          component: DebutIndex,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/private-space',
          component: PrivateSpaceIndex,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/google-authenticator',
          component: GoogleAuthenticator,
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
  ]
}
