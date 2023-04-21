import Vue from 'vue'
import VueRouter from 'vue-router'
import indexView from '../views/indexView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'indexView',
    component: indexView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
