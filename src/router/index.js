import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home'
import Trends from '../views/Trends'
import Subscriptions from '../views/Subscriptions'
import Library from '../views/Library'

Vue.use(VueRouter)
const routes = [
    { 
        path: '/',
        name: 'Home', 
        component: Home 
    },
    { 
        path: '/trends', 
        name: 'Trends',
        component: Trends
    },
    { 
        path: '/subscriptions', 
        name: 'Subscriptions',
        component: Subscriptions
    },
    { 
        path: '/library',
        name: 'Library',
        component: Library
    }
]
export const router = new VueRouter({
    routes,
    mode: 'history'
})