import Vue from 'vue';
import { API_BASE_URL } from './../config';
import { getToken } from './token.service';

const apiService = {
  init() {
    Vue.axios.defaults.common = {
      Authorization: `Bearer ${getToken()}`,
    };
  },
  get(url) {
    return Vue.axios.get(`${API_BASE_URL}/${url}`);
  },
  post(url, data) {
    return Vue.axios.post(`${API_BASE_URL}/${url}`, data);
  },
};

export default apiService;
