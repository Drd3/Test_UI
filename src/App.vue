<template>
  <div id="app">
    <HousesList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HousesList from './components/house.component/HousesList.vue'

export default {
  name: 'App',
  components: {
    HousesList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    background-color: rgb(12, 12, 12);
}
</style>
