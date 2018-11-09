import Vue from 'vue'
import Vuex from 'vuex'
import api from './service/api'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    menu_bars: [["文章","/postlist"], ["每日一P","/pixiv"], ["登录","/auth"], ["关于我","/me"]],
    post_list: [],
  },
  mutations: {
    changePost(state, posts){
      state.post_list = posts
    },
  },
  actions: {
    async getPost({commit}, {params}){
      const res = await api.getPostList(params)
      commit("changePost", res.data)
    },
  }
})
