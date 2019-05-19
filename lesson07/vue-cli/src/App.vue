<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <a v-bind:href="link" target="_blank">google</a>
    <button v-on:click = "increase">CLick Me</button>
    <p>{{counter}}</p>
    <input type="text" v-on:input="changeTitle">
    <input type="text" v-model="name">
    <p>{{name}}</p>
    <div class="demo"
    v-on:click="attachRed = !attachRed"
    v-bind:class="{red:attachRed}">
    </div>
    <p v-if="show">Can you see me</p>
    <button v-on:click="show = !show"></button>
    <ul>
      <li v-for="ingredient in
      ingredients"> {{ingredient}}</li>
    </ul>
    <ul>
      <li v-for="person in persons">
      {{person.name}}
      {{person.age}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      link: "https://www.google.com",
      counter: 0,
      name: "an",
      attachRed: false,
      show: false,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons:[
      {name: 'Aaron', age: 40, color: 'red'},
      {name: 'Max', age: 27, color: 'blue'}
      ],
    }
  },
  methods:{
    changeTitle: function(event){
    this.msg = event.target.value;
    },
    increase: function(){
    this.counter++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.demo{
height: 100px;
width: 100px;
background-color: green;
}
.red{
background-color: red;
}
</style>
