<template>

  <div class="spendings my-2">

    <h1 class="my-2">Spendings</h1>
    <list-spendings class="my-2" ref="spendings" />

  </div>

</template>

<script>
import ListSpendings from '@/components/ListSpendings.vue'
export default {
  name: 'spendings',
  components: {
    ListSpendings
  }
}
</script>
