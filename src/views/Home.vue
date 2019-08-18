<template>
  <div class="home">
    <h1>Home</h1>
    <list-spendings />
  </div>
</template>

<script>
import ListSpendings from '@/components/ListSpendings.vue'
export default {
  name: 'home',
  components: {
    ListSpendings
  }
}
</script>
