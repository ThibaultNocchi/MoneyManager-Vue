<template>
  <select>
    <option value="Me" selected>Me</option>
    <option v-for="(person, idx) in people" :key="idx" :value="person">{{person}}</option>
  </select>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      people: []
    }
  },
  mounted () {
    this.people = JSON.parse(Vue.localStorage.get('people', '[]'))
  }
}
</script>
