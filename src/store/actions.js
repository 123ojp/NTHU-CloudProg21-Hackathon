import Vue from 'vue'
import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionSetLoginInfo = ({ commit }, data) => {
  console.log('actionLogin');
  commit(types.SET_USER_INFO,data);
}
/*
export const actionLogout = ({ commit }) => {
  console.log('actionDecrease');
  commit(types.DECREASE);
}*/