import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import apiService from './services/api.service';

import './plugins/vue-axios';
import './plugins/notiflix';

Vue.config.productionTip = false;

apiService.init();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
