<template>
    <ccHello></ccHello>
</template>

<script>
import ccHello from './components/Hello'
import ccMenu from './components/Menu'
import ccLogin from './components/Login'
export default {
  name: 'mainComponents',
  components: {
    ccMenu,
    ccLogin,
    ccHello
  },
  data () {
    return {
      nome: 'André Gustavo dos Santos Burin'
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
</style>
