<template>
  <form v-on:submit.prevent="submit">
    <div class="form-group">
      <label for="new-spending-desc">Description</label>
      <input type="text" id="new-spending-desc" class="form-control" v-model="desc"/>
    </div>
    <div class="form-group">
      <label for="new-spending-price">Price</label>
      <div class="input-group">
        <input type="number" min="0" step="0.01" id="new-spending-price" class="form-control" placeholder="0" required v-model="price" />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">€</span>
        </div>
      </div>
    </div>
    <button class="btn btn-primary">Add</button>
  </form>
</template>

<script>

import Vue from 'vue'

export default {
  data () {
    return {
      desc: null,
      price: 0
    }
  },
  methods: {
    submit () {
      let obj = { price: this.price, desc: this.desc }
      let current = JSON.parse(Vue.localStorage.get('spendings', '[]'))
      current.push(obj)
      Vue.localStorage.set('spendings', JSON.stringify(current))
      this.price = null
      this.desc = null
      this.$emit('newSpending')
    }
  }
}
</script>
