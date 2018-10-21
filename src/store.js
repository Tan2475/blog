import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu_bars: [["文章","/postlist"], ["每日一P","/pixiv"], ["登录","/auth"], ["关于我","/me"]],
    post_list: []
  },
  mutations: {
    changePost(state, posts){
      state.post_list = posts
    }
  },
  actions: {
    async getPost({commit}, {req, url}){
      const res = await req.get(url)
      commit("changePost", res.data.data)
    }
  }
})
