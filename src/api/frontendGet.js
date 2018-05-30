import axios from 'axios'
import apiConfig from '@/utils/apiConfig'
import { MessageBox } from 'element-ui'

const frontendGet = axios.create({
  baseURL: apiConfig.baseUrl,
  withCredentials: true,
  timeout: 5000
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  // }
})

frontendGet.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 999) {
      MessageBox.confirm(
        '你已被登出，可以取消继续留在该页面，或者重新登录',
        '确定登出',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        // store.dispatch('FedOut')
      })
    } else {
      return response
    }
  },
  error => {
    switch (error.response.status) {
      case 403:
        console.log(403)
        break
      case 404:
        console.log(404)
        break
      case 500:
        console.log(500)
        break
      default:
        MessageBox.alert('与服务器断开连接', '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        })
    }
    return Promise.reject(error)
  }
)

export default frontendGet
