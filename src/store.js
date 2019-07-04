import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiURL: "https://electron-todo-api.herokuapp.com/api"
  },
  mutations: {},
  actions: {}
});
