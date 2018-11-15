/*
 * @Author: tanbin
 * @Date: 2018-11-15 12:02:08
 * @LastEditTime: 2018-11-15 15:09:08
 */

import { constantRouterMap, asyncRouterMap } from "@/router.js"

/**
 * @msg: 判断路由权限
 * @param {roles, route} 
 * @return: boolean
 */
function hasPermission(roles, route){
  if(route.meta && route.meta.roles){
    roles.some(role=>route.meta.roles.includes(role))
  }else{
    return true
  }
}

/**
 * @msg: 过滤出有权限的路由
 * @param {routes, roles} 
 * @return: Array
 */
function filterAsyncRouter(routes, roles){
  const res = []
  routes.foreach(route=>{
    const tmp = {...route}
    if(hasPermission(roles,tmp)){
      if(tmp.childred){
        filterAsyncRouter(tmp.childred, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state:{
    routers: constantRouterMap,
    addRouters: []
  },
  mutations:{
    SET_ROUTERS(state, routers){
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },

  actions:{
    /**
     * @msg: 生成对应权限的路由 
     * @param {type} 
     * @return: 
     */
    generateRouter({commit}, data){
      return new Promise(resolve =>{
        const { roles } = data
        let accessedRouters
        if(roles.includes('admin')){
          accessedRouters = asyncRouterMap
        }else{
          accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        }
        commit("SET_ROUTERS", accessedRouters)
        resolve()
      })
    }
  }
}

export default permission

