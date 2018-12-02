import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
   // 首页
   {
    path: '/',
    name: 'home',
    component:() => import('@/views/blog/home/Home.vue')
  },
   // 关于我
   {
    path: '/me',
    name: 'me',
    component:() => import('@/views/blog/me/Me.vue')
  },
  // 文章详情
  {
    path: '/post/:pid',
    name: 'post',
    component: ()=> import("@/views/blog/post/Post.vue"), props: true
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
    meta: {keepAlive: true},
    component: () => import('@/views/blog/postList/PostList.vue')
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
  // 标签页面
  {
    path:"/category",
    name: "Category",
    component: ()=>import("@/views/blog/category/Category.vue")
  },
  // 分类文章列表
  {
    path:"/type/:type",
    name:"typepost",
    meta:{keepAlive:true},
    component: () => import("@/views/blog/category/TypePost.vue"), props:true
  },
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
    path:"/admin/editor",
    name:'editor',
    meta: {roles:["admin", "tanbin"]},
    component:()=> import('@/views/admin/editor/Editor.vue')
  },
  {
    path:"/admin/management",
    name:"management",
    meta: {roles:["admin", "tanbin"]},
    component:()=> import('@/views/admin/postManagement/index.vue')
  },
  // 404页面
  {path:'*',redirect:'/404', hidden: true}
]

export default new Router({
  mode:"history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if(to.name === "post"){
      return {x:0,y:0}
    }
  },
  routes: asyncRouterMap
})

