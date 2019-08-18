<template>
  <div class="home">
    <h1>Home</h1>
    <list-spendings ref="spendings" />
    <new-spending @newSpending="triggerRefresh" />
  </div>
</template>

<script>
import ListSpendings from '@/components/ListSpendings.vue'
import NewSpending from '@/components/NewSpending.vue'
export default {
  name: 'home',
  components: {
    ListSpendings,
    NewSpending
  },
  methods: {
    triggerRefresh () {
      this.$refs.spendings.refreshSpendings()
    }
  }
}
</script>
