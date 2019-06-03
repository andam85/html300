<template lang="html">
 <div class="">
   <h1>{{test}}</h1>
   <button v-on:click="greet">Greet</button>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
   return {
     test: "Hello"
   }
 },
 created: function() {
   // http://www.omdbapi.com/?apikey=90fcc7de&t=2018
   this.test = "welcome to class";
   axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=1&format=json`)
   .then(response => {
     // JSON responses are automatically parsed.
     this.posts = response.data
     console.log(this.posts);
   })
   .catch(e => {
     this.errors.push(e)
   })
   .finally(() => this.loading =true)
 },
 methods: {
   greet: function() {
     this.test = "Hello Again";
   }
 }
}
</script>

<style lang="css" scoped>
</style>
