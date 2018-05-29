import { add, getList, deleteModule } from '@/api/homePageModule'
import { Message } from 'element-ui'

const homePageModule = {
  state: {
    list: '',
    item: ''
  },
  mutations: {
    SUCCESS_GET_LIST(state, data) {
      state.list = data
    },
    SET_SPECICAL_ITEM(state, data) {
      state.item = data
    }
  },
  actions: {
    // 添加首页模块
    async addNewModule({ commit }, data) {
      const result = await add(data.payload)
      if (result.data.code === 0) {
        data.router.push('/homePageModule/list')
      }
    },
    // 获取首页模块列表
    async getAllModule({ commit }) {
      const result = await getList()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_LIST', result.data.data)
      }
    },
    // 删除首页模块
    async deleteHomePageModule({ commit }, id) {
      const result = await deleteModule(id)
      if (result.data.code === 0) {
        Message({
          message: '成功删除',
          type: 'success'
        })
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    }
  }
}

export default homePageModule
