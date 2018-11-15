import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router"
import post from './modules/post'
import user from './modules/user'
import permission from './modules/permission'
import getter from "./getters"
Vue.use(Vuex)

const { options:{routes} } = router

export default new Vuex.Store({
  modules:{post, user, permission},
  state: {
    menu: [["文章","/postlist"], ["每日一P","/pixiv"], ["编辑",'/editor'], ["登录","/login"], ["关于我","/me"]],
  },
  getters:{
    ...getter,
    menu_bars(state){
      return state.menu.filter(element=>routes.some(route=>element[1] === route.path))
    }
  }
})
