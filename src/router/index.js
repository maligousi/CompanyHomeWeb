// route file; use lazy load
import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/views/backend/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/frontend/index'),
    hidden: true,
    name: 'offcial',
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/frontend/homePage/index')
      },
      {
        path: 'xilie/:name',
        name: 'xilie',
        component: () => import('@/views/frontend/xilie/index')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/frontend/about/history')
      },
      {
        path: 'concept',
        name: 'concept',
        component: () => import('@/views/frontend/about/concept')
      },
      {
        path: 'text/:name',
        name: 'text',
        component: () => import('@/views/frontend/about/text')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/frontend/about/news')
      },
      {
        path: 'mark',
        name: 'mark',
        component: () => import('@/views/frontend/about/mark')
      },
      {
        path: 'images/:name',
        name: 'images',
        component: () => import('@/views/frontend/about/images')
      },
      {
        path: 'newMore',
        name: 'newMore',
        component: () => import('@/views/frontend/about/newMore')
      },
      {
        path: 'productDetail/:name',
        name: 'productDetail',
        component: () => import('@/views/frontend/about/details')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/backend/login/login')
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/backend',
    component: Layout,
    // redirect: '/backend/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/backend/dashboard/index')
      }
    ]
  },
  {
    path: '/officalWebsiteManger',
    component: Layout,
    redirect: '/officalWebsiteManger/slideshow',
    name: 'officalWebsiteManger',
    meta: { title: '官网装修', icon: 'officalWebsiteManger' },
    children: [
      {
        path: 'slideshow',
        name: '轮播图管理',
        component: () => import('@/views/backend/slideshow/index'),
        meta: { title: '轮播图管理', icon: 'slideshow' }
      },
      {
        path: 'logoManage',
        name: '首页Logo管理',
        component: () => import('@/views/backend/officalWebsiteLogo/index'),
        meta: { title: '首页Logo管理', icon: 'logoManage' }
      },
      {
        path: '/homePageModule',
        name: '首页模块管理',
        component: () => import('@/views/backend/homePageModule/index'),
        meta: { title: '首页模块管理', icon: 'homePageModule' },
        children: [
          {
            path: 'list',
            name: '首页模块列表',
            component: () => import('@/views/backend/homePageModule/list'),
            meta: { title: '首页模块列表', icon: 'list' }
          },
          {
            path: 'add',
            name: '首页模块增加',
            component: () => import('@/views/backend/homePageModule/add'),
            meta: { title: '首页模块新增', icon: 'add' }
          }
        ]
      },
      {
        path: 'menuManage',
        name: '首页菜单管理',
        component: () => import('@/views/backend/menuManage/index'),
        meta: { title: '首页菜单管理', icon: 'menu' }
      },
      {
        path: 'homePageRecommendGoods',
        name: '首页推荐商品模块管理',
        component: () => import('@/views/backend/homePageRecommendGoods/index'),
        meta: { title: '首页推荐商品模块管理', icon: 'manage' }
      },
      {
        path: '/menuContentManage',
        name: '菜单内容绑定管理',
        component: () => import('@/views/backend/textAndImageManage/index'),
        meta: { title: '菜单内容绑定管理', icon: 'manage' },
        children: [
          {
            path: 'textAndImageList',
            name: '图片/文本列表',
            component: () => import('@/views/backend/textAndImageManage/list'),
            meta: { title: '图片/文本列表', icon: 'list' }
          },
          {
            path: 'textAndImageAdd',
            name: '图片/文本添加',
            component: () => import('@/views/backend/textAndImageManage/add'),
            meta: { title: '图片/文本添加', icon: 'add' }
          },
          {
            path: 'newsList',
            name: '新闻列表',
            component: () => import('@/views/backend/menuNewsManage/list'),
            meta: { title: '新闻列表', icon: 'list' }
          },
          {
            path: 'newsAdd',
            name: '新闻添加',
            component: () => import('@/views/backend/menuNewsManage/add'),
            meta: { title: '新闻添加', icon: 'add' }
          },
          {
            path: 'developHistoryList',
            name: '发展史列表',
            component: () => import('@/views/backend/developHistory/list'),
            meta: { title: '发展史列表', icon: 'list' }
          },
          {
            path: 'developHistoryAdd',
            name: '发展史添加',
            component: () => import('@/views/backend/developHistory/add'),
            meta: { title: '发展史添加', icon: 'add' }
          },
          {
            path: 'menuGoodsCategoryList',
            name: '商品分类列表',
            component: () =>
              import('@/views/backend/menuGoodsCategoryManage/list'),
            meta: { title: '商品分类列表', icon: 'list' }
          },
          {
            path: 'menuGoodsCategoryAdd',
            name: '商品分类添加',
            component: () =>
              import('@/views/backend/menuGoodsCategoryManage/add'),
            meta: { title: '商品分类添加', icon: 'add' }
          },
          {
            path: 'menuGoodsConetent',
            name: '商品分类列表详情',
            hidden: true,
            component: () =>
              import('@/views/backend/menuGoodsContentManage/list'),
            meta: { title: '商品分类列表详情', icon: 'list' }
          },
          {
            path: 'menuGoodsContentAdd',
            name: '商品分类详情添加',
            hidden: true,
            component: () =>
              import('@/views/backend/menuGoodsContentManage/add'),
            meta: { title: '商品分类详情添加', icon: 'add' }
          }
        ]
      }
    ]
  }
]
export default new Router({
  routes: constantRouterMap
})
