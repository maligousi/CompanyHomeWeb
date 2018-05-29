import {
  bindDevelopHistorysMenuAPI,
  addDevelopHistoryAPI,
  getAllDevelopHistorysAPI,
  deleteDevelopHistoryAPI
} from '@/api/developHistory'
import { Message } from 'element-ui'

const developHistory = {
  state: {
    list: ''
  },
  mutations: {
    SUCCESS_GET_ALL_DEVELOP_HISTORYS(state, data) {
      state.list = data
    }
  },
  actions: {
    // bind
    async bindDevelopHistorysMenu({ commit }, payload) {
      const result = await bindDevelopHistorysMenuAPI(payload.data)
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
    // add
    async addDevelopHistory({ commit }, payload) {
      const result = await addDevelopHistoryAPI(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
        payload.that.$router.push('/menuContentManage/developHistoryList')
      } else {
        Message({
          message: '绑定失败',
          type: 'error'
        })
      }
    },
    // get all
    async getAllDevelopHistorys({ commit }) {
      const result = await getAllDevelopHistorysAPI()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_ALL_DEVELOP_HISTORYS', result.data.data)
      }
    },
    // delete
    async deleteDevelopHistory({ commit }, payload) {
      const result = await deleteDevelopHistoryAPI(payload.id)
      if (result.data.code === 0) {
        Message({
          message: '删除成功',
          type: 'success'
        })
        payload.that.getAllDevelopHistorys()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    }
  }
}

export default developHistory
