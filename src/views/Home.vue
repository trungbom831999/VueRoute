<template>
  <div class="home">
    <img id="welcome" alt="Vue logo" src="../assets/welcome.png">
    <HelloWorld msg=""/>
  </div>
</template>

<style scoped>
  #welcome{
    margin: auto;
    display: block;
    /* height: auto; */
    max-height: 200px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import store from '@/store'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
  // ,
  // data() {
  //   return {

  //   }
  // }
}
</script>
