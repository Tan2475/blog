import axios from 'axios'
import { stringify } from 'qs'

const APP_ROOT = '/' //生产环境url
const APP_ROOT_DEV = 'http://localhost:88/' //本地环境rul
const baseURL = process.env.NODE_ENV === 'development' ? APP_ROOT_DEV : APP_ROOT
const api = axios.create({
  baseURL,
  // withCredentials: true,
})

export default {
  // 请求post列表
  postList(params){
    return api.get(`api/postlist?${stringify(params)}`)
  },
  // 请求post文章
  post(params){
    return api.get(`api/post?${stringify(params)}`)
  },
  // 上传post
  upLoad(params){
    return api.post('api/post', stringify(params))
  },
  // 获取用户信息
  user(){
    return api.get('api/user')
  },
  // 更改用户信息
  upSet(params){
    return api.post('api/user', stringify(params))
  }
  
}