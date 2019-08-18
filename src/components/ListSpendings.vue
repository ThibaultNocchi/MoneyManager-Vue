<template>
    <table class="table" v-if="spendings.length > 0">
        <thead>
            <tr>
                <th scope="col">Price</th>
                <th scope="col">Desc.</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(spending, idx) in spendings_reversed" :key="idx">
            <td>{{spending.price}}</td>
            <td>{{spending.desc}}</td>
            <td><click-icon @click="removeElement(spendings_reversed.length-idx-1)">clear</click-icon></td>
          </tr>
        </tbody>
    </table>
    <div v-else>No spending to display.</div>
</template>

<script>
import Vue from 'vue'
import ClickIcon from '@/components/ClickIcon'
export default {
  components: {
    ClickIcon
  },
  data () {
    return {
      spendings: []
    }
  },
  computed: {
    spendings_reversed () {
      return this.spendings.slice().reverse()
    }
  },
  methods: {
    refreshSpendings () {
      this.spendings = JSON.parse(Vue.localStorage.get('spendings', '[]'))
    },
    removeElement (idx) {
      this.spendings.splice(idx, 1)
      Vue.localStorage.set('spendings', JSON.stringify(this.spendings))
    }
  },
  mounted () {
    this.refreshSpendings()
  }
}
</script>
