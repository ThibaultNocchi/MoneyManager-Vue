<template>
  <form v-on:submit.prevent="submit">
    <div class="form-row">
      <div class="col-md form-group">
        <input type="text" id="new-spending-desc" class="form-control" placeholder="Description" v-model="desc"/>
      </div>
      <div class="col-md form-group">
        <div class="input-group">
          <input type="number" min="0" step="0.01" id="new-spending-price" class="form-control" placeholder="0" required v-model="price" />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">€</span>
          </div>
        </div>
      </div>
      <div class="col-md form-group">
        <input type="date" class="form-control" required v-model="date" />
      </div>
    </div>
    <div class="form-row">
      <div class="col-md form-group">
        <label for="paid">Who paid?</label>
        <people-select id="paid" class="form-control" enableMe ref="paid_by"></people-select>
      </div>
      <div class="col-md form-group">
        <label for="paidTo">For who?</label>
        <people-select id="paidTo" class="form-control" multiple enableMe ref="paid_for"></people-select>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md form-group">
        <button class="btn btn-primary float-right">Add</button>
      </div>
    </div>
  </form>
</template>

<script>

import moment from 'moment'
import PeopleSelect from '@/components/PeopleSelect.vue'

export default {

  components: {
    PeopleSelect
  },

  data () {
    return this.defaultData()
  },

  methods: {

    submit () {
      let to = this.$refs.paid_for.selected
      if (typeof to === 'string') to = [to]
      let obj = { price: this.price, desc: this.desc, date: this.date, by: this.$refs.paid_by.selected, to: to }
      this.$store.commit('add_spending', obj)
      this.resetData()
      this.$store.dispatch('add_owed', { by: obj.by, to: obj.to, sum: obj.price })
    },

    defaultData () {
      return {
        desc: null,
        price: 0,
        date: moment().format('GGGG-MM-DD')
      }
    },

    resetData () {
      Object.assign(this.$data, this.defaultData())
    }

  }

}
</script>
