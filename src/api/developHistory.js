import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

export function bindDevelopHistorysMenuAPI(payload) {
  return request(`${apiConfig.bindDevelopHistorysMenu}/${payload}`, 'put')
}

export function addDevelopHistoryAPI(payload) {
  return request(apiConfig.postDevelopHistory, 'post', payload)
}

export function getAllDevelopHistorysAPI() {
  return request(apiConfig.getDevelopHistorys)
}

export function deleteDevelopHistoryAPI(payload) {
  return request(`${apiConfig.deleteDevelopHistory}/${payload}`, 'delete')
}
