import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    masterdata: {},
    appTitle: 'Project debut',
    supportedLocales: ['en', 'ko', 'zh', 'vi'],
  },
  getters: {
    setTitle(name) {

    }
  },
  mutations: {
    updateIsAuthenticated (state, data) {
      state.isAuthenticated = data;
    },
  },
  actions: {

  },
});

export default store;
