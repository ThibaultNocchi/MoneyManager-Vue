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
          <tr v-for="(spending, idx) in spendings" :key="idx">
            <td>{{spending.price}}</td>
            <td>{{spending.desc}}</td>
            <td>test</td>
          </tr>
        </tbody>
    </table>
    <div v-else>No spending to display.</div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      spendings: []
    }
  },
  methods: {
    refreshSpendings () {
      this.spendings = JSON.parse(Vue.localStorage.get('spendings', '[]')).reverse()
    }
  },
  mounted () {
    this.refreshSpendings()
  }
}
</script>
