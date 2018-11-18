import { Message } from "element-ui"
import store from "@/store/index.js"
import router,{ constantRouterMap } from "@/router.js"
import { getToken, removeToken } from "@/util/auth"


router.beforeEach((to, from, next) => {
  if(getToken()){
    if(store.getters.roles.length === 0){
      store.dispatch("user/GetUserInfo").then(response=>{
        const data = response.data
        store.dispatch("permission/generateRouter", data).then(()=>{
          router.addRoutes(store.getters.addRouters)
          next({...to,replace:true})
        })
      }).catch(()=>{
        Message.error("token失效，请重新登录")
        removeToken()
        next(`/login?redirect=${to.path}`)
      })
    }else{
      next()
    }
  }else{
    const tmp = constantRouterMap.some(router=>router.name === to.name)
    if(tmp){
      next()
    }else{
      Message.warning("请先登录")
      next(`/login?redirect=${to.path}`)
    }
  }
})