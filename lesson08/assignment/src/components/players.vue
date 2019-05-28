<template>
  <div class="card">
    <div v-for="player in playerInfo">
      <b-button v-b-toggle.collapse-1 variant="primary">{{player.name}}</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">{{player.info}}</p>
        </b-card>
     </b-collapse>
    </div>
  </div>
</template>

<script>


  export default{
    props:{
      name:{ validator: value => value instanceof String},
      info:{ validator: value => value instanceof String},
    },
    data () {
      return {
        // isActive: false,
        playerInfo:[
          {name: "Christian McCaffery", info:"Christian Jackson McCaffrey is an American football running back and return specialist for the Carolina Panthers of the National Football League. He played college football at Stanford, and was drafted by the Panthers with the eighth overall pick in the 2017 NFL Draft."},
          {name: "Doug Baldwin", info:"Douglas Dewayne Baldwin Jr. is a former American football wide receiver. He played college football at Stanford and was signed by the Seattle Seahawks as an undrafted free agent in 2011. Baldwin finished his seven-season career with the Seahawks third all-time in team receptions and receiving yards."},
          {name: "Steffon Diggs", info:"Stefon Mar'sean Diggs is an American football wide receiver for the Minnesota Vikings of the National Football League. He was drafted by the Vikings in the fifth round of the 2015 NFL Draft. He played college football at Maryland."}]

      }
    },
  }
</script>
