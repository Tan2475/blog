import postApi from '@/api/post.js'
import { Message } from 'element-ui'

const { postList, post, upLoad } = postApi

const state = {
  postList:{
    data:[],
    total:0,
  },
  post:{},
  upStatus: false,
}

const getters = {}

const mutations = {
  SAVEPOSTLIST(state, payload){
    state.postList = payload
  },
  SAVEPOST(state, payload){
    state.post = payload.data
  },
  UPDATEPOST(state, payload){
    state.upStatus = payload
  }
}

const actions = {
  async fetchPostList({commit}, params){
    const res = await postList(params)
    if(res.data.success){
      commit('SAVEPOSTLIST', res.data)
    }else{
      Message.error('请求错误')
    }
  },
  async fetchPost({commit}, params){
    const res = await post(params)
    if(res.data.success){
      commit('SAVEPOST', res.data)
    }else{
      Message.error('请求错误')
    }
  },
  async upDatePost({commit},params){
    const res = await upLoad(params)
    if(res.data.success){
      commit('UPDATEPOST', true)
      Message.success('上传成功')
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

