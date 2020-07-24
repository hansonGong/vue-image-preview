<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ImagePre msg="Welcome to Your Vue image preview"/>
  </div>
</template>

<script>
import ImagePre from './components/ImagePre.vue'

export default {
  name: 'App',
  components: {
    ImagePre
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
