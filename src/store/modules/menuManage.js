import { getAll, add, deleteMenu } from '@/api/menu'
import { Message } from 'element-ui'

const menuManage = {
  state: {
    list: '',
    subList: ''
  },
  mutations: {
    SUCCESS_GET_MENU_LIST(state, data) {
      state.list = data
    },
    SUCCESS_GET_SUBLIST(state, data) {
      state.subList = data
    }
  },
  actions: {
    // 获取所有菜单
    async getAllMenus({ commit }, payload) {
      const result = await getAll(payload.data)
      if (result.data.code === 0 && payload.data.parentId === 0) {
        commit('SUCCESS_GET_MENU_LIST', result.data.data)
      } else if (result.data.data.length === 0 && payload.data.parentId !== 0) {
        Message({
          message: '暂无子菜单',
          type: 'warning'
        })
      } else if (result.data.data.length !== 0 && payload.data.parentId !== 0) {
        commit('SUCCESS_GET_SUBLIST', result.data.data)
        payload.that.dialogVisible2 = true
      }
    },
    // 添加菜单
    async addMenu({ commit }, data) {
      const result = await add(data.payload)
      if (result.data.code === 0) {
        Message({
          message: '添加成功',
          type: 'success'
        })
        data.that.dialogVisible = false
        data.that.data = {
          menuName: '',
          allowDelete: false,
          delFlag: false,
          menuOrder: '',
          parentId: 0,
          hasChild: 0,
          id: 0
        }
        if (data.payload.parentId === 0) {
          data.that.init()
        }
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // 删除子菜单
    async deleteSpecMenu({ commit }, payload) {
      const result = await deleteMenu(payload.id)
      const refresh = {
        data: {
          parentId: payload.parentId
        }
      }
      if (result.data.code === 0) {
        Message({
          message: '删除成功',
          type: 'success'
        })
        payload.that.getAllMenus(refresh)
      } else {
        Message({
          message: result.data.msg,
          type: 'error'
        })
      }
    },
    // 获取所有菜单 --- > 通用版
    async getAllMenusCommon({ commit }, payload) {
      const result = await getAll(payload)
      if (result.data.code === 0 && payload.parentId === 0) {
        commit('SUCCESS_GET_MENU_LIST', result.data.data)
      } else if (result.data.data.length === 0 && payload.parentId !== 0) {
        Message({
          message: '暂无子菜单',
          type: 'warning'
        })
        commit('SUCCESS_GET_SUBLIST', '')
      } else if (result.data.data.length !== 0 && payload.parentId !== 0) {
        commit('SUCCESS_GET_SUBLIST', result.data.data)
      }
    }
  }
}

export default menuManage
