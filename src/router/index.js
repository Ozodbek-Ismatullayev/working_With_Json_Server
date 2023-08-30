import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
