import Toast from './Toast.vue'
const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2.new 创建一个组件对象
  const toast = new toastContrustor()

  // 3.将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  // 4.这是toast.$el 就是上面创建的div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj