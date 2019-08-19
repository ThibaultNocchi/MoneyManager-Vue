import Vue from 'vue'
import Vuex from 'vuex'
import vueLocalstorage from 'vue-localstorage'
import moment from 'moment'

Vue.use(vueLocalstorage)
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    people: JSON.parse(Vue.localStorage.get('people', '[]')),
    spendings: JSON.parse(Vue.localStorage.get('spendings', '[]'))
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
    },

    delete_every_people (state) {
      state.people.splice(0)
      Vue.localStorage.set('people', JSON.stringify(state.people))
    },

    add_spending (state, obj) {
      if (!obj.desc) {
        obj.desc = 'Not given'
      }

      state.spendings.push(obj)
      state.spendings.sort((a, b) => {
        let dateA = moment(a.date)
        let dateB = moment(b.date)
        if (dateA.isBefore(dateB)) return -1
        else if (dateB.isBefore(dateA)) return 1
        else return 0
      })

      Vue.localStorage.set('spendings', JSON.stringify(state.spendings))
    },

    remove_spending (state, idx) {
      state.spendings.splice(idx, 1)
      Vue.localStorage.set('spendings', JSON.stringify(state.spendings))
    },

    delete_every_spending (state) {
      state.spendings.splice(0)
      Vue.localStorage.set('spendings', JSON.stringify(state.spendings))
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
    },

    remove_everything (context) {
      context.commit('delete_every_people')
      context.commit('delete_every_spending')
    }

  }
})
