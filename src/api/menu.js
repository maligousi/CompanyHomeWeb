import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// get
export function getAll(payload) {
  return request(apiConfig.getAllMenu, 'get', payload)
}

// add
export function add(payload) {
  return request(apiConfig.addMenu, 'post', payload)
}

// delete

export function deleteMenu(payload) {
  return request(`${apiConfig.deleteMenu}/${payload}`, 'delete')
}
