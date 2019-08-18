<template>
    <table class="table" v-if="spendings.length > 0">
        <thead>
            <tr>
                <th scope="col">Price</th>
                <th scope="col">Desc.</th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(spending, idx) in spendings" :key="idx">
            <td>{{spending.price}}</td>
            <td>{{spending.desc}}</td>
          </tr>
        </tbody>
    </table>
    <div v-else>No spending to display.</div>
</template>

<script>
export default {
  data () {
    return {
      spendings: [
        
      ]
    }
  }
}
</script>
