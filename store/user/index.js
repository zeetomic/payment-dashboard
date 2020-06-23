import Cookie from 'js-cookie';

export const state = () => ({
  msg: '',
  type: '',

  token: '',
  user: []
})

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_MSG(state, payload) {
    state.msg = payload;
  },
  SET_TYPE(state, payload) {
    state.type = payload;
  },
  SET_USER(state, payload) {
    state.user = payload;
  }
}

export const actions = {
// Login
  async handleLogin() {
    await this.$axios.post()
  },  
// Logout
  async handleLogOut({commit}) {
    await commit('SET_TOKEN', '');
    Cookie.remove('token');
  }
}