<template>
  <div class="home my-2">

    <h1 class="my-2">Home</h1>

    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">Most important debts and dues</h5>
        <list-debts class="my-2" :length="2" />
      </div>
    </div>

    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">Recent spendings</h5>
        <list-spendings class="my-2" :length="15" />
      </div>
    </div>

    <div class="card my-2">
      <div class="card-body">
        <h5 class="card-title">New spending</h5>
        <new-spending class="my-2" />
      </div>
    </div>

  </div>
</template>

<script>
import ListSpendings from '@/components/ListSpendings.vue'
import NewSpending from '@/components/NewSpending.vue'
import ListDebts from '@/components/ListDebts.vue'
export default {
  name: 'home',
  components: {
    ListSpendings,
    NewSpending,
    ListDebts
  }
}
</script>
