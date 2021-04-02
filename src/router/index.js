import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'

const Login = () => import('@/views/login/Login')
const Register = () =>import("@/views/register/Register")
const Forget = ()=>import("@/views/forget/Forget")

const My = () => import('@/views/my/My')
const Your = () => import('@/views/my/Your')
const MyCircle = ()=>import('@/views/my/Circle/MyCircle')
const Collection = ()=> import('@/views/my/collection/Collection')

const Schools = () => import('@/views/schools/Schools')
const SchoolInfo = () => import('@/views/schools/SchoolInfo')
const SchoolData = () => import('@/views/schools/SchoolData')

const Tribune = () => import('@/views/tribune/Tribune')
const Circle = ()=>import('@/views/tribune/circle/Circle')
const CircleDetail = ()=>import('@/views/tribune/circle/CircleDetail')
const EditorTemplate = ()=>import('@/component/common/editorTemplate/EditorTemplate')
const Passage = ()=>import('@/views/tribune/Passage')

const RegisterSetPassword = ()=>import('@/views/register/registerChildren/RegisterSetPassword')
const RegisterSetDreamSchool =()=>import('@/views/register/registerChildren/RegisterSetDreamSchool')
const RegisterSuccess = ()=>import("@/views/register/registerChildren/RegisterSuccess")

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/schools',
    name:'Schools',
    component:Schools,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/schoolInfo',
    name:'SchoolInfo',
    component:SchoolInfo,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/Schooldata',
    name: 'SchoolData',
    component:SchoolData,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/tribune',
    name:'Tribune',
    component:Tribune,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/passage',
    name:'Passage',
    component:Passage,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/circle',
    name:'Circle',
    component:Circle,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },{
    path: '/circledetail',
    name:'CircleDetail',
    component:CircleDetail,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/my',
    name:'My',
    component:My,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/your',
    name:'Your',
    component:Your,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/collection',
    name:'Collection',
    component:Collection,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },{
    path:'/mycircle',
    name:'MyCircle',
    component:MyCircle,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/login',
    name:'Login',
    component:Login,
  },
  {
    path: '/forget',
    name:'Forget',
    component:Forget
  }
  ,
  {
    path: '/register',
    name:'Register',
    component:Register,
    children:[
      {path:'/setPassword',component:RegisterSetPassword},
      {path: '/setDreamSchool',component:RegisterSetDreamSchool},
      {path: '/registerSuccess',component:RegisterSuccess}
    ],redirect: '/setPassword',
  },{
    path:'/putPassage',
    name:'EditorTemplate',
    component:EditorTemplate,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = "研论-考研信息聚合平台"
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.isLogin) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login'
      })
    }
  }
  else {
    next();
  }
})


export default router
