import Vue from 'vue'
import App from './App.vue'
import './style/app.css'
import { router } from './router'


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
