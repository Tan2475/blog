/*
 * @Author: tanbin
 * @Date: 2018-11-15 10:47:13
 * @LastEditTime: 2018-11-15 11:32:19
 */

import { stringify } from 'qs'
import api from './index.js'

export default {
  /**
   * @msg:获取个人简介 
   * @param {} 
   * @return: userPost
   */
  userPost(){
    return api.get('api/user/profile')
  },
  
  /**
   * @msg: 更新个人简介
   * @param {object} 
   * @return: 
   */
  setUserPost(params){
    return api.post('api/user/profile', stringify(params))
  },

  /**
   * @msg: 获取token
   * @param {object} 
   */
  loginByUsername(params){
    return api.post('api/user/login', stringify(params))
  },

  /**
   * @msg: 获取用户信息，roles
   * @param {type} 
   * @return: 
   */
  getUserInfo(params){
    return api.post('api/user/Info', stringify(params))    
  }

}
