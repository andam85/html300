<template>

  <div id="main">


   <nav class="navbar navbar-dark bg-dark d-flex justify-content-start fixed-top" v-bind:class="active" v-on:click.prevent>


    <a href="#" class="btn btn-dark"  v-on:click="makeActive('home')">Home</a>
    <a href="#" class="btn btn-dark"  v-on:click="makeActive('images')">Images</a>
    <a href="#" class="btn btn-dark"  v-on:click="makeActive('players')">Player Profiles</a>

   </nav>


<!-- This div will show when the active value is "home" -->
     <div v-if="active=== 'home'">
       <div class="jumbotron jumbotron-fluid">
         <div class="container">
           <h1 class="display-3">Fantasy Football Draftkit</h1>
           <p class="lead">This website will aid you in your fantasy football drafting process.</p>
         </div>
       </div>
     </div>

   <!-- This div will show when the active value is "images" -->
      <div v-if="active=== 'images'">
        <div class="container">
          <!-- using fluid image class so that it's responsive -->
          <!-- had to move img to root folder else image won't render, online says this is the "public" space -->
          <div v-for="image in playerImages">
            <img v-bind:src="image.url" v-bind:alt="image.alt" class="img-fluid">
          </div>
        </div>
      </div>
  <!-- This div will show when the active value is "players" -->
     <div v-if="active=== 'players'">

  <!-- I couldn't port over my native bootstrap html so I used a version from Bootstrap-vue -->
           <div class="card" v-for="player in playerInfo">
             <b-button v-b-toggle.collapse-1 variant="primary">{{player.name}}</b-button>
             <b-collapse id="collapse-1" class="mt-2">
               <b-card>
                 <p class="card-text">{{player.info}}</p>
               </b-card>
            </b-collapse>
           </div>



     </div>


  </div>

</template>

<script>

export default {
  name: 'main',
    // This is the model.
	// Define properties and give them initial values.
  data () {
    return {
		active: 'home',
    playerImages:[
      {url: "../img/adb.jpg", alt:"Doug Baldwin Picture"},
      {url: "../img/cmc.jpg", alt:"Christian McCaffery Picture"},
    ],
    playerInfo:[
      {name: "Christian McCaffery", info:"Christian Jackson McCaffrey is an American football running back and return specialist for the Carolina Panthers of the National Football League. He played college football at Stanford, and was drafted by the Panthers with the eighth overall pick in the 2017 NFL Draft."},
      {name: "Doug Baldwin", info:"Douglas Dewayne Baldwin Jr. is a former American football wide receiver. He played college football at Stanford and was signed by the Seattle Seahawks as an undrafted free agent in 2011. Baldwin finished his seven-season career with the Seahawks third all-time in team receptions and receiving yards."},
      {name: "Steffon Diggs", info:"Stefon Mar'sean Diggs is an American football wide receiver for the Minnesota Vikings of the National Football League. He was drafted by the Vikings in the fifth round of the 2015 NFL Draft. He played college football at Maryland."},


    ]
	}},

	// Functions we will be using.
	methods:{
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}
}

</script>



<style>
* {
  border-radius: 0 !important;
}
/* I had to add this so there's space for my fixed nav bar */
body { padding-top: 100px; }

</style>
