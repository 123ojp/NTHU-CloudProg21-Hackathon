import Vue from 'vue'
import Router from 'vue-router'
import jQuery from "jquery";
import Home from '../components/pages/Home'
import Register from '../components/pages/Register'
import Login from '../components/pages/Login'
import Items from '../components/pages/Item/Items'
import ItemEdit from '../components/pages/Item/ItemEdit'
import ItemDel from '../components/pages/Item/ItemDel'
import ItemAdd from '../components/pages/Item/ItemAdd'
import Warehouse from '../components/pages/Warehouse/Warehouse'
import WarehouseAdd from '../components/pages/Warehouse/WarehouseAdd'
import WarehouseDel from '../components/pages/Warehouse/WarehouseDel'
import WarehouseEdit from '../components/pages/Warehouse/WarehouseEdit'

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
  {
    path: '/warehouse/',
    component: Warehouse
  },
  {
    path: '/warehouse/add',
    component: WarehouseAdd
  },
  {
    path: '/warehouse/:id/del',
    component: WarehouseDel
  },
  {
    path: '/warehouse/:id/edit',
    component: WarehouseEdit
  },
];
export default new Router ({
  //mode: 'history',
  routes
});