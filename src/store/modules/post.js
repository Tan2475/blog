import postApi from '@/api/post.js'
import { Message } from 'element-ui'

const { postList, post, upLoad, search, category, postType } = postApi

const state = {
  postList:{
    data:[],
    total:0,
  },
  post:{},
  upStatus: false,
  categorys:[]
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
  },
  SAVECATEGORY(state, payload){
    state.categorys = payload.data
  }
}

const actions = {
  async fetchPostList({commit}, params){
    const res = await postList(params)
    if(res.data.success){
      commit('SAVEPOSTLIST', res.data)
    }else{
      Message.error('获取失败')
    }
  },
  async fetchPost({commit}, params){
    const res = await post(params)
    if(res.data.success){
      commit('SAVEPOST', res.data)
    }else{
      Message.error('获取失败')
    }
  },
  async upDatePost({commit},params){
    const res = await upLoad(params)
    if(res.data.success){
      commit('UPDATEPOST', true)
      Message.success('上传成功')
    }else{
      Message.error('上传失败，请稍后重试')
    }
  },
  async searchPost({commit}, params){
    const res = await search(params)
    if(res.data.success){
      commit('SAVEPOSTLIST', res.data)
    }else{
      Message.error('未搜索到相关文章，请更换关键字')
    }
  },
  async fetchCategory({commit}){
    const res = await category()
    if(res.data.success){
      commit('SAVECATEGORY', res.data)
    }else{
      Message.error("请求失败，请稍后重试")
    }
  },
  async selectType({commit}, params){
    const res = await postType(params)
    if(res.data.success){
      commit('SAVEPOSTLIST', res.data)
    }else{
      Message.error('获取失败')
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

