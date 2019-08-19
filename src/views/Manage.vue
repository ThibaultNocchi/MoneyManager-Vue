<template>
  <div class="manage">
    <h1>Manage people</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Add or remove someone</h5>
        <div class="card-text">
          <form>
            <div class="form-row align-items-end">
              <div class="form-group col">
                <label for="current">People</label>
                <people-select ref="select" class="form-control"></people-select>
              </div>
              <div class="form-group col ml-2">
                <button type="submit" class="btn btn-danger">Remove</button>
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

  components: {
    PeopleSelect
  }

}
</script>
