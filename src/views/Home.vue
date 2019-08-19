<template>
  <div class="home">

    <h1 class="my-2">Home</h1>

    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">Recent spendings</h5>
        <list-spendings ref="spendings" :length="15" />
      </div>
    </div>

    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">New spending</h5>
        <new-spending />
      </div>
    </div>

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
  }
}
</script>
