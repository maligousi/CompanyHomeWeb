import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// 添加首页模块
export function add(data) {
  return request(apiConfig.addHomePageModule, 'post', data)
}

// 获取首页模块列表
export function getList() {
  return request(apiConfig.getHomePageModules)
}

// 删除首页模块
export function deleteModule(id) {
  return request(`${apiConfig.deleteHomePageModule}/${id}`, 'delete')
}
