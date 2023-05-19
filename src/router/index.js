import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/Home/Home.vue')
  },
  {
    path: '/shopinfo/:id',
    name: 'Shop-info',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/shop/Shop-info.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/login/Login.vue'),
    beforeEnter (to, from, next) {
      localStorage.isLogin ? next({ name: 'Home' }) : next()
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/register/Register.vue')
  },
  {
    path: '/usrinfo',
    name: 'Usrinfo',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/usrinfo/Usr-info.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/order/Order.vue')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/orderConfirmation/OrderConfirmation.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkNameL "home_123" */ '../views/cart/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === 'Login' || to.name === 'Register') {
    next()
  } else {
    next({ name: 'Login' })
  }
})

export default router
