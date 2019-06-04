<template>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>  <div class="card">
        <h2>Top Running Backs</h2>
        <div v-for="(player, pick) in rbList">
          <b-button class="btn-block" variant="outline-dark"  v-b-toggle="'rbCollapse-'+ pick">{{player.posRank}}. {{player.Name}}</b-button>
          <b-collapse :id="'rbCollapse-'+pick" class="mt-2">
            <b-card>
              <ul class="list-group">
                <li class="list-group-item">Team: {{player.Team}}</li>
                 <li class="list-group-item">Average Auction Value: {{player.Value}}</li>
                 <li class="list-group-item">Average Draft Position: {{player.pick}}</li>
                 <li class="list-group-item">Player's Positional Rank: {{player.posRank}}</li>
              </ul>
            </b-card>
         </b-collapse>
        </div>
      </div>
    </b-col>
    <b-col>
       <div class="card">
        <h2>Top Wide Recievers</h2>
        <div v-for="(player, pick) in wrList">
          <b-button class="btn-block" variant="outline-dark" v-b-toggle="'wrCollapse-'+ pick">{{player.posRank}}. {{player.Name}}</b-button>
          <b-collapse :id="'wrCollapse-'+pick" class="mt-2">
            <b-card>
              <ul class="list-group">
                <li class="list-group-item">Team: {{player.Team}}</li>
                 <li class="list-group-item">Average Auction Value: {{player.Value}}</li>
                 <li class="list-group-item">Average Draft Position: {{player.pick}}</li>
                 <li class="list-group-item">Player's Positional Rank: {{player.posRank}}</li>
              </ul>
            </b-card>
         </b-collapse>
        </div>
      </div>
    </b-col>
    <b-col>
      <div class="card">
       <h2>Top Tight <br> Ends</h2>
       <div v-for="(player, pick) in teList">
         <b-button class="btn-block" variant="outline-dark"  v-b-toggle="'teCollapse-'+ pick">{{player.posRank}}. {{player.Name}}</b-button>
         <b-collapse :id="'teCollapse-'+pick" class="mt-2">
           <b-card>
             <ul class="list-group">
               <li class="list-group-item">Team: {{player.Team}}</li>
                <li class="list-group-item">Average Auction Value: {{player.Value}}</li>
                <li class="list-group-item">Average Draft Position: {{player.pick}}</li>
                <li class="list-group-item">Player's Positional Rank: {{player.posRank}}</li>
             </ul>
           </b-card>
        </b-collapse>
       </div>
     </div>
    </b-col>
    <b-col>
      <div class="card">
       <h2>Top <br> Quarterbacks</h2>
       <div v-for="(player, pick) in qbList">
         <b-button class="btn-block" variant="outline-dark"  v-b-toggle="'qbCollapse-'+ pick">{{player.posRank}}. {{player.Name}}</b-button>
         <b-collapse :id="'qbCollapse-'+pick" class="mt-2">
           <b-card>
             <ul class="list-group">
               <li class="list-group-item">Team: {{player.Team}}</li>
                <li class="list-group-item">Average Auction Value: {{player.Value}}</li>
                <li class="list-group-item">Average Draft Position: {{player.pick}}</li>
                <li class="list-group-item">Player's Positional Rank: {{player.posRank}}</li>
             </ul>
           </b-card>
        </b-collapse>
       </div>
     </div>
    </b-col>
  </b-row>
</b-container>

</template>

<script>
import Vue from 'vue'
import ff from '../static/ff.json';

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
     ffJson: ff,
     wrList: ff.filter(d => d.Position ==="WR"),
     rbList: ff.filter(d => d.Position ==="RB"),
     qbList: ff.filter(d => d.Position ==="QB"),
     teList: ff.filter(d => d.Position ==="TE"),
     index: ff.pick

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
