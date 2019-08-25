import Vue from 'vue'
import Vuex from 'vuex'
import vueLocalstorage from 'vue-localstorage'
import moment from 'moment'

Vue.use(vueLocalstorage)
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    people: JSON.parse(Vue.localStorage.get('people', '[]')),
    spendings: JSON.parse(Vue.localStorage.get('spendings', '[]')),
    owed: JSON.parse(Vue.localStorage.get('owed', '{}'))
  },

  mutations: {

    add_owed (state, { by, to, sum }) {
      if (!(by === 'Me' && to === 'Me')) {
        let other
        if (by === 'Me') {
          other = to
        } else if (to === 'Me') {
          other = by
          sum *= -1
        }
        if (other !== undefined && other !== 'Me') {
          if (!(other in state.owed)) {
            Vue.set(state.owed, other, 0)
          }
          Vue.set(state.owed, other, state.owed[other] + sum)
          if (state.owed[other] === 0) Vue.delete(state.owed, other)
        }
        Vue.localStorage.set('owed', JSON.stringify(state.owed))
      }
    },

    delete_every_owed (state) {
      state.owed = {}
      Vue.localStorage.set('owed', JSON.stringify(state.owed))
    },

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

    add_owed (context, { by, to, sum }) {
      let initialToLength = to.length
      let owedByEach = Math.floor(sum / initialToLength * 100) / 100
      to.forEach(element => {
        context.commit('add_owed', { by: by, to: element, sum: owedByEach })
      })
    },

    remove_spending (context, idx) {
      let item = context.state.spendings[idx]
      let owedByEach = (Math.floor(item.price / item.to.length * 100) / 100) * -1
      item.to.forEach(element => {
        context.commit('add_owed', { by: item.by, to: element, sum: owedByEach })
      })
      context.commit('remove_spending', idx)
    },

    remove_everything (context) {
      context.commit('delete_every_people')
      context.commit('delete_every_spending')
      context.commit('delete_every_owed')
    }

  }
})
