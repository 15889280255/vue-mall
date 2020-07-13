import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import toast from './components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();//事件总线

Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
