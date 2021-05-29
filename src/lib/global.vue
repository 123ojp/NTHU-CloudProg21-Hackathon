export default {
  install(Vue, options) {
    Vue.prototype.$api_setting {
      text = function () { //全域性函式1
        alert('執行成功1');
      }
    }
  }
}
