import postApi from '@/api/post.js'
import { Message } from 'element-ui'

const { postList, post, upLoad, upDate, delete_, search, category, postType } = postApi

const state = {
  postList:{
    data:[],
    total:0,
  },
  searchList:{
    data:[],
    total:0
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
  },
  SAVESEARCHLIST(state, payload){
    state.searchList = payload
  }
}

const actions = {
  async fetchPostList({commit}, params){
    const res = await postList(params).catch(()=> false)
    if(res && res.data.success){
      commit('SAVEPOSTLIST', res.data)
    }else{
      Message.error('获取文章列表失败')
      return new Promise( (resolve,reject) =>reject())
    }
  },
  async fetchPost({commit}, params){
    const res = await post(params).catch(()=>false)
    if(res && res.data.success){
      commit('SAVEPOST', res.data)
    }else{
      Message.error('获取文章失败')
    }
  },
  async setPost({commit},params){
    const res = await upLoad(params).catch(()=>false)
    if(res && res.data.success){
      commit('UPDATEPOST', true)
      Message.success('上传成功')
    }else{
      Message.error('上传失败，请稍后重试')
    }
  },
  async upDatePost({commit},params){
    const res = await upDate(params).catch(()=>false)
    if(res && res.data.success){
      commit('UPDATEPOST', true)
      Message.success('更新成功')
    }else{
      Message.error('更新失败，请稍后重试')
    }
  },
  async deletePost({commit},params){
    const res = await delete_(params).catch(()=>false)
    if(res && res.data.success){
      commit('UPDATEPOST', true)
      Message.success('删除成功')
    }else{
      Message.error('删除失败，请稍后重试')
    }
  },
  async searchPost({commit}, params){
    const res = await search(params)
    if(res.data.success){
      commit('SAVESEARCHLIST', res.data)
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

