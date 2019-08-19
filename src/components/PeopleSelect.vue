<template>
  <select v-model="selected" ref="select">
    <option value="Me" selected v-if="enableMe">Me</option>
    <option disabled v-if="nothingToDisplay">No one to select</option>
    <option v-for="(person, idx) in people" :key="idx" :value="person">{{person}}</option>
  </select>
</template>

<script>
export default {
  data () {
    return {
      people: this.$store.state.people,
      selected: 'Me'
    }
  },
  props: {
    enableMe: { type: Boolean, default: false }
  },
  computed: {
    nothingToDisplay () {
      if (!this.enableMe && this.$store.state.people.length === 0) return true
      else return false
    }
  }
}
</script>
