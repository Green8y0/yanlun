import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/login/Login')
const Register = () =>import("@/views/register/Register")

const My = () => import('@/views/my/My')
const Schools = () => import('@/views/schools/Schools')
const Tribune = () => import('@/views/tribune/Tribune')


const routes = [
  {
    path:'/',
    redirect:'/schools'
  },
  {
    path: '/schools',
    name:'Schools',
    component:Schools
  },
  {
    path: '/tribune',
    name:'Tribune',
    component:Tribune
  },
  {
    path: '/my',
    name:'My',
    component:My
  },
  {
    path: '/login',
    name:'Login',
    component:Login
  },
  {
    path: '/register',
    name:'Register',
    component:Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
