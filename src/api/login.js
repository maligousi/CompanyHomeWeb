import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// login
export function login(data) {
  return request(apiConfig.login, 'post', data)
}
