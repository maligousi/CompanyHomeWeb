import request from '@/utils/request'
import apiConfig from '@/utils/apiConfig'

// 添加轮播图item
export function add(data) {
  return request(apiConfig.addSlideshow, 'post', data)
}

// 拉去轮播图list
export function list() {
  return request(apiConfig.slideshowList)
}

// 删除轮播图item
export function deleteItem(id) {
  return request(`${apiConfig.deleteSlideshowItem}/${id}`, 'delete')
}

// 编辑轮播图item
export function editItem(id, data) {
  return request(`${apiConfig.editSlideshowItem}/${id}`, 'put', data)
}
