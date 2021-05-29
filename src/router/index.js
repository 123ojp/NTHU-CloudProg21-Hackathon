import Vue from 'vue'
import Router from 'vue-router'
import jQuery from "jquery";
import store from '../store';

import Home from '../components/pages/Home'
import Register from '../components/pages/Register'
import Login from '../components/pages/Login'
import Profile from '../components/pages/Profile'
import Items from '../components/pages/Item/Items'
import ItemEdit from '../components/pages/Item/ItemEdit'
import ItemDel from '../components/pages/Item/ItemDel'
import ItemAdd from '../components/pages/Item/ItemAdd'
import Warehouse from '../components/pages/Warehouse/Warehouse'
import WarehouseAdd from '../components/pages/Warehouse/WarehouseAdd'
import WarehouseDel from '../components/pages/Warehouse/WarehouseDel'
import WarehouseEdit from '../components/pages/Warehouse/WarehouseEdit'
import Subscribe from '../components/pages/Subscribe/Subscribe'
import SubscribeAdd from '../components/pages/Subscribe/SubscribeAdd'
import SubscribeDel from '../components/pages/Subscribe/SubscribeDel'

Vue.use(Router)

let routes = [
  {
      path: '/',
      component: Home,
      meta: { requiresAuth: false },
  },
  {
    path: '/register',
    component: Register,
    meta: { requiresAuth: false },
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/item/',
    component: Items,
    meta: { requiresAuth: true },
  },
  {
    path: '/item/add',
    component: ItemAdd,
    meta: { requiresAuth: true },
  },
  {
    path: '/item/:id/edit',
    component: ItemEdit,
    meta: { requiresAuth: true },
  },
  {
    path: '/item/:id/del',
    component: ItemDel,
    meta: { requiresAuth: true },
  },
  {
    path: '/warehouse/',
    component: Warehouse,
    meta: { requiresAuth: true },
  },
  {
    path: '/warehouse/add',
    component: WarehouseAdd,
    meta: { requiresAuth: true },
  },
  {
    path: '/warehouse/:id/del',
    component: WarehouseDel,
    meta: { requiresAuth: true },
  },
  {
    path: '/warehouse/:id/edit',
    component: WarehouseEdit,
    meta: { requiresAuth: true },
  },
  {
    path: '/subscribe/',
    component: Subscribe,
    meta: { requiresAuth: true },
  },
  {
    path: '/subscribe/add',
    component: SubscribeAdd,
    meta: { requiresAuth: true },
  },
  {
    path: '/subscribe/:id/del',
    component: SubscribeDel,
    meta: { requiresAuth: true },
  },
];
var router = new Router ({
  //mode: 'history',
  routes
});
router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath);
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    // 如果沒有 islogin
    if ( !store.state.login_info.islogin) {
      // 轉跳到 login page
      next({ path: '/login' });
    } else {
      next(); // 往下繼續執行
    }
  } else {
    next(); // 往下繼續執行
  }
});
export default router;