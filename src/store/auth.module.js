import authService from './../services/auth.service';
import { POST_LOGIN, POST_REGISTER } from './actions.type';
import { SAVE_TOKEN } from './mutations.type';
import { setToken } from './../services/token.service';

const state = {
  token: '',
};

const getters = {};

const mutations = {
  [SAVE_TOKEN](state, token) {
    state.token = token;
  },
};

const actions = {
  [POST_LOGIN]({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      authService
        .post('signin', credentials)
        .then(({ data }) => {
          setToken(data.data.token);
          commit(SAVE_TOKEN, data.data.token);
          resolve(data);
        })
        .catch(reject);
    });
  },
  [POST_REGISTER](ctx, data) {
    return new Promise((resolve, reject) => {
      authService
        .post('signup', data)
        .then(({ data }) => {
          console.log(data);
          resolve(data);
        })
        .catch(reject);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
