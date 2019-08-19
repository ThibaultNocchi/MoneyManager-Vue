import Vue from 'vue'
import Vuex from 'vuex'
import vueLocalstorage from 'vue-localstorage'

Vue.use(vueLocalstorage)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: JSON.parse(Vue.localStorage.get('people', '[]'))
  },
  mutations: {

  },
  actions: {

  }
})
