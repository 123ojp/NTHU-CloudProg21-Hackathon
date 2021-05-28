import Vue from 'vue'
import Router from 'vue-router'
import jQuery from "jquery";
import Home from '../components/pages/Home'
import Register from '../components/pages/Register'
import Login from '../components/pages/Login'

Vue.use(Router)

let routes = [
  {
      path: '/',
      component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
];
export default new Router ({
  //mode: 'history',
  routes
});