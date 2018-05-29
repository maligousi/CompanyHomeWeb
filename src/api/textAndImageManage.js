import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// add
export function add(data) {
  return request(apiConfig.addTextAndImageModule, 'post', data)
}

// get list
export function getAll() {
  return request(apiConfig.getTextAndImageModules)
}

// delete
export function deleteItem(id) {
  return request(`${apiConfig.deleteTextAndImageModule}/${id}`, 'delete')
}
