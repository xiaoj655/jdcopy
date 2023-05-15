<template>
<div class="cart__wrapper">
  <div class="cart iconfont">
    &#xe61d;
    <div class="cart__amount">{{ accounts }}</div>
  </div>
  <div class="price">
    总计：
    <span class="price__number">&yen;{{ itemTotal }}</span>
  </div>
  <div class="commit">
    去结算
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const itemTotal = computed(() => {
  const store = useStore()
  const route = useRoute()
  const cartList = store.state.cartList
  let itemTotal = 0
  if (cartList?.[route.params.id]) {
    for (const i in cartList[route.params.id]) {
      itemTotal += cartList[route.params.id][i].cnt * cartList[route.params.id][i].nowprice
    }
  }
  return itemTotal
})

const accounts = computed(() => {
  const store = useStore()
  const route = useRoute()
  const cartList = store.state?.cartList?.[route.params.id]
  let accounts = 0
  if (cartList) {
    for (const i in cartList) {
      accounts += cartList[i].cnt
    }
  }
  return accounts
})

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  setup () {
    return { itemTotal, accounts }
  }
}
</script>

<style lang="scss" scoped>
.cart__wrapper {
  position: absolute;
  display: flex;
  padding: 0;
  bottom:0;
  right:0;
  left:0;
  background: #FFF;
}
.cart {
  position: relative;
  width: .52rem;
  height: .49rem;
  line-height: .49rem;
  text-align: center;
  font-size: .24rem;
  color: #4FB0F9 ;
  border-top: .01rem solid #FFF;
  &__amount {
    position: absolute;
    padding: 0;
    top: 0rem;
    right: .04rem;
    line-height: .18rem;
    font-size: .16rem;
    height: .2rem;
    width: .2rem;
    transform: scale(.5);
    color: #FFF;
    background: #E93B3B;
    border-radius: 50%;
  }
}
.price {
  flex: 1;
  line-height: .49rem;
  width: .76rem;
  margin-left: .32rem;
  font-size: .12rem;
  color: #333;
  &__number {
    color: #E93B3B;
    font-size: .18rem;
  }
}
.commit {
  width: .98rem;
  line-height: .49rem;
  background: #4FB0F9;
  color: #FFF;
  text-align: center;
  font-size: .14rem;
}
</style>
