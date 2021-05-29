// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';
import VueSweetalert2 from 'vue-sweetalert2';
import  Global  from './lib/global'
import 'sweetalert2/dist/sweetalert2.css';
import VueSwal from 'vue-swal'


Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.use(IconsPlugin)

Vue.use(VueSwal)
Vue.use(Global);
Vue.config.productionTip = false
Vue.prototype.$HOST1 = "https://u14unzm89l.execute-api.us-east-1.amazonaws.com/" 
Vue.prototype.$ITEM_API = Vue.prototype.$HOST1  + "test/item/"
Vue.prototype.$WHOUSE_API = Vue.prototype.$HOST1  + "test/warehouse/"
Vue.prototype.$WHOUSE_API_LIST = Vue.prototype.$WHOUSE_API + "list-all-warehouse"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h( App ),
  template: '<App/>'
})
