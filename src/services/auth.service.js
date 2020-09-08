import apiService from './api.service';

const authService = {
  post(resource, data = {}) {
    return apiService.post(`auth/${resource}`, data);
  },
};

export default authService;
