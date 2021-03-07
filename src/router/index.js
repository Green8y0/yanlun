import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/views/login/Login')
const Register = () =>import("@/views/register/Register")

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
    redirect:'/schools'
  },
  {
    path: '/schools',
    name:'Schools',
    component:Schools
  },
  {
    path: '/schoolInfo',
    name:'SchoolInfo',
    component:SchoolInfo
  },
  {
    path: '/Schooldata',
    name: 'SchoolData',
    component:SchoolData
  },
  {
    path: '/tribune',
    name:'Tribune',
    component:Tribune,
  },
  {
    path: '/passage',
    name:'Passage',
    component:Passage,
  },
  {
    path: '/circle',
    name:'Circle',
    component:Circle
  },{
    path: '/circledetail',
    name:'CircleDetail',
    component:CircleDetail
  },
  {
    path: '/my',
    name:'My',
    component:My,
  },
  {
    path: '/your',
    name:'Your',
    component:Your,
  },
  {
    path: '/collection',
    name:'Collection',
    component:Collection,
  },{
    path:'/mycircle',
    name:'MyCircle',
    component:MyCircle
  },
  {
    path: '/login',
    name:'Login',
    component:Login
  },
  {
    path: '/register',
    name:'Register',
    component:Register,
    children:[
      {path:'/setPassword',component:RegisterSetPassword},
      {path: '/setDreamSchool',component:RegisterSetDreamSchool},
      {path: '/registerSuccess',component:RegisterSuccess}
    ],redirect: '/setPassword'
  },{
    path:'/putPassage',
    name:'EditorTemplate',
    component:EditorTemplate,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
