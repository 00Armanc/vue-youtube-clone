<template>
  <div id="app" class="container">
    <Header />
    <MainContainer>
      <Sections v-if="isOpen" />
      <MoreSections v-else />

      <router-view></router-view>
    </MainContainer>
  </div>
</template>

<script>
import Header from './components/Header'
import Sections from './components/HeaderSteps/Sections'
import MoreSections from './components/HeaderSteps/MoreSections'
import MainContainer from './components/MainContainer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sections,
    MoreSections,
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
