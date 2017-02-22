<template>
  <div>
    <h1>Olá VueJS</h1>
    <ccIntro></ccIntro>
  </div> 
</template>

<script>
import ccIntro from './Intro'
export default {
  components: {
    ccIntro
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size: 50px;
    font-weight: bold;
    color: green;
  }
</style>
