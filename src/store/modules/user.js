import { login } from '@/api/login'
import { setAuthToken, getAuthToken } from '@/utils/auth'

const user = {
  state: {
    authRole: getAuthToken()
  },

  mutations: {},

  actions: {
    // login
    async Login({ commit }, context) {
      const result = await login(context.data)
      await setAuthToken('2')
      if (result.data.code === 0) {
        context.router.push('/backend/dashboard')
      }
    },
    // logout
    async LogOut({ commit }) {
      setAuthToken('1')
      location.reload()
    },
    // 前端退出
    async FedOut({ commit }) {
      setAuthToken('1')
      location.reload()
    }
  }
}

export default user
