<template>
  <div id="app" class="container">
    <Header />
    <MainContainer>
      <Sidebar v-if="isOpen" />
      <LargeSidebar v-else />
      <router-view></router-view>
    </MainContainer>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/HeaderSteps/Sidebar'
import LargeSidebar from './components/HeaderSteps/LargeSidebar'
import MainContainer from './components/MainContainer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    LargeSidebar,
    MainContainer,
  },
  computed: {
    isOpen() {
      return this.$store.state.isOpen
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
