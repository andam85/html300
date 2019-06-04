<template>
  <div class="container">
    <nav class="navbar d-flex justify-content-start fixed-top">
          <nuxt-link class="btn navbar-item" to="/home"> Home </nuxt-link>
          <nuxt-link class="btn navbar-item" to="/images"> Images </nuxt-link>
          <nuxt-link class="btn navbar-item" to="/players"> Players </nuxt-link>
    </nav>
  </div>
</template>

<style>
* {
  border-radius: 0 !important;
}
/* I had to add this so there's space for my fixed nav bar */
div { height: 100px}

nuxt-link{
  width: 50px
}
</style>
