import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

  mode:"history",
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: import('@/views/home/Home.vue')
    },
    
    // 文章列表
    {
      path: '/postlist',
      name: 'postlist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/postList/PostList.vue')
    },

    // 每日一P
    {
      path: '/pixiv',
      name: 'pixiv',
      component: () => import('@/views/pixiv/Pixiv.vue')
    },

    // 登录
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/auth/Login.vue')
    },

    // about me 
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/me/Me.vue')
    },

    // post
    {
      path: '/writings',
      name: 'writings',
      component: ()=> import('@/components/writings/Writings.vue')
    }

  ]
})
