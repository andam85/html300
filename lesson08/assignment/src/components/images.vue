<template>
  <div class="container">

      <img
      v-for="image in playerImages"
      @click="toggle()"
      v-bind:class="[isActive ? 'active' : 'non-active']"
      v-bind:src="image.url"
      v-bind:alt="image.alt"
      v-bind:title="image.title"
      class="img-fluid">

  </div>
</template>

<script>
// using mixin to replace the methods to toggle below, this will allow this toogle function to be used in many places
import { toggleMixin } from '../mixins.js'
export default{
  mixins: [toggleMixin],
// I put a validator logic into the props so that it would make sure its a string, however I put a integer in and there was no error in the console log.
  props:{
    title:{ validator: value => value instanceof String},
    src:{ validator: value => value instanceof String},
    alt:{ validator: value => value instanceof String}
  },
  data () {
    return {
      // isActive: false,
      playerImages:[
        {title:'Doug "Angry Doug" Balwin', url: "../img/adb.jpg", alt:"Doug Baldwin Picture"},
        {title:"Christian McCaffery", url: "../img/cmc.jpg", alt:"Christian McCaffery Picture"},
    ]
    }
  },
  // methods: {
  // toggle: function () {
  //   if(this.isActive){
  //           this.isActive = false;
  //         }else{
  //           this.isActive = true;
  //   }
  // }
}


</script>

<!-- this style should activate with the toggle mixin -->
<style>
 .active{
    border-color: blue;
    opacity: .50;
  }
</style>
