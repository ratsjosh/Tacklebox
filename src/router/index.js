import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CannotBeFound from '@/components/CannotBeFound'

Vue.use(Router)

export default new Router({
  base: '/Tacklebox',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      name: 'CannotBeFound',
      component: CannotBeFound,
    },
  ],
})
