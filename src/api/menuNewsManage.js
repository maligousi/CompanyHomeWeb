import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

export function getAllMenuType() {
  return request(apiConfig.getMenuType)
}

export function getMenusByMenuType(payload) {
  return request(apiConfig.getMenusByMenuType, 'get', payload)
}

export function bindNewsMenuAPI(payload) {
  return request(`${apiConfig.bindNewsMenu}/${payload}`, 'put')
}

export function submitNewsAPI(payload) {
  return request(apiConfig.submitNews, 'post', payload)
}

export function getAllNewsAPI() {
  return request(apiConfig.getAllNews)
}

export function deleteNewAPI(payload) {
  return request(`${apiConfig.deleteNew}/${payload}`, 'delete')
}
