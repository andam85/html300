<template>
  <div>
    <navbar></navbar>
    <div class="container">
        <img
        v-for="image in playerImages"
        v-bind:src="image.url"
        v-bind:alt="image.alt"
        v-bind:title="image.title"
        class="img-fluid">

    </div>


  </div>
</template>

<script>


export default{

// I put a validator logic into the props so that it would make sure its a string, however I put a integer in and there was no error in the console log.
  props:{
    title:{ validator: value => value instanceof String},
    src:{ validator: value => value instanceof String},
    alt:{ validator: value => value instanceof String}
  },
  data () {
    return {

      playerImages:[
        {title:'Doug Baldwin', url: "/adb.jpg", alt:"Doug Baldwin Picture"},
        {title:"Christian McCaffery", url: "/cmc.jpg", alt:"Christian McCaffery Picture"},
    ]
    }
  },
  components :{
    navbar
  }

}

import navbar from '../components/navbar'
// Vue.component('navbar',navbar);
</script>


<style>

</style>
