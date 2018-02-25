import _ from 'lodash'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'

const mutations = {
  add (state, item) {
    let order = state.orders.find((order) => {
      return order.code === item.code
    })

    if (order === undefined) {
      item.amount = 1
      state.orders.push(item)
    } else {
      order.amount++
      let index = state.orders.indexOf(order)
      state.orders.splice(index, 1, order)
    }
  },
  remove (state) {
    state.orders = []
  },
  increase (state, code) {
    let order = state.orders.find((order) => {
      return order.code === code
    })

    if (order === undefined) {
      return
    }

    order.amount++
    let index = state.orders.indexOf(order)
    state.orders.splice(index, 1, order)
  },
  decrease (state, code) {
    let order = state.orders.find((order) => {
      return order.code === code
    })

    if (order === undefined) {
      return
    }

    order.amount--
    let index = state.orders.indexOf(order)

    if (order.amount === 0) {
      state.orders.splice(index, 1)
    } else {
      state.orders.splice(index, 1, order)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
