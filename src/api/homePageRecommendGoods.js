import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// add
export function add(payload) {
  return request(apiConfig.addHomePageRecommendGoods, 'post', payload)
}

// get all
export function getAll() {
  return request(apiConfig.getAllHomePageRecommendGoods)
}

// edit
export function editSpec(id) {
  return request(`${apiConfig.deleteHomePageRecommendGoods}/${id}`, 'delete')
}
