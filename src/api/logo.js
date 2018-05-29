import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// 获取logo
export function getOfficalWebsiteLogo() {
  return request(apiConfig.getOfficalWebsiteLogoBackend)
}

export function setOfficalWebsiteLogo(data) {
  return request(apiConfig.setOfficalWebsiteLogo, 'put', data)
}
