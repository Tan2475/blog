import Vue from 'vue'
import Vuex from 'vuex'
// import router from "@/router"
import post from './modules/post'
import user from './modules/user'
import permission from './modules/permission'
import getter from "./getters"

Vue.use(Vuex)

// const { options:{routes} } = router
 
export default new Vuex.Store({
  modules:{post, user, permission},
  state: {
    menu_bars: [["文章","/postlist/all"], ["每日一P","/pixiv"],["搜索","/search"],["分类","/category"], ["关于我","/me"]],
  },
  getters:{
    ...getter,
  }
})
