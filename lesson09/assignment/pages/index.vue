<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        assignment
      </h1>
      <h2 class="subtitle">
        My prime Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>

let wrarray = [];
let qbarray =[];
let rbarray = [];
let tearray = [];



import Logo from '~/components/Logo.vue'


import axios from 'axios'

export default {

 data() {

   return {

     test: "Hello"

   }

 },

 created: function() {
 //   var i;
 //   for (i=1; i<18; i++){
 //     axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2018&format=json&position=WR&week=${i}`)
 //     .then(response => {
 //       dataarray.push(response.data)
 //
 //
 //     })
 //   }
 //   console.log(dataarray);
// var positions =["WR", "RB", "QB", "TE", "K"];
// positions.forEach(function(e){
//     axios.get(`'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position='+e`)
//       .then(response => {
//       dataarray.push(response.data)
//       }
//       )
// }

    axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=WR`)
    .then(response => {
      wrarray.push(response.data)
    })
    axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=QB`)
    .then(response => {
      qbarray.push(response.data)
    })
    axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=RB`)
    .then(response => {
      rbarray.push(response.data)
    })
    axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=TE`)
    .then(response => {
      tearray.push(response.data)
    })


console.log(wrarray);
console.log(qbarray);
console.log(rbarray);
console.log(tearray);







   // http://www.omdbapi.com/?apikey=90fcc7de&t=2018
   //
   // this.test = "Hello Again one More time";
   //
   // axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2018&format=json&position=WR&week=3`)
   //
   // .then(response => {
   //
   //   // JSON responses are automatically parsed.
   //
   //   this.posts = response.data
   //
   //   var ourData = response.data
   //
   //   console.log(ourData[0]);
   //
   // })




   // .catch(e => {
   //
   //   this.errors.push(e)
   //
   // })
   //
   // .finally(() => this.loading =true)



 },



 methods: {

   greet: function() {

     this.test = "Hello Again";

   }

 }

}


</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
