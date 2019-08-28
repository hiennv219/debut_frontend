import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    masterdata: {},
    appTitle: 'Project debut',
  },
  getters: {
    setTitle(name) {

    }
  },
  mutations: {

  },
  actions: {

  },
});

export default store;
