<template>
  <div class="list-debts">

    <div class="table-responsive" v-if="Object.keys(owed).length > 0">
      <table class="table table-sm table-hover">
        <caption>Owed to you</caption>
        <thead>
          <tr>
            <th scope="col">Sum</th>
            <th scope="col">Owed by</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in owed" :key="idx" class="table-success">
            <td>{{item.sum}} €</td>
            <td>{{item.person}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>You are owed nothing.</p>

    <div class="table-responsive mt-2" v-if="Object.keys(debts).length > 0">
      <table class="table table-sm table-hover">
        <caption>What you owe</caption>
        <thead>
          <tr>
            <th scope="col">Sum</th>
            <th scope="col">Owed to</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in debts" :key="idx" class="table-warning">
            <td>{{item.sum}} €</td>
            <td>{{item.person}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>You owe nothing.</p>

  </div>
</template>

<script>
export default {
  computed: {
    owed () {
      let owed = []
      for (let key in this.$store.state.owed) {
        if (this.$store.state.owed[key] > 0) owed.push({ sum: this.$store.state.owed[key], person: key })
      }
      owed.sort((a, b) => {
        if (a.sum < b.sum) return 1
        else if (a.sum > b.sum) return -1
        else return 0
      })
      if (this.length !== undefined) owed = owed.slice(0, this.length)
      return owed
    },
    debts () {
      let owed = []
      for (let key in this.$store.state.owed) {
        if (this.$store.state.owed[key] < 0) owed.push({ sum: -this.$store.state.owed[key], person: key })
      }
      owed.sort((a, b) => {
        if (a.sum < b.sum) return 1
        else if (a.sum > b.sum) return -1
        else return 0
      })
      if (this.length !== undefined) owed = owed.slice(0, this.length)
      return owed
    }
  },
  props: {
    length: Number
  }
}
</script>
