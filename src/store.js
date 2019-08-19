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

    add_people (state, name) {
      state.people.push(name)
      state.people.sort()
      Vue.localStorage.set('people', JSON.stringify(state.people))
    },

    remove_people (state, name) {
      let index = state.people.indexOf(name)
      if (index >= 0) state.people.splice(index, 1)
      Vue.localStorage.set('people', JSON.stringify(state.people))
    }

  },

  actions: {

    add_people (context, name) {
      return new Promise((resolve, reject) => {
        if (!context.state.people.includes(name) && name !== '' && name !== 'Me') {
          context.commit('add_people', name)
          resolve()
        } else {
          reject(new Error('Can\'t save new name'))
        }
      })
    }

  }
})
