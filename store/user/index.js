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
  async handleLogin({commit}, data) {
    await this.$axios.post('', {
      email: data.email,
      password: data.password
    })
    .then(res => {
      if(res.data.token) {
        commit('SET_TOKEN', res.data.token);
        commit('SET_TYPE', 'success');
        Cookie.set('token', res.data.token);
      } else if(res.data.error){
        commit('SET_MSG', res.data.error.message);
      } else {
        commit('SET_MSG', res.data.message);
      }
    })
  },  
// Logout
  async handleLogOut({commit}) {
    await commit('SET_TOKEN', '');
    Cookie.remove('token');
  }
}