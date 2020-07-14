import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue();

// 移动端300ms延迟
FastClick.attach(document.body)

//图片懒加载
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/timg.gif')
})

Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
