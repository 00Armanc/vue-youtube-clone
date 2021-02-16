import Vue from 'vue' 

Vue.directive('dcenter', {
    bind: function(el) {
        el.style.display = "flex"
        el.style.alignItems = "center"
        el.style.justifyContent = "center"
    }
})
Vue.directive('dspace', {
    bind: function(el, binding) {
        el.style.display = "flex"
        el.style.alignItems = "center"
        el.style.justifyContent = "space-"+binding.value
    }
})
Vue.directive('ddspace', {
    bind: function(el, binding) {
        el.style.display = "flex"
        el.style.flexDirection = "column"
        el.style.alignItems = "center"
        el.style.justifyContent = "space-"+binding.value
    }
})