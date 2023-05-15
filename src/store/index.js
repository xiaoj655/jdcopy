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
      if (!state.cartList?.[shopId]) { state.cartList[shopId] = {} }
      if (!state.cartList?.[shopId]?.[item.id]) {
        state.cartList[shopId][item.id] = item
        state.cartList[shopId][item.id].cnt = 0
      }
      state.cartList[shopId][item.id].cnt += changePara
      if (state.cartList[shopId][item.id].cnt < 0) state.cartList[shopId][item.id].cnt = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
