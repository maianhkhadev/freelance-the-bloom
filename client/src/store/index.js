import Vue from 'vue'
import Vuex from 'vuex'

import basket from './basket'
import combos from './combos'
import products from './products'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    basket,
    combos,
    products
  }
})

export default store
