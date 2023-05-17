<template>
  <div class="mask" v-if="showCartList" @click="() => showCartList = !showCartList"></div>
  <div class="product" v-if="showCartList">
    <div class="product__header">
      <div class="product__header__right"><span class="selectall iconfont"
        v-html="selectAllOr ? '&#xe60b;' : '&#xe80c;'"
        @click="() => shiftSelectAll(shopId, selectAllOr)"></span><span class="fontsize:.14rem;">全选</span></div>
      <div class="product__header__left"><span class="text1" @click="() => clearCart(shopId,selectAllOr)">清空购物车</span></div>
    </div>
    <div class="product__one" v-for="(item,index) in productItem" :key="index">
      <div
      class="product__one__checkbox iconfont">
      <span class="iconfont checkicon"
      v-html="item.check ? '&#xe60b;' : '&#xe80c;'"
      @click="()=> item.check = !item.check"
      ></span>
      </div>
      <img src="https://img.zcool.cn/community/0311d035682a5e40000018b8e50fb19.jpg?x-oss-process=image/resize,m_fill,w_260,h_195,limit_1/auto-orient,1/sharpen,100/quality,q_80/format,webp" class="product__one__img"/>
      <div class="product__one__details">
        <h4 class="product__title">{{ item.title }}</h4>
        <div class="product__price">
          <div class="product__price__now">&yen;<span class="product__price__now__number">{{ item.nowprice }}</span></div>
          <div class="product__price__origin">&yen;{{ item.oldprice }}</div>
        </div>
        <div class="product__amounts">
          <span class="product__amounts__mins" @click="() => changgeItemCounts(shopId, item, -1)">-</span>
          <span class="product__amounts__number">{{ item.cnt || 0 }}</span>
          <span class="product__amounts__plus" @click="() => changgeItemCounts(shopId, item, 1)">+</span>
        </div>
      </div>
    </div>
  </div>
<div class="cart__wrapper" @click="() => showCartList = !showCartList">
  <div class="cart iconfont" >
    &#xe61d;
    <div class="cart__amount">{{ accounts }}</div>
  </div>
  <div class="price">
    总计：
    <span class="price__number">&yen; {{ itemTotal }}</span>
  </div>
  <div class="commit">
    <router-link :to="{ name: 'Home' }" style="text-decoration: none; color: #FFF;">
    去结算
    </router-link>
  </div>
</div>
</template>

<script>
import { useCartEffect } from '@/effects/changeCartcntsEffects'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const itemTotal = computed(() => {
  const store = useStore()
  const route = useRoute()
  // console.log(store)
  const cartList = store.state.cartList
  let itemTotal = 0
  if (cartList?.[route.params.id]) {
    for (const i in cartList[route.params.id]) {
      if (cartList[route.params.id][i].check) {
        itemTotal += cartList[route.params.id][i].cnt * cartList[route.params.id][i].nowprice
      }
    }
  }
  return itemTotal.toFixed(2)
})
const selectAllOr = computed(() => {
  const store = useStore()
  const route = useRoute()
  // const cartList = store.state.cartList
  for (const i in store.state.cartList[route.params.id]) {
    if (!store.state.cartList[route.params.id][i].check) return false
  }
  return true
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

const useProductEffect = () => {
  const store = useStore()
  const route = useRoute()
  const productItem = computed(() => {
    const cartList = store.state.cartList
    const productItem = cartList?.[route.params.id] || {}
    const notEmptyList = {}
    for (const i in productItem) {
      if (productItem[i].cnt !== 0) {
        notEmptyList[i] = productItem[i]
      }
    }
    return notEmptyList
  })
  return { productItem }
}

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart',
  setup () {
    const shopId = useRoute().params.id
    const showCartList = ref(false)
    const { productItem } = useProductEffect()
    const { cartList, changgeItemCounts, shiftSelectAll, clearCart } = useCartEffect()
    return { itemTotal, accounts, productItem, cartList, changgeItemCounts, shiftSelectAll, clearCart, shopId, selectAllOr, showCartList }
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
  z-index: 2;
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
  z-index: 2;
  background-color: #FFF;
  &__amount {
    position: absolute;
    padding: 0;
    top: 0rem;
    right: .04rem;
    line-height: .18rem;
    font-size: .16rem;
    height: .2rem;
    min-width: .2rem;
    transform: scale(.5);
    color: #FFF;
    background: #E93B3B;
    border-radius: .1rem;
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
.product {
  flex:1;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #FFF;
  z-index: 2;
  position: absolute;
  bottom: .5rem;
  right: 0;
  left: 0;
    &__one {
      display: flex;
      position: relative;
      height: .92rem;
      width: 100%;
      // padding: 0 .16rem;
      border-bottom: 1px solid #F1F1F1;
      color: #0091FF;
      &__img {
        height: .5rem;
        width: .5rem;
        margin-top: .25rem;
        margin-right: .14rem;
      }
      &__checkbox {
        width: .54rem;
      }
    }
    &__title {
      font-size: .14rem;
      margin: .3rem 0 .08rem 0;
      color: #333;
    }
    &__sales {
      font-size: .12rem;
      color: #333;
      line-height: .16rem;
      margin-bottom: .1rem;
    }
    &__price {
      &__now {
        color:#E93B3B ;
        font-size: .12rem;
        display: inline-block;
        margin-right: .12rem;
        &__number {
          font-size: .16rem;
        }
      }
      &__origin {
        display: inline-block;
        font-size: .12rem;
        color: #999;
        text-decoration: line-through;
      }
    }
    &__amounts {
      // background-color: #333;
      position: absolute;
      right: .3rem;
      bottom: .35rem;
      &__mins, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        font-size: .3rem;
        text-align: center;
      }
      &__mins {
        box-sizing: border-box;
        border-radius: 50%;
        line-height: .16rem;
        margin-right: .1rem;
        color: #666;
        border: 1px solid #666;
      }
      &__plus {
        color: #FFF;
        line-height: .2rem;
        background-color: #0091FF;
        border-radius: 50%;
        margin-left: .1rem;
      }
      &__number {
        position: relative;
        top: -.02rem;
        font-size: .16rem;
        color: #333;
        line-height: .16rem;
      }
    }
  }
.checkicon.iconfont {
  margin: 0 0 0 .18rem;
  font-size: .2rem;
  line-height: .92rem;
  text-align: center;
}
.product__header {
  display: flex;
  border-bottom:1px solid #F1F1F1 ;
  padding: 0;
  &__right {
    width: .8rem;
    text-align: center;
    line-height: .5rem;
  }
  &__left {
    flex:1;
    position: relative;
    line-height: .5rem;
  }
}
.selectall {
  padding: 0;
  margin-left: .1rem;
  // margin-top: .3rem;
  vertical-align: top;
  position: relative;
  bottom: -.02rem;
  margin-right: .12rem;
  font-size: .2rem;
  color: #0091FF;
}
.text1 {
  position: absolute;
  right: .2rem;
  font-size: .14rem;
  color: #333;
}
.mask {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0, .5);
  z-index: 1;
}
</style>
