import { stringify } from 'qs'
import api from './index.js'

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
  
}