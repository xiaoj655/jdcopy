import { createStore } from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  if (!localStorage.cartList) {
    return {}
  } else {
    return JSON.parse(localStorage.cartList)
  }
}
export default createStore({
  state: {
    cartList: getLocalCartList(),
    shopName: {}
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
      setLocalCartList(state)
    },
    clearCart (state, payload) {
      const { shopId } = payload
      state.cartList[shopId] = {}
      setLocalCartList(state)
    },
    shiftSelectAll (state, payload) {
      const { shopId, selectAllOr } = payload
      for (const i in state.cartList[shopId]) {
        state.cartList[shopId][i].check = selectAllOr
      }
      setLocalCartList(state)
    },
    setShopName (state, payload) {
      const { res } = payload
      console.log(res.data)
      for (const i in res.data) {
        state.shopName[res.data[i]._id] = res.data[i].name
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
