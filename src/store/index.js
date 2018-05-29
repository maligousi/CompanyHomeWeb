import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import slideshow from './modules/slideshow'
import getters from './getters'
import logoManage from './modules/logoManage'
import permission from './modules/permission'
import homePageModule from './modules/homePageModule'
import menuManage from './modules/menuManage'
import homePageRecommendGoods from './modules/homePageRecommendGoods'
import textAndImageManage from './modules/textAndImageManage'
import menuNewsManage from './modules/menuNewsManage'
import developHistory from './modules/developHistory'
import menuGoodsManage from './modules/menuGoodsManage'
import frontend from './modules/frontend'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    slideshow,
    logoManage,
    permission,
    homePageModule,
    menuManage,
    homePageRecommendGoods,
    textAndImageManage,
    menuNewsManage,
    developHistory,
    menuGoodsManage,
    frontend
  },
  getters
})

export default store
