import Cookie from 'js-cookie';
import { async } from 'rsvp';

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
    await this.$axios.post('/pub/v1/partnerlogin', {
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
// Payment
  async handlePayment({commit}, data) {
    await this.$axios.post('/apis/v1/payment', {
      id: data.id,
      apikey: data.apikey,
      apisec: data.apisec,
      destination: data.destination,
      asset_code: data.asset_code,
      amount: data.amount,
      memo: data.amount
    })
    .then(async(res) => {
      if(!res.data.message.error) {
        await commit('SET_MSG', res.data.message);
        await commit('SET_TYPE', 'success');
      } else {
        await commit('SET_MSG', res.data.message.error);
        await commit('SET_TYPE', 'error');
      }
    })
  },
// Getwallet
  async handleGetWallet({commit}, data) {
    await this.$axios.post('/apis/v1/get-wallet', {
      apikey: data.apikey,
      apisec: data.apisec
    })
    .then(async(res) => {

    })
  },
// Logout
  async handleLogOut({commit}) {
    await commit('SET_TOKEN', '');
    Cookie.remove('token');
  }
}