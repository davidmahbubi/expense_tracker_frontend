import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () =>
      import(/* webpackChunkName: 'Auth' */ './../views/Auth/Auth.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () =>
          import(/* webpackChunkName: 'Login' */ './../views/Auth/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () =>
          import(
            /* webpackChunkName: 'Register' */ './../views/Auth/Register.vue'
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
