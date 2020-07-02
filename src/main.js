import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();//事件总线

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
