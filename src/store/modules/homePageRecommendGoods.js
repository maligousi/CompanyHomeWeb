import { add, getAll, editSpec } from '@/api/homePageRecommendGoods'
import { Message } from 'element-ui'

const homePageRecommendGoods = {
  state: {
    list: ''
  },
  mutations: {
    SUCCESS_GET_HOME_PAGE_RECOMMEND_LIST(state, data) {
      state.list = data
    }
  },
  actions: {
    // add
    async addGoods({ commit }, payload) {
      const result = await add(payload.data)
      if (result.data.code === 0) {
        Message({
          message: '成功添加',
          type: 'success'
        })
        payload.that.dialogVisible = false
        payload.that.form = {
          prodOneName: '',
          prodOneDesc: '',
          referOneUrl: '',
          prodTwoName: '',
          prodTwoDesc: '',
          referTwoUrl: '',
          prodOneImgUrl: '',
          h5ProdOneImgUrl: '',
          prodTwoImgUrl: '',
          h5ProdTwoImgUrl: '',
          id: 0
        }
        payload.that.getHomePageRecommendGoods()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // get all
    async getHomePageRecommendGoods({ commit }) {
      const result = await getAll()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_HOME_PAGE_RECOMMEND_LIST', result.data.data)
      }
    },
    // delete
    async deleteHomePageRecommendGoods({ commit }, payload) {
      const result = await editSpec(payload.id)
      console.log(result)
      if (result.data.code === 0) {
        Message({
          message: '成功删除',
          type: 'success'
        })
        payload.that.dialogVisible = false
        payload.that.form = {
          prodOneName: '',
          prodOneDesc: '',
          referOneUrl: '',
          prodTwoName: '',
          prodTwoDesc: '',
          referTwoUrl: '',
          prodOneImgUrl: '',
          h5ProdOneImgUrl: '',
          prodTwoImgUrl: '',
          h5ProdTwoImgUrl: '',
          id: 0
        }
        payload.that.getHomePageRecommendGoods()
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    }
  }
}

export default homePageRecommendGoods
