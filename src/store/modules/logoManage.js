import { getOfficalWebsiteLogo, setOfficalWebsiteLogo } from '@/api/logo'

const logoManage = {
  state: {
    logo: '',
    isSet: false
  },
  mutations: {
    SUCCESS_GET_LOGO(state, data) {
      state.logo = data
    },
    SUCCESS_SET_LOGO(state) {
      state.isSet = true
    }
  },
  actions: {
    // 获取首页logo
    async getLogo({ commit }) {
      const result = await getOfficalWebsiteLogo()
      if (result.data.code === 0) {
        commit('SUCCESS_GET_LOGO', result.data.data)
      }
    },
    // 设置首页logo
    async setLogo({ commit }, data) {
      const result = await setOfficalWebsiteLogo(data)
      console.log(result)
      if (result.data.code === 0) {
        commit('SUCCESS_SET_LOGO')
      }
    }
  }
}

export default logoManage
