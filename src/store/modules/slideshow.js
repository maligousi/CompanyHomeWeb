import { add, list, deleteItem, editItem } from '@/api/slideshow'

const slideshow = {
  state: {
    slideshowList: '',
    isAdd: false,
    isDelete: false,
    isEdit: false,
    errorMsg: ''
  },
  mutations: {
    SET_NEW_LIST(state, data) {
      state.slideshowList = data
    },
    SUCCESS_ADD(state) {
      state.isAdd = true
    },
    SUCCESS_DELETE(state) {
      state.isDelete = true
    },
    SUCCESS_EDIT(state) {
      state.isEdit = true
    },
    FAILD_EDIT(state, data) {
      state.errorMsg = data
    }
  },
  actions: {
    // 添加轮播图
    async addSlideshow({ commit }, data) {
      const result = await add(data)
      if (result.data.code === 0) {
        commit('SUCCESS_ADD')
      }
    },
    // 拉去轮播图列表
    async getSlideshowList({ commit }) {
      const result = await list()
      if (result.data.code === 0) {
        commit('SET_NEW_LIST', result.data.data)
      }
    },
    // 删除轮播图item
    async deleteSlideshowItemVuex({ commit }, id) {
      const result = await deleteItem(id)
      if (result.data.code === 0) {
        commit('SUCCESS_DELETE')
      }
    },
    // 编辑轮播图item
    async editSlideshowItemVuex({ commit }, data) {
      const id = data.id
      delete data.id
      const result = await editItem(id, data)
      if (result.data.code === 0) {
        commit('SUCCESS_EDIT')
      } else {
        commit('FAILD_EDIT', result.data.msg)
      }
    }
  }
}

export default slideshow
