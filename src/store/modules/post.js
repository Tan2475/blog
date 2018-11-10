import api from '@/api/index.js'
import { SAVEPOSTLIST, SAVEPOST } from '../mutation-types.js'
import { Message } from 'element-ui'


const state = {
  postList:{
    data:[],
    total:0,
  },
  post:{}
}

const getters = {}

const mutations = {
  [SAVEPOSTLIST](state, payload){
    state.postList = payload
  },
  [SAVEPOST](state, payload){
    state.post = payload.data
  }
}

const actions = {
  async fetchPostList({commit}, params){
    const res = await api.postList(params)
    if(res.data.success){
      commit(SAVEPOSTLIST, res.data)
    }else{
      Message.error('请求错误')
    }
  },
  async fetchPost({commit}, params){
    const res = await api.post(params)
    if(res.data.success){
      commit(SAVEPOST, res.data)
    }else{
      Message.error('请求错误')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

