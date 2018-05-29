import {
  getFrontendLogoAPI,
  getFrontendMenusAPI
} from '@/api/frontend'

const frontend = {
  state: {
    logo: '',
    menu: '',
    newsCont: ''
  },
  mutations: {
    SUCCESS_GET_FRONTEND_LOGO(state, data) {
      state.logo = data
    },
    SUCCESS_GET_FRONTEND_MENUS(state, data) {
      state.menu = data
    },
    changeNewsCont(state, data) {
      state.newsCont = data
    }
  },
  actions: {
    // 获取官网logo
    async getFrontendLogo({ commit }) {
      const result = await getFrontendLogoAPI()
      console.log('logo:', result.data)
      if (result.data.code === 0) {
        commit('SUCCESS_GET_FRONTEND_LOGO', result.data.data)
      }
    },
    // 获取官网菜单
    async getFrontendMenus({ commit }) {
      const result = await getFrontendMenusAPI()
      console.log('menus:', result.data)
      if (result.data.code === 0) {
        commit('SUCCESS_GET_FRONTEND_MENUS', result.data.data)
      }
    },
    // 新闻详情的内容
    AchangeNewsCont({ commit }, payload) {
      commit('changeNewsCont', payload)
    }
  }
}

export default frontend
