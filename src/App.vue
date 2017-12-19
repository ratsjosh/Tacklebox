<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar,
  },
}
</script>

<style lang="sass">
// @import '../static/fontawesome-free-5.0.1/web-fonts-with-css/css/fontawesome.css'
@import '../node_modules/bulma/bulma.sass'
@import '../src/style/mq.sass'
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
