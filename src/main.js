import Vue from 'vue'
import App from './App.vue'
import './style/app.css'
import { router } from './router'
import { store } from './store'
import "./directives";

window.EventBus = new Vue()


new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
