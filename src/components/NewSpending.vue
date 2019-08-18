<template>
  <form v-on:submit.prevent="submit">
    <div class="form-row">
      <div class="col">
        <input type="text" id="new-spending-desc" class="form-control" placeholder="Description" v-model="desc"/>
      </div>
      <div class="col">
        <div class="input-group">
          <input type="number" min="0" step="0.01" id="new-spending-price" class="form-control" placeholder="0" required v-model="price" />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">€</span>
          </div>
        </div>
      </div>
      <div class="col">
        <button class="btn btn-primary">Add</button>
      </div>
    </div>
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
      if (!this.desc) {
        obj.desc = 'Not given'
      }
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
