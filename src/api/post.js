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
  // 搜索post
  search(params){
    return api.get(`/api/post/search?${stringify(params)}`)
  },
  // 获取文章类型
  category(){
    return api.get("/api/post/category")
  },
  // 获取指定类型文章
  postType(params){
    return api.get(`/api/post/${params}`)
  }
}