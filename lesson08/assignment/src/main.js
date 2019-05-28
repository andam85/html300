import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import App from './App.vue';

// importing in components
import header from './components/header.vue';
import home from './components/home.vue';
import images from './components/images.vue';
import players from './components/players.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: home },
    { path: '/images', component: images },
    { path: '/players', component: players }
  ]
});



new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
