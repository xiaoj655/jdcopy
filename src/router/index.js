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
