<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './views/miscellaneous/Navbar.vue';
import Footer from './views/miscellaneous/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
