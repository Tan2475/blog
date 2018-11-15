import { Message } from "element-ui"
import store from "@/store/index.js"
import router,{ constantRouterMap } from "@/router.js"
import { getToken } from "@/util/auth"


router.beforeEach((to, from, next) => {
  if(getToken()){
    if(store.getters.roles.length === 0){
      store.user.dispatch("GetUserInfo").then(response=>{
        const roles = response.data.roles
        store.permission.dispatch("generateRouter",roles).then(()=>{
          router.addRoutes(store.getters.addRouters)
          to({...to,replace:true})
        })
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