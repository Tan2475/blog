import axios from 'axios'

const APP_ROOT = 'http://tanhexo.cn:88/' //生产环境url
const APP_ROOT_DEV = 'http://localhost:88/' //本地环境rul
const baseURL = process.env.NODE_ENV === 'development' ? APP_ROOT_DEV : APP_ROOT
export default axios.create({
  baseURL,
  // withCredentials: true,
})
