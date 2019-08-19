import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLocalstorage from 'vue-localstorage'
import 'bootstrap'

Vue.use(vueLocalstorage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
