import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { stringify } from 'qs';

Vue.use(Vuex)

var api = axios.create({
  baseURL: 'http://localhost:88',
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    menu_bars: [["文章","/postlist"], ["每日一P","/pixiv"], ["登录","/auth"], ["关于我","/me"]],
    post_list: [],
    test:''
  },
  mutations: {
    changePost(state, posts){
      state.post_list = posts
    },
    changeTest(state, test){
      state.test = test
    }
  },
  actions: {
    async getPost({commit}, {url}){
      const res = await api.get(url)
      commit("changePost", res.data.data)
    },
    async getTest({commit}, {url, config}){
      const res = await api.get(url, config)
      commit("changeTest", res.data)
    }
  }
})
