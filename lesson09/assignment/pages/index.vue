<template>
  <section class="container">
    <div>
      <div class="app">
        <!-- {if ({info.length > 0}) {greet()}} -->
        {{ info }}
      </div>
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
import Vue from 'vue'

// let state = Vue.observable({
//   dataArray : []
// })

  let dataArray =[];
// let wrArray = [];
// let qbArray =[];
// let rbArray = [];
// let teArray = [];



import Logo from '~/components/Logo.vue'


import axios from 'axios'

export default {

 data() {

   return {
     info: [],
     // test: null
   }

 },

 // created: function() {
   // var i;
   // for (i=1; i<18; i++){
   //   axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2018&format=json&position=WR&week=${i}`)
   //   .then(response => {
   //     dataArray.push(response.data)
   //
   //
   //   })
   // };
   //
   //
   // console.log("this data array: ",dataArray);
   // for( let e of dataArray){
   //   console.log("e vals: ", e)
   // }



     mounted () {
     var positions =["WR", "RB", "QB", "TE", "K"];
     for (let e of positions){
       // console.log("position", e)
      axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=${e}`)
      .then(response => {
        // let responseText = response.data.text();
        // let temp = response.data;
        // console.log("response", temp)
        for (let x of response.data.players) {
          console.log('x', x)
        //   for (let player of x){
        //
        //
        //   console.log('player data', player)
        // }
        let player = {
          name: x.name,
          position: x.position,
          points: x.seasonPts
        }
        this.info.push(player)
        }

      }
      )
}
},


// console.log("thisnewdata", {info})




//     axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=WR`)
//     .then(response => {
//       wrarray.push(response.data)
//     })
//     axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=QB`)
//     .then(response => {
//       qbarray.push(response.data)
//     })
//     axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=RB`)
//     .then(response => {
//       rbarray.push(response.data)
//     })
//     axios.get(`https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=TE`)
//     .then(response => {
//       tearray.push(response.data)
//     })
//
//
// console.log(wrarray);
// console.log(qbarray);
// console.log(rbarray);
// console.log(tearray);







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



 // },



 methods: {

   // greet: function() {
   //
   //   this.test = "Hello Again";
   //
   // }

   // output : function(){
   //   console.log("running function")
   // }

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
