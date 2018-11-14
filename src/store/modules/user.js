import api from "@/api/index.js"
import { SAVEUSER } from "../mutation-types.js"
import { Message } from "element-ui"

const state = {
  user:{}
}

const mutations = {
  [SAVEUSER](state, payload){
    state.user = payload.data
  }
}

const actions = {
  async fetchUser({commit}, params){
    const res = await api.user(params)
    if(res.data.success){
      commit(SAVEUSER, res.data)
    }else{
      Message.error("请求错误")
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}