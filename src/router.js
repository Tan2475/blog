import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/views/blog/post/Post.vue'

Vue.use(Router)

export const constantRouterMap = [
   // 首页
   {
    path: '/',
    name: 'home',
    component:() => import('@/views/blog/home/Home.vue')
  },
   // about me 
   {
    path: '/me',
    name: 'me',
    component: () => import('@/views/blog/me/Me.vue')
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
    component: () => import('@/views/blog/auth/Login.vue')
  },
  // 文章列表
  {
    path: '/postlist/:type',
    name: 'postlist',
    component: () => import('@/views/blog/postList/PostList.vue'), props: true
  },
  // 每日一P
  {
    path: '/pixiv',
    name: 'pixiv',
    component: () => import('@/views/blog/pixiv/Pixiv.vue')
  },
  // 搜索页面
  {
    path:"/search",
    name: "search",
    component: ()=>import("@/views/blog/search/Search.vue")
  },
  // 分类页面
  {
    path:"/category",
    name: "Category",
    component: ()=>import("@/views/blog/category/Category.vue")
  }
]
 
export const asyncRouterMap = [
  {
    path: '/404',
    component: () => import('@/views/blog/errorPage/404'),
    name: 'Page404',
    meta: { title: 'page404', noCache: true }
  },
   // 编辑页面
  {
  path:"/editor",
  name:'editor',
  meta: {roles:["admin", "tanbin"]},
  component:()=> import('@/views/blog/editor/Editor.vue')
  },
  // 404页面
  {path:'*',redirect:'/404', hidden: true}
]

export default new Router({
  mode:"history",
  routes: constantRouterMap
})

