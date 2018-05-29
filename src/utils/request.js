import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '@/store/index'
import apiConfig from './apiConfig'

function fetch(url, method = 'get', data = {}) {
  // axios 实例化
  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
    withCredentials: true
  })

  // respone拦截器
  instance.interceptors.response.use((response) => {
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
        store.dispatch('FedOut')
      })
    } else {
      return response
    }
  })

  // 方法类型选择
  switch (method) {
    case 'get':
      return instance.get(url, { params: data })
    case 'post':
      return instance.post(url, data)
    case 'delete':
      return instance.delete(url)
    case 'put':
      return instance.put(url, data)
    default:
      return instance.get(url, { params: data })
  }
}

async function request(url, method = 'get', data = {}) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  const returnData = await fetch(url, method, data)
    .then((res) => {
      const x = res
      return x
    })
    .catch((err) => {
      const errs = err
      MessageBox.confirm(
        '你已被登出，可以取消继续留在该页面，或者重新登录',
        '确定登出',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('FedOut')
      })
      return errs
    })
  // console.log(returnData)
  return returnData
}

export default request
