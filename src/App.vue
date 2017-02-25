<template>
  <!--<div class="phone-viewport">
    <md-toolbar>
      <h1 class="md-title">HardCode</h1>
    </md-toolbar>
  </div>-->
  <ccLogin></ccLogin>
</template>

<script>
  import ccLogin from './components/Login'
  export default {
    name: 'mainComponents',
    components: {
      ccLogin
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
