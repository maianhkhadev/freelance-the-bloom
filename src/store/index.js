import Vue from 'vue'
import Vuex from 'vuex'

import combos from './combos'
import products from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    combos,
    products
  }
})

export default store
