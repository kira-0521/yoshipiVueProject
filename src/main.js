import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 次に行くための処理
  next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
