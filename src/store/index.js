import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
Vue.use(Vuex)


export default new Vuex.Store({
  modules:{post},
  state: {
    menu_bars: [["文章","/postlist"], ["每日一P","/pixiv"], ["编辑",'/editor'], ["登录","/auth"], ["关于我","/me"]],
  },
})
