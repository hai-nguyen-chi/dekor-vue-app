import { createWebHistory, createRouter } from 'vue-router'

import DashBoard from '@/views/dashboard/Dashboard.vue'
import Introduce from '@/views/introduce/Introduce.vue'
import Product from '@/views/product/Product.vue'
import News from '@/views/news/News.vue'
import Contact from '@/views/contact/Contact.vue'
import Page404 from '@/views/Page404/Page404.vue'
import Login from '@/views/login/Login.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: Page404,
    meta: {
      breadcrumbs: [
        {
          title: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          title: '404 Không tìm thấy trang',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      breadcrumbs: [
        {
          title: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          title: 'Đăng nhập tài khoản',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  { path: '/', component: DashBoard },
  {
    path: '/introduce',
    component: Introduce,
    meta: {
      breadcrumbs: [
        {
          title: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          title: 'Giới thiệu',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  {
    path: '/product',
    component: Product,
    meta: {
      breadcrumbs: [
        {
          title: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          title: 'Sản phẩm',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  {
    path: '/news',
    component: News,
    meta: {
      breadcrumbs: [
        {
          title: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          title: 'Tin tức',
          disabled: true,
          href: ''
        }
      ]
    }
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      breadcrumbs: [
        {
          title: 'Trang chủ',
          disabled: false,
          href: '/'
        },
        {
          title: 'Liên hệ',
          disabled: true,
          href: ''
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
