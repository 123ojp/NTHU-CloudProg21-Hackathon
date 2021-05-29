import Vue from 'vue'
import Router from 'vue-router'
import jQuery from "jquery";
import Home from '../components/pages/Home'
import Register from '../components/pages/Register'
import Login from '../components/pages/Login'
import Items from '../components/pages/Items'
import ItemEdit from '../components/pages/ItemEdit'
import ItemDel from '../components/pages/ItemDel'
import ItemAdd from '../components/pages/ItemAdd'

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
  {
    path: '/item/',
    component: Items
  },
  {
    path: '/item/add',
    component: ItemAdd
  },
  {
    path: '/item/:id/edit',
    component: ItemEdit
  },
  {
    path: '/item/:id/del',
    component: ItemDel
  },
];
export default new Router ({
  //mode: 'history',
  routes
});