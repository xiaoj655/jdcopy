<template>
<div class="cart__wrapper">
  <div class="cart iconfont">
    &#xe61d;
    <div class="cart__amount">1</div>
  </div>
  <div class="price">
    总计：
    <span class="price__number">&yen;128</span>
  </div>
  <div class="commit">
    去结算
  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cart'
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
    line-height: .24rem;
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
