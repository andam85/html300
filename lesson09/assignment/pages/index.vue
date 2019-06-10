<!-- this is the launch screen, will include jumbotron as a landing page -->
<!-- home.vue -->
  <template>
     <div>
       <navbar></navbar>
       <div class="jumbotron jumbotron-fluid">
         <div class="container">
           <h1 class="display-3">Fantasy Football Draftkit</h1>
           <p class="lead">This website will aid you in your fantasy football drafting process.</p>
         </div>
       </div>
     </div>
   </template>

<script>

import navbar from '../components/navbar'
export default {
  components: {
    navbar
  }
}

</script>
