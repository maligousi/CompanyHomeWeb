import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { getAuthToken } from '@/utils/auth' // 验权

const whiteList = ['/backend'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // if (getAuthToken() && getAuthToken() === '2') {
  //   if (to.path === '/login') {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next()
  //     NProgress.done()
  //   }
  // }
  if (to.path.indexOf(whiteList[0]) !== -1) {
    if (getAuthToken() && getAuthToken() === '2') {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
