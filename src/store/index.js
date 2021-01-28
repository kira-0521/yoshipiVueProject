import Vue from 'vue';
import Vuex from 'vuex';
import count from './module/count';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  // 名前空間の制御/被りを有効にする
  namespaced: true,
  // グローバル変数
  state: {
    message: "",
  },
  getters,
  mutations,
  actions,
  modules: {
    count,
  }
});

