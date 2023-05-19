<template>
<div class="wrapper">
  <div class="top">
    <div class="top__header">
      <router-link :to="{ path:`/shopinfo/${shopId}`}">
      <div class="top__back iconfont">&#xe662;</div>
      </router-link>
      <div class="top__back__text">确认订单</div>
    </div>
    <div class="usrinfo">
      <span style="font-size: .16rem; line-height: .22rem; display: block;">收货地址</span>
      <span class="usrinfo__receipt">北京理工大学国防科技园2号楼10层</span>
      <span class="usrinfo__name">王（先生）</span>
      <span class="usrinfo__phone">18911024266</span>
      <span class="usrinfo__back iconfont">&#xe662;</span>
    </div>
  </div>
  <div class="products">
    <div class="products__title">walmart</div>
    <div class="products__cart" v-for="(item, index) in cartItems" :key="index">
        <img :src="item.imgUrl" class="products__cart__img">
        <div class="products__cart__info">
        <div class="products__cart__name">{{ item.title }}</div>
        <div class="products__cart__price">&yen; {{ item.nowprice }} x {{ item.cnt }} <span class="total">&yen; {{ item.nowprice*item.cnt }}</span></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const useProductsEffect = () => {
  const shopId = useRoute().params.id
  const cartItems = useStore().state.cartList[shopId]
  return { cartItems, shopId }
}

export default {
  name: 'orderConfirmation',
  setup () {
    const { cartItems, shopId } = useProductsEffect()
    return { cartItems, shopId }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #F5F5F5;
}
.top {
  position: relative;
  height: 1.96rem;
  width: 100%;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);;
  background-size: 100% 1.59rem;
  background-repeat: no-repeat;
  padding-top: .3rem;
  &__header {
    position: relative;
    color: #FFF;
  }
  &__back {
    position: absolute;
    font-size: .3rem;
    left: .18rem;
    line-height: .24rem;
    top: -.05rem;
    &__text {
      text-align: center;
      font-size: .16rem;
    }
  }
}
.usrinfo {
  position: absolute;
  right: .18rem;
  left: .18rem;
  bottom: 0;
  padding: .16rem;
  height: 1.01rem;
  background: #FFF;
  border-radius: .04rem;
  &__receipt {
    margin-top: .18rem;
    margin-bottom: .1rem;
    font-size: .14rem;
    color: #333;
    display: block;
  }
  &__name {
    font-size: .14rem;
    color: #666;
    line-height: .18rem;
    display: inline-block;
    margin-right: .06rem;
  }
  &__phone {
    font-size: .14rem;
    color: #666;
    display: inline-block;
  }
  &__back {
    position: absolute;
    transform: rotate(180deg);
    right: .16rem;
    top: .55rem;
    color: #666;
    font-size: .24rem;
  }
}
.products {
  margin: .16rem .18rem .55rem .16rem;
  background-color: #FFF;
  padding: .16rem;
  &__title {
    font-size: .16rem;
    line-height: .22rem;
    margin-bottom: .16rem;
    font-weight: bold;
  }
  &__cart {
    display: flex;
    position: relative;
    margin: .2rem 0 .2rem 0;
    // &__one {
    //   margin: .1rem 0 .1rem 0;
    // }
    height: .52rem;
    &__img {
      width: .46rem;
      height: .46rem;
    }
    &__info {
      flex: 1;
      padding-left: .16rem;
    }
    &__name {
      font-size: .14rem;
      font-weight: 150;
      margin-bottom: .1rem;
    }
    &__price {
      position: absolute;
      color: #E93B3B;
      font-size: .14rem;
      bottom: 0;
      width: 80%;
      .total {
        // position: absolute;
        color:#000;
        float: right;
        font-size: .14rem;
        font-weight: 120;
      }
    }
  }
}
</style>
