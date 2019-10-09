import Vue from 'vue';
import Vuex from 'vuex';
import rf from '../requests/RequestFactory';
import AuthenticationUtils from '../AuthenticationUtils';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthenticated: AuthenticationUtils.isAuthenticated(),
    masterdata: {},
    appTitle: 'Project debut',
    supportedLocales: ['en', 'ko', 'zh', 'vi'],
    user: {},
  },
  getters: {
    setTitle(name) {

    }
  },
  mutations: {
    updateIsAuthenticated (state, data) {
      state.isAuthenticated = data;
    },
    updateUser (state, data) {
      state.user = data;
    }
  },
  actions: {
    getCurrentUser ({ commit }) {
      return new Promise((resolve) => {
        rf.getRequest('UserRequest').getCurrentUser().then((res) => {
          commit('updateUser', res.data);
          resolve(res.data);
        });
      });
    },
  },
});

export default store;
