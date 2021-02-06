<template>
  <div id="app" class="container">
    <Header />
    <Sections />
    <router-view ></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import Sections from './components/HeaderSteps/Sections'
// import MainContainer from './components/MainContainer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sections
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
