<template>
  <div class="manage">
    <h1>Manage people</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Add or remove someone</h5>
        <div class="card-text">

          <form @submit.prevent="remove_name">
            <div class="form-row align-items-end">
              <div class="form-group col">
                <people-select ref="select" class="form-control"></people-select>
              </div>
              <div class="form-group col ml-2">
                <button type="submit" class="btn btn-danger" :disabled="this.$store.state.people.length === 0 ? true : false">Remove</button>
              </div>
            </div>
          </form>

          <form @submit.prevent="add_new_name">
            <div class="form-row">
              <div class="form-group col">
                <input type="text" placeholder="New name" class="form-control" v-model="new_name" />
                <small class="form-text text-muted" v-if="display_help">Name must be unique</small>
              </div>
              <div class="form-group col ml-2">
                <button type="submit" class="btn btn-primary" :disabled="new_name === '' ? true : false">Add</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeopleSelect from '@/components/PeopleSelect.vue'
export default {

  name: 'manage',

  data () {
    return {
      new_name: '',
      display_help: false
    }
  },

  components: {
    PeopleSelect
  },

  methods: {

    add_new_name () {
      this.display_help = false
      let promise = this.$store.dispatch('add_people', this.new_name)
      promise.then(() => {
        this.new_name = ''
      }, () => {
        this.display_help = true
      })
    },

    remove_name () {
      let name = this.$refs.select.selected
      this.$store.commit('remove_people', name)
    }

  }

}
</script>
