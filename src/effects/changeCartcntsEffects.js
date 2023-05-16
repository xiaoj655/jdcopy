import { useStore } from 'vuex'
import { toRefs } from 'vue'

export const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changgeItemCounts = (shopId, item, changePara) => {
    store.commit('changePdtCnt', {
      shopId, item, changePara
    })
  }
  const shiftSelectAll = (shopId, selectAllOr) => {
    selectAllOr = !selectAllOr
    store.commit('shiftSelectAll', { shopId, selectAllOr })
  }
  const clearCart = (shopId) => {
    store.commit('clearCart', { shopId })
  }
  return { cartList, changgeItemCounts, shiftSelectAll, clearCart }
}
