import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

export function bindGoodsMenusAPI(payload) {
  return request(`${apiConfig.bindGoodsMenus}/${payload}`, 'put')
}

export function deleteGoodsMenusAPI(payload) {
  return request(`${apiConfig.deleteGoodsMenu}/${payload}`, 'delete')
}

export function getAllGoodsMenusAPI() {
  return request(apiConfig.getAllGoodsMenus)
}

export function postGoodsMenuAPI(payload) {
  return request(apiConfig.postGoodsMenu, 'post', payload)
}

export function getSpecMenuGoodsAPI(payload) {
  return request(apiConfig.getSpecMenuGoods, 'get', payload)
}

export function deleteSpecMenuGoodAPI(payload) {
  return request(`${apiConfig.deleteSpecMenuGood}/${payload}`, 'delete')
}

export function postSpecMenuAPI(payload) {
  return request(apiConfig.postSpecMenuGood, 'post', payload)
}
