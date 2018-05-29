import {
  getAllMenuType,
  getMenusByMenuType,
  bindNewsMenuAPI,
  submitNewsAPI,
  getAllNewsAPI,
  deleteNewAPI
} from '@/api/menuNewsManage'
import { Message } from 'element-ui'

const menuNewsManage = {
  state: {
    menuTypes: '',
    specMenus: '',
    newList: ''
  },
  mutations: {
    SUCCESS_GET_ALL_MENU_TYPES(state, data) {
      state.menuTypes = data
    },
    SUCCESS_GET_SPEC_MENUS_BY_MENU_TYPE(state, data) {
      state.specMenus = data
    },
    SUCCESS_GET_ALL_NEWS(state, data) {
      state.newList = data
    }
  },
  actions: {
    // get all menu type
    async getAllMenyType({ commit }) {
      const result = await getAllMenuType()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_ALL_MENU_TYPES', result.data.data)
      }
    },
    // get all menus by menu type
    async getAllMenusByMenusType({ commit }, payload) {
      const result = await getMenusByMenuType(payload)
      if (result.data.code === 0) {
        commit('SUCCESS_GET_SPEC_MENUS_BY_MENU_TYPE', result.data.data)
      }
    },
    // bind news module menu
    async bindNewsMenu({ commit }, payload) {
      const result = await bindNewsMenuAPI(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
        payload.that.init()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // submit news
    async submitNews({ commit }, payload) {
      const result = await submitNewsAPI(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
        payload.that.$router.push('/menuContentManage/newsList')
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // get all news
    async getAllNews({ commit }) {
      const result = await getAllNewsAPI()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_ALL_NEWS', result.data.data)
      }
    },
    // delete
    async deleteNew({ commit }, payload) {
      const result = await deleteNewAPI(payload.id)
      if (result.data.code === 0) {
        Message({
          message: '删除成功',
          type: 'success'
        })
        payload.that.getAllNews()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    }
  }
}

export default menuNewsManage
