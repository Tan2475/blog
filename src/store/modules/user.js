import userApi from "@/api/user.js"
import { Message } from "element-ui"
import { getToken, setToken, removeToken } from "@/util/auth.js"

const { userPost, loginByUsername, getUserInfo } = userApi


const state = {
  post:{},
  token: getToken(),
  roles:[],
  name:"",
}

const mutations = {
  SAVEUSER(state, payload){
    state.post = payload.data
  },
  SET_TOKEN(state, token){
    state.token = token
  },
  SET_ROLES(state, roles){
    state.roles = roles
  },
  SET_NAME(state, name){
    state.name = name
  }
}

const actions = {
  // 请求个人简介
  async fetchUserPost({commit}, params){
    const res = await userPost(params)
    if(res.data.success){
      commit('SAVEUSER', res.data)
    }else{
      Message.error("请求错误")
    }
  },

  // 用户登录
  LoginByUsername({commit}, userInfo){
    const username = userInfo.userName
    const password = userInfo.pass

    return new Promise((resolve, reject)=>{
      loginByUsername({username, password}).then(response=>{
        const data = response.data
        commit("SET_TOKEN", data.token)
        setToken(data.token)
        Message.success("登录成功")
        resolve()
      }).catch(error=>{
        reject(error)
      })
    })
  },

  // 获取用户roles
  GetUserInfo({commit, state}){
    return new Promise((resolve, reject)=>{
      getUserInfo(state.token).then(response=>{
        const data = response.data
        if(!data.success){
          reject("error")
        }
        if(data.roles && data.roles.length > 0){
          commit("SET_ROLES", data.roles)
        }else{
          reject("error, null roles")
        }
        resolve(response)
      })
    })
  },

  // 登出
  LoginOut({commit}){
    return new Promise(resolve=>{
      commit("SET_TOKEN", "")
      removeToken()
      resolve()
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}