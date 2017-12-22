import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      redirect: { name: 'Home' },
    },
  ],
})
