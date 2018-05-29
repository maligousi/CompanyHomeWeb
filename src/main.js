// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入lodash
import _ from 'lodash'
// import axios from 'axios'
// import axios from 'axios'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './store'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // auth manage

import 'element-ui/lib/theme-chalk/display.css'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
// 在Vue原型上挂载lodash
Object.defineProperty(Vue.prototype, '_', { value: _ })
// 在Vue原型定义所需的上传图片的url -- 用的特别多
Object.defineProperty(Vue.prototype, 'imgUpload', {
  value: 'http://comanyhome.tunnel.qydev.com/upload/img'
})
// Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
