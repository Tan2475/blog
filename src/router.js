import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/views/post/Post.vue'

Vue.use(Router)

export const constantRouterMap = [
   // 首页
   {
    path: '/',
    name: 'home',
    component:() => import('@/views/home/Home.vue')
  },
   // about me 
   {
    path: '/me',
    name: 'me',
    component: () => import('@/views/me/Me.vue')
  },
  // post
  {
    path: '/post/:pid',
    name: 'post',
    component: Post, props: true
  },
   // 登录
   {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue')
  },
  // 文章列表
  {
    path: '/postlist',
    name: 'postlist',
    component: () => import('@/views/postList/PostList.vue')
  },
  // 每日一P
  {
    path: '/pixiv',
    name: 'pixiv',
    component: () => import('@/views/pixiv/Pixiv.vue')
  },
]
 
export const asyncRouterMap = [
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    name: 'Page404',
    meta: { title: 'page404', noCache: true }
  },
   // 编辑页面
  {
  path:"/editor",
  name:'editor',
  meta: {roles:["admin"]},
  component:()=> import('@/views/editor/Editor.vue')
  },
  // 404页面
  {path:'*',redirect:'/404', hidden: true}
]

export default new Router({
  mode:"history",
  routes: constantRouterMap
})

