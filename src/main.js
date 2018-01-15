// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import Root from './layouts/default/index'

import ButtonBloom from './components/button-bloom/index'
import ButtonAddOne from './components/button-add-one/index'

Vue.config.productionTip = false

/**
* jQuery and Bootstrap includes
*/
window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
require('bootstrap')

Vue.component('button-bloom', ButtonBloom)
Vue.component('button-add-one', ButtonAddOne)

Vue.filter('currency', function (value) {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  template: '<Root />',
  components: { Root }
})
