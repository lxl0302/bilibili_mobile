import Vue from 'vue'
import VueRouter from 'vue-router'

const register = () => import('@/views/register')
const login = () => import('@/views/Login')
const userInfo = () => import('@/views/userinfo')

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/userinfo',
    component: userInfo
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router