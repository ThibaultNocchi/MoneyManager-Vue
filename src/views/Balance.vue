<template>
  <div class="balance my-2">

    <h1>Dues and debts</h1>
    <list-debts class="my-2"></list-debts>

  </div>
</template>

<script>
import ListDebts from '@/components/ListDebts.vue'
export default {
  name: 'balance',
  components: {
    ListDebts
  }
}
</script>
