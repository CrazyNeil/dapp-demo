// init state
const state = {
  // token
  token: '',

  // userinfo
  user: {},
}

// mutations
const mutations = {
  // set token
  login (state, token) {
    state.token = token
  },

  // set userinfo
  updateProfile (state, user) {
    state.user = user
  },

  // logout
  logout (state) {
    state.token = ''
    state.user = ''
  },
}

// actions
const actions = {
  // set token
  login: ({ commit }, token) => commit('login', token),

  // set userinfo
  updateProfile: ({ commit }, user) => commit('updateProfile', user),

  // logout
  logout: ({ commit }) => commit('logout'),
}

export default {
  state,

  mutations,

  actions,
}
