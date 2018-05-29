import { add, getAll, deleteItem } from '@/api/textAndImageManage'
import { Message } from 'element-ui'

const textAndImageManage = {
  state: {
    list: ''
  },
  mutations: {
    SUCCESS_GET_TEXT_AND_IMAGE_LIST(state, data) {
      state.list = data
    }
  },
  actions: {
    // add
    async addTextAndImageModule({ commit }, payload) {
      const result = await add(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // get all list
    async getTextAndImageModules({ commit }) {
      const result = await getAll()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_TEXT_AND_IMAGE_LIST', result.data.data)
      }
    },
    // delete item
    async deleteTextAndImageModule({ commit }, payload) {
      const result = await deleteItem(payload.id)
      if (result.data.code === 0) {
        Message({
          message: '成功删除',
          type: 'success'
        })
        payload.that.getTextAndImageModules()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    }
  }
}

export default textAndImageManage
