<template>
  <div id="app">
    <writings></writings>
  </div>
</template>

<script>
import writings from './components/writings/Writings.vue'

export default {
  name: 'app',
  components: {
    writings
  }
}
</script>

<style>
#app {
  width:100%;
  height: 100%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  background:#fff url("./assets/image/bg.jpg") no-repeat center;
  background-size: cover;
}
</style>
