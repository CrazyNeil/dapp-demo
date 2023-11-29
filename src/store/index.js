import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

/**
 * init Vuex
 *
 * @type {Store<{}>}
 */
const store = new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {

    user, // user

  },
})

export default store
