import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// 获取官网顶部logo
export function getFrontendLogoAPI() {
  return request(apiConfig.frontendGetLogo)
}

// 获取官网菜单
export function getFrontendMenusAPI() {
  return request(`${apiConfig.getMenus}`)
}
