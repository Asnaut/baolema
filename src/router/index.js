// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import mSite from '../pages/mSite/mSite'
import search from '../pages/search/search'
import order from '../pages/order/order'
import profile from '../pages/profile/profile'
import login from '../pages/login/login'
// 插件
Vue.use(VueRouter)

export default new VueRouter(
  {
    routes: [
      {
        path: '/msite',
        component: mSite,
        meta:
        {
          showFooter: true
        }
      },
      {
        path: '/search',
        component: search,
        meta:
        {
          showFooter: true
        }
      },
      {
        path: '/order',
        component: order,
        meta:
        {
          showFooter: true
        }
      },
      {
        path: '/profile',
        component: profile,
        meta:
        {
          showFooter: true
        }
      },
      {
        path: '/',
        redirect: '/msite'
      },
      {
        path: '/login',
        component: login,
        meta:
        {
          showFooter: false
        }
      }
    ]
  }
)
