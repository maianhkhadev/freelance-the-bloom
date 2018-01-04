// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* jQuery includes */
window.$ = window.jQuery = require('jquery')

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  router,
  template: '<Root />',
  components: { Root }
})
