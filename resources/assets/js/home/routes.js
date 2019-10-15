import BasePage from './components/BasePage.vue';
import LangdingPage from './pages/landing/Index.vue';
import Login from './pages/auth/Login.vue';
import Register from './pages/auth/Register.vue';
import PrivateIndex from './pages/private/Index.vue';
import SocialIndex from './pages/social/Index.vue';
import SingleNote from './pages/note/Single.vue';
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
          path: '/private',
          component: PrivateIndex,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/social',
          component: SocialIndex,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/notes/:id',
          component: SingleNote,
          name: 'NotePage',
        },
        {
          path: '/authenticator',
          component: GoogleAuthenticator,
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
  ]
}
