import {
  postGoodsMenuAPI,
  bindGoodsMenusAPI,
  getAllGoodsMenusAPI,
  deleteGoodsMenusAPI,
  postSpecMenuAPI,
  getSpecMenuGoodsAPI,
  deleteSpecMenuGoodAPI
} from '@/api/menuGoodsManage'
import { Message } from 'element-ui'

const menuGoodsManage = {
  state: {
    list: '',
    specList: ''
  },
  mutations: {
    SUCCESS_GET_ALL_GOODS_MENUS(state, data) {
      state.list = data
    },
    SUCCESS_GET_SPEC_MENU_GOODS(state, data) {
      state.specList = data
    }
  },
  actions: {
    // post category
    async postGoodsMenu({ commit }, payload) {
      const result = await postGoodsMenuAPI(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
        payload.that.$router.push('/menuContentManage/menuGoodsCategoryList')
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // bind
    async bindGoodsMenu({ commit }, payload) {
      const result = await bindGoodsMenusAPI(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '绑定成功',
          type: 'success'
        })
        payload.that.init()
      } else {
        Message({
          message: '绑定失败',
          type: 'error'
        })
      }
    },
    // get all category
    async getAllGoodsMenu({ commit }) {
      const result = await getAllGoodsMenusAPI()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_ALL_GOODS_MENUS', result.data.data)
      }
    },
    // delete category
    async deleteGoodsMenus({ commit }, payload) {
      const result = await deleteGoodsMenusAPI(payload.id)
      if (result.data.code === 0) {
        Message({
          message: '删除成功',
          type: 'success'
        })
        payload.that.getAllGoodsMenu()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // post spec menu good
    async postSpecMenuGood({ commit }, payload) {
      const result = await postSpecMenuAPI(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
        payload.that.$router.push({
          path: '/menuContentManage/menuGoodsConetent',
          query: { Category: payload.data.categoryId }
        })
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // get all spec menu goods
    async getSpecMenuGoods({ commit }, payload) {
      const result = await getSpecMenuGoodsAPI(payload)
      if (result.data.code === 0) {
        commit('SUCCESS_GET_SPEC_MENU_GOODS', result.data.data)
      }
    },
    // delete spec menu good
    async deleteSpecMenuGood({ commit }, payload) {
      const result = await deleteSpecMenuGoodAPI(payload.id)
      if (result.data.code === 0) {
        Message({
          message: '删除成功',
          type: 'success'
        })
        payload.that.init()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    }
  }
}

export default menuGoodsManage
