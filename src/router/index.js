import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/skills',
    name:'skills',
    component: () => import('../views/Skills')
  },
  {
    path:'/careers',
    name:'careers',
    component: () => import('../views/Careers')
  },
  {
    path:'/academic',
    name:'academic',
    component: () => import('../views/Academic')
  },
  {
    path:'/projects',
    name:'projects',
    component: () => import('../views/Projects')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
