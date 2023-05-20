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
    <div class="products__title">{{ shopName }}</div>
    <div class="products__cart" v-for="(item, index) in cartItems" :key="index">
        <img :src="item.imgUrl" class="products__cart__img">
        <div class="products__cart__info">
        <div class="products__cart__name">{{ item.title }}</div>
        <div class="products__cart__price">&yen; {{ item.nowprice }} x {{ item.cnt }} <span class="total">&yen; {{ (item.nowprice*item.cnt).toFixed(2) }}</span></div>
      </div>
    </div>
  </div>
</div>
<div class="commit">
  <div class="commit__num">实付金额
    <span style="margin-left:.12rem; font-weight: 350; font-size: .18rem;">&yen;62</span>
  </div>
  <div class="commit__btn" @click="() => showMask=true">提交订单</div>
</div>
<div class="mask" v-show="showMask">
  <div class="mask__content">
    <div class="mask__content--1">确认要离开收银台？</div>
    <div class="mask__content--2">请尽快完成支付，否则将被取消</div>
    <div class="mask__content--3">
      <div class="mask__content__btn1" @click="cancelOrder">取消订单</div>
      <div class="mask__content__btn2" @click="confirmOrder">确认支付</div>
    </div>
  </div>
</div>
<Toast v-if="show" :message="toastMessage"/>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Toast, { useToastEffect } from '../../components/Toast.vue'
const useProductsEffect = () => {
  const shopId = useRoute().params.id
  const cartItems = useStore().state.cartList[shopId]
  const shopName = computed(() => {
    const shopName = useStore().state.shopName[shopId] || ''
    console.log(shopName)
    return shopName
  })
  return { cartItems, shopId, shopName }
}

const useCommitEffect = (store, shopId, showToast, router) => {
  const cancelOrder = () => {
    store.commit('cancelOrder', { shopId })
    showToast('订单已取消')
    router.push({ name: 'Home' })
  }
  const confirmOrder = () => {
    store.commit('confirmOrder', { shopId })
    showToast('订单已完成')
    router.push({ name: 'Home' })
  }
  return { confirmOrder, cancelOrder }
}
export default {
  name: 'orderConfirmation',
  components: { Toast },
  setup () {
    const showMask = ref(false)
    const store = useStore()
    const router = useRouter()
    const { show, toastMessage, showToast } = useToastEffect()
    const { cartItems, shopId, shopName } = useProductsEffect()
    const { confirmOrder, cancelOrder } = useCommitEffect(store, shopId, showToast, router)
    return { cartItems, shopId, shopName, showMask, confirmOrder, cancelOrder, show, toastMessage }
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
  border-radius: .04rem;
  overflow-y: scroll;
  overflow-x: hidden;
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
.commit {
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  padding-left: .24rem;
  height: .5rem;
  background-color: #FFF;
  &__num {
    width: 2.77rem;
    font-size: .16rem;
    font-weight: 250;
    color: #333;
    line-height: .49rem;
  }
  &__btn {
    flex: 1;
    background-color: #4FB0F9 ;
    color: #FFF;
    font-size: .14rem;
    text-align: center;
    line-height: .49rem;
  }
}
.mask {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.50);
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #FFF;
    width: 3rem;
    height: 1.56rem;
    border-radius: .04rem;
    &--1 {
      font-size: .2rem;
      font-weight: 200;
      margin-top: .24rem;
      text-align: center;
      margin-bottom: .08rem;
    }
    &--2 {
      font-size: .14rem;
      color: #666;
      text-align: center;
    }
    &--3 {
      margin: .2rem .6rem 0 .6rem;
      display: flex;
      font-size: .14rem;
    }
    &__btn1 {
      flex:1;
      color: #0091FF;
      border: .01rem solid #0091FF ;
      text-align: center;
      line-height: .32rem;
      width: .8rem;
      border-radius: .16rem;
      margin-right: .12rem;
    }
    &__btn2 {
      flex: 1;
      border-radius: .16rem;
      margin-left: .12rem;
      color: #FFF;
      background-color: #0091FF ;
      text-align: center;
      line-height: .32rem;
      width: .8rem;
    }
  }
}
</style>
