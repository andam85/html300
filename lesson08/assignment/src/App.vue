<template>

<!-- <div>

</div> -->

  <div id="app">
    <app-header>An's</app-header>
    <nav class="navbar navbar-dark bg-dark d-flex justify-content-start fixed-top">

    <a href="#" class="btn btn-dark" <router-link to="/" class="nav-link">Home</router-link></a>
    <a href="#" class="btn btn-dark" <router-link to="/images" class="nav-link">Images</router-link></a>
    <a href="#" class="btn btn-dark"  <router-link to="/players" class="nav-link">Players</router-link></a>

  </nav>
  <router-view class="view"></router-view>
  </div>
</template>

<script>
import header from './components/header.vue';
Vue.component('navbar',navbar)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
