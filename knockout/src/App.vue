<template>
  <div id="app">
    <Match/>
  </div>
</template>

<script>
import Match from './components/Match'

export default {
  name: 'App',
  components: {
    Match
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
