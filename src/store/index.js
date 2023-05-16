import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {}
  },
  getters: {
  },
  mutations: {
    changePdtCnt (state, payload) {
      const { shopId, item, changePara } = payload
      if (!state.cartList?.[shopId]) {
        state.cartList[shopId] = {}
      }
      if (!state.cartList?.[shopId]?.[item.id]) {
        state.cartList[shopId][item.id] = item
        state.cartList[shopId][item.id].cnt = 0
        state.cartList[shopId][item.id].check = true
      }
      state.cartList[shopId][item.id].cnt += changePara
      if (state.cartList[shopId][item.id].cnt < 0) state.cartList[shopId][item.id].cnt = 0
    },
    clearCart (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
    },
    shiftSelectAll (state, payload) {
      const { shopId, selectAllOr } = payload
      for (const i in state.cartList[shopId]) {
        state.cartList[shopId][i].check = selectAllOr
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
