// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Reference: https://www.npmjs.com/package/vue-smooth-scroll
import vueSmoothScroll from 'vue-smooth-scroll'
import App from './App'
import router from './router'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
