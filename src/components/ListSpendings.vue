<template>
  <div class="list-spendings">
    <div class="table-responsive" v-if="spendings_reversed.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Price</th>
            <th scope="col">Desc.</th>
            <th scope="col">Date</th>
            <th scope="col">Paid by</th>
            <th scope="col">Paid for</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(spending, idx) in spendings_reversed" :key="idx">
            <td>{{spending.price}} €</td>
            <td>{{spending.desc}}</td>
            <td>{{spending.date}}</td>
            <td>{{spending.by}}</td>
            <td>{{spending.to.join(', ')}}</td>
            <td><click-icon @click="removeElement(spendings_reversed.length-idx-1)">clear</click-icon></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>No spending to display.</div>
  </div>
</template>

<script>
import ClickIcon from '@/components/ClickIcon'
export default {
  components: {
    ClickIcon
  },
  computed: {
    spendings_reversed () {
      let result = this.$store.state.spendings.slice().reverse()
      if (this.length !== undefined) {
        result = result.slice(0, this.length)
      }
      return result
    }
  },
  methods: {
    removeElement (idx) {
      this.$store.dispatch('remove_spending', idx)
    }
  },
  props: {
    length: Number
  }
}
</script>
